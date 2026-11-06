import React from 'react';
import { Clock, MapPin, Sparkles, Heart } from 'lucide-react';

export default function NowWindow() {
  return (
    <div className="p-4 space-y-3 max-w-xs text-xs">
      <div>
        <div className="font-bold text-xs mb-0.5 text-inherit">A snapshot, short and sweet.</div>
        <div className="text-[10px] opacity-60 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>Terakhir diperbarui: November 2026</span>
        </div>
      </div>

      <div className="space-y-2.5 pt-1">
        <div className="p-2.5 rounded-xl border border-inherit bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-1">
            SEDANG DIKERJAKAN
          </div>
          <p className="opacity-90 leading-relaxed text-[11px]">
            Mengoptimasi sinkronisasi data API real-time dan dasbor monitoring sensus PES SE2026 di Sulawesi Tengah.
          </p>
        </div>

        <div className="p-2.5 rounded-xl border border-inherit bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">
            FOKUS SAAT INI
          </div>
          <p className="opacity-90 leading-relaxed text-[11px]">
            Membuka jasa konsultasi data analytics, pembuatan bot otomasi bisnis, dan mengumpulkan dana tambahan untuk pulang ke Jawa dan memberangkatkan Umroh keluarga tercinta.
          </p>
        </div>

        <div className="p-2.5 rounded-xl border border-inherit bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 mb-1">
            DOMISILI
          </div>
          <p className="opacity-90 leading-relaxed text-[11px] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-rose-500" />
            <span>Palu, Sulawesi Tengah</span>
          </p>
        </div>
      </div>

      <p className="text-[9px] opacity-50 italic">
        Konsep halaman /now terinspirasi oleh Derek Sivers.
      </p>
    </div>
  );
}

