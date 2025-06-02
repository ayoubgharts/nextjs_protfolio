"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import dabaCompanies from "@/api/fetchCompaniesData"; // Import your data here

export default function CompaniesDetails() {
  const [theme, setTheme] = useState("light");

  // Function to update theme
  const updateTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  };

  // Check localStorage for theme and add event listener for changes
  useEffect(() => {
    // Set initial theme from localStorage
    updateTheme();

    // Event listener for localStorage changes
    const handleStorageChange = (event) => {
      if (event.key === "theme") {
        updateTheme();
      }
    };

    // Add storage event listener
    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Container>
      <h3 className={styles.h3}>Get details about my previous clients!</h3>
      {dabaCompanies.map((company, index) => (
        <Row key={index} className={styles.companyRow}>
          <div className={styles.projectWithCompany}>
            <Col sm={12} md={12} lg={2}>
              <div className={styles.projectWithCompanyLogo}>
                <Image
                  src={theme === "dark" ? company.logolight : company.logodark} // Choose logo based on theme
                  layout="fill"
                  objectFit="contain"
                  alt={`${company.title} logo`}
                  className={styles.Brand1}
                />
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className={styles.projectWithCompanyContent}>
                <h4>{company.title}</h4>
                <p>{company.description}</p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={3}>
              <Link
                href={company.url}
                target="_blank"
                className={styles.projectWithCompanyImage}
              >
                <Image
                  src={company.projectImage} // Use the 'projectImage' from data
                  width={220}
                  height={140}
                  alt={`${company.title} project`}
                  className={styles.image}
                />
              </Link>
            </Col>
          </div>
          <div className={styles.linktoproject}>
            <Link href={company.url} target="_blank" className={styles.Link}>
              Check the demo
              <FontAwesomeIcon icon={faLink} className={styles.linkIcon} />
            </Link>
          </div>
        </Row>
      ))}
    </Container>
  );
}
