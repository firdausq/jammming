// src/components/TrackList/TrackList.js
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function TrackList({ tracks, onAdd, onRemove }) {
  return (
    <div className="TrackList">
      {tracks.map(track => (
        <Track
          key={track.id}        // Wichtig: Eindeutiger Schlüssel für jedes Element
          track={track}         // Übergibt die Daten des einzelnen Tracks
          onAdd={onAdd}         // Callback, falls der Track hinzugefügt werden soll
          onRemove={onRemove}   // Callback, falls der Track entfernt werden soll
        />
      ))}
    </div>
  );
}

export default TrackList;
