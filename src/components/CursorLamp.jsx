import React, { useEffect, useRef, useState } from 'react';

export default function CursorLamp({ isDark = false }) {
  const lampRef = useRef(null);
  const coreRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mouseX = -999;
    let mouseY = -999;
    let currentX = -999;
    let currentY = -999;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
      mouseX = -999;
      mouseY = -999;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth lerp animation for buttery-smooth 120fps motion
    const animate = () => {
      if (mouseX !== -999 && mouseY !== -999) {
        // Linear interpolation for smooth trailing
        currentX += (mouseX - currentX) * 0.25;
        currentY += (mouseY - currentY) * 0.25;

        if (lampRef.current) {
          lampRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
        if (coreRef.current) {
          coreRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  // Warm golden amber for cream/light theme, Cyan/Indigo for dark theme
  const lampColor = isDark
    ? 'radial-gradient(circle, rgba(6, 182, 212, 0.20) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)'
    : 'radial-gradient(circle, rgba(251, 191, 36, 0.28) 0%, rgba(245, 158, 11, 0.12) 40%, rgba(217, 119, 6, 0.03) 65%, transparent 80%)';

  const coreColor = isDark
    ? 'radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, rgba(245, 158, 11, 0.2) 50%, transparent 80%)';

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-40 overflow-hidden transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Broad Ambient Spotlight Beam (Lampu Sorot Lebar) */}
      <div
        ref={lampRef}
        className="absolute top-0 left-0 w-[560px] h-[560px] -ml-[280px] -mt-[280px] rounded-full will-change-transform mix-blend-multiply dark:mix-blend-screen"
        style={{ background: lampColor }}
      />

      {/* 2. Intense Core Lamp Glow (Bohlam / Pusat Cahaya) */}
      <div
        ref={coreRef}
        className="absolute top-0 left-0 w-[160px] h-[160px] -ml-[80px] -mt-[80px] rounded-full will-change-transform"
        style={{ background: coreColor }}
      />

      {/* 3. Glowing Cursor Lamp Ring (Lensa Kursor) */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border transition-colors duration-200 will-change-transform ${
          isDark
            ? 'border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.6)] bg-cyan-400/10'
            : 'border-amber-500/70 shadow-[0_0_16px_rgba(245,158,11,0.55)] bg-amber-400/20'
        }`}
      />
    </div>
  );
}
