"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useDeviceDetection';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { shouldReduce, isMobile } = useReducedMotion();

  const loadingTexts = [
    "Crafting Experience",
    "Loading Portfolio", 
    "Preparing Content",
    "Almost Ready"
  ];

  // Fixed positions untuk background dots - tidak menggunakan Math.random()
  const backgroundDots = [
    { left: 10, top: 20 },
    { left: 80, top: 15 },
    { left: 20, top: 70 },
    { left: 90, top: 80 },
    { left: 60, top: 10 },
    { left: 30, top: 90 },
    { left: 70, top: 60 },
    { left: 15, top: 45 },
    { left: 85, top: 35 },
    { left: 45, top: 25 },
    { left: 25, top: 55 },
    { left: 75, top: 75 },
    { left: 50, top: 5 },
    { left: 5, top: 85 },
    { left: 95, top: 50 },
    { left: 35, top: 40 },
    { left: 65, top: 85 },
    { left: 40, top: 65 },
    { left: 55, top: 30 },
    { left: 12, top: 12 }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Reduced loading time for mobile/low-end devices
    const loadingDuration = shouldReduce ? 1500 : 3000;
    const progressIntervalTime = shouldReduce ? 100 : 150;
    const textIntervalTime = shouldReduce ? 600 : 800;

    // Simplified progress animation for reduced motion
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Simpler increment for reduced motion
        const increment = shouldReduce ? 3 : (Math.sin(Date.now() * 0.01) + 1) * 5 + 2;
        return prev + increment;
      });
    }, progressIntervalTime);

    // Text cycling - skip for reduced motion
    const textInterval = shouldReduce ? null : setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, textIntervalTime);

    // Minimum loading time dan finish loading
    const finishTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, shouldReduce ? 300 : 800);
    }, loadingDuration);

    return () => {
      clearInterval(progressInterval);
      if (textInterval) clearInterval(textInterval);
      clearTimeout(finishTimer);
    };
  }, [mounted, loadingTexts.length, shouldReduce]);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: shouldReduce ? 1 : 1.1,
              filter: shouldReduce ? "blur(0px)" : "blur(10px)"
            }}
            transition={{
              duration: shouldReduce ? 0.3 : 1,
              ease: "easeInOut"
            }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
          >
            {/* Background Pattern - Skip for reduced motion */}
            {!shouldReduce && (
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5" />
                {/* Reduce number of dots for mobile */}
                {backgroundDots.slice(0, isMobile ? 10 : 20).map((dot, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-foreground/20 rounded-full"
                    style={{
                      left: `${dot.left}%`,
                      top: `${dot.top}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="relative z-10 text-center space-y-12 px-4">
              {/* Main Logo/Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduce ? 0.3 : 0.8, delay: shouldReduce ? 0 : 0.2 }}
                className="space-y-4"
              >
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-wider"
                  animate={shouldReduce ? {} : {
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 20px rgba(255,255,255,0.1)",
                      "0 0 0px rgba(255,255,255,0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  L<span className="font-carl-brown">o</span>ADIN<span className="font-carl-brown">g</span>
                </motion.h1>
                
                <motion.div
                  className="w-24 h-0.5 bg-foreground mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: shouldReduce ? 0.3 : 1, delay: shouldReduce ? 0 : 1 }}
                />
              </motion.div>

              {/* Animated Text - Skip for reduced motion */}
              {!shouldReduce && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="h-8"
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentText}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-lg md:text-xl text-muted-foreground font-light"
                    >
                      {loadingTexts[currentText]}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Progress Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: shouldReduce ? 0.3 : 0.6, delay: shouldReduce ? 0 : 1.5 }}
                className="space-y-6"
              >
                {/* Simplified Progress for reduced motion */}
                {shouldReduce ? (
                  <div className="w-32 h-2 bg-muted/20 rounded-full mx-auto overflow-hidden">
                    <motion.div
                      className="h-full bg-foreground rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                ) : (
                  /* Circular Progress */
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted/20"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-foreground"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: progress / 100 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          strokeDasharray: "251.2",
                          strokeDashoffset: `${251.2 * (1 - progress / 100)}`,
                        }}
                      />
                    </svg>
                    
                    {/* Progress Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-2xl font-mono font-light"
                        key={Math.floor(progress)}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {Math.floor(progress)}%
                      </motion.span>
                    </div>
                  </div>
                )}

                {/* Simplified Loading Dots for reduced motion */}
                <div className="flex justify-center space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-foreground rounded-full"
                      animate={shouldReduce ? {} : {
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: shouldReduce ? 0 : i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              staggerChildren: 0.1 
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}