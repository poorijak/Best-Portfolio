"use client";

import { useGSAP } from "@gsap/react";
import gsap from "../../../lib/gsap";
import React, { useEffect, useRef, useState } from "react";
import { fadeText, textSlideDown, staggeredSlideUp, fadeOut } from "./anim/animate";

// const greetings = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]
const greetings = [
  "00",
  "十", // 10 - ญี่ปุ่น (Jū: เลขสิบที่เป็นเส้นตัดกัน เท่มาก)
  "twenty", // 20 - ไทย (ความโค้งมนตัดกับเส้นตรงของเลข 10)
  "卅", // 30 - โรมัน
  "사십", // 40 - เกาหลี
  "50", // 50 - Standard
  "LX", // 60 - โรมัน
  "๗๐", // 70 - ไทย
  "八十", // 80 - จีน (Hachi-ju)
  "XC", // 90 - โรมัน
  "100", // 100 - Finish
];

const LoadingContent = () => {
  const [isDone, setIsDone] = useState(false);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const memojiRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      fadeOut(memojiRef.current);

      gsap.delayedCall(1.3, () => {
        staggeredSlideUp(columnsRef.current, () => {
          setIsDone(true);
        });
      });
    }
  }, [index]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-999 pointer-events-none"
    >
      <div className="absolute inset-0 flex pointer-events-auto">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              columnsRef.current[i] = el;
            }}
            className="h-full flex-1 bg-primary"
          />
        ))}
      </div>

      <div className="relative w-full h-full p-5 flex justify-center items-center pointer-events-auto overflow-hidden">
        <div ref={memojiRef} className="size-68 relative aspect-square">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/memoji/memoji-menu.mov"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          ref={textRef}
          className="font-saans-collection text-7xl md:text-[200px] absolute bottom-5 left-5 text-black flex items-center justify-center font-semibold gap-5"
        >
          {greetings[index]}
        </div>
      </div>
    </div>
  );
};

export default LoadingContent;
