//css
import styles from "./why.module.css";

//import bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import SectionTitle from "../buttons/section-title/SectionTitle";
import WhyCard from "../why-card/WhyCard";

// Import benefits data
import benefits from "@/api/fetchBenefits";

export default function WhyUs() {
  return (
    <section className={styles.whyUsstyle}>
      <Container>
        <div className="section-top">
          <SectionTitle textContent={"Why choosing us"} />
          <p className={styles.whyP}>
            Just like you, our service are very special. You will get a great
            features and benefits that you may not find on other place out
            there.
          </p>
        </div>
        <div className={styles.sectionContent}>
          <Row>
            {benefits.map((benefit, index) => (
              <WhyCard
                key={index}
                image={benefit.image}
                title={benefit.title}
                description={benefit.desctription}
              />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
