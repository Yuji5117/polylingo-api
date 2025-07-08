import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import { API_KEY } from "../config";

export const apiKeyAuth = (req: Request, res: Response, next: NextFunction) => {
  const providedKey = req.header("x-api-key");
  if (!providedKey || providedKey !== API_KEY) {
    throw new AppError("Unauthorized access", 401);
  }
  next();
};
