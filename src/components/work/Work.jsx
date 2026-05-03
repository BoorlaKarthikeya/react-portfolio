import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../../data/portfolio";
import "./work.css";

const Work = () => {
  return (
    <div>
      <div id="work">
        <h3>Experience </h3>
      </div>
      <VerticalTimeline>
        {experience.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            <h2 className="vertical-timeline-element-subtitle">{item.company}</h2>
            <div>
              <ul>
                {item.bullets.map((bullet, i) => (
                  <li key={i}>⚡{bullet}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Work;
