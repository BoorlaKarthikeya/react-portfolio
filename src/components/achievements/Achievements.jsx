import React from 'react';
import IMG1 from '../../assets/leetcode.png';
import IMG2 from '../../assets/tseamcet.jpeg';
import IMG3 from '../../assets/jee.jpeg';
import IMG4 from '../../assets/chaitanyaKreeda.jpeg';
import './achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'LEETCODE',
      subtitle: "Solved 300+ problems on Leetcode",
      img: IMG1,
      link: "https://leetcode.com/KarthikeyaBoorla/",

    },
    {
      id: 2,
      title: 'TS-EAMCET 2021',
      img: IMG2,
      subtitle: "State Rank - 1082",
      link:'',
      

    },
    {
      id: 3,
      title: "Joint Entrance Examination - 2021",
      subtitle : "percentile - 9.63%",
      img: IMG3,
      link:'',

    },
    {
      id: 4,
      title: "Cricket Shruthi - 2023 (CBIT)",
      subtitle : "Runner Up team(CSE-3)",
      img: IMG4,
      link:'',

    },

    
    
  ];

  const openLink = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <section id="Achievements">

      <h2>Achievements</h2>

      <div className="container course__container">
        {achievements.map((pro) => (
          <article className="course__item" key={pro.id}>
            <div className="course__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="course__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.subtitle}</p>
            </div>
            {pro.link && (<div className="course__item-cta" onClick={() => openLink(pro.link)}>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Certificate
              </a>
            </div>)}
            
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
