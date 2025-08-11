"use client";
import { motion } from "framer-motion";
import { HoverImageLinks } from "./HoverImage";

export default function ProjectSection() {
  return (
    <div className="relative w-full mx-auto space-y-32 bg-background py-32 overflow-hidden">
      
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