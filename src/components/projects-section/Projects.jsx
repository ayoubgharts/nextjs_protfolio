'use client'

import { useState } from "react";

// Import CSS module
import styles from "./projects.module.css";

// Import Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import components
import SectionTitle from "../buttons/section-title/SectionTitle";
import BtnGroup from "../buttons/btn-group/BtnGroup";
import Card from "../card/Card";
import LineLink from "../buttons/lined-link-button/LineLink";

export default function Projects() {
  // State to hold the selected filter
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Array of card data
  const cardData = [
    {
      href: "/",
      filter: "all react next",
      backgroundImage: "/websites/portfolio.jpg",
      CardTitle: "React & NextJS - Portfolio Website",
      CardTextContent: " responsive portfolio built using React and Next.js, designed to showcase professional work.",
    },
    {
      href: "#",
      filter: "all next",
      backgroundImage: "/websites/site2.jpg",
      CardTitle: "Card Title 2",
      CardTextContent: "Lorem ipsum dolor sit amet...",
    },
    {
      href: "#",
      filter: "all react",
      backgroundImage: "/websites/site3.png",
      CardTitle: "Card Title 3",
      CardTextContent: "Lorem ipsum dolor sit amet...",
    },
    {
      href: "#",
      filter: "all htmlcss",
      backgroundImage: "/websites/site4.png",
      CardTitle: "Card Title 4",
      CardTextContent: "Lorem ipsum dolor sit amet...",
    },
    {
      href: "#",
      filter: "all js",
      backgroundImage: "/websites/site4.png",
      CardTitle: "Card Title 5",
      CardTextContent: "Lorem ipsum dolor sit amet...",
    },
    {
      href: "#",
      filter: "all php mysql",
      backgroundImage: "/websites/site5.png",
      CardTitle: "Card Title 6",
      CardTextContent: "Lorem ipsum dolor sit amet...",
    },
  ];

  // Function to filter cards based on the selected filter
  const filteredCards = cardData.filter(card =>
    card.filter.includes(selectedFilter)
  );

  return (
    <section className={styles.projectSection}>
      <Container>
        <div className="project-top">
          <SectionTitle textContent={"Projects"} />
        </div>
        <div className="project-content">
          <Row>
            <Col sm={4} md={3} lg={2}>
              <div className="project-left-content">
                {/* Pass the filter selection function to BtnGroup */}
                <BtnGroup onFilterSelect={setSelectedFilter} />
              </div>
            </Col>
            <Col sm={8} md={9} lg={10}>
              <div className={styles.projectRightContainer}>
                <div className={styles.projectRightContent}>
                  {/* Render the filtered cards */}
                  {filteredCards.map((card, index) => (
                    <Card
                      key={index}
                      href={card.href}
                      filter={card.filter}
                      backgroundImage={card.backgroundImage}
                      CardTitle={card.CardTitle}
                      CardTextContent={card.CardTextContent}
                    />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.projectFooter}>
          <LineLink texthref={"/projects"} textContent={"Browse all projects"} />
        </div>
      </Container>
    </section>
  );
}
