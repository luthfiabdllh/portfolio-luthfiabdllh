import HeroSection from "@/components/components/HeroSection";
import IntroSection from "@/components/components/IntroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="rounded-t-3xl relative overflow-hidden z-10">
        <IntroSection />
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-center max-w-2xl">
            Explore my projects, skills, and experiences. This portfolio showcases my work and passion for web development.
          </p>
        </div>
      </main>
    </>
  );
}
