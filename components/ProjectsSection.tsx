import ProjectCard from "./ProjectCard";

import styles from "../styles/InBetweenSection.module.css";

export default function ProjectsSection() {
  return (
    <div className={styles.projectsSection}>
      <h1>Projects</h1>
      <p>
        Here are my most recent side projects. Further details can be found in
        the readmes on Github.
      </p>
      <ProjectCard
        title="Random Jumps"
        imgSrc="/random-jumps.jpg"
        src="https://github.com/miachenmtl/random-jumps"
        demoLink="https://miachenmtl.github.io/random-jumps/"
      >
        Mini webapp using React to animate a knight's random walk on a
        chessboard. I did this project to update my knowledge of React and its
        ecosystem, including hooks and React Testing Library.
      </ProjectCard>
      <ProjectCard
        title="Zero-Dependency Live Reload Server"
        imgSrc="/no-npm-install.jpg"
        src="https://github.com/miachenmtl/zero-dep-live-reload"
      >
        Minimal node app for prototyping that serves html and triggers a page
        reload when the html is updated. I used to just use `create-react-app`
        when prototyping, but I got frustrated by how long it would take to
        initialize an app and run `nom install`. I then used a blank HTML
        template, but found myself missing hot reload, so I wondered if it was
        possible to build a hot reload server using only the built-in node
        libraries. I discovered that it is indeed possible (with the limitation
        that it’s a simple page reload without maintaining state, i.e. live
        reload and not hot reload), but there’s a reason people use libraries.
        Setting up a websocket connection using only XXX was not easy!
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
