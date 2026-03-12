"use client";

import gsap from "@/lib/gsap";
import { SplitText } from "gsap/all";

export const handleMenuToggle = (el: HTMLElement | null, isActive: boolean) => {
  console.log("element ", isActive);

  const tl = gsap.timeline();

  const selected = gsap.utils.selector(el);
  const targetText = selected(".animate-text");
  const split = new SplitText(targetText, { type: "lines" });

  gsap.set(split, { overflow: "hidden" });

  if (isActive) {
    tl.to(el, {
      height: "auto",
      opacity: 1,
      duration: 0.3,
      ease: "power4.out",
    }).from(
      split.lines,
      {
        yPercent: 100, // เริ่มจากข้างล่าง (ในกรอบตัวเอง)
        clipPath: "inset(0% 0% 100% 0%)", // ตัดส่วนล่างทิ้งไว้ (ยังมองไม่เห็น)
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.1",
    );
  } else {
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power4.out",
      onComplete: () => {
        split.revert();
      },
    });
  }
};
