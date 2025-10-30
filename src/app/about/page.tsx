
import CtaSection from "@/components/components/CtaSection";
import FlowerSection from "@/components/components/FlowerSection";
import Footer from "@/components/components/Footer";
import { TimelineSection } from "@/components/components/TimelineSection";

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden z-10 bg-background">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, oklch(0.1511 0.0202 269.18) 70%, #010133 100%)",
        }}
      />
      <FlowerSection />
      <TimelineSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
