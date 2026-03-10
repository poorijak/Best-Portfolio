"use client";

import { useGSAP } from "@gsap/react";
import gsap from "../../lib/gsap";
import React, { useEffect, useRef, useState } from "react";
import { slideUp, fadeText, textSlideDown } from "./animate";
import Image from "next/image";

// const greetings = ["Hello", "Bonjour", "やあ", "Hallo", "สวัสดี"];

const greetings = ["20", "사십", "LX", "八十", "100"];

const LoadingContent = () => {
  const [isDone, setIsDone] = useState(false);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index >= greetings.length - 1) return;

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1000 : 200,
    );
    return () => clearTimeout(timeout);
  }, [index]);

  console.log(index);

  useGSAP(() => {
    if (textRef.current) {
      fadeText(textRef.current);
    }
  }, [index]);

  useGSAP(() => {
    if (index === greetings.length - 1 && containerRef.current) {
      textSlideDown(textRef.current);

      gsap.delayedCall(0.5, () => {
        slideUp(containerRef.current, () => {
          setIsDone(true);
        });
      });
    }
  }, [index]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className=" w-full h-screen  bg-primary fixed inset-0 z-999 p-5 flex justify-center items-center"
    >
      <div className="size-32 relative aspect-square">
        <Image
          src="/memoji/memoji.png"
          fill
          alt="memoji"
          loading="lazy"
          className="object-contain"
        />
      </div>

      <div
        ref={textRef}
        className="font-saans-collection text-7xl md:text-[200px]  absolute bottom-5 left-5 text-black flex items-center justify-center font-semibold gap-5"
      >
        {greetings[index]}
      </div>
    </div>
  );
};

export default LoadingContent;
