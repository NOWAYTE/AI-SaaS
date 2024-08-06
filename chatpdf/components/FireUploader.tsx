"use client";

import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";

import useUpload, { StatusText } from "@/hooks/useUpload";
import { useRouter } from "next/navigation";

function FireUploader() {
  const { progress, status, fileId, handleUpload } = useUpload();
  const router = useRouter();

  useEffect(() => {
    console.log("File id changed:", fileId);
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        await handleUpload(file);
      }
    },
    [handleUpload]
  );

  const statusIcons: { [key in StatusText]?: JSX.Element } = {
    [StatusText.UPLOADING]: <RocketIcon className="h-20 w-20 text-[#FB773C]" />,
    [StatusText.UPLOADED]: <CheckCircleIcon className="h-20 w-20 text-[#FB773C]" />,
    [StatusText.SAVING]: <SaveIcon className="h-20 w-20 text-[#FB773C]" />,
    [StatusText.GENERATING]: <HammerIcon className="h-20 w-20 text-[#FB773C] animate-bounce" />,
  };

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  const uploadInProgress = progress != null && progress >= 0 && progress <= 100;

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {uploadInProgress ? (
        <div className="mt-32 flex flex-col justify-center items-center gap-5">
          <div
            className={`radial-progress bg-[#FB773C] text-black border-neutral-700 border-4 ${
              progress === 100 ? "hidden" : ""
            }`}
          >
            {progress}%
          </div>

          {
          // @ts-ignore 
          status && statusIcons[status]
          }

          {/* @ts-ignore */}
          <p className="text-[#FB773C] animate-pulse">{status}</p>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`p-10 border-2 border-dashed mt-10 w-[90%] text-[#021526] border-[#FB773C]
                    rounded-lg h-96 flex items-center justify-center ${
                      isFocused || isDragAccept
                        ? "bg-[#FB773C]/60"
                        : "bg-[#FB773C]/30"
                    }`}
        >
          <div className="flex flex-col justify-center items-center">
            <input {...getInputProps()} />
            {isDragActive ? (
              <>
                <RocketIcon className="h-20 w-20 animate-ping" />
                <p>Drop the files here ...</p>
              </>
            ) : (
              <>
                <CircleArrowDown className="h-20 w-20 animate-bounce" />
                <p>Drag n drop some files here, or click to select files</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FireUploader;
