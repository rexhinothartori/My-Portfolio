<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> fb6fb92f23cada87d08180ef1c5e7babdf7b01e7
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className='flex__footer'>
      {/* <div>
      <a href="#" className='footer__logo'>Egator</a>
      </div> */}

      <div>
      <ul className='permalinks'>
      <h2>Quick Links</h2>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>

      <div className='contact__footer'>
      <ul>
      <h2>Contact Details</h2>
<<<<<<< HEAD
        <li> <MdOutlineEmail/> <a href="mailto:rexhino.thartori@gmail.com">rexhino.thartori@gmail.com</a></li>
        <li> <BsWhatsapp/><a href="https://wa.link/eg1l7c"> 0692868633</a> </li>
=======
        <li> <MdOutlineEmail/> rexhino.thartori@gmail.com</li>
        <li> <RiMessengerLine/> rexhino thartori</li>
        <li> <BsWhatsapp/> 0692868633</li>
>>>>>>> fb6fb92f23cada87d08180ef1c5e7babdf7b01e7
      </ul>
      </div>

      <div>
      <div>
      <h2>Social Links</h2>
        <ul className="footer__socials">
          <li>
        <a href="https://facebook.com"><FaFacebookF/></a>
        </li>
        <li>
        <a href="https://instagram.com"><BsInstagram/></a>
        </li>
        <li>
        <a href="https://twitter.com"><FaLinkedinIn/></a>
        </li>
        </ul>
      </div>
      </div>

      </div>
      <div className="footer__copyright">
        <small>
          &copy; Rexhino's Site. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer