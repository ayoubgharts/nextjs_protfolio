import styles from "./hero.module.css";

//import bootstrap deps
import { Container, Row, Col } from "react-bootstrap";

//import hero components branches
import LeftHero from "./left-side-hero/LeftHero";
import RightHero from "./right-side-hero/RightHero";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <Container>
        <Row>
            <LeftHero />
            <RightHero />
        </Row>
      </Container>
    </section>
  );
}
