'use client';

import React from 'react';
import { GraduationCap, BookOpen, Trophy, CheckCircle2, Sparkles, Award } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'MSc in Data Science',
      institution: 'KPR College of Arts, Science and Research',
      university: 'Bharathiar University',
      completion: 'July, 2026',
      score: 'Postgraduate Degree',
      highlight: 'Focus on Machine Learning, Statistical Analysis & Data-Driven Solutions',
    },
    {
      degree: 'BSc in Computer Systems and Design',
      institution: 'PSG College of Technology',
      university: 'Anna University',
      completion: 'June, 2025',
      score: 'CGPA: 9.27',
      isStar: true,
      highlight: '🏆 Best Outgoing Student of CSD (2025 Batch)',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Carmel Garden Matriculation Higher Secondary School',
      university: 'State Board',
      completion: 'May, 2022',
      score: '95.16%',
      highlight: 'Distinction Standard in Higher Secondary Education',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: "St. Joseph's Matriculation Higher Secondary School",
      university: 'State Board',
      completion: 'March, 2020',
      score: '85.6%',
      highlight: 'Secondary School Foundation',
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-canvas border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-subtle text-black text-xs font-mono font-semibold border border-ink-border">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Education &amp; Key Honors
          </h2>
          <p className="text-ink-muted text-base">
            Academic degrees, board milestones, and premier institutional recognition.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline Cards */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-black" />
              <span>Degrees &amp; Academic Milestones</span>
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-black">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-ink-muted mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-ink-muted">{edu.university} • Coimbatore, India</p>
                      )}
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-canvas-subtle text-black border border-ink-border">
                        {edu.score}
                      </span>
                      <span className="text-xs text-ink-muted font-mono">{edu.completion}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink-border flex items-center gap-2 text-xs text-ink">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                    <span>{edu.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Single Focused Key Honor Card */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-black" />
              <span>Key Honor</span>
            </h3>

            <div className="glass-card glass-card-hover rounded-2xl p-7 space-y-6 border-black shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl shadow-sm shrink-0">
                  🏆
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold text-ink-muted uppercase tracking-wider block">
                    Premier Institutional Honor
                  </span>
                  <h4 className="text-xl font-bold text-black leading-snug">
                    Best Outgoing Student of CSD
                  </h4>
                  <p className="text-xs font-mono text-black font-semibold mt-0.5">
                    2025 Batch • PSG College of Technology
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-canvas-subtle border border-ink-border space-y-2">
                <span className="text-xs font-bold text-black block">Award Criteria &amp; Distinction:</span>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
                  Awarded for highest academic distinction (<strong className="text-black font-semibold">9.27 CGPA</strong>), technical leadership, and outstanding capstone delivery in the Department of Computer Systems and Design.
                </p>
              </div>

              <div className="pt-2 border-t border-ink-border flex items-center justify-between text-xs text-ink-muted">
                <span>Awarded by Anna University / PSG Tech</span>
                <span className="font-mono font-bold text-black">June 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
