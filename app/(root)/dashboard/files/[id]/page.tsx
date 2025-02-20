// app/(root)/dashboard/files/[id]/page.tsx

interface ChatToFilePageProps {
  params: { id: string };
}

const ChatToFilePage = async ({ params }: ChatToFilePageProps) => {
  if (!params?.id) throw new Error("Params missing");

  const { id } = params;

  return <div>ChatToFilePage ID: {id}</div>;
};

export default ChatToFilePage;
