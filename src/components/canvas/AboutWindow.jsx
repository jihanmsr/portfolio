import React from 'react';
import { Sparkles, Award, GraduationCap, MapPin, ExternalLink, Heart } from 'lucide-react';
import { sounds } from './SoundManager';

export default function AboutWindow() {
  return (
    <div className="p-5 space-y-4 text-xs leading-relaxed max-w-lg">
      {/* Top Banner / Avatar */}
      <div className="flex items-center gap-3 pb-3 border-b border-inherit">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 p-0.5 shadow-md flex-shrink-0">
          <div className="w-full h-full rounded-[14px] bg-white dark:bg-stone-900 flex items-center justify-center font-extrabold text-sm text-stone-900 dark:text-stone-100">
            JM
          </div>
        </div>
        <div>
          <div className="font-extrabold text-sm text-stone-900 dark:text-stone-100">Jihan Maisaroh, S.Tr.Stat.</div>
          <div className="text-[11px] opacity-75 flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
            <MapPin className="w-3 h-3 text-rose-500" />
            <span>Palu, Sulawesi Tengah • Asal Jawa Barat</span>
          </div>
        </div>
      </div>

      {/* Story Paragraphs */}
      <p className="text-stone-800 dark:text-stone-200">
        Saya adalah <strong className="font-bold text-stone-950 dark:text-white">Data Analyst & Full-Stack Automation Engineer</strong> lulusan <strong className="font-bold text-stone-950 dark:text-white">Politeknik Statistika STIS</strong> (D4 Komputasi Statistik, Peminatan Sistem Informasi).
      </p>

      <p className="text-stone-800 dark:text-stone-200">
        Fondasi logika kuantitatif saya terbentuk sejak dini melalui pelatihan <strong className="text-amber-600 dark:text-amber-400 font-bold">Mental Aritmatika (Sempoa Level 10)</strong> dan menyelesaikan kurikulum <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Kumon Completer</strong>. Ketajaman analitis ini kemudian mengantarkan saya diterima di <strong className="font-semibold text-stone-900 dark:text-stone-100">FMIPA Matematika UI (SIMAK UI)</strong> serta <strong className="font-semibold text-stone-900 dark:text-stone-100">Pendidikan Dokter Gigi UNEJ (SBMPTN/UTBK)</strong> sebelum akhirnya memantapkan pilihan di ikatan dinas Politeknik Statistika STIS.
      </p>

      {/* Keunggulan Utama Box */}
      <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 text-[11px] space-y-1.5 shadow-xs">
        <div className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>Keunggulan Utama</span>
        </div>
        <p className="text-stone-800 dark:text-stone-200 leading-normal">
          Menggabungkan metodologi survei statistik resmi BPS, rekayasa otomasi web cepat (Playwright & AI LLM), serta perancangan visual antarmuka UI/UX yang ramah pengguna.
        </p>
      </div>

      {/* Social / Proof Links */}
      <div className="pt-2 flex items-center justify-between border-t border-inherit text-[11px]">
        <a
          href="https://www.instagram.com/p/DAOJtG7yxo8/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sounds.playClick()}
          className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 hover:underline font-semibold"
        >
          <span>📸 Wisuda Sempoa Level 10 (Instagram)</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <span className="opacity-75 flex items-center gap-1 text-stone-600 dark:text-stone-400">
          <span>Target Umroh & Pulang Jawa</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
        </span>
      </div>
    </div>
  );
}
