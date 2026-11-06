import React, { useState } from 'react';
import { MessageSquare, Mail, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';
import { sounds } from './SoundManager';

export default function ContactWindow() {
  const [copied, setCopied] = useState(false);
  const email = "jihanmaisaroh@gmail.com";
  const whatsappNumber = "+62 896-4432-7893";

  const handleCopy = () => {
    sounds.playPop();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 space-y-4 max-w-sm text-xs">
      <div>
        <div className="font-extrabold text-sm mb-1 text-stone-900 dark:text-stone-100">Mari Terhubung & Berdiskusi</div>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-[11px]">
          Tersedia untuk konsultasi olah data statistik, pembuatan dashboard web, bot otomatisasi, atau bimbingan privat matematika.
        </p>
      </div>

      <div className="space-y-2.5">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sounds.playClick()}
          className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold flex items-center justify-between transition-all shadow-md group"
        >
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 fill-stone-950" />
            <span>Chat WhatsApp ({whatsappNumber})</span>
          </div>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* Email Copy */}
        <button
          onClick={handleCopy}
          className="w-full py-2 px-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-stone-500" />
            <span>{email}</span>
          </div>
          <div className="text-[10px] font-mono opacity-80 flex items-center gap-1">
            {copied ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3 h-3 stroke-[2.5]" /> Tersalin
              </span>
            ) : (
              <span className="flex items-center gap-1 text-stone-600 dark:text-stone-400 font-medium">
                <Copy className="w-3 h-3" /> Salin
              </span>
            )}
          </div>
        </button>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sounds.playClick()}
          className="w-full py-2 px-3 rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50/70 dark:bg-sky-950/40 hover:bg-sky-100 dark:hover:bg-sky-900/50 font-semibold flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300">
            <span className="font-bold px-1.5 py-0.2 rounded bg-sky-600 text-white text-[10px]">in</span>
            <span>Profil LinkedIn</span>
          </div>
          <ExternalLink className="w-3 h-3 text-sky-600 dark:text-sky-400" />
        </a>
      </div>
    </div>
  );
}
