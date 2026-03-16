import Carousel from "@/feature/components/carousel/carousel";
import HeroSection from "@/feature/components/HeroSection/HeroSection";
import LoadingContent from "@/feature/components/loading/LoadingContent";
import TextMarqee from "@/feature/components/textMarqee/TextMarqee";

export default async function Home() {
  return (
    <main>
      <LoadingContent />
      <div className="bg-dot-grid bg-background flex min-h-screen">
        <HeroSection />
      </div>
      <div className="h-[1000px] flex flex-col gap-10 bg-white pt-20">
        <Carousel />
        <TextMarqee />
      </div>
    </main>
  );
}
