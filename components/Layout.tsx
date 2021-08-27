import type { ReactElement } from "react";

import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function Layout({ children }): ReactElement {
  return (
  <>
    <NavMenu />
      <main>{children}</main>
    <Footer />
  </>
  );
}