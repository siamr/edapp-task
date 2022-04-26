import React from 'react'
import styles from "../styles/Header.module.css"

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.header_image} src="https://media.edapp.com/image/upload/v1591158918/edapp.com/case%20studies/Marley%20spoon/header.jpg" alt="" />
            <div className={styles.header_info}>
                <img className={styles.marley_logo} src="https://media.edapp.com/image/upload/v1591152545/edapp.com/case%20studies/Marley%20spoon/logo.png" alt="" />                
                <h1>EdApp & Marley Spoon</h1>
                <h3>A Food Services Case Study</h3>

            </div>
        </div>
    )
}

export default Header
