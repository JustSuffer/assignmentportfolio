import React, { useEffect, useRef } from 'react';

const LatentSpaceCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse Parallax coordinates
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

    // Generate 1500 - 2000 Latent Vector Particles
    const particleCount = Math.min(Math.floor((width * height) / 1200), 1800);
    const particles = [];

    // Colors matching Obscura Spec v1.0
    // 95% Muted White (#ECE8E3), 3% Old Gold (#C4A86A), 2% Muted Blue (#5B7592)
    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let color = 'rgba(236, 232, 227, ';
      if (rand > 0.97) color = 'rgba(196, 168, 106, '; // Gold
      else if (rand > 0.95) color = 'rgba(91, 117, 146, '; // Blue

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5, // Depth factor
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.8 + 0.5,
        baseAlpha: Math.random() * 0.45 + 0.15,
        color: color
      });
    }

    let breathTime = 0;

    const render = () => {
      breathTime += 0.005;

      // Mouse position easing for camera parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      const mouseOffsetX = (mouse.x - width / 2) * 0.03;
      const mouseOffsetY = (mouse.y - height / 2) * 0.03;

      // Clear with Obscura Primary Dark background (#0D0F11)
      ctx.fillStyle = '#0D0F11';
      ctx.fillRect(0, 0, width, height);

      // Render Radial Latent Gradient Spotlights
      const bgGrad1 = ctx.createRadialGradient(
        width * 0.3 + mouseOffsetX * 1.5,
        height * 0.4 + mouseOffsetY * 1.5,
        10,
        width * 0.3,
        height * 0.4,
        width * 0.6
      );
      bgGrad1.addColorStop(0, 'rgba(196, 168, 106, 0.035)'); // Gold glow
      bgGrad1.addColorStop(1, 'rgba(13, 15, 17, 0)');

      const bgGrad2 = ctx.createRadialGradient(
        width * 0.7 - mouseOffsetX * 1.2,
        height * 0.6 - mouseOffsetY * 1.2,
        10,
        width * 0.7,
        height * 0.6,
        width * 0.5
      );
      bgGrad2.addColorStop(0, 'rgba(91, 117, 146, 0.04)'); // Blue glow
      bgGrad2.addColorStop(1, 'rgba(13, 15, 17, 0)');

      ctx.fillStyle = bgGrad1;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = bgGrad2;
      ctx.fillRect(0, 0, width, height);

      // Render Particles & Temporary Connection Lines
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const posX = p.x + mouseOffsetX * p.z;
        const posY = p.y + mouseOffsetY * p.z;

        // Draw Particle Dot
        ctx.beginPath();
        ctx.arc(posX, posY, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.baseAlpha + ')';
        ctx.fill();

        // Connect nearby vector particles with subtle 3% - 8% opacity lines
        for (let j = i + 1; j < Math.min(i + 15, particleCount); j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 7000) {
            const opacity = (1 - distSq / 7000) * 0.07;
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(p2.x + mouseOffsetX * p2.z, p2.y + mouseOffsetY * p2.z);
            ctx.strokeStyle = `rgba(215, 191, 135, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* 2% Noise Film Grain & Vignette Overlay */}
      <div className="obscura-vignette" />
      <div className="obscura-grain" />
    </div>
  );
};

export default LatentSpaceCanvas;
