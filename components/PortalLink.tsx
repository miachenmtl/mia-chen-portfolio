import { MouseEvent, useState } from "react";
import { motion, AnimatePresence, Target } from "framer-motion";

import { ExitButton } from "./ExitButton";
import styles from "../styles/components.module.css";

interface PortalLinkProps {
  linkText: string;
  srcUrl: string;
}

export const PortalLink = ({
  srcUrl,
  linkText,
}: PortalLinkProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDoneOpening, setIsDoneOpening] = useState(false);
  const [dimensions, setDimensions] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const closed: Target = {
    backgroundColor: "#3f3",
    width: 0,
    height: 0,
    left: dimensions.x,
    top: dimensions.y,
  };
  const opened: Target = {
    left: 0,
    top: 0,
    backgroundColor: "#909",
    width: "100vw",
    height: "100vh",
  };

  const handleClick = ({
    screenX,
    screenY,
  }: MouseEvent<HTMLButtonElement>): void => {
    if (typeof window !== undefined) {
      setDimensions({
        x: screenX,
        y: screenY,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    setIsOpen(true);
  };
  const handleComplete = (): void => {
    setIsDoneOpening(true);
  };
  const handleClose = (): void => {
    setIsDoneOpening(false);
    setIsOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {linkText}
      </button>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            className={styles.fixed}
            initial={closed}
            animate={opened}
            exit={closed}
            onAnimationComplete={handleComplete}
            transition={{ duration: 2 }}
          >
            {isDoneOpening && (
              <>
                <iframe
                  src={srcUrl}
                  sandbox="allow-scripts"
                  width={dimensions.width}
                  height={dimensions.height}
                />
                <ExitButton callback={handleClose} />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
