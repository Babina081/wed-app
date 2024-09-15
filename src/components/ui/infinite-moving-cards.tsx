"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    clientName: string;
    companyName: string;
    testimonial: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative   max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-black/10 px-8 py-6 md:w-[450px] h-[50vh] flex flex-col justify-between shadow-lg"
            style={{
              background: "linear-gradient(180deg, #e0b3ff, #d1a3ff)",
            }}
            key={item.clientName}
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={item.image}
                alt={item.clientName}
                className="w-24 h-24 rounded-full border border-black/10 mr-3"
              />
            </div>
            <blockquote className="flex-grow relative">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* <div className="items-center justify-center flex mb-4  ">
                <img
                  src={item.image}
                  alt={item.clientName}
                  className="size-28 rounded-full mr-3 border border-black/10 "
                />
              </div> */}
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-600 font-normal amiko-regular">
                {item.testimonial}
              </span>
            </blockquote>
            <div className="absolute bottom-4 right-4 flex flex-col text-right z-20">
              <span className="text-lg text-black font-bold sintony-bold">
                {item.clientName}
              </span>
              <span className="text-xl text-black font-normal cookie-regular">
                {item.companyName}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
