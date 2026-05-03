import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../../data/portfolio";
import "./work.css";

const TIMELINE_STYLE = {
  content: { background: "var(--color-surface)", color: "var(--color-white)", border: "1px solid var(--color-primary-variant)", boxShadow: "var(--shadow-card)" },
  contentArrow: { borderRight: "7px solid var(--color-primary-variant)" },
  icon: { background: "var(--color-bg-variant)", border: "2px solid var(--color-primary)" },
};

const Work = () => {
  return (
    <div>
      <div id="work">
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
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
            <ul>
              {item.bullets.map((bullet, i) => (
                <li key={i}>⚡ {bullet}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Work;
