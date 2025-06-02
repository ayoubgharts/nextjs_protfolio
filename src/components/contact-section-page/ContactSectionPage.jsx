'use client'

import { useState } from "react";
import styles from "./contact.module.css";
import { Alert } from "react-bootstrap";

export default function ContactSectionPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [alertType, setAlertType] = useState("danger"); // 'danger' for errors, 'success' for success
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setAlertType("danger"); // Display errors in danger alert
      setAlertMessage("Please fix the following errors:");
      setShowAlert(true);
    } else {
      setErrors({});
      setAlertType("success"); // Change alert type to success
      setAlertMessage("Message sent successfully!");
      setShowAlert(true);

      // Simulate form submission (e.g., send form data to server)
      console.log("Form data submitted:", formData);

      // Clear form fields after successful submission
      setFormData({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      {showAlert && (
        <Alert
          variant={alertType}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertType === "danger" ? (
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          ) : (
            <p>{alertMessage}</p> // Show success message
          )}
        </Alert>
      )}
      <div className={styles.formTop}>
        <input
          className={styles.input}
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full name"
          value={formData.fullname}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone number (optional)"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formContent}>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formFooter}>
        <textarea
          className={styles.input}
          name="message"
          id="message"
          rows="5"
          placeholder="Enter your message please.."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}
