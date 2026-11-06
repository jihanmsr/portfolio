import React, { useState } from 'react';
import { 
  Database, 
  Terminal, 
  Palette, 
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const TECH_CATEGORIES = [
  {
    id: 'data',
    title: 'Data Analytics & Statistik',
    icon: Database,
    accent: 'bg-emerald-500/10 text-emerald-900 border-emerald-300',
    skills: [
      {
        name: 'Python',
        icon: '🐍',
        level: 'Advanced',
        focus: 'Data Analysis, Pandas, NumPy, Scraper, ETL'
      },
      {
        name: 'R Statistics',
        icon: '📊',
        level: 'Advanced',
        focus: 'Pemodelan Statistik, Ekonometrika, ggplot2'
      },
      {
        name: 'SQL (PostgreSQL / MySQL)',
        icon: '🗄️',
        level: 'Advanced',
        focus: 'Relational Joins, Window Functions, Agregasi'
      },
      {
        name: 'SPSS',
        icon: '📈',
        level: 'Expert',
        focus: 'Uji Validitas, Reliabilitas, Regresi Terapan'
      }
    ]
  },
  {
    id: 'web',
    title: 'Web, Otomasi & AI',
    icon: Terminal,
    accent: 'bg-amber-500/10 text-amber-900 border-amber-300',
    skills: [
      {
        name: 'JavaScript / Node.js',
        icon: '⚡',
        level: 'Proficient',
        focus: 'Full-Stack Web, CDP Browser Automation'
      },
      {
        name: 'Next.js & React 19',
        icon: '⚛️',
        level: 'Production',
        focus: 'App Router, Integrasi AI Gemini, Prisma'
      },
      {
        name: 'Tailwind CSS',
        icon: '🌊',
        level: 'Expert',
        focus: 'Responsive Layout, Glassmorphism, UI Grid'
      },
      {
        name: 'PHP',
        icon: '🐘',
        level: 'Proficient',
        focus: 'Backend REST API, Server-Side Endpoints'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Desain & Workflow',
    icon: Palette,
    accent: 'bg-purple-500/10 text-purple-900 border-purple-300',
    skills: [
      {
        name: 'Figma UI/UX',
        icon: '🎨',
        level: 'Expert',
        focus: 'Design System, Wireframe, Usability Testing'
      },
      {
        name: 'Canva Pro',
        icon: '✨',
        level: 'Expert',
        focus: 'Visual Communication, Publikasi Data BPS'
      },
      {
        name: 'Git & GitHub',
        icon: '🐙',
        level: 'Daily Tool',
        focus: 'Version Control, GitHub Actions CI/CD'
      },
      {
        name: 'C / C++',
        icon: '⚙️',
        level: 'Academic Core',
        focus: 'Fondasi Struktur Data & Algoritma STIS'
      }
    ]
  }
];

export default function TechStackTicker() {
  return (
    <section className="relative z-10 py-14 px-6 max-w-6xl mx-auto" id="tech-stack">
      {/* Section Header - Formal & Ringkas */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#e2ddd0] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-200/80 border border-stone-300 text-stone-800 text-[11px] font-mono font-semibold tracking-wider uppercase mb-2">
            <Cpu className="w-3.5 h-3.5 text-stone-700" />
            <span>Keahlian & Alat Kerja Teknis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Tech Stack & Instrumen Analisis
          </h2>
        </div>
        <p className="text-stone-600 text-xs sm:text-sm max-w-md md:text-right leading-relaxed font-normal">
          Instrumen komputasi dan metodologi yang diaplikasikan untuk riset data statistik, rekayasa otomasi web, serta perancangan produk digital.
        </p>
      </div>

      {/* Compact Bento Grid: 3 Clean Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TECH_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className="p-5 rounded-2xl bg-white border border-[#e2ddd0] shadow-xs flex flex-col justify-between hover:border-stone-400 transition-all"
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-stone-100 text-stone-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 font-semibold">
                    4 Tools
                  </span>
                </div>

                {/* Skills List in Compact Rows */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-stone-50/70 border border-stone-200/70 hover:bg-stone-100/80 hover:border-stone-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="text-xs font-bold text-stone-900">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">
                          {skill.level}
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-600 pl-6 leading-tight">
                        {skill.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
