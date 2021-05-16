import * as React from 'react'
import ReactPlayer from 'react-player';
import styles from "../styles/player.module.css"

export const Player = () => {
        return (

        <div className= {styles.mediaPlayer}>
            <ReactPlayer className={styles.reactPlayer} url="https://www.youtube.com/watch?v=0LI50dfoDCI&ab_channel=Hoxza" >
            </ReactPlayer>
        </div>
        );
}