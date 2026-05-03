import React from "react";
import { projects } from "../../data/portfolio";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <div id="work">
        <h3>Projects</h3>
      </div>

      <div className="container portfolio__container">
        {projects.map((pro) => (
          <article className="portfolio__item " key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} loading="lazy" />
            </div>
            <div className="portfolio__item-content">
              <h3 className="text-2xl">{pro.title}</h3>
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
              {pro.link && (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
