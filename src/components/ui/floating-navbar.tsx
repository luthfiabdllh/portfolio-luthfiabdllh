"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Home, User, Mail, Settings, Briefcase } from "lucide-react"
import { LiquidGlass } from "./LiquidGlass/LiquidGlass"
import Link from "next/link"

interface NavItem {
  name: string
  link: string
  icon?: React.ReactElement
}

interface FloatingNavProps {
  navItems: NavItem[]
  className?: string
}

export function FloatingNav({ navItems, className = "" }: FloatingNavProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`
        fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50
        transition-all duration-300 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
        ${className}
      `}
    >
      <LiquidGlass
        variant="floating"
        intensity="medium"
        rippleEffect={true}
        flowOnHover={true}
        stretchOnDrag={false}
        className="px-6 py-5"
      >
        <div className="flex items-center justify-center space-x-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="group relative flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-200"
            >
              {/* Icon - always visible */}
              <span className="flex items-center justify-center w-6 h-6 group-hover:scale-110 transition-transform duration-200">
                {navItem.icon}
              </span>

              {/* Text - hidden on mobile, visible on desktop */}
              <span className="hidden sm:block text-sm font-medium whitespace-nowrap">{navItem.name}</span>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10" />
            </Link>
          ))}
        </div>
      </LiquidGlass>
    </div>
  )
}

// Default navigation items
export const defaultNavItems: NavItem[] = [
  {
    name: "Home",
    link: "#home",
    icon: <Home size={18} />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User size={18} />,
  },
  {
    name: "Services",
    link: "#services",
    icon: <Briefcase size={18} />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail size={18} />,
  },
  {
    name: "Settings",
    link: "#settings",
    icon: <Settings size={18} />,
  },
]
