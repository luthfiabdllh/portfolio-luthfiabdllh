"use client";
import { motion } from "framer-motion";
import { HoverImageLinks } from "./HoverImage";

export default function ProjectSection() {
  return (
    <div className="relative w-full mx-auto space-y-32 bg-background py-32 overflow-hidden">
      {/* Large Primary Blobs */}
      <motion.div
        className="absolute -left-40 top-1/6 w-120 h-120 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, #0013FF35, #8349FF25, #0013FF15)`,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
        }}
        animate={{
          x: [-200, 150, 400, 650, 900, 1200, 1500, 1800],
          y: [-80, 50, -30, 60, -50, 30, -60, 50],
          scale: [0.7, 1.2, 0.8, 1.4, 0.9, 1.3, 0.7, 1.1],
          rotate: [0, 30, 60, 90, 120, 150, 180, 210],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "68% 32% 45% 55% / 45% 70% 30% 55%",
            "40% 60% 60% 40% / 60% 30% 70% 40%",
            "55% 45% 30% 70% / 55% 40% 60% 45%",
            "70% 30% 50% 50% / 40% 65% 35% 60%",
            "45% 55% 65% 35% / 70% 35% 65% 30%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1]
        }}
      />

      <motion.div
        className="absolute -right-40 top-1/3 w-130 h-130 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, #8349FF30, #0013FF20, #8349FF10)`,
          borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%"
        }}
        animate={{
          x: [200, -150, -400, -650, -900, -1200, -1500, -1800],
          y: [60, -40, 30, -60, 40, -30, 60, -40],
          scale: [1.3, 0.8, 1.5, 0.7, 1.4, 0.9, 1.2, 1.0],
          rotate: [360, 330, 300, 270, 240, 210, 180, 150],
          borderRadius: [
            "40% 60% 70% 30% / 40% 70% 30% 60%",
            "65% 35% 45% 55% / 60% 40% 60% 40%",
            "30% 70% 60% 40% / 70% 30% 40% 70%",
            "55% 45% 35% 65% / 45% 65% 35% 55%",
            "70% 30% 50% 50% / 30% 70% 70% 30%",
            "45% 55% 60% 40% / 55% 45% 65% 35%",
            "60% 40% 40% 60% / 65% 35% 45% 55%",
            "40% 60% 70% 30% / 40% 70% 30% 60%"
          ]
        }}
        transition={{
          duration: 95,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1]
        }}
      />

      {/* Medium Secondary Blobs */}
      <motion.div
        className="absolute -left-20 top-2/3 w-100 h-100 rounded-full blur-2xl"
        style={{
          background: `linear-gradient(135deg, #0013FF20, #8349FF15, #0013FF10)`,
          borderRadius: "70% 30% 40% 60% / 50% 65% 35% 50%"
        }}
        animate={{
          x: [-120, 200, 450, 700, 950, 1250, 1550],
          y: [80, -60, 40, -80, 60, -40, 80],
          scale: [0.6, 1.3, 0.8, 1.5, 0.7, 1.2, 0.5],
          rotate: [30, 60, 120, 180, 240, 300, 360],
          borderRadius: [
            "70% 30% 40% 60% / 50% 65% 35% 50%",
            "35% 65% 60% 40% / 65% 35% 55% 45%",
            "50% 50% 30% 70% / 40% 60% 60% 40%",
            "65% 35% 55% 45% / 70% 30% 40% 70%",
            "40% 60% 65% 35% / 55% 45% 65% 35%",
            "55% 45% 40% 60% / 60% 40% 50% 50%",
            "70% 30% 40% 60% / 50% 65% 35% 50%"
          ]
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.16, 0.32, 0.48, 0.64, 0.8, 1]
        }}
      />

      <motion.div
        className="absolute -right-20 top-4/5 w-110 h-110 rounded-full blur-2xl"
        style={{
          background: `conic-gradient(from 0deg, #8349FF25, #0013FF15, #8349FF20, #0013FF10)`,
          borderRadius: "35% 65% 55% 45% / 60% 40% 70% 30%"
        }}
        animate={{
          x: [120, -200, -450, -700, -950, -1250, -1550],
          y: [-80, 60, -40, 80, -60, 40, -80],
          scale: [1.1, 0.7, 1.4, 0.8, 1.3, 0.6, 1.2],
          rotate: [0, -40, -80, -120, -160, -200, -240],
          borderRadius: [
            "35% 65% 55% 45% / 60% 40% 70% 30%",
            "60% 40% 40% 60% / 45% 55% 65% 35%",
            "45% 55% 70% 30% / 70% 30% 50% 50%",
            "70% 30% 50% 50% / 35% 65% 45% 55%",
            "50% 50% 35% 65% / 60% 40% 60% 40%",
            "65% 35% 60% 40% / 50% 50% 70% 30%",
            "35% 65% 55% 45% / 60% 40% 70% 30%"
          ]
        }}
        transition={{
          duration: 75,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.16, 0.32, 0.48, 0.64, 0.8, 1]
        }}
      />

      {/* Small Floating Blobs */}
      <motion.div
        className="absolute left-0 top-1/2 w-80 h-80 rounded-full blur-xl"
        style={{
          background: `linear-gradient(45deg, #0013FF25, #8349FF20)`,
          borderRadius: "55% 45% 65% 35% / 45% 70% 30% 55%"
        }}
        animate={{
          x: [-100, 250, 550, 850, 1150, 1500],
          y: [0, -40, 50, -70, 40, -50],
          scale: [0.4, 1.0, 1.3, 0.6, 1.1, 0.5],
          rotate: [0, 80, 160, 240, 320, 400],
          borderRadius: [
            "55% 45% 65% 35% / 45% 70% 30% 55%",
            "70% 30% 40% 60% / 60% 40% 65% 35%",
            "40% 60% 50% 50% / 70% 30% 45% 55%",
            "65% 35% 70% 30% / 35% 65% 60% 40%",
            "30% 70% 45% 55% / 55% 45% 70% 30%",
            "55% 45% 65% 35% / 45% 70% 30% 55%"
          ]
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
      />

      <motion.div
        className="absolute right-0 top-1/4 w-70 h-70 rounded-full blur-xl"
        style={{
          background: `linear-gradient(-45deg, #8349FF25, #0013FF20)`,
          borderRadius: "45% 55% 30% 70% / 65% 35% 55% 45%"
        }}
        animate={{
          x: [100, -250, -550, -850, -1150, -1500],
          y: [0, 40, -50, 70, -40, 50],
          scale: [0.5, 1.1, 0.6, 1.3, 0.8, 0.4],
          rotate: [360, 280, 200, 120, 40, -40],
          borderRadius: [
            "45% 55% 30% 70% / 65% 35% 55% 45%",
            "60% 40% 65% 35% / 40% 60% 70% 30%",
            "35% 65% 50% 50% / 55% 45% 60% 40%",
            "70% 30% 45% 55% / 70% 30% 35% 65%",
            "50% 50% 60% 40% / 45% 55% 65% 35%",
            "45% 55% 30% 70% / 65% 35% 55% 45%"
          ]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
      />

      {/* Micro Detail Blobs */}
      <motion.div
        className="absolute left-1/4 top-1/5 w-50 h-50 rounded-full blur-lg"
        style={{
          background: `radial-gradient(circle, #0013FF30, #8349FF15)`,
          borderRadius: "65% 35% 45% 55% / 50% 60% 40% 50%"
        }}
        animate={{
          x: [-50, 120, 280, 450, 620, 800],
          y: [20, -30, 40, -50, 30, -20],
          scale: [0.3, 0.9, 1.2, 0.5, 1.0, 0.4],
          rotate: [0, 48, 96, 144, 192, 240],
          borderRadius: [
            "65% 35% 45% 55% / 50% 60% 40% 50%",
            "40% 60% 60% 40% / 65% 35% 55% 45%",
            "55% 45% 35% 65% / 40% 60% 60% 40%",
            "70% 30% 50% 50% / 55% 45% 65% 35%",
            "45% 55% 65% 35% / 70% 30% 40% 70%",
            "65% 35% 45% 55% / 50% 60% 40% 50%"
          ]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
      />

      <motion.div
        className="absolute right-1/4 top-3/5 w-60 h-60 rounded-full blur-lg"
        style={{
          background: `radial-gradient(circle, #8349FF30, #0013FF15)`,
          borderRadius: "50% 50% 70% 30% / 60% 40% 45% 55%"
        }}
        animate={{
          x: [50, -120, -280, -450, -620, -800],
          y: [-20, 30, -40, 50, -30, 20],
          scale: [0.4, 1.0, 0.5, 1.2, 0.7, 0.3],
          rotate: [360, 312, 264, 216, 168, 120],
          borderRadius: [
            "50% 50% 70% 30% / 60% 40% 45% 55%",
            "35% 65% 55% 45% / 70% 30% 60% 40%",
            "60% 40% 40% 60% / 45% 55% 65% 35%",
            "70% 30% 60% 40% / 50% 50% 70% 30%",
            "45% 55% 50% 50% / 65% 35% 55% 45%",
            "50% 50% 70% 30% / 60% 40% 45% 55%"
          ]
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
      />

      {/* Center Wandering Blobs */}
      <motion.div
        className="absolute left-1/2 top-1/3 w-90 h-90 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(ellipse, #0013FF15, #8349FF10, transparent)`,
          borderRadius: "60% 40% 55% 45% / 45% 65% 35% 55%"
        }}
        animate={{
          x: [-300, 200, -150, 350, -250, 180],
          y: [-120, 80, -60, 130, -100, 70],
          scale: [0.7, 1.4, 0.5, 1.2, 0.8, 1.3],
          rotate: [120, 60, 180, 0, 120, 240],
          borderRadius: [
            "60% 40% 55% 45% / 45% 65% 35% 55%",
            "35% 65% 70% 30% / 60% 40% 70% 30%",
            "70% 30% 45% 55% / 55% 45% 60% 40%",
            "45% 55% 60% 40% / 70% 30% 45% 55%",
            "65% 35% 50% 50% / 40% 60% 65% 35%",
            "60% 40% 55% 45% / 45% 65% 35% 55%"
          ]
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
      />

      <motion.div
        className="absolute left-2/3 top-2/3 w-85 h-85 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(ellipse, #8349FF15, #0013FF10, transparent)`,
          borderRadius: "40% 60% 65% 35% / 55% 45% 70% 30%"
        }}
        animate={{
          x: [150, -200, 120, -280, 170, -120],
          y: [70, -100, 60, -130, 90, -60],
          scale: [1.1, 0.6, 1.3, 0.7, 1.2, 0.8],
          rotate: [0, 180, 60, 120, 0, 240],
          borderRadius: [
            "40% 60% 65% 35% / 55% 45% 70% 30%",
            "65% 35% 50% 50% / 40% 60% 55% 45%",
            "50% 50% 40% 60% / 70% 30% 65% 35%",
            "70% 30% 55% 45% / 60% 40% 50% 50%",
            "55% 45% 70% 30% / 45% 55% 60% 40%",
            "40% 60% 65% 35% / 55% 45% 70% 30%"
          ]
        }}
        transition={{
          duration: 72,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
      />

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