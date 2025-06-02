'use client';

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import styles from './count.module.css';

export default function CountUph3() {
  const [startCounting, setStartCounting] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const element = countRef.current; // Capture the current ref value

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.unobserve(element); // Use the captured ref value
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is in view
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <h3 ref={countRef} className={styles.CountUp}>
      0{startCounting ? <CountUp start={0} end={7} duration={3} /> : "0"}
    </h3>
  );
}
