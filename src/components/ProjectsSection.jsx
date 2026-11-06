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
    badgeColor: 'border-indigo-300 text-indigo-900 bg-indigo-50',
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
    badgeColor: 'border-emerald-300 text-emerald-900 bg-emerald-50',
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
    badgeColor: 'border-amber-300 text-amber-900 bg-amber-50',
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
    badgeColor: 'border-sky-300 text-sky-900 bg-sky-50',
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
    badgeColor: 'border-rose-300 text-rose-900 bg-rose-50',
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
    badgeColor: 'border-teal-300 text-teal-900 bg-teal-50',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-800 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-stone-700" />
            Studi Kasus & Portofolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Karya Pilihan & Sistem Nyata
          </h2>
          <p className="text-stone-600 mt-2 text-sm md:text-base max-w-xl">
            Solusi yang saya rancang dan bangun: dari aplikasi web full-stack terintegrasi AI, dashboard pemantauan survei berskala ribuan sampel, hingga bot otomasi.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#e2ddd0] shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
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
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
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
            className="group relative rounded-2xl bg-white border border-[#e2ddd0] shadow-xs hover:border-stone-400 hover:shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Project Preview Header Simulation */}
            <div className="h-44 p-4 bg-stone-50 flex flex-col justify-between border-b border-stone-200 relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md border font-bold ${project.badgeColor}`}>
                  {project.type}
                </span>
                <span className="text-[11px] font-mono text-stone-700 font-semibold bg-white px-2 py-0.5 rounded border border-stone-300 shadow-xs">
                  {project.impact}
                </span>
              </div>

              {/* Graphical Simulation depending on demoType */}
              {project.demoType === 'pakewa' && (
                <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-900 font-bold">
                    <span>PAKEWA Dashboard</span>
                    <span className="text-emerald-700 flex items-center gap-1">
                      <Brain className="w-3 h-3" /> Gemini AI
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2 font-mono text-[9px] text-stone-600">
                    <span className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">Levenshtein Matching</span>
                    <span className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">OCR Tesseract</span>
                  </div>
                </div>
              )}

              {project.demoType === 'dashboard' && (
                <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-stone-600 font-mono">pes.bpssulteng.id</span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> 13,58% Realisasi
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[45%]"></div>
                  </div>
                </div>
              )}

              {project.demoType === 'whatsapp' && (
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 font-mono text-[10px] text-stone-800 space-y-1">
                  <div className="text-stone-500 text-[9px]">User: "Makan siang 25rb QRIS di Warteg"</div>
                  <div className="text-emerald-800 font-bold">Bot: "✅ Noted! Rp 25.000 tersimpan ke Sheets."</div>
                </div>
              )}

              {project.demoType === 'terminal' && (
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 font-mono text-[10px] text-stone-800 space-y-1">
                  <div className="text-stone-500">$ python input_kinerja.py</div>
                  <div className="text-stone-900 font-bold">&gt; Auto-matched 19 SKP • KiP App Updated</div>
                </div>
              )}

              {project.demoType === 'figma' && (
                <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-stone-800 font-mono font-bold">
                    <span>Figma Design System</span>
                    <span>Usability Redesign</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="h-5 flex-1 bg-rose-50 border border-rose-200 rounded flex items-center justify-center text-[9px] text-rose-800 font-semibold">User Flow</div>
                    <div className="h-5 flex-1 bg-amber-50 border border-amber-200 rounded flex items-center justify-center text-[9px] text-amber-800 font-semibold">Hi-Fi Prototype</div>
                  </div>
                </div>
              )}

              {project.demoType === 'gis' && (
                <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs font-mono text-[10px] text-stone-800 space-y-1">
                  <div className="flex items-center justify-between text-teal-800 font-bold">
                    <span>KSA Spatial GIS</span>
                    <span>NDVI Index 0.74</span>
                  </div>
                  <div className="text-stone-500 text-[9px]">Sentinel-2 Multispectral • Fase Vegetatif</div>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs text-stone-500 font-medium mb-3">
                  {project.subtitle}
                </div>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-100 text-stone-700 border border-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                    >
                      <span>Lihat Live Production</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-stone-500">
                      Sistem Produksi / Selesai
                    </span>
                  )}

                  <a
                    href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20dengan%20proyek%20Anda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-800 hover:text-stone-950"
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
