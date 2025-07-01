import openai from "../libs/openai";
import { AppError } from "../utils/AppError";

export const generateExplanation = async (
  fromLanguage: string,
  text: string
) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant who explains translations in only ${fromLanguage}. Keep the explanation clear and natural.`,
      },
      {
        role: "user",
        content: `Please explain the following sentence in ${fromLanguage}: \n\n"${text}""`,
      },
    ],
  });

  const explanation = response.choices[0].message.content?.replaceAll('"', "");

  if (!explanation) {
    throw new AppError("No explanation returned from OpenAI", 502);
  }

  return explanation;
};
