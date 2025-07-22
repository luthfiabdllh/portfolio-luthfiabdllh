import { Download } from "lucide-react";
import { ShimmerButton } from "../magicui/shimmer-button";

export default function IntroSection() {
  return (
    <div className="bg-gradient-to-b from-card to-background relative z-10 h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:px-12 lg:py-40">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-27 items-center md:items-center">
          <div className="text-center md:text-right flex-shrink-0">
            <h1 className="font-thin tracking-tight leading-[0.85] text-white">
              <span className="block text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                HELL<span className="font-carl-brown">o</span>
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl -mt-1 sm:-mt-2 lg:mt-6">
                I &apos;M
              </span>
            </h1>
          </div>
          <div className="text-center md:text-left w-full lg:flex-1">
            <div className="max-w-none text-white space-y-6 sm:space-y-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                <strong className="font-semibold">Ahmad Luthfi Abdillah</strong>{" "}
                <span className="font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl opacity-80">
                  (he/him)
                </span>{" "}
                is a technology enthusiast and student at{" "}
                <em className="font-medium">Universitas Gadjah Mada</em>,
                focusing on building digital solutions. Skilled in{" "}
                <strong className="font-semibold">JavaScript</strong>,{" "}
                <strong className="font-semibold">React</strong>, and{" "}
                <strong className="font-semibold">Node.js</strong>, he
                transforms complex problems into user-friendly applications.
                With a goal to create impactful technology, Ahmad is eager to
                apply his skills to real-world challenges.
              </p>

              <ShimmerButton
                className="w-full sm:w-auto shadow-2xl bg-background hover:bg-background/80 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[44px] sm:min-h-[48px] lg:min-h-[52px] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-medium leading-none tracking-tight flex items-center text-white zjustify-center gap-2"
                shimmerDuration="5s"
                shimmerSize="0.1em"
                background="var(--background)"
              >
                <Download />
                Resume
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
