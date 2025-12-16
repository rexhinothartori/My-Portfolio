<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> fb6fb92f23cada87d08180ef1c5e7babdf7b01e7
import './header.css';
import CTA from './CTA';
import MySelf from '../../assets/images/rexhino.png';
// import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
<<<<<<< HEAD
  <header id="header">
  <div className="container header__container">
    <div className="header__left">
      <h1>Rexhino Thartori</h1>
      <h4 className="text-light">Front-End Developer & Web Designer</h4>

      <div className="me">
        <img src={MySelf} alt="me" />
      </div>

      <CTA />
    </div>

    <div className="header__right" />
    </div>
</header>

  )
}

export default Header;
=======
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
>>>>>>> fb6fb92f23cada87d08180ef1c5e7babdf7b01e7
