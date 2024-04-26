import React from 'react';
import IMG1 from '../../assets/cinematch.png';
import IMG2 from '../../assets/todo.png';
import IMG4 from '../../assets/CarCar.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      title: 'Cinematch',
      img: IMG1,
      description:
        `Cinematch is a a single page application built in React and FastAPI with postgresSQL databse.
        It is a recommendation service that allows users to find movies to add into their watchlist and gives a movie suggestion based on their wishlist.
        I built out the authentication manually without using any third party parties.
        **Disclaimer** I have stopped paying the subscription to keep my backend microservices deployed but you can still check out the general design of the website
        before authentication as it is representative of the rest of the project. I may decide to redeploy elsewhere in the future.`,
      technologies: 'FastAPI | React | PostgreSQL | Python | Javascript | HTML | CSS | Bootstrap',
      link: 'https://team-tommy.gitlab.io/cinematch/',
      gitlab: 'https://gitlab.com/team-tommy/cinematch',
    },
    {
      title: 'Car Car',
      img: IMG4,
      description:
        'A single page application built using microservice architecture to handle service appointments, sales, and inventory management for an automobile sales and service center',
      technologies: 'Django | React | PostgreSQL | Python | Javascript | HTML | CSS | Bootstrap',
      gitlab: 'https://gitlab.com/contactdavidtle/carcar',
    },
    {
      title: 'Task Manager',
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'Django | SQLite | Python | HTML | CSS',
      gitlab: 'https://gitlab.com/contactdavidtle/task-manager',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <p></p>
            <div className="portfolio__item-cta">
              {pro.github ? (
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Github
                </a>
              ) : null}
              {pro.gitlab ? (
                <a
                  href={pro.gitlab}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Gitlab
                </a>
              ) : null}
              {pro.link ? (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
