import React from 'react';
import { Award, GraduationCap, CheckCircle, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

const MILESTONES = [
  {
    period: '2021 — 2025',
    title: 'Politeknik Statistika STIS (Jakarta)',
    subtitle: 'D4 Komputasi Statistik • Peminatan Sistem Informasi (S.Tr.Stat.)',
    description: 'Pendidikan kedinasan intensif dengan kurikulum komputasi sains data, basis data relasional, pengolahan survei resmi negara, sistem informasi geografis (GIS), serta skripsi berbasis pengujian kegunaan UI/UX sistem informasi.',
    tags: ['Statistika Resmi', 'Sistem Informasi', 'Riset UI/UX', 'Algoritma Komputasi'],
    highlight: true
  },
  {
    period: 'Seleksi Bersama PTN Favorit',
    title: 'Keterima FMIPA Matematika UI & FKG Universitas Jember',
    subtitle: 'Universitas Indonesia (UI) & Universitas Jember (UNEJ)',
    description: 'Lolos dalam ujian seleksi masuk perguruan tinggi negeri pada jurusan sains-matematika murni Universitas Indonesia serta Kedokteran Gigi (FKG) UNEJ, membuktikan daya penalaran kuantitatif dan dedikasi belajar tinggi.',
    tags: ['FMIPA UI', 'Kedokteran Gigi UNEJ', 'Seleksi Nasional'],
    highlight: false
  },
  {
    period: 'Pondasi Numerik Sejak Dini',
    title: 'Kumon Completer & Sempoa Level 10 (Selesai Penuh)',
    subtitle: 'Mental Arithmetic & Advanced Calculus Foundation',
    description: 'Menyelesaikan seluruh kurikulum Kumon Matematika hingga level tertinggi (Completer) dan menamatkan 10 level Sempoa aritmatika mental. Membentuk ketelitian numerik ekstrem, kecepatan kalkulasi intuitif, dan daya tahan fokus berpikir.',
    tags: ['Kumon Completer', 'Sempoa Lv.10', 'Mental Arithmetic'],
    highlight: false,
    link: 'https://www.instagram.com/p/DAOJtG7yxo8/',
    linkText: 'Wisuda Pendidikan Mental Aritmatika (Sempoa)'
  }
];

export default function CredentialsTimeline() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto" id="credentials">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          <Award className="w-3.5 h-3.5 text-violet-400" />
          Kredibilitas & Rekam Jejak
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Fondasi Akademik & <span className="bg-gradient-to-r from-violet-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent">Kredensial</span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Rekam jejak konsistensi belajar, logika matematika disiplin tinggi, dan integritas pengolahan data.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-10">
        {MILESTONES.map((m, idx) => (
          <div key={idx} className="relative pl-6 md:pl-8 group">
            {/* Glowing Timeline Dot */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              m.highlight 
                ? 'bg-cyan-500 border-slate-950 shadow-lg shadow-cyan-500/50 scale-110' 
                : 'bg-slate-700 border-slate-950 group-hover:bg-violet-400'
            }`}></div>

            {/* Card Content */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 backdrop-blur-sm transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/50 font-semibold">
                  {m.period}
                </span>
                {m.link && (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 hover:underline"
                  >
                    <span>{m.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {m.title}
              </h3>
              <div className="text-xs font-semibold text-slate-400 mb-3">
                {m.subtitle}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {m.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                {m.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
