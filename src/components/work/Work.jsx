import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../../data/portfolio";
import "./work.css";

const TIMELINE_STYLE = {
  content: { background: "rgb(33, 150, 243)", color: "#fff" },
  contentArrow: { borderRight: "7px solid rgb(33, 150, 243)" },
  icon: { background: "rgb(33, 150, 243)", color: "#fff" },
};

const Work = () => {
  return (
    <section id="work">
      <div className="section__heading">
        <h3>Experience</h3>
      </div>
      <VerticalTimeline lineColor="var(--color-primary-variant)">
        {experience.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={TIMELINE_STYLE.content}
            contentArrowStyle={TIMELINE_STYLE.contentArrow}
            date={item.date}
            iconStyle={TIMELINE_STYLE.icon}
            icon={
              <img
                className="experienceImg"
                src={item.logo}
                alt={item.logoAlt}
                loading="lazy"
              />
            }
          >
            <h3 className="vertical-timeline-element-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "#ffffff", marginBottom: "0.2rem" }}>{item.company}</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.9rem", color: "rgb(48, 62, 73)", marginBottom: "0.75rem" }}>{item.title}</h4>
            <ul style={{ fontWeight: 400 }}>
              {item.bullets.map((bullet, i) => (
                <li key={i}>⚡ {bullet}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Work;
