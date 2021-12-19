import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";

import styles from "../styles/InBetweenSection.module.css";

const HEADER_SCROLL_STOPS = [0.49, 0.53, 0.94, 0.98];

const ProjectsSection = (): JSX.Element => {
  const { scrollYProgress } = useViewportScroll();

  const [isRendered, setIsRendered] = useState(false);

  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        setIsRendered(latest > 0.49 && latest < 0.98);
      }),
    []
  );

  const x = useTransform(
    scrollYProgress,
    HEADER_SCROLL_STOPS,
    [100, 0, 0, -100]
  );
  const y = useTransform(
    scrollYProgress,
    HEADER_SCROLL_STOPS,
    [300, 0, 0, -100]
  );
  const scale = useTransform(
    scrollYProgress,
    HEADER_SCROLL_STOPS,
    [5, 1, 1, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    HEADER_SCROLL_STOPS,
    [0, 1, 1, 0]
  );
  const subheadOpacity = useTransform(
    scrollYProgress,
    [0.49, 0.53, 0.57, 0.61],
    [0, 1, 1, 0]
  );

  return (
    <>
      {isRendered && (
        <motion.div className={styles.projectsSection} style={{ opacity }}>
          <motion.h1
            className={`${styles.header} ${styles.projects}`}
            style={{ x, y, scale, opacity }}
          >
            Projects
          </motion.h1>
          <motion.p
            className={styles.projectsIntro}
            style={{ opacity: subheadOpacity }}
          >
            Here are my most recent side projects. Check out the READMEs in the
            GitHub repos for more details!
          </motion.p>
          <ProjectCard
            index={0}
            title="Random Jumps"
            imgSrc="/random-jumps.jpg"
            src="https://github.com/miachenmtl/random-jumps"
            demoLink="https://miachenmtl.github.io/random-jumps/"
          >
            Mini webapp using React to animate a knight's random walk on a
            chessboard. The goal of the project, besides giving something rather
            mesmerizing to look at, was to update my knowledge of React and its
            ecosystem, including hooks and React Testing Library.
          </ProjectCard>
          <ProjectCard
            index={1}
            title="Zero-Dependency Live Reload Server"
            imgSrc="/no-npm-install.jpg"
            src="https://github.com/miachenmtl/zero-dep-live-reload"
          >
            <p>
              Minimal node app for prototyping that serves html and triggers a
              page reload when the html is updated.
            </p>
            <p>
              I used to just use <code>create-react-app</code> when prototyping
              because it's hard to live without hot reload, but I got frustrated
              by how long it would take to initialize an app and then run{" "}
              <code>npm install</code>. I asked myself, is it possible to build
              a hot reload server using only the built-in node libraries? In
              brief, yes, it is, but there's a reason people use libraries...
            </p>
          </ProjectCard>
          <ProjectCard
            index={2}
            title="Portfolio"
            imgSrc="/portfolio-ss.jpg"
            src="https://github.com/miachenmtl/mia-chen-portfolio"
          >
            You're looking at it. It uses TypeScript, React, NextJS, Framer
            Motion, and is deployed to Vercel. Things look kinda rough right
            now, I'm still working on it!
          </ProjectCard>
        </motion.div>
      )}
    </>
  );
};

export default ProjectsSection;
