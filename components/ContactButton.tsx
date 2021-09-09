import type { ReactElement } from "react";

import styles from "../styles/BottomScreen.module.css";

export default function ContactButtons(): ReactElement {
  return (
    <button type="button" className={styles.contactButton}>
      Contact
    </button>
  );
}
