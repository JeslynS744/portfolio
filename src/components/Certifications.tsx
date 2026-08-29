'use client';

import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ShieldCheck, Trophy, Sparkles, Layers, Terminal, BookOpen, FolderArchive, FileText, ArrowRight } from 'lucide-react';
import CertificateVaultModal from '@/components/CertificateVaultModal';
import { CertificateDoc } from '@/app/api/certificates/route';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  domain: string;
  icon: React.ElementType;
  skills: string[];
  description: string;
  isHonor?: boolean;
}

export default function Certifications() {
  const [vaultOpen, setVaultOpen] = useState(false);
  const [documents, setDocuments] = useState<CertificateDoc[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/certificates');
      const data = await res.json();
      if (data.success && data.documents) {
        setDocuments(data.documents);
      }
    } catch (e) {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const certifications: CertificationItem[] = [
    {
      id: 'best-outgoing-student',
      title: 'Best Outgoing Student of CSD (2025 Batch)',
      issuer: 'PSG College of Technology',
      domain: 'Institutional Honor & Academic Leadership',
      icon: Trophy,
      isHonor: true,
      skills: ['Academic Excellence', '9.24 CGPA', 'Computer Systems & Design'],
      description:
        'Awarded premier institutional recognition for outstanding academic performance (9.24 CGPA) and overall excellence in the Department of Computer Systems and Design at PSG Tech.',
    },
    {
      id: 'infosys-springboard',
      title: 'Data Science & Data Structures and Algorithms',
      issuer: 'Infosys Springboard Certification',
      domain: 'Data Science & Algorithms',
      icon: Sparkles,
      skills: ['Data Science', 'Data Structures & Algorithms', 'Python', 'Statistical Problem Solving'],
      description:
        'Certified credential verifying deep foundations in algorithmic complexity, core data structures, and statistical machine learning workflows.',
    },
    {
      id: 'figma-uiux',
      title: 'Figma UI/UX Design',
      issuer: 'Udemy',
      domain: 'UI/UX & Design Systems',
      icon: Layers,
      skills: ['Figma', 'UI/UX Prototyping', 'Auto-Layout', 'Design Systems', 'User Interfaces'],
      description:
        'Comprehensive training in creating scalable design systems, responsive component libraries, wireframing, and interactive web and mobile prototypes.',
    },
    {
      id: 'fullstack-dev',
      title: 'Full Stack Development',
      issuer: 'InternEzy',
      domain: 'Web Engineering & Architecture',
      icon: Terminal,
      skills: ['Full Stack Development', 'React', 'JavaScript', 'HTML5 & CSS3', 'REST APIs'],
      description:
        'Hands-on engineering covering client-server architectures, database integration, RESTful API endpoints, and production web deployment.',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-canvas-subtle border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black text-xs font-mono font-semibold border border-ink-border">
            <Award className="w-3.5 h-3.5" />
            <span>Certificates &amp; Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Certifications &amp; Achievements
          </h2>
          <p className="text-ink-muted text-base">
            Verified professional credentials, institutional honors, and document vault.
          </p>

          {/* Certificate Vault Button */}
          <div className="pt-3">
            <button
              onClick={() => setVaultOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm group"
            >
              <FolderArchive className="w-4 h-4 text-white" />
              <span>Open Certificate Document Vault</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-mono">
                {documents.length} {documents.length === 1 ? 'file' : 'files'}
              </span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between ${
                  cert.isHonor ? 'border-black shadow-md' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl border border-ink-border text-black ${
                        cert.isHonor ? 'bg-black text-white' : 'bg-canvas-subtle'
                      }`}>
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
                  <button
                    onClick={() => setVaultOpen(true)}
                    className="font-mono text-[11px] hover:underline text-black font-bold flex items-center gap-1"
                  >
                    <FolderArchive className="w-3 h-3" />
                    <span>View in Vault</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Certificate Vault Modal */}
      <CertificateVaultModal
        isOpen={vaultOpen}
        onClose={() => setVaultOpen(false)}
        documents={documents}
        onRefresh={fetchDocuments}
        loading={loading}
      />
    </section>
  );
}
