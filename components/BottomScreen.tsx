import { motion, useViewportScroll, useTransform } from "framer-motion";

import ContactButton from "./ContactButton";
import styles from "../styles/BottomScreen.module.css";

const SCROLL_STOPS = [0, 0.93, 1];

export default function BottomScreen() {
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, SCROLL_STOPS, ["100%", "100%", "0%"]);
  const opacity = useTransform(scrollYProgress, SCROLL_STOPS, [0, 0, 1]);
  return (
    <motion.div className={styles.bottomScreenBg} style={{ x, opacity }}>
      <div className={styles.bottomScreenBox}>
        <p className={styles.theEnd}>The End!</p>
        <ContactButton />
      </div>
    </motion.div>
  );
}
