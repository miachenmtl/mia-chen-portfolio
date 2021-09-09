import { ReactElement } from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function NavMenu(): ReactElement {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </li>
        <li>
          <Link href="/CV">
            <a>cv</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
