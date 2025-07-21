import { z } from "zod";

export const translateSchema = z.object({
  text: z.string().min(1, "Text is required"),
  to: z.string().min(1, "Target language is required"),
});

export const translateExplanationSchema = z.object({
  originalText: z.string().min(1, "Original text is required."),
  translatedResult: z.string().min(1, "Translated text is required."),
  tags: z
    .array(z.string())
    .min(1, "Please select at least one explanation tag."),
});
