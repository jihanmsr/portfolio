import React, { useState } from 'react';
import CanvasOS from './components/canvas/CanvasOS';
import CyberBackground from './components/CyberBackground';
import HeroSection from './components/HeroSection';
import TechStackTicker from './components/TechStackTicker';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import CredentialsTimeline from './components/CredentialsTimeline';
import FooterCTA from './components/FooterCTA';
import { Sparkles, MessageCircle, ArrowUpRight, Menu, X, LayoutGrid } from 'lucide-react';

export default function App() {
  // 'canvas' gives the exact interactive desktop experience from the video!
  // 'scroll' gives the classic single-page portfolio layout.
  const [viewMode, setViewMode] = useState('canvas');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (viewMode === 'canvas') {
    return <CanvasOS onExitToScroll={() => setViewMode('scroll')} />;
  }

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 relative overflow-x-hidden">
      {/* 1. Moving Cyber Particle Background (Zero Lag, 60 FPS) */}
      <CyberBackground />

      {/* 2. Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#05070f]/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              JM
            </div>
            <div>
              <div className="font-bold text-white text-sm tracking-tight group-hover:text-cyan-400 transition-colors">
                Jihan Maisaroh
              </div>
              <div className="text-[10px] font-mono text-cyan-400/90 font-medium">
                S.Tr.Stat. • Polstat STIS
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <button
              onClick={() => setViewMode('canvas')}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5 transition-colors group"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Canvas OS Mode</span>
            </button>
            <a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Studi Kasus</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Layanan</a>
            <a href="#credentials" className="hover:text-cyan-400 transition-colors">Kredensial</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setViewMode('canvas')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs transition-all shadow-sm"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Buka Canvas OS</span>
            </button>
            <a
              href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-slate-950 font-bold text-xs transition-all duration-200"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-4 space-y-3 font-semibold text-sm">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setViewMode('canvas');
              }}
              className="w-full text-left py-2 px-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold text-xs flex items-center gap-2"
            >
              <LayoutGrid className="w-4 h-4 text-cyan-400" />
              <span>Buka Mode Interaktif Canvas OS</span>
            </button>
            <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Tech Stack</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Studi Kasus</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Layanan</a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Kredensial</a>
            <a
              href="https://wa.me/6289644327893?text=Halo%20Mbak%20Jihan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
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
