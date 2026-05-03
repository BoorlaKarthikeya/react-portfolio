import React from "react";
import ME from "../../assets/KarthikeyaProfile.jpeg";
import "./intro.css";

const STATS = [
  { value: "9.18", label: "CGPA" },
  { value: "800+", label: "LeetCode" },
  { value: "2+", label: "Internships" },
  { value: "10+", label: "Projects" },
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
            Software Engineer at Salesforce, building AI-powered internal tools
            with Agentforce, RAG pipelines, and LLM agent systems. Previously
            a Software Engineer Intern at Qualcomm, where I worked on scalable
            ETL pipelines for semiconductor manufacturing and improved backend
            test coverage from 0% to ~70%.
          </p>
          <p>
            I hold a B.E. in Computer Science from Chaitanya Bharathi Institute
            of Technology (CGPA: 9.18). I'm a full-stack engineer comfortable
            across React, Node.js, Spring Boot, and Salesforce platform. On the
            AI side, I work with LangGraph, LangChain, RAG architectures, and
            agentic workflows.
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
