import React, {useState} from 'react';
import styles from './Track.module.css';

function Track({title, artist, value}) {

    const [buttonValue, setButtonValue] = useState('not added');

    function toggleValue() {
        setButtonValue('added');
    };

    return (
        <div className={styles.track} value={buttonValue}>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.artist}>{artist}</div>
            </div>
            <button className={styles.button} onClick={toggleValue}>+{buttonValue}</button>
        </div>
    );
};

export default Track;