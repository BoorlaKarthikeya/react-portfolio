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

          <p>I am a third-year Computer Science and Engineering undergraduate at Chaitanya Bharathi Institute of Technology. My passion lies in developing applications that create meaningful impact in the real world.</p>
          <p>I am a highly motivated and detail-oriented individual with a robust foundation in programming languages such as Java, Python, and C. Proficient in software development methodologies like Agile, I also have hands-on experience in frontend developmental tools. My expertise lies in  MERN stack development, along with proficiency in Django.</p>
          <p>In addition to my programming skills, I excel in machine learning and deep learning, utilizing frameworks like scikit-learn and TensorFlow. With expertise in natural language processing, I craft intelligent solutions adept at understanding human language patterns. Moreover, I am proficient in cloud computing, boasting hands-on experience with Google Cloud Computing and Amazon Web Services (AWS). My skill set extends to various DevOps tools, ensuring seamless integration and deployment of models. Furthermore, I possess a strong understanding of different types of networks, enhancing my ability to tackle diverse challenges efficiently.</p>
          {/* <p>In addition to my programming skills, I am well-versed in machine learning, utilizing frameworks such as scikit-learn and TensorFlow to create intelligent solutions. Furthermore, I possess proficiency in cloud computing, having hands-on experience with Google Cloud Computing.</p> */}
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro