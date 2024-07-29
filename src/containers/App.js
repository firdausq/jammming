import styles from './App.module.css';
import React from 'react';

import SearchBar from '../components/Searchbar/SearchBar';
import Tracklist from '../components/Tracklist/Tracklist';
import Playlist from '../components/Playlist/Playlist';

function App() {

  return (
    <div className={styles.app}>

      <header className={styles.appHeader}>
        <h1>Ja<span className={styles.letters}>mmm</span>ing</h1>
      </header>

      <div className={styles.search}>
        <SearchBar></SearchBar>
      </div>

      <div className={styles.tracklist}>
        <Tracklist></Tracklist>
      </div>

      <div className={styles.playlist}>
        <Playlist></Playlist>
      </div>

      <footer className={styles.appFooter}>
        <p>footer</p>
      </footer>

    </div>
  );
}

export default App;
