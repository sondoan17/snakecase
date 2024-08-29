/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phone img"
      />

      <div className="absolute -z-10 inset-0 min-w-full min-h-full">
        <Image
          src={imgSrc}
          alt="overlaying phone img"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Phone;
