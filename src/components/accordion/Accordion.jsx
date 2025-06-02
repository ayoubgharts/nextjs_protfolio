"use client"; // Ensures the component is rendered client-side

import React, { useState } from "react";
import styles from "./accordion.module.css";

import { Row } from "react-bootstrap";
import SkillCard from "@/components/skill-card/SkillCard";

const Accordion = ({ title, data = [] }) => { // Default value for `data`
  const [isActive, setIsActive] = useState(false);

  // Toggles accordion open and close
  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.accordionSection}>
      <div className={styles.accordion} onClick={toggleAccordion}>
        <h3 className={styles.accordionTitle}>{title}</h3>
        <span className={styles.icon}>{isActive ? "-" : "+"}</span>
      </div>
      <div
        className={`${styles.accordionContent} ${
          isActive ? styles.active : ""
        }`}
      >
        <div className={styles.accordionText}>
          <Row>
            {/* Dynamically map the provided data array and render SkillCard components */}
            {data.length > 0 ? (
              data.map((item, index) => (
                <SkillCard key={index} image={item.image} title={item.title} />
              ))
            ) : (
              <p>No data available</p>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
