import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';

export default function ExperienceWindow() {
  const experiences = [
    {
      period: '2024 – Sekarang',
      role: 'Sistem Informasi & Data Specialist',
      institution: 'Badan Pusat Statistik (BPS)',
      highlights: [
        'Merancang arsitektur dashboard monitoring PES SE2026 tingkat provinsi (pes.bpssulteng.id).',
        'Mengembangkan sistem audit data sosial terpadu PAKEWA menggunakan Next.js & Gemini AI.',
        'Membangun engine automasi pelaporan harian berbasis Python Playwright & Telegram.'
      ],
      tag: 'INSTITUSIONAL',
      tagColor: 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800'
    },
    {
      period: '2023 – Sekarang',
      role: 'Freelance Data Analyst & Automation Engineer',
      institution: 'Independent Consultant',
      highlights: [
        'Membangun bot bisnis cerdas (WhatsApp bot multi-device Nabungji dengan Baileys & Gemini).',
        'Konsultasi olah data statistik akademis dan bisnis (SPSS, R, Python, analisis regresi, EDA).',
        'Pembuatan custom dashboard analitik interaktif untuk visualisasi KPI organisasi.'
      ],
      tag: 'FREELANCE',
      tagColor: 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
    },
    {
      period: '2021 – Sekarang',
      role: 'Private Mathematics & Statistics Coach',
      institution: 'Academic Mentoring',
      highlights: [
        'Membimbing siswa SMP, SMA, dan mahasiswa dengan pendekatan mental aritmatika (Sempoa & Kumon).',
        'Persiapan seleksi masuk PTN (UTBK/SNBT) & kedinasan dengan fokus problem-solving cepat.'
      ],
      tag: 'EDUCATION',
      tagColor: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
    },
    {
      period: '2021 – 2025',
      role: 'Sarjana Terapan Statistika (S.Tr.Stat.)',
      institution: 'Politeknik Statistika STIS',
      highlights: [
        'Jurusan Komputasi Statistik — Peminatan Sistem Informasi.',
        'Skripsi: Perancangan & Redesign Sistem Informasi Statistik dengan User-Centered Design.'
      ],
      tag: 'ALUMNI',
      tagColor: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
    }
  ];

  return (
    <div className="p-4 space-y-3 max-w-lg text-xs">
      <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/50 relative pl-4 hover:border-rose-400 transition-all"
          >
            <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-rose-500" />
            <div className="flex items-center justify-between text-[10px] font-mono mb-1">
              <span className="flex items-center gap-1 text-stone-600 dark:text-stone-400 font-semibold">
                <Calendar className="w-3 h-3 text-rose-500" />
                {exp.period}
              </span>
              <span className={`font-bold px-1.5 py-0.5 rounded border text-[9px] ${exp.tagColor}`}>
                {exp.tag}
              </span>
            </div>

            <div className="font-bold text-xs text-stone-900 dark:text-stone-100">{exp.role}</div>
            <div className="text-[11px] font-medium text-stone-600 dark:text-stone-400 mb-2">{exp.institution}</div>

            <ul className="space-y-1 text-[11px] text-stone-700 dark:text-stone-300">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
