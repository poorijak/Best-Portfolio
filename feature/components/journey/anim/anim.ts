import gsap from "@/lib/gsap";


export const changeColors = (container: HTMLElement | null) => {
  if (!container) return;

  const scroll = container.querySelector(".card-item")?.parentElement as HTMLDivElement | null;
  const extraOffset = 500;
  const scrollDistance = () => scroll ? scroll.scrollWidth - window.innerWidth + extraOffset : window.innerHeight;

  gsap.to(container, {
    backgroundColor: "#1F1F1F",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      pin: true,
      end: () => `+=${scrollDistance() - 600}`,
      toggleActions: "play none none reverse",
    },
  });
};

export const horizontalScroll = (
  container: HTMLDivElement | null,
  scrollSection: HTMLDivElement | null,
  scroll: HTMLDivElement | null,
) => {
  if (!container || !scrollSection || !scroll) return;

  const secrollSelector = gsap.utils.selector(scroll);
  const cards = secrollSelector(".card-item");





  const extraOffset = 500;
  const scrollDistance = () => scroll.scrollWidth - window.innerWidth + extraOffset;

  const mainTrack = gsap.to(scroll, {
    x: () => -scrollDistance(),
    ease: "none",
    scrollTrigger: {
      trigger: scrollSection,
      start: "top-=600 top",
      end: () => `+=${scrollDistance()}`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  cards.forEach((card) => {
    if (!card) return;

    const cardRandomRotation = gsap.utils.random(15, -15);
    const randomY = gsap.utils.random(-30, 30);
    const randomXOffset = gsap.utils.random(-100, 100);

    gsap.to(card, {
      rotation: cardRandomRotation,
      y: randomY,
      x: randomXOffset,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: card,
        containerAnimation: mainTrack,
        start: "left right",
        end: "right left",
        scrub: 1,
      },
    });
  });

};


export const animatePath = (
  path: SVGPathElement | null,
  container: HTMLDivElement | null,
) => {
  if (!path || !container) return;

  const lenght = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: lenght,
    strokeDashoffset: lenght,
  });

  const scroll = container.querySelector(".card-item")?.parentElement as HTMLDivElement | null;
  const extraOffset = 500;
  const scrollDistance = () => scroll ? scroll.scrollWidth - window.innerWidth + extraOffset : window.innerHeight;

  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${scrollDistance() - 600}`,
      scrub: 1,
      markers: true
    },
  });
};

export const animateHeader = (container: HTMLElement | null, scrollSection: HTMLElement | null) => {
  if (!container) return;

  const select = gsap.utils.selector(container);
  const headerWrapper = container.querySelector(".header")?.parentElement;

  gsap.fromTo(select(".header"),
    {
      opacity: 0,
      filter: "blur(20px)",
    },
    {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: headerWrapper || container,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.to(select(".header"), {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    immediateRender: false,
    scrollTrigger: {
      trigger: scrollSection,
      start: "top 50%",
      toggleActions: "play none none reverse",
    }
  });
};
