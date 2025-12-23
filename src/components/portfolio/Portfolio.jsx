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
    title:'Silver & Gold',
    demo:'https://silver-gold.it/',
  },
  {
      id:2,
      image:IMG2,
      title:'Salute On Top',
      demo:'https://saluteontop.it/',
    },
    {
  id:3,
  image:IMG3,
  title:'Tetrix ',
  github:'https://github.com',
  demo:'https://betetrix.com/'
  },
  {
  id:4,
  image:IMG4,
  title:'2Visionaries',
  demo:'https://twovisionaries.com/'
  },
  {
  id:5,
  image:IMG5,
  title:'Tirana Invest Kredit',
  demo:'https://tiranainvestkredit2000.com/'
  },
  {
  id:6,
  image:IMG6,
  title:"AMG Montaggi",
  demo:'https://amgmontaggi.com/'
  }
  ]

const Portfolio = () => {
  return (
    <section id='portfolio' className='container mt-5'>
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