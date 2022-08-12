import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.github.com/" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials