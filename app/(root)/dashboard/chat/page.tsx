"use client";
import React, { useState } from "react";

export default function ChatComponent() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.response || "No response.");
  };

  return (
    <div className="flex justify-center items-center h-full flex-col p-5">
      <div className="flex w-[80%]">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something..."
          className="border w-full border-gray-300 p-2 bg-white rounded-lg hover:scale-102 duration-300 shadow-sm focus:ring-1 focus:ring-blue-300 focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 bg-blue-500 text-white py-2 px-4 hover:scale-105 duration-300 rounded-lg"
        >
          Send
        </button>
      </div>

      {response && (
        <div className="mt-4 bg-blue-100 text-blue-500 h-full p-5 rounded-lg">
          Response: {response}
        </div>
      )}
    </div>
  );
}
