"use client";
import { ArrowRight, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const socialLinks = [
  {
    href: "mailto:ahmadabdllh000@gmail.com",
    label: "Email",
    icon: Mail,
    external: true
  },
  {
    href: "https://github.com/luthfiabdllh",
    label: "GitHub", 
    icon: Github,
    external: true
  },
  {
    href: "https://linkedin.com/in/luthfiabdllh",
    label: "LinkedIn",
    icon: Linkedin,
    external: true
  },
  {
    href: "https://instagram.com/luthfi_abdllh",
    label: "Instagram",
    icon: Instagram,
    external: true
  }
];

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: true, 
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Info */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Made with love in Yogyakarta City, Indonesia
            </h3>
            <div className="flex text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-mono text-foreground">
              <p><span className='text-muted-foreground'>Local Time</span> — {currentTime || 'Loading...'}</p>
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="space-y-4 lg:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="group flex items-center justify-between p-4 lg:p-6 border border-border rounded-lg hover:border-foreground/20 transition-all duration-200 hover:bg-muted/50"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-label={`${link.label} ${link.external ? '(opens in new tab)' : ''}`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-lg lg:text-xl font-medium">{link.label}</span>
                    </div>
                    <ArrowRight 
                      className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-1" 
                      style={{ 
                        transform: link.external ? 'rotate(-45deg)' : 'rotate(0deg)' 
                      }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}