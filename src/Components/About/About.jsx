import styles from './About.module.css'

import { useContext } from "react";
import { darkModeCtx } from "../../App";

const About = () => {
    const {darkMode} = useContext(darkModeCtx)

    return (
        <div className={styles.main} style={{color: darkMode ? "var(--white)": "var(--black)" , background: darkMode ? "var(--black)" : "var(--white)"}}>
            <h1 >About Section is Under Progress</h1>
        </div>
    )
}

export default About;