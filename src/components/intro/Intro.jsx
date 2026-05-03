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
            I engineer software that works at scale — distributed backends, real-time systems,
            and AI pipelines that go from idea to production. My stack spans
            <strong> Java, Python, and TypeScript</strong> across microservices, REST APIs,
            and full-stack web applications.
          </p>
          <p>
            On the AI side, I specialize in <strong>LLM agents, RAG pipelines, and agentic
            workflows</strong> using LangGraph and LangChain. I obsess over clean architecture,
            measurable impact, and shipping things that actually hold up under load.
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
