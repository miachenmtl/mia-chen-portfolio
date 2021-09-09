import ContactButton from "./ContactButton";
import styles from "../styles/BottomScreen.module.css";

export default function BottomScreen() {
  return (
    <div className={styles.bottomScreenBg}>
      <div className={styles.bottomScreenBox}>
        <p className={styles.theEnd}>The End!</p>
        <ContactButton />
      </div>
    </div>
  );
}
