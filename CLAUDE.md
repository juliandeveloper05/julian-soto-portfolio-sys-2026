# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server on port 3000 (0.0.0.0)
npm run build     # Production build via Vite
npm run preview   # Preview production build
npm run lint      # Type-check with tsc --noEmit (no ESLint configured)
npm run clean     # Remove dist/
```

## Architecture

Single-page portfolio with a **cyber-hacker aesthetic**. Built with React 19 + Vite 6 + Tailwind CSS v4.

**Page structure** — `App.tsx` composes all sections in order:
`Navbar → Hero → Skills → Projects → About → Services → Timeline → Contact → Footer`

**Component layout:**
- `src/components/layout/` — `Navbar.tsx`, `Footer.tsx` (fixed/persistent UI)
- `src/components/sections/` — one file per page section, each with its own `id` for anchor navigation

**Styling system** — Tailwind v4 configured entirely in `src/index.css` via `@theme`:
- `--color-background` `#0b0f10`, `--color-surface` `#151a1c`
- `--color-primary` `#9cff93` (neon green), `--color-secondary` `#00e3fd` (cyan), `--color-tertiary` `#e668ff` (purple)
- `--font-headline`: Space Grotesk, `--font-body`: Manrope
- Custom utilities: `.scanline-texture`, `.glitch-hover`, `.text-glow-primary`, `.text-glow-secondary`

**Animations** — uses `motion/react` (Framer Motion). Entrance animations use `initial/animate` for above-fold elements and `whileInView` + `viewport={{ once: true }}` for sections.

**Static assets** — `public/profile.png` (profile photo), `public/Julian_Soto_CV.pdf` (downloadable CV).

**Environment** — `GEMINI_API_KEY` is exposed to the client via `vite.config.ts` `define`. Copy `.env.example` to `.env` and fill in the key for local development.

**No backend** — Express and dotenv are listed as dependencies but there is no server file in the repo. The contact form has no submission handler yet.
