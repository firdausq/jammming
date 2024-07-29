import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div>
            <input type='text' placeholder='Search for Audio...'></input>
            <br />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;