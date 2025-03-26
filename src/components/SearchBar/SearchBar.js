// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  // Aktualisiert den Suchbegriff, wenn der Nutzer tippt
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  // Führt die Suche aus, indem es den Suchbegriff an die onSearch-Funktion weitergibt
  const search = () => {
    if (term.trim()) {
      onSearch(term);
    }
  };

  // Falls der Nutzer Enter drückt, wird die Suche gestartet
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <div className="SearchBar">
      <input 
        placeholder="Enter a Song, Album or Artist"
        value={term}
        onChange={handleTermChange}
        onKeyPress={handleKeyPress}
      />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
