"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import { dragItem, popAnimate, clickAnimate, heroScroll } from "./anim/animate";
import gsap from "@/lib/gsap";
import { stickerData } from "./data";

const HeroSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      stickerData.forEach((pos, index) => {
        gsap.set(`.sticker-${index}`, {
          x: pos.x,
          y: pos.y,
          rotation: pos.r,
          scale: pos.s,
          xPercent: -50,
          yPercent: -50,
        });
      });

      popAnimate(containerRef);
      dragItem(".draggable-pic", containerRef.current);
      heroScroll(containerRef.current);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="font-advercase relative flex w-full flex-1 flex-col items-center justify-center gap-5 overflow-hidden text-xl transition-transform duration-300 md:text-4xl"
    >
      <div className="flex items-center gap-3">
        <h1 className="animate-item">Hi , I’ m </h1>
        <div className="animate-item relative aspect-square size-12 md:size-16">
          <Image
            src="/me/me.webp"
            fill
            alt="me"
            className="rounded-2xl border-3 border-white object-cover shadow-[0_0_7px_rgba(0,0,0,0.2)]"
          />
        </div>
        <span className="animate-item">
          Poorijak Russamee{" "}
          <span className="animate-hand inline-block">👋🏻</span>
        </span>
      </div>
      <p className="animate-item text-muted-foreground">
        I’m a <span className="animate-item text-black">Software Engineer</span>
      </p>

      <div className="absolute top-1/2 left-1/2 size-0 overflow-visible">
        {stickerData.map((pos, index) => (
          <div
            key={index + 1}
            title={pos.title}
            data-scale={pos.s}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              pos.onClick && pos.onClick(e.currentTarget)
            }
            className={`draggable-pic sticker-${index} pointer-events-auto absolute size-24 hover:scale-110 hover:cursor-grab active:cursor-grabbing`}
          >
            <Image
              src={`/home/${index + 1}.webp`}
              fill
              alt={pos.title}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
