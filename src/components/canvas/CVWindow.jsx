import React from 'react';
import { Download, FileText, ArrowRight, Printer } from 'lucide-react';
import { sounds } from './SoundManager';

export default function CVWindow({ onSwitchToScroll }) {
  return (
    <div className="p-4 space-y-3 max-w-xs text-xs">
      <div>
        <div className="font-bold text-xs mb-1 text-inherit">Curriculum Vitae</div>
        <p className="opacity-75 leading-relaxed text-[11px]">
          Ringkasan lengkap profil akademis STIS, portofolio proyek, dan pengalaman profesional.
        </p>
      </div>

      <div className="p-3 rounded-xl border border-inherit bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-500" />
          <div>
            <div className="font-bold text-[11px]">CV Jihan Maisaroh, S.Tr.Stat.</div>
            <div className="text-[10px] opacity-60">Format PDF • Update 2026</div>
          </div>
        </div>

        <button
          onClick={() => {
            sounds.playClick();
            window.print();
          }}
          className="w-full py-2 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Cetak / Simpan PDF</span>
        </button>
      </div>

      <button
        onClick={() => {
          sounds.playClick();
          if (onSwitchToScroll) onSwitchToScroll();
        }}
        className="w-full py-2 px-3 rounded-xl border border-inherit hover:bg-black/5 dark:hover:bg-white/5 font-semibold text-xs flex items-center justify-between transition-all"
      >
        <span>Lihat versi halaman scroll lengkap</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

