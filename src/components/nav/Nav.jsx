import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUserSwitch, AiFillCheckCircle} from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUserSwitch/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><AiFillCheckCircle/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className = {activeNav === '#services' ? 'active' : ''}><AiFillCheckCircle/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><AiFillCheckCircle/></a>
    </nav>
  )
}

export default Nav;