"use client";

import { useState, useEffect } from "react";
import styles from "./button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function ModeButton({ onModeChange }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    // Apply the mode to the body
    document.body.classList.toggle("dark-mode", newMode);
    document.body.classList.toggle("light-mode", !newMode);

    // Update local storage
    localStorage.setItem("theme", newMode ? "dark" : "light");

    // Notify parent component
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") || "dark";
    const isDark = savedMode === "dark";
    setIsDarkMode(isDark);
    document.body.classList.toggle("dark-mode", isDark);
    document.body.classList.toggle("light-mode", !isDark);

    // Notify parent component
    if (onModeChange) {
      onModeChange(isDark);
    }
  }, [onModeChange]);

  return (
    <div className={styles.switcher} onClick={toggleMode}>
      <button className={`${styles.button} ${isDarkMode ? styles.darkmodeactive : ""}`}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
      <button className={`${styles.button} ${!isDarkMode ? styles.lightmodeactive : ""}`}>
        <FontAwesomeIcon icon={faLightbulb} />
      </button>
    </div>
  );
}
