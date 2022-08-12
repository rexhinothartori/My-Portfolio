import React from 'react';
import './about.css';
import ME from '../../assets/images/me.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
      <h5 className='smallTitle experience__titles-center'>Who am I?</h5>
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
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className='about__card'>
            <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
            <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Iaculis nunc sed augue lacus viverra vitae congue eu. Quis eleifend quam adipiscing vitae proin sagittis nisl. Sapien eget mi proin sed libero enim sed faucibus turpis. Posuere urna nec tincidunt praesent semper feugiat nibh. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus gravida quis blandit turpis cursus in. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Ullamcorper malesuada proin libero nunc consequat interdum varius. Urna nunc id cursus metus. Pulvinar sapien et ligula ullamcorper malesuada. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About