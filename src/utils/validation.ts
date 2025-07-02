import { ZodIssue } from "zod";

export const formatZodErrors = (errors: ZodIssue[]): Record<string, string> => {
  return Object.fromEntries(
    errors.map((err) => [err.path.join("."), err.message])
  );
};
