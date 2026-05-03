# Sprint Board — Portfolio Upgrade

**Branch:** `portfolio-upgrade` (cut from `refactor_codebase`)  
**Process:** One story at a time → implement → test instructions → your feedback → commit → next story  
**Legend:** 🔲 Todo | 🔄 In Progress | ✅ Done | ⏸ Blocked

---

## Priority Order (Why This Sequence)

```
Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4
Foundation  Content    UI/UX      Architecture
(data +     (update    (redesign  (Vite,
 cleanup)    content)   + visual)  TypeScript)
```

Sprint 1 must come first — once the data layer exists, content updates (Sprint 2) are just editing one file. Once content is accurate, UI changes (Sprint 3) are meaningful. Architecture upgrades (Sprint 4) are last because they require a stable, clean base.

---

## Sprint 1 — Foundation & Cleanup ✅
> Goal: Clean up the codebase, fix bugs, create the data layer. No visual changes yet.

| # | Story | Status | Commit |
|---|-------|--------|--------|
| 1.1 | Create `portfolio-upgrade` branch | ✅ | branch created |
| 1.2 | Remove `console.log` calls and dead commented code | ✅ | Footer, Contact, Work, Topbar, Intro |
| 1.3 | Fix naming inconsistencies + typos | ✅ | Education, Courses, Experience, Testimonials, Achievements |
| 1.4 | Fix `public/index.html` — proper title, meta, OG tags | ✅ | SEO/OG/Twitter full rewrite |
| 1.5 | Fix broken `mailto:` link in Contact + `type="email"` | ✅ | Contact.jsx |
| 1.6 | Fix Contact form async state (loading/success/error) | ✅ | Contact.jsx |
| 1.7 | Add `loading="lazy"` + proper `alt` text to all images | ✅ | 927c6a6 |
| 1.8 | Create `src/data/images.js` — central image asset map | ✅ | ef8b01c |
| 1.9 | Create `src/data/portfolio.js` — all content exports | ✅ | ef8b01c |
| 1.10 | Migrate `Experience.jsx` to use `SKILLS` from data | ✅ | 7ef5ab3 |
| 1.11 | Migrate `Portfolio.jsx` to use `PROJECTS` from data | ✅ | 7ef5ab3 |
| 1.12 | Migrate `Work.jsx` to use `EXPERIENCE` from data | ✅ | 7ef5ab3 |
| 1.13 | Migrate `Education.jsx` to use `EDUCATION` from data | ✅ | 7ef5ab3 |
| 1.14 | Migrate `Courses.jsx` to use `CERTIFICATIONS` from data | ✅ | 7ef5ab3 |
| 1.15 | Migrate `Achievements.jsx` to use `ACHIEVEMENTS` from data | ✅ | 7ef5ab3 |
| 1.16 | Migrate `Testimonials.jsx` to use `TESTIMONIALS` from data | ✅ | 7ef5ab3 |
| 1.17 | Migrate `Intro.jsx` + `Header.jsx` + `CTA.jsx` to use `PROFILE` | ⏸ | deferred to Sprint 3 (Hero redesign) |
| 1.18 | Migrate `HeaderSocials.jsx` + `Footer.jsx` + `Contact.jsx` to use `PROFILE` | ⏸ | deferred to Sprint 3 (Hero redesign) |
| 1.19 | Delete old `src/data.js`, verify build passes | ✅ | 154b20e |

---

## Sprint 2 — Content Updates ✅
> Goal: Make the portfolio reflect your actual current profile. All changes are in `src/data/portfolio.js` only.

| # | Story | Status | Commit |
|---|-------|--------|--------|
| 2.1 | Update `PROFILE` — bio, tagline roles ("AI Generalist"), email | ✅ | 7ff9280 |
| 2.2 | Add current Salesforce AMTS role to `EXPERIENCE` (Jun 2025–present) | ✅ | 7ff9280 |
| 2.3 | Add Qualcomm internship to `EXPERIENCE` (Jan–Jun 2025) | ✅ | 7ff9280 |
| 2.4 | Update Salesforce internship bullets to Set A (metrics-first) | ✅ | 7ff9280 |
| 2.5 | Rewrite GDSC + COSC bullets (your actions, not org description) | ✅ | 7ff9280 |
| 2.6 | Update `SKILLS` — add TypeScript, Apex, LWC, Agentforce, LangChain, LangGraph, RAG, Streamlit, Spring Boot, PostgreSQL, Socket.IO, Redux, JWT | ✅ | 7ff9280 |
| 2.7 | Add AI Customer Support Agent (LangGraph) to `PROJECTS` | ✅ | 7ff9280 |
| 2.8 | Add Uber Clone (MERN) to `PROJECTS` | ✅ | 7ff9280 |
| 2.9 | Fix Emotion CNN project description (copy-paste from ATS) | ✅ | 7ff9280 |
| 2.10 | Remove tutorial projects from `PROJECTS` (Calculator, Clock, Parallax, Canteen Bill, Landing Page, TicTacToe) | ✅ | 7ff9280 |
| 2.11 | Update `ACHIEVEMENTS` — remove JEE/EAMCET; add paper publication entry | ✅ | 7ff9280 |
| 2.12 | Update `CERTIFICATIONS` — deprioritise IoT/Ethical Hacking/Crypto NPTEL | ✅ | 7ff9280 |
| 2.13 | Add placeholder images for new projects (AI Agent, Uber Clone) | ✅ | 7ff9280 (uses portfolio.png as placeholder — replace with real screenshots) |

---

## Sprint 3 — UI/UX Redesign ✅
> Goal: Make the site look premium, modern, and distinctive.

| # | Story | Status | Commit |
|---|-------|--------|--------|
| 3.1 | Replace CSS variables — new indigo-violet palette in `index.css` | ✅ | 9c2325b |
| 3.2 | Switch fonts — Inter (body) + Plus Jakarta Sans (headings) + JetBrains Mono (code/tags) | ✅ | 9c2325b |
| 3.3 | Fix accessibility — focus ring, aria-labels on nav, form labels, heading hierarchy | ✅ | 9c2325b |
| 3.4 | Fix Experience timeline — remove hardcoded `rgb(33,150,243)`, apply design system vars | ✅ | 9c2325b |
| 3.5 | Replace skill checklist with pill/badge tags (JetBrains Mono, hover glow) | ✅ | 9c2325b |
| 3.6 | Add project filter bar (All / Web / AI-ML / Data) with category field in data | ✅ | 9c2325b |
| 3.7 | Redesign project cards — tech pill tags, featured badge, image overlay gradient | ✅ | 9c2325b |
| 3.8 | Show 6 featured projects by default + "Show all" toggle | ✅ | 9c2325b |
| 3.9 | Hero redesign — two-column layout, profile photo, BorderBeam ring, monospace tag | ✅ | 0a8b954 |
| 3.10 | About Me — stat cards (CGPA / LeetCode / Internships / Projects) | ✅ | 0a8b954 |
| 3.11 | Add Framer Motion `whileInView` animations (section cards, `once:true`) | ✅ | 2d55481 |
| 3.12 | Fix mobile responsiveness — contact grid, timeline, hero stacking | ✅ | f74d915 |
| 3.13 | Fix footer — background to design system, copyright fixed | ✅ | 2d55481 |
| 3.14 | Dark/light mode toggle (CSS vars + localStorage) | ⏸ | deferred — standalone feature |
| 3.15 | Scroll spy active nav (IntersectionObserver-based) | ✅ | f74d915 |
| 3.16 | Fix section heading IDs — replace `div#work` hacks with `.section__heading` class globally | ✅ | 39fab37 |
| 3.17 | Reorder sections: hero→about→skills→experience→projects→education→courses→achievements→contact | ✅ | 39fab37 |
| 3.18 | Fix certificate button overlap in courses/achievements cards (flex column + margin-top:auto) | ✅ | 39fab37 |

---

## Sprint 4 — Architecture Upgrades ✅
> Goal: Modernise the toolchain so the codebase impresses engineers who read it.

| # | Story | Status | Commit |
|---|-------|--------|--------|
| 4.1 | Migrate CRA → Vite (update configs, env var prefix, scripts) | ✅ | f3fb205 |
| 4.2 | Add TypeScript to data layer (`src/data/*.ts`, `src/types/index.ts`) | ✅ | 5b9631a |
| 4.3 | Create `useContactForm` custom hook (proper async state) | ✅ | 1cf27d4 |
| 4.4 | Create `useScrollSpy` hook (IntersectionObserver-based active nav) | ✅ | f74d915 |
| 4.5 | Add ESLint + Prettier + lint-staged config | ✅ | 1cf27d4 |
| 4.6 | Add GitHub Actions CI workflow (build + lint) | ✅ | 1cf27d4 |
| 4.7 | Add Lighthouse CI to GitHub Actions (perf ≥ 90, a11y ≥ 95, SEO ≥ 95) | ✅ | e252e41 |

---

## Notes
- Stories within a sprint can be re-ordered based on feedback
- Sprint 3 stories 3.1–3.4 can start in parallel with Sprint 2 (they are independent CSS/a11y changes)
- Story 2.13 (placeholder images) is a prerequisite for 2.7 and 2.8 — will prompt you to add screenshots
- Sprint 4 story 4.1 (Vite) is the riskiest — do it last, on its own PR
