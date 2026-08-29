'use client';

import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Sparkles, Layers, Terminal, BookOpen } from 'lucide-react';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  domain: string;
  date?: string;
  icon: React.ElementType;
  skills: string[];
  description: string;
}

export default function Certifications() {
  const certifications: CertificationItem[] = [
    {
      id: 'figma-uiux',
      title: 'Figma UI/UX Design Professional',
      issuer: 'Udemy Professional Certification',
      domain: 'UI/UX & Design Systems',
      icon: Layers,
      skills: ['Figma Components', 'Auto-Layout', 'Design Systems', 'Interactive Prototyping', 'User Research'],
      description:
        'Comprehensive training in creating scalable design systems, responsive component libraries, wireframing, and interactive high-fidelity web/mobile prototypes.',
    },
    {
      id: 'fullstack-dev',
      title: 'Full Stack Web Development',
      issuer: 'Intern Ezy',
      domain: 'Web Engineering & APIs',
      icon: Terminal,
      skills: ['Full Stack Architecture', 'REST APIs', 'Database Integration', 'Responsive Layouts', 'Git Workflow'],
      description:
        'Hands-on engineering covering client-server architectures, database integration, API endpoints, modern frontend state management, and production deployments.',
    },
    {
      id: 'child-psychology',
      title: 'Child Psychology & Behavioral Studies',
      issuer: 'Specialized Behavioral Studies',
      domain: 'Cognitive Science & Psychology',
      icon: BookOpen,
      skills: ['Cognitive Learning Curves', 'Behavioral Patterns', 'Stress Indicators', 'Human-Centric Design'],
      description:
        'Specialized coursework in cognitive development, psychometrics, and behavioral patterns — directly informing human-centric design and research in student data clustering.',
    },
    {
      id: 'data-science-ml',
      title: 'Data Science & Machine Learning Foundations',
      issuer: 'Academic & Applied Research Program',
      domain: 'Machine Learning & Analytics',
      icon: Sparkles,
      skills: ['K-Means Clustering', 'Principal Component Analysis (PCA)', 'Scikit-Learn', 'Statistical Inference'],
      description:
        'Rigorous applied training and academic research in high-dimensional data clustering, unsupervised feature reduction, and predictive modeling.',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-canvas-subtle border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black text-xs font-mono font-semibold border border-ink-border">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Professional Certifications &amp; Credentials
          </h2>
          <p className="text-ink-muted text-base">
            Verified certifications spanning UI/UX design systems, full-stack web engineering, and cognitive data analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-canvas-subtle border border-ink-border text-black">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-semibold text-ink-muted uppercase tracking-wider block">
                          {cert.domain}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-black leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Issuer Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-canvas-subtle border border-ink-border text-xs font-medium text-black">
                    <ShieldCheck className="w-3.5 h-3.5 text-black" />
                    <span>Issued by: {cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink-muted leading-relaxed font-normal">
                    {cert.description}
                  </p>

                  {/* Skills / Topics */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-canvas-subtle text-black border border-ink-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="pt-4 mt-6 border-t border-ink-border flex items-center justify-between text-xs text-ink-muted">
                  <span className="flex items-center gap-1.5 text-black font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-black" /> Verified Credential
                  </span>
                  <span className="font-mono text-[11px]">Completed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
