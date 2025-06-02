//
import Link from "next/link";
import styles from "./tutorials.module.css";

import { Container } from "react-bootstrap";

export const metadata = {
  title: "ayoubgharts | Tutorials",
  description: "Web Developer Engineer",
};

export default function Tutorials() {
  return (
    <main className={styles.tutorials}>
      <Container>
        <h2>Real State Projects</h2>
        <Link href="/">
          <button className={styles.button}>Go to Home Page</button>
        </Link>
      </Container>
    </main>
  );
}
