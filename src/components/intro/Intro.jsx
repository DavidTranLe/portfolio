import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>Over the course of my software engineering career, I have been actively involved in HTML, CSS, Python, and JavaScript work. From crafting landing pages to developing APIs, I've gained hands-on experience in various aspects of web development. Collaborating with fellow developers from different corners of the globe has sharpened my teamwork skills. Moreover, my previous endeavors outside the tech realm have taught me how to thrive in demanding situations, enabling me to be efficient and productive even in highly stressful environments, qualities that are highly valued in the tech industry.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
