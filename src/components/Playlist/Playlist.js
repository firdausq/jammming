import React, {useState} from 'react';

import styles from './Playlist.module.css'

import Tracklist from '../Tracklist/Tracklist'

function Playlist(track) {
    //const {track, setTrack} = useState([]);

    //if (track.value === 'added') {}

    return (
        <div>
            <input type='text' placeholder='Playlist Name'/>
            <Tracklist></Tracklist>
            <button className={styles.button}>Save to Spotify</button>
        </div>
    )
};

export default Playlist;