import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

import reactIcon from "/public/icons/react.png";
import uiKit from "/public/icons/uikit.png";
import html from "/public/icons/html.png";

import LogoFooter from "./logo-footer/LogoFooter";

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerTop}>
          <Row>
            <Col lg={4}>
              <div className={styles.footerTopLeft}>
                <LogoFooter />
                <p className={styles.p}>
                  We craft beautiful, modern, and easy-to-use Websites & WebApps
                  & UI Kits to improve the designers & developers workflow.
                </p>
                <div className={styles.footerSocialMedia}>
                  <a href="#" className={styles.socialIconsContainer}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className={styles.socialIcons}
                    />
                  </a>
                  <a href="#" className={styles.socialIconsContainer}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className={styles.socialIcons}
                    />
                  </a>
                  <a href="#" className={styles.socialIconsContainer}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={styles.socialIcons}
                    />
                  </a>
                  <a href="#" className={styles.socialIconsContainer}>
                    <FontAwesomeIcon
                      icon={faBehance}
                      className={styles.socialIcons}
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className={styles.footerTopRight}>
                <ul className={styles.menu}>
                  <h3>Menu</h3>
                  <li>
                    <Link href={"/"} className={styles.Link}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={"/projects"} className={styles.Link}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href={"/tutorials"} className={styles.Link}>
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href={"/blog"} className={styles.Link}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={"/skills"} className={styles.Link}>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about"} className={styles.Link}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact"} className={styles.Link}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href={"/privacy"} className={styles.Link}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
                <ul className={styles.resources}>
                  <h3>resources</h3>
                  <li>
                    <Link href={"#"} className={styles.Linkright}>
                      <Image
                        className={styles.uiKit}
                        src={uiKit}
                        alt={""}
                        width={30}
                        height={30}
                      />
                      UI Kits
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className={styles.Linkright}>
                      <Image
                        className={styles.html}
                        src={html}
                        alt={""}
                        width={30}
                        height={30}
                      />
                      Html Templates
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className={styles.Linkright}>
                      <Image
                        className={styles.reactIcon}
                        src={reactIcon}
                        alt={""}
                        width={30}
                        height={30}
                      />
                      React Components
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.footerBottom}>
            <p>Copyright © 2024 <b>ayoubgharts</b> | All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}
