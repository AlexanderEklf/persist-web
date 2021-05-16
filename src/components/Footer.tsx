import * as React from 'react'

import styles from "../styles/footer.module.css"

interface Props {

}

export const Footer:React.FC<Props> = () => {
        return (
                <div className={styles.footer}>
                    <h4>Footer</h4>

                </div>
        );
}

