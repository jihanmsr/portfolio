import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, Bot, Database, Sparkles, ArrowUpRight } from 'lucide-react';
import { sounds } from './SoundManager';

export default function WorkWindow() {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      id: 'pes',
      title: 'PES SE2026 Sulteng Dashboard',
      category: 'DATA/LIVE',
      status: 'PRODUCTION',
      url: 'https://pes.bpssulteng.id',
      badge: 'Live Engine',
      badgeColor: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
      summary: 'Dashboard granular monitoring sensus SLS se-Sulawesi Tengah (11.991 assignment) sinkron dinamis via API FASIH-SM.',
      tech: ['JavaScript', 'FASIH-SM API', 'Live ETL', 'SLS Mapping']
    },
    {
      id: 'pakewa',
      title: 'PAKEWA (Padanan Kesejahteraan Warga)',
      category: 'WEB/AI',
      status: 'ENTERPRISE',
      url: null,
      badge: 'Full-Stack & AI',
      badgeColor: 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
      summary: 'Sistem audit & pencocokan data kemiskinan dengan Next.js 16, React 19, MariaDB/Prisma, Levenshtein matching, & Gemini AI.',
      tech: ['Next.js 16', 'React 19', 'Prisma', 'Gemini AI', 'Levenshtein']
    },
    {
      id: 'nabungji',
      title: 'Nabungji WhatsApp AI Financial Bot',
      category: 'AUTOMATION',
      status: 'ACTIVE BOT',
      url: null,
      badge: 'WhatsApp Bot',
      badgeColor: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800',
      summary: 'Bot pencatatan pengeluaran otomatis via WA Multi-Device dengan Baileys, Google Gemini LLM parser, & sinkronisasi Google Sheets.',
      tech: ['Baileys WA', 'Google Gemini', 'Google Sheets API', 'Node.js']
    },
    {
      id: 'kipapp',
      title: 'KiP App Automation & Telegram Bot',
      category: 'AUTOMATION',
      status: 'INTERNAL BOT',
      url: null,
      badge: 'Playwright Bot',
      badgeColor: 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-800',
      summary: 'Bot otomatisasi pelaporan kinerja harian pegawai BPS via Python Playwright headless browser dengan integrasi Telegram Bot API.',
      tech: ['Python', 'Playwright', 'Telegram Bot', 'Task Automation']
    },
    {
      id: 'redesign',
      title: 'UI/UX Redesign Sistem Informasi BPS',
      category: 'DESIGN',
      status: 'SKRIPSI STIS',
      url: null,
      badge: 'UI/UX Research',
      badgeColor: 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800',
      summary: 'Riset antarmuka dan perancangan ulang sistem statistik institusional berbasis User-Centered Design dan Usability Testing Figma.',
      tech: ['Figma', 'User Research', 'Usability Testing', 'Wireframing']
    },
    {
      id: 'gis',
      title: 'Satellite GIS & Agricultural Spatial Data',
      category: 'DATA/LIVE',
      status: 'RESEARCH',
      url: null,
      badge: 'Remote Sensing',
      badgeColor: 'bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-800',
      summary: 'Analisis geospasial citra satelit dan pemetaan tutupan lahan pertanian untuk estimasi luasan panen berbasis metodologi KSA BPS.',
      tech: ['QGIS', 'Leaflet', 'Python GeoPandas', 'Spatial Stats']
    }
  ];

  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="p-4 space-y-3 max-w-xl text-xs">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-inherit">
        {['ALL', 'WEB/AI', 'DATA/LIVE', 'AUTOMATION', 'DESIGN'].map(cat => (
          <button
            key={cat}
            onClick={() => {
              sounds.playClick();
              setFilter(cat);
            }}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
              filter === cat
                ? 'bg-emerald-500 text-stone-950 shadow-sm'
                : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-70'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
        {filtered.map(proj => (
          <div
            key={proj.id}
            className="p-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/50 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div>
                <span className={`inline-block text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border mb-1 ${proj.badgeColor}`}>
                  {proj.badge}
                </span>
                <h3 className="font-bold text-xs text-stone-900 dark:text-stone-100">{proj.title}</h3>
              </div>

              {proj.url && (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-[10px] font-extrabold shadow-xs transition-all flex-shrink-0"
                >
                  <span>Buka Live</span>
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </a>
              )}
            </div>

            <p className="text-stone-700 dark:text-stone-300 text-[11px] leading-relaxed mb-2.5">
              {proj.summary}
            </p>

            <div className="flex flex-wrap gap-1 pt-1.5 border-t border-stone-200/60 dark:border-stone-800/60">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
