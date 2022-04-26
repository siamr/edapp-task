import React from 'react'
import styles from "../styles/Banner.module.css"

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.banner_container}>
            <h2>EdApp is easy-to-use and <br /> free for you and your team. <br /> No credit card required.</h2>
            <button>Sign up free</button>
            <p>or book a demo with us!</p>
            </div>
        </div>
    )
}

export default Banner
