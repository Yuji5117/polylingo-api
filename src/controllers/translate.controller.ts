import { Request, Response } from "express";
import { translateText } from "../services/translate.service";

export const handleTranslation = async (req: Request, res: Response) => {
  const { text, to } = req.body;

  // validate request
  if (!text || !to) {
    throw new Error("Missing required fields: 'text' and/or 'to' language");
  }

  const result = await translateText(to, text);

  res.status(200).json({ translated: result });
};
