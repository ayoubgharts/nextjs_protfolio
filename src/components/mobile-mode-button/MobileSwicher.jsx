"use client";

import { useState } from "react";

import styles from './swicher.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function MobileSwicher() {
  // State to manage the current mode (dark or light)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.switcher} onClick={toggleMode}>
      <button
        className={`${styles.button} ${isDarkMode ? styles.darkmodeactive : ""}`}
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
      <button
        className={`${styles.button} ${!isDarkMode ? styles.lightmodeactive : ""}`}
      >
        <FontAwesomeIcon icon={faLightbulb} />
      </button>
    </div>
  );
}
