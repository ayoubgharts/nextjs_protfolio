"use client";

//import css module
import styles from "./button.module.css";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPhp, faJs } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function BtnGroup({ onFilterSelect }) {
  // State to keep track of the active filter
  const [activeFilter, setActiveFilter] = useState("all");

  // Handler for button clicks
  const handleButtonClick = (filter) => {
    setActiveFilter(filter);  // Update the active filter state
    onFilterSelect(filter);   // Trigger the filtering function passed from parent
  };

  return (
    <div className={styles.btnGroup}>
      <button
        className={`${styles.button} ${
          activeFilter === "all" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("all")}
      >
        All Projects
      </button>
      <button
        className={`${styles.button} ${
          activeFilter === "react" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("react")}
      >
        React.js
        <FontAwesomeIcon icon={faReact} className={styles.icon} />
      </button>
      <button
        className={`${styles.button} ${
          activeFilter === "next" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("next")}
      >
        Next.js
      </button>
      <button
        className={`${styles.button} ${
          activeFilter === "htmlcss" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("htmlcss")}
      >
        HTML & CSS
      </button>
      <button
        className={`${styles.button} ${
          activeFilter === "js" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("js")}
      >
        Javascript
        <FontAwesomeIcon icon={faJs} className={styles.icon} />
      </button>
      <button
        className={`${styles.button} ${
          activeFilter === "php mysql" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("php mysql")}
      >
        <FontAwesomeIcon icon={faPhp} className={styles.iconPHP} />
        & MySQL
      </button>
    </div>
  );
}
