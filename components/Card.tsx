import type { useEffect, ReactNode, ReactElement } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import styles from "../styles/InBetweenSection.module.css";

interface cardProps {
  index: number;
  children: ReactNode;
}

export default function Card({ index, children }: cardProps): ReactElement {
  const { scrollYProgress } = useViewportScroll();
  const initialStop = index * 0.12 - 0.02;
  const stops = [
    initialStop,
    initialStop + 0.04,
    initialStop + 0.9,
    initialStop + 0.13,
  ];

  const x = useTransform(scrollYProgress, stops, [
    "100%",
    "-50%",
    "-50%",
    "-150%",
  ]);
  const scale = useTransform(scrollYProgress, stops, [0, 1, 1, 0]);
  const opacity = useTransform(scrollYProgress, stops, [0, 1, 1, 0]);

  return (
    <motion.div
      className={styles.card}
      transition={{ duration: 0.5 }}
      style={{ x, scale, opacity, y: "-50%" }}
    >
      {children}
    </motion.div>
  );
}
