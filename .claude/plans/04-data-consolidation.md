# Plan 04 — Data Consolidation (Single Source of Truth)

**Agent:** Senior React Engineer  
**Status:** Awaiting feedback  
**Estimated effort:** 1 day to implement all 17 migration steps

---

## The Problem

Every component is simultaneously a data store and a UI renderer. `Portfolio.jsx` defines 14 project objects inline. `Work.jsx` has 4 hardcoded `<VerticalTimelineElement>` blocks. Every section has the same pattern.

**Impact:** To change one piece of content, you find the component, locate the data inside it, and hope you got the right place. This is the first thing a senior engineer looks for when reviewing a React codebase.

---

## The Solution: 2 New Files

### File 1: `src/data/portfolio.js`
All content, zero JSX, 8 named exports.

### File 2: `src/data/images.js`
All 52 image imports as a lookup map. Necessary because webpack/Vite must see static `import` statements at build time — you cannot put image paths in a JS object directly.

**Usage in any component:**
```js
import IMAGES from "../../data/images";
<img src={IMAGES[item.imgKey]} alt={item.title} />
```

---

## File 1: `src/data/portfolio.js` (complete)

```js
// ─── PROFILE ─────────────────────────────────────────────────────────────────
export const PROFILE = {
  name: "Karthikeya Boorla",
  email: "karthikeyaboorla2004@gmail.com",
  altEmail: "karthikeyaburla@gmail.com",

  bio: [
    "Software engineer with a B.E. in Computer Science from CBIT (2025), with industry experience at Salesforce building AI-powered internal tools using Agentforce and RAG pipelines, and at Qualcomm contributing to ETL infrastructure for semiconductor manufacturing pipelines.",
    "I build full-stack and ML-powered applications — from LangGraph-based customer agents to real-time predictive analytics — and am currently seeking software engineering roles at the intersection of backend systems and applied AI.",
  ],

  roles: [
    "Software Engineer.",
    "Full Stack Developer.",
    "AI / ML Engineer.",
    "Open to Work.",
  ],

  resumeUrl: "https://drive.google.com/file/d/1vWB_4uAHiju78O25XUDvf4HOU04MolRh/view?usp=sharing",

  socials: {
    linkedin:  "https://www.linkedin.com/in/boorla-karthikeya/",
    github:    "https://github.com/BoorlaKarthikeya/",
    instagram: "https://www.instagram.com/karthikeya_boorla/",
  },

  // Move to .env in production — see Plan 01
  emailjs: {
    serviceId:  "service_ac9dhm5",
    templateId: "template_zuzrjwi",
    publicKey:  "ahRzRP_DbaUrC5ZIS",
  },

  profileImgKey: "karthikeyaProfile2",
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    id: "languages",
    category: "Languages",
    items: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    id: "frontend",
    category: "Front-end Development",
    items: ["HTML", "CSS", "React", "Redux", "Bootstrap", "Material UI", "Tailwind CSS"],
  },
  {
    id: "backend",
    category: "Back-end & Databases",
    items: ["Node.js", "Express.js", "Spring Boot", "Django", "REST APIs", "Socket.IO", "PostgreSQL", "MySQL", "MongoDB", "JWT"],
  },
  {
    id: "aiml",
    category: "AI / Machine Learning",
    items: ["LangChain", "LangGraph", "RAG Pipelines", "Agentforce", "Prompt Engineering", "Gemini API", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost", "OpenCV", "Streamlit"],
  },
  {
    id: "devops",
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Jenkins", "Git / GitHub", "JUnit / Mockito", "Jira", "Google Analytics", "Linux"],
  },
  {
    id: "salesforce",
    category: "Salesforce",
    items: ["Apex", "Lightning Web Components (LWC)", "Force.com", "Agentforce", "Slack Bolt SDK", "SOQL"],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 1,
    title: "Associate Member of Technical Staff",
    organisation: "Salesforce",
    date: "Jun 2025 – Present",
    active: true,
    type: "Full-time",
    imgKey: "salesforce",
    points: [
      "Developed and enhanced an AI-powered internal employee support agent using <strong>Agentforce and RAG pipelines</strong> over enterprise policy documentation serving <strong>~1.4M internal employees globally</strong>.",
      "Enhanced a Slack-based conversational interface using <strong>Slack Bolt SDK</strong> and Block Kit UI components, enabling employees to retrieve contextual policy answers with citations directly within Slack.",
      "Implemented <strong>ticket deflection system</strong> integrated with the support portal reducing internal support ticket volume by <strong>~30%</strong>.",
      "Built analytics pipelines using <strong>Google Analytics</strong> to track agent adoption, deflection rates, and feature usage.",
      "<strong>Stack:</strong> Apex, LWC, Force.com, Agentforce, Slack APIs, Java, Spring Boot, Node.js, TypeScript, PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    organisation: "Qualcomm",
    date: "Jan 2025 – Jun 2025",
    active: false,
    type: "Internship",
    imgKey: "qualcomm",
    points: [
      "Contributed to a scalable <strong>ETL platform</strong> used in semiconductor manufacturing pipelines enabling vendors across design, synthesis, fabrication, and testing stages to exchange large engineering artifacts.",
      "Extended the ETL pipeline to support additional <strong>engineering file formats</strong>, improving interoperability between vendor systems.",
      "Improved automated test coverage from <strong>0% to ~70%</strong> using <strong>JUnit and Mockito</strong>, significantly increasing reliability of backend microservices.",
      "<strong>Stack:</strong> Java, Spring Boot, MySQL, Docker, AWS",
    ],
  },
  {
    id: 3,
    title: "Associate Member of Technical Staff Intern",
    organisation: "Salesforce",
    date: "May 2024 – Jul 2024",
    active: false,
    type: "Internship",
    imgKey: "salesforce",
    points: [
      "<strong>Tracking Pixel Integration:</strong> Designed and deployed a tracking feature for task notifications, boosting engagement visibility and contributing to a <strong>30% increase in task completion rates</strong>.",
      "<strong>Real-Time Task Updates:</strong> Built a fault-tolerant, event-driven system for real-time task tracking, <strong>reducing latency by 40%</strong> and improving response time.",
      "<strong>Scalable System Optimization:</strong> Prioritized user actions over background updates, <strong>improving throughput by 50%</strong> and enabling the system to <strong>handle 15,000+ concurrent users</strong>.",
    ],
  },
  {
    id: 4,
    title: "Chief Placement Coordinator",
    organisation: "CBIT Training & Placements",
    date: "Feb 2024 – May 2025",
    active: false,
    type: "Leadership",
    imgKey: "cbit",
    points: [
      "Bridged the gap between students and career opportunities by building employer relationships, providing personalized counseling, and organizing events like job fairs.",
      "Tracked placement data to continually improve services and outcomes for students.",
    ],
  },
  {
    id: 5,
    title: "Core Team Leader",
    organisation: "Google Developer Student Club (CBIT)",
    date: "Oct 2023 – Sep 2024",
    active: false,
    type: "Leadership",
    imgKey: "gdsc",
    points: [
      "Led a team organizing workshops and events for 100+ students on Google technologies and open-source practices.",
      "Coordinated learning programs focused on practical project-building and real-world problem solving.",
    ],
  },
  {
    id: 6,
    title: "Technical Coordinator",
    organisation: "Chaitanya Bharathi Open Source Community (COSC-CBIT)",
    date: "Jan 2023 – Sep 2023",
    active: false,
    type: "Leadership",
    imgKey: "cosc",
    points: [
      "Organised hackathons, bootcamps, and workshops to teach students different technologies while promoting open-source culture.",
      "Coordinated technical sessions and mentored participants across multiple events.",
    ],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    id: 1,
    title: "Chaitanya Bharathi Institute of Technology (2021 – 2025)",
    subtitle: "B.E. Computer Science and Engineering",
    grade: "CGPA: 9.18",
    link: "https://www.cbit.ac.in/",
    imgKey: "cbit",
  },
  {
    id: 2,
    title: "Sri Chaitanya Junior College, Hyderabad (2019 – 2021)",
    subtitle: "Class XII — Science (Physics, Chemistry, Mathematics)",
    grade: "Grade: 98%",
    link: "https://srichaitanya.net/",
    imgKey: "srichaitanya",
  },
  {
    id: 3,
    title: "Telangana Social Welfare Residential School, Hyderabad (2017 – 2019)",
    subtitle: "Class X",
    grade: "CGPA: 9.7",
    link: "https://www.cbit.ac.in/",
    imgKey: "tswreis",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    imgKey: "oracle",
    link: "https://drive.google.com/file/d/1gwLz3bzT6dD_jg-qQ6Mzc_wxlUrnj3UE/view?usp=sharing",
    featured: true,
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Coursera (Andrew NG)",
    imgKey: "ml",
    link: "https://drive.google.com/file/d/1gTiYqJeV76M0W2X40w68mMGWErfXWI-G/view?usp=sharing",
    featured: true,
  },
  {
    id: 3,
    title: "Deep Learning Specialization",
    issuer: "Coursera (Andrew NG)",
    imgKey: "dl",
    link: "https://drive.google.com/file/d/1i1LoviGH3xB9RElJXHlN90eth88dOfWy/view?usp=sharing",
    featured: true,
  },
  {
    id: 4,
    title: "Google Cloud Computing Foundations and Generative AI",
    issuer: "Google Cloud",
    imgKey: "cloudComputingGoogle",
    link: "https://www.cloudskillsboost.google/public_profiles/4be8e0c8-981a-40a3-8314-144bdfb4dd58",
    featured: false,
  },
  {
    id: 5,
    title: "Introduction to Data Science",
    issuer: "Infosys",
    imgKey: "infosys",
    link: "https://drive.google.com/file/d/1j5KOnZAIa5caiK4XbjwnG9vPv8loabZ9/view?usp=sharing",
    featured: false,
  },
  {
    id: 6,
    title: "Cryptography and Network Security",
    issuer: "NPTEL",
    imgKey: "swayam",
    link: "https://drive.google.com/file/d/1blixYrFxDN2IVadpohxnPkZld3wNiMaf/view",
    featured: false,
  },
  {
    id: 7,
    title: "Ethical Hacking",
    issuer: "NPTEL",
    imgKey: "swayam",
    link: "https://drive.google.com/file/d/11ScUC_BegyWov6mopt0h4toclgriYXJ8/view?usp=sharing",
    featured: false,
  },
  {
    id: 8,
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    imgKey: "swayam",
    link: "https://drive.google.com/file/d/15XRsbuas-yLMTaQ9SKdklnzsyOko1Mhl/view?usp=sharing",
    featured: false,
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Smart India Hackathon 2023",
    subtitle: "Shortlisted for the Grand Finale of one of Asia's largest hackathons",
    imgKey: "SIH",
    tier: "gold",
    link: "",
    linkName: "",
  },
  {
    id: 2,
    title: "CBIT 5th Research Day 2023",
    subtitle: "Secured 1st place in research paper presentation",
    imgKey: "researchDay",
    tier: "gold",
    link: "https://drive.google.com/file/d/1FzAbK57WmxrD3LkBoAQ7V2T1u9murf1U/view?usp=sharing",
    linkName: "Certificate",
  },
  {
    id: 3,
    title: "15th International Conference on Recent Engineering and Technology",
    subtitle: "Participated and presented research paper — Electric Vehicles and Smart Grid",
    imgKey: "conference",
    tier: "silver",
    link: "https://drive.google.com/file/d/166RDNPlStAh8I4PefhIKMsipmkc1CIhm/view?usp=sharing",
    linkName: "Certificate",
  },
  {
    id: 4,
    title: "JPMC Code for Good 2023",
    subtitle: "Shortlisted and participated in JPMorgan Chase Code for Good hackathon",
    imgKey: "cfg",
    tier: "silver",
    link: "",
    linkName: "",
  },
  {
    id: 5,
    title: "LeetCode",
    subtitle: "Solved 430+ problems — strong DSA practice",
    imgKey: "leetcode",
    tier: "bronze",
    link: "https://leetcode.com/KarthikeyaBoorla/",
    linkName: "Profile",
  },
  {
    id: 6,
    title: "HackerRank",
    subtitle: "5 Star, Golden Batch for SQL",
    imgKey: "hackerank",
    tier: "bronze",
    link: "https://www.hackerrank.com/karthikeyaburla?hr_r=1",
    linkName: "Profile",
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "AI Customer Support Agent",
    imgKey: "aiAgent",
    description: "Production-style e-commerce customer support agent built as a LangGraph state machine with intent routing, identity verification, order management, and RAG-based policy queries. Config-driven tool platform supports MCP servers and external APIs without code changes.",
    technologies: "LangGraph | LangChain | Python | RAG | SQLAlchemy | Streamlit | MCP | Gemini | OpenAI | Ollama",
    category: "ai",
    featured: true,
    github: "https://github.com/BoorlaKarthikeya/E-commerce_CustomerAgent_with_tools",
    link: "https://www.linkedin.com/posts/boorla-karthikeya_aiengineering-llm-agentsystems-activity-7433823933877096448-Lrur",
  },
  {
    id: 2,
    title: "Resume Application Tracking System (RATS)",
    imgKey: "ATS",
    description: "Streamlit app for department prediction from resume keywords using KNN multi-label classification, and ATS-style scoring by comparing uploaded resume text to a job description via Gemini API with missing keyword identification.",
    technologies: "Python | scikit-learn | KNN | NLP | Gemini API | Streamlit",
    category: "ai",
    featured: true,
    github: "https://github.com/BoorlaKarthikeya/ResumeApplicationTrackingSystem",
    link: "https://resumeapplicationtrackingsystem-karthikeya.streamlit.app/",
  },
  {
    id: 3,
    title: "Uber Clone (MERN Ride-Hailing)",
    imgKey: "uberClone",
    description: "Full-stack ride-hailing app with separate rider and driver flows: authentication, ride booking with fare estimation, real-time driver dashboard with accept/reject, and earnings tracking. Live location via Socket.IO, Google Maps integration for routing.",
    technologies: "React | Redux | Node.js | Express | MongoDB | Socket.IO | JWT | Google Maps API | Tailwind",
    category: "fullstack",
    featured: true,
    github: "https://github.com/BoorlaKarthikeya/UberClone_MERN",
    link: "",
  },
  {
    id: 4,
    title: "Dynamic T20 Match Analysis",
    imgKey: "t20",
    description: "Interactive Streamlit app predicting win probabilities and match scores in real time. User inputs batting/bowling teams, venue, target, current score, overs, wickets, and recent runs — model outputs predicted score and win probability. ~93% accuracy with 20% precision lift from feature engineering.",
    technologies: "Python | Pandas | scikit-learn | XGBoost | Logistic Regression | Streamlit | Feature Engineering",
    category: "ai",
    featured: false,
    github: "https://github.com/BoorlaKarthikeya/T20_score_win_predictor",
    link: "https://t20-score-win-predictor-karthikeya.streamlit.app/",
  },
  {
    id: 5,
    title: "Emotion Detection using CNN",
    imgKey: "cnn",
    description: "Image classification over 7 emotions using FER-2013 dataset. Explored custom CNNs before settling on ResNet50V2 transfer learning. Class imbalance addressed via augmentation and class weights. Final test accuracy ~66%. Evaluated with precision/recall/F1 per class.",
    technologies: "Python | TensorFlow | ResNet50V2 | Transfer Learning | OpenCV | Data Augmentation | FER-2013",
    category: "ai",
    featured: false,
    github: "https://github.com/BoorlaKarthikeya/Emotion-detection-CNN/tree/main",
    link: "",
  },
  {
    id: 6,
    title: "Library Management System",
    imgKey: "lms",
    description: "Full-featured web app with role-based access for Admin, Librarian, and Student. Covers catalog management, book availability tracking, and borrowing workflows built on Django ORM.",
    technologies: "Django | Python | JavaScript | HTML | CSS | Bootstrap | SQLite",
    category: "fullstack",
    featured: false,
    github: "https://github.com/BoorlaKarthikeya/Library_Management_System/tree/main2/LMS",
    link: "",
  },
  {
    id: 7,
    title: "EDA — FIFA World Cup Data",
    imgKey: "eda",
    description: "In-depth exploratory analysis across tournaments: scores, team performance, substitution effects, knockout-stage behaviour, and attendance patterns. Concrete insights supported by bar, KDE, heatmap, and Plotly interactive charts.",
    technologies: "Python | Pandas | Matplotlib | Seaborn | Plotly | Jupyter",
    category: "data",
    featured: false,
    github: "https://github.com/BoorlaKarthikeya/EDA_fifaWorldCup",
    link: "",
  },
  {
    id: 8,
    title: "Russia–Ukraine Military Losses Dashboard",
    imgKey: "da",
    description: "Time-series dashboard on reported equipment and personnel losses across air, naval, land, and POW categories (Feb 2022 – Jan 2024). Multi-domain analysis with interactive Plotly charts deployed on Streamlit.",
    technologies: "Python | Pandas | Plotly | Seaborn | Streamlit",
    category: "data",
    featured: false,
    github: "https://github.com/BoorlaKarthikeya/RussiaWarAnalysis/tree/main",
    link: "https://russiawaranalysis-karthikeyaboorla.streamlit.app/",
  },
  {
    id: 9,
    title: "HeadlineHub — React News App",
    imgKey: "news",
    description: "API-driven news browsing app fetching live headlines and content from a third-party news API. Demonstrates React component patterns, API integration, and responsive Bootstrap layout.",
    technologies: "React | JavaScript | Bootstrap | REST API",
    category: "web",
    featured: false,
    github: "https://github.com/BoorlaKarthikeya/HeadlineHub-react-API-based-news-web-App-",
    link: "",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Bhanu Prasad",
    role: "President – ELC CBIT",
    imgKey: "bhanuprasad",
    link: "https://www.linkedin.com/in/bhanu-prasad-paitar-583188249/",
    review: "Karthikeya is an exceptional member of our Electoral Literacy Club, showcasing a remarkable blend of hard work, technical expertise, and creative ideas. His dedication, tech skills, and innovative thinking have significantly contributed to our club's success.",
  },
  {
    id: 2,
    name: "Nishanth",
    role: "Technical Team Head – CBIT COSC",
    imgKey: "nishanth",
    link: "https://www.linkedin.com/in/nishanth-artham-1a572b212/",
    review: "I highly commend Karthikeya for his exceptional contributions and dedication to our CBIT-COSC Club. His technical expertise, problem-solving skills, and leadership have been invaluable. Karthikeya's passion for technology, continuous learning, and collaborative spirit have greatly enriched our club.",
  },
  {
    id: 3,
    name: "Sai Santosh",
    role: "Peer — CBIT",
    imgKey: "santosh",
    link: "https://www.linkedin.com/in/sai-santosh-bonagiri-335168225/",
    review: "Karthikeya is an exceptional web developer with a keen eye for detail and a knack for creating visually appealing and functional websites. His expertise in competitive coding adds a valuable dimension to his skill set. Collaborating with Karthikeya was a pleasure.",
  },
  {
    id: 4,
    name: "Shiva Shanker Reddy",
    role: "Peer — CBIT",
    imgKey: "shiva2",
    link: "https://www.linkedin.com/in/shivashanker-reddy-cheruku-713823278/",
    review: "Karthikeya is a truly exceptional full stack developer. His technical skills and dedication are outstanding, consistently delivering high-quality work. Karthikeya's proactive approach and excellent communication make him a pleasure to collaborate with.",
  },
  {
    id: 5,
    name: "Narendhar Reddy",
    role: "Peer — CBIT",
    imgKey: "narendhar",
    link: "https://www.linkedin.com/in/naren8790/",
    review: "Karthikeya is an exceptional full stack developer with a versatile skill set. His expertise spans both front-end and back-end development, and his attention to detail is impeccable. With a strong work ethic and a passion for problem-solving, Karthikeya consistently delivers outstanding results.",
  },
];
```

---

## File 2: `src/data/images.js` (complete)

```js
// src/data/images.js — all image assets imported once, exported as lookup map
// Components use: import IMAGES from "../../data/images"; then IMAGES[item.imgKey]

import karthikeyaProfile2 from "../assets/karthikeyaProfile2.jpg";
import cbit          from "../assets/cbit.jpeg";
import salesforce    from "../assets/salesforce.png";
// TODO: add qualcomm logo to src/assets/qualcomm.png
// import qualcomm   from "../assets/qualcomm.png";
import gdsc          from "../assets/gdsc.png";
import cosc          from "../assets/cosc.png";
import srichaitanya  from "../assets/srichaitanya.jpeg";
import tswreis       from "../assets/tswreis.jpeg";
import oracle        from "../assets/oracle.jpg";
import swayam        from "../assets/swayam.png";
import cloudComputingGoogle from "../assets/cloud-computing-google.jpg";
import infosys       from "../assets/infosys.png";
import ml            from "../assets/ml.jpeg";
import dl            from "../assets/dl.jpeg";
import leetcode      from "../assets/leetcode.png";
import hackerank     from "../assets/hackerank.png";
import cfg           from "../assets/cfg.jpeg";
import SIH           from "../assets/SIH.jpeg";
import researchDay   from "../assets/researchDay.jpeg";
import conference    from "../assets/conference.jpeg";
import news          from "../assets/news.jpeg";
import tictactoe     from "../assets/tictactoe.jpeg";
import portfolio     from "../assets/portfolio.png";
import canteenbill   from "../assets/canteenbill.jpeg";
import claculator    from "../assets/claculator.jpeg";
import clock         from "../assets/clock.jpeg";
import parallax      from "../assets/parallax.jpeg";
import devLanding    from "../assets/devLanding.png";
import lms           from "../assets/lms.jpeg";
import t20           from "../assets/t20.jpeg";
import ATS           from "../assets/ATS.jpeg";
import eda           from "../assets/eda.png";
import da            from "../assets/da.jpeg";
import cnn           from "../assets/cnn.jpeg";
import santosh       from "../assets/santosh.jpeg";
import shiva2        from "../assets/shiva2.jpg";
import dillep        from "../assets/dillep.jpg";
import narendhar     from "../assets/narendhar.jpg";
import bhanuprasad   from "../assets/bhanuprasad.jpeg";
import nishanth      from "../assets/nishanth.jpeg";

const IMAGES = {
  karthikeyaProfile2,
  cbit, salesforce, gdsc, cosc,
  srichaitanya, tswreis,
  oracle, swayam, cloudComputingGoogle, infosys, ml, dl,
  leetcode, hackerank, cfg, SIH, researchDay, conference,
  news, tictactoe, portfolio, canteenbill, claculator, clock,
  parallax, devLanding, lms, t20, ATS, eda, da, cnn,
  santosh, shiva2, dillep, narendhar, bhanuprasad, nishanth,
  // New images to add:
  // qualcomm, uberClone, aiAgent,
};

export default IMAGES;
```

> **Note:** For new projects (AI Agent, Uber Clone), add screenshots to `src/assets/` and uncomment/add their imports.

---

## Component Transformations

### Experience.jsx — before vs after

```jsx
// BEFORE: 158 lines, every skill hardcoded as JSX article
// AFTER: ~40 lines
import { SKILLS } from "../../data/portfolio";

{SKILLS.map((group) => (
  <div key={group.id} className="experience__frontend">
    <h3>{group.category}</h3>
    <div className="experience__content">
      {group.items.map((skill) => (
        <article key={skill} className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <h4>{skill}</h4>
        </article>
      ))}
    </div>
  </div>
))}
```

### Portfolio.jsx — before vs after

```jsx
// BEFORE: 224 lines, data array defined inside component + 14 import IMGx lines
// AFTER: ~60 lines
import { PROJECTS } from "../../data/portfolio";
import IMAGES from "../../data/images";

{PROJECTS.map((pro) => (
  <article className="portfolio__item" key={pro.id}>
    <img src={IMAGES[pro.imgKey]} alt={pro.title} loading="lazy" />
    <h3>{pro.title}</h3>
    <p>{pro.description}</p>
    <div className="tech-tags">
      {pro.technologies.split(' | ').map(t => <span key={t}>{t}</span>)}
    </div>
    <a href={pro.github} target="_blank" rel="noreferrer">GitHub</a>
    {pro.link && <a href={pro.link} target="_blank" rel="noreferrer">Live Demo</a>}
  </article>
))}
```

### Work.jsx — before vs after

```jsx
// BEFORE: 238 lines, 4 hardcoded VerticalTimelineElement blocks + 7 import IMGx lines
// AFTER: ~50 lines
import { EXPERIENCE } from "../../data/portfolio";
import IMAGES from "../../data/images";

const STYLE = {
  contentStyle: { background: 'var(--bg-surface)', border: '1px solid var(--border-active)', color: 'var(--text-primary)' },
  iconStyle:    { background: 'var(--bg-elevated)', border: '2px solid var(--accent-primary)' },
};

{EXPERIENCE.map((job) => (
  <VerticalTimelineElement
    key={job.id}
    date={job.date}
    contentStyle={STYLE.contentStyle}
    iconStyle={STYLE.iconStyle}
    icon={<img src={IMAGES[job.imgKey]} alt={job.organisation} className="experienceImg" />}
  >
    <h3>{job.title}</h3>
    <h4>{job.organisation}</h4>
    <ul>
      {job.points.map((point, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  </VerticalTimelineElement>
))}
```

---

## 17-Step Migration Checklist

Safe to do one step at a time — each step is independently testable.

- [ ] **Step 1:** `mkdir src/data`
- [ ] **Step 2:** Create `src/data/images.js` — verify dev server starts, no import errors
- [ ] **Step 3:** Create `src/data/portfolio.js` — zero risk, nothing references it yet
- [ ] **Step 4:** Migrate `Experience.jsx` — no images, safest first; verify 4+ skill groups render
- [ ] **Step 5:** Migrate `Portfolio.jsx` — delete 14 `import IMGx` lines; verify all projects render with images
- [ ] **Step 6:** Migrate `Work.jsx` — delete 7 `import IMGx` lines; verify timeline renders with icons and bullets
- [ ] **Step 7:** Migrate `Education/education.jsx` — delete 3 IMG imports; verify 3 education cards
- [ ] **Step 8:** Migrate `Courses.jsx` — delete 8 IMG imports; verify certifications render
- [ ] **Step 9:** Migrate `Achievements.jsx` — delete 9 IMG imports; verify achievements render
- [ ] **Step 10:** Migrate `Testimonials.jsx` — delete 6 IMG imports; verify Swiper carousel shows all slides
- [ ] **Step 11:** Migrate `Intro.jsx` — bio paragraphs from `PROFILE.bio`; profile photo from `IMAGES["karthikeyaProfile2"]`
- [ ] **Step 12:** Migrate `Header.jsx` — name from `PROFILE.name`; typewriter roles from `PROFILE.roles`
- [ ] **Step 13:** Migrate `CTA.jsx` — resume URL from `PROFILE.resumeUrl`
- [ ] **Step 14:** Migrate `HeaderSocials.jsx` + `Footer.jsx` — social links from `PROFILE.socials`
- [ ] **Step 15:** Migrate `Contact.jsx` — email from `PROFILE.email`; optionally EmailJS from `PROFILE.emailjs`
- [ ] **Step 16:** Delete old `src/data.js` — confirm nothing still imports from it with `grep -r "from.*data'" src/`
- [ ] **Step 17:** Run `npm run build` — fix any remaining import errors; visual pass of every section

---

## Future Scalability

The data layer is plain JS objects — no JSX, no React. Migration to any external source is trivial:

| Target | Change required |
|--------|----------------|
| **JSON file** | Rename to `portfolio.json`, switch named imports to destructuring. Zero component changes. |
| **API / CMS** | Add one `usePortfolioData()` hook that fetches and returns the same shape. Components swap one import line. Zero JSX changes. |
| **CDN images** | `images.js` becomes a map of `key → CDN URL string`. No bundler involvement. |

---

## Feedback

> good to go with this let implement this as part of 01-architecture.md
