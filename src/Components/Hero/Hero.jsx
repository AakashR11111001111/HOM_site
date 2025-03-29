import { useContext } from 'react';
import styles from './Hero.module.css';
import { darkModeCtx } from '../../App';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();
    const { darkMode } = useContext(darkModeCtx);
    const getYourNowClick = () => {
        navigate("/buy-now")
    }



    return (
        <div className={styles.main} style={{color: darkMode ? "var(--white)" : "var(--black)", background: darkMode ? "var(--black)" : "var(--white)" }}>
            <div className={styles.hero}>
                <div className={styles.hr}>
                    <div className={styles.imgdiv}>
                        <img src="/phone.png" alt="" />
                    </div>
                </div>
                <div className={styles.hl}>
                    <h1>Speed Beyond Limits</h1>
                    <p>Ultra-fast processor, hyper-responsive display, and limitless power. Experience the future</p>
                    <button onClick={getYourNowClick} style={{backgroundColor: darkMode ? "var(--white)" : "var(--black)", color: darkMode ? "var(--black)" : "var(--white)" }} className={styles.gynBtn}>Get Yours Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;