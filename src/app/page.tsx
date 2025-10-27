import CtaSection from "@/components/components/CtaSection";
import Footer from "@/components/components/Footer";
import HeroSection from "@/components/components/HeroSection";
import IntroSection from "@/components/components/IntroSection";
import Preloader from "@/components/components/PreLoader";
import ProjectSection from "@/components/components/ProjectSection";
import { ServicesGrid } from "@/components/components/servicesGrid";
import ServicesSection from "@/components/components/ServicesSection";
import AnimatedBorder from "@/components/ui/border";

export default function Home() {
  return (
    <Preloader>
      <HeroSection />
      <main className="rounded-t-3xl relative overflow-hidden z-10 bg-background">
        <IntroSection />
        <AnimatedBorder duration={2}>
          These aren&apos;t just services — they&apos;re stories in action. What
          follows is a collection of real-world projects where design,
          development, and user experience come together to solve problems and
          spark interaction.
        </AnimatedBorder>
        <ServicesSection />
        <ServicesGrid />
        <ProjectSection />
        <CtaSection />
        <Footer />
      </main>
    </Preloader>
  );
}
