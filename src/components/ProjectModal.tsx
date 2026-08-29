'use client';

import React from 'react';
import Image from 'next/image';
import { X, ExternalLink, Github, Layers, Code, CheckCircle, Cpu, ArrowLeft } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  image: string;
  githubUrl: string;
  deployUrl?: string;
  actionText: string;
  highlights: string[];
  architecture?: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white border border-ink-border rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-ink animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink-border bg-canvas-subtle">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-muted hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-ink-muted hover:text-black hover:bg-canvas rounded-lg transition-colors border border-ink-border"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-canvas-subtle border-b border-ink-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/95 text-black border border-ink-border shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[60vh] bg-white">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">{project.title}</h2>
            <p className="text-sm sm:text-base text-ink-muted mt-2 leading-relaxed">{project.summary}</p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-black font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-canvas-subtle text-black border border-ink-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-black font-bold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> Technical Highlights &amp; Deliverables
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ink-muted">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes */}
          {project.architecture && (
            <div className="space-y-3 bg-canvas-subtle p-4 rounded-xl border border-ink-border">
              <h4 className="text-xs uppercase tracking-wider text-black font-bold flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Architecture &amp; Implementation Notes
              </h4>
              <ul className="space-y-1.5 text-xs text-ink-muted">
                {project.architecture.map((arch, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-canvas-subtle border-t border-ink-border flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-canvas text-black font-semibold text-xs sm:text-sm border border-ink-border transition-colors"
          >
            <Github className="w-4 h-4" />
            View Repository
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-ink-muted hover:text-black text-xs sm:text-sm font-medium transition-colors"
            >
              Close
            </button>
            <a
              href={project.deployUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              <span>{project.deployUrl ? 'Open Live Demo' : project.actionText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
