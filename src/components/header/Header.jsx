import React from 'react';
import './header.css';
import CTA from './CTA';
import MySelf from '../../assets/images/rexhino.png';
// import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div>
        <h1>Rexhino Thartori</h1>
      <h4 className='text-light'>Front-End Developer</h4>
      {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      <div className="me">
        <img src={MySelf} alt="me" width="auto" height="100%"/>
      </div>
      <CTA/>
      </div>
      </div>
    </header>
  )
}

export default Header