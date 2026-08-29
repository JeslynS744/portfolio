'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, CheckCircle, Sparkles, Linkedin } from 'lucide-react';
import { useApp } from '@/app/providers';

export default function Contact() {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Missing Fields', 'Please fill in all required fields.', 'warning');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/jeslynnivedhitha@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject ? `[Portfolio] ${formData.subject}` : `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        showToast('Message Sent', 'Your message has been sent directly to Jeslyn\'s inbox.', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback standard mail submission
        window.location.href = `mailto:jeslynnivedhitha@gmail.com?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        setSubmitted(true);
        showToast('Mail Client Opened', 'Opening your mail client to complete the message.', 'info');
      }
    } catch {
      // Offline / network fallback to mailto
      window.location.href = `mailto:jeslynnivedhitha@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      setSubmitted(true);
      showToast('Mail Client Opened', 'Opening your mail client to complete sending.', 'info');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-canvas-subtle border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black text-xs font-mono font-semibold border border-ink-border">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Get in Touch
          </h2>
          <p className="text-ink-muted text-base">
            Whether you have an engineering opportunity, a research query, or want to discuss technical architectures.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-black flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-black" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:jeslynnivedhitha@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-canvas-subtle border border-ink-border hover:border-black transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-white border border-ink-border text-black">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-ink-muted block">Direct Email</span>
                    <span className="text-sm font-bold text-black truncate block">
                      jeslynnivedhitha@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919487534297"
                  className="flex items-start gap-4 p-4 rounded-xl bg-canvas-subtle border border-ink-border hover:border-black transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-white border border-ink-border text-black">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-ink-muted block">Phone Number</span>
                    <span className="text-sm font-bold text-black">
                      +91-9487534297
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jeslyn-nivedhitha-410701249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-canvas-subtle border border-ink-border hover:border-black transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-white border border-ink-border text-black">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-ink-muted block">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-black truncate block">
                      jeslyn-nivedhitha-410701249
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-canvas-subtle border border-ink-border">
                  <div className="p-3 rounded-lg bg-white border border-ink-border text-black">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-ink-muted block">Location</span>
                    <span className="text-sm font-bold text-black">Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Message Sent!</h3>
                  <p className="text-sm text-ink-muted max-w-md mx-auto">
                    Thank you for reaching out. Jeslyn Nivedhitha S will review your note and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-black mb-2">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black mb-1.5">
                        Your Name <span className="text-black">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Chen"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-subtle border border-ink-border text-black text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black mb-1.5">
                        Email Address <span className="text-black">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-subtle border border-ink-border text-black text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / Inquiries"
                      className="w-full px-4 py-3 rounded-xl bg-canvas-subtle border border-ink-border text-black text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black mb-1.5">
                      Message <span className="text-black">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note or technical inquiry here..."
                      className="w-full px-4 py-3 rounded-xl bg-canvas-subtle border border-ink-border text-black text-sm focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
