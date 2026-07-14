# Girls Gurukul School Website

A full-stack school website for **The Girls Gurukul** built with React + Vite (frontend) and Express (backend).

## Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Radix UI, Framer Motion, Wouter (routing)
- **Backend**: Express 5, Groq SDK (AI chatbot), Nodemailer (contact emails)
- **Monorepo**: pnpm workspace

## Pages

Home, About, Admissions, Academics, Faculty, Gallery, Documents, Fee Structure, News & Events, Contact

## Running the app

Two workflows must be running:

| Workflow | Command | Port |
|---|---|---|
| `Girls Gurukul Website` | `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/girls-gurukul run dev` | 5173 |
| `API Server` | `pnpm --filter @workspace/api-server run dev` | 8080 |

## Environment variables

| Variable | Description |
|---|---|
| `PORT` | Set to `8080` for API server (in `.replit`) |
| `GROQ_API_KEY` | Groq API key for the AI chatbot |
| `GMAIL_USER` | Gmail address used for contact form emails |
| `SESSION_SECRET` | Secret for session management |

## Project structure

```
artifacts/
  girls-gurukul/   # React + Vite frontend
  api-server/      # Express backend API
lib/
  db/              # Database (Drizzle ORM)
  api-spec/        # OpenAPI spec + codegen
  api-zod/         # Zod schemas
  api-client-react/ # React Query hooks
```

## User preferences

- Keep existing project structure and stack
