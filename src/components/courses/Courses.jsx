import React from "react";
import IMG1 from "../../assets/oracle.jpg";
import IMG2 from "../../assets/swayam.png";
import IMG3 from "../../assets/cloud-computing-google.jpg";
import IMG4 from "../../assets/machine_learning.jpg";
import IMG5 from "../../assets/aicte.jpeg";
import IMG6 from "../../assets/infosys.png";
import IMG7 from "../../assets/ml.jpeg";
import IMG8 from "../../assets/dl.jpeg";

import "./courses.css";

const courses = () => {
  const course = [
    {
      id: 10,
      title: "AICTE IdeaLab Internship - CBIT",
      img: IMG5,
      link: "https://drive.google.com/file/d/1A5qgGxGC_vVwAoRO3j5v5fTbuvxI5Fn2/view?usp=sharing",
    },
    {
      id: 9,
      title: "Introduction to Data Science",
      img: IMG6,
      link: "https://drive.google.com/file/d/1j5KOnZAIa5caiK4XbjwnG9vPv8loabZ9/view?usp=sharing",
    },
    {
      id: 8,
      title: "Deep Learning specialization - Andrew NG",
      img: IMG8,
      link: "https://drive.google.com/file/d/1i1LoviGH3xB9RElJXHlN90eth88dOfWy/view?usp=sharing",
    },
    {
      id: 7,
      title: "Machine learning - Andrew NG",
      img: IMG7,
      link: "https://drive.google.com/file/d/1gTiYqJeV76M0W2X40w68mMGWErfXWI-G/view?usp=sharing",
    },
    {
      id: 5,
      title: "Introduction to Internet of Things - NPTEL",
      img: IMG2,
      link: "https://drive.google.com/file/d/15XRsbuas-yLMTaQ9SKdklnzsyOko1Mhl/view?usp=sharing",
    },
    {
      id: 4,
      title: "Google Cloud Computing Foundations and Generative AI Arcade Game",
      img: IMG3,
      link: "https://www.cloudskillsboost.google/public_profiles/4be8e0c8-981a-40a3-8314-144bdfb4dd58",
    },
    {
      id: 1,
      title: "Oracle Certified Associate , Java SE 8 Programmer",
      img: IMG1,
      link: "https://drive.google.com/file/d/1gwLz3bzT6dD_jg-qQ6Mzc_wxlUrnj3UE/view?usp=sharing",
    },
    {
      id: 2,
      title: "Ethical Hacking - NPTEL",
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
      <div id="work">
        <h3>Courses / certifications</h3>
      </div>

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
