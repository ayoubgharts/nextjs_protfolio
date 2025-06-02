import Link from "next/link";

import styles from "./menu.module.css";

import SocialMedia from "../buttons/social-media/SocialMedia";

export default function mobileMenu() {
  return (
    <ul className={styles.ul}>
      <li className={styles.active}>
        <Link href="/">home</Link>
      </li>
      <li className="">
        <Link href="/articles">articles</Link>
      </li>
      <li className="">
        <Link href="/projects">projects</Link>
      </li>
      <li className="">
        <Link href="/tutorials">tutorials</Link>
      </li>
      <li className="">
        <Link href="/about">about</Link>
      </li>
      <li>
        <SocialMedia />
      </li>
    </ul>
  );
}
