//
import Link from "next/link";
import styles from "./blog.module.css";

import { Container } from "react-bootstrap";

export const metadata = {
  title: "ayoubgharts | Blog",
  description: "Web Developer Engineer",
};

export default function Blog() {
  return (
    <main className={styles.blog}>
      <Container>
        <h2>Still Under Development...</h2>
        <Link href="/">
          <button className={styles.button}>Go to Home Page</button>
        </Link>
      </Container>
    </main>
  );
}
