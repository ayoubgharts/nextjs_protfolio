"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./form.module.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const form = useRef(); // Using useRef to reference the form
  const [status, setStatus] = useState({ message: "", type: "" }); // Status as an object

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4d6kjn", // Replace with your EmailJS service ID
        "template_jbohpsm", // Replace with your EmailJS template ID
        form.current, // Reference to the form
        "2_EYn_MlGHp-4uMDT" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({ message: "Message Sent Successfully", type: "success" });
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus({ message: "Failed to send message!", type: "danger" });
        }
      );
  };

  return (
    <Col sm={12} md={6} lg={8}>
      <form ref={form} className={styles.form} onSubmit={sendEmail}>
        <input
          className={styles.inputs}
          type="text"
          name="fullname"
          placeholder="Full Name"
          required
        />
        <input
          className={styles.inputs}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          className={styles.inputs}
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className={styles.inputs}
          name="message"
          id="message"
          rows="5"
          placeholder="Enter your Message..."
          required
        ></textarea>
        <div className={styles.sendButton}>
          <button type="submit">
            Send Message
            <FontAwesomeIcon icon={faPaperPlane} className={styles.sendIcon} />
          </button>
        </div>
        {status.message && (
          <div className={`alert alert-${status.type}`} role="alert">
            {status.message}
          </div>
        )}
      </form>
    </Col>
  );
}
