'use client';

import React, { useRef } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, BookOpen, Code, Award } from 'lucide-react';
import { useApp } from '@/app/providers';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { showToast } = useApp();
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    showToast('Resume Download Triggered', 'Jeslyn_Nivedhitha_S_Resume.pdf', 'info');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-4xl bg-white border border-ink-border rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col print:max-h-none print:border-none print:shadow-none animate-fade-in text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-ink-border bg-canvas-subtle print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-black" />
            <span className="text-xs font-bold text-black uppercase tracking-wider font-mono">
              Jeslyn_Nivedhitha_S_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-ink-muted hover:text-black hover:bg-canvas text-xs font-semibold border border-ink-border transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-ink-muted hover:text-black hover:bg-canvas rounded-lg transition-colors border border-ink-border ml-2"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <div 
          ref={resumeRef}
          className="flex-1 overflow-y-auto p-6 sm:p-12 text-ink space-y-8 bg-white print:p-8 selection:bg-black selection:text-white"
        >
          {/* Header */}
          <div className="border-b border-ink-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                JESLYN NIVEDHITHA S
              </h1>
              <p className="text-sm font-semibold text-black mt-1">
                Software Engineer &amp; Data Scientist
              </p>
            </div>

            <div className="text-xs text-ink-muted space-y-1 font-mono sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-black" />
                <a href="mailto:jeslynnivedhitha@gmail.com" className="hover:underline">jeslynnivedhitha@gmail.com</a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-black" />
                <a href="tel:+919487534297" className="hover:underline">+91-9487534297</a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-black" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center sm:justify-end gap-3 pt-1">
                <a href="https://github.com/JeslynS744" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-black">
                  github.com/JeslynS744
                </a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/jeslyn-nivedhitha-410701249/" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-black">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
              High-achieving Software Engineer and Data Science Specialist with practical industry experience in industrial automation (C#, WPF, MS SQL Server, PLC, MES), full-stack web architectures, and predictive machine learning models. Graduated as Best Outgoing Student of Computer Systems and Design (PSG College of Technology, 9.27 CGPA).
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-black pl-4 space-y-1">
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Software Engineer — Light Mechanics</span>
                  <span className="font-mono text-xs text-ink-muted font-normal">June 2025 – July 2026 | Bengaluru</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-ink-muted">
                  <li>Developed core laser-solution applications for Special Purpose Machines (SPMs).</li>
                  <li>Engineered low-latency communication between user interfaces, databases, industrial PLCs, and third-party MES platforms using C# and WPF.</li>
                  <li>Architected reliable industrial database integration on Microsoft SQL Server.</li>
                </ul>
              </div>

              <div className="border-l-2 border-ink-border pl-4 space-y-1">
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Web Design Intern — Team Tweaks Technologies</span>
                  <span className="font-mono text-xs text-ink-muted font-normal">June 2024 | Chennai</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-ink-muted">
                  <li>Created responsive frontend interface for Tyeel, a digital platform for farmers.</li>
                  <li>Ensured cross-browser responsiveness using HTML5, CSS3, Bootstrap, and JavaScript.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Projects
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between font-bold text-black">
                  <span>Rapid Remit – International Banking &amp; Remittance Platform (PHP, MySQL, Render)</span>
                  <span className="font-mono text-xs text-ink-muted font-normal">rapid-remit.onrender.com</span>
                </div>
                <p className="text-ink-muted mt-0.5">
                  Secure cross-border transactional banking and remittance portal featuring ACID-compliant ledger transactions, multi-currency processing, and administrative dashboards.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-black">
                  <span>WorkforcePulse – User Telemetry &amp; Analytics Dashboard (React, MongoDB, Docker, Render)</span>
                  <span className="font-mono text-xs text-ink-muted font-normal">workforceplus.onrender.com</span>
                </div>
                <p className="text-ink-muted mt-0.5">
                  Containerized workforce analytics dashboard featuring real-time demographic metrics, MongoDB aggregation pipelines, and interactive reporting.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-black">
                  <span>Student CBT Distortion Analytics – ML Research (Python, PCA, K-Means)</span>
                  <span className="font-mono text-xs text-ink-muted font-normal">Final Year Project</span>
                </div>
                <p className="text-ink-muted mt-0.5">
                  Final year research project applying unsupervised Machine Learning, PCA dimensionality reduction, and K-Means clustering to analyze student cognitive behavioral distortions.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-black">
                  <span>Frontend Web Systems &amp; Industry Internship Projects (HTML5, CSS3, JS, Bootstrap)</span>
                  <span className="font-mono text-xs text-ink-muted font-normal">github.com/JeslynS744/internship_projects</span>
                </div>
                <p className="text-ink-muted mt-0.5">
                  Collection of responsive frontend architectures and web platforms engineered during industry internship, including digital systems like Tyeel.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Education
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-canvas-subtle p-4 rounded-xl border border-ink-border">
                <h3 className="font-bold text-black text-sm">MSc in Data Science</h3>
                <p className="text-xs text-ink-muted mt-1">KPR College of Arts, Science and Research</p>
                <p className="text-xs text-black font-mono mt-2">Bharathiar University | July 2026</p>
              </div>

              <div className="bg-canvas-subtle p-4 rounded-xl border border-ink-border">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-black text-sm">BSc in Computer Systems &amp; Design</h3>
                  <span className="text-xs font-bold text-black bg-white border border-ink-border px-2 py-0.5 rounded">CGPA 9.27</span>
                </div>
                <p className="text-xs text-ink-muted mt-1">PSG College of Technology (Anna Univ.)</p>
                <p className="text-xs text-black font-semibold mt-2">🏆 Best Outgoing Student (2025 Batch)</p>
              </div>
            </div>
          </div>

          {/* Key Skills & Honors */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" /> Technical Stack
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'C#', 'WPF', 'Python', 'Machine Learning', 'SQL Server', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Docker', 'Power BI', 'C++', 'PHP'].map((skill) => (
                  <span key={skill} className="text-xs bg-canvas-subtle text-black px-2.5 py-1 rounded-md border border-ink-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Honors &amp; Certifications
              </h2>
              <ul className="text-xs text-ink-muted space-y-1.5">
                <li className="font-bold text-black">🏆 Best Outgoing Student of CSD (2025 Batch) - PSG Tech</li>
                <li>• Figma UI/UX Design (Udemy)</li>
                <li>• Full Stack Development (Intern Ezy)</li>
                <li>• Child Psychology Certification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 border-t border-ink-border bg-canvas-subtle flex items-center justify-between text-xs text-ink-muted print:hidden">
          <span>Verified Off-White Resume Document</span>
          <button onClick={onClose} className="text-black font-bold hover:underline">
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
