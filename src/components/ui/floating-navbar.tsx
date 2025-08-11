"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Home, User, Mail, Settings, Briefcase, Award } from "lucide-react"
import Link from "next/link"
import GlassSurface from "./GlassSurface/GlassSurface"

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
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      // Detect active section
      const sections = navItems.map(item => item.link.replace('#', ''))
      let current = ""

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId
            break
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    
    if (link.startsWith('#')) {
      const targetId = link.substring(1)
      const element = document.getElementById(targetId)
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      window.location.href = link
    }
  }

return (
  <div
    className={`
      fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
      transition-all duration-500 ease-out
      ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
      ${className}
    `}
  >
    <GlassSurface
      width="auto"  // Ubah ke auto agar menyesuaikan konten
      height="auto" // Ubah ke auto agar menyesuaikan konten
      displace={8}
      distortionScale={-100}
      redOffset={3}
      greenOffset={8}
      blueOffset={15}
      brightness={50}
      opacity={0.9}
      mixBlendMode="normal"
      borderRadius={999}
      blur={12}
      className="inline-flex" // Ubah ke inline-flex untuk auto sizing
    >
      <nav className="w-full">
        <ul className="flex items-center space-x-2 sm:space-x-4 px-4 py-3 sm:px-6 sm:py-4">
          {navItems.map((navItem, idx) => {
            const isActive = activeSection === navItem.link.replace('#', '')
            
            return (
              <li key={`nav-${idx}`}>
                <Link
                  href={navItem.link}
                  onClick={(e) => handleNavClick(e, navItem.link)}
                  className={`
                    group relative flex items-center space-x-2 px-3 py-2 rounded-full
                    transition-all duration-300 ease-out
                    ${isActive 
                      ? 'text-white bg-white/20 scale-105' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }
                  `}
                  aria-label={navItem.name}
                >
                  {/* Icon */}
                  <span className={`
                    flex items-center justify-center w-5 h-5 transition-all duration-300
                    ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                  `}>
                    {navItem.icon}
                  </span>

                  {/* Text - responsive visibility */}
                  <span className={`
                    hidden md:block text-sm font-medium whitespace-nowrap transition-all duration-300
                    ${isActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}
                  `}>
                    {navItem.name}
                  </span>

                  {/* Active indicator dot for mobile */}
                  {isActive && (
                    <div className="md:hidden absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  )}

                  {/* Tooltip for mobile */}
                  <div className={`
                    md:hidden absolute -top-12 left-1/2 transform -translate-x-1/2
                    px-2 py-1 bg-black/80 text-white text-xs rounded
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    pointer-events-none whitespace-nowrap z-10
                  `}>
                    {navItem.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/80" />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </GlassSurface>
  </div>
)
}

// Default navigation items dengan perbaikan
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
    icon: <Settings size={18} />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Briefcase size={18} />,
  },
  {
    name: "Certification",
    link: "#certification",
    icon: <Award size={18} />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail size={18} />,
  },
]