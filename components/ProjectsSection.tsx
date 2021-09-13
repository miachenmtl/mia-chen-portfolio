import ProjectCard from "./ProjectCard";

import styles from "../styles/InBetweenSection.module.css";

export default function ProjectsSection() {
  return (
    <div className={styles.projectsSection}>
      <h1 className={styles.header}>Projects</h1>
      <p>
        Here are my most recent side projects. Check out the READMEs in the
        GitHub repos for more details!
      </p>
      <ProjectCard
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
        title="Zero-Dependency Live Reload Server"
        imgSrc="/no-npm-install.jpg"
        src="https://github.com/miachenmtl/zero-dep-live-reload"
      >
        <p>
          Minimal node app for prototyping that serves html and triggers a page
          reload when the html is updated.
        </p>
        <p>
          I used to just use <code>create-react-app</code> when prototyping
          because it's hard to live without hot reload, but I got frustrated by
          how long it would take to initialize an app and then run{" "}
          <code>npm install</code>. I asked myself, is it possible to build a
          hot reload server using only the built-in node libraries? In brief,
          yes, it is, but there's a reason people use libraries...
        </p>
      </ProjectCard>
      <ProjectCard
        title="Portfolio"
        imgSrc="/portfolio-ss.jpg"
        src="https://github.com/miachenmtl/mia-chen-portfolio"
      >
        You're looking at it. It uses TypeScript, React, NextJS, Framer Motion,
        and is deployed to Vercel. Things look kinda rough right now, I'm still
        working on it!
      </ProjectCard>
    </div>
  );
}
