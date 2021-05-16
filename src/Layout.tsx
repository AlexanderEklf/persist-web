import * as React from 'react'
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import styles from "./styles/layout.module.css";

interface Props{
    title:string,
    children:any
}

export const Layout:React.FC<Props>= ({title,children}) => {
        return (
            <div className={styles.wrapper}>
                <NavBar/>
                <div className={styles.content}>{children}</div>
                <Footer/>
            </div>
        );
}