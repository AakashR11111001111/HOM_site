import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext } from 'react';
import { darkModeCtx } from '../../App';

const Header = ({ headerRef }) => {
    const { darkMode, setDarkMode } = useContext(darkModeCtx);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <nav style={{ background: darkMode ? "var(--black)" : "var(--white)" }} className={styles.nav}>
            <ul ref={headerRef}>
                <li>
                    <NavLink className={({isActive})=> isActive ? styles.isActive : ""} style={{color: darkMode ? "var(--white)" : "var(--black)" }} to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink style={{color: darkMode ? "var(--white)" : "var(--black)" }} to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink style={{color: darkMode ? "var(--white)" : "var(--black)" }} to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                    <img style={{padding: "5px"}} onClick={toggleDarkMode} src={darkMode ? "/lightMode.png" : "/darkMode.png"} />
                </li>
            </ul>
        </nav>
    );
};

export default Header;
