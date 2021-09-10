import Card from "./Card";

import styles from "../styles/InBetweenSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <h2 className={styles.header}>About</h2>
      <Card>
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
      <Card>
        <p>
          After, I worked remotely for Tail Risk Analytics, a data science
          consultancy startup based in Singapore for three years. My main role
          was developing an MVP for a data-sharing web platform. Most of my work
          was on the front end, which used React, React Bootstrap, and Apollo
          Client, but I also helped with the back end, which used Express and
          GraphQL. We used Git, Github, and Pivotal Tracker for collaboration.
        </p>
      </Card>
      <Card>
        <p>
          In my free time, I like to run a lot, and I enjoy preparing and eating
          vegan food. I’ve been into nerdy stuff my whole life. Currently, I am
          seeking employment opportunities.
        </p>
      </Card>
    </div>
  );
}
