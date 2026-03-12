"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRightIcon, ListIcon } from "@phosphor-icons/react";
import Marquee from "./marquee";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { handleMenuToggle } from "./anim/animate";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useGSAP(
    () => {
      handleMenuToggle(menuRef.current, isActive);
    },

    { scope: containerRef, dependencies: [isActive] },
  );

  console.log(isActive);

  const navLinks = [
    { href: "/menu", label: "Menu" },
    { href: "/rotateScroll", label: "rotateScroll" },
    { href: "/textReveal", label: "textReveal" },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-primary fixed inset-x-0 bottom-4 z-50 mx-auto flex h-auto w-[90%] flex-col-reverse overflow-hidden rounded-2xl border border-[#AEED00] py-2 pr-4 pl-2 md:bottom-6 md:w-175 md:rounded-[20px] md:pr-8"
      // style={{ height: 80 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex w-72 items-center gap-5 md:w-150">
          <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-lg bg-black/20 md:rounded-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="/memoji/memoji-menu.mov"
              className="absolute top-[52%] left-[47%] h-full w-full -translate-x-1/2 -translate-y-1/2 scale-140 object-contain"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <h2 className="font-saans-collection text-base font-semibold uppercase md:text-lg">
              Poorijak Rusamee
            </h2>
            <Marquee />
          </div>
        </div>

        <div className="ml-4 shrink-0" onClick={() => setIsActive(!isActive)}>
          <ListIcon weight="light" size={30} />
        </div>
      </div>

      <div
        className={cn(
          "font-advercase flex flex-col gap-3 overflow-hidden font-medium",
          isActive && "my-5",
        )}
        ref={menuRef}
        style={{ height: 0, opacity: 0 }}
      >
        {navLinks.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className="group flex h-12 w-full items-center justify-between px-5 text-2xl"
            >
              <span className="animate-text">{link.label}</span>
              <span className="animate-text transition-transform duration-300 ease-out group-hover:rotate-45">
                <ArrowUpRightIcon size={24} />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
