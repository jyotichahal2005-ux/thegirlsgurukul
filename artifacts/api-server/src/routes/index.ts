import { Router, type IRouter } from "express";
import healthRouter from "./health";
import chatRouter from "./chat";
import admissionRouter from "./admission";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(chatRouter);
router.use(admissionRouter);
router.use(contactRouter);

export default router;
