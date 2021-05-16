import * as React from 'react'
import styles from "./home.module.css"
import {useEffect} from "react";
import { PlayerCard } from '../components/PlayerCard';
import ReactPlayer from "react-player";
import { Player } from '../components/Player';
import { Logo } from '../components/Logo';
import cover from "../assets/logos/cover.png"
import { Information } from '../components/Information';

interface Props {

}


export const Home: React.FC<Props>= () => {
    useEffect(()=>{
        console.log("Component Home mounted")
    });
        return (
            <>
        <div className={styles.container}>
            <img src={cover}></img>
            <Information></Information>
            
            <div className={styles.cards}>
                <PlayerCard cardInfo={{battleTag:"#12341", discordTag:"Malydred#4433", ingameName:"Malydred"}}></PlayerCard>
                <PlayerCard cardInfo={{battleTag:"#12341", discordTag:"Discrod#1234", ingameName:"Nórre"}}></PlayerCard>
                <PlayerCard cardInfo={{battleTag:"#12341", discordTag:"Discrod#1234", ingameName:"Ajey"}}></PlayerCard>
                </div>
        </div>



        </>
        );
}

