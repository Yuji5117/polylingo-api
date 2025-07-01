import { Request, Response } from "express";
import { translateText } from "../services/translate.service";
import { generateExplanation } from "../services/explanation.service ";

export const handleTranslation = async (req: Request, res: Response) => {
  const { text, to } = req.body;

  if (!text || !to) {
    throw new Error("Missing required fields: 'text' and/or 'to' language");
  }

  const result = await translateText(to, text);

  res.status(200).json({ translated: result });
};

export const handleTranslateExplanation = async (req: Request, res: Response) => {
  const { text, from } = req.body;

  if (!text || !from) {
    throw new Error("Missing required fields: 'text' and/or 'from' language");
  }

  const result = await generateExplanation(from, text);

  res.status(200).json({ explanation: result });
};
