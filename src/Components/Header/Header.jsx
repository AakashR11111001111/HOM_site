import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { darkModeCtx } from "../../App";
import gsap from "gsap";

const Header = ({ headerRef }) => {
    const { darkMode, setDarkMode } = useContext(darkModeCtx);
    const [isActive, setIsActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropDownRef = useRef(null);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    const onHamClick = () => {
        setIsActive(!isActive);
        setMenuOpen((val) => !val);
    };

    useEffect(() => {
        if (menuOpen) {
           
                gsap.from(
                    dropDownRef.current.querySelectorAll(".ddMenu"),{ 
                        opacity: 0,
                        y: -10,
                        stagger: 0.2,
                    },
                
                );
    
        }
    }, [menuOpen]);

    return (
        <>
            <nav style={{ background: darkMode ? "var(--black)" : "var(--white)" }} className={styles.nav}>
                <ul ref={headerRef} className={styles.desktopMenu}>
                    <li><NavLink className={({ isActive }) => isActive ? styles.isActive : ""} style={{ color: darkMode ? "var(--white)" : "var(--black)" }} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.isActive : ""} style={{ color: darkMode ? "var(--white)" : "var(--black)" }} to={"/about"}>About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.isActive : ""} style={{ color: darkMode ? "var(--white)" : "var(--black)" }} to={"/buy-now"}>Buy Now</NavLink></li>
                    <li>
                        <img style={{ padding: "5px", cursor: "pointer" }} onClick={toggleDarkMode} src={darkMode ? "/lightMode.png" : "/darkMode.png"} alt="Dark Mode Toggle" />
                    </li>
                </ul>
            </nav>

            <nav style={{ background: darkMode ? "var(--black)" : "var(--white)" }} className={styles.nav2}>
                <div onClick={onHamClick} className={`${styles.hamburger} ${isActive ? styles.isActive : ""}`} style={{ background: darkMode ? "var(--black)" : "var(--white)" }}>
                    <span style={{ background: darkMode ? "var(--white)" : "var(--black)" }} className={styles.hamburgerLine}></span>
                    <span style={{ background: darkMode ? "var(--white)" : "var(--black)" }} className={styles.hamburgerLine}></span>
                    <span style={{ background: darkMode ? "var(--white)" : "var(--black)" }} className={styles.hamburgerLine}></span>
                </div>

                {
                    menuOpen &&
                    <div ref={dropDownRef} className={`${styles.dropdown} ${menuOpen ? styles.dropdownOpen : ""}`} >
                        <ul>
                            <li><NavLink className="ddMenu" onClick={onHamClick} style={{ color: darkMode ? "var(--white)" : "var(--black)" }} to={"/"}>Home</NavLink></li>
                            <li><NavLink className="ddMenu" onClick={onHamClick} style={{ color: darkMode ? "var(--white)" : "var(--black)" }} to={"/about"}>About</NavLink></li>
                            <li><NavLink className="ddMenu" onClick={onHamClick} style={{ color: darkMode ? "var(--white)" : "var(--black)" }} to={"/buy-now"}>Buy Now</NavLink></li>
                        </ul>
                    </div>
                }
            </nav>
        </>
    );
};

export default Header;
