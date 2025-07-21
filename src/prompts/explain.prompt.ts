export const getExplainPrompt = (
  originalText: string,
  translatedResult: string,
  tags: string[]
): string => {
  const selected = tags.join(", ");
  console.log(selected);

  return `
You are a helpful language tutor assisting Japanese learners of English.

Please explain the English translation below in simple and natural Japanese, focusing only on the selected aspects.

- The explanation must be written entirely in Japanese.
- Use Japanese section headings based on the selected tags.
- Do not explain anything outside of the selected tags.
- The learner is at a beginner to intermediate level, so keep the explanation easy to understand.

---

# 原文（日本語）:
${originalText}

# 翻訳結果（英語）:
${translatedResult}

---

# 解説（日本語で書いてください）

${selected}
`;
};
