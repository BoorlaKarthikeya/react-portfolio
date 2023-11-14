import React from 'react';
import IMG1 from '../../assets/oracle.jpg';
import IMG2 from '../../assets/swayam.png';
import IMG3 from '../../assets/cloud-computing-google.jpg';
import IMG4 from '../../assets/machine_learning.jpg';

import './courses.css';

const courses = () => {
  const course = [
    {
      id: 5,
      title: 'Machine learning Specialization - Coursera (Andrew NG)',
      img: IMG4,
      link: "https://coursera.org/share/b877b4df1226c4ebb7c6bba32758c190",

    },
    {
      id: 4,
      title: 'Google Cloud Computing Foundations and Generative AI Arcade Game',
      img: IMG3,
      link: "https://www.cloudskillsboost.google/public_profiles/4be8e0c8-981a-40a3-8314-144bdfb4dd58",

    },
    {
      id: 1,
      title: 'Oracle Certified Associate , Java SE 8 Programmer',
      img: IMG1,
      link: "https://drive.google.com/file/d/1gwLz3bzT6dD_jg-qQ6Mzc_wxlUrnj3UE/view?usp=sharing",

    },
    {
      id: 2,
      title: 'Ethical Hacking - NPTEL',
      img: IMG2,
    
      link: "https://drive.google.com/file/d/11ScUC_BegyWov6mopt0h4toclgriYXJ8/view?usp=sharing",

    },
    {
      id: 3,
      title: "Cryptography and Network Security - NPTEL",
      img: IMG2,

      link: "https://drive.google.com/file/d/1blixYrFxDN2IVadpohxnPkZld3wNiMaf/view?usp=sharing",

    },
    
    
  ];

  return (
    <section id="course">

      <h2>Courses / certifications</h2>

      <div className="container course__container">
        {course.map((pro) => (
          <article className="course__item" key={pro.id}>
            <div className="course__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="course__item-content">
              <h3>{pro.title}</h3>
            </div>
            <div className="course__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Certificate
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default courses;
