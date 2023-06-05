import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/karthikeyaProfile2.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">

          <p>I am a Computer Science and Engineering undergrad at Chaitanya Bharathi Institute of Technology pursuing my junior year. I am passionate about building applications that make an impact in the real world.</p>
          <p>I am a highly motivated and detail-oriented individual with a strong foundation in programming languages such as Java, Python, and C. With experience in software development methodologies such as Agile, I have experience with HTML, CSS, JavaScript, and frontend developmental tools such as bootstrap. I am eager to apply my skills to real-world projects and expand my knowledge.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro