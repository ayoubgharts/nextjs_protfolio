import styles from "./about.module.css";

//import bootstrap
import { Container, Row, Col } from "react-bootstrap";

//import components
import SectionTitle from "../buttons/section-title/SectionTitle";
import LeftContent from "./left-content/LeftContent";
import RightContent from "./right-content/RightContent";
import LineLink from "../buttons/lined-link-button/LineLink";

export default function AboutMe() {
  return (
    <section className={styles.AboutMe}>
      <Container>
        <div className="section-title">
          <SectionTitle textContent={"about me"} />
        </div>
        <div className="section-content">
          <Row>
            <LeftContent />
            <RightContent />
          </Row>
        </div>
        <div className="section-footer">
          <LineLink textContent={"more about me"} texthref={"/about"} />
        </div>
      </Container>
    </section>
  );
}
