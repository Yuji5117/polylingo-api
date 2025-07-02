import { formatZodErrors } from "./../utils/validation";
import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import { AppError } from "../utils/AppError";

export const validate =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = formatZodErrors(result.error.errors);

      throw new AppError("Validation failed!", 400, errors);
    }
    req.body = result.data;
    next();
  };
