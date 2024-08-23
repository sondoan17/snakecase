"use client";
import React, { useState, useTransition } from "react";
import { cn } from "@/lib/utils";

import Dropzone, { FileRejection } from "react-dropzone";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Page = () => {
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);

    const isUploading = false;

    const [isPending, startTransition] = useTransition();
    const onDropRejected = () => { };
    const onDropAccepted = () => { };

    return (
        <div
            className={cn(
                "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
                { "ring-blue-900/25 bg-blue-900/10": isDragOver }
            )}
        >
            <div className="relative flex flex-1 flex-col items-center justify-center w-full">
                <Dropzone
                    onDropRejected={onDropRejected}
                    onDropAccepted={onDropAccepted}
                    accept={{ "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div
                            {...getRootProps()}
                            className="flex flex-col flex-1 items-center justify-center w-full h-full"
                        >
                            <input {...getInputProps()} />
                            {isDragOver ? (
                                <MousePointerSquareDashed className="w-6 h-6 text-zinc-500 mb-2" />
                            ) : isUploading || isPending ? (
                                <Loader2 className="animate-spin w-6 h-6 text-zinc-500 mb-2" />
                            ) : (
                                <Image className="w-6 h-6 text-zinc-500 mb-2" />
                            )}
                            <div className="flex flex-col justify-center text-sm text-zinc-700">
                                {isUploading ? (
                                    <div className="flex flex-col items-center">
                                        <p>Uploading...</p>
                                        <Progress value={uploadProgress} className="mt-2 w-40 h-2 bg-gray-300" />
                                    </div>
                                ) : isPending ? (
                                    <div></div>
                                ) : isDragOver ? (
                                    <span></span>
                                ) : (
                                    <span></span>
                                )}
                            </div>
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    );
};

export default Page;
