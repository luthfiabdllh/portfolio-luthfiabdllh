import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-3 sm:p-6">
      <Image
        src="/logo.svg"
        alt="Logo Text"
        width={150}
        height={50}
        className="w-12 h-12 lg:w-16 lg:h-16 z-10 relative"
        priority={true}
        style={{
          filter:
            mounted && resolvedTheme === "dark"
              ? "invert(1) brightness(1.2)"
              : "none",
        }}
      />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-20 xl:gap-40 text-base xl:text-lg text-right">
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          My
          <br />
          Works
        </a>
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          My
          <br />
          Experiences
        </a>
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          About
          <br />
          Me
        </a>
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          Get
          <br />
          In Touch
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex gap-4 sm:gap-6 text-xs sm:text-sm text-right">
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          Services
        </a>
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          Works
        </a>
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          About
        </a>
        <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
          Contact
        </a>
      </div>
    </div>
  );
}
