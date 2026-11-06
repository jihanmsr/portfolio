import React, { useState } from 'react';
import CanvasOS from './components/canvas/CanvasOS';
import CyberBackground from './components/CyberBackground';
import CursorLight from './components/CursorLight';
import HeroSection from './components/HeroSection';
import TechStackTicker from './components/TechStackTicker';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import CredentialsTimeline from './components/CredentialsTimeline';
import FooterCTA from './components/FooterCTA';
import { Sparkles, MessageCircle, ArrowUpRight, Menu, X, LayoutGrid } from 'lucide-react';

export default function App() {
  // 'canvas' gives the exact interactive desktop experience from the video!
  // 'scroll' gives the classic single-page portfolio layout in the same warm cream aesthetic.
  const [viewMode, setViewMode] = useState('canvas');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (viewMode === 'canvas') {
    return <CanvasOS onExitToScroll={() => setViewMode('scroll')} />;
  }

  return (
    <div className="min-h-screen bg-[#f5f3ec] text-stone-900 relative overflow-x-hidden font-sans">
      {/* 1. Warm Editorial Paper Background */}
      <CyberBackground />

      {/* 2. Soft Ambient Cursor Studio Spotlight (Pure light, no ugly blobs) */}
      <CursorLight />

      {/* 2. Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3ec]/90 backdrop-blur-md border-b border-[#e2ddd0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="./jihan_logo_square.png"
              alt="Jihan Maisaroh Logo"
              className="w-9 h-9 rounded-xl object-contain shadow-xs border border-[#e2ddd0] group-hover:scale-105 transition-transform bg-[#f7eac7]"
            />
            <div>
              <div className="font-bold text-stone-900 text-sm tracking-tight group-hover:text-amber-800 transition-colors">
                Jihan Maisaroh
              </div>
              <div className="text-[10px] font-mono text-stone-500 font-medium">
                S.Tr.Stat. • Polstat STIS
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-stone-600">
            <button
              onClick={() => setViewMode('canvas')}
              className="text-stone-800 hover:text-stone-950 font-bold flex items-center gap-1.5 transition-colors group"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-stone-700 group-hover:scale-110 transition-transform" />
              <span>Mode Kanvas</span>
            </button>
            <a href="#tech-stack" className="hover:text-stone-950 transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-stone-950 transition-colors">Studi Kasus</a>
            <a href="#services" className="hover:text-stone-950 transition-colors">Layanan</a>
            <a href="#credentials" className="hover:text-stone-950 transition-colors">Kredensial</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setViewMode('canvas')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-all shadow-sm"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-amber-300" />
              <span>Mode Kanvas</span>
            </button>
            <a
              href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 font-bold text-xs transition-all duration-200"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-stone-200 border border-stone-300 text-stone-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f5f3ec] border-b border-[#e2ddd0] px-6 py-4 space-y-3 font-semibold text-sm">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setViewMode('canvas');
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
            >
              <LayoutGrid className="w-4 h-4 text-amber-300" />
              <span>Buka Mode Interaktif Canvas OS</span>
            </button>
            <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-950">Tech Stack</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-950">Studi Kasus</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-950">Layanan</a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-950">Kredensial</a>
            <a
              href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl border border-stone-400 text-stone-900 font-bold text-xs"
            >
              <span>Hubungi via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </header>

      {/* 3. Hero Section */}
      <HeroSection onOpenCanvas={() => setViewMode('canvas')} />

      {/* 4. Tech Stack & Programming Languages */}
      <TechStackTicker />

      {/* 5. Featured Projects & Case Studies */}
      <ProjectsSection />

      {/* 6. Services & Monetization Offerings */}
      <ServicesSection />

      {/* 7. Academic & Experience Milestones */}
      <CredentialsTimeline />

      {/* 8. Footer Call To Action */}
      <FooterCTA />
    </div>
  );
}
