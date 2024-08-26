import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import IMG1 from "../../assets/elc.jpeg";
import IMG2 from "../../assets/cosc.png";
import IMG3 from "../../assets/NN.jpg";
import IMG4 from "../../assets/hackiton.jpeg";
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
          date="OCT 2023 - present"
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
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="OCT 2022 - DEC 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG1} />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Co-ordinator
          </h3>
          <h2 className="vertical-timeline-element-subtitle">
            Electoral Literacy Club (CBIT)
          </h2>
          <div>
            <ul>
              <li>
                ⚡An Electoral Literacy Club is a platform to engage college
                students through interesting activities and hands-on experience
                to sensitize them on their electoral rights and familiarize them
                with the electoral process of registration and voting. ELCs are
                also present in colleges and rural communities.
              </li>
              <li>
                ⚡At ELCs, learning meets fun. Activities and Games are designed
                to stimulate and motivate students provoking them to think and
                ask questions. Through ELC, Election Commission of India, aims
                at strengthening the culture of electoral participation among
                young and future voters.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement> */}

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
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="FEB 2023 - DEC 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG3} />}
        >
          <h3 className="vertical-timeline-element-title">
            Learning and Development Co-ordinator
          </h3>
          <h2 className="vertical-timeline-element-subtitle">
            Neural Nexus Club (CBIT)
          </h2>
          <div>
            <ul>
              <li>
                ⚡The Neural Nexus Club is a vibrant community of students
                passionate about exploring and applying the principles of
                machine learning and artificial intelligence (AI). Our club
                serves as a platform for students to delve into the exciting
                field of machine learning, collaborate on projects, and expand
                their knowledge beyond the classroom.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="MAY 2023 - NOV 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG4} />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Co-ordinator
          </h3>
          <h2 className="vertical-timeline-element-subtitle">
            HackItOn Club (CBIT)
          </h2>
          <div>
            <ul>
              <li>
                ⚡HackItOn is CBIT's club focused on the inclusive development
                of students. The main purpose of this club is to keep students
                up-to-date on all hackathons hosted by various companies and
                universities that students can participate in. The club also
                hosts student hackathons, providing students with opportunities
                to enhance their soft skills such as leadership, mentoring, and
                communication.
              </li>
              <li>
                ⚡ The club promotes industry-standard skills through a series
                of imaginative hackathons, helping engineers learn and develop
                technical skills, practice real-time problem-solving techniques,
                and acquire industry-specific skills.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
};
export default Work;
