export interface ImageConfig {
  position: string;
  size: string;
  aspectRatio: "aspect-video" | "aspect-square" | "aspect-[3/4]";
  src: string;
  layers?: "z-0" | "z-10";
  alt?: string;
}

interface WorksDetails {
  name: string;
  category: "UX / UI DESIGN" | "FULLSTACK" | "FRONTEND" | "MOBILEDEVELOP";
  image: ImageConfig;
}

export interface TimelineEntry {
  id: string;
  year: string;
  work: WorksDetails[];
}

export const Timeline_entries: TimelineEntry[] = [
  {
    id: "entry-2026",
    year: "2026",
    work: [
      {
        name: "Moody",
        category: "MOBILEDEVELOP",
        image: {
          position: "top-10 -left-5 md:top-10 md:left-20",
          size: "md:w-[400px] w-[200px]",
          aspectRatio: "aspect-video",
          src: "/works/Moody.webp",
          alt: "Paint 1",
        },
      },
      {
        name: "Borrow Equiment/Lab CMM",
        category: "FULLSTACK",
        image: {
          position: "top-50 left-1/2 md:left-8/12",
          size: "w-[200px] md:w-[400px]",
          aspectRatio: "aspect-video",
          src: "/works/borrow-cmm.webp",
          layers : "z-0",
          alt: "Paint 1",
        },
      },
      {
        name: "Moo Krann",
        category: "FRONTEND",
        image: {
          position: "top-[60%] left-10 md:top-1/2 md:left-90",
          size: "w-32 h-48 md:w-50 md:h-80",
          aspectRatio: "aspect-[3/4]",
          src: "/works/mooKrann.webp",
          layers: "z-10",
          alt: "Paint 1",
        },
      },
    ],
  },
  {
    id: "entry-2025",
    year: "2025",
    work: [
      {
        name: "WayNGo",
        category: "UX / UI DESIGN",
        image: {
          position: "top-11/12 -left-5 md:top-2/12 md:left-100",
          size: "w-40 h-32 md:w-60 md:h-60",
          aspectRatio: "aspect-[3/4]",
          src: "/works/way-n-go.webp",
          layers: "z-0",
          alt: "Paint 1",
        },
      },
      {
        name: "Grow Meow",
        category: "UX / UI DESIGN",
        image: {
          position: "top-10/12 -right-5 md:left-7/12",
          size: "w-40 h-32 md:w-70 md:h-60",
          aspectRatio: "aspect-[3/4]",
          src: "/works/grow-meow.webp",
          layers: "z-10",
          alt: "Paint 1",
        },
      },
      {
        name: "Live mate",
        category: "UX / UI DESIGN",
        image: {
          position: "top-1/2 right-0 md:right-0",
          size: "w-[150px] md:w-[340px]",
          layers: "z-10",
          aspectRatio: "aspect-video",
          src: "/works/live-mate.webp",
          alt: "Paint 1",
        },
      },
      {
        name: "Vex E-Commerce",
        category: "FULLSTACK",
        image: {
          position: "top-6/12 left-0 md:left-0",
          size: "w-30 h-32 md:w-60 md:h-70",
          aspectRatio: "aspect-[3/4]",
          src: "/works/vex.webp",
          layers: "z-0",
          alt: "Paint 1",
        },
      },
      {
        name: "Donezo Todo Management",
        category: "FULLSTACK",
        image: {
          position: "top-45 -right-5 md:top-0 md:right-10",
          size: "w-[150px] md:w-[450px]",
          layers: "z-10",
          aspectRatio: "aspect-video",
          src: "/works/donezo.webp",
          alt: "Paint 1",
        },
      },
      {
        name: "Portfolio Application Ui",
        category: "UX / UI DESIGN",
        image: {
          position: "top-10 -left-5 md:top-12/12 md:right-8/12",
          size: "w-[150px] md:w-[268px]",
          layers: "z-0",
          aspectRatio: "aspect-video",
          src: "/works/cmm.webp",
          alt: "Paint 1",
        },
      },
    ],
  },
  {
    id: "entry-2024",
    year: "2024",
    work: [
      {
        name: "Movie Explorer",
        category: "FRONTEND",
        image: {
          position: "top-5/12 md:top-9/12 left-0 md:left-0",
          size: "w-40 h-32 md:w-50 md:h-60",
          aspectRatio: "aspect-[3/4]",
          src: "/works/mex.webp",
          alt: "Paint 1",
          layers: "z-0",
        },
      },
      {
        name: "MuchMedia",
        category: "FRONTEND",
        image: {
          position: "top-9/12 right-0 md:right-10",
          size: "w-[150px] md:w-[400px]",
          aspectRatio: "aspect-video",
          src: "/works/MuchMedia.webp",
          alt: "Paint 1",
        },
      },
      {
        name: "Wire+",
        category: "UX / UI DESIGN",
        image: {
          position: "top-50 right-0 md:top-50 md:right-0",
          size: "w-[150px] md:w-[350px]",
          aspectRatio: "aspect-video",
          src: "/works/wire+.webp",
          alt: "Paint 1",
        },
      },
    ],
  },
];

export const getThreeYearRecentLabel = () =>
  Timeline_entries.slice(0, 3).map((entry) => entry.year);
export const getThreeYearRecentEntries = () => Timeline_entries.slice(0, 3);

export const getFullTimelineLabel = () =>
  Timeline_entries.map((entry) => entry.year);
export const getFullTimelineEntries = () => Timeline_entries;
