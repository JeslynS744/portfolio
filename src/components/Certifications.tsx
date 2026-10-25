'use client';

import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, FolderArchive, ArrowRight } from 'lucide-react';
import CertificateVaultModal from '@/components/CertificateVaultModal';
import { CertificateDoc } from '@/app/api/certificates/route';

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

  return (
    <section id="certifications" className="py-24 relative bg-canvas-subtle border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black text-xs font-mono font-semibold border border-ink-border">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Certificate &amp; Document Vault
          </h2>
          <p className="text-ink-muted text-base">
            Verified academic honors, technical certifications, and official credentials preserved in an interactive digital archive.
          </p>
        </div>

        {/* Central Vault Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-ink-border shadow-xl bg-white relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Background subtle watermark / accent */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-canvas-subtle border border-ink-border/40 pointer-events-none flex items-center justify-center opacity-40">
              <ShieldCheck className="w-24 h-24 text-ink-muted/30" />
            </div>

            <div className="space-y-4 max-w-xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-canvas-subtle border border-ink-border text-xs font-mono font-semibold text-black">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Verified Repository</span>
                <span>•</span>
                <span>{documents.length} Documents</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Academic Honors &amp; Technical Credentials
              </h3>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Explore all verified credentials, academic leadership awards, and technical certifications inside the interactive document vault.
              </p>
            </div>

            {/* Action Button */}
            <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center sm:items-start md:items-end gap-3 relative z-10">
              <button
                onClick={() => setVaultOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-black hover:bg-neutral-800 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl group"
              >
                <FolderArchive className="w-5 h-5 text-white" />
                <span>Open Certificate Vault</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[11px] font-mono text-ink-muted">
                Interactive PDF preview &amp; download
              </span>
            </div>
          </div>
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

