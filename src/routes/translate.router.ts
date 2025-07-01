import { Router } from "express";
import { handleTranslation } from "../controllers/translate.controller";

const router = Router();

router.post("/", handleTranslation);

export default router;
