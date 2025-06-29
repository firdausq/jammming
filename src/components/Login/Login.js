import React from 'react';
import './Login.css';
import Spotify from '../../spotifyService';

function Login() {
  const handleLogin = () => {
    // Leitet den Benutzer zur Spotify-Authentifizierung weiter
    Spotify.login();
  };

  return (
    <div className="Login">
      <h1>Welcome to Ja<span className="highlight">mmm</span>ing</h1>
      <button onClick={handleLogin} className='Login-Button'>Login with Spotify</button>
    </div>
  );
}

export default Login;
