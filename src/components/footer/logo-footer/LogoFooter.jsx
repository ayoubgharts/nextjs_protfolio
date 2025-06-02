'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//import css
import styles from "./logo.module.css";

//components

export default function LogoFooter() {

    const [isDarkMode, setIsDarkMode] = useState("");

    // Initialize dark mode state based on local storage
    useEffect(() => {
      const savedMode = localStorage.getItem("theme");
      setIsDarkMode(savedMode);
  
      // Custom function to handle localStorage changes in the same tab
      const handleStorageChange = (event) => {
        if (event.key === "theme") {
          setIsDarkMode(event.newValue);
        }
      };
  
      // Listen for `storage` event to handle changes across different tabs
      window.addEventListener("storage", handleStorageChange);
  
      // Optional: also handle changes within the same tab using a custom event
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = function (key, value) {
        const event = new Event("storage");
        event.key = key;
        event.newValue = value;
        originalSetItem.apply(this, arguments);
        window.dispatchEvent(event);
      };
  
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);

  const logoFooterUrl = {
    light: "/logo/logo-light.png",
    dark: "/logo/logo-dark.png",
  };

  const URL = isDarkMode === "dark" ? logoFooterUrl.light : logoFooterUrl.dark;

  return (
    <Link href={"/"}>
      <Image
        className={styles.avatar}
        src={URL}
        alt={"ayoubghart logo front end developer"}
        width={180}
        height={22}
      />
    </Link>
  );
}
