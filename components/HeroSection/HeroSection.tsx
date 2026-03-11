"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import { popAnimate } from "./animate/animate";
import gsap from "@/lib/gsap";

const HeroSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      popAnimate(containerRef);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-1 w-full flex-col gap-5  text-xl md:text-4xl font-advercase  items-center justify-center "
    >
      <div className="flex gap-3 items-center">
        <h1 className="animate-item">Hi , I’ m </h1>
        <div className="relative animate-item size-12 md:size-16 aspect-square ">
          <Image
            src="/me/me.webp"
            fill
            alt="me"
            className="object-cover border-3 shadow-[0_0_7px_rgba(0,0,0,0.2)] border-white  rounded-2xl"
          />
        </div>
        <span className="animate-item">
          Poorijak Russamee <span className="animate-hand inline-block">👋🏻</span>
        </span>
      </div>
      <p className="animate-item text-muted-foreground">
        I’m a <span className="text-black animate-item">Software Engineer</span>
      </p>
    </div>
  );
};

export default HeroSection;
