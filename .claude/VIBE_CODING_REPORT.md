# Vibe Coding Session Report
**Project:** Karthikeya Boorla — Personal Portfolio  
**Branch:** `portfolio-upgrade` (cut from `refactor_codebase`)  
**Duration:** Multi-session, ~4 sprints  
**Method:** Conversational vibe coding with Claude Code

---

## What is Vibe Coding?

Vibe coding is a development approach where you describe *what you want* in natural language and iterate rapidly through conversation — no context-switching to docs, no manual boilerplate, no decision paralysis. You stay in the creative/product loop while the AI handles implementation details.

This session is a full example of that workflow applied to a real production portfolio from scratch to deployment-ready.

---

## How This Session Worked

Every change in this repo was made through conversation. The workflow was:

1. **User describes intent** (sometimes with a screenshot, sometimes just words)
2. **Claude reads the relevant files**, proposes an approach in 1-2 sentences
3. **Claude implements** — edits files, runs builds, fixes errors
4. **User reviews in the browser**, approves or redirects
5. **Commit** — only when user says "looks good"

No code was written manually by the user. No IDE was opened for editing. The entire codebase was shaped through natural language.

---

## Sprint 1 — Foundation & Cleanup

**Goal:** Clean the codebase, fix bugs, create the data layer.

### What we did
- Removed all `console.log` calls (Footer, Contact, Work, Topbar, Intro)
- Fixed naming inconsistencies and typos (`id="testmonials"`, "Bootsrap")
- Rewrote `public/index.html` with proper SEO, Open Graph, and Twitter Card meta tags
- Fixed broken `mailto:` link in Contact + `type="email"` on input
- Fixed Contact form async state — proper loading/success/error states
- Added `loading="lazy"` and proper `alt` text to all images
- Created `src/data/images.js` — central image asset map (single import source)
- Created `src/data/portfolio.js` — all content in one file
- Migrated all components to pull from the data layer instead of hardcoding

**Key insight from vibe coding:** Describing "create a single source of truth for all content" produced a complete, well-structured data file in one shot. Would have taken 30–60 minutes manually.

---

## Sprint 2 — Content Updates

**Goal:** Make the portfolio reflect Karthikeya's actual current profile.

### What we did
- Updated `PROFILE` — bio, tagline ("AI Generalist"), email
- Added Salesforce AMTS role (Jun 2025–present) and Qualcomm internship (Jan–Jun 2025)
- Rewrote all experience bullets with metrics and action verbs
- Added TypeScript, Apex, LWC, Agentforce, LangChain, LangGraph, RAG, Streamlit, Spring Boot, PostgreSQL, Socket.IO, Redux, JWT to skills
- Added AI Customer Support Agent (LangGraph) and Uber Clone (MERN) projects
- Fixed Emotion CNN project description
- Removed 6 tutorial/toy projects (Calculator, Clock, Parallax, etc.)
- Updated achievements — removed JEE/EAMCET scores, added IEEE publication
- Deprioritised irrelevant certifications

**Key insight:** All content changes were made by editing one file (`portfolio.js`). The data layer architecture from Sprint 1 paid off immediately.

---

## Sprint 3 — UI/UX Redesign

**Goal:** Make the site look premium and distinctive.

### What we did

**Design system:**
- Replaced CSS variables with a new palette — user rejected indigo-violet, restored original blue (`#4db5ff`) while keeping font changes
- Switched fonts to Inter (body) + Plus Jakarta Sans (headings) + JetBrains Mono (code/tags)
- Added design tokens: `--color-surface`, `--glow-primary`, `--shadow-card`, `--font-body/heading/mono`

**Skills section:**
- Replaced checklist icons with pill/badge tags (JetBrains Mono, hover glow)
- Restructured for SDE-2 FAANG ATS: Languages / Frontend / Backend & Databases / AI-ML / Cloud & DevOps
- Removed Salesforce section; added LLM fine-tuning tools (Hugging Face, LlamaIndex, LoRA/PEFT, MCP)

**Projects:**
- Added category filter bar (All / AI-ML / Web / Data)
- Featured badge on top 6 projects
- Tech pill tags on each card
- Show 6 by default + "Show All" toggle
- Fixed `object-fit: contain` so full screenshots are visible

**Hero redesign:**
- Two-column layout: text left, circular photo right
- BorderBeam ring around photo
- Monospace tagline `< building AI systems that scale />`
- Typewriter cycling: Software Engineer → Backend Engineer → Full Stack Developer → LLM Agent Builder
- Social icons inline below CTA buttons

**About Me:**
- Stat cards: CGPA / LeetCode / @ Salesforce / IEEE Published
- Rewrote bio to be generic and skill-based (no company/project specifics)

**Other:**
- Framer Motion `whileInView` fade-in animations on all sections (`once: true`)
- IntersectionObserver-based scroll spy for active nav state
- Fixed mobile responsiveness (contact grid, timeline, hero stacking)
- Fixed footer background to use design system vars
- Section order: hero → about → skills → experience → projects → education → courses → achievements → contact
- Bottom nav: 7 icons with correct section anchors

**Key insight from vibe coding:** The color palette got rejected and reverted mid-sprint through a single message ("the whole theme got changed, I want to preserve the previous color"). The revert + selective keep (fonts yes, colors no) took one edit cycle. Manually this would have required hunting down every CSS variable reference.

### Challenges solved through iteration
- **Timeline CSS overrides failing:** CSS `!important` on `.vertical-timeline-element-title` lost to library load order. Solved by switching to inline `style={{}}` props directly on JSX elements.
- **`id="work"` on wrong element:** Was on inner heading div, not outer wrapper. Caused scroll spy and anchor navigation to miss the section. Fixed by moving to `<section id="work">`.
- **Section headings broken:** Multiple components (`Courses`, `Achievements`, `Portfolio`) all used `<div id="work">` for heading styling. Replaced with global `.section__heading` class in `index.css`.

---

## Sprint 4 — Architecture Upgrades

**Goal:** Modernise the toolchain.

### What we did

| Story | What | Why it matters |
|-------|------|---------------|
| 4.1 | CRA → Vite 5 | 10x faster HMR, modern build tool, smaller output |
| 4.2 | TypeScript data layer | Type safety on all content — catches shape errors at compile time |
| 4.3 | `useContactForm` hook | Extracts async EmailJS state into reusable hook |
| 4.4 | `useScrollSpy` hook | IntersectionObserver-based active nav — no scroll event listeners |
| 4.5 | ESLint 9 flat config + Prettier | Consistent code style, catches real bugs (unused vars, browser globals) |
| 4.6 | GitHub Actions CI | Lint + build gate on every push and PR |
| 4.7 | Lighthouse CI | Automated perf/a11y/SEO regression guard |

**Vite migration notes:**
- `react-scripts` removed; `vite` + `@vitejs/plugin-react` added
- `index.html` moved to project root with `<script type="module">` entry
- `src/index.js` renamed to `src/index.jsx` (Vite requires explicit extension for JSX)
- `%PUBLIC_URL%` replaced with `/` paths
- Output directory changed from `build/` to `dist/`
- Pinned to Vite 5 (Node 18 compatibility — Vite 8 requires Node 20+)
- CI pinned to Node 18 to match local lockfile version

**TypeScript notes:**
- Data layer only (`src/data/portfolio.ts`, `src/types/index.ts`)
- `allowJs: true`, `checkJs: false` — gradual migration, components stay JSX
- `strict: true`, `noEmit: true`
- Zero type errors on first run

---

## FAANG Optimisation Pass

After all sprints, a dedicated pass was done to sharpen the portfolio for FAANG recruiters:

### Resume (`faang_v1.tex`)
- All bullets rewritten with XYZ impact format (X accomplished, measured by Y, by doing Z)
- Added quantified metrics to every Qualcomm bullet (previously vague "contributed to")
- Uber Clone added as second project (real-time systems, WebSocket architecture)
- Skills reordered — Languages/Backend/Systems first, Salesforce-specific last
- LeetCode corrected to 800+
- SIH framed as "top 0.5% of 500K+ participants"

### Portfolio content
- About Me bio: no company names, skill-based, leads with distributed systems + AI depth
- Stat cards: "@ Salesforce" and "IEEE Published" as brand signals
- Hero typewriter: added "Backend Engineer" (exact FAANG job title)
- Skills subtitle: "Technical Proficiencies" (sounds senior)
- Footer: removed dead testimonials link, fixed section order

---

## Real Screenshots Added

All 10 project cards now show real screenshots instead of placeholder images:

| Project | File |
|---------|------|
| AI Customer Support Agent | `EcommerceCustomerBot.png` |
| Uber Clone | `uberClone.png` |
| Emotion Detection CNN | `emotionDetection.png` |
| Resume ATS | `atsScore.png` |
| T20 Analysis | `T20_analysis.png` |
| EDA FIFA | `EDA_fifa.png` |
| Russia-Ukraine Dashboard | `russia_ukrainse_war_dashboard.png` |
| Library Management System | `library_management_system.png` |
| HeadlineHub | `headlineHub.png` |
| Portfolio | `react_portfolio.png` |

Qualcomm logo and new hero photo also added.

---

## What Vibe Coding Made Possible

Things that would have taken hours manually but happened in minutes through conversation:

| Task | Manual estimate | Vibe coding |
|------|----------------|-------------|
| CRA → Vite migration | 2–3 hours | 1 conversation turn + 3 fix cycles |
| TypeScript data layer | 1 hour | 1 turn |
| ESLint 9 flat config setup | 45 min | 2 turns (Node/ESM issues) |
| Full section reorder + nav fix | 30 min | 1 turn |
| Resume rewrite (FAANG) | 1–2 hours | 1 turn with suggestions |
| Fixing timeline CSS override | 30 min debugging | 2 turns |
| GitHub Actions CI + Lighthouse | 45 min | 1 turn |

**Total estimated manual time:** 15–20 hours  
**Actual session time:** ~3–4 hours of conversation

---

## Key Principles That Made It Work

1. **One source of truth first.** The data layer (`portfolio.ts`) was created early, so every content update after that was a single-file edit.
2. **Screenshot feedback.** Many iterations happened by sharing a browser screenshot — faster than describing what's wrong in words.
3. **Reject and redirect freely.** Color palette rejected → reverted in seconds. "Bold the company and role" → adjusted immediately. No sunk cost.
4. **Commits as checkpoints.** Every "looks good, commit" created a safe point to return to. No fear of breaking things.
5. **Incremental trust.** Small changes, review in browser, commit, repeat — not one massive PR.
