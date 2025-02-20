"use client";
import useUpload, { StatusText } from "@/hooks/UseUpload";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  Rocket,
  RocketIcon,
  SaveIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { JSX, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const { progress, fileId, status, handleUpload } = useUpload();

  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    console.log(acceptedFiles);

    const file = acceptedFiles[0];

    if (file) {
      await handleUpload(file);
    } else {
      //toast... if we are pro/free/pasaste del limite/
    }
  }, []);

  const statusIcons: {
    [key in StatusText]: JSX.Element;
  } = {
    [StatusText.UPLOADING]: <RocketIcon className="h-20 w-20 text-blue-600" />,
    [StatusText.UPLOADED]: (
      <CheckCircleIcon className="h-20 w-20 text-blue-600" />
    ),
    [StatusText.SAVING]: <SaveIcon className="h-20 w-20 text-blue-600" />,
    [StatusText.GENERATING]: <HammerIcon className="h-20 w-20 text-blue-600" />,
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "application/pdf": [] },
  });
  const uploadInProgress =
    progress !== null && progress <= 100 && progress >= 0;

  return (
    <div
      className="flex flex-col gap-4 mx-auto max-w-7x items-center
    "
    >
      {uploadInProgress ? (
        <div className="mt-32 flex flex-col justify-center items-center gap-5">
          <div
            className={`${
              progress === 100 && "hidden"
            } radial-progress bg-blue-300 text-white broder-blue-600 border-4`}
            role="progressbar"
            style={{
              //@ts-ignore
              "--value": `${progress} `,
              "--size": "12rem",
              "--thickness": "1.3rem",
            }}
          >
            {progress} %
          </div>

          {
            //@ts-ignore
            statusIcons[status!]
          }
          <p>{String(status)}</p>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`flex flex-col justify-center items-center p-10 mx-auto border-blue-600 text-blue-600 border-2 w-[90%] border-dashed mt-10 rounded-lg h-96 ${
            isFocused || isDragAccept
              ? "bg-blue-100"
              : isDragReject
              ? "bg-red-100"
              : ""
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>Drag and drop some files here, or click to select files</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
