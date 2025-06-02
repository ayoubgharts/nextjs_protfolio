import Link from "next/link";

import styles from "./button.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function SeeProjects() {
  return (
    <Link href='./projects' className={styles.btn}>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.arrowicon} />
        See my projects
    </Link>
  );
}
