import styles from './Navbar.module.css';
import { useState, useEffect, useRef } from 'react';

export const Navbar = () => {
    const [iwidth, setiwidth] = useState(window.innerWidth);
    const [count, setCount] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('red');
    const buttonRef = useRef(null);
    const ulRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setiwidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);

        // Toggle the background color
        if (count % 2 === 0) {
            setBackgroundColor('blue');
        } else {
            setBackgroundColor('red');
        }
    };

    useEffect(() => {
        const button = buttonRef.current;
        if (button) {
            button.addEventListener('click', handleClick);
        }
        
        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
    }, [iwidth]);

    return (
        <>
            <nav className={styles.nav} style={{ backgroundColor }}>
                <div className={styles.con1}>
                    <div className={styles.logoCon}>
                        <img src='../../public/logo.svg' />
                        <img src='../../public/logo_name.svg' />
                    </div>
                    <ul ref={ulRef} id="nav">
                        <li><a href="#" style={{ "color": "#FF5555" }}>Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Features</a></li>
                    </ul>
                    {(iwidth < 750) ? <button ref={buttonRef}>H</button> : null}
                </div>
                <button className={styles.downloadBtn}>Download</button>
                <div className={styles.navStar}></div>
            </nav>
        </>
    );
};