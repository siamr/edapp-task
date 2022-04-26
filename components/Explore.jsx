import React from 'react'
import styles from "../styles/Explore.module.css"

function Explore() {
    return (
        <div className={styles.explore}>
            <h2>EXPLORE MORE</h2>
            <div className={styles.explore_cards}>
                <div className={styles.card}>
                    <img className ={styles.card_img} src="https://www.edapp.com/img/blog-module-thumbnails/global-clients-thumbnail.jpg" alt="" />
                    <h2>Hear from some of our Global Clients</h2>
                </div>
                <div className={styles.card}>
                    <img className ={styles.card_img} src="https://www.edapp.com/img/blog-module-thumbnails/solutions-consultants-thumbnail.jpg" alt="" />
                    <h2>Book in a demonstration with one of our Solutions Consultants</h2>
                </div>
                <div className={styles.card}>
                    <img className ={styles.card_img} src="https://www.edapp.com/img/blog-module-thumbnails/demo-thumbnail.jpg" alt="" />
                    <h2>See live authoring demonstrations on our YouTube</h2>
                </div>
                <div className={styles.card}>
                    <img className ={styles.card_img} src="https://www.edapp.com/img/blog-module-thumbnails/review-thumbnail.jpg" alt="" />
                    <h2>Read independent reviews of our platform on G2</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Explore
