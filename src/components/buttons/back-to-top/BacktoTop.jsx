'use client'

import { useEffect, useState } from "react";
import styles from "./button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.buttontoTop}>
          <button className={styles.button} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} className={styles.arrowicon} />
          </button>
        </div>
      )}
    </>
  );
}
