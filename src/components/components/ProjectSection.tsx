"use client";
import { lazy, Suspense } from "react";
import { HoverImageLinks } from "./HoverImage";
import { useReducedMotion } from "@/hooks/useDeviceDetection";

// Lazy load heavy components
const AnimatedBorder = lazy(() => import("../ui/border").then(module => ({ default: module.default })));
const DarkVeil = lazy(() => import("../ui/DarkVeil/DarkVeil").then(module => ({ default: module.default })));

export default function ProjectSection() {
  const { shouldReduce } = useReducedMotion();

  return (
    <div className="relative w-full mx-auto space-y-32 bg-background py-32 overflow-hidden">
      {/* Only show one DarkVeil for reduced motion */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />}>
        <DarkVeil />
      </Suspense>
      
      {/* Reduce animation duration for reduced motion */}
      <Suspense fallback={<div className="max-w-7xl mx-auto p-4 text-center text-muted-foreground">Loading...</div>}>
        <AnimatedBorder duration={shouldReduce ? 0.5 : 2} className="max-w-7xl mx-auto">
          I don&apos;t just write code — I build experiences. What I do is grounded
          in curiosity, shaped by purpose, and refined through craft. From
          design thinking to deployment, here&apos;s how I help ideas become reality.
        </AnimatedBorder>
      </Suspense>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="relative w-full max-w-5xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-thin">
            <p className="text-left ml-4 sm:ml-8">
              SELE<span className="font-carl-brown">C</span>TED
            </p>
            <p className="text-right mr-4 sm:mr-8">
              <span>
                PR<span className="font-carl-brown">o</span>JE
                <span className="font-carl-brown">C</span>TS
              </span>
            </p>
          </h2>
        </div>
        <HoverImageLinks />
      </div>
    </div>
  );
}
