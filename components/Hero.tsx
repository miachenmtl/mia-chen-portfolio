import { ReactElement } from "react";

import styles from "../styles/LandingScreen.module.css";

export default function Hero(): ReactElement {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>Mia Chen</h1>
    </div>
  );
}
