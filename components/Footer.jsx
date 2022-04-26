import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_links}>
                <div className={styles.footer_heading}>
                    <h2>Features</h2>
                    <li>LMS Features</li>
                    <li>Microlearning</li>
                    <li>Gamification</li>
                    <li>Active Learning</li>
                    <li>Mobile Learning</li>
                    <li>Authoring tool</li>
                    <li>Spaced Repetition</li>
                    <li>Rapid Refresh</li>
                </div>
                <div className={styles.footer_heading}>
                    <h2>Product</h2>
                    <li>Pricing</li>
                    <li>LMS Integration</li>
                    <li>Retail Training</li>
                    <li>Template Library</li>
                    <li>Educate Library</li>
                    
                </div>
                <div className={styles.footer_heading}>
                    <h2>Support</h2>
                    <li>Support</li>
                    <li>Contact Us</li>
                    <li>Webinars</li>
                    <li>Learner FAQs</li>
                    <li>Ed Performance Team</li>
                    <li>Media</li>
                </div>
                <div className={styles.footer_heading}>
                    <h2>Connect</h2>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinikedIn</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                    <li>Careers</li>
                </div>
                <div className={styles.footer_heading}>
                    <h2>Legal</h2>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>Accepatble Use</li>
                    <li>Ed © 2021</li>
                </div>
            </div>
        </div>
    )
}

export default Footer
