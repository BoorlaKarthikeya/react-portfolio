# Plan 01 — Architecture Improvements

**Agent:** Senior Frontend Engineer  
**Status:** Awaiting feedback  
**Estimated total effort:** 2–3 weeks if done fully; critical items in 2–3 days

---

## Current Architecture Problems

| Problem | File(s) | Severity |
|---------|---------|----------|
| EmailJS private key hardcoded in source | `src/components/contact/Contact.jsx:16` | 🔴 Security |
| All data co-located inside UI components | Every component | 🔴 Critical |
| Zero TypeScript | Entire codebase | 🟠 High |
| No routing (raw `href="#anchor"` links) | `App.jsx` | 🟠 High |
| No custom hooks | All components | 🟠 High |
| CRA (`react-scripts`) — unmaintained | `package.json` | 🟠 High |
| Two competing style systems (BEM CSS + Tailwind) | All components | 🟠 High |
| `console.log` in production paths | `Footer.jsx`, `Contact.jsx` | 🟡 Medium |
| `index.html` has default CRA description | `public/index.html` | 🟡 Medium |
| No `loading="lazy"` on 63 images | Every component | 🟡 Medium |
| `"use client"` in MagicUI (Next.js directive, does nothing in CRA) | `neon-gradient-card.jsx` | 🟡 Low |
| `id="testmonials"` typo | `Testimonials.jsx` | 🟡 Low |
| Naming inconsistencies (`education` lowercase export, `Achievements` capital id) | Multiple | 🟡 Low |
| Contact form shows success before async resolves | `Contact.jsx` | 🟡 Medium |

---

## Roadmap

### (a) Quick Wins — < 1 day each

#### 1. Move EmailJS credentials to `.env`
```
# .env.local (add to .gitignore)
REACT_APP_EMAILJS_SERVICE_ID=service_ac9dhm5
REACT_APP_EMAILJS_TEMPLATE_ID=template_zuzrjwi
REACT_APP_EMAILJS_PUBLIC_KEY=ahRzRP_DbaUrC5ZIS
```
Reference via `process.env.REACT_APP_EMAILJS_SERVICE_ID` in `Contact.jsx`.

#### 2. Fix `public/index.html` meta/OG tags
Replace "Web site created using create-react-app" with proper SEO meta, OG tags, and Twitter card.

#### 3. Delete all `console.log` and commented-out JSX
- `Footer.jsx` line 16
- `Contact.jsx` lines 21, 24
- Large commented blocks in `Work.jsx`, `Intro.jsx`, `Education.jsx`, `Topbar.jsx`

#### 4. Fix naming inconsistencies
- `education.jsx` → export `Education` (PascalCase)
- `courses.jsx` → export `Courses` (PascalCase)
- `id="testmonials"` → `id="testimonials"` (and update footer link)
- `id="Achievements"` → `id="achievements"`
- "Bootsrap" → "Bootstrap" in `Experience.jsx`

#### 5. Add `loading="lazy"` + proper `alt` text to every image
Free Lighthouse + accessibility score improvement.

#### 6. Fix Contact form async state
```js
// Current (broken): shows success before promise resolves
setMessage(true);
emailjs.sendForm(...).then(...)

// Fixed:
const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');
  try {
    await emailjs.sendForm(...);
    setStatus('success');
    e.target.reset();
  } catch {
    setStatus('error');
  }
};
```

---

### (b) Medium Effort — 1–3 days each

#### 7. Extract all data to `src/data/`
See [Plan 04 — Data Consolidation](04-data-consolidation.md) for the full implementation.
One file per domain: `projects.js`, `experience.js`, `education.js`, `skills.js`, `certifications.js`, `achievements.js`, `testimonials.js`.

#### 8. Migrate CRA → Vite
- ~10x faster HMR
- Native code splitting
- Actively maintained
- Env vars change from `REACT_APP_` prefix to `VITE_` prefix

#### 9. Add TypeScript (start with data layer)
```ts
// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'ml' | 'web' | 'fullstack' | 'data';
  githubUrl: string;
  liveUrl: string | null;
  imageKey: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organisation: string;
  startDate: string;
  endDate: string | 'present';
  logoKey: string;
  highlights: string[];
}
```

#### 10. Create custom hooks
```ts
// src/hooks/useContactForm.ts
export function useContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = useCallback(async (e: React.FormEvent) => { ... }, []);
  return { status, formRef, handleSubmit };
}

// src/hooks/useFetch.ts — with AbortController (prevents memory leaks on unmount)
export function useFetch<T>(url: string) { ... }

// src/hooks/useScrollSpy.ts — IntersectionObserver-based active nav
export function useScrollSpy(sectionIds: string[], offset = 0) { ... }
```

#### 11. Unify styling: Tailwind only, delete per-component CSS files
Pick Tailwind as the one system. Delete all 12 per-component `.css` files. Keep `index.css` only for CSS custom properties and global reset. This makes the `tailwind.config.js` design tokens actually useful.

#### 12. Use Framer Motion properly
Already installed but barely used. Add `whileInView` with `viewport={{ once: true }}` to section cards.
```tsx
<motion.article
  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
```
`once: true` is critical — without it animations replay on every scroll in/out.

---

### (c) High-Impact Architectural Upgrades — 1 week+

#### 13. Migrate to Next.js 14 (App Router)
- Server Components → zero JS shipped to client for static content
- Automatic OG image generation via `next/og`
- `/projects/[slug]` deep-linkable project detail pages
- SSG → dramatically better Lighthouse scores
- Prerequisite: data layer refactor (Plan 04) must be done first

#### 14. Project detail pages (`/projects/:slug`)
Each project gets its own URL with a full case-study layout. Requires React Router v6 (SPA) or Next.js dynamic routes.

#### 15. Filter projects by category with URL-persisted state
```tsx
const [activeFilter, setActiveFilter] = useSearchParam('category', 'all');
// URL: /?category=ml — shareable, bookmarkable
```
Demonstrates senior-level URL-as-state-management.

---

## Recommended Folder Structure

```
src/
├── components/
│   ├── ui/           # Button, Card, Badge, SectionHeading (primitives)
│   ├── layout/       # Navbar, Footer, PageLayout
│   └── sections/     # Hero/, About/, Skills/, Experience/, Projects/, ...
├── data/             # all content, zero JSX
│   ├── projects.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── skills.ts
│   ├── achievements.ts
│   ├── certifications.ts
│   ├── testimonials.ts
│   └── navigation.ts
├── hooks/            # useContactForm, useFetch, useScrollSpy, useReducedMotion
├── types/            # TypeScript interfaces
├── lib/              # utils.ts, constants.ts, seo.ts
└── styles/
    └── globals.css   # CSS custom properties + Tailwind directives only
```

---

## Technology Additions

| Tool | Action | Why |
|------|--------|-----|
| Vite | Replace `react-scripts` | Maintained, fast HMR, native code splitting |
| TypeScript | Add after Vite migration | Table stakes at any mid/large company |
| React Router v6 | Add for project detail pages | Routing + URL state management |
| Framer Motion | Already installed — actually use it | Paying bundle cost without the benefit |
| TanStack Query | Replace raw `useFetch` in Footer | Industry standard for server state |
| Zod | Contact form validation | Runtime validation + data contracts |
| Vitest + RTL | Testing | Vite-native; replace CRA's Jest setup |
| Playwright | E2E for contact form | One E2E test > zero |
| ESLint + Prettier + lint-staged | Code quality | Enforced on commit |
| GitHub Actions CI | `.github/workflows/ci.yml` | Automated quality gates |
| Lighthouse CI | Add to CI | Performance regression prevention |
| sharp/Squoosh | Convert JPEGs to WebP | ~40–60% smaller image payloads |

---

## Testing Strategy (minimal but credible — ~15 tests)

```ts
// 1. Data unit tests — validate shape and URLs
projects.forEach(p => {
  expect(p.id).toBeTruthy();
  expect(() => new URL(p.githubUrl)).not.toThrow();
});

// 2. Component tests — Contact form states
it('shows loading state while form submits');
it('shows success after successful send');
it('shows error on failure');

// 3. Hook tests — useContactForm state transitions
it('transitions idle → loading → success');

// 4. E2E — one Playwright test for contact form submit
```

A **Lighthouse CI badge** on the README (performance ≥ 90, accessibility ≥ 95, SEO ≥ 95) is a concrete, verifiable signal to hiring managers.

---

## Performance & SEO Checklist

- [ ] Fix `index.html` meta/OG/Twitter tags
- [ ] Add `loading="lazy"` + explicit `width`/`height` on all images (prevents CLS)
- [ ] Convert all JPEG/PNG assets to WebP (`npx @squoosh/cli --webp '{}' src/assets/*.jpeg`)
- [ ] Add `<link rel="preconnect">` for Google Fonts
- [ ] Lazy-load all sections below the fold with `React.lazy` + `Suspense`
- [ ] Add `useScrollSpy` hook so nav active state updates on manual scroll
- [ ] Add Lighthouse CI to GitHub Actions with score budgets

---

## Ordered Priority (biggest ROI first)

1. Fix exposed EmailJS key (security, non-negotiable)
2. Fix `index.html` meta tags (recruiter link unfurl)
3. Extract all data to `/src/data/` (most visible to a code reviewer)
4. Remove `console.log` and commented dead code
5. Fix `alt` attributes, naming inconsistencies, "testmonials" typo
6. Add TypeScript to data layer
7. Migrate to Vite
8. Add `loading="lazy"` + image dimensions
9. Add `useContactForm` hook with proper async state
10. Add 10–15 targeted tests

---

## Feedback

> leave the email js key security to me I will fix it for everything else we can proceed before doing everything at once first lets create a sprint board and make minute stories as small as possible and tackle them each one by one and after completing every story ask me to test it and give me instructions of how to test it and then proceed to next based on my feedback and all this has to done in new branch and we need to commit at each story or each step whenever we can 
