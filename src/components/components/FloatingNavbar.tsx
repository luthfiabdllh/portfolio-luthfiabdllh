"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { BadgeCheck, Briefcase, Home, MessageCircle, User } from "lucide-react";
export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Sertification",
      link: "/sertification",
      icon: (
        <BadgeCheck className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
