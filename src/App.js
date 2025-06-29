import React, { useState, useEffect } from 'react';
import './App.css';
import MainApp from './MainApp';
import Login from './components/Login/Login';
import Spotify from './spotifyService';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
  
    if (accessToken) {
      setToken(accessToken);
      Spotify.setAccessToken(accessToken);
      sessionStorage.setItem('spotify_token', accessToken); // ← speichern
      window.history.pushState("", document.title, window.location.pathname);
    } else {
      // Token aus Session laden (z. B. beim Refresh)
      const savedToken = sessionStorage.getItem('spotify_token');
      if (savedToken) {
        setToken(savedToken);
        Spotify.setAccessToken(savedToken);
      }
    }
  }, []);
  

  return (
    <div className="App">
      {/* Nur wenn Token vorhanden ist, wird MainApp gerendert */}
      {token ? <MainApp /> : <Login />}
    </div>
  );
}

export default App;
