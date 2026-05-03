import React from "react";
import { achievements } from "../../data/portfolio";
import "./achievements.css";

const Achievements = () => {
  const openLink = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <section id="achievements">
      <div id="work">
        <h3>Achievements</h3>
      </div>

      <div className="container course__container">
        {achievements.map((item) => (
          <article className="course__item" key={item.id}>
            <div className="course__item-image">
              <img src={item.img} alt={item.title} loading="lazy" />
            </div>
            <div className="course__item-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
            {item.link && (
              <div
                className="course__item-cta"
                onClick={() => openLink(item.link)}
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  {item.linkName}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
