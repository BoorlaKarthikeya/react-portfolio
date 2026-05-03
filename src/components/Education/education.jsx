import React from "react";
import { education } from "../../data/portfolio";
import "./education.css";

const Education = () => {
  return (
    <section id="education">
      <h2 className="text-3xl">My Education</h2>
      <div className="container education__container">
        {education.map((item) => (
          <article className="education__item  " key={item.id}>
            <div className="education__item-image">
              <img src={item.img} alt={item.title} loading="lazy" />
            </div>
            <div className="education__item-content">
              <h3>{item.title}</h3>
              <h3>{item.subtitle}</h3>
              <p>{item.grade}</p>
            </div>
            <div className="education__item-cta">
              <a
                href={item.link}
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

export default Education;
