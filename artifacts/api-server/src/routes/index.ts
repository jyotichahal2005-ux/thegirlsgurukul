import { Router, type IRouter } from "express";
import healthRouter from "./health";
import chatRouter from "./chat";
import admissionRouter from "./admission";
import contactRouter from "./contact";
import ttsRouter from "./tts";

const router: IRouter = Router();

router.use(healthRouter);
router.use(chatRouter);
router.use(admissionRouter);
router.use(contactRouter);
router.use(ttsRouter);

export default router;
