# The Girls Gurukul — School Website

A premium, fully responsive school website for "The Girls Gurukul, Kalayat (Haryana, India)". Frontend-only presentation site with 10 pages, Framer Motion animations, AI-generated images, animated counters, testimonials carousel, lightbox gallery, and a navy blue (#1a2e5a) + gold (#d4a017) + white color palette.

## Run & Operate

- `pnpm --filter @workspace/girls-gurukul run dev` — run the school website (port 5173)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4 + shadcn/ui + wouter routing
- Animations: Framer Motion
- Icons: Lucide React + React Icons (react-icons/si)
- Backend: Express 5 + Drizzle ORM + Groq SDK (AI chatbot) + Nodemailer

## Secrets required

- `GROQ_API_KEY` — required for the AI chatbot (`/api/chat`). Get a free key at console.groq.com and add it as a Replit secret.

## Where things live

- `artifacts/girls-gurukul/` — school website (main artifact)
  - `src/pages/` — Home, About, Gallery, Documents, Contact
  - `src/components/` — Navbar (dropdown), Footer, WhatsAppButton, BackToTop, AnimatedCounter, SectionHeader
  - `public/images/` — AI-generated images (hero, principal, campus, gallery)
  - `src/index.css` — Tailwind v4 + CSS theme variables (primary=navy, secondary=gold)
- `artifacts/api-server/` — Express API server (not used by website)
- `attached_assets/` — source images (copied to public/images/ for Vite serving)

## Architecture decisions

- Frontend-only SPA at previewPath "/" — no backend API calls
- Images stored in `public/images/` (not @assets alias) to stay within Vite root
- Wouter for client-side routing (lightweight alternative to react-router)
- All animations use Framer Motion `whileInView` with `viewport: { once: true }` for performance
- Navy/gold theme defined as HSL CSS variables in index.css and consumed via Tailwind

## Product

5-page school website:
1. **Home** — hero, about snippet, stats, features, principal's message, achievements, gallery preview, testimonials carousel, quick links
2. **About** — history, mission/vision, core values, infrastructure, affiliation, management, full principal message, timings, filterable staff directory
3. **Gallery** — filterable photo grid with lightbox, video gallery, achievements gallery
4. **Documents** — syllabus table, certificates, mandatory disclosures, circulars, TC download, fee structure
5. **Contact** — contact cards, Google Maps placeholder, contact form, department contacts, eligibility table, full admission form, social links

## User preferences

_Populate as you build._

## Gotchas

- Use `restartWorkflow` callback from code_execution (not `restart_workflow` tool) for artifact-managed workflows — the tool's health checker fails even when the app works correctly
- Images must be in `public/images/` (not imported via @assets alias) to be served reliably
- The workflow uses PORT=5173 and BASE_PATH=/ from artifact.toml env section

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
