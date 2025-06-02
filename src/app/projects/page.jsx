'use client'

import { useState } from "react";
import styles from "./projects.module.css";

import { Container, Row, Col } from "react-bootstrap";

import SectionTitle from "@/components/buttons/section-title/SectionTitle";
import BtnGroup from "@/components/buttons/btn-group/BtnGroup";
import Card from "@/components/card/Card";

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
      href: "websites/brands/angryboars-web.jpg",
      filter: "all react",
      backgroundImage: "/websites/brands/angryboars-brand.jpg",
      CardTitle: "AngryBoars - NFT's Minting Project",
      CardTextContent: "React-based NFT minting platform, designed to allow users to mint unique AngryBoars NFTs directly from their wallet.",
    },
    {
      href: "/websites/brands/nikeshoe-web.jpg",
      filter: "all htmlcss js",
      backgroundImage: "/websites/brands/nikeshoe-brand.jpg",
      CardTitle: "Nike Shoe",
      CardTextContent: "React-based Shop platform designed for sneaker enthusiasts, providing a seamless and intuitive online shopping experience for Nike footwear.",
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
    <main className={styles.Projects}>
      <Container>
        <SectionTitle textContent={"Our Projects"} />
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
      </Container>
    </main>
  );
}
