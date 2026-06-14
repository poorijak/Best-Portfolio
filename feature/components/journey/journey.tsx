"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateHeader, animatePath, changeColors, horizontalScroll } from "./anim/anim";
import { JourneyData } from "./data/data";
import CardSilde from "./card-silde";
import { Scooter } from "lucide-react";
import Image from "next/image";

const MyJourney = () => {
  const mainContainer = useRef<HTMLDivElement>(null)
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null)

  useGSAP(
    () => {
      animateHeader(mainContainer.current, scrollSectionRef.current);
      changeColors(scrollSectionRef.current);
      horizontalScroll(mainContainer.current, scrollSectionRef.current, scrollRef.current);
      animatePath(pathRef.current, scrollSectionRef.current,)
    },
    { scope: mainContainer },
  );
  return (
    <div className="w-full h-full bg-[#F0EFE9] relative overflow-hidden" ref={mainContainer}>
      <div className="pointer-events-none bg-linear-to-t z-5 from-transparent to-background w-full h-full absolute inset-0" />
      <div className="h-[60vh] relative z-20 font-advercase flex flex-col items-center justify-center gap-5 pt-30 text-5xl font-bold text-[#1F1F1F]">
        <h1 className="header">Explore my journey and the technologies</h1>
        <h1 className="header">that define my caft</h1>
      </div>
      <div className="h-dvh z-20 w-full relative" ref={scrollSectionRef}>
        <div className="relative h-full w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="pointer-events-none relative z-10 flex gap-2.5 h-full mt-20 items-start"
            style={{ width: "100vw", paddingLeft: "70vw" }}
          >
            {JourneyData.map((card, i) => {
              return (
                <div key={i} className="card-item">
                  <CardSilde
                    data={card}
                  />
                </div>
              );
            })}
          </div>
          <div className="h-[6px] absolute bottom-35 left-0 z-30 w-full bg-[#484848]" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1280 336" fill="none" className="absolute top-0 left-1/2 h-full w-[250vw] -translate-x-1/2 md:w-full" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef} d="M-116 323.626C-9.33334 313.459 205.7 268.126 212.5 168.126C221 43.1256 -94 12.6258 -6.5 168.126C81 323.626 739.5 185.126 796.5 43.1257C842.1 -70.4743 1229.83 149.126 1418 273.126" stroke="#B8FB00" strokeWidth="23" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
