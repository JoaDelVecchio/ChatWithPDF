// lib/langchain.ts
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("Google api key missing");
}

// Create Gemini chat instance
const llm = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY!,
  model: "gemini-pro", // Choose the Gemini model you prefer
  temperature: 0.7,
});

export default llm;
