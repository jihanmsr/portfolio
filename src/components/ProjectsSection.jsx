import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  BarChart2, 
  Terminal, 
  Sparkles, 
  Activity, 
  Monitor, 
  MapPin, 
  Database,
  ArrowRight,
  Bot,
  Brain,
  ShieldCheck,
  FileCode2,
  Cpu
} from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    category: 'web',
    title: 'PAKEWA — Padanan Kesejahteraan Warga',
    subtitle: 'Sistem Informasi Pemadanan Data & Asisten Virtual AI',
    impact: 'Next.js 16 • React 19 • Gemini AI',
    description: 'Platform web full-stack terintegrasi untuk pemadanan data sasaran DTSEN dengan basis data master. Dilengkapi algoritma Levenshtein distance & string similarity, Chatbot Asisten AI PAKEWA (Google Gemini), pemindaian dokumen OCR Tesseract.js, dan analitik data interaktif.',
    tags: ['Next.js 16', 'React 19', 'Prisma ORM', 'Google Gemini AI', 'Levenshtein Match', 'Tesseract OCR', 'MariaDB'],
    type: 'Full-Stack Web & AI',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    demoType: 'pakewa'
  },
  {
    id: 2,
    category: 'dashboard',
    title: 'Executive Real-Time Survey Monitoring & Data Harvester',
    subtitle: 'Monitoring PES SE2026 BPS Sulawesi Tengah',
    impact: 'Live Agregasi 11.991 Sampel & 139 SLS',
    description: 'Platform analitik multi-level (Provinsi -> Kab/Kota -> Kecamatan -> SLS) yang memonitor capaian lapangan real-time. Dilengkapi Kurva-S kumulatif, peta geospasial GIS, radar desa 0%, dan generator rekap resmi WhatsApp dengan 1-klik.',
    tags: ['Node.js Harvester', 'Chart.js Kurva-S', 'Leaflet GIS', 'FASIH-SM API', 'Live Sync', 'WhatsApp API'],
    type: 'Executive Dashboard',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    demoType: 'dashboard',
    liveUrl: 'https://pes.bpssulteng.id/'
  },
  {
    id: 3,
    category: 'automation',
    title: 'Nabungji Bot — AI-Powered WhatsApp Expense Tracker',
    subtitle: 'Asisten Finansial Otomatis via Chat WhatsApp',
    impact: 'Google Gemini NLP + Google Sheets API',
    description: 'Bot WhatsApp multi-device bertenaga Google Gemini AI yang mencatat pengeluaran harian dari bahasa santai (contoh: "Kopi susu 18rb di Indomaret pakai QRIS"). Otomatis mengekstrak nominal, titik lokasi, kategori transaksi, dan mencatatnya ke Google Sheets secara real-time.',
    tags: ['WhatsApp Baileys', 'Google Gemini AI', 'Google Sheets API', 'NLP Indonesian', 'Node.js'],
    type: 'AI Chatbot & Automation',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    demoType: 'whatsapp'
  },
  {
    id: 4,
    category: 'automation',
    title: 'KiP App Telegram Bot & Browser Automation',
    subtitle: 'Otomasi Pelaporan Kinerja Harian BPS',
    impact: 'Playwright Browser Automation + SSO Persistent',
    description: 'Bot Telegram dan CLI berbasis Python Playwright yang mengotomatiskan pengisian kinerja harian ke portal KiP App BPS. Dilengkapi pencocokan otomatis bahasa santai ke 19 butir SKP, persistent session SSO, dan tangkapan layar otomatis sebagai bukti simpan.',
    tags: ['Python Playwright', 'Telegram Bot API', 'SSO Automation', 'NLP Text Match', 'CLI Tool'],
    type: 'Process Automation',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    demoType: 'terminal'
  },
  {
    id: 5,
    category: 'uiux',
    title: 'Sistem Informasi Akademik: Usability Redesign',
    subtitle: 'Studi Kasus Skripsi Polstat STIS',
    impact: 'Riset UX & High-Fidelity Design System',
    description: 'Riset pengalaman pengguna mendalam (User Research, Usability Testing) dan perombakan total visual antarmuka sistem informasi. Memangkas friksi interaksi, membangun sistem komponen modular di Figma, dan menyusun prototipe interaktif siap uji.',
    tags: ['Figma Prototyping', 'Design System', 'Usability Testing', 'Heuristic Evaluation', 'Canva'],
    type: 'UI/UX Redesign',
    badgeColor: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
    demoType: 'figma'
  },
  {
    id: 6,
    category: 'dashboard',
    title: 'Peta Satelit GIS & Deteksi Anomali Usaha',
    subtitle: 'Analisis Geospasial Kawasan Industri & Perkotaan',
    impact: 'Peta Satelit Interaktif Palu & Bahodopi',
    description: 'Dashboard visualisasi spasial interaktif berbasis Leaflet GIS untuk mendeteksi sebaran usaha, anomali bangunan, dan konsentrasi ekonomi mikro pada kawasan industri padat (Bahodopi) dan perkotaan (Kota Palu).',
    tags: ['Leaflet GIS', 'GeoJSON', 'Satellite Imagery', 'Spatial Data Analysis', 'Python Geospatial'],
    type: 'Geospatial Analytics',
    badgeColor: 'border-teal-500/30 text-teal-400 bg-teal-500/10',
    demoType: 'gis'
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = PROJECTS.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Karya & Sistem yang Pernah Dibangun
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Aplikasi & Web <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">Karya Nyata</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-xl">
            Berikut adalah deretan web sistem informasi, dashboard analitik data, otomasi bot AI, dan studi kasus UI/UX yang pernah saya rancang dan bangun.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'Semua Karya (6)' },
            { id: 'web', label: 'Web Sistem & AI' },
            { id: 'dashboard', label: 'Dashboard & GIS' },
            { id: 'automation', label: 'Otomasi & Bot' },
            { id: 'uiux', label: 'UI/UX Desain' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid (2x3 or 3x2 responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <div
            key={project.id}
            className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            {/* Project Preview Header Simulation */}
            <div className="h-44 p-4 bg-gradient-to-b from-slate-950/90 to-slate-900 flex flex-col justify-between border-b border-slate-800/80 relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md border font-bold ${project.badgeColor}`}>
                  {project.type}
                </span>
                <span className="text-[11px] font-mono text-cyan-300 font-semibold bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/40">
                  {project.impact}
                </span>
              </div>

              {/* Graphical Simulation depending on demoType */}
              {project.demoType === 'pakewa' && (
                <div className="p-3 rounded-xl bg-slate-950/90 border border-cyan-800/40 shadow-inner flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold">
                    <span>PAKEWA Dashboard</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Brain className="w-3 h-3" /> Gemini AI
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2 font-mono text-[9px] text-slate-400">
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Levenshtein Matching</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">OCR Tesseract</span>
                  </div>
                </div>
              )}

              {project.demoType === 'dashboard' && (
                <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 shadow-inner">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-slate-400 font-mono">pes.bpssulteng.id</span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 13,58% Realisasi
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[45%]"></div>
                  </div>
                </div>
              )}

              {project.demoType === 'whatsapp' && (
                <div className="p-3 rounded-xl bg-[#0b141a]/95 border border-emerald-900/50 shadow-inner font-mono text-[10px] text-emerald-300 space-y-1">
                  <div className="text-slate-400 text-[9px]">User: "Makan siang 25rb QRIS di Warteg"</div>
                  <div className="text-emerald-400">Bot: "✅ Noted! Rp 25.000 tersimpan ke Sheets."</div>
                </div>
              )}

              {project.demoType === 'terminal' && (
                <div className="p-3 rounded-xl bg-black/95 border border-slate-800 font-mono text-[10px] text-cyan-400 space-y-1">
                  <div className="text-slate-500">$ python input_kinerja.py</div>
                  <div className="text-emerald-400">&gt; Auto-matched 19 SKP • KiP App Updated</div>
                </div>
              )}

              {project.demoType === 'figma' && (
                <div className="p-3 rounded-xl bg-[#1e1e1e]/90 border border-purple-900/40 shadow-inner flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-purple-400 font-mono">
                    <span>Figma Design System</span>
                    <span>Usability Redesign</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="h-5 flex-1 bg-purple-500/20 border border-purple-500/40 rounded flex items-center justify-center text-[9px] text-purple-200">User Flow</div>
                    <div className="h-5 flex-1 bg-cyan-500/20 border border-cyan-500/40 rounded flex items-center justify-center text-[9px] text-cyan-200">Hi-Fi Prototype</div>
                  </div>
                </div>
              )}

              {project.demoType === 'gis' && (
                <div className="p-3 rounded-xl bg-slate-950/90 border border-teal-800/40 shadow-inner font-mono text-[10px] text-teal-300 space-y-1">
                  <div className="flex items-center justify-between text-teal-400">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Leaflet GIS Satelit</span>
                    <span>Palu & Bahodopi</span>
                  </div>
                  <div className="text-slate-400 text-[9px]">&gt; Deteksi konsentrasi bangunan usaha</div>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-2">
                  {project.title}
                </h3>
                <div className="text-xs font-semibold text-slate-400 mb-2.5">
                  {project.subtitle}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-slate-800 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Kunjungi Live Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
