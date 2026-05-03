import type {
  Profile,
  ExperienceItem,
  EducationItem,
  Certification,
  Achievement,
  Project,
  Skills,
  Testimonial,
} from '../types';

import {
  cbitLogo,
  salesforceLogo,
  gdscLogo,
  coscLogo,
  qualcommLogo,
  srichaitanyaImg,
  tswreisImg,
  oracleImg,
  swayamImg,
  googleCloudImg,
  // machineLearningImg,
  aicteImg,
  // infosysImg,
  // mlImg,
  // dlImg,
  leetcodeImg,
  chaitanyaKreedaImg,
  hackerankImg,
  cfgImg,
  sihImg,
  researchDayImg,
  conferenceImg,
  santoshImg,
  shivaImg,
  dillepImg,
  narendharImg,
  bhanuprasadImg,
  nishanthImg,
  newsImg,
  portfolioImg,
  lmsImg,
  t20Img,
  atsImg,
  edaImg,
  daImg,
  cnnImg,
  aiAgentImg,
  uberCloneImg,
} from "./images";

// ─── PROFILE ────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Karthikeya Boorla",
  tagline: "Software Engineer · AI Generalist · Full-Stack Developer",
  bio: "Software Engineer at Salesforce building AI-powered internal tools with Agentforce, RAG pipelines, and LLM agent systems. I'm passionate about developing applications that create meaningful real-world impact — from conversational AI to full-stack web products.",
  email: "karthikeyaboorla2004@gmail.com",
  altEmail: "karthikeyaburla@gmail.com",
  github: "https://github.com/BoorlaKarthikeya",
  linkedin: "https://www.linkedin.com/in/boorla-karthikeya/",
  portfolio: "https://react-portfolio-boorlakarthikeya.vercel.app/",
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    id: 0,
    title: "Associate Member of Technical Staff",
    company: "Salesforce",
    date: "JUN 2025 - present",
    logo: salesforceLogo,
    logoAlt: "Salesforce",
    bullets: [
      "Developed and enhanced an AI-powered internal employee support agent using Agentforce and RAG pipelines over enterprise policy documentation serving ~1.4M internal employees globally.",
      "Enhanced a Slack-based conversational interface using Slack Bolt SDK and Block Kit UI components, enabling employees to retrieve contextual policy answers with citations directly within Slack.",
      "Implemented ticket deflection system integrated with the support portal, reducing internal support ticket volume by ~30%.",
      "Built analytics pipelines using Google Analytics to track agent adoption, deflection rates, and feature usage, enabling data-driven product improvements.",
    ],
  },
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Qualcomm",
    date: "JAN 2025 - JUN 2025",
    logo: qualcommLogo,
    logoAlt: "Qualcomm",
    bullets: [
      "Contributed to a scalable ETL platform used in semiconductor manufacturing pipelines, enabling vendors across design, synthesis, fabrication, and testing stages to exchange large engineering artifacts.",
      "Extended the ETL pipeline to support additional engineering file formats, improving interoperability between vendor systems handling complex semiconductor design data.",
      "Improved automated test coverage from 0% to ~70% using JUnit and Mockito, significantly increasing reliability of backend microservices.",
    ],
  },
  {
    id: 2,
    title: "Chief Placement Coordinator",
    company: "CBIT Training & Placements",
    date: "FEB 2024 - present",
    logo: cbitLogo,
    logoAlt: "CBIT",
    bullets: [
      "Bridge the gap between 2,000+ students and industry by managing end-to-end recruitment drives, employer partnerships, and pre-placement talks.",
      "Counsel students on resume, interview prep, and career strategy; track placement metrics to identify gaps and continuously improve outcomes.",
    ],
  },
  {
    id: 3,
    title: "Associate Member of Technical Staff — Intern",
    company: "Salesforce",
    date: "MAY 2024 - JUL 2024",
    logo: salesforceLogo,
    logoAlt: "Salesforce",
    bullets: [
      "Tracking Pixel Integration: Designed and deployed a tracking feature for task notifications, boosting engagement visibility and contributing to a 30% increase in task completion rates.",
      "Real-Time Task Updates: Built a fault-tolerant, event-driven system for real-time task tracking, reducing latency by 40% and improving response time.",
      "Scalable System Optimization: Prioritized user actions over background updates, improving throughput by 50% and enabling the system to handle 15,000+ concurrent users.",
    ],
  },
  {
    id: 4,
    title: "Core Team Leader",
    company: "Google Developers Student Club (CBIT)",
    date: "OCT 2023 - SEP 2024",
    logo: gdscLogo,
    logoAlt: "Google Developer Student Club",
    bullets: [
      "Led a cross-functional team to organise workshops, hackathons, and hands-on sessions on Google technologies for 500+ students across campus.",
      "Mentored junior members on web development and cloud fundamentals; coordinated speaker sessions and solution challenges with Google's GDSC program.",
    ],
  },
  {
    id: 5,
    title: "Technical Co-ordinator",
    company: "Chaitanya Bharathi Open Source Community (COSC-CBIT)",
    date: "JAN 2023 - SEP 2023",
    logo: coscLogo,
    logoAlt: "Chaitanya Bharathi Open Source Community",
    bullets: [
      "Organised and facilitated 5+ bootcamps and workshops on open-source tools, Git workflows, and web technologies, growing active membership by 40%.",
      "Designed technical problem statements for internal hackathons and guided teams through project architecture and execution.",
    ],
  },
];

// ─── EDUCATION ──────────────────────────────────────────────────────────────

export const education: EducationItem[] = [
  {
    id: 1,
    title: "Chaitanya Bharathi Institute of Technology (2021–2025)",
    subtitle: "Computer Science and Engineering (CSE)",
    img: cbitLogo,
    grade: "CGPA: 9.18",
    link: "https://www.cbit.ac.in/",
  },
  {
    id: 2,
    title: "Sri Chaitanya Junior College, DD Colony, Hyderabad (2019–2021)",
    subtitle: "Class XII — Science (Physics, Chemistry, Mathematics)",
    img: srichaitanyaImg,
    grade: "Grade: 98%",
    link: "https://srichaitanya.net/",
  },
  {
    id: 3,
    title: "Telangana Social Welfare Residential School, Shaikpet, Hyderabad (2017–2019)",
    subtitle: "Class X",
    img: tswreisImg,
    grade: "CGPA: 9.7",
    link: "https://www.cbit.ac.in/",
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Oracle Certified Associate — Java SE 8 Programmer",
    img: oracleImg,
    link: "https://drive.google.com/file/d/1gwLz3bzT6dD_jg-qQ6Mzc_wxlUrnj3UE/view?usp=sharing",
  },
  {
    id: 4,
    title: "Google Cloud Computing Foundations and Generative AI Arcade",
    img: googleCloudImg,
    link: "https://www.cloudskillsboost.google/public_profiles/4be8e0c8-981a-40a3-8314-144bdfb4dd58",
  },
  // { id: 7, title: "Machine Learning — Andrew NG (Coursera)", img: mlImg, link: "https://drive.google.com/file/d/1gTiYqJeV76M0W2X40w68mMGWErfXWI-G/view?usp=sharing" },
  // { id: 8, title: "Deep Learning Specialization — Andrew NG (Coursera)", img: dlImg, link: "https://drive.google.com/file/d/1i1LoviGH3xB9RElJXHlN90eth88dOfWy/view?usp=sharing" },
  // { id: 9, title: "Introduction to Data Science — Infosys", img: infosysImg, link: "https://drive.google.com/file/d/1j5KOnZAIa5caiK4XbjwnG9vPv8loabZ9/view?usp=sharing" },
  {
    id: 10,
    title: "AICTE IdeaLab Internship — CBIT",
    img: aicteImg,
    link: "https://drive.google.com/file/d/1A5qgGxGC_vVwAoRO3j5v5fTbuvxI5Fn2/view?usp=sharing",
  },
  // { id: 6, title: "Machine Learning — Coursera", img: machineLearningImg, link: "" },
  {
    id: 3,
    title: "Cryptography and Network Security — NPTEL",
    img: swayamImg,
    link: "https://drive.google.com/file/d/1blixYrFxDN2IVadpohxnPkZld3wNiMaf/view?usp=sharing",
  },
  // { id: 5, title: "Introduction to Internet of Things — NPTEL", img: swayamImg, link: "https://drive.google.com/file/d/15XRsbuas-yLMTaQ9SKdklnzsyOko1Mhl/view?usp=sharing" },
  {
    id: 2,
    title: "Ethical Hacking — NPTEL",
    img: swayamImg,
    link: "https://drive.google.com/file/d/11ScUC_BegyWov6mopt0h4toclgriYXJ8/view?usp=sharing",
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    id: 10,
    title: "Published Research — Electric Vehicles & Smart Grid",
    subtitle: "Research paper published at the 15th International Conference on Recent Engineering and Technology (IEEE context)",
    img: conferenceImg,
    link: "https://drive.google.com/file/d/166RDNPlStAh8I4PefhIKMsipmkc1CIhm/view?usp=sharing",
    linkName: "certificate",
  },
  {
    id: 8,
    title: "CBIT 5th Research Day 2023 — 1st Place",
    subtitle: "Secured 1st place in research paper presentation",
    img: researchDayImg,
    link: "https://drive.google.com/file/d/1FzAbK57WmxrD3LkBoAQ7V2T1u9murf1U/view?usp=sharing",
    linkName: "certificate",
  },
  {
    id: 7,
    title: "Smart India Hackathon 2023",
    subtitle: "Shortlisted for the Grand Finale of one of Asia's largest hackathons — SIH 2023",
    img: sihImg,
    link: "",
    linkName: "",
  },
  {
    id: 6,
    title: "JPMorgan Chase Code for Good 2023",
    subtitle: "Shortlisted and participated in JPMC Code for Good hackathon 2023",
    img: cfgImg,
    link: "",
    linkName: "",
  },
  {
    id: 1,
    title: "LeetCode",
    subtitle: "Solved 800+ problems on LeetCode",
    img: leetcodeImg,
    link: "https://leetcode.com/KarthikeyaBoorla/",
    linkName: "Profile",
  },
  // {
  //   id: 5,
  //   title: "HackerRank — 5★ SQL",
  //   subtitle: "5 star, Golden Badge for SQL on HackerRank",
  //   img: hackerankImg,
  //   link: "https://www.hackerrank.com/karthikeyaburla?hr_r=1",
  //   linkName: "Profile",
  // },
  {
    id: 4,
    title: "Cricket Shruthi 2023 (CBIT)",
    subtitle: "Runner-up team (CSE-3)",
    img: chaitanyaKreedaImg,
    link: "",
    linkName: "",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 5,
    link: "https://www.linkedin.com/in/bhanu-prasad-paitar-583188249/",
    img: bhanuprasadImg,
    name: "Bhanu Prasad",
    role: "President — ELC CBIT",
    test: "Karthikeya is an exceptional member of our Electoral Literacy Club, showcasing a remarkable blend of hard work, technical expertise, and creative ideas. His dedication, tech skills, and innovative thinking have significantly contributed to our club's success. His relentless pursuit of excellence and his ability to inspire others with his ideas have elevated the impact of our club.",
  },
  {
    id: 6,
    link: "https://www.linkedin.com/in/nishanth-artham-1a572b212/",
    img: nishanthImg,
    name: "Nishanth",
    role: "Technical Team Head — CBIT COSC",
    test: "I highly commend Karthikeya for his exceptional contributions and dedication to our CBIT-COSC Club. His technical expertise, problem-solving skills, and leadership have been invaluable. Karthikeya's passion for technology, continuous learning, and collaborative spirit have greatly enriched our club. He consistently goes above and beyond, inspiring others to excel.",
  },
  {
    id: 1,
    link: "https://www.linkedin.com/in/sai-santosh-bonagiri-335168225/",
    img: santoshImg,
    name: "Sai Santosh",
    role: "",
    test: "Karthikeya is an exceptional web developer with a keen eye for detail and a knack for creating visually appealing and functional websites. His expertise in competitive coding adds a valuable dimension to his skill set. Collaborating with Karthikeya was a pleasure — his strong communication skills and dedication ensured the success of our projects.",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/shivashanker-reddy-cheruku-713823278/",
    img: shivaImg,
    name: "Shiva Shanker Reddy",
    role: "",
    test: "Karthikeya is a truly exceptional full stack developer. His technical skills and dedication are outstanding, consistently delivering high-quality work. With a keen eye for detail, he ensures clean and efficient code. His proactive approach and excellent communication make him a pleasure to collaborate with.",
  },
  {
    id: 3,
    link: "",
    img: dillepImg,
    name: "Dileep Kumar",
    role: "",
    test: "Karthikeya is an exceptional full stack developer with a visionary mindset. His technical expertise, innovative thinking, and collaborative spirit set him apart. With a deep understanding of both front-end and back-end development, he delivers seamless solutions and stays ahead of the curve.",
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/naren8790/",
    img: narendharImg,
    name: "Narendhar Reddy",
    role: "",
    test: "Karthikeya is an exceptional full stack developer with a versatile skill set. His expertise spans both front-end and back-end development, and his attention to detail is impeccable. With a strong work ethic and a passion for problem-solving, he consistently delivers outstanding results.",
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 15,
    title: "AI Customer Support Agent (LangGraph)",
    img: aiAgentImg,
    description:
      "Production-style e-commerce customer support agent built as a LangGraph state machine with intent routing, order management, RAG-based policy queries, and fraud checks. Config-driven tool platform supports MCP servers and pluggable LLM providers (Ollama, OpenAI, Gemini, Grok).",
    technologies: ["LangGraph", "LangChain", "Python", "RAG", "SQLAlchemy", "Streamlit", "MCP"],
    category: "ai-ml",
    featured: true,
    link: "https://www.linkedin.com/posts/boorla-karthikeya_aiengineering-llm-agentsystems-activity-7433823933877096448-Lrur",
    github: "https://github.com/BoorlaKarthikeya/E-commerce_CustomerAgent_with_tools",
  },
  {
    id: 16,
    title: "Uber Clone (MERN + Real-time)",
    img: uberCloneImg,
    description:
      "Full-stack ride-hailing app with rider and driver flows: auth, ride booking with fare estimation, driver dashboard with accept/reject, and real-time location updates via Socket.IO. Google Maps integration for geocoding and route display.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Google Maps API"],
    category: "web",
    featured: true,
    link: "",
    github: "https://github.com/BoorlaKarthikeya/UberClone_MERN",
  },
  {
    id: 14,
    title: "Emotion Detection using CNN (ResNet50V2)",
    img: cnnImg,
    description:
      "Image classifier for 7 facial emotions using ResNet50V2 transfer learning on FER-2013. Addressed class imbalance via augmentation and class weights. Final test accuracy ~66%. Deployed via Gradio UI.",
    technologies: ["Python", "TensorFlow", "ResNet50V2", "OpenCV", "Gradio"],
    category: "ai-ml",
    featured: true,
    link: "",
    github: "https://github.com/BoorlaKarthikeya/Emotion-detection-CNN/tree/main",
  },
  {
    id: 11,
    title: "Resume Application Tracking System",
    img: atsImg,
    description:
      "Streamlit app for department prediction from resume text using KNN multi-label classification, plus ATS-style scoring that compares resumes to job descriptions via Gemini API and surfaces missing keywords.",
    technologies: ["Python", "scikit-learn", "NLP", "Gemini API", "Streamlit"],
    category: "ai-ml",
    featured: true,
    link: "https://resumeapplicationtrackingsystem-karthikeya.streamlit.app/",
    github: "https://github.com/BoorlaKarthikeya/ResumeApplicationTrackingSystem",
  },
  {
    id: 10,
    title: "Dynamic T20 Match Analysis",
    img: t20Img,
    description:
      "Interactive Streamlit app predicting T20 cricket winning probabilities and match scores. User selects teams, venue, and live match state; XGBoost + logistic regression models output predictions with ~93% accuracy.",
    technologies: ["NumPy", "Pandas", "XGBoost", "scikit-learn", "Streamlit"],
    category: "data",
    featured: true,
    link: "https://t20-score-win-predictor-karthikeya.streamlit.app/",
    github: "https://github.com/BoorlaKarthikeya/T20_score_win_predictor",
  },
  {
    id: 12,
    title: "EDA on FIFA World Cup Data",
    img: edaImg,
    description:
      "In-depth exploratory analysis across FIFA tournaments: team performance trends, substitution effects, knockout-stage behavior, and attendance patterns — visualised with interactive Plotly/Seaborn charts.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
    category: "data",
    featured: true,
    link: "",
    github: "https://github.com/BoorlaKarthikeya/EDA_fifaWorldCup",
  },
  {
    id: 13,
    title: "Russia–Ukraine Military Losses Dashboard",
    img: daImg,
    description:
      "Time-series Streamlit dashboard on reported Russian equipment and personnel losses (Feb 2022–Jan 2024) across air, naval, land, and personnel categories with interactive drill-down charts.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
    category: "data",
    featured: false,
    link: "https://russiawaranalysis-karthikeyaboorla.streamlit.app/",
    github: "https://github.com/BoorlaKarthikeya/RussiaWarAnalysis/tree/main",
  },
  {
    id: 9,
    title: "Library Management System",
    img: lmsImg,
    description:
      "Web-based library platform with role-based access for Admin, Librarian, and Student. Supports catalog management, book availability tracking, and borrowing workflows.",
    technologies: ["Django", "JavaScript", "HTML", "CSS", "Bootstrap"],
    category: "web",
    featured: false,
    link: "",
    github: "https://github.com/BoorlaKarthikeya/Library_Management_System/tree/main2/LMS",
  },
  {
    id: 1,
    title: "HeadlineHub",
    img: newsImg,
    description:
      "API-driven news browsing app built with React, displaying categorized live headlines from a third-party news API with a clean, responsive UI.",
    technologies: ["React", "JavaScript", "Bootstrap", "REST API"],
    category: "web",
    featured: false,
    link: "https://drive.google.com/file/d/1nl9NC1ZvlBZTPkJAb2Z9xMdloozsVkkp/view?usp=sharing",
    github: "https://github.com/BoorlaKarthikeya/HeadlineHub-react-API-based-news-web-App-",
  },
  {
    id: 3,
    title: "Portfolio",
    img: portfolioImg,
    description: "You are watching it right now 😉.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    category: "web",
    featured: false,
    link: "#home",
    github: "https://github.com/BoorlaKarthikeya/react-portfolio/",
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export const skills: Skills = {
  languages: [
    "Java", "Python", "JavaScript", "TypeScript", "C", "SQL", "Bash",
  ],
  frontend: [
    "React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "Socket.IO",
  ],
  backend: [
    "Node.js", "Express.js", "Spring Boot", "Django",
    "PostgreSQL", "MySQL", "MongoDB", "Microservices", "System Design",
  ],
  aiml: [
    "LangGraph", "LangChain", "LlamaIndex", "RAG Pipelines", "LLM Agents",
    "Hugging Face", "LLM Fine-tuning", "LoRA / PEFT", "Astral",
    "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "NLP", "MCP",
  ],
  devops: [
    "AWS", "Docker", "Git", "CI/CD", "Jenkins", "Linux", "JUnit", "Mockito",
  ],
};
