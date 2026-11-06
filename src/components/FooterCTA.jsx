import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, Heart } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="relative z-10 pt-16 pb-12 px-6 max-w-6xl mx-auto">
      {/* Banner Box */}
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl text-center mb-16">
        {/* Glow ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-3xl pointer-events-none"></div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
          Siap Berkolaborasi Mewujudkan Solusi Data & Desain?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Mari diskusikan kebutuhan Anda secara terbuka. Saya siap membantu tugas akhir, dashboard instansi, maupun otomasi sistem Anda.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Langsung via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href="mailto:jihanmaisaroh@example.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Kirim Email</span>
          </a>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Jihan Maisaroh, S.Tr.Stat. Seluruh hak cipta dilindungi.
        </div>
        <div className="flex items-center gap-1">
          <span>Dibangun dengan React, Vite, & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

