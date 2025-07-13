"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Waves from "../ui/Waves/Waves";
import ScrollIcon from "../ui/ScrollIcon";
import LogoMetallic from "../ui/LogoMetallic";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export default function Hero() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Memoized line color untuk prevent re-calculation
    const lineColor = useMemo(() => {
        if (!mounted) return "#A8B1C7"; // Default untuk SSR
        return resolvedTheme === 'dark' ? "#333745" : "#A8B1C7";
    }, [mounted, resolvedTheme]);

    
    return (
        <div className="relative w-full h-screen bg-background p-3 sm:p-5" style={{ overflow: 'visible' }}>
            <Waves
                lineColor={lineColor}
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
                className="absolute inset-0 z-0"
            />

            {/* Scrolling text - responsive */}
            <div 
                className="absolute top-1/2 left-1/2 z-9"
                style={{
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    overflow: 'hidden',
                    contain: 'layout style paint' 
                }}
            >
                <motion.div
                    className="flex items-center"
                    style={{ 
                        width: 'max-content',
                        gap: '50px'
                    }}
                    animate={{
                        x: [0, -2535]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear"
                        }
                    }}
                    initial={{ x: 0 }}
                >
                    {Array.from({ length: 8 }, (_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                alt={`text hero ${index + 1}`}
                                src="/images/text.svg"
                                width={2485}
                                height={300}
                                className="w-auto will-change-transform"
                                style={{ 
                                    maxWidth: 'none', 
                                    flexShrink: 0,
                                    height: '300px'
                                }}
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Hero image - responsive */}
            <Image
                src="/images/hero.png"
                alt="Hero Image"
                width={987}
                height={1316}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 
                        h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] 
                        w-auto object-contain
                        hero-crop"
            />

            {/* Bottom section - responsive */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-5">
                <div className="flex items-center gap-1 sm:gap-2">
                    <ScrollIcon />
                    <p className="text-left text-xs sm:text-sm font-light">
                        SCROLL DOWN
                    </p>
                </div>
                <p className="text-right text-xs sm:text-sm font-light">
                    &copy;2025
                </p>
            </div>

            {/* Header - responsive navigation */}
            <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-3 sm:p-5">
                <LogoMetallic/>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-20 xl:gap-40 text-base xl:text-lg text-right">
                    <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
                        My<br />Services
                    </a>
                    <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
                        My<br />Works
                    </a>
                    <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
                        About<br />Me
                    </a>
                    <a className="font-light leading-tight hover:font-normal transition-all cursor-pointer">
                        Get<br />In Touch
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