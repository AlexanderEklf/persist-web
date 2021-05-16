import * as React from 'react'
import styles from "../styles/information.module.css";

export const Information = () => {
        return (
            <>
            <div className={styles.container}>

                <div className={styles.item}>
                    <h1>
                        Allmän information
                    </h1>
                    <p>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                
                
                <div className={styles.item}>
                    <h1>
                        Raidtider
                    </h1>
                    <p className={styles.smallParagraph}>
                    <span>Måndagar 20:00-23:00</span>
                    <br></br>
                    <span>Söndagar 20:00-23:00</span>
                    </p>
                </div>
                
                <div className={styles.item}>
                    <h1>
                        Vi söker
                    </h1>
                    <p className={styles.smallParagraph}>
                       <span>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span> 
                       
                    </p>
                </div>
            </div>
            </>
        );
}