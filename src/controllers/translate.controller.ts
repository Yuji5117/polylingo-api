import { Request, Response } from "express";
import { translateText } from "../services/translate.service";
import { generateExplanation } from "../services/explanation.service ";
import { AppError } from "../utils/AppError";
import { sendSuccess } from "../utils/sendSuccess";

export const handleTranslation = async (req: Request, res: Response) => {
  const { text, to } = req.body;

  const translated = await translateText(to, text);

  sendSuccess(res, { translated }, "Translation successful");
};

export const handleTranslateExplanation = async (
  req: Request,
  res: Response
) => {
  const { originalText, translatedResult, tags } = req.body;

  if (!originalText || !translatedResult || !tags) {
    throw new AppError(
      "Missing required fields: 'originalText', 'translatedResult' and/or 'tags'",
      400
    );
  }

  const explanation = await generateExplanation(
    originalText,
    translatedResult,
    tags
  );

  sendSuccess(res, { explanation }, "explanation successful");
};
