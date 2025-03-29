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
        // Strictly Disable Scroll on Body
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh"; // Fix height to prevent scroll
        document.documentElement.style.overflow = "hidden"; // Ensure root element is also locked
        document.documentElement.style.height = "100vh";

        const ctx = gsap.context(() => {
            const titles = loadingRef.current.querySelectorAll(`.${styles.title} h1`);
            const tl = gsap.timeline();

            titles.forEach((title) => {
                tl.from(title, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    force3D: true,
                })
                .to(title, {
                    y: -50,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.8,
                    ease: "power3.inOut",
                    force3D: true,
                });
            });

            tl.to(loadingRef.current, {
                x: "-100%",
                duration: 1.5,
                ease: "power4.out",
                force3D: true,
                onComplete: () => {
                    document.body.style.overflow = "auto";
                    document.body.style.height = "auto";
                    document.documentElement.style.overflow = "auto";
                    document.documentElement.style.height = "auto";
                }
            });

            tl.from(headerRef.current.querySelectorAll("li"), {
                y: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out",
                force3D: true,
            });

        }, comp);

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
            document.documentElement.style.overflow = "auto";
            document.documentElement.style.height = "auto";
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
