import gsap from "@/lib/gsap";

export const changeColors = (container: HTMLElement | null) => {
  if (!container) return;

  const select = gsap.utils.selector(container);

  gsap.set(container, {
    backgroundColor: "#F9F8F8",
  });

  gsap.set(select(".header"), {
    color: "#1F1F1F",
  });

  gsap.to(container, {
    backgroundColor: "#1F1F1F",
    scrollTrigger: {
      trigger: container,
      start: "top-=10 top",
      markers: true,
      toggleActions: "play none none reverse",
    },
  });
  gsap.to(select(".header"), {
    color: "#ffffff",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      markers: true,
      toggleActions: "play none none reverse",
    },
  });
};
