import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, Heart } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="relative z-10 pt-16 pb-12 px-6 max-w-6xl mx-auto">
      {/* Banner Box */}
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-stone-900 border border-stone-800 shadow-xl text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
          Siap Berkolaborasi Mewujudkan Solusi Data & Desain?
        </h2>
        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Mari diskusikan kebutuhan Anda secara terbuka. Saya siap membantu tugas akhir, dashboard instansi, maupun otomasi sistem Anda.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-stone-950" />
            <span>Chat Langsung via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href="mailto:jihanmaisaroh@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-white font-semibold text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-stone-400" />
            <span>Kirim Email</span>
          </a>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="pt-8 border-t border-[#e2ddd0] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Jihan Maisaroh, S.Tr.Stat. Seluruh hak cipta dilindungi.
        </div>
        <div className="flex items-center gap-1 text-stone-500">
          <span>Dirancang dengan Estetika Editorial Cream & React</span>
        </div>
      </div>
    </footer>
  );
}
