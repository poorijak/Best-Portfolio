"use client";

import React, { useRef } from "react";
import { workCarousel } from "./data/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { ScrollTrigger } from "gsap/all";

const Carousel = () => {
  const containerRef = useRef(null);
  const movigContainerRef = useRef(null);

  useGSAP(
    () => {
      const tween = gsap.to(movigContainerRef.current, {
        xPercent: -50,
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
          const newScale = 1 + velocity / 100;

          

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

  const sizeMap = {
    xl: "h-90.75 w-64.75",
    lg: "h-72.5 w-58",
    vertical: "h-71 w-99.75",
    md: "h-47.75 w-58",
  };

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div className="flex w-max items-end gap-6.25" ref={movigContainerRef}>
        {[...workCarousel, ...workCarousel].map((work, i) => {
          if (!work.showPreview) return null;

          return (
            <div
              key={i}
              className={cn("relative shrink-0", sizeMap[work.type])}
            >
              <Image
                src={work.path}
                fill
                alt="works"
                className="border-border rounded-md border object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
