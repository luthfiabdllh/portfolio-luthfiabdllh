"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BorderProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
}

export default function AnimatedBorder({ 
  children, 
  className = "",
  duration = 2 
}: BorderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px" 
  });
  const topVerticalHeight = children ? "12rem" : "0rem";
  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      {/* Top Vertical Line */}
      <motion.div
        className="w-px bg-border mx-auto"
        initial={{ height: 0 }}
        animate={isInView ? { height: topVerticalHeight } : { height: 0 }}
        transition={{
          duration: duration * 0.4,
          ease: "easeInOut",
          delay: isInView ? 0.1 : 0
        }}
      />

      <div className="relative flex items-center justify-center">
        {/* Left Line - animasi dari kanan ke kiri */}
        <motion.div
          className="h-px bg-border flex-1"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: duration * 0.5,
            ease: "easeInOut",
            delay: isInView ? duration * 0.8 : 0
          }}
          style={{ transformOrigin: "right" }}
        />
        
        {/* Center Diamond */}
        <motion.div
            className="relative -m-1"
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 0 }}
            transition={{
                duration: duration * 0.6,
                ease: "easeOut",
                delay: isInView ? 0.2 : 0
            }}
        >
            {/* Perfect Diamond Shape */}
            <div className="relative w-6 h-8 flex items-center justify-center">
              {/* Outer kite shape */}
              <div 
                className="w-6 h-8 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border border-gray-300 shadow-md"
                style={{
                  clipPath: 'polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%)',
                }}
              />
              {/* Inner glow effect */}
              <motion.div
                className="absolute inset-0 w-6 h-8 bg-white/50"
                style={{
                  clipPath: 'polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] } : { scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: isInView ? duration * 0.5 : 0
                }}
              />
            </div>
        </motion.div>
        
        {/* Right Line - animasi dari kiri ke kanan */}
        <motion.div
          className="h-px bg-border flex-1"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: duration * 0.5,
            ease: "easeInOut",
            delay: isInView ? duration * 0.8 : 0
          }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* Bottom Vertical Line to Content */}
      <motion.div
        className="w-px h-16 bg-gradient-to-b from-gray-300 to-gray-300 mx-auto"
        initial={{ height: 0 }}
        animate={isInView ? { height: "4rem" } : { height: 0 }}
        transition={{
          duration: duration * 0.4,
          ease: "easeInOut",
          delay: isInView ? duration * 1.3 : 0
        }}
      />
      
      {/* Content */}
      {children && (
        <motion.div
          className="text-center py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: isInView ? duration * 1.3 : 0
          }}
        >
          <p className="text-secondary text-sm font-light max-w-lg mx-auto text-center">
          {children}
          </p>
        </motion.div>
      )}
      
      {/* Final Vertical Line */}
      {children && (
        <motion.div
          className="w-px h-16 bg-border mx-auto"
          initial={{ height: 0 }}
          animate={isInView ? { height: "4rem" } : { height: 0 }}
          transition={{
            duration: duration * 0.4,
            ease: "easeInOut",
            delay: isInView ? duration * 1.8 : 0
          }}
        />
      )}
    </div>
  );
}