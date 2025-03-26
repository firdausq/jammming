// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import MainApp from './MainApp'; // Die eigentliche App, die vorherige Funktionalität enthält
import Login from './components/Login/Login';
import Spotify from './spotifyService';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      if (accessToken) {
        setToken(accessToken);
        Spotify.setAccessToken(accessToken); // <--- Wichtig!
        window.history.pushState("", document.title, window.location.pathname);
      }
    }
  }, []);
  

  return (
    <div className="App">
      {token ? <MainApp token={token} /> : <Login />}
    </div>
  );
}

export default App;
