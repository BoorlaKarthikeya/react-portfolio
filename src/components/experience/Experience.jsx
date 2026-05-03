import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { skills } from "../../data/portfolio";
import "./experience.css";

const SECTION_LABELS = {
  frontend: "Front-end Development",
  backend: "Back-end / Databases",
  salesforce: "Salesforce Platform",
  aiml: "AI / ML",
  devops: "DevOps / Tools",
};

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        {Object.entries(skills).map(([key, items]) => (
          <div key={key} className="experience__frontend">
            <h3>{SECTION_LABELS[key]}</h3>
            <div className="experience__content text-white">
              {items.map((skill) => (
                <article key={skill} className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
