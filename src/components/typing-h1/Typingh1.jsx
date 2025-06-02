"use client"

import { Typewriter } from 'react-simple-typewriter';
import styles from './title.module.css';

export default function Typingh1() {
    return (
        <h1 className={styles.herotitle}>
            <Typewriter
                words={["Hello! I’m Ayoub,", "a Web Developer."]}
                loop={0} // Set to 0 for infinite loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </h1>
    );
}
