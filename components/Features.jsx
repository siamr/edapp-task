import React from 'react'
import styles from '../styles/Features.module.css'

function Features() {
    return (
        <div className={styles.features}>
            <h2>Why EdApp?</h2>
            <div className={styles.features_container}>
                <div className={styles.feature}>
                <img className={styles.feature_img} src="https://www.edapp.com/img/thumbnail/rapid-authoring.v1.001.jpg" alt="" />
                    <h4>World-class Authoring Tool</h4>
                    <p>Create lessons on EdApp’s intuitive and incredibly agile platform in days. Choose from 2 template libraries, full of completely free and ready-made content ready for you to quickly edit, brand, and deploy. No prior technical knowledge needed. it’s a smartphone, tablet or laptop.</p>
                </div>
                <div className={styles.feature}>
                <img className={styles.feature_img} src="https://www.edapp.com/img/thumbnail/growth-millenials-workplace.jpg" alt="" />
                    <h4>Mobile-first microlearning</h4>
                    <p>Deliver a learning strategy that provides the best learning outcomes with microlearning. Leverage interactive, built-in features guaranteed to boost engagement and completion rates. Deploy your bespoke content to your teams directly to their personal mobile devices, where they can easily access and complete lessons in small digestible chunks.</p>
                </div>
                <div className={styles.feature}>
                    <img className={styles.feature_img} src="https://www.edapp.com/img/thumbnail/flexible-personal-learning.jpg" alt="" />
                    <h4>Better learning outcomes</h4>
                    <p>Experience completion rates beyond 90% compared to rates as low as 15% from traditional eLearning platforms. Apply features like spaced repetition and gamification to make learning fun and enjoyable while simultaneously increasing retention and creating a continuous learning experience.</p>
                </div>

            </div>
            
        </div>
    )
}

export default Features
