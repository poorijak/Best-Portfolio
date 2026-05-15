import Carousel from "@/feature/components/carousel/carousel";
import HeroSection from "@/feature/components/HeroSection/HeroSection";
import LoadingContent from "@/feature/components/loading/LoadingContent";
import MyJourney from "@/feature/components/journey/journey";
import TextMarqee from "@/feature/components/textMarqee/TextMarqee";
import WorksTimeline from "@/feature/components/timeline/timeline-works";

export default async function Home() {
  return (
    <main>
      <LoadingContent />
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
      <div className="bg-background pt-50">
        <TextMarqee className="rotate-6" />
        <TextMarqee className="-rotate-6"  />
      </div>
      <div>
        <MyJourney />
      </div>
      <div className="bg-background h-[2000px]"></div>
    </main>
  );
}
