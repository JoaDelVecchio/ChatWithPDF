"use server";

import { revalidatePath } from "next/cache";

const generateEmbeddings = async (docId: string) => {
  //PDF into a string of numbers so pinecone understands it
  //   await generateEmbeddingsInPineconeVectorStore(docId);

  revalidatePath("/dashboard");

  return { completed: true };
};
export default generateEmbeddings;
