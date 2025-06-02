//style module
import styles from "./right.module.css";

//bootstrap deps grid
import { Container, Row, Col } from "react-bootstrap";

//import components
import WhyUs from "@/components/paragraphs/why-us/WhyUs";
import MyWork from "@/components/paragraphs/my-work/MyWork";
import SocialMedia from "@/components/buttons/social-media/SocialMedia";

export default function LeftHero() {
  return (
      <Col lg={4}>
        <div className={styles.rightHero}>
            <div className={styles.top}>
              <WhyUs />
            </div>
            <div className={styles.body}>
              <MyWork />
            </div>
            <div className={styles.social}>
              <SocialMedia />
            </div>
        </div>
      </Col>
  );
}
