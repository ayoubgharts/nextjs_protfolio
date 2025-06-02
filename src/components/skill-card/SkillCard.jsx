"use client";

import Image from "next/image"; // Correct Image import for Next.js
import Link from "next/link";
import styles from "./card.module.css";

import { Container, Row, Col } from "react-bootstrap";

export default function SkillCard({image, title}) {
  return (
    <Col sm={12} md={6} lg={3}>
      <div className={styles.skillsCard}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            width={80}
            height={80}
            alt={`${title} Icon`} // Always include an alt attribute for accessibility
          />
        </div>
        <h5 className={styles.h5}>
            {title}
        </h5>
      </div>
    </Col>
  );
}
