import React from "react";
import ME from "../../assets/KarthikeyaProfile.jpeg";
import "./intro.css";

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
          <p>
            Software Engineer at Salesforce, building AI-powered internal tools
            with Agentforce, RAG pipelines, and LLM agent systems. Previously
            a Software Engineer Intern at Qualcomm, where I worked on scalable
            ETL pipelines for semiconductor manufacturing and improved backend
            test coverage from 0% to ~70%.
          </p>
          <p>
            I hold a B.E. in Computer Science from Chaitanya Bharathi Institute
            of Technology (CGPA: 9.18). My passion lies in building applications
            that create real-world impact — from AI agent systems and full-stack
            web products to data-driven ML solutions.
          </p>
          <p>
            I'm a full-stack engineer comfortable across React, Node.js, Django,
            Spring Boot, and Salesforce platform (Apex, LWC). On the AI side,
            I work with LangGraph, LangChain, RAG architectures, and agentic
            workflows. I thrive in fast-moving teams where I can own features
            end to end.
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
