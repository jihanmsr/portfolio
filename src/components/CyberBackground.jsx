import React, { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive lamp
    let mouse = { x: null, y: null, radius: 180 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Subtle graph nodes
    const particleCount = Math.min(50, Math.floor((width * height) / 25000));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      // 1. Interactive Cursor Lamp Beam (Lampu Senter Kursor)
      if (mouse.x !== null && mouse.y !== null) {
        const lamp = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        if (isDark) {
          lamp.addColorStop(0, 'rgba(6, 182, 212, 0.22)');
          lamp.addColorStop(0.4, 'rgba(99, 102, 241, 0.08)');
          lamp.addColorStop(1, 'rgba(6, 182, 212, 0)');
        } else {
          lamp.addColorStop(0, 'rgba(251, 191, 36, 0.32)'); // warm amber lamp
          lamp.addColorStop(0.35, 'rgba(245, 158, 11, 0.12)');
          lamp.addColorStop(0.7, 'rgba(217, 119, 6, 0.03)');
          lamp.addColorStop(1, 'rgba(245, 158, 11, 0)');
        }
        ctx.fillStyle = lamp;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw subtle grid dots (Graph Paper Aesthetic with Lamp Illumination)
      const dotSpacing = 28;
      const defaultDotColor = isDark ? '#1e293b' : '#e2ded4';
      
      for (let x = 14; x < width; x += dotSpacing) {
        for (let y = 14; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);

          // If dot is inside the cursor lamp radius, illuminate it brightly!
          if (mouse.x !== null && mouse.y !== null) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              const intensity = 1 - dist / 180;
              if (isDark) {
                ctx.fillStyle = `rgba(6, 182, 212, ${0.3 + intensity * 0.7})`;
              } else {
                ctx.fillStyle = `rgba(217, 119, 6, ${0.3 + intensity * 0.65})`;
              }
              ctx.fill();
              continue;
            }
          }

          ctx.fillStyle = defaultDotColor;
          ctx.fill();
        }
      }

      // 3. Subtle floating nodes & interactive connections to the lamp
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.5)' : 'rgba(168, 162, 158, 0.5)';
        ctx.fill();

        // Connect particle to mouse cursor lamp if in range!
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const intensity = 1 - dist / 150;
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${intensity * 0.4})`
              : `rgba(245, 158, 11, ${intensity * 0.45})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Glow on connected node
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.6, 0, Math.PI * 2);
            ctx.fillStyle = isDark
              ? `rgba(6, 182, 212, ${intensity * 0.8})`
              : `rgba(245, 158, 11, ${intensity * 0.8})`;
            ctx.fill();
          }
        }

        // Connect node to node
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(148, 163, 184, ${(1 - dist / 100) * 0.15})`
              : `rgba(168, 162, 158, ${(1 - dist / 100) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
