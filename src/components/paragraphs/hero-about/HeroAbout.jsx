import Link from "next/link";
import styles from "./HeroAbout.module.css";

export default function HeroAbout() {
  return (
    <div className={styles.card}>
      <div className={styles.carddetails}>
        <p className={styles.texttitle}>Ayoub Ghiouani</p>
        <p className={styles.textbody}>
          Hi! It’s Ayoub here, a graphic designer, and web developer. I am an
          expert in building Stunning User experiences. We deliver Front- end
          web, mobile, and blockchain application development.
        </p>
      </div>
      <Link href='/about' className={styles.cardbutton}>More info</Link>
    </div>
  );
}
