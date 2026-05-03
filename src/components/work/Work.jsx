import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import IMG2 from "../../assets/cosc.png";
import IMG5 from "../../assets/gdsc.png";
import IMG6 from "../../assets/cbit.jpeg";
import IMG7 from "../../assets/salesforce.png";
import "./work.css";

const Work = () => {
  return (
    <div>
      <div id="work">
        <h3>Experience </h3>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="FEB 2024 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG6} />}
        >
          <h3 className="vertical-timeline-element-title">
            Chief Placement Coordinator
          </h3>
          <h2 className="vertical-timeline-element-subtitle">
            CBIT Training & placements
          </h2>
          <div>
            <ul>
              <li>
                ⚡As a placement coordinator, I'm dedicated to bridging the gap
                between students/job seekers and promising career opportunities.
                I build strong employer relationships, provide personalized
                counseling, and organize impactful events like job fairs.
                Tracking placement data helps me continually improve our
                services. Empowering individuals to achieve their career goals
                is immensely rewarding. Witnessing their success stories as they
                secure fulfilling positions is the highlight of my role.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="MAY 2024 - JUL 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG7} />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate Member of Technical Staff
          </h3>
          <h2 className="vertical-timeline-element-subtitle">Salesforce</h2>
          <div>
            <ul>
              <li>
                ⚡<strong>Enhanced Task Visibility and Completion:</strong>
                Developed and integrated a tracking pixel feature in a Slack app
                to monitor user engagement with task notifications, leading to a
                30% increase in task completion rates by allowing real-time
                status updates and progress tracking.
              </li>
              <li>
                ⚡<strong>Optimized User Experience:</strong> Improved user
                interaction responsiveness by prioritizing user clicks over
                background processes, resulting in a 40% reduction in latency
                and a significantly enhanced user experience.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="OCT 2023 - SEP 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG5} />}
        >
          <h3 className="vertical-timeline-element-title">Core Team Leader</h3>
          <h2 className="vertical-timeline-element-subtitle">
            Google Developers Student Club (CBIT)
          </h2>
          <div>
            <ul>
              <li>
                ⚡Google Developer Student Clubs (GDSC) are university-based
                community groups for students interested in Google developer
                technologies and programming. There are GDSCs in over 110
                countries around the world.
              </li>
              <li>
                ⚡GDSCs are student-led communities that focus on learning and
                collaboration in the field of technology, specifically Google
                technologies. Students learn, share ideas, and come up with
                projects that are likely to solve day-to-day problems .
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="JAN 2023 - SEP 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG2} />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Co-ordinator
          </h3>
          <h2 className="vertical-timeline-element-subtitle">
            Chaitanya Bharathi Open Source Community (COSC-CBIT)
          </h2>
          <div>
            <ul>
              <li>
                ⚡COSC is an open source focused tech community based in
                Chaitanya Bharathi Institute of Technology - Hyderabad.
              </li>
              <li>
                ⚡We conduct hackathons, bootcamps and workshops to teach
                students different technologies while promoting open source
                culture.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Work;
