import { ReactElement } from "react";
import Link from "next/link";

export default function NavMenu(): ReactElement {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </li>
        <li>
          <Link href="/CV">
            <a>cv</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}