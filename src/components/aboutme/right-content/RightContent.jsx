
import styles from "./content.module.css";

import { Container, Row, Col } from "react-bootstrap";

import CountUph3 from "../../count-up/CountUph3";
import CountTwoh3 from "@/components/count-up/CountTwoh3";

export default function RightContent() {
  return (
    <Col md={12} lg={6}>
      <div className={styles.RightContent}>
        <div className={styles.exp}>
          <div className={styles.expOne}>
            <CountUph3 />
            <p>years of experience</p>
          </div>
          <div className={styles.expOne}>
            <CountTwoh3 />
            <p>successful projects</p>
          </div>
        </div>
        <p className={styles.expParagraph}>
          With 07 years of experience in web development, I successfully
          delivered numerous projects using React.js, Next.js, Php, Vanilla
          Javascript, HTML&CSS, Node.js and more..
        </p>
      </div>
    </Col>
  );
}
