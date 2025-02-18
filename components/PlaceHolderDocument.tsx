"use client";
import { CirclePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PlaceHolderDocument = () => {
  const router = useRouter();

  const handleClick = () => {
    //Check user Tier and if he/she is over the file limit, push to upgrade page
    router.push("/dashboard/upload");
  };
  return (
    <div>
      <Button
        onClick={handleClick}
        className="flex flex-col justify-center items-center w-64 h-80 text-gray-400 rounded-xl gap-2 bg-gray-200 transition hover:scale-[102%] hover:bg-blue-600 duration-300"
      >
        <CirclePlus className="!w-16 !h-16" />
        <p>Add a document</p>
      </Button>
    </div>
  );
};

export default PlaceHolderDocument;
