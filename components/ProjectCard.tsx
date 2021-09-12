import type { ReactNode } from "react";

import styles from "../styles/InBetweenSection.module.css";

type projectCardProps = {
  title: string;
  imgSrc: string;
  src: string;
  demoLink?: string;
  children: ReactNode;
};

export default function ProjectCard({
  title,
  imgSrc,
  demoLink = "",
  src,
  children,
}: projectCardProps) {
  const handleClick = () => {
    window.open(demoLink || src, "_blank").focus();
  };
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectTitle}>{title}</div>
      <div className={styles.projectSectionWrapper}>
        <img
          onClick={handleClick}
          className={styles.projectImage}
          src={imgSrc}
        />
      </div>
      <div className={styles.projectSectionWrapper}>
        <div className={styles.projectText}>{children}</div>
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
    </div>
  );
}
