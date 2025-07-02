import { Router } from "express";
import {
  handleTranslateExplanation,
  handleTranslation,
} from "../controllers/translate.controller";
import { validate } from "../middleware/validate";
import { translateSchema } from "../validations/translate.schema";

const router = Router();

router.post("/", validate(translateSchema), handleTranslation);
router.post("/explain", handleTranslateExplanation);

export default router;
