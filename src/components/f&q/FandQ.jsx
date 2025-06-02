'use client'

import { useState, useRef, useEffect } from 'react';
import styles from './Fq.module.css';

export default function FandQ() {
  
  const [activeIndex, setActiveIndex] = useState(null);
  const bodyRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    bodyRefs.current.forEach((body, index) => {
      if (activeIndex === index) {
        body.style.maxHeight = `${body.scrollHeight}px`; // Dynamically set max-height
        body.style.opacity = '1';
      } else {
        body.style.maxHeight = '0';
        body.style.opacity = '0';
      }
    });
  }, [activeIndex]);

  const faqData = [
    {
      question: 'What services do you offer in web development?',
      answer: 'I offer a wide range of web development services, including building responsive websites, single-page applications (SPAs), and dynamic web applications. I specialize in front-end development using technologies like React, Next.js, HTML, CSS, and JavaScript, ensuring fast, interactive, and user-friendly experiences.'
    },
    {
      question: 'What is front-end engineering, and why is it important?',
      answer: 'Front-end engineering involves creating the visual and interactive aspects of a website or web application that users engage with directly. It is crucial because a well-engineered front-end ensures a smooth, responsive, and intuitive user experience, which can significantly improve user retention and satisfaction.'
    },
    {
      question: 'What technologies do you use for front-end development?',
      answer: 'I use a variety of modern technologies, including HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Bootstrap, Tailwind CSS, and others. I also ensure that websites are mobile-responsive and optimized for performance and accessibility.'
    },
    {
      question: 'Can you help with website performance optimization?',
      answer: 'Yes, performance optimization is a key aspect of my services. I focus on reducing load times, improving Core Web Vitals, optimizing images, and implementing lazy loading techniques to ensure that the website runs smoothly on all devices and networks.'
    },
    {
      question: 'How do you ensure that websites are SEO-friendly?',
      answer: 'I follow best practices for SEO, including writing semantic HTML, optimizing meta tags, ensuring fast load times, and creating mobile-friendly designs. Additionally, I implement structured data to help search engines understand the website\'s content better.'
    },
    {
      question: 'What is your approach to responsive design?',
      answer: 'My approach to responsive design ensures that websites look and function perfectly across all screen sizes, from mobile devices to large desktops. I use flexible grids, media queries, and fluid layouts to create a seamless experience on any device.'
    }
  ];

  return (
    <section className={styles.fq}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className={styles.icon}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div
              ref={(el) => (bodyRefs.current[index] = el)}
              className={`${styles.accordionBody} ${
                activeIndex === index ? 'open' : ''
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
