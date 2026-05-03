import React from "react";
import { skills } from "../../data/portfolio";
import "./experience.css";

const SECTION_LABELS = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend & Databases",
  aiml: "AI / ML",
  devops: "Cloud & DevOps",
};

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        {Object.entries(skills).map(([key, items]) => (
          <div key={key}>
            <h3>{SECTION_LABELS[key]}</h3>
            <div className="experience__content">
              {items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
