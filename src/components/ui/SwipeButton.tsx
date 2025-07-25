"use client";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

interface SwipeButtonProps {
  href: string;
  text?: string;
  onSwipeComplete?: () => void;
  className?: string;
}

export const SwipeButton = ({ 
  href, 
  text = "Swipe to visit", 
  onSwipeComplete,
  className = "" 
}: SwipeButtonProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const x = useMotionValue(0);
  
  // Transform values
  const progress = useTransform(x, [0, 200], [0, 1]);
  const backgroundColor = useTransform(
    progress,
    [0, 0.5, 1],
    ["#374151", "#3b82f6", "#10b981"]
  );
  const textOpacity = useTransform(progress, [0, 0.3, 0.7, 1], [1, 0.5, 0.5, 0]);
  
  const handleDragEnd = (
    event: MouseEvent | TouchEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 150) {
      // Complete the swipe
      setIsComplete(true);
      onSwipeComplete?.();
      
      // Navigate after animation
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    } else {
      // Snap back
      x.set(0);
    }
  };

  return (
    <div className={`relative w-64 h-16 bg-gray-700 rounded-full overflow-hidden ${className}`}>
      {/* Background track */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor }}
      />
      
      {/* Text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-white font-medium"
        style={{ opacity: textOpacity }}
      >
        {text}
      </motion.div>
      
      {/* Success text */}
      {isComplete && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center text-white font-medium"
        >
          Redirecting...
        </motion.div>
      )}
      
      {/* Draggable button */}
      <motion.div
        className="absolute left-1 top-1 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 200 }}
        dragElastic={0.1}
        style={{ x }}
        onDragEnd={handleDragEnd}
        animate={isComplete ? { x: 200 } : {}}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        whileDrag={{ scale: 1.1 }}
      >
        {isComplete ? (
          <Check className="w-6 h-6 text-green-500" />
        ) : (
          <ArrowRight className="w-6 h-6 text-gray-600" />
        )}
      </motion.div>
    </div>
  );
};