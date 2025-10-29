"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";

export default function FlowerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

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
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-32 md:pt-40"
      style={{ willChange: "opacity, transform, filter" }}
    >
      {/* Background Video */}
      <motion.div
        className="absolute left-1/2 -bottom-0 md:-bottom-32 lg:-bottom-72 -translate-x-1/2 w-[320px] md:w-[580px] xl:w-[652px] aspect-[3/4] overflow-hidden z-2"
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
            className="w-full h-full object-cover"
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
            <source src="/bgVideo/flower.webm" type="video/webm" />
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
      <Navbar />
      <p className="absolute top-32 sm:top-40 md:top-44 lg:top-52 left-1/2 -translate-x-1/2 text-center text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-thin tracking-tight w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] px-4 sm:px-0">
        DESI<span className="font-carl-brown">g</span>N WITH PURP
        <span className="font-carl-brown">o</span>SE BUILD WITH INTENTI
        <span className="font-carl-brown">o</span>N
      </p>
      <div
        className="absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56 lg:h-72 
                  bg-gradient-to-t from-background via-background/40 to-transparent 
                  pointer-events-none"
      ></div>
    </motion.section>
  );
}
