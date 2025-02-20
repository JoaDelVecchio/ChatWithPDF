"use client";

import { useState } from "react";
import { db } from "@/database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";

export enum StatusText {
  UPLOADING = "Uploading file...",
  UPLOADED = "File uploaded successfully",
  SAVING = "Saving file to database...",
  GENERATING = "Generating AI Embeddings, this will only take a few seconds...",
}

export type Status = StatusText[keyof StatusText];

function useUpload() {
  const [progress, setProgress] = useState<number | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const { user } = useUser();

  const handleUpload = async (file: File) => {
    if (!file) return alert("Please select a file.");
    if (!user) return alert("User not authenticated.");

    setStatus(StatusText.UPLOADING);
    setProgress(0);

    try {
      const fileId = uuidv4();

      // 🎨 Simulated progress
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);
        if (currentProgress >= 90) clearInterval(interval);
      }, 300);

      // 🔥 Upload file via API route
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", user.id);
      formData.append("fileId", fileId);

      const res = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      });

      clearInterval(interval);
      setProgress(100);

      if (!res.ok) throw new Error("Upload failed");

      const { url } = await res.json();

      setStatus(StatusText.SAVING);

      // 📄 Save metadata to Firestore
      await addDoc(collection(db, "uploads"), {
        id: fileId,
        userId: user.id,
        name: file.name,
        size: file.size,
        type: file.type,
        downloadUrl: url,
        createdAt: new Date(),
      });

      setFileId(fileId);
      setStatus(StatusText.UPLOADED);
    } catch (error) {
      console.error("Upload failed:", (error as Error).message);
      setStatus((error as Error).message);
      setProgress(null);
    }
  };

  return { progress, fileId, status, handleUpload };
}

export default useUpload;
