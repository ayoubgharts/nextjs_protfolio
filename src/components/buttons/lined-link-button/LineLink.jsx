import Link from "next/link";
import styles from "./line.module.css";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function LineLink({textContent, texthref}) {
  return (
      <Link href={texthref} className={styles.h3}>
        {textContent}
        <FontAwesomeIcon icon={faArrowRightLong} className={styles.arrowicon} />
      </Link>
  );
}
