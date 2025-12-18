import React from 'react';
import './about.css';
import ME from '../../assets/images/me.JPG';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about' className='container mt-5'>
      <h2 className='bigTitle experience__titles-center'>My Story</h2>

      <div className="container about__container">
        <div className="about__me">
<div className="about__me-image">
<img src={ME} alt="About Image" width="100%"/>
</div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about_icon' />
              <h2>Experience</h2>
              <h4>3+ years working</h4>
            </article>
            <article className='about__card'>
            <FiUsers className='about_icon' />
              <h2>Clients</h2>
              <h4>200+ Worldwide</h4>
            </article>
            <article className='about__card'>
            <VscFolderLibrary className='about_icon' />
              <h2>Projects</h2>
              <h4>200+ Completed</h4>
            </article>
          </div>

          <p className='about_text'>
I’m Rexhino Thartori, a Front-End Developer and Web Designer with over six years of experience building responsive, user-focused websites and web applications. 
I specialize in React.js for dynamic web apps and have extensive experience with WordPress and Shopify, creating practical, performance-driven solutions for businesses and e-commerce platforms.

Throughout my career, I’ve contributed to projects at Tetrix, Inovatech, Webmarco, and Albweb, honing my skills in HTML5, CSS3, JavaScript, and UI/UX design.
 I’m passionate about crafting clean, intuitive interfaces that enhance user experience while aligning with business goals.

Fluent in Albanian and English, with working knowledge of Spanish, German, and Italian, I enjoy collaborating with international teams and clients, bringing a versatile and solution-oriented approach to every project.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About