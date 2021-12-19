import styles from "../styles/LandingScreen.module.css";

export default function Sidekick(): JSX.Element {
  return (
    <div className={styles.sidekick}>
      <ul className={styles.sidekickList}>
        <li>Front-End Web Development</li>
        <li>React, JavaScript, HTML5, CSS3</li>
      </ul>
    </div>
  );
}
