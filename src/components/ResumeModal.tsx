'use client';

import React, { useState, useRef } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, BookOpen, Code, Award, FileText, ExternalLink, Eye } from 'lucide-react';
import { useApp } from '@/app/providers';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { showToast } = useApp();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'pdf' | 'web'>('pdf');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadToast = () => {
    showToast('Download Started', 'Jeslyn_Nivedhitha_S_Resume.pdf downloaded successfully.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-5xl bg-white border border-ink-border rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[94vh] flex flex-col print:max-h-none print:border-none print:shadow-none animate-fade-in text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Toolbar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-ink-border bg-canvas-subtle print:hidden gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black" />
              <span className="text-xs font-bold text-black uppercase tracking-wider font-mono">
                Jeslyn_Nivedhitha_S_Resume.pdf
              </span>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 bg-white border border-ink-border rounded-lg text-xs font-semibold">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${viewMode === 'pdf'
                    ? 'bg-black text-white'
                    : 'text-ink-muted hover:text-black'
                  }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
              <button
                onClick={() => setViewMode('web')}
                className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${viewMode === 'web'
                    ? 'bg-black text-white'
                    : 'text-ink-muted hover:text-black'
                  }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Readable Web</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="/resume/Jeslyn_Nivedhitha_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-ink-muted hover:text-black hover:bg-canvas text-xs font-semibold border border-ink-border transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Tab</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-ink-muted hover:text-black hover:bg-canvas text-xs font-semibold border border-ink-border transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href="/resume/Jeslyn_Nivedhitha_S_Resume.pdf"
              download="Jeslyn_Nivedhitha_S_Resume.pdf"
              onClick={handleDownloadToast}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-ink-muted hover:text-black hover:bg-canvas rounded-lg transition-colors border border-ink-border ml-1"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF or Web Resume View */}
        {viewMode === 'pdf' ? (
          <div className="flex-1 w-full h-[78vh] bg-canvas-subtle flex flex-col items-center justify-center p-2 sm:p-4">
            <iframe
              src="/resume/Jeslyn_Nivedhitha_S_Resume.pdf#toolbar=1&navpanes=0"
              className="w-full h-full rounded-xl border border-ink-border shadow-sm bg-white"
              title="Jeslyn Nivedhitha S Resume PDF"
            />
          </div>
        ) : (
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
                Summary
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
                MSc Data Science candidate at KPR College of Arts, Science and Research, focusing on machine learning, statistical analysis, and data-driven problem solving. Brings a strong technical foundation from 1 year of prior software development experience, with working knowledge of SQL and databases. Passionate about applying data science and analytics to build intelligent, data-driven solutions.
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
                    <span>Software Engineer — Light Mechanics, Bengaluru</span>
                    <span className="font-mono text-xs text-ink-muted font-normal">June, 2025 – July, 2026</span>
                  </div>
                  <p className="text-ink-muted mt-1">
                    Developed laser solution applications for SPMs, optimized seamless communication between software interfaces, database, PLC and third party MES platforms.
                  </p>
                </div>

                <div className="border-l-2 border-ink-border pl-4 space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Web Design Intern — Team Tweaks Technologies, Chennai</span>
                    <span className="font-mono text-xs text-ink-muted font-normal">Jun 2024 – Jul 2024</span>
                  </div>
                  <p className="text-ink-muted mt-1">
                    Designed a responsive frontend for Tyeel (farmers' platform) using HTML5, CSS, Bootstrap, JavaScript.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 flex items-center gap-2">
                <Code className="w-4 h-4" /> Projects
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between font-bold text-black">
                    <span>Rapid-Remit</span>
                    <span className="font-mono text-xs text-ink-muted font-normal">PHP &amp; PDO</span>
                  </div>
                  <p className="text-ink-muted mt-0.5">
                    Built a full-stack currency remittance platform using PHP and PDO with dual-database support with SQLite fallback for cloud deployment, integrating a real-time exchange rate API.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-black">
                    <span>WorkforcePulse</span>
                    <span className="font-mono text-xs text-ink-muted font-normal">React, Node.js, MongoDB, Docker</span>
                  </div>
                  <p className="text-ink-muted mt-0.5">
                    Developed a full-stack workforce analytics dashboard using React, Node.js/Express, and MongoDB, with Docker-based containerization.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-black">
                    <span>Student CBT Distortion Analytics</span>
                    <span className="font-mono text-xs text-ink-muted font-normal">Machine Learning &amp; Mental Health</span>
                  </div>
                  <p className="text-ink-muted mt-0.5">
                    Applied machine learning to identify cognitive distortion patterns in students for early mental health risk screening, informing recommendations like automated campus screening and CBT-based intervention design.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Education
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-canvas-subtle p-4 rounded-xl border border-ink-border">
                  <h3 className="font-bold text-black">KPR College of Arts, Science and Research</h3>
                  <p className="text-xs text-ink-muted">MSc in Data Science • Bharathiar University</p>
                  <p className="text-xs text-black font-mono mt-1">July, 2026 | Coimbatore, India</p>
                </div>

                <div className="bg-canvas-subtle p-4 rounded-xl border border-ink-border">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-black">PSG College of Technology</h3>
                    <span className="text-xs font-bold text-black bg-white border border-ink-border px-2 py-0.5 rounded">CGPA 9.24</span>
                  </div>
                  <p className="text-xs text-ink-muted">BSc in Computer Systems &amp; Design • Anna University</p>
                  <p className="text-xs text-black font-mono mt-1">June, 2025 | Coimbatore, India</p>
                </div>

                <div className="bg-canvas-subtle p-3 rounded-xl border border-ink-border">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-black text-xs">Carmel Garden Matriculation HSS</h3>
                    <span className="text-xs font-mono font-bold">95.16%</span>
                  </div>
                  <p className="text-[11px] text-ink-muted">HSC • State Board | May, 2022</p>
                </div>

                <div className="bg-canvas-subtle p-3 rounded-xl border border-ink-border">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-black text-xs">St. Joseph's Matriculation HSS</h3>
                    <span className="text-xs font-mono font-bold">85.6%</span>
                  </div>
                  <p className="text-[11px] text-ink-muted">SSLC • State Board | March, 2020</p>
                </div>
              </div>
            </div>

            {/* Technical Skills & Certificates */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" /> Technical Skills
                </h2>
                <div className="space-y-2 text-xs text-ink-muted">
                  <p><strong className="text-black">Web Dev:</strong> HTML, CSS, JavaScript, React, .NET</p>
                  <p><strong className="text-black">Languages:</strong> Python, C, C#</p>
                  <p><strong className="text-black">Data Science &amp; ML:</strong> Data structures, Pandas, NumPy, Matplotlib, Power BI Reporting</p>
                  <p><strong className="text-black">Data Storage:</strong> SQL server, MySQL, SQLite, MongoDB(Atlas)</p>
                  <p><strong className="text-black">Tools:</strong> Docker, Figma</p>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase text-black border-b border-ink-border pb-1 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Certificates &amp; Achievements
                </h2>
                <ul className="text-xs text-ink-muted space-y-1.5">
                  <li className="font-bold text-black">🏆 Best Outgoing Student of CSD 2025 Batch at PSG Tech</li>
                  <li>• Infosys Springboard Certification on Data Science and Data Structures &amp; Algorithms</li>
                  <li>• Figma UI/UX Design - Udemy</li>
                  <li>• Full Stack Development - InternEzy</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="px-6 py-3.5 border-t border-ink-border bg-canvas-subtle flex items-center justify-between text-xs text-ink-muted print:hidden">
          <span>Verified Document • Resume Folder Sync Active</span>
          <a
            href="/resume/Jeslyn_Nivedhitha_S_Resume.pdf"
            download="Jeslyn_Nivedhitha_S_Resume.pdf"
            className="text-black font-bold hover:underline flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
