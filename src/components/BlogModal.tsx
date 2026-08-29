'use client';

import React from 'react';
import { X, Calendar, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { useApp } from '@/app/providers';

import Image from 'next/image';

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image?: string;
  tags: string[];
  linkedInUrl?: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: {
        language: string;
        code: string;
      };
    }[];
    conclusion: string;
  };
}

interface BlogModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export default function BlogModal({ article, onClose }: BlogModalProps) {
  const { showToast } = useApp();

  if (!article) return null;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Article link copied to clipboard.', 'info');
    }
  };

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
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-ink-muted hover:text-black hover:bg-canvas rounded-lg transition-colors border border-ink-border"
              title="Share Article Link"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-ink-muted hover:text-black hover:bg-canvas rounded-lg transition-colors border border-ink-border"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Reading Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white">
          {/* Article Header */}
          <div className="border-b border-ink-border pb-8 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
              <span className="px-2.5 py-0.5 rounded bg-canvas-subtle text-black font-semibold border border-ink-border">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Optional Banner Image */}
            {article.image && (
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-canvas-subtle border border-ink-border shadow-sm my-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
              {article.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded text-xs font-mono bg-canvas-subtle text-ink-muted border border-ink-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-sm sm:text-base text-ink leading-relaxed font-normal">
            <p className="text-base sm:text-lg font-medium text-black leading-relaxed">
              {article.content.intro}
            </p>

            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3 pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-ink-muted whitespace-pre-line leading-relaxed">
                  {section.body}
                </p>

                {section.codeSnippet && (
                  <div className="my-4 rounded-xl bg-canvas-subtle border border-ink-border overflow-hidden">
                    <div className="px-4 py-2 bg-canvas border-b border-ink-border flex justify-between items-center text-xs font-mono text-ink-muted">
                      <span>{section.codeSnippet.language}</span>
                      <span>Snippet</span>
                    </div>
                    <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto text-black leading-relaxed">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="p-6 bg-canvas-subtle border border-ink-border rounded-xl space-y-2 mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Key Takeaways
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-4 border-t border-ink-border bg-canvas-subtle flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted">
          <span>Author: Jeslyn Nivedhitha S</span>
          <div className="flex items-center gap-2">
            {article.linkedInUrl && (
              <a
                href={article.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-lg bg-white border border-ink-border text-black font-bold hover:bg-canvas transition-colors flex items-center gap-1.5"
              >
                <span>Read on LinkedIn</span>
                <Share2 className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white font-bold transition-colors"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
