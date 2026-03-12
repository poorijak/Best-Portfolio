"use client";

import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import React, { useRef } from "react";
import SplitText from "gsap/SplitText";

export const AnimateText = ({
  children,
  animateOnScroll = true,
  delay = 0,
}: {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements: HTMLElement[] = [];
      if (container.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(container.children) as HTMLElement[];
      } else {
        elements = [container];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          const splitLines = split.lines as HTMLElement[];
          if (splitLines.length > 0) {
            splitLines[0].style.paddingLeft = textIndent;
          }

          element.style.textIndent = "0";
        }

        lines.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
            markers: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    },
  );
  return (
    <div
      ref={containerRef}
      data-copy-wrapper={
        React.Children.count(children) > 1 ? "true" : undefined
      }
    >
      {children}
    </div>
  );
};
