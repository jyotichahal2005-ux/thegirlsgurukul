import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// CORS — in production, restrict to the Vercel frontend domain.
// Set FRONTEND_URL env var on Render, e.g. https://girls-gurukul.vercel.app
// Leave it unset in development to allow all origins (Vite dev server).
const frontendUrl = process.env["FRONTEND_URL"];
app.use(
  cors({
    origin: frontendUrl
      ? [frontendUrl]
      : true, // allow all in development
    credentials: true,
  }),
);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
