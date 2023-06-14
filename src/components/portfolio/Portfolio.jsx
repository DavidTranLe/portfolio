import React from 'react';
import IMG1 from '../../assets/cinematch.png';
import IMG2 from '../../assets/todo.png';
import IMG4 from '../../assets/CarCar.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Cinematch',
      img: IMG1,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'FastAPI | React',
      link: 'https://team-tommy.gitlab.io/cinematch/',
      gitlab: 'https://gitlab.com/team-tommy/cinematch',
    },
    {
      id: 2,
      title: 'Car Car',
      img: IMG4,
      description:
        'A single page application built using microservice architecture to handle service appointments, sales, and inventory management for an automobile sales and service center',
      technologies: 'Django | React',
      gitlab: 'https://gitlab.com/contactdavidtle/carcar',
    },
    {
      id: 3,
      title: 'Task Manager',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'Django',
      gitlab: 'https://gitlab.com/contactdavidtle/task-manager',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
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
