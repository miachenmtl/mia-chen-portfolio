import type { ReactNode, ReactElement } from "react";

import styles from "../styles/InBetweenSection.module.css";

interface cardProps {
  children: ReactNode;
}

export default function Card({ children }: cardProps): ReactElement {
  return <div className={styles.card}>{children}</div>;
}
