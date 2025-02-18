"use client";
import { CircleArrowDown, RocketIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
  });

  return (
    <div className="flex flex-col gap-4 mx-auto max-w-7xl">
      {/* Loading Status Here */}
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
            <p>Drag 'n' drop some files here, or click to select files</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
