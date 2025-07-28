import { Groq } from "groq-sdk";
import type { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions.mjs";

const groqCaller = async (apiKey: string, messages: ChatCompletionMessageParam[]) => {
  const groq = new Groq({
    apiKey: apiKey,
  });
  const chatCompletion = await groq.chat.completions.create({
    messages: messages,
    model: "llama-3.1-8b-instant",
    temperature: 0.9,
    max_completion_tokens: 4096,
    top_p: 1,
    stream: true,
    stop: null,
  });

  for await (const chunk of chatCompletion) {
    console.log(chunk.choices[0]?.delta?.content);
    return { content: chunk.choices[0]?.delta?.content };
  }
};

export default groqCaller
