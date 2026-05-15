"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { changeColors } from "./anim/anim";
import { JourneyData } from "./data/data";
import CardSilde from "./card-silde";

const MyJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  //   const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      changeColors(containerRef.current);
    },
    { scope: containerRef },
  );
  return (
    <div className="h-screen" ref={containerRef}>
      <div className="font-advercase flex flex-col items-center justify-center pt-30 text-5xl font-bold text-white">
        <h1 className="header">Explore my journey and the technologies</h1>
        <h1 className="header">that define my caft</h1>
      </div>
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="pointer-events-none relative z-10 flex h-full items-center"
          style={{ width: "450vw", paddingLeft: "100vw" }}
        >
          {JourneyData.map((card, i) => {
            console.log(card.name_company);

            return (
              <CardSilde
                key={i}
                name_company={card.name_company}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
