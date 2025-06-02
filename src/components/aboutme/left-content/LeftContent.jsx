import styles from "./content.module.css";

//import bootstrap
import { Container, Row, Col } from "react-bootstrap";

//import components
import LineLink from "@/components/buttons/lined-link-button/LineLink";

export default function LeftContent() {
  return (
    <Col md={12} lg={6}>
      <div className={styles.leftContent}>
        <h3 className={styles.h3}>I’ve been developing websites since 2017</h3>
        <p className={styles.p}>
          Since 2017, I have been specializing in web development, leveraging
          technologies like React.js and Next.js to build dynamic,
          high-performance websites. My focus is on delivering responsive and
          scalable digital solutions that enhance user experience and meet the
          evolving needs of modern businesses.
        </p>
      </div>
    </Col>
  );
}
