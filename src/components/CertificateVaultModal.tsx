'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, FileText, Download, ExternalLink, ShieldCheck, Eye, FolderArchive, ArrowLeft, RefreshCw, Sparkles, AlertCircle } from 'lucide-react';
import { CertificateDoc } from '@/app/api/certificates/route';

interface CertificateVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: CertificateDoc[];
  onRefresh: () => void;
  loading: boolean;
}

export default function CertificateVaultModal({
  isOpen,
  onClose,
  documents,
  onRefresh,
  loading,
}: CertificateVaultModalProps) {
  const [selectedDoc, setSelectedDoc] = useState<CertificateDoc | null>(
    documents.length > 0 ? documents[0] : null
  );

  if (!isOpen) return null;

  const currentDoc = selectedDoc || (documents.length > 0 ? documents[0] : null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-white border border-ink-border rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[94vh] flex flex-col text-ink animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Toolbar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-ink-border bg-canvas-subtle gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-black text-white">
              <FolderArchive className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider">
                  Certificate Document Vault
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-white border border-ink-border text-[10px] font-mono font-bold">
                  {documents.length} {documents.length === 1 ? 'file' : 'files'}
                </span>
              </div>
              <p className="text-[11px] text-ink-muted">
                Auto-syncing directory from <code className="font-mono bg-canvas px-1 rounded">certificates/</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-ink-muted hover:text-black hover:bg-canvas text-xs font-semibold border border-ink-border transition-colors disabled:opacity-50"
              title="Refresh Vault"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            {currentDoc && (
              <a
                href={currentDoc.url}
                download={currentDoc.filename}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download File</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-ink-muted hover:text-black hover:bg-canvas rounded-lg transition-colors border border-ink-border ml-1"
              aria-label="Close vault"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        {documents.length === 0 ? (
          <div className="p-12 text-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-canvas-subtle border border-ink-border flex items-center justify-center mx-auto text-black">
              <FolderArchive className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-black">Your Certificate Vault is Ready!</h4>
            <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
              Whenever you have certificate PDFs or images, simply copy and paste them into the <strong className="text-black font-mono">certificates/</strong> folder. Any filename works, and they will automatically appear here!
            </p>
            <div className="p-3 bg-canvas-subtle rounded-xl border border-ink-border max-w-md mx-auto text-left text-xs text-ink-muted space-y-1">
              <span className="font-bold text-black block">Supported Formats:</span>
              <p>• PDF (.pdf), PNG (.png), JPEG (.jpg, .jpeg), WebP (.webp)</p>
              <p>• No coding or specific naming rules required.</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden max-h-[80vh]">
            {/* Left Sidebar: File List */}
            <div className="w-full md:w-80 border-r border-ink-border bg-canvas-subtle p-4 overflow-y-auto space-y-2 shrink-0">
              <span className="text-[11px] font-mono font-bold text-ink-muted uppercase tracking-wider block px-2 pb-1">
                Attached Certificates
              </span>
              {documents.map((doc) => {
                const isSelected = currentDoc?.filename === doc.filename;
                return (
                  <button
                    key={doc.filename}
                    onClick={() => setSelectedDoc(doc)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-white text-black border-ink-border hover:border-black'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-canvas-subtle text-black'}`}>
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="text-xs font-bold truncate leading-tight">
                        {doc.title}
                      </h5>
                      <div className="flex items-center gap-2 mt-1 text-[10px] opacity-80 font-mono">
                        <span className="px-1.5 py-0.2 rounded bg-black/10 text-current font-bold uppercase">
                          {doc.ext}
                        </span>
                        <span>{(doc.sizeBytes / 1024).toFixed(0)} KB</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Main Viewer: Live Preview */}
            <div className="flex-1 p-4 sm:p-6 bg-canvas flex flex-col overflow-hidden">
              {currentDoc && (
                <div className="flex-1 flex flex-col space-y-3 overflow-hidden">
                  <div className="flex items-center justify-between gap-4 pb-2 border-b border-ink-border">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-black truncate">
                        {currentDoc.title}
                      </h4>
                      <p className="text-xs text-ink-muted font-mono">{currentDoc.filename}</p>
                    </div>
                    <a
                      href={currentDoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-ink-border text-xs font-bold text-black hover:bg-canvas-subtle flex items-center gap-1.5 shrink-0"
                    >
                      <span>Open in New Tab</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Document Render: PDF or Image */}
                  <div className="flex-1 rounded-xl border border-ink-border bg-white overflow-hidden flex items-center justify-center relative min-h-[350px]">
                    {currentDoc.isPdf ? (
                      <iframe
                        src={`${currentDoc.url}#toolbar=1&navpanes=0`}
                        className="w-full h-full border-none"
                        title={currentDoc.title}
                      />
                    ) : (
                      <div className="relative w-full h-full p-4 flex items-center justify-center">
                        <Image
                          src={currentDoc.url}
                          alt={currentDoc.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-ink-border bg-canvas-subtle flex items-center justify-between text-xs text-ink-muted">
          <span>💡 Simply drop any PDF or image into <code className="font-mono text-black font-semibold">certificates/</code> to add more!</span>
          <button
            onClick={onClose}
            className="px-4 py-1 rounded-lg bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
          >
            Close Vault
          </button>
        </div>
      </div>
    </div>
  );
}
