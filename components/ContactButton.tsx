import * as React from "react";

import styles from "../styles/BottomScreen.module.css";

export default function ContactButtons(): JSX.Element {
  return (
    <a href="mailto:mia.chen.mtl@gmail.com" className={styles.contactButton}>
      Contact
    </a>
  );
}
