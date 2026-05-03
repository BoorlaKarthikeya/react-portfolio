# react-portfolio — Claude Project Context

## Owner
**Karthikeya Boorla** — Software Engineer (AMTS @ Salesforce, Jun 2025–present; prior Qualcomm intern Jan–Jun 2025)

## What this project is
Personal portfolio website built with React (CRA). Deployed at https://react-portfolio-boorlakarthikeya.vercel.app/

## Master profile
Full professional profile (canonical source of truth for all content) lives at:
`/Users/kboorla/.cursor/skills/tailored-resume-latex-ats/MASTER_PROFILE.md`

Key facts to always use from master profile:
- **GPA:** 9.18 (canonical)
- **Email (portfolio contact):** karthikeyaboorla2004@gmail.com (primary) / karthikeyaburla@gmail.com (alt)
- **Current role:** AMTS @ Salesforce, Jun 2025–present
- **Prior internship:** Qualcomm SWE Intern, Jan 2025–Jun 2025
- **Prior internship:** Salesforce SWE Intern, May 2024–Jul 2024
- **GitHub:** https://github.com/BoorlaKarthikeya
- **LinkedIn:** https://www.linkedin.com/in/boorla-karthikeya/
- **LeetCode count:** confirm current count before updating (portfolio says 430+, resumes vary)

## Current branch
`refactor_codebase` — active development branch for the portfolio upgrade

## Active plans (in .claude/plans/)
Four architectural/design plans have been drafted and are pending review:

| File | Description | Status |
|------|-------------|--------|
| [01-architecture.md](plans/01-architecture.md) | Senior FE architecture improvements | Awaiting feedback |
| [02-ui-ux.md](plans/02-ui-ux.md) | UI/UX redesign suggestions | Awaiting feedback |
| [03-content-update.md](plans/03-content-update.md) | Content update from master profile | Awaiting feedback |
| [04-data-consolidation.md](plans/04-data-consolidation.md) | Data consolidation into single source-of-truth | Awaiting feedback |

## Key decisions (update as decisions are made)
- [ ] CRA → Vite migration: pending decision
- [ ] TypeScript migration: pending decision
- [ ] Design system colour palette: pending decision
- [ ] Next.js vs SPA+React Router: pending decision
- [ ] Projects to keep vs retire: pending decision

## Tech stack (current)
- React 18, CRA (`react-scripts`)
- Tailwind CSS + per-component CSS files (two competing systems)
- Framer Motion (installed, barely used)
- MagicUI components (neon-gradient-card, border-beam, shine-border, etc.)
- EmailJS for contact form
- Swiper for testimonials carousel
- react-vertical-timeline-component for experience section

## Known issues (fix before any deployment)
1. EmailJS credentials hardcoded in `src/components/contact/Contact.jsx` — move to `.env`
2. `href="karthikeyaburla@gmail.com"` missing `mailto:` prefix — broken contact link
3. Bio still says "final-year undergraduate" — graduate since 2025
4. Emotion Detection CNN project has copy-pasted ATS description
5. `console.log` calls in `Footer.jsx` and `Contact.jsx`
6. `id="testmonials"` typo in Testimonials section
7. "Bootsrap" typo in Experience.jsx
8. Missing Qualcomm internship and current Salesforce AMTS role in Work.jsx
