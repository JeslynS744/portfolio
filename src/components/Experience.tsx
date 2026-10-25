'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu, Layout } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Light Mechanics',
      location: 'Bengaluru',
      period: 'June 2025 – July 2026',
      type: 'Full-time',
      icon: Cpu,
      bullets: [
        'Developed laser solution applications for SPMs, optimized seamless communication between software interfaces, database, PLC and third party MES platforms.',
        'Architected reliable industrial database integration and real-time machine telemetry on Microsoft SQL Server with C# and WPF.',
      ],
      skills: ['C#', 'WPF', 'MS SQL Server', 'Industrial PLC', 'SPM Integration', 'MES Communication'],
    },
    {
      role: 'Web Design Intern',
      company: 'Team Tweaks Technologies',
      location: 'Chennai',
      period: 'Jun 2024 – Jul 2024',
      type: 'Internship',
      icon: Layout,
      bullets: [
        'Designed a responsive frontend for Tyeel (farmers\' platform) using HTML5, CSS, Bootstrap, JavaScript.',
        'Ensured cross-browser responsiveness and intuitive design workflows for agrarian web interfaces.',
      ],
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'UI/UX Design', 'Cross-Browser Testing'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-canvas-subtle border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black text-xs font-mono font-semibold border border-ink-border">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Work Experience &amp; Industry Impact
          </h2>
          <p className="text-ink-muted text-base">
            Engineering experience across industrial laser automation, WPF desktop architectures, and responsive web design.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-canvas-subtle border border-ink-border text-black">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-ink-muted mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink-muted sm:text-right">
                    <span className="flex items-center gap-1.5 bg-canvas-subtle px-3 py-1.5 rounded-lg border border-ink-border text-black">
                      <Calendar className="w-3.5 h-3.5 text-ink-muted" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-canvas-subtle px-3 py-1.5 rounded-lg border border-ink-border text-black">
                      <MapPin className="w-3.5 h-3.5 text-ink-muted" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-sm text-ink mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-ink-muted">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-ink-border">
                  <span className="text-xs text-ink-muted font-mono mr-2">Technologies:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-canvas-subtle text-black border border-ink-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
