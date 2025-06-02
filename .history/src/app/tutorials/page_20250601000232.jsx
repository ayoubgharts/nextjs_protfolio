//
import Link from "next/link";
import styles from "./tutorials.module.css";

import { Container } from "react-bootstrap";

import SectionTitle from "@/components/buttons/section-title/SectionTitle";


export const metadata = {
  title: "ayoubgharts | Tutorials",
  description: "Web Developer Engineer",
};p

export default function Tutorials() {
  return (
    <main className={styles.tutorials}>
      <Container>
        <SectionTitle textContent={"MORAQIB mark I"} />
      </Container>
    </main>
  );
}
