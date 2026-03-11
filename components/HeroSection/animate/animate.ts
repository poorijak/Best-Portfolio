import gsap from "@/lib/gsap";

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
    .to(select(".animate-hand"), {
      rotate: 20, 
      duration: 0.2,
      repeat: 5, 
      yoyo: true, 
      ease: "power1.inOut",
      transformOrigin: "bottom right", 
    });
};
