"use client";

import Footer from "@/components/components/Footer";
import Navbar from "@/components/components/Navbar";
import { Accordion } from "@/components/components/ProjectAccordion";
import { TechStackHero } from "@/components/components/TechStackHero";
import { projectDetails } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden z-10 bg-background">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, oklch(0.1511 0.0202 269.18) 70%, #010133 100%)",
        }}
      />
      <Navbar />
      <main className="min-h-screen pb-20 px-0 md:px-0">
        <div className="w-full">
          <div className="w-full mx-auto mb-20">
            <TechStackHero />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 px-4 md:px-8 mb-20">
            <h1 className="text-6xl md:text-[10rem] font-thin leading-[0.9]">
              ALL MY
              <br />W<span className="font-carl-brown">o</span>RKS
            </h1>
            <p className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-sm md:max-w-md font-light leading-snug">
              A collection of projects where design, development, and user
              experience come together.
            </p>
          </div>
          <Accordion items={projectDetails} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
