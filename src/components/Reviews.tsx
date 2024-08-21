/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef, HTMLAttributes } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./Phone";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];
function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel,
}: {
  reviews: string[];
  className: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [collumnHeight, setCollumnHeight] = useState(0);
  const duration = `${collumnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;
    const resizeObserver = new window.ResizeObserver(() => {
      setCollumnHeight(columnRef.current?.offsetHeight ?? 0);
    });
    resizeObserver.observe(columnRef.current);
    return () => resizeObserver.disconnect();
  }, []);
  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, index) => (
        <Review
          key={index}
          imgSrc={imgSrc}
          className={reviewClassName?.(index % reviews.length)}
        />
      ))}
    </div>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}
interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  className?: string;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {
  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} dark={false} />
    </div>
  );
}

const POSSIBLE_ANIMATION_DELAY = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
const animationDelay =
  POSSIBLE_ANIMATION_DELAY[
    Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAY.length)
  ];

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);
  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            msPerPixel={10}
            className=""
            reviewClassName={(index) =>
              cn({
                "md:hidden": index >= column1.length + column3[0].length,
                "lg:hidden": index >= column1.length,
              })
            }
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            msPerPixel={15}
            className="hidden md:block"
            reviewClassName={(index) =>
              index >= column2.length ? "lg:hidden" : ""
            }
          />
          <ReviewColumn
            reviews={column3.flat()}
            msPerPixel={10}
            className="hidden md:block"
          />
        </>
      ) : null}
    </div>
  );
}

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt="background"
        className="absolute inset-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviews;
