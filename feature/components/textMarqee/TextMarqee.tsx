"use client";

import React, { useRef } from "react";
import Star from "@/public/icon/Star.svg";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";

const list = [
  "Software Engineer",
  "Creative Frontend Developer",
  "Product Builder",
  "Ux & ui Desginer",
];

interface TextMarqeeProsp {
  className?: string;
  reverse?: boolean;
}

const TextMarqee = ({ className, reverse = false }: TextMarqeeProsp) => {
  const containerRef = useRef(null);
  const movieContentRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(movieContentRef.current, { xPercent: -50 });

      const tween = gsap.to(movieContentRef.current, {
        xPercent: 0,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity() / 300);
          const baseDirection = reverse ? -1 : 1;
          const newScale = baseDirection + (reverse ? -velocity : velocity);

          gsap.to(tween, {
            timeScale: newScale,
            duration: 0.1,
            ease: "power2.out",
            overwrite: true,
          });
        },

        onToggle: (self) => {
          if (!self.isActive) {
            gsap.to(tween, { timeScale: reverse ? -1 : 1, duration: 1 });
          }
        },
      });

      if (reverse) tween.timeScale(-1);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={cn("bg-primary h-12 w-full overflow-hidden py-2", className)}
    >
      <div ref={movieContentRef} className="flex w-max items-center">
        {[...list, ...list, ...list].map((item, i) => (
          <div key={i} className="flex items-center gap-4 pr-4">
            <span className="text-xl font-bold text-[#3AA700] uppercase">
              {item}
            </span>
            <div className="flex size-5 items-center justify-center">
              <Star className="text-[#3AA700]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextMarqee;
