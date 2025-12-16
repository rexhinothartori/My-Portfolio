import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/images/portfolio1.png';
import IMG2 from '../../assets/images/portfolio2.png';
import IMG3 from '../../assets/images/portfolio3.png';
import IMG4 from '../../assets/images/portfolio4.png';
import IMG5 from '../../assets/images/portfolio5.png';
import IMG6 from '../../assets/images/portfolio6.png';


const data = [
  {
    id:1,
    image:IMG1,
    title:'Presentative Survey',
<<<<<<< HEAD
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
  },
  {
      id:2,
      image:IMG2,
      title:'Digital Marketing Agency',
      demo:'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    },
    {
  id:3,
  image:IMG3,
  title:'Affiliate Marketing',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
  id:4,
  image:IMG4,
  title:'Pricing Website',
  demo:'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
  id:5,
  image:IMG5,
  title:'Lead Generation',
  demo:'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
  id:6,
  image:IMG6,
  title:"E-Commerce",
  demo:'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
=======
    // github:'https://github.com',
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
},
{
    id:2,
    image:IMG2,
    title:'Digital Marketing Agency',
    // github:'https://github.com',
    demo:'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
id:3,
image:IMG3,
title:'Affiliate Marketing',
github:'https://github.com',
demo:'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
id:4,
image:IMG4,
title:'Pricing Website',
// github:"https://github.com",
demo:'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},
{
id:5,
image:IMG5,
title:'Lead Generation',
// github:'https://github.com',
demo:'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
{
id:6,
image:IMG6,
title:"E-Commerce",
// github:'https://github.com',
demo:'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
}
>>>>>>> fb6fb92f23cada87d08180ef1c5e7babdf7b01e7
  ]

const Portfolio = () => {
  return (
<<<<<<< HEAD
    <section id='portfolio' className='container'>
=======
    <section id='portfolio'>
      <h5 className='smallTitle experience__titles-center'>My Recent Work</h5>
>>>>>>> fb6fb92f23cada87d08180ef1c5e7babdf7b01e7
      <h2 className='bigTitle experience__titles-center'>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            {/* <a href={github} className='btn' target='_blank'>Github</a> */}
            <a href={demo} className='btn btn-primary' target='_blank'>Visit Website</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio