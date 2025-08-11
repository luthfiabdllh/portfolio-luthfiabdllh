"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Aurora from "../ui/Aurora/Aurora";
import ServicesCard from "./ServiceCard";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false); // Tambah state untuk track apakah sudah pernah play

  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-50px",
  });

  // Effect untuk setup event listeners video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      console.log("Video loaded successfully");
      video.currentTime = 0;
      if (isInView && !hasPlayed) {
        video.play().catch(console.error);
      }
    };
    const handleCanPlay = () => {
      console.log("Video can play");
      // Trigger play jika dalam view dan belum pernah play
      if (isInView && !hasPlayed && video.paused) {
        video.play().catch(console.error);
      }
    };

    const handlePlay = () => {
      console.log("Video started playing");
      setHasPlayed(true); // Set bahwa video sudah pernah play
    };

    const handlePause = () => {
      console.log("Video paused");
    };

    const handleEnded = () => {
      console.log("Video ended - no restart");
      // Tidak restart video, biarkan ended
    };

    const handleError = (e: Event) => {
      console.error("Video error:", e);
      setVideoError(true);
    };
    // Add event listeners
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
    };
  }, [isInView, hasPlayed]);

  // Effect untuk kontrol play/pause berdasarkan visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError || hasPlayed) return; // Jangan play lagi jika sudah pernah play

    const playVideo = async () => {
      try {
        video.currentTime = 0;
        await video.play();
        console.log("Video playing successfully");
      } catch (error) {
        console.error("Play failed:", error);
      }
    };

    if (isInView) {
      console.log("Component in view - attempting to play video");
      if (video.readyState >= 3) {
        // HAVE_FUTURE_DATA atau lebih
        playVideo();
      } else {
        // Wait for video to be ready
        const handleCanPlay = () => {
          playVideo();
          video.removeEventListener("canplay", handleCanPlay);
        };
        video.addEventListener("canplay", handleCanPlay);
      }
    }
  }, [isInView, videoError, hasPlayed]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-40"
      style={{ willChange: "opacity, transform, filter" }}
    >
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={
          isInView
            ? { opacity: videoError ? 0 : 1, scale: 1 }
            : { opacity: 0, scale: 1.02 }
        }
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "opacity, transform" }}
      >
        {!videoError && (
          <video
            ref={videoRef}
            className="w-full h-full object-bottom"
            preload="metadata"
            muted
            playsInline
            autoPlay={false}
            controls={false}
            style={{
              filter: "brightness(0.8) contrast(1.1)",
              backgroundColor: "transparent",
            }}
          >
            <source src="/bgVideo/stone.webm" type="video/webm" />
          </video>
        )}

        {/* Overlay */}
        {!videoError && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </motion.div>

      <Aurora
        colorStops={["#0025CE", "#0057FF", "#00A6FF", "#00FFD0", "#BADAFF"]}
        blend={1.0}
        amplitude={0.75}
        speed={0.5}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "opacity, transform, filter" }}
        >
          <div className="relative w-full max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-thin">
              <p className="text-left">
                S<span className="font-carl-brown">o</span>LUTION
              </p>
              <p className="text-right">
                TAIL<span className="font-carl-brown">o</span>RED
              </p>
              <p className="text-left">
                F<span className="font-carl-brown">o</span>R Y
                <span className="font-carl-brown">o</span>U
              </p>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl grid grid-cols-2 gap-4 mt-20"
          style={{ willChange: "opacity, transform, filter" }}
        >
          <div>
            <div className="flex leading-0 space-x-4 items-center">
              <span className="inline-block align-middle animate-pulse">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9.5"
                    cy="9.5"
                    r="9.5"
                    fill="url(#paint0_radial_609_104)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_609_104"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9.5 9.5) rotate(90) scale(9.5)"
                    >
                      <stop offset="0.211538" stopColor="#D9D9D9" />
                      <stop offset="1" stopColor="#737373" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
              <span>CAPABILITIES</span>
            </div>
          </div>
          <div className="space-y-4">
            <p>What begins in code endures in experience.</p>
            <p>
              Every journey I architect, every system I shape —crafted with
              intention, refined with quiet precision.
            </p>
            <p>
              Though the logic hums in silence, its presence lingers — in every
              seamless motion, in every moment that simply feels right.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2A2F45] to bg-transparent h-80"></div>
    </motion.section>
  );
}

const servicesData = [
  {
    videoSrc: "/bgVideo/frontend.webm",
    title: "FRONTEND ",
    description:
      "Where design meets interaction. I bring interfaces to life with responsive layouts, intuitive navigation, and seamless user experiences — ensuring every pixel feels purposeful across all screens.",
    number: "01",
    category: "FRoNTEND DEVELoPMENT",
    background: "bg-[#2A2F45]",
    backgroundFlip: "bg-[#2A2F45]",
  },
  {
    videoSrc: "/bgVideo/backend.webm",
    title: "BACKEND",
    description:
      "The invisible engine that powers everything. I build robust, scalable, and secure systems — from databases to APIs — that ensure your application performs reliably behind the scenes.",
    number: "02",
    category: "BACKEND DEVELoPMENT",
    background: "bg-[#1A1F2D]",
    backgroundFlip: "bg-[#1A1F2D]",
  },
  {
    videoSrc: "/bgVideo/uiux.webm",
    title: "UI/UX ",
    description:
      "Design that speaks without words. I craft thoughtful, user-centered experiences that not only look beautiful but guide users effortlessly — blending aesthetics with usability in perfect harmony.",
    number: "03",
    category: "UI/UX DESIgN",
    background: "bg-[#0D101A]",
    backgroundFlip: "bg-[#0D101A]",
  },
];

export function ServicesGrid() {
  return (
    <div className="space-y-0">
      {servicesData.map((service) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ServicesCard
            videoSrc={service.videoSrc}
            title={service.title}
            description={service.description}
            number={service.number}
            category={service.category}
            background={service.background}
            backgroundFlip={service.backgroundFlip}
          />
        </motion.div>
      ))}
    </div>
  );
}
