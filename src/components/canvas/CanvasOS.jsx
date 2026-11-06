import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Briefcase, 
  Calendar, 
  Layers, 
  MessageSquare, 
  FileText, 
  Clock, 
  Gamepad2, 
  Palette, 
  Volume2, 
  VolumeX, 
  Minimize2, 
  Maximize2, 
  X, 
  Minus, 
  RefreshCw, 
  LayoutGrid, 
  Shuffle, 
  ArrowLeft, 
  Sparkles,
  ExternalLink,
  ChevronDown,
  Music,
  ArrowUpRight
} from 'lucide-react';

import { sounds } from './SoundManager';
import AboutWindow from './AboutWindow';
import WorkWindow from './WorkWindow';
import ExperienceWindow from './ExperienceWindow';
import StackWindow from './StackWindow';
import ContactWindow from './ContactWindow';
import NowWindow from './NowWindow';
import CVWindow from './CVWindow';
import ThemesWindow from './ThemesWindow';
import ArcadeGame from './ArcadeGame';
import CursorLamp from '../CursorLamp';

export default function CanvasOS({ onExitToScroll }) {
  // Theme state
  const [theme, setTheme] = useState('cream'); // 'cream' | 'catppuccin-latte' | 'tokyo-night' | 'dracula' | 'nord' | 'gruvbox-dark'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [ambientPlaying, setAmbientPlaying] = useState(false);
  const [soundMenuOpen, setSoundMenuOpen] = useState(false);
  const [topMaxZ, setTopMaxZ] = useState(10);

  // Themes Color Palettes
  const themeStyles = {
    cream: {
      bg: '#f5f3ec',
      grid: '#e6e2d8',
      cardBg: '#ffffff',
      cardBorder: '#d6d1c4',
      text: '#1c1917',
      isDark: false
    },
    'catppuccin-latte': {
      bg: '#eff1f5',
      grid: '#dce0e8',
      cardBg: '#e6e9ef',
      cardBorder: '#ccd0da',
      text: '#4c4f69',
      isDark: false
    },
    'tokyo-night': {
      bg: '#0f141c',
      grid: '#1b2333',
      cardBg: '#161c28',
      cardBorder: '#27344a',
      text: '#f1f5f9',
      isDark: true
    },
    dracula: {
      bg: '#1e1f29',
      grid: '#282a36',
      cardBg: '#282a36',
      cardBorder: '#44475a',
      text: '#f8f8f2',
      isDark: true
    },
    nord: {
      bg: '#242933',
      grid: '#2e3440',
      cardBg: '#2e3440',
      cardBorder: '#3b4252',
      text: '#eceff4',
      isDark: true
    },
    'gruvbox-dark': {
      bg: '#282828',
      grid: '#3c3836',
      cardBg: '#32302f',
      cardBorder: '#504945',
      text: '#ebdbb2',
      isDark: true
    }
  };

  const curTheme = themeStyles[theme] || themeStyles.cream;

  // Crucial: Synchronize HTML dark class with current theme so text is 100% crisp and readable
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (curTheme.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      document.body.style.backgroundColor = curTheme.bg;
      document.body.style.color = curTheme.text;
    }
  }, [curTheme]);

  // Initial window states: only 2 windows open initially so canvas looks clean & uncluttered!
  const [windows, setWindows] = useState({
    about: {
      id: 'about',
      title: 'About Me',
      icon: User,
      pillColor: 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700',
      x: 40,
      y: 90,
      width: 410,
      isOpen: true,
      zIndex: 5
    },
    work: {
      id: 'work',
      title: 'Work & Proyek',
      icon: Briefcase,
      pillColor: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700',
      x: 780,
      y: 90,
      width: 500,
      isOpen: true,
      zIndex: 4
    },
    stack: {
      id: 'stack',
      title: 'Tech Stack',
      icon: Layers,
      pillColor: 'bg-sky-100 dark:bg-sky-950/80 text-sky-900 dark:text-sky-200 border-sky-300 dark:border-sky-700',
      x: 520,
      y: 110,
      width: 440,
      isOpen: false,
      zIndex: 3
    },
    experience: {
      id: 'experience',
      title: 'Experience & BPS',
      icon: Calendar,
      pillColor: 'bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-700',
      x: 40,
      y: 530,
      width: 410,
      isOpen: false,
      zIndex: 2
    },
    arcade: {
      id: 'arcade',
      title: 'Arcade / Minigames',
      icon: Gamepad2,
      pillColor: 'bg-lime-100 dark:bg-lime-950/80 text-lime-900 dark:text-lime-200 border-lime-300 dark:border-lime-700',
      x: 780,
      y: 530,
      width: 440,
      isOpen: false,
      zIndex: 6
    },
    contact: {
      id: 'contact',
      title: 'Contact & WhatsApp',
      icon: MessageSquare,
      pillColor: 'bg-teal-100 dark:bg-teal-950/80 text-teal-900 dark:text-teal-200 border-teal-300 dark:border-teal-700',
      x: 480,
      y: 220,
      width: 380,
      isOpen: false,
      zIndex: 7
    },
    now: {
      id: 'now',
      title: 'Now',
      icon: Clock,
      pillColor: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700',
      x: 520,
      y: 180,
      width: 340,
      isOpen: false,
      zIndex: 1
    },
    cv: {
      id: 'cv',
      title: 'CV / Resume',
      icon: FileText,
      pillColor: 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700',
      x: 480,
      y: 200,
      width: 340,
      isOpen: false,
      zIndex: 1
    },
    themes: {
      id: 'themes',
      title: 'Themes Switcher',
      icon: Palette,
      pillColor: 'bg-pink-100 dark:bg-pink-950/80 text-pink-900 dark:text-pink-200 border-pink-300 dark:border-pink-700',
      x: 520,
      y: 140,
      width: 320,
      isOpen: false,
      zIndex: 8
    }
  });

  // Responsive adjustments for mobile screen widths
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setWindows((prev) => ({
        ...prev,
        about: { ...prev.about, x: 12, y: 70, width: window.innerWidth - 24, isOpen: true },
        work: { ...prev.work, x: 12, y: 110, width: window.innerWidth - 24, isOpen: false }
      }));
    }
  }, []);

  // Bring window to top
  const focusWindow = (id) => {
    sounds.playClick();
    setTopMaxZ((prev) => {
      const nextZ = prev + 1;
      setWindows((w) => ({
        ...w,
        [id]: { ...w[id], zIndex: nextZ }
      }));
      return nextZ;
    });
  };

  // Toggle window open / closed
  const toggleWindow = (id) => {
    sounds.playPop();
    setWindows((prev) => {
      const win = prev[id];
      const nextState = !win.isOpen;
      const nextZ = nextState ? topMaxZ + 1 : win.zIndex;
      if (nextState) setTopMaxZ(nextZ);
      return {
        ...prev,
        [id]: { ...win, isOpen: nextState, zIndex: nextZ }
      };
    });
  };

  // Dragging logic with Pointer Events
  const draggingRef = useRef(null);

  const startDrag = (e, id) => {
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) return;
    
    e.preventDefault();
    focusWindow(id);
    
    const win = windows[id];
    draggingRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      initX: win.x,
      initY: win.y
    };

    const handlePointerMove = (moveEvent) => {
      if (!draggingRef.current) return;
      const dx = moveEvent.clientX - draggingRef.current.startX;
      const dy = moveEvent.clientY - draggingRef.current.startY;
      
      const newX = Math.max(10, draggingRef.current.initX + dx);
      const newY = Math.max(70, draggingRef.current.initY + dy);

      setWindows((prev) => ({
        ...prev,
        [draggingRef.current.id]: {
          ...prev[draggingRef.current.id],
          x: newX,
          y: newY
        }
      }));
    };

    const handlePointerUp = () => {
      draggingRef.current = null;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  // Intelligent Layout Helpers (Zero Overlap!)
  const fitAll = () => {
    sounds.playPop();
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setWindows((prev) => ({
        ...prev,
        about: { ...prev.about, x: 12, y: 70, isOpen: true },
        work: { ...prev.work, x: 12, y: 110, isOpen: false }
      }));
      return;
    }

    // Neat 2-column or 3-column arrangement with generous vertical gap
    setWindows((prev) => ({
      ...prev,
      about: { ...prev.about, x: 40, y: 80, width: 400, isOpen: true, zIndex: 10 },
      work: { ...prev.work, x: 460, y: 80, width: 480, isOpen: true, zIndex: 11 },
      stack: { ...prev.stack, x: 960, y: 80, width: 400, isOpen: true, zIndex: 12 },
      experience: { ...prev.experience, x: 40, y: 540, width: 400, isOpen: true, zIndex: 13 },
      arcade: { ...prev.arcade, x: 460, y: 540, width: 480, isOpen: true, zIndex: 14 },
      contact: { ...prev.contact, x: 960, y: 540, width: 400, isOpen: true, zIndex: 15 }
    }));
  };

  const minimizeAll = () => {
    sounds.playPop();
    setWindows((prev) => {
      const updated = {};
      Object.keys(prev).forEach((k) => {
        updated[k] = { ...prev[k], isOpen: false };
      });
      return updated;
    });
  };

  const scatterRandom = () => {
    sounds.playPop();
    setWindows((prev) => {
      const updated = {};
      Object.keys(prev).forEach((k) => {
        const randX = Math.floor(Math.random() * (Math.max(window.innerWidth - 500, 400))) + 40;
        const randY = Math.floor(Math.random() * 320) + 90;
        updated[k] = { ...prev[k], x: Math.max(20, randX), y: Math.max(80, randY), isOpen: true };
      });
      return updated;
    });
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    sounds.interfaceSounds = next;
    setSoundEnabled(next);
  };

  const toggleAmbience = () => {
    const next = sounds.toggleAmbience();
    setAmbientPlaying(next);
  };

  return (
    <div
      className={`fixed inset-0 overflow-auto select-none font-sans transition-colors duration-300 ${
        curTheme.isDark ? 'dark' : ''
      }`}
      style={{
        backgroundColor: curTheme.bg,
        color: curTheme.text,
        backgroundImage: `radial-gradient(circle, ${curTheme.grid} 1.5px, transparent 1.5px)`,
        backgroundSize: '24px 24px'
      }}
    >
      {/* Interactive Cursor Spotlight Lamp */}
      <CursorLamp isDark={curTheme.isDark} />

      {/* 1. TOP CONTROL BAR */}
      <header
        className="fixed top-0 left-0 right-0 z-50 h-14 px-4 flex items-center justify-between border-b backdrop-blur-md transition-colors"
        style={{
          backgroundColor: `${curTheme.bg}f0`,
          borderColor: curTheme.cardBorder
        }}
      >
        {/* Left Action Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          <button
            onClick={fitAll}
            className="px-3 py-1.5 rounded-xl border text-xs font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-1.5 shadow-xs"
            style={{ borderColor: curTheme.cardBorder }}
            title="Rapikan semua jendela tanpa tumpang-tindih"
          >
            <LayoutGrid className="w-3.5 h-3.5 opacity-80" />
            <span className="hidden sm:inline">Rapikan Layar (Fit)</span>
          </button>

          <button
            onClick={minimizeAll}
            className="px-2.5 py-1.5 rounded-xl border text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-1"
            style={{ borderColor: curTheme.cardBorder }}
            title="Sembunyikan semua jendela"
          >
            <Minus className="w-3.5 h-3.5 opacity-70" />
            <span className="hidden sm:inline">Minimise all</span>
          </button>

          <button
            onClick={scatterRandom}
            className="px-2.5 py-1.5 rounded-xl border text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-1"
            style={{ borderColor: curTheme.cardBorder }}
            title="Sebar posisi acak"
          >
            <Shuffle className="w-3.5 h-3.5 opacity-70" />
            <span className="hidden sm:inline">Random</span>
          </button>

          {/* Theme Switcher Quick Pill */}
          <button
            onClick={() => toggleWindow('themes')}
            className="px-3 py-1.5 rounded-xl border text-xs font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-1.5 shadow-xs"
            style={{ borderColor: curTheme.cardBorder }}
          >
            <Palette className="w-3.5 h-3.5 text-pink-500" />
            <span className="capitalize hidden md:inline">Tema: {theme.replace('-', ' ')}</span>
          </button>
        </div>

        {/* Center Name Badge */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-amber-400 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
            JM
          </div>
          <div className="text-left">
            <div className="font-bold text-xs tracking-tight">Jihan Maisaroh, S.Tr.Stat.</div>
            <div className="text-[10px] opacity-65 font-mono">Polstat STIS • Palu, Indonesia</div>
          </div>
        </div>

        {/* Right Controls: Sound & Exit Canvas */}
        <div className="flex items-center gap-2">
          {/* Sound Pill & Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSoundMenuOpen(!soundMenuOpen)}
              className="px-2.5 py-1.5 rounded-xl border text-xs font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-1.5 shadow-xs"
              style={{ borderColor: curTheme.cardBorder }}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-amber-500" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 opacity-50" />
              )}
              <span className="hidden sm:inline">Sound</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {soundMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-52 p-3 rounded-2xl border shadow-xl backdrop-blur-xl z-50 text-xs space-y-3"
                style={{
                  backgroundColor: curTheme.cardBg,
                  borderColor: curTheme.cardBorder
                }}
              >
                <div className="flex items-center justify-between pb-2 border-b border-inherit">
                  <span className="font-bold">Audio Cues</span>
                  <button
                    onClick={() => {
                      toggleSound();
                      sounds.playPop();
                    }}
                    className={`w-8 h-4 rounded-full transition-colors relative ${
                      soundEnabled ? 'bg-amber-400' : 'bg-stone-300 dark:bg-stone-700'
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${
                        soundEnabled ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-[11px] opacity-80 flex items-center gap-1">
                    <Music className="w-3 h-3 text-indigo-400" />
                    <span>Lo-Fi Ambience</span>
                  </span>
                  <button
                    onClick={() => {
                      toggleAmbience();
                      sounds.playPop();
                    }}
                    className={`w-8 h-4 rounded-full transition-colors relative ${
                      ambientPlaying ? 'bg-indigo-500' : 'bg-stone-300 dark:bg-stone-700'
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${
                        ambientPlaying ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Theme Switcher Button */}
          <button
            onClick={() => {
              sounds.playPop();
              toggleWindow('themes');
            }}
            className="px-2.5 py-1.5 rounded-xl border text-xs font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-1.5 shadow-xs"
            style={{ borderColor: curTheme.cardBorder }}
            title="Ubah Tema & Warna"
          >
            <Palette className="w-3.5 h-3.5 text-pink-500" />
            <span className="hidden sm:inline">Ubah Tema</span>
          </button>

          {/* Switch to Normal Scroll Site */}
          <button
            onClick={() => {
              sounds.playClick();
              if (typeof document !== 'undefined') {
                document.documentElement.classList.remove('dark');
                document.body.style.backgroundColor = '#f5f3ec';
                document.body.style.color = '#1c1917';
              }
              onExitToScroll();
            }}
            className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs tracking-wide transition-all shadow-md flex items-center gap-1.5 hover:scale-105"
          >
            <span>The Site (Scroll View)</span>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180 stroke-[2.5]" />
          </button>
        </div>
      </header>

      {/* 2. DRAGGABLE WINDOWS CANVAS AREA */}
      <main className="relative min-w-[1450px] min-h-[1100px] pt-16 pb-40">
        {/* Canvas Center Hero Anchor (Visible like Kevin Mathew's Site!) */}
        <div className="absolute top-[280px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto select-none z-0 px-4">
          <div className="w-20 h-20 rounded-full mx-auto mb-3 bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 p-1 shadow-xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white dark:bg-stone-900 flex items-center justify-center font-extrabold text-2xl text-stone-900 dark:text-stone-100 shadow-inner">
              JM
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-stone-900 dark:text-stone-100">
            Jihan Maisaroh
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold bg-amber-400/20 text-amber-900 dark:text-amber-200 border-amber-400/40 mb-2">
            <span>Data Analyst & Full-Stack Automation Engineer</span>
            <span className="opacity-40">•</span>
            <span>S.Tr.Stat. (STIS)</span>
          </div>
          <div className="text-[11px] font-mono opacity-70 tracking-widest uppercase mb-5">
            Palu, Sulawesi Tengah • Politeknik Statistika STIS
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <button
              onClick={() => toggleWindow('work')}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-xs shadow-md transition-all hover:scale-105"
            >
              💼 Buka Portofolio Proyek
            </button>
            <button
              onClick={() => toggleWindow('arcade')}
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs shadow-md transition-all hover:scale-105"
            >
              ⚡ Mainkan Sempoa Game
            </button>
          </div>
        </div>

        {/* Floating Windows */}
        {Object.values(windows).map((win) => {
          if (!win.isOpen) return null;

          return (
            <div
              key={win.id}
              onClick={() => focusWindow(win.id)}
              style={{
                transform: `translate3d(${win.x}px, ${win.y}px, 0)`,
                width: win.width,
                zIndex: win.zIndex,
                backgroundColor: curTheme.cardBg,
                borderColor: curTheme.cardBorder
              }}
              className="absolute top-0 left-0 rounded-2xl border shadow-xl transition-shadow hover:shadow-2xl overflow-hidden flex flex-col cursor-default max-h-[500px]"
            >
              {/* Window Header Bar (Drag Handle) */}
              <div
                onPointerDown={(e) => startDrag(e, win.id)}
                className="h-10 px-3.5 border-b flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
                style={{ borderColor: curTheme.cardBorder }}
              >
                {/* Title Pill */}
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border text-xs font-bold ${win.pillColor}`}
                >
                  <win.icon className="w-3.5 h-3.5" />
                  <span>{win.title}</span>
                </div>

                {/* Window Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWindow(win.id);
                    }}
                    className="w-5 h-5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                    title="Minimalkan"
                  >
                    <Minus className="w-3 h-3" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWindow(win.id);
                    }}
                    className="w-5 h-5 rounded-full hover:bg-rose-500/20 text-rose-500 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                    title="Tutup"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Window Inner Content with Clean Scrolling */}
              <div className="flex-1 overflow-y-auto">
                {win.id === 'about' && <AboutWindow />}
                {win.id === 'work' && <WorkWindow />}
                {win.id === 'experience' && <ExperienceWindow />}
                {win.id === 'stack' && <StackWindow />}
                {win.id === 'contact' && <ContactWindow />}
                {win.id === 'now' && <NowWindow />}
                {win.id === 'cv' && <CVWindow onSwitchToScroll={onExitToScroll} />}
                {win.id === 'themes' && (
                  <ThemesWindow currentTheme={theme} onSelectTheme={setTheme} />
                )}
                {win.id === 'arcade' && <ArcadeGame />}
              </div>
            </div>
          );
        })}
      </main>

      {/* 3. MACOS-STYLE BOTTOM FLOATING DOCK */}
      <footer className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div
          className="px-3 py-2 rounded-2xl border shadow-2xl backdrop-blur-2xl flex items-center gap-1.5 sm:gap-2.5 transition-all"
          style={{
            backgroundColor: `${curTheme.cardBg}eb`,
            borderColor: curTheme.cardBorder
          }}
        >
          {/* Dock Icon: About */}
          <DockIcon
            icon={User}
            color="bg-amber-400 text-stone-900"
            isOpen={windows.about.isOpen}
            title="About Me"
            onClick={() => toggleWindow('about')}
          />

          {/* Dock Icon: Work */}
          <DockIcon
            icon={Briefcase}
            color="bg-emerald-500 text-white"
            isOpen={windows.work.isOpen}
            title="Work & Projects"
            onClick={() => toggleWindow('work')}
          />

          {/* Dock Icon: Experience */}
          <DockIcon
            icon={Calendar}
            color="bg-rose-500 text-white"
            isOpen={windows.experience.isOpen}
            title="Experience & BPS"
            onClick={() => toggleWindow('experience')}
          />

          {/* Dock Icon: Stack */}
          <DockIcon
            icon={Layers}
            color="bg-sky-400 text-stone-950"
            isOpen={windows.stack.isOpen}
            title="Tech Stack"
            onClick={() => toggleWindow('stack')}
          />

          {/* Dock Icon: Contact */}
          <DockIcon
            icon={MessageSquare}
            color="bg-teal-500 text-white"
            isOpen={windows.contact.isOpen}
            title="Contact & WhatsApp"
            onClick={() => toggleWindow('contact')}
          />

          {/* Dock Icon: CV */}
          <DockIcon
            icon={FileText}
            color="bg-amber-500 text-white"
            isOpen={windows.cv.isOpen}
            title="Curriculum Vitae"
            onClick={() => toggleWindow('cv')}
          />

          {/* Dock Icon: Arcade (Games) */}
          <DockIcon
            icon={Gamepad2}
            color="bg-lime-400 text-stone-950"
            isOpen={windows.arcade.isOpen}
            title="Arcade (Sempoa Math & Snake)"
            onClick={() => toggleWindow('arcade')}
          />

          {/* Dock Icon: Now */}
          <DockIcon
            icon={Clock}
            color="bg-emerald-400 text-stone-950"
            isOpen={windows.now.isOpen}
            title="Now (Current Status)"
            onClick={() => toggleWindow('now')}
          />

          {/* Dock Icon: Themes */}
          <DockIcon
            icon={Palette}
            color="bg-pink-400 text-stone-950"
            isOpen={windows.themes.isOpen}
            title="Theme Switcher"
            onClick={() => toggleWindow('themes')}
          />

          {/* Divider */}
          <div className="w-[1px] h-6 bg-stone-300 dark:bg-stone-700 mx-1" />

          {/* Direct WhatsApp External */}
          <a
            href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow hover:scale-125 transition-transform"
            title="WhatsApp Langsung (+62 896-4432-7893)"
          >
            <span>WA</span>
          </a>

          {/* Direct LinkedIn External */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-xs shadow hover:scale-125 transition-transform"
            title="Buka LinkedIn"
          >
            <span>in</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

// Sub-component for individual Dock Icon with bounce & dot indicator
function DockIcon({ icon: Icon, color, isOpen, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative group p-1 flex flex-col items-center"
      title={title}
    >
      <div
        className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-125 group-active:scale-95`}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Active Dot Indicator */}
      <span
        className={`w-1.5 h-1.5 rounded-full mt-1 transition-all ${
          isOpen ? 'bg-amber-500 opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      />
    </button>
  );
}
