
import styles from "./button.module.css";

//import fonts icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Hireme() {
  return (
    <a href="https://fiverr.com/users/ayoubgharts/" target="_blank" className={styles.BtnHireMe}>
        <FontAwesomeIcon icon={faPaperPlane} className={styles.arrowUpRight} />
        hire me
        {/*
        <FontAwesomeIcon icon={faPaperPlane} className={styles.arrowUpRight} />
        */}
    </a>
  );
}
