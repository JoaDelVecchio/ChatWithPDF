// app/(root)/dashboard/files/[id]/page.tsx

interface ChatToFilePageProps {
  params: Promise<{ id: string }>;
}

const ChatToFilePage = async ({ params }: ChatToFilePageProps) => {
  const { id } = await params;

  if (!id) {
    throw new Error("ID is missing");
  }

  return <div>ChatToFilePage ID: {id}</div>;
};

export default ChatToFilePage;
