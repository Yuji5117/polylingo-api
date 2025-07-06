import { z } from "zod";

export const translateSchema = z.object({
  text: z.string().min(1, "Text is required"),
  to: z.string().min(1, "Target language is required"),
});

export const translateExplanationSchema = z.object({
  text: z
    .string()
    .min(1, "Please translate something before requesting explanation."),
  from: z.string().min(1, "Target language is required"),
});
