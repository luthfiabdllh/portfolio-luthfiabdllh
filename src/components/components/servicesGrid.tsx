"use client";
import ServicesCard from "./ServiceCard";
import { motion } from "framer-motion";

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
      {servicesData.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          className="w-full"
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
