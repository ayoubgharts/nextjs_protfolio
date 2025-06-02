import styles from "./link.module.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function LinkButton() {
  return (
    <a href="https://www.fiverr.com/ayoubgharts#Reviews" className={styles.linkbutton}>
        check on fiverr
        <FontAwesomeIcon icon={faArrowUp} className={styles.iconArrow} />
    </a>
  );
}
