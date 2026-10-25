'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Calendar, Clock, ArrowRight, ExternalLink, Linkedin, Sparkles } from 'lucide-react';
import BlogModal, { BlogArticle } from '@/components/BlogModal';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const articles: BlogArticle[] = [
    {
      id: 'grokking-training-model-past-done',
      title: 'Grokking: What happens when you train a model past “Done”',
      category: 'Machine Learning & Deep Learning Insights',
      date: 'Featured Essay',
      readTime: '4 min read',
      image: '/images/blog_2.jpg',
      summary:
        'Nobody sits a toddler down with a grammar book. Eventually, the word becomes instinct rather than an echo. In machine learning, that breakthrough is called grokking — what happens when a model trains past 100% memorization and unlocks true generalization.',
      tags: ['Grokking', 'MachineLearning', 'TechReflections', 'StudentJourney'],
      linkedInUrl: 'https://www.linkedin.com/in/jeslyn-nivedhitha-410701249/',
      content: {
        intro:
          'Nobody sits a toddler down with a grammar book. They just hear the word "more." A second strawberry at snack time. Another push on the swing. An encore of their favourite song.\n\nAt first, they just parrot the sound. But eventually, a quiet shift happens. Without anyone defining the term, the child connects the dots. The word becomes an instinct rather than an echo. In machine learning, that breakthrough is called grokking.',
        sections: [
          {
            heading: '1. The Eager Imitator vs. True Understanding',
            body:
              'When an AI model trains, it usually starts out as an eager imitator. It\'s like following a recipe to the letter. You know how to bake a cake if you have every exact ingredient in front of you. But the moment you run out of an ingredient, you can\'t adapt, because you learned a checklist instead of the art of cooking.\n\nThe model can repeat what it saw in its training data, but it doesn\'t actually understand the task.',
          },
          {
            heading: '2. The Overfitting Myth & The Unexpected Breakthrough',
            body:
              'For years, researchers assumed that was pretty much the ceiling: feed a network data, watch it memorize the answers and stop training once it hits 100% accuracy. Continuing past that point was considered a recipe for overfitting.\n\nThen, researchers noticed something strange. If they kept running the training process for thousands of extra steps, long after the model had already memorized every piece of training data, the network suddenly underwent a quiet revolution. Out of nowhere, its ability to solve brand new, unseen problems shot from zero to near-perfect. The computer had stopped cramming for the test and finally learned the subject.',
          },
          {
            heading: '3. Stranger in a Strange Land',
            body:
              'The word itself comes from Robert Heinlein\'s sci-fi classic, Stranger in a Strange Land, where "grok" means to understand something so intuitively that it merges with who you are.\n\nMachine learning adopted it because no other word quite captured that sudden leap from exhaustive search to genuine intuition.',
          },
          {
            heading: '4. Two Distinct Waves of Learning',
            body:
              'This changes how we think about building AI. Memorization and true understanding are not the same thing. They happen in distinct waves.\n\nA model has to chew through the raw facts first, but if you let it sit with the problem long enough, it can discard the clutter and lock onto the underlying rule.',
          },
        ],
        conclusion:
          'Sometimes, real learning only begins after you think you\'re already done.',
      },
    },
    {
      id: 'nursery-and-data-science',
      title: 'What a Nursery Taught Me About Data Science?',
      category: 'Data Science & Perspective',
      date: 'Featured Essay',
      readTime: '3 min read',
      image: '/images/blog_1.jpg',
      summary:
        'When you walk into a nursery, you see building blocks scattered, finger paints splashed, soft toys tossed, and sudden bursts of chaos. Watching a caretaker transform that whirlwind into structure reveals precisely what data science is to the digital world.',
      tags: ['DataScience', 'TechReflections', 'Perspective', 'StudentJourney'],
      linkedInUrl: 'https://lnkd.in/p/gvdMrniQ',
      content: {
        intro:
          'When you walk into a nursery, what do you see? Building blocks scattered across the floor, finger paints splashed, soft toys tossed, with sudden bursts of laughter and spontaneous tantrums. It looks chaotic, messy and completely overwhelming. This is simply the natural, inevitable state of a lively room.\n\nWith patience and intent, the caretaker steps in — they calm the room, soothe the tantrums, feed the little ones and organize the scattered blocks neatly. The chaos turns into structure. The noise turns into a clear, functioning environment where everyone gets what they need. That is precisely what data science is to the digital world.',
        sections: [
          {
            heading: '1. Finding Meaning in the Whirlwind',
            body:
              'I’ve always had a soft spot for kids — their unfiltered energy, their curiosity and even their messiness. Watching a good caretaker turn that whirlwind into order has always fascinated me. And as I step into a deeper chapter of technical and academic study, I realized that this is the very dynamic that drew me to data science.\n\nWhile most people explain data through corporate dashboards and stock charts, I find its true purpose is much better captured by everyday life and human care.',
          },
          {
            heading: '2. Raw Data as Scattered Building Blocks',
            body:
              'Raw data is like the scattered blocks in the play area. Every action we take leaves behind a scattered trail. Just having a room full of blocks doesn’t build a tower — someone has to sort them by shape and size first.\n\nData science provides that cleanup crew, transforming disorganized raw facts into reliable information.',
          },
          {
            heading: '3. Calming the System & Resolving Real Friction',
            body:
              'Calming the system involves a caretaker not just tidying up for the sake of neatness but to ensure the children are fed, safe and happy. Similarly, data science isn\'t just about math equations or code for the sake of code. It uses that organized structure to resolve real friction points.\n\nJust like clearing sharp toys from the nursery floor to stop a fall, anomaly detection algorithms spot hidden risks — from machine defects to irregular vitals — before failure occurs.',
          },
          {
            heading: '4. Shifting from Hindsight to Foresight',
            body:
              'The caretaker analyses the patterns of a child’s discomfort for anticipating the next tantrums before it happens by observing a rub of an eye or a missed nap schedule.\n\nSimilarly, data science learns the patterns underneath the noise to forecast what comes next, shifting systems from hindsight to foresight.',
          },
        ],
        conclusion:
          'And perhaps that is what draws me to data science most: the ability to find meaning in the mess, anticipate what comes next and quietly make things work a little better.',
      },
    },
  ];

  return (
    <section id="blog" className="py-24 relative bg-canvas border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-subtle text-black text-xs font-mono font-semibold border border-ink-border">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Publications &amp; Writing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Featured Essays &amp; Reflections
          </h2>
          <p className="text-ink-muted text-base">
            Reflections on data science, machine learning research, and human-centric systems.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <div
              key={article.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Cover Image */}
              {article.image && (
                <div 
                  onClick={() => setSelectedArticle(article)}
                  className="relative h-60 sm:h-72 w-full overflow-hidden bg-canvas-subtle border-b border-ink-border cursor-pointer group"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/95 text-black border border-ink-border backdrop-blur-md shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted">
                  <div className="flex items-center gap-3 font-mono">
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
                  <span className="flex items-center gap-1 text-black font-semibold text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => setSelectedArticle(article)}
                  className="text-xl sm:text-2xl font-bold text-black hover:underline cursor-pointer transition-colors leading-snug"
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                  {article.summary}
                </p>

                {/* Tags */}
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

              {/* Action Buttons */}
              <div className="px-6 sm:px-8 py-4 bg-canvas-subtle border-t border-ink-border flex flex-wrap items-center justify-between gap-3">
                {article.linkedInUrl && (
                  <a
                    href={article.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-ink-muted hover:text-black transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>View on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-all ml-auto"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <BlogModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
