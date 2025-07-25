import HeroSection from "@/components/components/HeroSection";
import IntroSection from "@/components/components/IntroSection";
import ProjectSection from "@/components/components/ProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="rounded-t-3xl relative overflow-hidden z-10">
        <IntroSection />
        <ProjectSection />
      </main>
    </>
  );
}
