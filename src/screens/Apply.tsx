import * as React from 'react'
import {useEffect} from "react"
import { useForm } from '../hooks/useForm';
import styles from "../styles/apply.module.css";

export const Apply = () => {
        const [values, handleChange] = useForm({firstName:"", lastName:"", about:"", class:""});
        return (
            <>
            <div className={styles.container}>

                <div className={styles.inputForm}>
                    <input name="firstName" placeholder="Förnamn*" required={true} value={values.firstName} onChange={handleChange}></input>

                    <input name="lastName" value={values.lastName} placeholder="Efternamn*" onChange={handleChange}></input>

                    <input name="class" value={values.class} placeholder="Vilken klass söker du som*" onChange={handleChange}></input>

                    <textarea name="about" value={values.about} placeholder="Berätta lite om dig själv" onChange={handleChange}></textarea>

                </div>

                <button className={styles.applyButton}>Apply</button>
            </div>

            </>
        );
}