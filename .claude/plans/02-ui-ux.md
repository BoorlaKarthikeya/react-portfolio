# Plan 02 — UI/UX Redesign

**Agent:** Senior UX/UI Engineer  
**Status:** Awaiting feedback  
**Estimated effort:** 2 weekends for high-impact changes; full redesign ~1.5–2 weeks

---

## Core Problem

The current `#1f1f38` / `#2c2c6c` / `#4db5ff` palette is a recognisable YouTube-tutorial clone. A recruiter who sees 50 portfolios a week files it as "standard" in under 2 seconds. The design undersells a genuinely strong profile.

---

## 1. New Design System

### Colour Palette (replace entirely)

```css
:root {
  --bg-deep:         #0A0A0F;   /* near-black with subtle violet cast */
  --bg-surface:      #111118;   /* card backgrounds */
  --bg-elevated:     #1A1A26;   /* hover states, elevated cards */
  --border-subtle:   #1E1E2E;   /* dividers, inactive borders */
  --border-active:   #3D3D5C;   /* hover borders */

  --accent-primary:  #6C63FF;   /* indigo-violet — Linear, Vercel, Raycast palette */
  --accent-secondary:#A78BFA;   /* lighter violet for secondary icons/text */
  --accent-glow:     rgba(108, 99, 255, 0.15);

  --text-primary:    #F0F0FF;   /* off-white with cool tint */
  --text-secondary:  #9090B0;   /* muted — replaces rgba(255,255,255,0.6) */
  --text-tertiary:   #5A5A80;   /* timestamps, labels */

  --success:         #34D399;   /* Live Demo buttons, verified badges */
  --warning:         #FBBF24;   /* ratings, 1st-place highlights */
}
```

Why indigo-violet: differentiates from the crowd of blue portfolios; used by Linear, Vercel, Raycast — reads as premium and technical.

### Typography

```css
/* Replace Poppins + Roboto */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

/* Headings: Plus Jakarta Sans — modern, geometric, editorial */
/* Body:     Inter — industry standard for technical interfaces */
/* Mono:     JetBrains Mono — for skill tags, tech lists (signals developer instantly) */
```

### Spacing (8-point grid)
```css
--space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
--space-4: 1rem;     --space-6: 1.5rem;   --space-8: 2rem;
--space-10: 2.5rem;  --space-12: 3rem;    --space-16: 4rem;
--space-20: 5rem;    --space-24: 6rem;
/* Section gaps: var(--space-24). Card padding: var(--space-6). */
```

---

## 2. Section-by-Section Redesign

### Hero

**Problems:** Centered text only (no profile photo), typewriter feels 2019, "Hello I'm" wastes first-impression space, social icons hidden on mobile.

**Changes:**
- Two-column split: text left, large circular profile photo right (with `BorderBeam` animated ring)
- Add monospace tag above name: `< Full Stack & AI Engineer />` in `--accent-secondary`
- Keep typewriter but cap to 2 roles: `Software Engineer.` | `AI / ML Engineer.` — stop cycling through 4
- Add `Open to Work` as a subtle pill badge near the name
- Staggered Framer Motion entrance: name (0ms) → subtitle (100ms) → CTAs (200ms) → photo (300ms)
- Social icons: horizontal row below CTAs on mobile (currently `display: none` — broken)

### About Me (Intro)

**Problems:** Three near-identical paragraphs; `transform: rotate(10deg)` on photo looks unintentional; `alt="me"`.

**Changes:**
- Cut to ONE paragraph (3–4 sentences), lead with Salesforce/Qualcomm experience
- Apply `BorderBeam` to profile photo container (you already have the component)
- Add 4 stat cards: `430+ LeetCode`, `3 Roles`, `9.18 CGPA`, `14+ Projects` — large number in `--accent-primary`
- Fix `alt="me"` → `alt="Karthikeya Boorla — Software Engineer"`

### Skills (Experience.jsx)

**Problems:** BsFillPatchCheckFill checklist is flat and provides no information density; "Bootsrap" typo; 4 equal-weight cards don't distinguish your differentiator (AIML + Full Stack).

**Changes:**
- Replace checklist with **pill/badge tags**: `JetBrains Mono`, `font-size: 0.8rem`, rounded, `--bg-elevated` bg, `--border-active` border
- On hover: `--accent-glow` background, `--accent-primary` border
- Optional: proficiency dot inside each pill (green = proficient, yellow = familiar)
- Organise into **tabs or accordion** (reduces cognitive load on mobile)
- Fix "Bootsrap" → "Bootstrap"

### Education

**Problems:** Component export is lowercase `education` (React convention violation); both title and subtitle use `h3`; cards look identical to every other section.

**Changes:**
- Switch to **horizontal timeline**: thin vertical line on left, year badge, circular 48px institution logo, `h3` for degree, `h4` for institution, grade as a pill with `--success` colour
- Remove "Visit Website" CTA from school cards (very low value)
- Fix export to `Education` (PascalCase)

### Certifications

**Problems:** 3 NPTEL courses share the same `swayam.png` image; no issuer labels or dates; overwhelming grid of 9.

**Changes:**
- **Two-tier display**: top 3 as featured larger cards (Andrew NG ML/DL, Oracle Java, Google Cloud), rest as compact scrollable pills
- Each featured card: issuer logo (40px), cert name, issuer label, "Verified ✓" badge in `--success`
- Add dates to data (see Plan 04)

### Achievements

**Problems:** Mixed with certs in visual style; `onClick + <a>` double-wrap (accessibility anti-pattern); no visual prominence hierarchy (1st place research ≡ cricket runner-up).

**Changes:**
- **Trophy cards**: Top 3 achievements get `--warning` (`#FBBF24`) accent treatment
- **Smart grouping**: Competition wins | Technical milestones | Academic records
- Remove `onClick` div wrapper — use `<a>` directly
- Large number treatment for JEE 96.63% and TS-EAMCET rank (big monospace numerals)

### Experience Timeline (Work.jsx)

**Problems:** Hardcoded `background: rgb(33, 150, 243)` inline style — overwrites design system entirely; `⚡` emoji before every bullet is informal for a Salesforce role; impact metrics buried in prose; no `alt` on icon images.

**Changes:**
- Override timeline styles to match design system:
  ```js
  contentStyle: { background: 'var(--bg-surface)', border: '1px solid var(--border-active)', color: 'var(--text-primary)' }
  iconStyle:    { background: 'var(--bg-elevated)', border: '2px solid var(--accent-primary)' }
  ```
- Lead bullets with the metric: "30% increase in task completion via tracking pixel integration"
- Add role-type badge pill: "Internship" in `--success`, "Leadership" in `--accent-secondary`
- Add `alt` to all icon images
- Consider replacing `react-vertical-timeline-component` with custom CSS timeline (~30 lines, full style control, smaller bundle)

### Projects (Portfolio.jsx) — highest-impact section

**Problems:** 14 projects shown simultaneously with no hierarchy; tech list is a raw pipe-separated string; fixed `height: 30%` on image container; tutorial projects alongside serious ML work; copy-pasted description on Emotion CNN.

**Changes:**
1. Show **top 6 by default** + "Show all" toggle
2. Add **filter bar**: `All | Web | AI/ML | Data` — simple `useState`, meta-proof of interactive UI skill
3. **Bento grid layout**: best project spans 2 columns, secondary take 1, smaller ones form 2×2 sub-grid
   ```css
   .portfolio__item--featured { grid-column: span 2; }
   ```
4. Parse tech strings into individual pills:
   ```jsx
   {pro.technologies.split(' | ').map(t => <span key={t} className="tech-pill">{t}</span>)}
   ```
5. Add "Featured" badge overlay on top 3 project images
6. Fix copy-pasted Emotion CNN description

### Testimonials

**Problems:** `width: 40%` is too narrow; avatars are 4rem (too small); `id="testmonials"` typo; 4 of 6 have empty `role` fields; no LinkedIn credibility link visible.

**Changes:**
- Widen to 65% desktop, 80% tablet
- 3-card-across on desktop (Swiper shows 3 simultaneously, scrolls by 1)
- Truncate to 3 lines with `line-clamp: 3` + "Read more" expand
- Larger avatar: 80px with `--accent-primary` ring border
- Add LinkedIn icon link on each card (data already has the links)
- Fix `id="testmonials"` → `id="testimonials"`

### Contact

**Problems:** `href="karthikeyaburla@gmail.com"` missing `mailto:` (broken); only email shown; no visible labels on inputs; no loading state; EmailJS keys exposed.

**Changes:**
- Fix: `href="mailto:karthikeyaburla@gmail.com"`
- Add LinkedIn + GitHub as additional contact option cards
- Add floating labels to form inputs (CSS-only)
- Add `type="email"` to email input
- Loading state: button → "Sending..." + `disabled` during call
- Move keys to `.env`
- Replace "I do receive your messages" h5 with paragraph copy

### Footer

**Problems:** Solid `#4db5ff` footer creates jarring hard cut; `© ET` — "ET" is a template artifact; random dummyjson.com quote with no relevance; `margin-bottom: 4rem` on copyright adds 64px empty space.

**Changes:**
- `background: var(--bg-surface)` + `border-top: 1px solid var(--border-subtle)`
- Fix copyright: `© 2025 Karthikeya Boorla. All rights reserved.`
- Replace dummyjson quotes with a curated static list of 5–10 tech/personal favorites
- Remove `margin-bottom: 4rem`

---

## 3. Accessibility Fixes

| Issue | Location | Fix |
|-------|---------|-----|
| `alt="me"` | `Intro.jsx` | Use descriptive text |
| Empty `alt=""` on testimonial avatars | `Testimonials.jsx` | Use person's name |
| `href` missing `mailto:` | `Contact.jsx` | `href="mailto:..."` |
| `onClick` on `div` wrapping `<a>` | `Achievements.jsx` | Use `<a>` directly |
| No `<label>` on form inputs | `Contact.jsx` | Add labels (can be visually hidden) |
| `type="text"` on email input | `Contact.jsx` | Change to `type="email"` |
| `outline: 0` removes all focus rings | `index.css` | `*:focus-visible { outline: 2px solid var(--accent-primary); outline-offset: 3px; }` |
| Nav icons have no `aria-label` | `Topbar.jsx` | Add aria-labels |
| Heading hierarchy skips levels | `Work.jsx` and others | Consistent h2 → h3 → h4 |

---

## 4. Animation Strategy (Framer Motion)

**Golden rule: `viewport={{ once: true }}` on every `whileInView`. Never loop.**

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
```

| Element | Animation |
|---------|-----------|
| Hero (name, subtitle, CTAs) | Staggered `fadeUp` on `animate` (not `whileInView`) |
| Section cards | `whileInView` fadeUp, `once: true` |
| Project cards | `whileHover={{ y: -4, scale: 1.01 }}` — subtle lift |
| Skill pills | `staggerChildren: 0.03` on wrapper, each pill scales in |
| Nav active indicator | `<motion.div layoutId="activeNav">` sliding pill |
| Timeline entries | Slide in from left/right on `whileInView` |

**Never:** loop-animate text; auto-scroll testimonials; animate on every scroll event; `scale: 1.05` on cards (clips into neighbors).

**Use `BorderBeam` on:** profile photo (About), ONE featured project card only.  
**Use `NeonGradientCard` on:** ONE top achievement card only (SIH or Research Day 1st).

---

## 5. Dark/Light Mode

**Add it.** 30–40% of recruiters use light mode. `tailwind.config.js` already has `darkMode: ["class"]` — nearly free to implement.

```css
:root { /* dark values — default */ }
:root.light {
  --bg-deep:        #F8F8FF;
  --bg-surface:     #FFFFFF;
  --accent-primary: #5B52E0;  /* slightly darker for light bg contrast */
  --text-primary:   #0A0A1A;
  --text-secondary: #4A4A6A;
}
```

```jsx
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
useEffect(() => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}, [theme]);
```

---

## 6. Mobile Responsiveness Issues

1. **Social icons hidden at 600px** (`display: none`) — reformat to horizontal row below CTA
2. **Timeline** on mobile still shows inline `rgb(33,150,243)` — clashes with everything
3. **14 project cards** stacked on mobile — brutal; implement Show/Hide toggle
4. **Contact grid** stays `30% 58%` until 1024px — cramped on iPad
5. **Testimonials** at `40%` width on iPad → very tall narrow cards
6. **Touch targets** on nav icons too small (< 44px) — WCAG 2.5.5

---

## 7. Inspiration References

| Style | Best for | Key patterns |
|-------|---------|-------------|
| Brittany Chiang | Safe choice, FAANGs | Numbered sections, monospace labels, lots of whitespace |
| Bento Grid (Apple-inspired) | Standing out | Irregular project grid, featured card spans 2 cols |
| Josh W. Comeau | Personality-forward | Embedded live demos, interactive elements inline |
| Rauno Fäber / paco.me | Mature tech companies | Extreme whitespace, typography-only hierarchy |
| Bold Editorial | Startups, design-forward | Animated stat counters, single bold typeface |

**Recommended for this profile:** Brittany Chiang principles (numbered sections, monospace accents, restraint) + Bento Grid for projects + indigo-violet accent. Top 10% with ~2 weekends of focused work.

---

## 8. Quick-Win Priority (max impact per hour)

| # | Task | Time |
|---|------|------|
| 1 | Fix all accessibility bugs (mailto, focus ring, labels, alt text) | 2h |
| 2 | Replace CSS colour variables | 1h |
| 3 | Switch to Inter + Plus Jakarta Sans | 30m |
| 4 | Fix Contact form (mailto, type=email, loading state) | 1h |
| 5 | Cut to 6 featured projects + filter bar | 2h |
| 6 | Remove hardcoded `rgb(33, 150, 243)` from timeline | 1h |
| 7 | Rewrite About Me to one punchy paragraph | 30m |
| 8 | Add `whileInView` + `once: true` animations | 2h |
| 9 | Dark/light toggle | 3h |
| 10 | Bento grid for projects | 3h |

---

## Feedback

> I'm really happy and amazed by the suggestion you gave me these are really good and I'm really happy to proceed this before that I would like to clarify few things we will be creating a minute stories following a scrum board and tracking each story, let's decode the whole plan into small and minded stories as much as possible. We can, and let's track it each one by one first create a branch and start implementing one story by story after completing it asked for the feedback from myself and give me instructions of how to test that feature or the change we Met based on my feedback, proceed further and commit at every step as much as possible, we can.
