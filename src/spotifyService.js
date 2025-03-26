// src/spotifyService.js
const clientId = '202753dde01e42b0a8f0ba075bf62b5e';
const redirectUri = 'http://localhost:3000/'; // oder deine echte URL
const scopes = 'playlist-modify-public playlist-modify-private';

let accessToken;
let expiresIn;

const Spotify = {
  getAccessToken() {
    // 1) Falls wir schon ein Token haben, geben wir es zurück
    if (accessToken) {
      return accessToken;
    }

    // 2) Falls wir im URL-Hash ein Token finden, extrahieren wir es
    const hash = window.location.hash; // Bsp: "#access_token=XYZ&token_type=Bearer&expires_in=3600"
    if (hash) {
      const hashParams = new URLSearchParams(hash.substring(1)); // substring(1) entfernt das "#"
      accessToken = hashParams.get('access_token');
      expiresIn = Number(hashParams.get('expires_in'));

      // Token nach Ablauf entfernen
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);

      // Damit die URL nicht dauerhaft das Token anzeigt, entfernen wir den Hash
      window.history.pushState({}, null, '/');

      return accessToken;
    }

    // 3) Wenn wir hier sind, haben wir kein Token -> Nutzer zur Spotify-Login-Seite umleiten
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location = authUrl;
  },

  // Beispiel-Funktion: Suche nach Tracks
  search(term) {
    const token = this.getAccessToken(); // Stellt sicher, dass wir ein Token haben
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
  },

  // Beispiel-Funktion: Neue Playlist anlegen und Tracks hinzufügen
  savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) {
      return;
    }

    const token = this.getAccessToken();
    let userId;

    // 1) User-ID abrufen
    return fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        userId = jsonResponse.id;

        // 2) Neue Playlist erstellen
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: playlistName })
        });
      })
      .then(response => response.json())
      .then(jsonResponse => {
        const playlistId = jsonResponse.id;

        // 3) Tracks hinzufügen
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ uris: trackUris })
        });
      });
  }
};

export default Spotify;
