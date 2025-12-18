import './nav.css';
import {AiOutlineHome, AiOutlineUserSwitch, AiOutlineCheckCircle, AiOutlineCodeSandbox, AiOutlinePhone} from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' id='links' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' id='links' onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUserSwitch/></a>
      <a href='#experience' id='links' onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><AiOutlineCheckCircle/></a>
      <a href='#contact' id='links' onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav;