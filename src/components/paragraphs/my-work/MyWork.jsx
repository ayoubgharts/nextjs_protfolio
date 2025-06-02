import Link from "next/link";
import styles from "./work.module.css";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function MyWork() {
  return (
    <div className={styles.MyWork}>
      <Link href="/projects" className={styles.h3}>
        browse projects
        <FontAwesomeIcon icon={faArrowRightLong} className={styles.arrowicon} />
      </Link>
      <p className={styles.p}>
        I craft responsive and visually appealing front-end interfaces, ensuring
        seamless user experiences. With a focus on clean code and modern design,
        I deliver high-quality websites that stand out in performance and style.
      </p>
    </div>
  );
}
