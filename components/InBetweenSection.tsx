import * as React from "react";

import { AboutSection } from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import styles from "../styles/InBetweenSection.module.css";

export default function InBetweenSection(): JSX.Element {
  return (
    <div className={styles.inBetweenSection}>
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
