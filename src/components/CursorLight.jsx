import React, { useEffect, useRef, useState } from 'react';

export default function CursorLight() {
  const lightRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = -1000;
    let targetY = -1000;
    let animId;

    const onPointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) setActive(true);
    };

    const onMouseLeave = () => {
      setActive(false);
      targetX = -1000;
      targetY = -1000;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Ultra-fluid 120fps motion interpolation
    const animate = () => {
      if (targetX !== -1000) {
        mouseX += (targetX - mouseX) * 0.16;
        mouseY += (targetY - mouseY) * 0.16;

        if (lightRef.current) {
          lightRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [active]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-700 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 
        High-End Ambient Studio Spotlight (No harsh lines, no muddy colors)
        - On Light/Cream: Silky soft-light illumination that brightens paper texture naturally
        - On Dark: Soft ethereal glow revealing edges
      */}
      <div
        ref={lightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full will-change-transform mix-blend-soft-light dark:mix-blend-screen pointer-events-none"
        style={{
          background:
            'radial-gradient(circle closest-side, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 35%, rgba(255, 255, 255, 0.1) 65%, transparent 100%)'
        }}
      />
    </div>
  );
}

