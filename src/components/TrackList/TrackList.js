import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function TrackList() {
  // Später kannst du hier ein Array von Tracks über Props bekommen
  // und für jeden Track ein <Track /> rendern.
  return (
    <div className="TrackList">
      {/* Beispielhaft drei Tracks */}
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default TrackList;
