import { Request, Response } from "express";
import { translateText } from "../services/translate.service";
import { generateExplanation } from "../services/explanation.service ";
import { AppError } from "../utils/AppError";

export const handleTranslation = async (req: Request, res: Response) => {
  const { text, to } = req.body;

  if (!text || !to) {
    throw new AppError(
      "Missing required fields: 'text' and/or 'to' language",
      400
    );
  }

  const result = await translateText(to, text);

  res.status(200).json({ translated: result });
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

  const result = await generateExplanation(from, text);

  res.status(200).json({ explanation: result });
};
