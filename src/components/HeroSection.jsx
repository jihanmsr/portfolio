import React, { useState } from 'react';
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
  Cpu,
  Layers,
  ArrowRight
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span>Tersedia untuk Freelance, Konsultasi Data, & Desain UI/UX</span>
        </div>

        {onOpenCanvas && (
          <button
            onClick={onOpenCanvas}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-800 text-stone-800 text-xs font-semibold shadow-xs transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Mode Kanvas Interaktif (Desktop)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.08] mb-5 uppercase">
            JIHAN MAISAROH
            <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-600 mt-2 normal-case tracking-normal">
              Data Analyst & Full-Stack Automation Engineer building AI-integrated systems.
            </span>
          </h1>

          <p className="text-stone-700 text-base leading-relaxed mb-8 max-w-2xl font-normal">
            Lulusan <strong className="text-stone-900 font-semibold">Politeknik Statistika STIS</strong> (S.Tr.Stat., Komputasi Statistik & Sistem Informasi). Mengintegrasikan ketajaman metodologi survei data resmi, kecepatan rekayasa otomasi web (Playwright & AI), dan perancangan antarmuka UI/UX yang manusiawi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20data%20/%20desain."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>Konsultasi Proyek (WhatsApp)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {onOpenCanvas && (
              <button
                onClick={onOpenCanvas}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 font-bold text-sm transition-all"
              >
                <span>Buka Mode Kanvas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 hover:text-stone-900 font-semibold text-sm transition-all shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-500" />}
              <span>{copied ? 'Email Tersalin!' : 'Salin Email'}</span>
            </button>
          </div>
        </div>

        {/* Right Editorial Paper Card (Live Data Simulation) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-white p-5 border border-[#e2ddd0] shadow-lg">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-stone-300"></span>
                <span className="w-3 h-3 rounded-full bg-stone-300"></span>
                <span className="w-3 h-3 rounded-full bg-stone-300"></span>
                <span className="text-xs font-mono text-stone-500 ml-2">jihan@stis-analyst:~$</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold">
                LIVE PRODUCTION
              </span>
            </div>

            {/* Code / Command Simulation */}
            <div className="font-mono text-xs text-stone-800 space-y-2">
              <div className="text-stone-500">
                <span className="text-amber-800 font-bold">const</span> profile = {'{'}
              </div>
              <div className="pl-4 space-y-1 text-stone-700">
                <div><span className="text-stone-500">degree:</span> <span className="text-emerald-800 font-medium">"S.Tr.Stat. (Polstat STIS)"</span>,</div>
                <div><span className="text-stone-500">specialization:</span> <span className="text-emerald-800 font-medium">"Komputasi Statistik & SI"</span>,</div>
                <div><span className="text-stone-500">coreCapabilities:</span> [</div>
                <div className="pl-4 text-stone-900 font-semibold">
                  "Data Analytics", "Visdat Dashboard", "UI/UX Figma", "Web Automation"
                </div>
                <div>],</div>
                <div><span className="text-stone-500">mathMilestones:</span> [</div>
                <div className="pl-4 text-amber-900 font-semibold">
                  "Kumon Completer", "Sempoa Lv.10", "FMIPA UI", "FKG UNEJ"
                </div>
                <div>]</div>
              </div>
              <div className="text-stone-500">{'}'};</div>

              {/* Live Metric Simulator */}
              <div className="mt-4 pt-4 border-t border-stone-200 grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-[10px] text-stone-500 font-sans">Granular SLS Ingestion</div>
                  <div className="text-stone-900 text-sm font-bold mt-0.5">11.991 Sampel</div>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-[10px] text-stone-500 font-sans">System Performance</div>
                  <div className="text-emerald-800 text-sm font-bold mt-0.5">Realtime 60fps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}