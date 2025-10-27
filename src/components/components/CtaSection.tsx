"use client";
import { ShimmerButton } from "../magicui/shimmer-button";

export default function CtaSection() {
  return (
    <section className="relative z-10 justify-center items-center flex flex-col w-full mx-auto bg-transparent min-h-[80vh] sm:min-h-screen text-center space-y-8 sm:space-y-12 px-4 sm:px-6">
      <h6 className="text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase letter-spacing-2">
        HAVE A PROJECT IN MIND?
      </h6>
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-thin leading-tight sm:leading-tight">
        LET&apos;S MAKE <br className="hidden sm:block" />
        <span className="font-carl-brown">g</span>REAT THIN
        <span className="font-carl-brown">g</span>S{" "}
        <span className="font-dancing-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Together
        </span>
      </h3>
      <ShimmerButton
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl sm:w-auto shadow-2xl bg-background hover:bg-background/80 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px] sm:min-h-[56px] md:min-h-[64px] lg:min-h-[72px] px-8 sm:px-12 md:px-16 lg:px-20 py-2 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg font-medium leading-none tracking-tight flex items-center justify-center gap-2"
        shimmerDuration="5s"
        shimmerSize="0.1em"
        background="var(--background)"
      >
        GET IN TOUCH
      </ShimmerButton>
    </section>
  );
}
