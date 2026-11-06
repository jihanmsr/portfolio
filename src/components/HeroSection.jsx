import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Terminal, 
  BarChart3, 
  Layout, 
  GraduationCap, 
  Send, 
  Copy, 
  Check, 
  Cpu
} from 'lucide-react';

export default function HeroSection({ onOpenCanvas }) {
  const [copied, setCopied] = useState(false);
  const email = "jihanmaisaroh@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 pt-28 pb-16 px-6 max-w-6xl mx-auto">
      {/* Top Status Pill & Canvas Launcher */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Tersedia untuk Freelance, Konsultasi Data, & Desain UI/UX</span>
        </div>

        {onOpenCanvas && (
          <button
            onClick={onOpenCanvas}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-extrabold shadow-md transition-all hover:scale-105"
          >
            <span>✨ Buka Mode Canvas OS Interaktif</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        )}
      </div>

      {/* Main Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Mengubah Data Rumit Menjadi Solusi{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Presisi & Desain Bernilai
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            Halo! Saya <strong className="text-white font-semibold">Jihan Maisaroh, S.Tr.Stat.</strong> — Alumnus{' '}
            <span className="text-cyan-400 font-semibold">Politeknik Statistika STIS</span> (Komputasi Statistik, Peminatan Sistem Informasi). Memadukan ketajaman riset statistik, kecepatan koding otomasi data, dan estetika desain produk UI/UX yang manusiawi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20data%20/%20desain."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
            >
              <span>Konsultasi Proyek (WhatsApp)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white font-semibold text-sm transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Email Tersalin!' : 'Salin Email'}</span>
            </button>
          </div>
        </div>

        {/* Right Interactive Cyber Card (Live Data Simulation) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5 border border-slate-800 shadow-2xl backdrop-blur-xl">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">jihan@stis-analyst:~$</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 font-bold">
                LIVE STATUS
              </span>
            </div>

            {/* Code / Command Simulation */}
            <div className="font-mono text-xs text-slate-300 space-y-2.5">
              <div className="text-slate-400">
                <span className="text-cyan-400 font-bold">const</span> profile = {'{'}
              </div>
              <div className="pl-4 space-y-1 text-slate-300">
                <div><span className="text-indigo-400">degree:</span> <span className="text-amber-300">"S.Tr.Stat. (Polstat STIS)"</span>,</div>
                <div><span className="text-indigo-400">specialization:</span> <span className="text-amber-300">"Komputasi Statistik & SI"</span>,</div>
                <div><span className="text-indigo-400">coreCapabilities:</span> [</div>
                <div className="pl-4 text-emerald-400">
                  "Data Analytics", "Visdat Dashboard", "UI/UX Figma", "Web Automation"
                </div>
                <div>],</div>
                <div><span className="text-indigo-400">mathMilestones:</span> [</div>
                <div className="pl-4 text-cyan-300">
                  "Kumon Completer", "Sempoa Lv.10", "FMIPA UI", "FKG UNEJ"
                </div>
                <div>]</div>
              </div>
              <div className="text-slate-400">{'}'};</div>

              {/* Live Metric Simulator */}
              <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">Granular SLS Harvester</div>
                  <div className="text-cyan-400 text-sm font-bold mt-0.5">11.991 Sampel</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">System Performance</div>
                  <div className="text-emerald-400 text-sm font-bold mt-0.5">Realtime 60fps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80">
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
          <div className="text-2xl font-black text-cyan-400 font-mono">STIS '25</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Komputasi Statistik & SI</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
          <div className="text-2xl font-black text-violet-400 font-mono">10+ Level</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Kumon & Sempoa Tamat</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
          <div className="text-2xl font-black text-emerald-400 font-mono">End-to-End</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Olah Data s.d Figma UI/UX</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
          <div className="text-2xl font-black text-amber-400 font-mono">100%</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Presisi Data & Metodologi</div>
        </div>
      </div>
    </section>
  );
}

