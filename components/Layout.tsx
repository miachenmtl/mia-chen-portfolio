import type { ReactElement, ReactNode } from "react";

import NavMenu from "./NavMenu";
import SocialButtons from "./SocialButtons";
import styles from "../styles/Home.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div className={styles.appWrapper}>
      <NavMenu />
      {children}
      <SocialButtons />
    </div>
  );
}
