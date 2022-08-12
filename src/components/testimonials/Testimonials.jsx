import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/images/avatar1.png'
import AVTR2 from '../../assets/images/avatar2.png'
import AVTR3 from '../../assets/images/avatar3.png'
import AVTR4 from '../../assets/images/avatar4.png'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
  avatar:AVTR1,
  name:'Olgert Brati',
  review:'Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
},
{
  avatar:AVTR2,
  name:'Renis Gjonaj',
  review:'Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
},
{
  avatar:AVTR3,
  name:'Erion Hajdini',
  review:'Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
}
// {
//   avatar:AVTR4,
//   name:'Erion Hajdini',
//   review:'Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
// }
]
  


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className='smallTitle experience__titles-center'>Review from clients</h5>
      <h2 className='bigTitle experience__titles-center'>Testimonials</h2>

      <Swiper className='container testimonials__container'
//install swiper modules
modules={[Pagination]}
spaceBetween={40}
slidesPerView={1}
pagination={{clickable:true}}>
      {
      data.map(({avatar, name, review}, index) => {
        return (
          <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
        )
      })
    }
      </Swiper>
    </section>
  )
}

export default Testimonials