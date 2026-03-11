import HeroSection from "@/components/HeroSection/HeroSection";
import LoadingContent from "@/components/loading/LoadingContent";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <LoadingContent />
      <div className="min-h-screen bg-dot-grid flex bg-background ">
      <HeroSection/>
      </div>
    </main>
  );
}
