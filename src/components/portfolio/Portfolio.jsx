import React, { useState } from "react";
import { projects } from "../../data/portfolio";
import "./portfolio.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Web", value: "web" },
  { label: "Data", value: "data" },
];

const INITIAL_COUNT = 6;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="portfolio">
      <div className="section__heading">
        <h3>Projects</h3>
      </div>

      <div className="container">
        <div className="portfolio__filter" role="group" aria-label="Filter projects">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              className={`portfolio__filter-btn${activeFilter === value ? " active" : ""}`}
              onClick={() => { setActiveFilter(value); setShowAll(false); }}
              aria-pressed={activeFilter === value}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="portfolio__container">
          {visible.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                {pro.featured && <span className="portfolio__badge">Featured</span>}
                <img src={pro.img} alt={pro.title} loading="lazy" />
              </div>

              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p className="description">{pro.description}</p>
                <div className="portfolio__tags">
                  {pro.technologies.map((t) => (
                    <span key={t} className="portfolio__tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="portfolio__item-cta">
                <a href={pro.github} target="_blank" className="btn" rel="noreferrer">
                  GitHub
                </a>
                {pro.link && (
                  <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="portfolio__toggle">
            <button className="btn btn-primary" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show Less" : `Show All (${filtered.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
