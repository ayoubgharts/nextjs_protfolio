import Link from "next/link";
import styles from "./why.module.css";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
  return (
    <div className={styles.whyUs}>
      <Link href='/about' className={styles.h3}>
        Why Us
        <FontAwesomeIcon icon={faArrowRightLong} className={styles.arrowicon} />
      </Link>
      <p className={styles.p}>
        Fast and Easy - the mission will be accomplished, you can just enjoy the
        delivery and the demos.
      </p>
    </div>
  );
}
