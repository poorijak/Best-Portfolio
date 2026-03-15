import gsap from "@/lib/gsap";
import { Draggable } from "gsap/all";

export const popAnimate = (scope: React.RefObject<HTMLElement | null>) => {
  const tl = gsap.timeline();
  const select = gsap.utils.selector(scope);

  tl.from(select(".animate-item"), {
    y: 10,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.2,
    delay: 4.5,
  })
    .from(select(".draggable-pic"), {
      opacity: 0,
      scale: 6,
      yoyo: true,
      duration: 0.5,
      stagger: {
        amount: 0.9,
        from: "random",
      },
      ease: "back.out(1.7)",
    })
    .to(select(".animate-hand"), {
      rotate: 20,
      duration: 0.2,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "bottom right",
    });
};

export const dragItem = (selector: string, container: HTMLElement | null) => {
  if (!container) return;

  Draggable.create(selector, {
    type: "x,y",
    inertia: true,
    onDrag: function () {
      console.log(
        `Target: ${this.target.title || "sticker"} -> x: ${this.x.toFixed(2)}, y: ${this.y.toFixed(2)}`,
      );
    },
    onDragStart: function () {
      const baseScale = Number(this.target.dataset.scale) || 1;
      gsap.to(this.target, { scale: baseScale + 0.1, cursor: "grabbing" });
    },
    onDragEnd: function () {
      const baseScale = Number(this.target.dataset.scale) || 1;

      console.log("Final Position -> x:", this.x, "y:", this.y);
      gsap.to(this.target, { scale: baseScale, cursor: "grab" });
    },
  });
};

export const clickAnimate = (target: EventTarget, baseScale: number) => {
  gsap.to(target, {
    scale: baseScale + 0.3,
    rotation: "+=15",
    yoyo: true,
    repeat: 1,
    duration: 0.2,
    ease: "power1.inOut",
  });
};

export const heroScroll = (container: HTMLElement | null) => {
  if (!container) return;

  const selector = gsap.utils.selector(container);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
    .to(selector(".draggable-pic"), {
      y: () => gsap.utils.random(300, -300),
      // y: "-=300",
      rotation: () => gsap.utils.random(-20, 20),
      ease: "none",
    });
};
