import HeroSection from "@/components/components/HeroSection";
import IntroSection from "@/components/components/IntroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="rounded-t-3xl relative overflow-hidden ">
        <IntroSection />
      </main>
    </>
  );
}
