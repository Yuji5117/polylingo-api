import openai from "../libs/openai";
import { AppError } from "../utils/AppError";

export const translateText = async (language: string, text: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a professional translator specializing in creating natural and conversational translations, using everyday expressions that native speakers actually say.",
      },
      {
        role: "user",
        content: `Please translate the following text into natural, native-level ${language} that sounds fluent and appropriate for everyday use: \n\n${text}`,
      },
    ],
  });

  const translatedText = response.choices[0].message.content?.replaceAll(
    '"',
    ""
  );

  if(!translatedText) {
    throw new AppError("No translated text returned from OpenAI", 502);
  }

  return translatedText;
};
