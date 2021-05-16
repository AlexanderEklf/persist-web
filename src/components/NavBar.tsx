import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import styles from "../styles/navbar.module.css"
import { Logo } from './Logo';

interface Props {

}

export const NavBar:React.FC<Props> = () => {
        return (
                <div className={styles.navbar}>
                    <ul>
                        <li><Link to="/home">Hem</Link></li>
                        <li><Link to="/apply">Ansök</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>
                </div>
        );
}

