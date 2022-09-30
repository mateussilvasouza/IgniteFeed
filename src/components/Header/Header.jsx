import React from 'react'

import styles from './Header.module.css'
import Ignite from '../../assets/Ignitesimbol.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img src={Ignite}/>
                <h1>
                    Ignite Feed
                </h1>
            </div>
        </header>
    )
}