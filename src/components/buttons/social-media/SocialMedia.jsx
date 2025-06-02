import styles from "./social.module.css";

// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className={styles.card}>
      <a href="https://github.com/ayoubgharts" 
         className={styles.githubIcons}
         target='_blank'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/ayoub-ghiouani/"
        className={styles.linkdIcons}
        target='_blank'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.instagram.com/ayoub.ghiouani/"
        className={styles.instaIcons}
        target='_blank'
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.behance.net/ayoubghiouani"
        className={styles.behanceIcons}
        target='_blank'
      >
        <FontAwesomeIcon icon={faSquareBehance} />
      </a>
    </div>
  );
}
