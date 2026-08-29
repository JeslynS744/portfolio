'use client';

import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'info' | 'warning';
  title: string;
  message?: string;
  onClose: () => void;
}

export default function Toast({ type, title, message, onClose }: ToastProps) {
  const iconMap = {
    success: <CheckCircle2 className="w-5 h-5 text-black shrink-0" />,
    info: <Info className="w-5 h-5 text-black shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-black shrink-0" />,
  };

  return (
    <div
      className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-ink-border bg-white text-ink shadow-xl transition-all"
    >
      {iconMap[type]}
      <div className="flex-1 pr-2">
        <h4 className="font-bold text-sm leading-snug text-black">{title}</h4>
        {message && <p className="text-xs text-ink-muted mt-1">{message}</p>}
      </div>
      <button
        onClick={onClose}
        className="text-ink-muted hover:text-black transition-colors p-1 rounded-md hover:bg-canvas-subtle"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
