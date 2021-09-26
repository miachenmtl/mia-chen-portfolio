import { motion, useViewportScroll, useTransform } from "framer-motion";

import Hero from "./Hero";
import Sidekick from "./Sidekick";
import Logo from "./Logo";

import styles from "../styles/LandingScreen.module.css";

export default function LandingScreen() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <motion.header className={styles.fullScreenBackdrop} style={{ opacity }}>
      <svg
        className={styles.noiseSvg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
      >
        <defs>
          <filter
            id="noise"
            x="0"
            y="0"
            width="100%"
            height="100%"
            opacity="0.4"
          >
            <feTurbulence baseFrequency="0.8" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="white"
          style={{ filter: "url(#noise)" }}
        />
      </svg>

      <div className={styles.landingWrapper}>
        <Hero />
        <Sidekick />
        <Logo />
      </div>
    </motion.header>
  );
}
