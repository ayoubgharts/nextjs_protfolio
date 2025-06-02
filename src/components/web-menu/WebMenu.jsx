"use client"; // Ensures this component is client-side only

import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this hook instead of useRouter
import styles from "./menu.module.css";

export default function WebMenu() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <ul className={styles.ul}>
      <li className={pathname === "/" ? styles.active : ""}>
        <Link href="/">home</Link>
      </li>
      <li className={pathname === "/blog" ? styles.active : ""}>
        <Link href="/blog">blog</Link>
      </li>
      <li className={pathname === "/projects" ? styles.active : ""}>
        <Link href="/projects">projects</Link>
      </li>
      <li className={pathname === "/tutorials" ? styles.active : ""}>
        <Link href="/tutorials">tutorials</Link>
      </li>
      <li className={pathname === "/skills" ? styles.active : ""}>
        <Link href="/skills">skills</Link>
      </li>
    </ul>
  );
}
