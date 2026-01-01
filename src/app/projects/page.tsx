"use client";

import Footer from "@/components/components/Footer";
import Navbar from "@/components/components/Navbar";
import { Accordion } from "@/components/components/ProjectAccordion";
import { TechStackHero } from "@/components/components/TechStackHero";

const projects = [
    {
        year: "2024 / P01",
        type: "Academic Project",
        title: "EduKita",
        period: "2023-2024",
        role: "LEAD PRODUCT DESIGNER",
        description: "EduKita is a platform designed to map educational data openly, providing insights and accessibility to education-related information. Led the design system and user experience strategy.",
        tags: ["UX Research", "UI Design", "System Design"],
        image: "/images/edukita.jpeg",
        link: "https://edukita-xi.vercel.app/",
    },
    {
        year: "2024 / P02",
        type: "Real Project",
        title: "Semesta Data Digital",
        period: "2024",
        role: "FRONTEND DEVELOPER",
        description: "A professional company profile website for Semesta Data Digital. Focused on high-performance animations and a premium dark-mode aesthetic.",
        tags: ["Frontend Dev", "Animation", "Next.js"],
        image: "/images/sdd.jpeg",
        link: "https://web.semesta.vc/",
    },
    {
        year: "2023 / P03",
        type: "Real Project",
        title: "APPIKS",
        period: "2023",
        role: "FULL STACK DEVELOPER",
        description: "An application dedicated to monitoring and preventing bullying in educational environments. Implemented real-time reporting and secure data handling.",
        tags: ["Full Stack", "Security", "Real-time"],
        image: "/images/appiks.png",
        link: "#",
    },
    {
        year: "2023 / P04",
        type: "Real Project",
        title: "SkyClub",
        period: "2023",
        role: "UI/UX DESIGNER",
        description: "A comprehensive booking system for sports clubs. streamlined the reservation flow and improved user retention through intuitive design.",
        tags: ["Mobile Design", "Booking System", "User Flow"],
        image: "/images/skyclub.jpeg",
        link: "#",
    },
    {
        year: "2022 / P05",
        type: "Real Project",
        title: "Inviro CRM",
        period: "2022-2023",
        role: "FRONTEND ENGINEER",
        description: "A Customer Relationship Management tool tailored for sales management. Built complex data visualization dashboards and interactive tables.",
        tags: ["Dashboard", "Data Viz", "Enterprise"],
        image: "/images/inviro.png",
        link: "#",
    },
];

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
                            ALL MY<br />
                            W<span className="font-carl-brown">o</span>RKS
                        </h1>
                        <p className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-sm md:max-w-md font-light leading-snug">
                            A collection of projects where design, development, and user experience come together.
                        </p>
                    </div>
                    <Accordion items={projects} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
