import Link from "next/link";
//import css module
import styles from "./card.module.css";

//import components

export default function Card({ href, backgroundImage, CardTitle, CardTextContent, filter }) {
  return (
    <Link href={href} className={styles.card} filter={'all'}>
      <div
        className={styles.website}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{CardTitle}</p>
        <p className={styles.cardDescription}>
            {CardTextContent}
        </p>
      </div>
    </Link>
  );
}
