import React from 'react';
import { 
  BarChart, 
  LayoutDashboard, 
  Palette, 
  GraduationCap, 
  ArrowUpRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    icon: <BarChart className="w-6 h-6 text-indigo-700" />,
    title: 'Olah Data & Konsultasi Statistik',
    badge: 'Skripsi / Tesis / Riset Bisnis',
    desc: 'Layanan asistensi dan pengerjaan olah data kuantitatif dengan metodologi presisi. Dari pembersihan data mentah, uji validitas, reliabilitas, regresi, hingga interpretasi output statistik yang siap dipertanggungjawabkan dalam sidang akademik maupun presentasi bisnis.',
    points: [
      'Pembersihan & Deteksi Anomali Data',
      'Uji Asumsi Klasik, Regresi, ANOVA, SEM',
      'Interpretasi Hasil & Penulisan Bab 4',
      'Software: SPSS, R, Python, Excel'
    ],
    waMessage: 'Halo Mbak Jihan, saya ingin konsultasi mengenai olah data skripsi / riset.'
  },
  {
    number: '02',
    icon: <LayoutDashboard className="w-6 h-6 text-emerald-700" />,
    title: 'Pembuatan Dashboard & Visualisasi Data',
    badge: 'Instansi / Perusahaan / UMKM',
    desc: 'Mengubah ribuan baris data Excel atau database yang rumit menjadi dashboard visual interaktif berbasis web. Dilengkapi pelacakan target harian, Kurva-S kumulatif, peta geospasial GIS, serta generator laporan cepat untuk efisiensi pimpinan.',
    points: [
      'Arsitektur Dashboard Interaktif & Responsif',
      'Kurva-S Target vs Realisasi Progres',
      'Peta Spasial GIS Wilayah Kerja',
      'Ekspor Otomatis Format Excel & WhatsApp'
    ],
    waMessage: 'Halo Mbak Jihan, saya tertarik berdiskusi pembuatan web dashboard / sistem monitoring data.'
  },
  {
    number: '03',
    icon: <Palette className="w-6 h-6 text-rose-700" />,
    title: 'Desain UI/UX & Redesign Sistem di Figma',
    badge: 'Product Design & Redesign',
    desc: 'Perancangan antarmuka pengguna (UI) dan alur pengalaman pengguna (UX) yang berbasis data riset. Melakukan redesign sistem lama agar lebih nyaman digunakan, menghilangkan kebingungan pengguna, serta menyusun design system siap koding.',
    points: [
      'UX Research & Usability Testing',
      'High-Fidelity Wireframing & Prototyping',
      'Modular Design System & Component Library',
      'Mockup Siap Serah-Terima ke Developer'
    ],
    waMessage: 'Halo Mbak Jihan, saya butuh jasa desain UI/UX / redesign sistem di Figma.'
  },
  {
    number: '04',
    icon: <GraduationCap className="w-6 h-6 text-amber-700" />,
    title: 'Private Tutoring Matematika & Kedinasan',
    badge: 'Matematika Sekolah & Ujian Masuk',
    desc: 'Bimbingan intensif matematika dengan metode penalaran cepat dan pondasi konsep logika yang kokoh. Dibimbing langsung oleh Kumon Completer, peraih Sempoa Level 10, dan alumnus yang lolos seleksi Polstat STIS, UI Matematika, serta FKG UNEJ.',
    points: [
      'Matematika SD, SMP, SMA (Kurikulum Nasional)',
      'Aritmatika Cepat & Logika Numerik',
      'Strategi Lolos Ujian Kedinasan (STIS/STAN)',
      'Bedah Soal UTBK-SNBT Skolastik'
    ],
    waMessage: 'Halo Mbak Jihan, saya ingin info mengenai bimbingan privat matematika / persiapan kedinasan.'
  }
];

export default function ServicesSection() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto" id="services">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-800 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-stone-700" />
          Layanan Profesional
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Solusi yang Siap Saya Kerjakan
        </h2>
        <p className="text-stone-600 mt-2 text-sm md:text-base">
          Disesuaikan secara fleksibel untuk kebutuhan tugas akhir mahasiswa, instansi pemerintahan, bisnis swasta, maupun pendampingan personal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map(srv => (
          <div
            key={srv.number}
            className="p-7 rounded-2xl bg-white border border-[#e2ddd0] hover:border-stone-400 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  {srv.icon}
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                  {srv.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-2.5">
                {srv.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                {srv.desc}
              </p>

              <div className="space-y-2 mb-6">
                {srv.points.map(pt => (
                  <div key={pt} className="flex items-center gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/6289644327893?text=${encodeURIComponent(srv.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-all duration-200 group shadow-xs"
            >
              <span>Konsultasikan Kebutuhan Ini</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
