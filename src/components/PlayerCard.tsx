import * as React from 'react'
import * as BnetStrategy from "passport-bnet"
import {Passport} from "passport"
import {wow} from "blizzard.js"
import {useState, useEffect} from "react"
import { settings } from 'cluster'
import styles from "../styles/playercard.module.css";




const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const GRANT_TYPE = process.env.REACT_APP_GRANT_TYPE;
const ENDPOINT = "https://eu.battle.net/oauth/token";

const BASEURL = "https://eu.api.blizzard.com/";

const PROFILEPATH = "profile/wow/character/twisting-nether/"
const LOCALE = "en_GB";
const NAMESPACE = "profile-eu";

const cid = process.env.REACT_APP_CLIENT_ID

//https://eu.api.blizzard.com/profile/wow/character/twisting-nether/cr%C3%A9mal/appearance?namespace=profile-eu&locale=en_GB&access_token=EURyYcQkUMZFg6tqtBY6KfShJln4AZrgbW


const fetchAppearence = async (characterName:string, accessToken:string) => {

        const PROFILEREQUEST = `https://eu.api.blizzard.com/profile/wow/character/twisting-nether/${characterName}/appearance?namespace=profile-eu&locale=en_GB&access_token=${accessToken}`;

        fetch(PROFILEREQUEST, {
                method:"GET",
        }).then(response=> response.json()).then(json=>json)


}

const fetchAvatar = async(characterName:string, accessToken:string) => {
        //https://eu.api.blizzard.com/profile/wow/character/twisting-nether/ajey/character-media?namespace=profile-eu&locale=en_GB&access_token=EURyYcQkUMZFg6tqtBY6KfShJln4AZrgbW

        const AVATARREQUEST = `https://eu.api.blizzard.com/profile/wow/character/twisting-nether/${characterName}/character-media?namespace=profile-eu&locale=en_GB&access_token=${accessToken}`

        
        return await fetch(AVATARREQUEST, {
                method:"GET",
        }).then(response=> response.json()).then(json=>json)
}



const fetchToken = async (id:string|undefined, secret:string|undefined)=>{
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(id + ":" + secret))
        let body = new FormData();

        body.append("grant_type","client_credentials");
        const {access_token} = await fetch(ENDPOINT,{
                method:"POST",
                headers: headers,
                body: body
        }).then(response=> response.json()).then(json=>json)
        console.log(access_token);
        return access_token;

        
}

interface Props{
        cardInfo:{
                battleTag:string,
                discordTag:string,
                ingameName:string
        }
}

interface Avatar {
        key:string,
        value:string
}

export const PlayerCard:React.FC<Props> = ({cardInfo}) => {
        const[Avatars, setAvatars] = useState<Avatar[]>([]);
        const [AccessToken, setAccessToken] = useState("");
        const [isFetching, setFetching] = useState(true);

        useEffect(() => {
                const fetchData = async()=>{
                        setFetching(true);
                        const token = await fetchToken(CLIENT_ID,CLIENT_SECRET);
                        setAccessToken(token);
                        fetchAvatar(cardInfo.ingameName.toLowerCase(),token).then((fetched)=> {
                                setAvatars(fetched.assets);
                                setFetching(false);
                        })
                }
                fetchData();
                
        },[])
        
        return (
        <div className={styles.card}>
                {isFetching ? (null) : (<div className={styles.avatar}><img style={{width:"100%"}} alt="Avatar" src={Avatars[2].value}/></div>)}
                <div className={styles.container}>
                        <h4>
                                {cardInfo.ingameName}
                        </h4>
                        <p>Discord: {cardInfo.discordTag}</p>
                        <p>Battlenet: {cardInfo.battleTag}</p>
                </div>
        </div>
        
        );
}
