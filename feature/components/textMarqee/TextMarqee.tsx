"use client";

import React, { useRef } from "react";
import Star from "@/public/icon/Star.svg";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { ScrollTrigger } from "gsap/all";

const list = [
  "Software Engineer",
  "Creative Frontend Developer",
  "Product Builder",
  "Ux & ui Desginer",
];

const TextMarqee = () => {
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
          const velocity = self.getVelocity();
          const newScale = 1 + velocity / 300;

          gsap.to(tween, {
            timeScale: newScale,
            duration: 0.1,
            ease: "power2.out",
            overwrite: true,
          });
        },

        onToggle: (self) => {
          if (!self.isActive) {
            gsap.to(tween, { timeScale: 1, duration: 1 });
          }
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-primary h-12 w-full overflow-hidden py-2"
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
