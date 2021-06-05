import * as React from 'react'
import * as BnetStrategy from "passport-bnet"
import {Passport} from "passport"
import {wow} from "blizzard.js"
import {useState, useEffect} from "react"
import { settings } from 'cluster'
import styles from "../styles/playercard.module.css";
import useFetch from 'use-http'
import discordLogo from "../assets/logos/discord.png";




const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const GRANT_TYPE = process.env.REACT_APP_GRANT_TYPE;
const ENDPOINT = "https://eu.battle.net/oauth/token";

const BASEURL = "https://eu.api.blizzard.com/";

const PROFILEPATH = "profile/wow/character/twisting-nether/"
const LOCALE = "en_GB";
const NAMESPACE = "profile-eu";

const cid = process.env.REACT_APP_CLIENT_ID

interface Props{
        cardInfo:{
                battleTag:string,
                discordTag:string,
                ingameName:string,
        }
}

interface Avatar {
        key:string,
        value:string
}


export const PlayerCard:React.FC<Props> = ({cardInfo}) => {

        const copyToClipBoard = (text:string)=>{
                var temp = document.createElement("textarea");
                document.body.appendChild(temp);
                temp.value = text;
                temp.select();
                document.execCommand("copy");

                document.body.removeChild(temp);

        }

        var url= new URL(`/profile/wow/character/twisting-nether/${cardInfo.ingameName.toLowerCase()}/character-media`,"https://eu.api.blizzard.com");
        var params={namespace:"profile-eu", locale:"en_GB"}
       
        url.search = new URLSearchParams(params).toString();

        var {loading, error, data={}} = useFetch(url.toString(),{
        },[]);

        return (<>
                {error && "Error"}
                {loading && "Loading.."}
                {!loading && 
                <div className={styles.card}  style={{backgroundImage:`url(${data.assets[2].value})`, backgroundSize:"cover"}}>
                        <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>
                                        {cardInfo.ingameName}
                                </h2>
                                <div className={styles.cardBody}>
                                        <p className={styles.battleTag}>
                                                <button className={styles.link} onClick={()=>copyToClipBoard(cardInfo.battleTag)}>
                                                        {cardInfo.battleTag}
                                                </button>
                                        </p>
                                        <p className={styles.discord}>
                                                <button className={styles.link} onClick={()=>copyToClipBoard(cardInfo.discordTag)}>
                                                        {cardInfo.discordTag}
                                                </button>
                                        </p>
                                </div>
                                
                        </div>

                </div>
                }

        </>
        );
}
