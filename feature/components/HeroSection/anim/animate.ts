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
      scale: 3,
      yoyo: true,
      duration: 0.5,
      stagger: {
      amount : 0.9,
      from : "random"
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
    onPress: function () {
      // ดึงขึ้นมาไว้ข้างบนสุดเมื่อคลิก
      gsap.set(this.target, { zIndex: 100 });
      // ปรับให้เพื่อนๆ z-index ลดลง
      gsap.set(".draggable-pic", {
        zIndex: (i) =>
          this.target.classList.contains(`sticker-${i}`) ? 100 : 1,
      });
    },
    onDragStart: function () {
      console.log("เริ่มลากแล้ว!");
      gsap.to(this.target, { scale: 1.1, cursor: "grabbing" });
    },
    onDragEnd: function () {
      console.log("หยุดลาก!");
      gsap.to(this.target, { scale: 1, cursor: "grab" });
    },
  });
};
