'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy, CheckCircle2, Star, Ribbon } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'MSc in Data Science',
      institution: 'KPR College of Arts, Science and Research',
      university: 'Bharathiar University',
      completion: 'July 2026',
      score: 'Postgraduate Degree',
      highlight: 'Advanced Statistical Modeling & Machine Learning Pipelines',
    },
    {
      degree: 'BSc in Computer Systems and Design',
      institution: 'PSG College of Technology',
      university: 'Anna University',
      completion: 'June 2025',
      score: 'CGPA: 9.27',
      isStar: true,
      highlight: '🏆 Best Outgoing Student of CSD (2025 Batch)',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Carmel Garden Matriculation HSS',
      completion: '2022',
      score: '95.16%',
      highlight: 'Mathematics & Computer Science Stream',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: "St. Joseph's Matriculation HSS",
      completion: '2020',
      score: '85.6%',
      highlight: 'Distinction Standard',
    },
  ];

  const honors = [
    {
      title: 'Best Outgoing Student of CSD (2025 Batch)',
      issuer: 'PSG College of Technology',
      type: 'Academic Excellence & Leadership Award',
      icon: Trophy,
    },
    {
      title: 'Figma UI/UX Design',
      issuer: 'Udemy Professional Certification',
      type: 'Design Systems & Prototyping',
      icon: Ribbon,
    },
    {
      title: 'Full Stack Development',
      issuer: 'Intern Ezy',
      type: 'Web Architecture & APIs',
      icon: Award,
    },
    {
      title: 'Child Psychology',
      issuer: 'Specialized Behavioral Studies',
      type: 'Cognitive Science Foundation',
      icon: Star,
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
            Education &amp; Recognized Honors
          </h2>
          <p className="text-ink-muted text-base">
            Academic milestones, degree credentials, and professional certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Education Timeline Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-black" />
              <span>Degrees &amp; Academic Background</span>
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
                        <p className="text-xs text-ink-muted">{edu.university}</p>
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

          {/* Right Column: Key Honors & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-black" />
              <span>Key Honors &amp; Certifications</span>
            </h3>

            <div className="space-y-4">
              {honors.map((honor, hIdx) => {
                const Icon = honor.icon;
                return (
                  <div
                    key={hIdx}
                    className="glass-card glass-card-hover rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-canvas-subtle border border-ink-border text-black shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-black leading-snug">{honor.title}</h4>
                      <p className="text-xs font-semibold text-ink-muted">{honor.issuer}</p>
                      <p className="text-xs text-ink-muted">{honor.type}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
