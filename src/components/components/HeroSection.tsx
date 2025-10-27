"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollIcon from "../ui/ScrollIcon";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "@/hooks/useDeviceDetection";
import dynamic from "next/dynamic";

// Lazy load Waves component
const Waves = dynamic(() => import("../ui/Waves/Waves"), {
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20" />
  ),
  ssr: false,
});

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { shouldReduce } = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoized line color untuk prevent re-calculation
  const lineColor = useMemo(() => {
    if (!mounted) return "#A8B1C7"; // Default untuk SSR
    return resolvedTheme === "dark" ? "#333745" : "#A8B1C7";
  }, [mounted, resolvedTheme]);

  // Optimized wave config based on device capabilities
  const waveConfig = useMemo(
    () => ({
      lineColor,
      waveSpeedX: shouldReduce ? 0.01 : 0.02,
      waveSpeedY: shouldReduce ? 0.005 : 0.01,
      waveAmpX: shouldReduce ? 20 : 40,
      waveAmpY: shouldReduce ? 10 : 20,
      friction: 0.9,
      tension: 0.01,
      maxCursorMove: shouldReduce ? 60 : 120,
      xGap: shouldReduce ? 20 : 12,
      yGap: shouldReduce ? 50 : 36,
    }),
    [lineColor, shouldReduce]
  );

  return (
    <div
      className="sticky top-0 z-10 flex items-center justify-center w-full h-screen bg-background p-3 sm:p-6"
      style={{ overflow: "visible" }}
    >
      {/* Skip waves for reduced motion or low-end devices */}
      {!shouldReduce && (
        <Waves {...waveConfig} className="absolute inset-0 z-0" />
      )}

      {/* Scrolling text - optimized for performance */}
      <div
        className="absolute top-1/2 left-1/2 z-9"
        style={{
          transform: "translate(-50%, -50%)",
          width: "100vw",
          overflow: "hidden",
          contain: "layout style paint",
        }}
      >
        <motion.div
          className="flex items-center"
          style={{
            width: "max-content",
            gap: shouldReduce ? "30px" : "50px",
          }}
          animate={
            shouldReduce
              ? {}
              : {
                  x: [0, -2535],
                }
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: shouldReduce ? 40 : 25,
              ease: "linear",
            },
          }}
          initial={{ x: 0 }}
        >
          {/* Reduce number of images for mobile/low-end devices */}
          {Array.from({ length: shouldReduce ? 4 : 8 }, (_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduce ? 0 : index * 0.1 }}
            >
              <Image
                alt={`text hero ${index + 1}`}
                src="/images/text.svg"
                width={2485}
                height={300}
                className="w-auto will-change-transform"
                style={{
                  maxWidth: "none",
                  flexShrink: 0,
                  height: shouldReduce ? "200px" : "300px",
                }}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hero image - optimized */}
      <Image
        src="/images/hero.png"
        alt="Hero Image"
        width={987}
        height={1316}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10
                        h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh]
                        w-auto object-contain
                        hero-crop"
        style={{
          filter: shouldReduce ? "none" : "contrast(1.1) brightness(1.05)",
        }}
        priority={true}
        sizes="(max-width: 768px) 60vw, (max-width: 1024px) 70vw, 80vw"
      />

      {/* Bottom section - responsive */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6">
        <div className="flex items-center gap-1 sm:gap-2">
          <ScrollIcon />
          <p className="text-left text-xs sm:text-sm font-light">SCROLL DOWN</p>
        </div>
        <p className="text-right text-xs sm:text-sm font-light">&copy;2025</p>
      </div>

      {/* Header - responsive navigation */}
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
              resolvedTheme === "dark" ? "invert(1) brightness(1.2)" : "none",
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
    </div>
  );
}
