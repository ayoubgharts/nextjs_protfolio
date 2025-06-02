'use client'

import { useRef } from "react";


//import module styles
import styles from "./testimonials.module.css";

//import bootstrap
import { Container, Row, Col } from "react-bootstrap";

//import components
import SectionTitle from "../buttons/section-title/SectionTitle";
import LineLink from "../buttons/lined-link-button/LineLink";
import TestCard from "../testemonial-card/TestCard";
import LeftNextBtn from "../buttons/next-button/left/LeftNextBtn";
import RightNextBtn from "../buttons/next-button/right/RightNextBtn";

//
import testimonials from "@/api/fetchTestimonials";

export default function Testimonials() {
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.Testimonials}>
      <Container>
        <div className="section-top">
          <SectionTitle textContent={"Testimonials"} />
        </div>
        <div className={styles.underTop}>
          <h2 className={styles.h2}>What the clients say about my work</h2>
          <LineLink texthref={"/contact"} textContent={"Get in touch"} />
        </div>
        <div className={styles.sectionContent}>
          <LeftNextBtn onClick={scrollLeft} />
          <div ref={cardContainerRef} className={styles.cardContainer}>
            {testimonials.map((testimonial, index) => (
              <TestCard
                key={index}
                url={testimonial.url}
                image={testimonial.image}
                name={testimonial.name}
                country={testimonial.country}
                text={testimonial.text}
                stars={testimonial.stars}
                price={testimonial.price}
              />
            ))}
          </div>
          <RightNextBtn onClick={scrollRight} />
        </div>
      </Container>
    </section>
  );
}
