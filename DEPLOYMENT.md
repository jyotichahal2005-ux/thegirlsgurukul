# Deployment Guide — Girls Gurukul

Frontend → **Vercel** | Backend → **Render**

---

## Repo Structure

```
artifacts/
  girls-gurukul/   ← Frontend (React + Vite)  — deploy to Vercel
  api-server/      ← Backend  (Express)        — deploy to Render
```

Both are in the same GitHub repo (monorepo). Each platform lets you set the **Root Directory** so it only builds that subfolder.

---

## 1. Deploy Backend on Render

### Steps
1. Go to [render.com](https://render.com) → **New → Web Service**
2. Connect your GitHub repo
3. Set **Root Directory**: `artifacts/api-server`
4. Set the following:

| Setting | Value |
|---|---|
| **Runtime** | Node |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `node --enable-source-maps ./dist/index.mjs` |

> **Port**: Leave blank — Render injects `PORT` automatically. The code already uses `process.env.PORT`. ✓

### Environment Variables (add in Render dashboard)

| Variable | Value |
|---|---|
| `FRONTEND_URL` | Your Vercel URL, e.g. `https://girls-gurukul.vercel.app` |
| `GROQ_API_KEY` | Your Groq API key |
| `GMAIL_USER` | Gmail address, e.g. `jyotichahal2005@gmail.com` |
| `GMAIL_APP_PASSWORD` | Gmail App Password *(not your login password)* — generate at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) |
| `SESSION_SECRET` | Any long random string |
| `CARTESIA_API_KEY` | Cartesia key *(optional — only for TTS voice in chatbot)* |

5. Deploy → copy the URL Render gives you, e.g. `https://girls-gurukul-api.onrender.com`

---

## 2. Deploy Frontend on Vercel

### Steps
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repo
3. Set **Root Directory**: `artifacts/girls-gurukul`
4. Set the following:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist/public` |

### Environment Variables (add in Vercel dashboard)

| Variable | Value |
|---|---|
| `VITE_API_URL` | Your Render backend URL, e.g. `https://girls-gurukul-api.onrender.com` |

5. Deploy ✓

---

## 3. After Both Are Deployed

Go back to **Render → girls-gurukul-api → Environment** and update:

```
FRONTEND_URL = https://your-actual-vercel-url.vercel.app
```

This ensures CORS only allows requests from your real Vercel domain.

---

## How API calls work

| Environment | `VITE_API_URL` | How it works |
|---|---|---|
| Replit dev | *(not set)* | Empty string → relative `/api/...` → Vite proxy forwards to `localhost:8080` |
| Vercel prod | `https://girls-gurukul-api.onrender.com` | Full URL → requests go directly to Render |

---

## Quick Checklist

- [ ] Render: Root Directory = `artifacts/api-server`
- [ ] Render: all 4–5 env vars set (especially `FRONTEND_URL` after Vercel deploy)
- [ ] Vercel: Root Directory = `artifacts/girls-gurukul`
- [ ] Vercel: Output Directory = `dist/public`
- [ ] Vercel: `VITE_API_URL` set to Render URL
- [ ] After both deployed: update `FRONTEND_URL` on Render with final Vercel URL
