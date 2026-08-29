'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, BookOpen, Code2, Database, Cpu, Award } from 'lucide-react';
import { useApp } from '@/app/providers';

export default function Hero() {
  const { showToast } = useApp();
  const [copied, setCopied] = React.useState(false);

  const email = 'jeslynnivedhitha@gmail.com';
  const phone = '+91-9487534297';
  const location = 'Coimbatore, Tamil Nadu, India';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    showToast('Email Copied', email, 'info');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Profile Photo & Key Metadata */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-6">
            {/* Minimalist Profile Photo Frame */}
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-canvas-subtle border border-ink-border shadow-md">
              <Image
                src="/images/my_profile.jpeg"
                alt="Jeslyn Nivedhitha S"
                fill
                className="object-cover object-top hover:scale-105 transition-all duration-500"
                priority
              />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-ink-border flex items-center justify-between text-xs">
                <span className="font-bold text-black">Jeslyn Nivedhitha S</span>
                <span className="font-mono text-ink-muted text-[11px]">Coimbatore, IN</span>
              </div>
            </div>

            {/* Direct Contact List */}
            <div className="w-full max-w-xs sm:max-w-sm space-y-2 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-ink-border">
                <div className="flex items-center gap-2 text-ink truncate">
                  <Mail className="w-4 h-4 text-black shrink-0" />
                  <a href={`mailto:${email}`} className="truncate hover:underline">
                    {email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1 hover:bg-canvas-subtle rounded text-ink-muted hover:text-black ml-2"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-ink-border text-ink">
                <Phone className="w-4 h-4 text-black shrink-0" />
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                  {phone}
                </a>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-ink-border text-ink">
                <MapPin className="w-4 h-4 text-black shrink-0" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth About Me & Narrative */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-subtle text-black text-xs font-mono font-semibold border border-ink-border">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span>Software Engineer &amp; Data Scientist</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
                Architecting Industrial Systems, Full-Stack Applications &amp; Data Pipelines.
              </h1>
            </div>

            {/* In-Depth About Me Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
              <p>
                Hello! I am <strong className="text-black font-semibold">Jeslyn Nivedhitha S</strong>, a Software Engineer and Data Science specialist with hands-on expertise building high-reliability desktop automation, modern full-stack web platforms, and analytical machine learning pipelines.
              </p>
              <p>
                During my tenure at <strong className="text-black font-semibold">Light Mechanics</strong> in Bengaluru, I engineered core laser-solution applications for Special Purpose Machines (SPMs) — establishing low-latency, deterministic communication between user interfaces, Microsoft SQL Server databases, industrial PLCs, and third-party Manufacturing Execution Systems (MES) using C# and WPF.
              </p>
              <p>
                I graduated with a <strong className="text-black font-semibold">BSc in Computer Systems and Design</strong> from <strong className="text-black font-semibold">PSG College of Technology</strong> (Anna University) with a <strong className="text-black font-semibold">9.27 CGPA</strong>, honored as the <strong className="text-black font-semibold">Best Outgoing Student of CSD (2025 Batch)</strong>. Currently, I am expanding my statistical modeling expertise through an <strong className="text-black font-semibold">MSc in Data Science</strong> at KPR College.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#blog"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-canvas-subtle text-black font-bold text-xs sm:text-sm uppercase tracking-wider border border-ink-border transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Technical Blog</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-canvas-subtle hover:bg-canvas text-ink-muted hover:text-black font-bold text-xs sm:text-sm uppercase tracking-wider border border-ink-border transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Highlight Badges / Micro Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-ink-border">
              <div className="p-4 rounded-xl bg-white border border-ink-border">
                <div className="text-2xl font-black text-black">9.27</div>
                <div className="text-xs text-ink-muted mt-1">BSc CSD CGPA (PSG Tech)</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-ink-border">
                <div className="text-2xl font-black text-black">Awarded</div>
                <div className="text-xs text-ink-muted mt-1">Best Outgoing Student</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-ink-border">
                <div className="text-2xl font-black text-black">SPM &amp; PLC</div>
                <div className="text-xs text-ink-muted mt-1">Laser Automation &amp; C#</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-ink-border">
                <div className="text-2xl font-black text-black">MSc Data</div>
                <div className="text-xs text-ink-muted mt-1">Advanced ML &amp; Pipelines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
