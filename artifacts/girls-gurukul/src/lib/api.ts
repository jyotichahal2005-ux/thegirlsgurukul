/**
 * Base URL for all backend API calls.
 *
 * - Development (Replit): empty string → requests go to "/api/..." via Vite proxy
 * - Production (Vercel):  set VITE_API_URL to your Render backend URL,
 *   e.g. https://girls-gurukul-api.onrender.com
 */
export const API_BASE_URL: string =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ?? "";
