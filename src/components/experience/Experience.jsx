import React from 'react';
import './experience.css';
import {FiCheckCircle} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='experience__titles-center'>My Skills</h5>
      <h2 className='experience__titles-center'>My Experience</h2>

      <div className="container experience__container">
          {/*Start of front end  */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <FiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Vue Js</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        {/*End of front end  */}
        
        {/*Start of back end  */}
        <div className="experience__backend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Laravel</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Redux</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>MySql</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        {/*End of back end  */}
      </div>
     </section>
  )
}

export default Experience