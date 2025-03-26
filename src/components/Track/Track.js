// src/components/Track/Track.js
import React from 'react';
import './Track.css';

function Track({ track, onAdd, onRemove }) {
  // Ruft den entsprechenden Callback mit den Track-Daten auf
  const addTrack = () => {
    if (onAdd) {
      onAdd(track);
    }
  };

  const removeTrack = () => {
    if (onRemove) {
      onRemove(track);
    }
  };

  // Rendert den passenden Aktions-Button
  const renderAction = () => {
    if (onAdd) {
      return <button className="Track-action" onClick={addTrack}>+</button>;
    } else if (onRemove) {
      return <button className="Track-action" onClick={removeTrack}>–</button>;
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
