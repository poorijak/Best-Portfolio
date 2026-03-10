import gsap from "gsap";

// Type สำหรับ Callback function
type AnimationCallback = () => void;

export const slideUp = (
  el: HTMLElement | null,
  onComplete?: AnimationCallback,
): gsap.core.Tween | undefined => {
  if (!el) return;

  return gsap.to(el, {
    yPercent: -100,
    duration: 0.8,
    delay: 0.2,
    ease: "power4.inOut",
    onComplete: onComplete,
  });
};

export const textSlideDown = (
  el: HTMLElement | null,
): gsap.core.Tween | undefined => {
  if (!el) return;

  return gsap.to(el, {
    clipPath: "inset(100% 0% 0% 0%)",
    y: 50,
    duration: 0.6,
    ease: "power3.in",
  });
};

export const fadeText = (
  el: HTMLElement | null,
): gsap.core.Tween | undefined => {
  if (!el) return;

  return gsap.fromTo(
    el,
    { opacity: 0, y: 10, clipPath: "inset(0% 0% 0% 0%)" },
    { opacity: 1, y: 0, duration: 0.3 },
  );
};
