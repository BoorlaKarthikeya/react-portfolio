import React from 'react';
import IMG1 from '../../assets/cbit.jpeg';
import IMG2 from '../../assets/srichaitanya.jpeg';
import IMG3 from '../../assets/tswreis.jpeg';

import './education.css';

const education = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Chaitanya Bharathi institute of technology (2021 -2025)',
      subtitle: "Computer Science Engineering (CSE)",
      img: IMG1,
      description:
      "⚡ I have taken variety of courses related to  Full stack development ,Data Structures and Algorithms , Object Oriented Programming etc. Apart from this, I have done courses on cryptography , Network Security and Ethical Hacking.",
      grade: 'CGPA : 9.4',
      link: "https://www.cbit.ac.in/",

    },
    {
      id: 2,
      title: 'Sri Chaitanya Junior college , DD colony , Hyderabad (2019 - 2025 )',
      subtitle: "class : XII  Major: Science (Physics, Chemistry, Mathematics) ",
      img: IMG2,
      description:
      "⚡ I have studied to secure admission in a prestigious engineering institution by utilizing my strong foundation in Physics, Chemistry, and Mathematics and the training received for the Joint Entrance Examination (JEE).",
      grade: 'Grade : 98%',
      link: "https://srichaitanya.net/",

    },
    {
      id: 3,
      title: "Telangana Social Welfare Residential School , Shaikpet , Hyderabad (2017 - 2019)",
      subtitle: "Class : X",
      img: IMG3,
      description:
      "⚡TSWRS (shaikpet Hyderabad) is a reputable educational institution dedicated to providing a high-quality learning environment for students. With a focus on academic excellence, character development, and holistic growth, our school strives to nurture students into well-rounded individuals equipped with the skills and knowledge necessary for success in the modern world.",
      grade: 'CGPA : 9.7',
      link: "https://www.cbit.ac.in/",

    },
    
    
  ];

  return (
    <section id="education">

      <h2>My Education</h2>

      <div className="container education__container">
        {soloProjects.map((pro) => (
          <article className="education__item" key={pro.id}>
            <div className="education__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="education__item-content">
              <h3>{pro.title}</h3>
              <h3>{pro.subtitle}</h3>
              <p>{pro.grade}</p>
              {/* <p>{pro.description}</p> */}
            </div>
            <div className="education__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default education;
