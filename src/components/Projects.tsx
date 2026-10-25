'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Code2, ArrowUpRight } from 'lucide-react';
import ProjectModal, { ProjectData } from '@/components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projectsList: ProjectData[] = [
    {
      id: 'datascribe',
      title: 'DataScribe – Conversational AI & Natural Language Database Analytics',
      category: 'AI Engineering & Conversational Analytics',
      tags: ['Python', 'Streamlit', 'Groq LLM', 'Text-to-SQL', 'SQLite', 'Voice AI', 'Data Viz'],
      summary:
        'Intelligent AI-powered conversational database engine enabling voice and natural language queries, automated schema inspection, dynamic SQL generation via Groq LLM, and real-time visualization.',
      image: '/images/datascribe.jpg',
      githubUrl: 'https://github.com/JeslynS744/DataScribe',
      deployUrl: 'https://datascribe-dthr.onrender.com',
      actionText: 'Live Demo',
      highlights: [
        'Integrated Groq LLM API for low-latency natural language to executable SQL query generation.',
        'Built speech-to-text voice query interface with dynamic schema parsing and multi-database connectivity.',
        'Engineered automated query validation pipelines ensuring safe execution across relational databases.',
        'Implemented dynamic visualization engine auto-generating charts from query result sets.',
      ],
      architecture: [
        'Frontend & UI: Streamlit + Responsive Theme Architecture',
        'AI Engine: Groq LLM (High-throughput Text-to-SQL & NL Engine)',
        'Database & Execution: SQLite / Relational Engine + Voice Input Widget',
        'Live Deployment: Render Cloud (datascribe-dthr.onrender.com)',
      ],
    },
    {
      id: 'scrubbai',
      title: 'ScrubbAI – Intelligent Automated Data Cleaning Platform',
      category: 'Data Engineering & AI Automation',
      tags: ['Python', 'Streamlit', 'Pandas', 'Data Cleaning', 'Scikit-Learn', 'Feature Engineering'],
      summary:
        'Automated data preprocessing suite utilizing statistical intelligence and heuristics to cleanse messy datasets, handle missing values, detect outliers, and profile column distributions.',
      image: '/images/scrubbai.jpg',
      githubUrl: 'https://github.com/JeslynS744/ScrubbAI',
      deployUrl: 'https://scrubbai-blwmekdubt2ngr8xmj6akd.streamlit.app/',
      actionText: 'Live Demo',
      highlights: [
        'Developed automated statistical profiling pipelines identifying missing values, skewness, and duplicates.',
        'Implemented smart imputation algorithms (mean, median, mode, KNN) and adaptive outlier filtering.',
        'Created interactive web interface on Streamlit with instantaneous tabular previews and downloadable clean datasets.',
        'Built dataset health scoring algorithm providing overall quality indicators and data integrity metrics.',
      ],
      architecture: [
        'App Framework: Streamlit Community Cloud',
        'Processing Engine: Pandas, NumPy & Scikit-Learn',
        'Data Pipeline: Automated Imputation, Deduplication & Type Casting',
        'Live Deployment: Streamlit Cloud (scrubbai-blwmekdubt2ngr8xmj6akd.streamlit.app)',
      ],
    },
    {
      id: 'wine-qt',
      title: 'WineQT – Wine Quality Prediction & Physicochemical Analysis',
      category: 'Machine Learning & Predictive Modeling',
      tags: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-Learn', 'Random Forest', 'Render'],
      summary:
        'End-to-end predictive machine learning web application analyzing 11 physicochemical wine properties (acidity, alcohol, sulphates, pH) to classify and predict wine quality scores.',
      image: '/images/wine-qt.jpg',
      githubUrl: 'https://github.com/JeslynS744/Wine_QT',
      deployUrl: 'https://wine-qt.onrender.com',
      actionText: 'Live Demo',
      highlights: [
        'Trained and evaluated ensemble ML models (Random Forest, Gradient Boosting) achieving high predictive accuracy.',
        'Engineered feature correlation heatmaps and importance rankings to uncover key chemical quality drivers like alcohol and volatile acidity.',
        'Deployed interactive production inference app on Render with dynamic parameter sliders and real-time prediction dials.',
        'Integrated robust input validation and confidence score intervals for each prediction.',
      ],
      architecture: [
        'Model Architecture: Random Forest / Ensemble Classifiers via Scikit-Learn',
        'Interface: Streamlit Interactive UI with Matplotlib/Seaborn heatmaps',
        'Live Deployment: Render Cloud Web Service (wine-qt.onrender.com)',
      ],
    },
    {
      id: 'customer-segmentation',
      title: 'Customer Segmentation & RFM Behavioral Clustering',
      category: 'Machine Learning & Unsupervised Analytics',
      tags: ['Python', 'K-Means', 'RFM Analysis', 'Scikit-Learn', 'Customer Analytics', 'Seaborn'],
      summary:
        'Unsupervised machine learning system leveraging RFM (Recency, Frequency, Monetary) metrics and K-Means clustering to discover customer archetypes and optimize marketing strategies.',
      image: '/images/customer-segmentation.jpg',
      githubUrl: 'https://github.com/JeslynS744/Customer_segmentation',
      actionText: 'Project Details',
      highlights: [
        'Transformed transaction logs into multidimensional RFM matrices with logarithmic feature scaling.',
        'Applied Elbow Method and Silhouette Scoring to identify optimal cluster counts (k) for customer segmentation.',
        'Segmented users into distinct behavioral cohorts (Champions, Loyalists, Potential, At-Risk) with actionable insights.',
        'Built rich 2D/3D PCA visualization pipelines communicating cohort spending patterns and retention risks.',
      ],
      architecture: [
        'Algorithms: K-Means Clustering, PCA Dimensionality Reduction',
        'Libraries: Scikit-learn, Pandas, NumPy, Matplotlib & Seaborn',
        'Evaluation: Silhouette Analysis, Inertia Elbow Method, RFM Scoring',
      ],
    },
    {
      id: 'rapid-remit',
      title: 'Rapid Remit – International Banking & Remittance Platform',
      category: 'Full-Stack & Financial Architecture',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'ACID Transactions', 'Security'],
      summary:
        'Secure transactional remittance and banking portal featuring ACID-compliant ledger transactions, multi-currency processing, and administrative dashboards.',
      image: '/images/international-banking-system.png',
      githubUrl: 'https://github.com/JeslynS744/Rapid-Remit',
      deployUrl: 'https://rapid-remit.onrender.com/',
      actionText: 'Live Demo',
      highlights: [
        'Engineered ACID-compliant ledger transaction pipelines for high-reliability fund transfers.',
        'Implemented multi-role authentication (Admin vs. Customer) with encrypted password hashing and CSRF validation.',
        'Deployed live cloud instance on Render with relational database persistence.',
        'Interactive real-time transaction ledger simulation and downloadable account statements.',
      ],
      architecture: [
        'Backend: PHP 8 + Relational MySQL Database Engine',
        'Security: CSRF Tokens, Secure Sessions & Password Hashing',
        'Live Deployment: Render Cloud (rapid-remit.onrender.com)',
      ],
    },
    {
      id: 'student-cbt-distortion-analytics',
      title: 'Student CBT Distortion Analytics – ML Research',
      category: 'Machine Learning & Cognitive Science',
      tags: ['Python', 'Machine Learning', 'PCA', 'K-Means', 'Scikit-Learn', 'CBT Analysis'],
      summary:
        'Final year research project applying unsupervised Machine Learning, PCA dimensionality reduction, and K-Means clustering to analyze student cognitive behavioral distortions.',
      image: '/images/cognitive-behavioral-ml.png',
      githubUrl: 'https://github.com/JeslynS744/student-cbt-distortion-analytics',
      actionText: 'Research Details',
      highlights: [
        'Conducted psychometric data clustering on student survey responses using unsupervised K-Means and Silhouette Analysis.',
        'Applied Principal Component Analysis (PCA) to compress high-dimensional feature vectors while preserving 86%+ variance.',
        'Extracted actionable student archetype clusters to inform proactive academic counseling.',
        'Developed evaluation metrics and visual clusters using Scikit-Learn, Matplotlib, and Seaborn.',
      ],
      architecture: [
        'Core Language: Python 3.10 + Jupyter Notebooks',
        'ML Frameworks: Scikit-learn, NumPy, Pandas, SciPy',
        'Visualizations: Seaborn & Matplotlib statistical plotting',
      ],
    },
    {
      id: 'internship-projects',
      title: 'Frontend Web Systems & Industry Internship Projects',
      category: 'Web Systems & UI Engineering',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'UI/UX', 'Responsive Design'],
      summary:
        'Collection of responsive frontend architectures and web platforms engineered during industry internship, including digital systems like Tyeel.',
      image: '/images/restaurant-management-cpp.png',
      githubUrl: 'https://github.com/JeslynS744/internship_projects',
      actionText: 'Project Details',
      highlights: [
        'Engineered responsive client interfaces for Tyeel, an innovative digital platform for farmers.',
        'Implemented cross-browser compatible layouts using semantic HTML5, modern CSS3, Bootstrap, and JavaScript.',
        'Collaborated with engineering teams to transform Figma wireframes into accessible, production-ready code.',
        'Conducted usability testing across mobile, tablet, and desktop breakpoints.',
      ],
      architecture: [
        'Technologies: HTML5, CSS3, JavaScript, Bootstrap',
        'Tooling: Git, Figma, Cross-Browser DevTools',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-canvas border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-subtle text-black text-xs font-mono font-semibold border border-ink-border">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Projects &amp; Technical Implementations
          </h2>
          <p className="text-ink-muted text-base">
            Showcase of deployed full-stack web platforms, machine learning research, financial systems, and frontend engineering.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div>
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-canvas-subtle border-b border-ink-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full bg-white/95 text-black border border-ink-border backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-bold text-black group-hover:underline transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-canvas-subtle text-black border border-ink-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-canvas-subtle border-t border-ink-border flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink-muted hover:text-black transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <div className="flex items-center gap-2">
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black border border-ink-border text-xs sm:text-sm font-bold hover:bg-canvas transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
