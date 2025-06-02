//
import Link from "next/link";
import styles from "./tutorials.module.css";

import { Container } from "react-bootstrap";

import SectionTitle from "@/components/buttons/section-title/SectionTitle";


export const metadata = {
  title: "ayoubgharts | Tutorials",
  description: "Web Developer Engineer",
};

export default function Tutorials() {
  return (
    <main className={styles.tutorials}>
      <Container>
        <h2>Real State Projects</h2>
        <SectionTitle textContent={"MORAQIB markI"} />
        <Link href="/">
          <button className={styles.button}>Go to Home Page</button>
        </Link>
      </Container>
    </main>
  );
}
