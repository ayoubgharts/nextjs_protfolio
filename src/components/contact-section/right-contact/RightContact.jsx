"use client"

import styles from "./contact.module.css";

import { Player } from "@lottiefiles/react-lottie-player";

import { Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function RightContact() {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className={styles.rightContact}>
        <Player
          autoplay
          loop
          src={'/animations/contact.json'} // Path to your Lottie JSON file
          style={{ height: "210px", width: "210px" }} // Adjust the size of the animation
        />
        <h3 className={styles.h3}>Send us a message!</h3>
        <p className={styles.p}>
        Need support with your website, have a pre-sale question or want to work with our agency? We are always just one email away.
        </p>
        <a href="https://www.fiverr.com/ayoubgharts" target="_Blank" className={styles.button}>
            Or Hire me on Fiverr
            <FontAwesomeIcon icon={faEnvelope} className={styles.envolop} />
        </a>
      </div>
    </Col>
  );
}
