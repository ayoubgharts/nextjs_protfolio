import styles from "./company.module.css";

//import bootstrap
import { Container, Row, Col } from "react-bootstrap";

//import components
import SectionTitle from "../buttons/section-title/SectionTitle";
import CompanyScroll from "./companies-scroll/CompanyScroll";

export default function Company() {
  return (
    <section className={styles.Company}>
      <Container>
        <div className="section-title">
          <SectionTitle textContent={"Previously work with"} />
        </div>
        <div className="section-content">
            <CompanyScroll />
        </div>
      </Container>
    </section>
  );
}
