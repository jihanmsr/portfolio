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
    period: 'Seleksi Masuk PTN (2021)',
    title: 'Diterima di FMIPA Matematika UI & FKG Universitas Jember',
    subtitle: 'Universitas Indonesia (SIMAK UI) • Universitas Jember (SBMPTN / UTBK)',
    description: 'Dinyatakan lolos dan diterima pada program studi S1 Matematika FMIPA Universitas Indonesia melalui jalur seleksi SIMAK UI, serta S1 Pendidikan Dokter Gigi (FKG) Universitas Jember melalui jalur SBMPTN/UTBK, sebelum akhirnya memutuskan mengambil beasiswa penuh ikatan dinas di Politeknik Statistika STIS.',
    tags: ['SIMAK UI (Matematika)', 'SBMPTN UTBK (FKG UNEJ)', 'Sains & Kesehatan'],
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-800 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          <Award className="w-3.5 h-3.5 text-stone-700" />
          Kredibilitas & Rekam Jejak
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Fondasi Akademik & Kredensial
        </h2>
        <p className="text-stone-600 mt-2 text-sm md:text-base">
          Rekam jejak konsistensi belajar, logika matematika disiplin tinggi, dan integritas pengolahan data.
        </p>
      </div>

      <div className="relative border-l-2 border-stone-300 ml-4 md:ml-8 space-y-10">
        {MILESTONES.map((m, idx) => (
          <div key={idx} className="relative pl-6 md:pl-8 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              m.highlight 
                ? 'bg-stone-900 border-white shadow-md scale-110' 
                : 'bg-stone-400 border-white group-hover:bg-amber-600'
            }`}></div>

            {/* Card Content */}
            <div className="p-6 rounded-2xl bg-white border border-[#e2ddd0] hover:border-stone-400 shadow-xs transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  {m.period}
                </span>
                {m.link && (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:text-rose-900 hover:underline"
                  >
                    <span>{m.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-1">
                {m.title}
              </h3>
              <div className="text-xs font-semibold text-stone-500 mb-3">
                {m.subtitle}
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                {m.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                {m.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-100 text-stone-700 border border-stone-200"
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
