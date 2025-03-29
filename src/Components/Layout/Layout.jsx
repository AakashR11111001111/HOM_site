import styles from './Layout.module.css';
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const Layout = () => {
    const comp = useRef(null);
    const loadingRef = useRef(null); 
    const headerRef = useRef(null);

    useLayoutEffect(() => {
        document.body.style.overflow = "hidden"; // Disable Scroll

        const ctx = gsap.context(() => {
            const titles = loadingRef.current.querySelectorAll(`.${styles.title} h1`);
            const tl = gsap.timeline();

            titles.forEach((title) => {
                tl.from(title, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                })
                .to(title, {
                    y: -50,
                    opacity: 0,
                    duration: 1,
                    delay: 1,
                });
            });

            tl.to(loadingRef.current, {
                x: "-100%",
                duration: 2,
                onComplete: () => {
                    document.body.style.overflow = "auto"; // Enable Scroll after animation
                }
            });

            tl.from(headerRef.current.querySelectorAll("li"), {
                y: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.5
            });

        }, comp);

        return () => {
            document.body.style.overflow = "auto"; // Ensure scroll is re-enabled if unmounted
            ctx.revert();
        };
    }, []);

    return (
        <div ref={comp}>
            <div ref={loadingRef} className={styles.loading}>
                <div className={styles.titles}>
                    <div className={styles.title}>
                        <h1>Powering Innovation</h1>
                    </div>
                    <div className={styles.title}>
                        <h1>Speed Redefined</h1>
                    </div>
                    <div className={styles.title}>
                        <h1>Experience the Future</h1>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <Header headerRef={headerRef} />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
