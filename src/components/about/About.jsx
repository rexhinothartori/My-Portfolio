import React from 'react';
import './about.css';
import ME from '../../assets/images/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Who am I?</h5>
      <h2>My Story</h2>

      <div className="container about__container">
        <div className="about__me">
<div className="about__me-image">
<img src={ME} alt="About Image" />
</div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About