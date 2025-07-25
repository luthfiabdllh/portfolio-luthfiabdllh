"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";

export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-8xl">
        <Link
          heading="EduKita"
          subheading="Learn what we do here"
          imgSrc="/imgs/random/11.jpg"
          href="#"
        />
        <Link
          heading="Semesta Data Digital"
          subheading="We work with great people"
          imgSrc="/imgs/random/6.jpg"
          href="#"
        />
        <Link
          heading="MeLi"
          subheading="Our work speaks for itself"
          imgSrc="/imgs/random/4.jpg"
          href="#"
        />
        <Link
          heading="SkyClub"
          subheading="We want cool people"
          imgSrc="/imgs/random/5.jpg"
          href="#"
        />
        <Link
          heading="Cashify"
          subheading="Incase you're bored"
          imgSrc="/imgs/random/10.jpg"
          href="#"
        />
        
        {/* SwipeButton dengan style yang sama */}
        <SwipeLink
          heading="More Projects"
          subheading="Swipe to explore all projects"
          href="/projects"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <ArrowRight className="size-12" />
      </motion.div>
    </motion.a>
  );
};

interface SwipeLinkProps {
  heading: string;
  subheading: string;
  href: string;
}

const SwipeLink = ({ heading, subheading, href }: SwipeLinkProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const swipeX = useMotionValue(0);
  const progress = useTransform(swipeX, [0, 80], [0, 1]); // Reduced from 150 to 80
  
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    setIsDragging(false);
    
    if (info.offset.x > 60) { // Reduced from 120 to 60
      setIsCompleted(true);
      setTimeout(() => {
        window.location.href = href;
      }, 800);
    } else {
      swipeX.set(0);
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <motion.span 
          className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50"
          animate={isCompleted ? { color: "#10b981" } : {}}
        >
          {isCompleted ? "Redirecting..." : subheading}
        </motion.span>
      </div>

      {/* Swipeable Arrow dengan jarak lebih pendek */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 80 }} // Reduced from 150 to 80
        dragElastic={0.2}
        style={{ x: swipeX }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={isCompleted ? { x: 80 } : {}} // Reduced from 150 to 80
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }} // Increased stiffness for snappier feel
        className="relative z-10 p-4 cursor-grab active:cursor-grabbing"
        whileDrag={{ 
          scale: 1.1,
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderRadius: "12px"
        }}
      >
        <motion.div
          animate={{
            rotate: isCompleted ? 360 : isDragging ? 12 : 0,
            scale: isDragging ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight 
            className={`size-12 transition-colors duration-300 ${
              isCompleted ? 'text-green-500' : 
              isDragging ? 'text-blue-500' : 
              'text-current'
            }`} 
          />
        </motion.div>
      </motion.div>
      
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
        style={{ 
          width: useTransform(progress, [0, 1], ["0%", "100%"]),
          opacity: useTransform(progress, [0, 0.1, 1], [0, 1, 1])
        }}
      />
      
      {/* Drag hint */}
      {!isDragging && !isCompleted && (
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Drag →
        </motion.div>
      )}
    </motion.div>
  );
};