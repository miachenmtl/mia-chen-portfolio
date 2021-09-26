import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import styles from "../styles/InBetweenSection.module.css";

type projectCardProps = {
  index: number;
  title: string;
  imgSrc: string;
  src: string;
  demoLink?: string;
  children: ReactNode;
};

export default function ProjectCard({
  index,
  title,
  imgSrc,
  demoLink = "",
  src,
  children,
}: projectCardProps) {
  const [hasScroll, setHasScroll] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const initialStop = index * 0.11 + 0.61;
  const stops = [
    initialStop,
    initialStop + 0.04,
    initialStop + 0.09,
    initialStop + 0.13,
  ];

  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        if (latest >= initialStop + 0.04 && latest <= initialStop + 0.09) {
          setHasScroll(true);
        } else {
          setHasScroll(false);
        }
      }),
    []
  );

  const x = useTransform(scrollYProgress, stops, [
    "100%",
    "-50%",
    "-50%",
    "-150%",
  ]);
  const scale = useTransform(scrollYProgress, stops, [0, 1, 1, 0]);
  const opacity = useTransform(scrollYProgress, stops, [0, 1, 1, 0]);
  const handleClick = () => {
    window.open(demoLink || src, "_blank")?.focus();
  };
  return (
    <motion.div
      className={styles.projectCard}
      style={{ opacity, x, scale, y: "-50%" }}
    >
      <div className={styles.projectTitle}>{title}</div>
      <div className={styles.projectBody}>
        <div className={styles.imageWrapper}>
          <img
            onClick={handleClick}
            className={styles.projectImage}
            src={imgSrc}
          />
        </div>
        <div
          className={styles.projectText}
          style={{ overflow: hasScroll ? "auto" : "hidden" }}
        >
          {children}
        </div>
      </div>
      <div className={styles.projectFooter}>
        {demoLink && (
          <>
            <a href={demoLink}>Demo</a>
            <br />
          </>
        )}
        <a href={src}>Source code</a>
      </div>
    </motion.div>
  );
}
