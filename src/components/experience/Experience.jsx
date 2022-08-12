import React from 'react';
import './experience.css';
import {FiCheckCircle} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='experience__titles-center smallTitle'>My Skills</h5>
      <h2 className='experience__titles-center bigTitle'>My Experience</h2>

      <div className="container experience__container">
          {/*Start of front end  */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
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
            <h4>Jquery</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>React Js</h4>
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
          <h3>UI/UX Design</h3>
          <div className="experience__content">
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Wordpress</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>CS Cart</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Prestashop</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Adobe Photoshop</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Adobe Illustrator</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <FiCheckCircle />
            <div>
            <h4>Adobe XD</h4>
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