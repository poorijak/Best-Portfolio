import gsap from "gsap";
import { SplitText } from "gsap/all";

// Type สำหรับ Callback function
type AnimationCallback = () => void;


export const textSlideDown = (
  el: HTMLElement | null,
): gsap.core.Tween | undefined => {
  if (!el) return;

  const split = SplitText.create(el, {
    type: "chars , words",
  });

  gsap.set(el, { overflow: "hidden" });

  return gsap.to(split.words, {
    yPercent: -100,
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 0.6,
    delay : 0.2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
      from: "start",
    },
  });
};


export const fadeText = (
  el: HTMLElement | null,
): gsap.core.Tween | undefined => {
  if (!el) return;

  return gsap.fromTo(
    el,
    { opacity: 0, y: 10, duration : 0.3, clipPath: "inset(0% 0% 0% 0%)" ,  },
    { opacity: 1, y: 0, duration: 0.3 },
  );
};

export const fadeOut = (
  el: HTMLElement | null,
): gsap.core.Timeline | undefined => {
  if (!el) return;

  
  const tl = gsap.timeline().to(el, {
    scale: 1.1, 
    opacity: 1,
    duration: 0.9,
    ease: "power3.inOut",
  }).to(el , {
    scale: 0, 
    opacity: 0,
    duration: 0.9,
    ease: "power3.inOut",
  })

  return tl
};

export const staggeredSlideUp = (
  els: (HTMLElement | null)[],
  onComplete?: AnimationCallback,
): gsap.core.Tween | undefined => {
  const validEls = els.filter((el): el is HTMLElement => el !== null);
  if (!validEls.length) return;

  return gsap.to(validEls, {
    yPercent: -100,
    duration: 0.8,
    ease: "power4.inOut",
    stagger: {
      amount: 0.3,
      from: "start",
    },
    onComplete: onComplete,
  });
};
