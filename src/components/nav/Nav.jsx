import './nav.css';
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineCheckCircle,
  AiOutlinePhone
} from 'react-icons/ai';
import { useState } from 'react';
import ScrollLink from '../ScrollLink';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <ScrollLink
        to="#"
        onActive={setActiveNav}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </ScrollLink>

      <ScrollLink
        to="about"
        onActive={setActiveNav}
        className={activeNav === 'about' ? 'active' : ''}
      >
        <AiOutlineUserSwitch />
      </ScrollLink>

      <ScrollLink
        to="experience"
        onActive={setActiveNav}
        className={activeNav === 'experience' ? 'active' : ''}
      >
        <AiOutlineCheckCircle />
      </ScrollLink>

      <ScrollLink
        to="contact"
        onActive={setActiveNav}
        className={activeNav === 'contact' ? 'active' : ''}
      >
        <AiOutlinePhone />
      </ScrollLink>
    </nav>
  );
};

export default Nav;
