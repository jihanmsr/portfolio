import React from 'react';
import { Check } from 'lucide-react';
import { sounds } from './SoundManager';

export default function ThemesWindow({ currentTheme, onSelectTheme }) {
  const lightThemes = [
    { id: 'cream', name: 'Cream (Default)', bg: '#f5f3ec', card: '#ffffff', text: '#1c1917' },
    { id: 'catppuccin-latte', name: 'Catppuccin Latte', bg: '#eff1f5', card: '#e6e9ef', text: '#4c4f69' },
    { id: 'rose-pine-dawn', name: 'Rosé Pine Dawn', bg: '#faf4ed', card: '#fffaf3', text: '#575279' },
    { id: 'gruvbox-light', name: 'Gruvbox Light', bg: '#fbf1c7', card: '#f2e5bc', text: '#3c3836' },
    { id: 'solarized-light', name: 'Solarized Light', bg: '#fdf6e3', card: '#eee8d5', text: '#657b83' }
  ];

  const darkThemes = [
    { id: 'tokyo-night', name: 'Tokyo Night', bg: '#0f141c', card: '#161c28', text: '#f1f5f9' },
    { id: 'dracula', name: 'Dracula', bg: '#1e1f29', card: '#282a36', text: '#f8f8f2' },
    { id: 'nord', name: 'Nord Clean', bg: '#242933', card: '#2e3440', text: '#eceff4' },
    { id: 'gruvbox-dark', name: 'Gruvbox Dark', bg: '#282828', card: '#32302f', text: '#ebdbb2' },
    { id: 'catppuccin-mocha', name: 'Catppuccin Mocha', bg: '#1e1e2e', card: '#181825', text: '#cdd6f4' }
  ];

  const select = (id) => {
    sounds.playPop();
    onSelectTheme(id);
  };

  return (
    <div className="p-4 space-y-4 max-w-xs text-xs">
      {/* Light Themes */}
      <div>
        <div className="text-[10px] font-mono font-bold tracking-wider opacity-60 mb-2">
          TEMA TERANG (LIGHT)
        </div>
        <div className="space-y-1.5">
          {lightThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => select(t.id)}
              className={`w-full p-2 rounded-xl border flex items-center justify-between text-left transition-all ${
                currentTheme === t.id
                  ? 'border-amber-500 shadow-sm ring-1 ring-amber-400'
                  : 'border-inherit hover:bg-black/5 dark:hover:bg-white/5 opacity-80'
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full border border-stone-300"
                  style={{ backgroundColor: t.bg }}
                />
                <span className="font-semibold text-[11px]">{t.name}</span>
              </div>
              {currentTheme === t.id && <Check className="w-3.5 h-3.5 text-amber-500" />}
            </button>
          ))}
        </div>
      </div>

      {/* Dark Themes */}
      <div>
        <div className="text-[10px] font-mono font-bold tracking-wider opacity-60 mb-2">
          TEMA GELAP (DARK)
        </div>
        <div className="space-y-1.5">
          {darkThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => select(t.id)}
              className={`w-full p-2 rounded-xl border flex items-center justify-between text-left transition-all ${
                currentTheme === t.id
                  ? 'border-indigo-400 shadow-sm ring-1 ring-indigo-400'
                  : 'border-inherit hover:bg-black/5 dark:hover:bg-white/5 opacity-80'
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full border border-stone-600"
                  style={{ backgroundColor: t.bg }}
                />
                <span className="font-semibold text-[11px]">{t.name}</span>
              </div>
              {currentTheme === t.id && <Check className="w-3.5 h-3.5 text-indigo-400" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

