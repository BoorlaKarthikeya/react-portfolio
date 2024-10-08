import React from "react";
import IMG1 from "../../assets/leetcode.png";
import IMG2 from "../../assets/tseamcet.jpeg";
import IMG3 from "../../assets/jee.jpeg";
import IMG4 from "../../assets/chaitanyaKreeda.jpeg";
import IMG5 from "../../assets/hackerank.png";
import IMG6 from "../../assets/cfg.jpeg";
import IMG7 from "../../assets/SIH.jpeg";
import IMG8 from "../../assets/researchDay.jpeg";
import IMG9 from "../../assets/conference.jpeg";
import "./achievements.css";

const Achievements = () => {
  const achievements = [
    {
      id: 9,
      title: "15th Internation conference on recent engineering and technology",
      subtitle:
        "particiapted and gave a research paper presentation in an international conference",
      img: IMG9,
      link: "https://drive.google.com/file/d/166RDNPlStAh8I4PefhIKMsipmkc1CIhm/view?usp=sharing",
      linkName: "certificate",
    },
    {
      id: 8,
      title: "CBIT 5th Research Day 2023",
      subtitle: "Secured 1st place in research paper presentation",
      img: IMG8,
      link: "https://drive.google.com/file/d/1FzAbK57WmxrD3LkBoAQ7V2T1u9murf1U/view?usp=sharing",
      linkName: "certificate",
    },
    {
      id: 7,
      title: "Smart India Hackathon 2023",
      subtitle:
        "Got shortlisted for the Grand Finale of  one of Asia's largest Hackathon Smart India Hackthon 2023",
      img: IMG7,
      link: "",
      linkName: "",
    },
    {
      id: 6,
      title: "JPMC codeForGood 2023",
      subtitle:
        "Shortlisted and participated in JPMC Code for Good hackathon 2023",
      img: IMG6,
      link: "",
      linkName: "",
    },
    {
      id: 1,
      title: "LEETCODE",
      subtitle: "Solved 430+ problems on Leetcode",
      img: IMG1,
      link: "https://leetcode.com/KarthikeyaBoorla/",
      linkName: "Profile",
    },
    {
      id: 5,
      title: "HACKERANK",
      subtitle: "5 star, Golden Batch for SQL on HACKERANK",
      img: IMG5,
      link: "https://www.hackerrank.com/karthikeyaburla?hr_r=1",
      linkName: "Profile",
    },
    {
      id: 2,
      title: "TS-EAMCET 2021",
      img: IMG2,
      subtitle: "State Rank - 1082",
      link: "",
    },
    {
      id: 3,
      title: "Joint Entrance Examination - 2021",
      subtitle: "percentile - 96.63%",
      img: IMG3,
      link: "",
    },
    {
      id: 4,
      title: "Cricket Shruthi - 2023 (CBIT)",
      subtitle: "Runner Up team(CSE-3)",
      img: IMG4,
      link: "",
    },
  ];

  const openLink = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <section id="Achievements">
      <div id="work">
        <h3>Achievements</h3>
      </div>

      <div className="container course__container">
        {achievements.map((pro) => (
          <article className="course__item" key={pro.id}>
            <div className="course__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="course__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.subtitle}</p>
            </div>
            {pro.link && (
              <div
                className="course__item-cta"
                onClick={() => openLink(pro.link)}
              >
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  {pro.linkName}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
