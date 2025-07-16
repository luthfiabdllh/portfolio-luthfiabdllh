"use client";

import lightAnimation from "@/public/icons/chevron_light.json";
import darkAnimation from "@/public/icons/chevron_dark.json";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Perbaiki import
import Lottie from "lottie-react";
import Link from "next/link";

export default function ScrollIcon() {
  const { resolvedTheme } = useTheme(); // Gunakan resolvedTheme untuk lebih reliable
  const [isMounted, setIsMounted] = useState(false);

  // Hindari mismatch antara server dan client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Perbaiki kondisi: light theme = lightAnimation, dark theme = darkAnimation
  const animationData =
    resolvedTheme === "dark" ? lightAnimation : darkAnimation;

  return (
    <Link href="/" className="w-8 h-8 rotate-90 border-1 rounded">
      <Lottie 
        animationData={animationData} 
        loop 
        autoplay
      />
    </Link>
  );
}