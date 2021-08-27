import type { ReactElement } from "react";

interface cardProps {
  title: string,
  children: ReactElement,
}

export default function Card(props: cardProps): ReactElement {
  return (
    <div>
      card
    </div>
  );
}
