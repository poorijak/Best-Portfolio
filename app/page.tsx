import HeroSection from "@/feature/components/HeroSection/HeroSection";
import LoadingContent from "@/feature/components/loading/LoadingContent";

export default async function Home() {
  return (
    <main>
      <LoadingContent />
      <div className="bg-dot-grid bg-background flex min-h-screen">
        <HeroSection />
      </div>
      <div className="h-[1000px] bg-white"></div>
    </main>
  );
}
