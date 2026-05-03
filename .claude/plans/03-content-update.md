# Plan 03 — Content Update (Master Profile → Portfolio)

**Agent:** Experienced job-seeker / career advisor  
**Source of truth:** `/Users/kboorla/.cursor/skills/tailored-resume-latex-ats/MASTER_PROFILE.md`  
**Status:** Awaiting feedback  
**Estimated effort:** 1 focused day to update all content

---

## Critical Bugs to Fix First (These Cost You Opportunities Right Now)

| # | Issue | Location | Fix |
|---|-------|---------|-----|
| 1 | Bio says "final-year undergraduate" | `Intro.jsx` | You graduated 2025. Update immediately. |
| 2 | Missing Qualcomm internship (Jan–Jun 2025) | `Work.jsx` | Add before Salesforce AMTS |
| 3 | Missing current Salesforce AMTS role (Jun 2025–present) | `Work.jsx` | Add as top entry |
| 4 | "Chief Placement Coordinator – present" still shows | `Work.jsx` | Update end date — implies you're still a student |
| 5 | Broken `mailto:` on email link | `Contact.jsx` | `href="mailto:karthikeyaburla@gmail.com"` |
| 6 | Emotion CNN has copy-pasted ATS description | `Portfolio.jsx` | Fix description to match actual project |
| 7 | "Bootsrap" typo | `Experience.jsx` | → "Bootstrap" |

---

## 1. Hero Tagline Update

**Current:**
```
Full Stack Developer. | AIML Enthusiast. | Data Analyst. | Life Long Learner.
```

**Problems:** "AIML Enthusiast" is student language. "Lifelong Learner" is filler every portfolio uses. These don't reflect current Salesforce AMTS + Qualcomm intern status.

**Recommended replacement:**
```
Software Engineer. | Full Stack Developer. | AI / ML Engineer. | Open to Work.
```

Or if targeting Salesforce/platform roles:
```
Software Engineer. | Salesforce Platform. | AI / LLM Systems. | Open to Work.
```

---

## 2. About Me Rewrite

**Current (outdated):**
> "I am a final-year Computer Science and Engineering undergraduate at Chaitanya Bharathi Institute of Technology..."

**Recommended replacement:**
> Software engineer with a B.E. in Computer Science from CBIT (2025), with industry experience at Salesforce building AI-powered internal tools using Agentforce and RAG pipelines, and at Qualcomm contributing to ETL infrastructure for semiconductor manufacturing pipelines. I build full-stack and ML-powered applications — from LLM-integrated agents to real-time predictive analytics — and am currently seeking software engineering roles at the intersection of backend systems and applied AI.

---

## 3. Skills Section Updates

### Add (missing entirely or misrepresented)

| Skill | Category | Notes |
|-------|---------|-------|
| TypeScript | Frontend / Languages | Used at Salesforce (current role) |
| Python | Languages (top-level) | Currently buried under AIML only |
| Java | Languages (top-level) | Oracle cert + Qualcomm stack |
| PostgreSQL | Backend / Databases | Used at Salesforce |
| Spring Boot | Backend | Used at Qualcomm |
| Apex | Salesforce | Current role |
| Lightning Web Components (LWC) | Salesforce | Current role |
| Agentforce | Salesforce / AI | Current role differentiator |
| RAG Pipelines | AI / LLM | Current role + AI Customer Agent project |
| LangChain / LangGraph | AI / LLM | AI Customer Agent project |
| MCP (Model Context Protocol) | AI / LLM | AI Customer Agent project |
| Prompt Engineering | AI / LLM | Multiple projects |
| Gemini API | AI / LLM | RATS project |
| Streamlit | Tools | 3+ live deployed apps |
| Socket.IO | Backend | Uber Clone project |
| Redux | Frontend | Uber Clone project |
| JWT | Backend | Uber Clone project |
| JUnit / Mockito | Testing | Qualcomm — improved coverage 0% → 70% |

### Fix / Rename
- "Bootsrap" → "Bootstrap"
- "AIML" category → "AI / Machine Learning" (more professional, ATS-friendlier)
- "Devops / Tools" → "Cloud & DevOps"
- Remove "Machine Learning" and "Deep Learning" as standalone skill items — these are categories, not tools. Keep TensorFlow, scikit-learn, XGBoost.

### Consider adding back (currently commented out)
- Terraform, Ansible, Kubernetes — if you have real exposure, even coursework-level, uncomment them

### Recommended 5-panel restructure
```
Languages | Frontend | Backend & Databases | AI / ML & LLM | Cloud & DevOps & Salesforce
```

---

## 4. Experience Timeline Updates

### Add (critical — these are completely missing)

#### Current Salesforce AMTS (Jun 2025–present)
```
Role:    Associate Member of Technical Staff (AMTS)
Org:     Salesforce — Hyderabad, India
Date:    Jun 2025 – Present
Bullets: (from MASTER_PROFILE.md Set A)
  - Developed and enhanced an AI-powered internal employee support agent using
    Agentforce and RAG pipelines over enterprise policy documentation serving
    ~1.4M internal employees globally.
  - Enhanced a Slack-based conversational interface using Slack Bolt SDK and
    Block Kit UI components.
  - Implemented ticket deflection system reducing internal support ticket volume by ~30%.
  - Built analytics pipelines using Google Analytics to track agent adoption,
    deflection rates, and feature usage.
  - Tech: Apex, LWC, Force.com, Agentforce, Slack APIs, Java, Spring Boot,
    Node.js, TypeScript, PostgreSQL
```

#### Qualcomm Intern (Jan–Jun 2025)
```
Role:    Software Engineer Intern
Org:     Qualcomm — Hyderabad, India
Date:    Jan 2025 – Jun 2025
Bullets:
  - Contributed to a scalable ETL platform for semiconductor manufacturing pipelines.
  - Extended ETL pipeline to support additional engineering file formats.
  - Improved automated test coverage from 0% to ~70% using JUnit and Mockito.
  - Tech: Java, Spring Boot, MySQL, Docker, AWS
```

### Update existing entries

**Salesforce Internship (May–Jul 2024):** Update bullets to Set A from master profile:
```
- Tracking Pixel Integration: Designed and deployed a tracking feature for task
  notifications, boosting engagement visibility and contributing to a 30% increase
  in task completion rates.
- Real-Time Task Updates: Built a fault-tolerant, event-driven system for real-time
  task tracking, reducing latency by 40% and improving response time.
- Scalable System Optimization: Prioritized user actions over background updates,
  improving throughput by 50% and enabling the system to handle 15,000+ concurrent users.
```

**Chief Placement Coordinator:** Update "present" end date — post-graduation this implies still a student.

**GDSC and COSC:** Rewrite bullets to describe what *you* did, not what the organisation is (recruiters know what GDSC is).

---

## 5. Projects — Keep, Strengthen, Retire, Add

### Add (not in portfolio at all — these are your best work)

| Project | Why Add | Stack |
|---------|---------|-------|
| AI Customer Support Agent (LangGraph) | Best technical project — LangGraph + RAG + MCP + multi-LLM. Directly relevant to 2025 AI roles | LangGraph, LangChain, Python, SQLAlchemy, Streamlit |
| Uber Clone (MERN) | Shows full-stack breadth — React+Redux, Socket.IO, JWT, Google Maps | React, Redux, Node.js, Express, MongoDB, Socket.IO |

### Keep and Strengthen

| Project | Issue | Fix |
|---------|-------|-----|
| Resume ATS System | Good — lead with it. Description undersells technical depth | Rewrite: mention KNN multi-label setup, Gemini API scoring, cosine similarity |
| T20 Match Analysis | Good — live demo is a plus | Add: ~93% accuracy, 20% precision lift from feature engineering |
| Emotion Detection CNN | Copy-pasted description | Fix: mention FER-2013, ResNet50V2 transfer learning, ~66% test accuracy |
| Library Management System | Needs depth | Add: role-based auth (Admin/Librarian/Student), Django ORM models |
| HeadlineHub | Borderline — keep if nothing else fills React slot | Describe as API integration + React, not just "I made a news app" |

### EDA Projects — Consolidate
FIFA World Cup EDA and Russia-Ukraine dashboard are data notebooks, not applications. Consider combining into one "Data Analysis" portfolio item with both links, or deprioritise to GitHub-only.

### Retire (remove from featured portfolio)
- Calculator
- Analog Clock
- Parallax Website
- Canteen Bill Generator
- Developers Landing Page
- TicTacToe Game

These are tutorial-tier and dilute the signal of your real work. 8 real projects > 14 with 6 tutorials.

---

## 6. Certifications / Courses

### Keep (high value)
- Oracle Certified Associate, Java SE 8
- Machine Learning – Andrew NG (Coursera)
- Deep Learning Specialization – Andrew NG (Coursera)
- Google Cloud Computing Foundations + Generative AI

### Deprioritise (keep but move to secondary tier)
- Introduction to Internet of Things – NPTEL (irrelevant unless targeting IoT)
- Cryptography and Network Security – NPTEL
- Ethical Hacking – NPTEL (may raise questions unless targeting security roles)
- AICTE IdeaLab Internship — should be an **experience entry**, not just a cert

### Add if obtainable (fast, high-impact)
- Any AWS certification (Cloud Practitioner — you list AWS in skills but have no cert)
- Any Deeplearning.ai LLM/Generative AI specialization (directly relevant, fast to complete)
- Salesforce Trailhead certifications (if given to interns/employees)

---

## 7. Achievements — Remove / Update

### Remove
- TS-EAMCET 2021 State Rank 1082 — 5-year-old entrance exam, irrelevant for employment
- JEE 2021 96.63 percentile — same reasoning
- Cricket Runner-Up CBIT — remove or move to personal section

### Keep and Strengthen
- SIH 2023 Grand Finale — prominently feature, prestigious
- JPMC Code for Good 2023 — JPMC brand name has value
- CBIT 5th Research Day 1st place — add paper title
- International Conference — add paper title and conference name; mention Electric Vehicles and Smart Grid topic (from master profile)
- LeetCode — update count (master profile says 430+; resume drafts say 650+/800+ — verify and use current actual number)
- HackerRank 5★ SQL — keep

### Add
- Qualcomm: 0% → 70% test coverage improvement (if comfortable highlighting)
- Salesforce: ticket deflection -30%, ~1.4M users served

---

## 8. Testimonials

**Current issue:** All 6 are from CBIT peers and club members. Zero professional testimonials despite having 2 internships.

**Recommendation:**
- Try to obtain a LinkedIn recommendation from a Salesforce or Qualcomm colleague/manager
- Even one professional testimonial > all 6 student ones for job-hunting purposes
- Until then, move existing testimonials to a secondary "peer feedback" section or the LinkedIn profile

---

## 9. Contact Details

Update to canonical email from master profile:

| Field | Current in portfolio | Should be |
|-------|---------------------|-----------|
| Email display | karthikeyaburla@gmail.com | karthikeyaboorla2004@gmail.com (primary) |
| Email href | Missing `mailto:` | `href="mailto:karthikeyaboorla2004@gmail.com"` |

---

## 10. Overall Positioning Statement

> Iam computer science graduate with real-world industry experience at both Salesforce and Qualcomm, strong ML engineering chops demonstrated through published research and multiple production AI/ML applications, and full-stack development capability proven by live deployed systems. He sits at the intersection of backend software engineering and applied AI — building LangGraph agents, RAG pipelines, and Streamlit-deployed ML tools. The portfolio should lead with the current Salesforce AMTS role and impact metrics, follow with 4–5 strong technical projects (AI Customer Agent, ATS, Uber Clone, T20 predictor, CNN), and close with certifications and research credentials. In 90 seconds a recruiter should think: "this person ships real things, has industry experience at Salesforce and Qualcomm, and knows modern AI."

---

## 11. Priority Order (by impact on job prospects)

| Rank | Update |
|------|--------|
| 1 | Add current Salesforce AMTS role (Jun 2025–present) |
| 2 | Add Qualcomm internship (Jan–Jun 2025) |
| 3 | Fix "final-year undergraduate" bio |
| 4 | Fix broken email `mailto:` link |
| 5 | Fix Emotion Detection copy-pasted description |
| 6 | Update typewriter tagline |
| 7 | Add AI Customer Support Agent (LangGraph) project |
| 8 | Add Uber Clone project |
| 9 | Add TypeScript + Apex/LWC/Agentforce/LangChain to skills |
| 10 | Remove 6 tutorial projects |
| 11 | Remove TS-EAMCET, JEE, Cricket achievement entries |
| 12 | Rewrite GDSC/COSC bullets to describe your actions, not the org |
| 13 | Update LeetCode count (verify actual current number) |
| 14 | Update Salesforce internship bullets to Set A from master profile |
| 15 | Add Uber Clone, remove duplicate/irrelevant certs |

---

## Feedback

> I'm really happy and amazed by the updates and suggestion you gave, and I'm really good to go with everything of it. Here are my few changes. I would like to have.Regarding the tagline, we can have AI generalist and we can go towards the first edition and lets not uncomment terabox and others add paper publication in achievements
> lets breakdown this plan in to minute stories and track them like a product manager in a agile scrum team lets create a new branch and start implementing each story by story and after every story ask me test the change we made and take feedback based on taht only move forward and try to commit at each step 