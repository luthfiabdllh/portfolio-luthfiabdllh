"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiFigma,
    SiFlask,
    SiPython,
    SiGithub,
    SiLaravel,
    SiNestjs
} from "react-icons/si";
import { SparklesCore } from "../ui/sparkles";
import { ShootingStars } from "../ui/shooting-stars";

export function TechStackHero() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Tech Stack
            </span>

            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={0.1}
                />

                <ShootingStars
                    starColor="#9E00FF"
                    trailColor="#2EB9DF"
                    minSpeed={15}
                    maxSpeed={35}
                    minDelay={1000}
                    maxDelay={3000}
                />
                <ShootingStars
                    starColor="#FF0099"
                    trailColor="#FFB800"
                    minSpeed={10}
                    maxSpeed={25}
                    minDelay={2000}
                    maxDelay={4000}
                />
                <ShootingStars
                    starColor="#00FF9E"
                    trailColor="#00B8FF"
                    minSpeed={20}
                    maxSpeed={40}
                    minDelay={1500}
                    maxDelay={3500}
                />

            </div>

            {/* Inner Ring (Radius 100) - Core Frontend */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={100}
            >
                <SiReact className="size-8 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={100}
                path={false}
            >
                <SiNextdotjs className="size-8 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>

            {/* Second Ring (Radius 175) - Languages & Styling - Reverse */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={25}
                delay={20}
                radius={175}
                reverse
            >
                <SiTypescript className="size-8 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={25}
                delay={12.5}
                radius={175}
                reverse
                path={false}
            >
                <SiTailwindcss className="size-8 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={25}
                delay={5}
                radius={175}
                reverse
                path={false}
            >
                <SiFigma className="size-8 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>

            {/* Third Ring (Radius 250) - Backend & Data */}
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={250}
                duration={30}
                delay={25}
            >
                <SiNodedotjs className="size-10 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={250}
                duration={30}
                delay={15}
                path={false}
            >
                <SiPostgresql className="size-10 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={250}
                duration={30}
                delay={5}
                path={false}
            >
                <SiFlask className="size-10 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>

            {/* Outer Ring (Radius 325) - DevOps & Tools - Reverse */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={325}
                duration={35}
                delay={20}
                reverse
            >
                <SiDocker className="size-12 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={325}
                duration={35}
                delay={10}
                reverse
                path={false}
            >
                <SiGit className="size-12 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={325}
                duration={35}
                delay={0}
                reverse
                path={false}
            >
                <SiGithub className="size-12 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>

            {/* Fifth Ring (Radius 400) - Additional Backend/Languages */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={400}
                duration={40}
                delay={20}
            >
                <SiNestjs className="size-16 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={400}
                duration={40}
                delay={10}
                path={false}
            >
                <SiPython className="size-16 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={400}
                duration={40}
                delay={0}
                path={false}
            >
                <SiLaravel className="size-16 text-neutral-600 dark:text-neutral-400" />
            </OrbitingCircles>
        </div>
    );
}
