"use client";

import React, { useRef } from "react";
import {
  getThreeYearRecentLabel,
  getThreeYearRecentEntries,
  getFullTimelineLabel,
  getFullTimelineEntries,
} from "./data/timeline-data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import LazyImage from "./lazyImage";
import Link from "next/link";
import { timelineScroll, animatePath } from "./anim/animate";

interface WorksTimelineProps {
  isFull?: boolean;
}

const WorksTimeline = ({ isFull = false }: WorksTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const years = isFull ? getFullTimelineLabel() : getThreeYearRecentLabel();
  const entriesTimeline = isFull
    ? getFullTimelineEntries()
    : getThreeYearRecentEntries();
  const pathRef = useRef<SVGPathElement>(null);
  console.log(years);

  useGSAP(
    () => {
      timelineScroll(containerRef.current);
      animatePath(pathRef.current, containerRef.current);
    },
    { scope: containerRef },
  );

  return (
    <div className="relative md:px-20 px-10">
      <h2 className={cn("pt-20 md:pt-50 font-bold", isFull ? "text-5xl md:text-9xl" : "text-4xl md:text-6xl")}>
        Selected Works
      </h2>

      <div className="relative mt-20" ref={containerRef}>
        {entriesTimeline.map((entry) => (
          <div key={entry.id} className="h-screen pointer-events-none" data-timeline="entry">
            <div className="relative h-full w-full">
              {entry.work.map((work, i) => (
                <div key={i} className={cn("absolute", work.image.position, work.image.layers)} data-timeline="work-item">
                  <div
                    className={cn(
                      "relative",
                      work.image.size,
                      work.image.aspectRatio,
                    )}
                  >
                    <LazyImage
                      src={work.image.src}
                      fill
                      alt={work.image.alt || ""}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-md md:text-xl font-semibold">{work.name}</h3>
                    <span className="font-medium text-sm md:text-md text-[#888888]">
                      {work.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="absolute top-0 left-0 h-full w-full z-5">
          <div
            data-timeline="year-wrapper"
            className="text-year sticky top-0 left-0 flex min-h-screen w-full items-center justify-around"
          >
            {years.map((year, i) => (
              <div
                key={i}
                data-timeline="year"
                className="absolute  top-1/2 left-0 flex w-full -translate-y-1/2 items-center justify-center leading-none"
                style={{ clipPath: "inset(12% 0px 12% 0px)" }}
              >
                {year.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className={cn(
                      "char text-[#E8E8E8]",
                      i !== 0 ? "invisible" : "",
                    )}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1350 3100"
          preserveAspectRatio="none"
          className="absolute top-0 left-1/2 h-full w-[250vw] -translate-x-1/2 md:w-full"
        >
          <path
            ref={pathRef}
            d="M-443 62.6243C-173.5 42.1243 160.4 -48.1757 192 62.6243C231.5 201.124 -25.5 354.011 27.5 520.011C80.5 686.011 661.5 348 974.5 412C1205.5 459.233 1531.36 623.969 1393.5 765.5C1150 1015.49 -83 685.624 -216.5 1078.62C-339.129 1439.62 -150.5 1745.12 122.5 1549.12C395.5 1353.12 -33.5 1339.12 26 1491.12C85.5 1643.12 604.5 1371.49 841.5 1348.5C882.5 1344.52 1235 1303.01 1211.5 1469.01C1188 1635.01 879.5 1690.51 871.5 1811.01C863.5 1931.51 1008.5 2042.51 974.5 2159.01C940.5 2275.51 273 2060.5 90.5 2119.51C-39.5549 2161.57 -139 2396.12 -77.5 2455.51C-16.3705 2514.54 94.1624 2385.47 -16 2364.51C-110 2346.62 -156.5 2553.5 -140.5 2654.5C-124.5 2755.5 -146 2910.5 176 2904.37C571.708 2896.85 708.317 2665.27 852 2766C1036 2895 1176.5 2938 1365.5 2926.5"
            stroke="#B8FB00"
            strokeWidth="60"
          />
        </svg>
      </div>

      {!isFull && (
        <div className="flex w-full items-center justify-center">
          <Link href="/timeline">
            <div className="text-md text-muted-foreground hover:bg-primary rounded-full bg-[#E8E8E8] px-5 py-4 font-medium transition-all duration-300 hover:text-white">
              View Full Timeline
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WorksTimeline;
