import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
    console.log('[SearchBar] Eingabe geändert:', e.target.value); // DEBUG
  };

  const search = () => {
    if (term.trim()) {
      console.log('[SearchBar] Suche wird ausgelöst mit Begriff:', term); // DEBUG
      onSearch(term);
    } else {
      console.log('[SearchBar] Kein Suchbegriff eingegeben.'); // DEBUG
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('[SearchBar] Enter gedrückt'); // DEBUG
      search();
    }
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter a Song, Album or Artist"
        value={term}
        onChange={handleTermChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="SearchButton"
        type="button"
        onClick={() => {
          console.log('[SearchBar] Search-Button geklickt'); // DEBUG
          search();
        }}
      >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
