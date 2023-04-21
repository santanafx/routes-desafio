import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className={styles.header}>
            <ul>
                <li>
                    <NavLink activeclassname={styles.active} className={styles.link} to='/' end>
                        Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink activeclassname={styles.active} className={styles.link} to='contato'>
                        Contato
                    </NavLink>
                </li>
            </ul >

        </nav >
    )
}
