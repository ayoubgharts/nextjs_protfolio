//style module
import styles from "./hero.module.css";

//bootstrap deps grid
import { Container, Row, Col } from "react-bootstrap";

//import components
import Typingh1 from "@/components/typing-h1/Typingh1";
import HeroAbout from "@/components/paragraphs/hero-about/HeroAbout";
import Hireme from "@/components/buttons/hire-me/Hireme";
import SeeProjects from "@/components/buttons/see-projects/SeeProjects";

export default function LeftHero() {
  return (
      <Col md={12} lg={8}>
        <div className={styles.leftHero}>
          <div className={styles.heroLeftTitle}>
            <Typingh1 />
          </div>
          <div className={styles.heroLeftContent}>
            <HeroAbout />
          </div>
          <div className={styles.heroLeftButtons}>
            <Hireme />
            <SeeProjects />
          </div>
        </div>
      </Col>
  );
}
