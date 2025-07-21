import openai from "../libs/openai";
import { getExplainPrompt } from "../prompts";
import { AppError } from "../utils/AppError";

export const generateExplanation = async (
  originalText: string,
  translatedResult: string,
  tags: string[]
) => {
  const prompt = getExplainPrompt(originalText, translatedResult, tags);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant for Japanese learners of English. Always respond in clear and natural Japanese.`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const explanation = response.choices[0].message.content?.replaceAll('"', "");

  if (!explanation) {
    throw new AppError("No explanation returned from OpenAI", 502);
  }

  return explanation;
};
