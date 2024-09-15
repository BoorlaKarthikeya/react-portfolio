import React, { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    async function getApi() {
      try {
        const num = Math.floor(Math.random() * 100);
        const response = await fetch(`https://dummyjson.com/quotes/${num}`);
        const data = await response.json();
        console.log(data);
        setQuoteData(data);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    getApi();
  }, []);

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">
        Karthikeya Boorla
      </a>
      {quoteData && (
        <div className="quote">
          <em>
            {quoteData.quote} <sub>-{quoteData.author}</sub>
          </em>
        </div>
      )}
      {/* Rest of the JSX */}
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#course">Courses</a>
        </li>
        <li>
          <a href="#Achievements">Achievements</a>
        </li>
        <li>
          <a href="#work">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#testmonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/boorla-karthikeya/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/BoorlaKarthikeya/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/karthikeya_boorla/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
