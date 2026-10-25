'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section active scroll tracking
      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo - Confident, Powerful Monochromatic Mark */}
        <a
          href="#"
          className="group flex items-center gap-3 text-base sm:text-lg font-bold tracking-tight text-black transition-all"
        >
          <div className="relative">
            <span className="w-9 h-9 bg-black text-white font-mono font-black text-sm tracking-tighter flex items-center justify-center rounded-lg border-2 border-black group-hover:bg-white group-hover:text-black transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              JN
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-black font-extrabold tracking-tight leading-tight">
              Jeslyn Nivedhitha S
            </span>
            <span className="text-[10px] text-ink-muted font-mono tracking-widest uppercase font-semibold">
              Software Engineer &amp; Data Scientist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Anchors */}
        <nav className="hidden lg:flex items-center gap-0.5 text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-full transition-all duration-150 ${isActive
                    ? 'text-white bg-black font-bold'
                    : 'text-ink-muted hover:text-black hover:bg-canvas-subtle'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/JeslynS744"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-ink-muted hover:text-black hover:bg-canvas-subtle border border-ink-border transition-all"
            aria-label="GitHub Profile"
            title="GitHub Profile (JeslynS744)"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/jeslyn-nivedhitha-410701249/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-ink-muted hover:text-black hover:bg-canvas-subtle border border-ink-border transition-all"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume (PDF)
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-black hover:bg-canvas-subtle border border-ink-border"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-b border-ink-border px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col gap-2 font-medium text-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-between ${activeSection === link.href ? 'bg-black text-white font-bold' : 'hover:bg-canvas-subtle'
                  }`}
              >
                <span>{link.name}</span>
                {activeSection === link.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-black text-white font-bold text-xs"
            >
              <FileText className="w-4 h-4" />
              View Resume (PDF)
            </button>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://github.com/JeslynS744"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-ink-muted hover:text-black"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jeslyn-nivedhitha-410701249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-ink-muted hover:text-black"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
