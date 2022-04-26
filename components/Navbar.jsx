import styles from "../styles/Navbar.module.css"
import { useState } from "react"

const Navbar = () => {

    const [navBg, setNavBg] = useState(false)
    const changeColor = () => {
        if (window.scrollY > 0){
            setNavBg(true)
        }else{
            setNavBg(false)
        }

    }

    

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeColor)
    }
    return (

        <div className={navBg ? 'contianer scroll_active' : 'container'}>
            <div className="main_menu">
            <img className="logo" src="https://www.edapp.com/img/branding/ed-logo-sticker-128x128.png" alt="" />
                <li className={styles.login}>FEATURES
                
                </li>
                <li className={styles.login}>A MOBILE LMS
            
                </li>
                <li className={styles.login}>COURSE LIBRARY</li>
                <li className={styles.login}>INDUSTRIES
              </li>
                <li className={styles.login}>EDUCATE ALL</li>
                <li className={styles.login}>SUPPORT
                
                </li>
                <li className={styles.login}>TESTIMONIALS
                </li>
                <li className={styles.login}>PRICING</li>
                <li className={styles.login}>LOG IN</li>
                <button className={styles.signup_btn}>SIGN UP FREE</button>
            </div>
           
        </div>
    )
}

export default Navbar
