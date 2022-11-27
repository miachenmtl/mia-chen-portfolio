import { ReactElement } from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function NavMenu(): ReactElement {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link href="/CV">cv</Link>
        </li>
      </ul>
    </nav>
  );
}
