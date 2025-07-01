import { Router } from "express";
import {
  handleTranslateExplanation,
  handleTranslation,
} from "../controllers/translate.controller";

const router = Router();

router.post("/", handleTranslation);
router.post("/explain", handleTranslateExplanation);

export default router;
