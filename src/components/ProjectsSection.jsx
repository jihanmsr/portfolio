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
    title: 'KiP App Automation & Telegram Bot Scheduler',
    subtitle: 'Bot Pelaporan Log Harian Pegawai BPS',
    impact: 'Headless Browser • Python Playwright',
    description: 'Bot otomasi browser tanpa GUI (headless) menggunakan Python Playwright yang secara cerdas mengisi capaian log kerja pegawai BPS harian (KiP App). Dilengkapi scheduler otomatis, parsing jadwal tugas dinas, dan notifikasi konfirmasi langsung via Telegram Bot API.',
    tags: ['Python Playwright', 'Telegram Bot API', 'Headless Automation', 'Cron Schedule', 'Task Automator'],
    type: 'Process Automation',
    badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    demoType: 'terminal'
  },
  {
    id: 5,
    category: 'uiux',
    title: 'Redesign Sistem Informasi Berbasis User-Centered Design',
    subtitle: 'Skripsi STIS — Peningkatan Usability & Aksesibilitas Data',
    impact: 'Figma • Usability Testing • UCD',
    description: 'Riset akademis dan perancangan ulang antarmuka sistem informasi statistik institusional. Menggunakan metodologi User-Centered Design (UCD) melalui wawancara stakeholder, evaluasi heuristik, pembuatan design system, dan usability testing dengan skor System Usability Scale (SUS) unggul.',
    tags: ['Figma Hi-Fi', 'Usability Testing', 'User-Centered Design', 'SUS Metric', 'Heuristic Evaluation'],
    type: 'UI/UX Case Study',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    demoType: 'figma'
  },
  {
    id: 6,
    category: 'dashboard',
    title: 'Spatial Remote Sensing & Agricultural Satellite Analytics',
    subtitle: 'Eksplorasi Citra Satelit Lahan Pertanian (KSA)',
    impact: 'Spatial GIS • Sentinel Imagery • Python',
    description: 'Analisis geospasial citra satelit resolusi spasial tinggi untuk identifikasi fase fase pertumbuhan padi dan tutupan vegetasi lahan. Mengintegrasikan algoritma NDVI/EVI dengan data sampel Kerangka Sampel Area (KSA) BPS untuk estimasi luasan panen akurat.',
    tags: ['QGIS', 'Leaflet', 'Python GeoPandas', 'Remote Sensing', 'NDVI Index', 'Spatial Modeling'],
    type: 'Spatial Data Analytics',
    badgeColor: 'border-teal-500/30 text-teal-400 bg-teal-500/10',
    demoType: 'gis'
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto" id="projects">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Studi Kasus & Portofolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Karya Pilihan & <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Sistem Nyata</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-xl">
            Solusi yang saya rancang dan bangun: dari aplikasi web full-stack terintegrasi AI, dashboard pemantauan survei berskala ribuan sampel, hingga bot otomasi.
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

      {/* Projects Grid */}
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
                  <div className="flex items-center justify-between">
                    <span>KSA Spatial GIS</span>
                    <span className="text-emerald-400">NDVI Index 0.74</span>
                  </div>
                  <div className="text-slate-400 text-[9px]">Sentinel-2 Multispectral • Fase Vegetatif</div>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs text-slate-400 font-medium mb-3">
                  {project.subtitle}
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Lihat Live Production</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      Sistem Produksi / Selesai
                    </span>
                  )}

                  <a
                    href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20dengan%20proyek%20Anda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    <span>Tanya Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
