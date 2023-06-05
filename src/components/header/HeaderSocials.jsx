import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {  FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/boorla-karthikeya/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/BoorlaKarthikeya/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/__mr.perfect__001/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      
    </div>
  )
}

export default HeaderSocials