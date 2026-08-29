'use client';

import React, { useState } from 'react';
import { Layout, Code2, Database, Brain, Wrench, HeartHandshake, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    {
      id: 'web',
      title: 'Web Development',
      icon: Layout,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', '.NET', 'Bootstrap'],
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'C', 'C#'],
    },
    {
      id: 'datascience',
      title: 'Data Science & ML',
      icon: Brain,
      skills: ['Data Structures', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI Reporting', 'Predictive Modeling'],
    },
    {
      id: 'storage',
      title: 'Data Storage & Databases',
      icon: Database,
      skills: ['SQL Server', 'MySQL', 'SQLite', 'MongoDB (Atlas)'],
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: ['Docker', 'Figma', 'Git / GitHub'],
    },
    {
      id: 'interests',
      title: 'Areas of Interest',
      icon: HeartHandshake,
      skills: [
        'Data Analysis & Visualization',
        'Machine Learning & Predictive Modeling',
        'Front-End Development',
        'Cloud Computing',
        'UI/UX Design',
        'Behavioral Psychology',
      ],
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
            Technical Skills &amp; Competencies
          </h2>
          <p className="text-ink-muted text-base">
            Proficiencies across full-stack web engineering, programming languages, machine learning data pipelines, and database storage.
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
              All Skills
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
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-canvas-subtle border border-ink-border text-black">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-black">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-canvas-subtle text-black border border-ink-border hover:border-black transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
