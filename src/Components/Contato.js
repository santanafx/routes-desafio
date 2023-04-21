import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import { Head } from './Head'

export const Contato = () => {
    return (
        <section className={`${styles.contato} animeLeft`}>
            <Head title='Contato' />
            <img src={foto} alt="Foto do contato" />
            <div>
                <h1>Entre em contato</h1>
                <ul className={styles.dados}>
                    <li>email@email.com</li>
                    <li>99999-9999</li>
                    <li>Rua xxxx, bairro xxx, n xx</li>
                </ul>
            </div>

        </section>
    )
}
