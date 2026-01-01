"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-100 flex justify-between items-center p-3 sm:p-6">
      {/* Logo */}
      <Link href="/" aria-label="Home">
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
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-20 xl:gap-40 text-base xl:text-lg text-right">
        <Link
          href="/projects"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="My Works"
        >
          My
          <br />
          Works
        </Link>
        <Link
          href="/certifications"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="My Certifications"
        >
          My
          <br />
          Certifications
        </Link>
        <Link
          href="/about"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="About Me"
        >
          About
          <br />
          Me
        </Link>
        <Link
          href="/contact"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="Get In Touch"
        >
          Get
          <br />
          In Touch
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex gap-4 sm:gap-6 text-xs sm:text-sm text-right">
        <Link
          href="/projects"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="Services"
        >
          Projects
        </Link>
        <Link
          href="/sertifications"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="Works"
        >
          Sertifications
        </Link>
        <Link
          href="/about"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="About"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="font-light leading-tight hover:font-normal transition-all cursor-pointer"
          aria-label="Contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
