// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './spotifyService';

function App() {
  // Zustände für Suchergebnisse, Playlist-Name und Playlist-Tracks
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Suchfunktion: Ruft die Spotify.search()-Methode auf und aktualisiert den State mit den Ergebnissen
  const handleSearch = (term) => {
    Spotify.search(term).then(tracks => {
      setSearchResults(tracks);
    });
  };

  // Einen Track zur Playlist hinzufügen (verhindert doppelte Einträge)
  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };

  // Einen Track aus der Playlist entfernen
  const removeTrack = (track) => {
    setPlaylistTracks(prevTracks =>
      prevTracks.filter(currentTrack => currentTrack.id !== track.id)
    );
  };

  // Speichert die Playlist bei Spotify mithilfe der savePlaylist()-Methode
  const handleSavePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      // Nach erfolgreichem Speichern: State zurücksetzen und eine Erfolgsmeldung anzeigen
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
      alert('Playlist erfolgreich gespeichert!');
    });
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      {/* Übergibt die handleSearch-Funktion an die SearchBar */}
      <SearchBar onSearch={handleSearch} />
      <div className="App-playlist">
        {/* Suchergebnisse werden in SearchResults angezeigt und jeder Track kann zur Playlist hinzugefügt werden */}
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        {/* Playlist-Komponente erhält den aktuellen Playlist-Namen, die Tracks und Funktionen zum Entfernen/Speichern */}
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={setPlaylistName}
          onRemove={removeTrack}
          onSave={handleSavePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
