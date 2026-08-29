'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas border-t border-ink-border text-ink-muted py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-black font-bold text-base">
            <span>Jeslyn Nivedhitha S</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-canvas-subtle text-black border border-ink-border font-mono">
              Portfolio &amp; Blog
            </span>
          </div>
          <p className="text-xs text-ink-muted font-normal">
            Software Engineer &amp; Data Scientist • Coimbatore, India
          </p>
        </div>

        {/* Center links */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <a
            href="https://github.com/JeslynS744"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ink-muted hover:text-black transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeslyn-nivedhitha-410701249/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ink-muted hover:text-black transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="mailto:jeslynnivedhitha@gmail.com"
            className="flex items-center gap-1.5 text-ink-muted hover:text-black transition-colors"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>

        {/* Right back to top button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white border border-ink-border text-black hover:bg-canvas-subtle transition-all group shadow-sm"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-[11px] text-ink-muted border-t border-ink-border pt-6">
        &copy; {new Date().getFullYear()} Jeslyn Nivedhitha S. Monochromatic Portfolio &amp; Technical Blog.
      </div>
    </footer>
  );
}
