import React from 'react';
import IMG1 from '../../assets/news.jpeg';
import IMG2 from '../../assets/tictactoe.jpeg';
import IMG3 from '../../assets/portfolio.png';
import IMG4 from '../../assets/canteenbill.jpeg';
import IMG5 from '../../assets/claculator.jpeg';
import IMG6 from '../../assets/clock.jpeg';
import IMG7 from '../../assets/parallax.jpeg';
import IMG8 from '../../assets/devLanding.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'HeadlineHub',
      img: IMG1,
      description:
      "As part of my web development, I developed a dynamic news web application using React and integrated it with an API. ",
      technologies: 'React | javascript | HTML | CSS | Bootstrap',
      link: "https://drive.google.com/file/d/1nl9NC1ZvlBZTPkJAb2Z9xMdloozsVkkp/view?usp=sharing",
      github: 'https://github.com/BoorlaKarthikeya/HeadlineHub-react-API-based-news-web-App-',
    },
    {
      id: 2,
      title: 'TicTacToe Game',
      img: IMG2,
      description:
        'Built a React Tic-Tac-Toe game with responsive UI, interactive gameplay, and real-time updates for an engaging experience.',
      technologies: 'React | HTML | CSS | Javascript',
      link: 'https://boorlakarthikeya.github.io/TicTacToe-using-React/',
      github: 'https://github.com/BoorlaKarthikeya/TicTacToe-using-React',
    },
    {
      id: 3,
      title: 'Portfolio',
      img: IMG3,
      description: 'You are watching it right now 😉.',
      technologies: 'React | HTML | CSS | Javascript | Material UI',
      link: '#home',
      github: 'https://github.com/BoorlaKarthikeya/react-portfolio/',
    },
    {
      id: 4,
      title: 'Canteen Bill Generator',
      img: IMG4,
      description:
        'Created a Python program for generating canteen bills. Features include itemized billing, calculation of total cost, and generating a printable receipt for seamless canteen management.',
      technologies: 'Python',
      link: '',
      github: 'https://github.com/BoorlaKarthikeya/Canteen-bill-Genrator-Project',
    },
    {
      id: 5,
      title: 'calculator',
      img: IMG5,
      description:
        'Developed a calculator web application using HTML, CSS, and JavaScript. Implemented basic arithmetic operations, responsive design, and interactive functionality to provide users with a convenient and user-friendly calculator tool.',
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://boorlakarthikeya.github.io/Web-Dev-Projects/calculator/index.html',
      github: 'https://github.com/BoorlaKarthikeya/Web-Dev-Projects/tree/master/calculator',
    },
    {
      id: 6,
      title: 'Analog Clock',
      img: IMG6,
      description:
        'Designed and implemented an analog clock using HTML, CSS, and JavaScript. The clock displays the current time with rotating hour, minute, and second hands, providing a visually appealing timekeeping experience.',
      technologies: 'JavaScript | CSS | HTML',
      link: "https://boorlakarthikeya.github.io/Web-Dev-Projects/Analog%20Clock/index.html",
      github: "https://github.com/BoorlaKarthikeya/Web-Dev-Projects/tree/master/Analog%20Clock",
    },
    {
      id: 7,
      title: 'Parallax Website',
      img: IMG7,
      description:
      'Crafted a visually captivating parallax website using HTML, CSS, and JavaScript, combining scrolling effects and layered elements for an immersive user experience.',
      technologies: ' CSS | HTML',
      link: "https://boorlakarthikeya.github.io/Web-Dev-Projects/parallaxWebsite/index.html",
      github: "https://github.com/BoorlaKarthikeya/Web-Dev-Projects/tree/master/parallaxWebsite",
    },
    {
      id: 8,
      title: 'Developers Landing Page',
      img: IMG8,
      description:
        'Designed developer landing page with HTML, CSS, and JS to showcase skills, projects, and contact information for professional visibility.',
      technologies: 'CSS | HTML',
      link: "https://boorlakarthikeya.github.io/Web-Dev-Projects/LAndingPage/index.html",
      github: "https://github.com/BoorlaKarthikeya/Web-Dev-Projects/tree/master/LAndingPage",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item " key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {pro.link && <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>}
            </div>
          </article>
        ))}
      </div>
      
    </section>
  );
};

export default Portfolio;