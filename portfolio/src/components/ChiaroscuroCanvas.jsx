import React, { useEffect, useRef } from 'react';

const ChiaroscuroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Create 3D Wave Particle Points
    const particleCount = Math.min(80, Math.floor(width / 20));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        radius: Math.random() * 2 + 1,
        color: i % 5 === 0 ? '#f43f5e' : i % 2 === 0 ? '#d4af37' : '#38bdf8',
        alpha: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        waveOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Chiaroscuro Light Spotlight Orb at Mouse position
      const lightGradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, Math.max(width, height) * 0.4
      );
      lightGradient.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
      lightGradient.addColorStop(0.4, 'rgba(244, 63, 94, 0.03)');
      lightGradient.addColorStop(1, 'rgba(6, 7, 10, 0)');
      ctx.fillStyle = lightGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Animated Wavy Lighting Lines across background
      ctx.lineWidth = 1;
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const waveY = height * (0.3 + w * 0.25);
        ctx.strokeStyle = w === 0 
          ? 'rgba(212, 175, 55, 0.12)' 
          : w === 1 
          ? 'rgba(244, 63, 94, 0.08)' 
          : 'rgba(51, 65, 85, 0.15)';

        for (let x = 0; x < width; x += 15) {
          const distanceToMouse = Math.hypot(x - mouse.x, waveY - mouse.y);
          const mouseEffect = Math.max(0, (300 - distanceToMouse) / 300) * 40;
          const y = waveY + Math.sin(x * 0.005 + time + w) * 35 + Math.cos(x * 0.002 - time) * 20 - mouseEffect;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // 3. Render 3D Particle Mesh & Connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time + p.waveOffset) * 0.3;
        p.y += p.vy + Math.cos(time + p.waveOffset) * 0.3;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Draw subtle connecting lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 110) * 0.15;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ChiaroscuroCanvas;
