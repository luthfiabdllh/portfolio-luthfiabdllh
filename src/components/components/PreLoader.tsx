"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Crafting Experience",
    "Loading Portfolio", 
    "Preparing Content",
    "Almost Ready"
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 150);

    // Text cycling
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    // Minimum loading time dan finish loading
    const finishTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)"
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5" />
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-foreground/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center space-y-12 px-4">
              {/* Main Logo/Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <motion.h1 
                    className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-wider"
                    animate={{ 
                        textShadow: [
                            "0 0 0px rgba(255,255,255,0)",
                            "0 0 20px rgba(255,255,255,0.1)",
                            "0 0 0px rgba(255,255,255,0)"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    L
                    <span className="font-carl-brown">o</span>
                    ADIN
                    <span className="font-carl-brown">g</span>
                </motion.h1>
                
                <motion.div
                  className="w-24 h-0.5 bg-foreground mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.div>

              {/* Animated Text */}
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

              {/* Progress Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="space-y-6"
              >
                {/* Circular Progress */}
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
                        strokeDasharray: "251.2", // 2 * π * 40
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

                {/* Loading Dots */}
                <div className="flex justify-center space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-foreground rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.2,
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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
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