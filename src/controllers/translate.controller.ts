import { Request, Response } from "express";
import { translateText } from "../services/translate.service";
import { generateExplanation } from "../services/explanation.service ";
import { AppError } from "../utils/AppError";
import { sendSuccess } from "../utils/sendSuccess";

export const handleTranslation = async (req: Request, res: Response) => {
  const { text, to } = req.body;

  if (!text || !to) {
    throw new AppError(
      "Missing required fields: 'text' and/or 'to' language",
      400
    );
  }

  const translated = await translateText(to, text);

  sendSuccess(res, { translated }, "Translation successful");
};

export const handleTranslateExplanation = async (
  req: Request,
  res: Response
) => {
  const { text, from } = req.body;

  if (!text || !from) {
    throw new AppError(
      "Missing required fields: 'text' and/or 'from' language",
      400
    );
  }

  const explanation = await generateExplanation(from, text);

  sendSuccess(res, { explanation }, "explanation successful");
};
