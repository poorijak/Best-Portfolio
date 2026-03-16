export interface WorkCarouselProps {
  type: "xl" | "lg" | "md" | "vertical";
  path: string;
  showPreview: boolean;
}

export const workCarousel: WorkCarouselProps[] = [
  {
    type: "lg",
    path: "/works/cmm.webp",
    showPreview: true,
  },
  {
    type: "md",
    path: "/works/donezo.webp",
    showPreview: false,
  },
  {
    type: "xl",
    path: "/works/grow-meow.webp",
    showPreview: false,
  },
  {
    type: "vertical",
    path: "/works/live-mate.webp",
    showPreview: true,
  },
  {
    type: "lg",
    path: "/works/mex.webp",
    showPreview: true,
  },
  {
    type: "md",
    path: "/works/muchMedia.webp",
    showPreview: true,
  },
  {
    type: "xl",
    path: "/works/vex.webp",
    showPreview: true,
  },
  {
    type: "vertical",
    path: "/works/way-n-go.webp",
    showPreview: true,
  },
  {
    type: "lg",
    path: "/works/wire+.webp",
    showPreview: false,
  },
];
