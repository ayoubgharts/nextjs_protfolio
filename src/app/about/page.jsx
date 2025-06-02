import styles from "./about.module.css";

import { Container, Row, Col } from "react-bootstrap";

import SectionTitle from "@/components/buttons/section-title/SectionTitle";
import LeftContent from "@/components/aboutme/left-content/LeftContent";
import RightContent from "@/components/aboutme/right-content/RightContent";
import Company from "@/components/companies/Company";
import CompaniesDetails from "@/components/companies-details/CompaniesDetails";

export const metadata = {
  title: "ayoubgharts | About Us",
  description: "Web Developer Engineer",
};

export default function About() {
  return (
    <main className={styles.about}>
      <Container>
        <div className="about-top">
          <SectionTitle textContent={"about us"} />
        </div>
        <div className="about-content">
          <Row>
            <LeftContent />
            <RightContent />
          </Row>
        </div>
        <div className="about-companies">
          <Company />
        </div>
        <div className="details-companies">
          <CompaniesDetails />
        </div>
      </Container>
    </main>
  );
}
