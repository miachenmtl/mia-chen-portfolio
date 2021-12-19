import * as React from "react";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import ContactButton from "./ContactButton";
import styles from "../styles/BottomScreen.module.css";

const SCROLL_STOPS = [0, 0.93, 1];

const BottomScreen = (): JSX.Element => {
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, SCROLL_STOPS, ["100%", "100%", "0%"]);
  const opacity = useTransform(scrollYProgress, SCROLL_STOPS, [0, 0, 1]);
  return (
    <motion.div className={styles.bottomScreenBg} style={{ x, opacity }}>
      <div className={styles.bottomScreenBox}>
        <p className={styles.theEnd}>The End!</p>
      </div>
      <div className={styles.contactWrapper}>
        <ContactButton />
      </div>
    </motion.div>
  );
};

export default BottomScreen;
