"use client";

import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import React, { useRef } from "react";

const list = [
  "Software Engineer",
  "Creative Frontend Developer",
  "Product Builder",
  "Ux & ui Desginer",
];

const Marquee = () => {
  const containerRef = useRef(null);
  const movingContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(movingContainerRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="font-saans-collection w-full overflow-hidden select-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      <div ref={movingContainerRef} className="flex w-max gap-10 pr-10">
        <div className="flex items-center gap-3">
          {[...list, ...list].map((item, i) => (
            <div className="font-medium text-[#8DC000] uppercase" key={i}>
              {item},
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
