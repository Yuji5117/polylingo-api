import { z } from "zod";

export const translateSchema = z.object({
  text: z.string().min(1, "Text is required"),
  to: z.string().min(1, "Target language is required"),
});
