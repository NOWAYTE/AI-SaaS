"use client"
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import {
    CheckCircleIcon,
    CircleArrowDown,
    HammerIcon,
    RocketIcon,
    SaveIcon,
} from "lucide-react"

function FireUploader() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop })
    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
            <div {...getRootProps()}
                className={`p-10 border-2  border-dashed mt-10 w-[90%] text-[#021526] border-[#FB773C]
            rounded-lg h-96 flex items-center justify-center ${isFocused || isDragAccept ? "bg-[#FB773C]/60" : "bg-[#FB773C]/30"

                    }`}>

                <div className=' flex flex-col justify-center items-center'>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <>
                                <RocketIcon className='h-20 w-20 animate-ping' />
                                <p>Drop the files here ...</p>
                            </>
                            :
                            <>
                                <CircleArrowDown className='h-20 w-20 animate-bounce' />
                                <p>Drag n drop some files here, or click to select files</p>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default FireUploader