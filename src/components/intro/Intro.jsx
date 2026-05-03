import React from "react";
import ME from "../../assets/KarthikeyaProfile.jpeg";
import "./intro.css";

const STATS = [
  { value: "9.18", label: "CGPA" },
  { value: "800+", label: "LeetCode" },
  { value: "@ Salesforce", label: "Currently" },
  { value: "IEEE", label: "Published" },
];

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Karthikeya Boorla — Software Engineer" loading="lazy" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__stats">
            {STATS.map(({ value, label }) => (
              <div key={label} className="about__stat-card">
                <h3>{value}</h3>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <p>
            Software Engineer at <strong>Salesforce</strong> building an AI-powered support agent
            serving <strong>1.4M employees</strong> — deflecting 30% of tickets and cutting
            resolution time from 2 days to 2 minutes using RAG pipelines and LLM agent systems.
            Previously at <strong>Qualcomm</strong> scaling ETL infrastructure for semiconductor
            manufacturing and growing test coverage from 0% to 70%.
          </p>
          <p>
            Full-stack engineer (React · Node.js · Spring Boot · PostgreSQL) with deep AI/ML
            experience in LangGraph, LangChain, and agentic architectures. IEEE-published
            researcher. CS from CBIT, GPA 9.18.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
