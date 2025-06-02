import Image from "next/image";

//Css
import styles from "./why.module.css";

//import bootstrap
import { Container, Row, Col } from "react-bootstrap";

export default function WhyCard({ image, title, description }) {
  return (
    <Col sm={12} md={6} lg={6}>
      <div className={styles.whyCrad}>
        <div className={styles.whyimage}>
          <Image src={image} alt={title} className={styles.imagechild} width={60} height={60} />
        </div>
        <div className="details">
          <h4 className={styles.h4}>{title}</h4>
          <p className={styles.p}>{description}</p>
        </div>
      </div>
    </Col>
  );
}
