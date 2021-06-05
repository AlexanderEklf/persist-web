import * as React from 'react'
import {useEffect} from "react"
import { useForm } from '../hooks/useForm';
import styles from "../styles/apply.module.css";

export const Apply = () => {
        const [values, handleChange, handleSubmit, errors] = useForm({firstName:"", lastName:"", about:"", class:"", characterName:""});
        const [isSubmitted, setIsSubmited] = React.useState(false);

        const submitForm = () =>{
            setIsSubmited(true)
            console.log("form submitted")
            
        }
        return (
            <>
            {!isSubmitted ? (
                <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                <div className={styles.inputForm}>
                    <input name="firstName" placeholder="Förnamn*" value={values.firstName} onChange={handleChange}></input>
                    {errors.firstName && <p>{errors.firstName}</p>}

                    <input name="lastName" value={values.lastName} placeholder="Efternamn*" onChange={handleChange} ></input>
                    {errors.lastName && <p>{errors.lastName}</p>}
                    <input name="class" value={values.class} placeholder="Vilken class/spec söker du som*" onChange={handleChange}></input>
                    {errors.class && <p>{errors.class}</p>}
                    <input name="characterName" value={values.characterName} placeholder="Vad heter karaktären du söker som?*" onChange={handleChange}></input>
                    {errors.characterName && <p>{errors.characterName}</p>}
                    <textarea name="about" value={values.about} placeholder="Berätta lite om dig själv" onChange={handleChange}></textarea>

                </div>
                <input type="submit"></input>

                <button type="submit" className={styles.applyButton}>Apply</button>
                </form>
            </div>

            ):
            <div>Tack för din ansökan!</div>
            }
            </>
        );
}