import * as React from 'react'
import styles from "./home.module.css"
import {useEffect} from "react";
import { PlayerCard } from '../components/PlayerCard';
import ReactPlayer from "react-player";
import { Player } from '../components/Player';
import { Logo } from '../components/Logo';
import cover from "../assets/logos/cover.png"
import { Information } from '../components/Information';

import useFetch from 'use-http';
import { load } from 'dotenv';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const ENDPOINT = "https://eu.battle.net/oauth/token";

interface Props {

}

function token () {

}


//`https://eu.api.blizzard.com/profile/wow/character/twisting-nether/${characterName}/character-media?namespace=profile-eu&locale=en_GB&access_token=${accessToken}`

export const Home: React.FC<Props>= () => {
    useEffect(()=>{
        console.log("Component Home mounted")
    });

    return (
        <>
    <div className={styles.container}>
        <img src={cover}></img>
        <Information/>
            <div className={styles.cards}> 
            <PlayerCard cardInfo={{battleTag:"#12341", discordTag:"Discrod#1234", ingameName:"Malydred"}}></PlayerCard>
            <PlayerCard cardInfo={{battleTag:"#12341", discordTag:"Discrod#1234", ingameName:"Nórre"}}></PlayerCard>
            <PlayerCard cardInfo={{battleTag:"#12341", discordTag:"Discrod#1234", ingameName:"Fellicious"}}></PlayerCard>  
        </div>
    </div>
    </>
    );
}

