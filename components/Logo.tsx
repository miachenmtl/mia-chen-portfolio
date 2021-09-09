import styles from "../styles/LandingScreen.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.initialM}>
        <b>M</b>
      </span>
      <span className={styles.initialC}>C</span>
    </div>
  );
}
