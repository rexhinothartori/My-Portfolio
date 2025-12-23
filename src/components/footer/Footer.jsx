import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {MdEmail  } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import ScrollLink from '../ScrollLink';

const Footer = () => {
  return (
    <footer className='mt-5'>
      <div className='flex__footer'>
      {/* <div>
      <a href="#" className='footer__logo'>Egator</a>
      </div> */}

      <div>
      <ul className='permalinks'>
      <h2>Quick Links</h2>
        <li><ScrollLink to="#" as="button">Home</ScrollLink></li>
        <li><ScrollLink to="about" as="button">About</ScrollLink></li>
        <li><ScrollLink to="experience" as="button">Experience</ScrollLink></li>
        <li><ScrollLink to="portfolio" as="button">Portfolio</ScrollLink></li>
        <li><ScrollLink to="testimonials" as="button">Testimonials</ScrollLink></li>
        <li><ScrollLink to="contact" as="button">Testimonials</ScrollLink></li>
      </ul>
      </div>

      <div className='contact__footer'>
      <ul>
      <h2>Contact Details</h2>
        <li> <MdEmail /> <a href="mailto:rexhino.thartori@gmail.com">rexhino.thartori@gmail.com</a></li>
        <li> <IoLogoWhatsapp /><a href="https://wa.link/eg1l7c"> 0692868633</a> </li>
      </ul>
      </div>

      <div>
      <div>
      <h2>Social Links</h2>
        <ul className="footer__socials">
          <li>
        <a href="https://www.facebook.com/rexhino.thartori.1"><FaFacebookF/></a>
        </li>
        <li>
        <a href="https://www.instagram.com/rexhinothartori/"><BsInstagram/></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/rexhino-thartori-985939194/"><FaLinkedinIn/></a>
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