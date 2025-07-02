import { Router } from "express";
import {
  handleTranslateExplanation,
  handleTranslation,
} from "../controllers/translate.controller";
import { validate } from "../middleware/validate";
import {
  translateExplanationSchema,
  translateSchema,
} from "../validations/translate.schema";

const router = Router();

router.post("/", validate(translateSchema), handleTranslation);
router.post(
  "/explain",
  validate(translateExplanationSchema),
  handleTranslateExplanation
);

export default router;
