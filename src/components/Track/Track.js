import React from 'react';
import './Track.css';

function Track() {
  // Später kannst du hier z.B. Props für Name, Artist und Album entgegennehmen
  // und den Button je nach Kontext (+ / -) rendern.
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track Name</h3>
        <p>Artist | Album</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;
