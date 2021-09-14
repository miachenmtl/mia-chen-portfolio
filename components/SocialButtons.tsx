import styles from "../styles/Home.module.css";

export default function SocialButtons() {
  return (
    <div className={styles.socialsBox}>
      <a
        href="https://github.com/miachenmtl"
        title="GitHub"
        className={styles.socialLink}
      >
        <img
          src="/GitHub-Mark-64px.png"
          alt="GitHub Icon"
          className={styles.socialIcon}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mia-chen-84aa81170/"
        className={styles.socialLink}
        title="LinkedIn"
      >
        <img
          src="/LI-In-Bug.png"
          alt="LinkedIn icon"
          className={styles.socialIcon}
        />
      </a>
    </div>
  );
}
