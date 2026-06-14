import Carousel from "@/feature/components/carousel/carousel";
import HeroSection from "@/feature/components/HeroSection/HeroSection";
import LoadingContent from "@/feature/components/loading/LoadingContent";
import MyJourney from "@/feature/components/journey/journey";
import TextMarqee from "@/feature/components/textMarqee/TextMarqee";
import WorksTimeline from "@/feature/components/timeline/timeline-works";
import Image from "next/image";
import LetsknowSection from "@/feature/components/letknow/Letsknow";

export default async function Home() {
  return (
    <main>
      {/* <LoadingContent /> */}
      <div className="bg-dot-grid bg-background flex min-h-screen">
        <HeroSection />
      </div>
      <div className="bg-background flex h-fit flex-col gap-10 pt-20">
        <Carousel />
        <TextMarqee />
      </div>
      <div className="bg-background pt-20">
        <WorksTimeline />
      </div>
      <div className="relative z-30 bg-background pt-50">
        <TextMarqee className="rotate-6" />
        <TextMarqee className="-rotate-6" />
      </div>
      <div className="relative z-20 bg-background overflow-hidden">
        <MyJourney />
        <svg className="w-full -mt-1 h-full" viewBox="0 0 1790 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M900.354 239.5C1262.17 238.419 1623.5 166.5 1790 0H895H0C166.5 166.5 538.538 240.581 900.354 239.5Z" fill="#1F1F1F" />
        </svg>
      </div>

      <div className="bg-background pt-[179px]">
        <LetsknowSection />
      </div>





      <div className="bg-background h-[2000px]"></div>
    </main>
  );
}
