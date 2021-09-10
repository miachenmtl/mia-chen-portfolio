import type { ReactElement } from "react";

import styles from "../styles/BottomScreen.module.css";

export default function ContactButtons(): ReactElement {
  return (
    <a href="mailto:mia.chen.mtl@gmail.com" className={styles.contactButton}>
      Contact
    </a>
  );
}
