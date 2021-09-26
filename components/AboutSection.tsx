import { motion, useViewportScroll, useTransform } from "framer-motion";
import Card from "./Card";

import styles from "../styles/InBetweenSection.module.css";

const SCROLL_STOPS = [0.04, 0.14, 0.45, 0.5];

export default function AboutSection() {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, SCROLL_STOPS, [300, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, SCROLL_STOPS, [10, 1, 1, 0]);
  const opacity = useTransform(scrollYProgress, SCROLL_STOPS, [0, 1, 1, 0]);

  return (
    <div className={styles.aboutSection}>
      <motion.h2 className={styles.header} style={{ y, scale, opacity }}>
        About
      </motion.h2>
      <Card index={1}>
        <p>
          Hi, I’m Mia Chen, a self-taught web developer with 3 years of web
          development experience living in Montréal. I started learning HTML and
          CSS while in grad school for an English PhD to build WordPress sites
          for conferences and such. My JavaScript journey began in 2016 (an{" "}
          <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">
            interesting time
          </a>{" "}
          in JavaScript history).
        </p>
      </Card>
      <Card index={2}>
        <p>
          After, I worked remotely for Tail Risk Analytics, a data science
          consultancy startup based in Singapore for three years. My main role
          was developing an MVP for a data-sharing web platform. Most of my work
          was on the front end, which used React, React Bootstrap, and Apollo
          Client, but I also helped with the back end, which used Express and
          GraphQL. We used Git, Github, and Pivotal Tracker for collaboration.
        </p>
      </Card>
      <Card index={3}>
        <p>
          In my free time, I like to run a lot, and I enjoy preparing and eating
          vegan food. I’ve been into nerdy stuff my whole life. Currently, I am
          seeking employment opportunities.
        </p>
      </Card>
    </div>
  );
}
