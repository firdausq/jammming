import React from 'react';
import { useState } from 'react';
import styles from './Tracklist.module.css';

import Track from '../Track/Track';

const tracks = [
    {title: 'title1', artist: 'artist1'},
    {title: 'title2', artist: 'artist2'},
    {title: 'title3', artist: 'artist3'}
]

function Tracklist() {
    const track = tracks.map(track => <Track title={track.title} artist={track.artist} />)

    return (
        <div>
            <div>{track}</div>
        </div>
    );
};

export default Tracklist;