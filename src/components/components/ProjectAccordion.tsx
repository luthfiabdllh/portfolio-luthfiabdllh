"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface AccordionItemProps {
    year: string;
    type: string;
    title: string;
    role: string;
    description: string;
    tags: string[];
    image: string;
    period: string;
    link?: string;
    isOpen?: boolean;
    onToggle?: () => void;
    className?: string;
}

export const AccordionItem = ({
    year,
    type,
    title,
    role,
    description,
    tags,
    image,
    period,
    link,
    isOpen,
    onToggle,
    className,
}: AccordionItemProps) => {
    return (
        <div
            className={cn(
                "border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-500",
                isOpen ? "bg-yellow-50 dark:bg-yellow-900/5 border-neutral-200 dark:border-neutral-800" : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50",
                className
            )}
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-6 md:py-10 px-4 md:px-0 text-left transition-all group mx-6"
            >
                <div className="grid grid-cols-12 w-full items-baseline gap-4 md:gap-8">
                    <span className="col-span-12 md:col-span-3 text-lg md:text-2xl font-medium uppercase tracking-tight text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors font-mono">
                        {year}
                    </span>
                    <span className="col-span-12 md:col-span-9 text-2xl md:text-5xl font-semibold uppercase tracking-tighter text-black dark:text-white leading-none">
                        {title}
                    </span>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden mx-4 md:mx-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 px-4 md:px-0">
                            {/* Spacer to align with title */}
                            <div className="hidden md:block md:col-span-3"></div>

                            {/* Content Area */}
                            <div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {/* Left Column: Details */}
                                <div className="flex flex-col space-y-8">
                                    <div>
                                        <span className="inline-block px-3 py-1 mb-4 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-medium uppercase tracking-wider text-neutral-500">
                                            {type}
                                        </span>
                                        <h4 className="text-xl font-bold tracking-wide uppercase mb-4 text-black dark:text-white">
                                            {role}
                                        </h4>
                                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light">
                                            {description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                        {tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-sm text-neutral-500 dark:text-neutral-500 font-medium hover:text-black dark:hover:text-white transition-colors cursor-default"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Visual */}
                                <div className="relative group/image overflow-hidden rounded-sm aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-900">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                                    />
                                    {link && link !== "#" && (
                                        <a
                                            href={link}
                                            target="_blank"
                                            className="absolute bottom-0 right-0 bg-black dark:bg-white text-white dark:text-black p-4 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors z-10"
                                        >
                                            <ArrowUpRight className="w-6 h-6" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    items: Omit<AccordionItemProps, "isOpen" | "onToggle">[]; // Exclude controlled props from input items
    className?: string;
}

export const Accordion = ({ items, className }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first item? Or null. Let's make it null.

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={cn("w-full border-t border-neutral-200 dark:border-neutral-800", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    {...item}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};
