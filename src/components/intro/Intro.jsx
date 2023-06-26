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
          <p>Among the things that bring me the most joy in life, there are a few that stand out: finding ways to streamline processes and maximize efficiency, exercising creativity by producing things with limited resources, and collaborating with others towards a shared objective. These passions are beautifully integrated in the field of programming and software development, which is why I was naturally drawn to it during the pandemic and invested time in self-teaching. Subsequently, I embarked on a 19-week course at Hack Reactor to delve into the paradigms of software development and currently work with helping students on their own coding career while I assist them in their gaps of knowledge and help debug their projects and programs.</p>
          <p>Drawing upon my experience in the hospitality industry, I have always been drawn to collaborative work environments where I can work alongside others to achieve a common goal. My attention to detail and ability to quickly adapt to changing circumstances have proven to be valuable assets in any team-based setting.</p>
          <p>In my free time, I tend to spend time reading books or dancing Brazilian Zouk. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
