const ChatToFilePage = ({ params }: { params: { id: string } }) => {
  if (!params.id) throw new Error("Params missing");

  const { id } = params;

  return <div>ChatToFilePage {id}</div>;
};
export default ChatToFilePage;
