import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist() {
  return (
    <div className="Playlist">
      <h2>New Playlist</h2>
      {/* TrackList für die Playlist */}
      <TrackList />

      <input defaultValue="New Playlist" />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
