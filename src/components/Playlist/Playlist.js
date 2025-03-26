// src/components/Playlist/Playlist.js
import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks, onNameChange, onRemove, onSave }) {
  // Handler, um den Playlist-Namen zu aktualisieren
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input 
        value={playlistName}
        onChange={handleNameChange}
      />
      {/* Übergibt die Playlist-Tracks und die Funktion zum Entfernen an die TrackList */}
      <TrackList tracks={playlistTracks} onRemove={onRemove} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
