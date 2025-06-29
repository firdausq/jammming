import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* Übergibt die Track-Daten und die onAdd-Funktion an die TrackList */}
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
