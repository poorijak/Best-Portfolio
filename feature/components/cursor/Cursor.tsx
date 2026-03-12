"use client"

import { useGSAP } from "@gsap/react";
import gsap from "../../../lib/gsap";
import React, { useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xSetCursor = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.3,
      ease: "power3",
    });
    const ySetCursor = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.3,
      ease: "power3",
    });

    const handleMoveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xSetCursor(clientX);
      ySetCursor(clientY);
    };

    window.addEventListener("mousemove", handleMoveCursor);
    return () => window.removeEventListener("mousemove", handleMoveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="size-5 hidden md:block  mix-blend-difference fixed pointer-events-none top-0 left-0 bg-white rounded-full z-999"
    ></div>
  );
};

export default Cursor;
