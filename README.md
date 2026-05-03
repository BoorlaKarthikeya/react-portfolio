# Karthikeya Boorla — Portfolio

Personal portfolio website built with React + Vite. Live at [react-portfolio-boorlakarthikeya.vercel.app](https://react-portfolio-boorlakarthikeya.vercel.app/)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite 5 |
| Language | JavaScript (JSX) + TypeScript (data layer) |
| Styling | CSS custom properties + per-component CSS |
| Animations | Framer Motion |
| UI Components | MagicUI (BorderBeam, CoolMode, ShineBorder) |
| Contact Form | EmailJS |
| CI/CD | GitHub Actions (lint + build + Lighthouse) |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # React components (one folder per section)
│   ├── header/          # Hero section
│   ├── intro/           # About Me
│   ├── experience/      # Skills
│   ├── work/            # Work experience timeline
│   ├── portfolio/       # Projects grid with filter
│   ├── Education/       # Education cards
│   ├── courses/         # Certifications
│   ├── achievements/    # Achievements
│   ├── contact/         # Contact form
│   ├── footer/          # Footer
│   ├── topbar/          # Fixed bottom nav
│   └── shared/          # FadeIn animation wrapper
├── componentsUi/        # MagicUI + shadcn components
├── data/
│   ├── portfolio.ts     # Single source of truth for all content
│   └── images.js        # Centralised image asset map
├── hooks/
│   ├── useScrollSpy.js  # IntersectionObserver-based active nav
│   └── useContactForm.js # EmailJS async form state
└── types/
    └── index.ts         # TypeScript interfaces for all data shapes
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server at localhost:5173 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | ESLint across `src/` |
| `npm run format` | Prettier format `src/` |
| `npm run typecheck` | TypeScript type check (no emit) |

---

## Updating Content

All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts)

| Export | What it controls |
|--------|-----------------|
| `profile` | Name, bio, email, social links |
| `experience` | Work experience timeline |
| `education` | Education cards |
| `certifications` | Courses & certifications |
| `achievements` | Achievements cards |
| `projects` | Projects grid (category, featured flag, tech tags) |
| `skills` | Skills pill tags by category |

To add a new project, add an entry to the `projects` array with:
```ts
{
  id: number,
  title: string,
  img: importedImage,
  description: string,
  technologies: string[],
  category: 'ai-ml' | 'web' | 'data',
  featured: boolean,   // shows in default 6-card view
  link: string,        // live demo URL (empty string if none)
  github: string,
}
```

---

## Deployment (Vercel)

Vercel auto-detects Vite. Ensure these settings in your Vercel project:

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

---

## CI

GitHub Actions runs on every push to `master` / `portfolio-upgrade` and on PRs to `master`:

1. **Lint** — ESLint across `src/`
2. **Build** — Vite production build
3. **Lighthouse** — perf ≥ 90, a11y ≥ 95, SEO ≥ 95 (warns/errors via budget file)

---

## License

MIT
