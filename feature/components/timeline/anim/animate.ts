import gsap from "@/lib/gsap";

export const timelineScroll = (container: HTMLElement | null) => {
  if (!container) return;

  const entries = gsap.utils.toArray<HTMLElement>('[data-timeline="entry"]');
  const yearElement = gsap.utils.toArray<HTMLElement>('[data-timeline="year"]');

  yearElement.forEach((year, index) => {
    const char = year.querySelectorAll(".char");
    gsap.set(char, {
      yPercent: index === 0 ? 0 : 100,
    });
  });

  // Work Item parallax movement (Individual items to preserve stacking context)
  const workItems = gsap.utils.toArray<HTMLElement>(
    '[data-timeline="work-item"]',
  );
  workItems.forEach((item, index) => {
    const moveDistance = index % 2 === 0 ? 80 : -80;
    gsap.to(item, {
      y: moveDistance,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // Year transitions
  entries.forEach((entry, index) => {
    if (index === 0) return;

    const currentYearChars = yearElement[index - 1].querySelectorAll(".char");
    const nextYearChars = yearElement[index].querySelectorAll(".char");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: entry,
          start: "50% bottom",
          end: "top top",
          scrub: 1,
        },
      })
      .to(currentYearChars, {
        yPercent: -150,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.inOut",
      })
      .to(
        nextYearChars,
        {
          yPercent: 0,
          autoAlpha: 1,
          stagger: 0.05,
          ease: "power2.inOut",
        },
        "<",
      );
  });
};

export const animatePath = (
  path: SVGPathElement | null,
  container: HTMLDivElement | null,
) => {
  if (!path) return;

  const lenght = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: lenght,
    strokeDashoffset: lenght,
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
    },
  });
};
