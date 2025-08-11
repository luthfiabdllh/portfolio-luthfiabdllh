import HeroSection from "@/components/components/HeroSection";
import IntroSection from "@/components/components/IntroSection";
import ProjectSection from "@/components/components/ProjectSection";
import ServicesSection, { ServicesGrid } from "@/components/components/ServicesSection";
import AnimatedBorder from "@/components/ui/border";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="rounded-t-3xl relative overflow-hidden z-10 bg-background">
        <IntroSection />
        <AnimatedBorder duration={2} className="max-w-7xl mx-auto">
          These aren’t just services — they’re stories in action. What follows
          is a collection of real-world projects where design, development, and
          user experience come together to solve problems and spark interaction.
        </AnimatedBorder>
        <ServicesSection />
        <ServicesGrid/>
        <AnimatedBorder duration={2} className="max-w-7xl mx-auto">
          I don’t just write code — I build experiences. What I do is grounded
          in curiosity, shaped by purpose, and refined through craft. From
          design thinking to deployment, here’s how I help ideas become reality.
        </AnimatedBorder>
        <ProjectSection />
      </main>
    </>
  );
}
