// app/api/chat/route.ts
import { NextResponse } from "next/server";
import llm from "@/lib/langchain";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  try {
    const result = await llm.invoke(prompt);
    return NextResponse.json({ response: result.content });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to get response." },
      { status: 500 }
    );
  }
}
