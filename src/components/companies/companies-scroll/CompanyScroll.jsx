"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./company.module.css";
import companiesLight from "@/api/fetchCompanyLight";
import companiesDark from "@/api/fetchCompanyDark";

export default function CompanyScroll() {

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

  // Define the logo arrays
  const companiesLightUrl = [
    { src: companiesLight.cnn, alt: "CNN" },
    { src: companiesLight.fiverr, alt: "Fiverr" },
    { src: companiesLight.sydney, alt: "Sydney" },
    { src: companiesLight.tagdiv, alt: "TagDiv" },
    { src: companiesLight.google, alt: "Google" },
    { src: companiesLight.nike, alt: "Nike" },
    { src: companiesLight.sol, alt: "Solana" },
    { src: companiesLight.wp, alt: "Wordpress" },
  ];

  const companiesDarkUrl = [
    { src: companiesDark.cnn, alt: "CNN" },
    { src: companiesDark.fiverr, alt: "Fiverr" },
    { src: companiesDark.sydney, alt: "Sydney" },
    { src: companiesDark.tagdiv, alt: "TagDiv" },
    { src: companiesDark.google, alt: "Google" },
    { src: companiesDark.nike, alt: "Nike" },
    { src: companiesDark.sol, alt: "Solana" },
    { src: companiesDark.wp, alt: "Wordpress" },
  ];

  // Choose the correct logo array based on mode
  const companiesUrl =
    isDarkMode === "dark" ? companiesLightUrl : companiesDarkUrl;

  return (
    <div className={styles.companiesSection}>
      <div className={styles.companiesSlider}>
        {companiesUrl.map((company, index) => (
          <div className={styles.companyCard} key={index}>
            <Image
              src={company.src}
              alt={company.alt}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 576px) 100vw, 33vw"
            />
          </div>
        ))}
        {/* Duplicate the logos to ensure smooth looping */}
        {companiesUrl.map((company, index) => (
          <div className={styles.companyCard} key={`duplicate-${index}`}>
            <Image
              src={company.src}
              alt={company.alt}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 576px) 100vw, 33vw"
            />
          </div>
        ))}
        {/* Duplicate the logos to ensure smooth looping */}
        {companiesUrl.map((company, index) => (
          <div className={styles.companyCard} key={`duplicate-${index}`}>
            <Image
              src={company.src}
              alt={company.alt}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 576px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
