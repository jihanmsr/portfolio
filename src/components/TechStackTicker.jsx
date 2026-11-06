import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Palette, 
  FileSpreadsheet, 
  GitBranch, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

const TECH_LANGUAGES = [
  {
    name: 'Python',
    category: 'data',
    level: 'Advanced',
    icon: '🐍',
    desc: 'Data Analysis, Pandas, NumPy, Scraper, Automation, ETL',
    tags: ['Pandas', 'NumPy', 'EDA', 'Scraping']
  },
  {
    name: 'R Statistics',
    category: 'data',
    level: 'Advanced',
    icon: '📊',
    desc: 'Pemodelan Statistik, Uji Hipotesis, Ekonometrika, ggplot2',
    tags: ['ggplot2', 'Regression', 'ANOVA', 'Time Series']
  },
  {
    name: 'SQL (PostgreSQL / MySQL)',
    category: 'data',
    level: 'Advanced',
    icon: '🗄️',
    desc: 'Komputasi Agregasi Database, Relational Joins, Window Functions',
    tags: ['PostgreSQL', 'MySQL', 'Complex Queries']
  },
  {
    name: 'JavaScript / Node.js',
    category: 'web',
    level: 'Proficient',
    icon: '⚡',
    desc: 'Full-Stack Web, CDP Browser Automation, Interactive Dashboards',
    tags: ['ES6+', 'Node.js', 'Vite', 'React']
  },
  {
    name: 'PHP',
    category: 'web',
    level: 'Proficient',
    icon: '🐘',
    desc: 'Backend Endpoint API, Server-Side Uploads, Database Handlers',
    tags: ['REST API', 'File Upload', 'Backend Logic']
  },
  {
    name: 'C / C++',
    category: 'core',
    level: 'Academic Core',
    icon: '⚙️',
    desc: 'Fondasi Algoritma, Alokasi Memori, Komputasi Statistik STIS',
    tags: ['Algorithms', 'Data Structures', 'STIS Curriculum']
  },
  {
    name: 'SPSS',
    category: 'data',
    level: 'Expert',
    icon: '📈',
    desc: 'Uji Validitas, Reliabilitas, Regresi Linear/Berganda, Olah Data Riset',
    tags: ['Skripsi', 'Validitas', 'Reliabilitas', 'Statistik']
  },
  {
    name: 'Figma UI/UX',
    category: 'design',
    level: 'Expert',
    icon: '🎨',
    desc: 'Desain Antarmuka, Design System, Usability Testing, Skripsi Redesign',
    tags: ['UI/UX', 'Wireframe', 'Design System', 'Prototyping']
  },
  {
    name: 'Canva Pro',
    category: 'design',
    level: 'Expert',
    icon: '✨',
    desc: 'Desain Komunikasi Visual, Infografis Data Publik, Presentasi Eksekutif',
    tags: ['Infografis', 'Visual Design', 'Executive Slides']
  },
  {
    name: 'Next.js & React 19',
    category: 'web',
    level: 'Production',
    icon: '⚛️',
    desc: 'Server Components, App Router, Integrasi AI Gemini, MariaDB/Prisma',
    tags: ['Next.js 16', 'React 19', 'Full-Stack', 'Prisma']
  },
  {
    name: 'Tailwind CSS',
    category: 'web',
    level: 'Expert',
    icon: '🌊',
    desc: 'Responsive Design, Clean Micro-interactions, Glassmorphism, CSS Grid',
    tags: ['Tailwind', 'Responsive', 'Modern UI']
  },
  {
    name: 'Git & GitHub',
    category: 'core',
    level: 'Daily Tool',
    icon: '🐙',
    desc: 'Version Control, Collaborative Repositories, Automated Deployment',
    tags: ['Git', 'GitHub', 'CI/CD Workflow']
  }
];

export default function TechStackTicker() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' 
    ? TECH_LANGUAGES 
    : TECH_LANGUAGES.filter(t => t.category === activeFilter);

  return (
    <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto" id="tech-stack">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Bahasa Pemrograman & Alat Analisis
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Bahasa yang Digunakan</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-xl">
            Bahasa pemrograman dan ekosistem software yang saya gunakan untuk pemecahan masalah data, desain antarmuka, hingga otomasi sistem.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'Semua (12)' },
            { id: 'data', label: 'Data & Statistik' },
            { id: 'web', label: 'Web & Otomasi' },
            { id: 'design', label: 'UI/UX Desain' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tech Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="group relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400/90 font-medium">
                      {item.level}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
