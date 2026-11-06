import React from 'react';

export default function StackWindow() {
  const categories = [
    {
      name: 'BAHASA PEMROGRAMAN',
      color: 'bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-200 border-sky-200 dark:border-sky-800',
      badgeColor: 'bg-sky-200/60 dark:bg-sky-900/60 text-sky-900 dark:text-sky-200',
      tools: [
        { name: 'Python', level: 'Advanced' },
        { name: 'R Language', level: 'Advanced' },
        { name: 'SQL / MariaDB', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'PHP', level: 'Intermediate' },
        { name: 'C++', level: 'Academic' }
      ]
    },
    {
      name: 'DATA & METODOLOGI STATISTIK',
      color: 'bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-800',
      badgeColor: 'bg-amber-200/60 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200',
      tools: [
        { name: 'SPSS', level: 'Advanced' },
        { name: 'Statistical Modeling', level: 'Core' },
        { name: 'Survey Sampling', level: 'Core' },
        { name: 'Pandas & NumPy', level: 'Advanced' },
        { name: 'Leaflet & Spatial GIS', level: 'Specialist' },
        { name: 'Data Visualization', level: 'Expert' }
      ]
    },
    {
      name: 'FULL-STACK WEB & BACKEND',
      color: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-900 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800',
      badgeColor: 'bg-indigo-200/60 dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-200',
      tools: [
        { name: 'Next.js 16', level: 'Production' },
        { name: 'React 19', level: 'Production' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Prisma ORM', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Advanced' }
      ]
    },
    {
      name: 'OTOMASI, SCRAPING & AI',
      color: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
      badgeColor: 'bg-emerald-200/60 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200',
      tools: [
        { name: 'Python Playwright', level: 'Expert' },
        { name: 'Google Gemini AI', level: 'Production' },
        { name: 'WhatsApp Bot (Baileys)', level: 'Production' },
        { name: 'Telegram Bot API', level: 'Production' },
        { name: 'Headless Browser', level: 'Advanced' }
      ]
    },
    {
      name: 'DESAIN UI/UX & PRODUCT TOOLS',
      color: 'bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 border-rose-200 dark:border-rose-800',
      badgeColor: 'bg-rose-200/60 dark:bg-rose-900/60 text-rose-900 dark:text-rose-200',
      tools: [
        { name: 'Figma Prototyping', level: 'Expert' },
        { name: 'Canva Design', level: 'Expert' },
        { name: 'Usability Testing', level: 'Research' },
        { name: 'User-Centered Design', level: 'Skripsi' },
        { name: 'Git & GitHub', level: 'Daily' }
      ]
    }
  ];

  return (
    <div className="p-4 space-y-3.5 max-w-lg text-xs max-h-[380px] overflow-y-auto">
      {categories.map((cat, idx) => (
        <div key={idx} className="space-y-1.5">
          <div className="text-[10px] font-mono font-bold tracking-wider opacity-60">
            {cat.name}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cat.tools.map((tool, i) => (
              <div
                key={i}
                className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold flex items-center gap-1.5 transition-all shadow-xs hover:scale-105 ${cat.color}`}
              >
                <span>{tool.name}</span>
                <span className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold ${cat.badgeColor}`}>
                  {tool.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
