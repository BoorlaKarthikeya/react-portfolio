import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Karthikeya Boorla</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#course">Courses</a></li>
        <li><a href="#Achievements">Achievements</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/boorla-karthikeya/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/BoorlaKarthikeya/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/__mr.perfect__001/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
