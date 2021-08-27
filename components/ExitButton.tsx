import { MouseEvent } from "react";
import styles from "../styles/components.module.css";

interface ExitButtonProp {
  callback: (e: MouseEvent) => void;
}

export const ExitButton = ({ callback }: ExitButtonProp): JSX.Element => {
  return (
    <button className={styles.exitButton} type="button" onClick={callback}>
      X
    </button>
  );
};
