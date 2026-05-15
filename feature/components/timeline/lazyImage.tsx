"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className: string;
}

const LazyImage = ({ src, alt, className, fill }: LazyImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(src);

  useGSAP(
    () => {
      if (!isLoaded || !imageRef.current) return;

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.3 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=20%",
            once: true,
          },
        },
      );
    },
    { scope: containerRef, dependencies: [isLoaded] },
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative size-full overflow-hidden", className)}
    >
      <div className="before:content-[''] absolute inset-0 before:absolute before:inset-0 before:bg-gray-200" aria-hidden="true"/>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill={fill ?? true}
        loading="lazy"
        sizes="(max-width : 768px) 20vw , (max-width: 1200px) 50vw"
        className="absolute inset-0 z-10 size-full object-cover opacity-0"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
