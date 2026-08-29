'use client';

import React, { useState } from 'react';
import { Layout, Server, Database, Cloud, Brain, CheckCircle, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend & UI/UX',
      icon: Layout,
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'WPF', 'WinForms', 'Bootstrap', 'Tailwind CSS', 'Figma'],
    },
    {
      id: 'backend',
      title: 'Backend & Core Systems',
      icon: Server,
      skills: ['C#', 'Python', 'C', 'C++', 'PHP'],
    },
    {
      id: 'database',
      title: 'Databases & Relational Modeling',
      icon: Database,
      skills: ['Microsoft SQL Server', 'MongoDB', 'phpMyAdmin', 'Data Structures'],
    },
    {
      id: 'cloud',
      title: 'Cloud, ETL & Analytics',
      icon: Cloud,
      skills: ['Azure Data Factory', 'Azure Synapse Pipelines', 'MS Power BI', 'Recharts', 'Docker'],
    },
    {
      id: 'ml',
      title: 'Machine Learning & Automation',
      icon: Brain,
      skills: ['K-Means', 'Supervised Classification', 'Data Analytics', 'Industrial PLC / SPM Integration'],
    },
  ];

  const filteredCategories =
    activeTab === 'all' ? categories : categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-canvas-subtle border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black text-xs font-mono font-semibold border border-ink-border">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="text-ink-muted text-base">
            Structured skill stack spanning full-stack web architectures, industrial laser automation, database modeling, and ML data pipelines.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-ink-muted hover:text-black border border-ink-border'
              }`}
            >
              All Domains
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white text-ink-muted hover:text-black border border-ink-border'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-canvas-subtle border border-ink-border text-black">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-black">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-canvas-subtle border border-ink-border text-black text-xs font-medium"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ink-border text-[11px] text-ink-muted font-mono flex items-center justify-between">
                  <span>{cat.skills.length} Competencies</span>
                  <span className="text-black font-bold">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
