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
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something..."
        className="border p-2 rounded bg-white"
      />
      <button
        onClick={handleSubmit}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        Send
      </button>

      {response && <p className="mt-4">Response: {response}</p>}
    </div>
  );
}
