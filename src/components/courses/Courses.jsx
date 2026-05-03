import React from "react";
import { certifications } from "../../data/portfolio";
import "./courses.css";

const Courses = () => {
  return (
    <section id="course">
      <div className="section__heading">
        <h3>Courses / Certifications</h3>
      </div>

      <div className="container course__container">
        {certifications.map((cert) => (
          <article className="course__item" key={cert.id}>
            <div className="course__item-image">
              <img src={cert.img} alt={cert.title} loading="lazy" />
            </div>
            <div className="course__item-content">
              <h3>{cert.title}</h3>
            </div>
            {cert.link && (
              <div className="course__item-cta">
                <a
                  href={cert.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Certificate
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Courses;
