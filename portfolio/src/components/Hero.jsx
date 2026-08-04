import React from 'react';

const Hero = ({ t, onOpenCVModal }) => {
  // Safe fallbacks for metrics and telemetry/panel data
  const metricsList = Array.isArray(t?.hero?.metrics)
    ? t.hero.metrics
    : [
        { val: '20+', lbl: t?.hero?.metrics?.brainMap || 'AI & Engineering Projects' },
        { val: '4+', lbl: t?.hero?.metrics?.skinDiag || 'Industry Engineering Roles' },
        { val: '98%', lbl: t?.hero?.metrics?.robotLatency || 'Diagnostic Precision' },
        { val: '97.03%', lbl: t?.hero?.metrics?.eyelidInference || 'Model Recall' }
      ];

  const panelData = t?.hero?.panel || {
    title: 'LATENT_VECTOR_TELEMETRY',
    status: t?.hero?.telemetry?.active || 'SYSTEM_ACTIVE',
    mcu: 'ESP32-S3 / PyTorch 2.x',
    fps: t?.hero?.telemetry?.frameRate || '60 FPS WebGL Engine',
    dataset: t?.hero?.telemetry?.dataset || '3.5K+ Clinical Samples',
    latency: t?.hero?.telemetry?.latency || '15ms Latency',
    manuscript: t?.hero?.telemetry?.manuscript || 'Multimedia Tools & Apps'
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Professional Identity & Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4A86A]/10 border border-[#C4A86A]/30 text-[#D7BF87] font-mono text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C4A86A] animate-pulse" />
              <span>{t?.hero?.badge || 'LATENT SPACE VECTOR ENVIRONMENT // OBSCURA SPEC V1.0'}</span>
            </div>

            {/* 96px Elegant Serif Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#ECE8E3] leading-[1.08] mb-6">
              {t?.hero?.titleLine1 || 'Engineering'} <br />
              <span className="text-gradient-gold">{t?.hero?.titleLine2 || 'Production AI'}</span> & <br />
              <span className="text-gradient-blue">{t?.hero?.titleLine3 || 'Computer Vision'}</span>
            </h1>

            {/* Executive Lead Text */}
            <p className="font-sans text-lg md:text-xl text-[#D2CEC8] max-w-2xl font-normal leading-relaxed mb-8">
              {t?.hero?.lead}
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="obscura-btn-gold-solid" onClick={onOpenCVModal}>
                <span>📄 {t?.hero?.btnCV || 'Download Resume (PDF)'}</span>
              </button>
              <a href="#projects" className="obscura-btn-glass">
                <span>{t?.hero?.btnProjects || 'Explore Projects'} →</span>
              </a>
            </div>

            {/* Animated Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 w-full">
              {metricsList.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-[#C4A86A]">
                    {m.val}
                  </span>
                  <span className="font-mono text-xs text-[#84827D] mt-1">
                    {m.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating 3D Telemetry Glass Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="obscura-floating-panel w-full max-w-md">
              <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C4A86A]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7E272B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B7592]" />
                </div>
                <span className="font-mono text-xs tracking-wider text-[#84827D]">
                  {panelData.title}
                </span>
              </div>

              {/* Neural Topology Visualization Box */}
              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-[#0D0F11]/80 border border-white/10 flex justify-between items-center">
                  <span className="font-mono text-xs text-[#C4A86A]">FRAMEWORK</span>
                  <span className="font-mono text-xs font-semibold text-[#ECE8E3]">{panelData.mcu}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0D0F11]/80 border border-white/10 flex justify-between items-center">
                  <span className="font-mono text-xs text-[#5B7592]">3D ENGINE</span>
                  <span className="font-mono text-xs font-semibold text-[#ECE8E3]">{panelData.fps}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0D0F11]/80 border border-white/10 flex justify-between items-center">
                  <span className="font-mono text-xs text-[#A7383D]">DATASET</span>
                  <span className="font-mono text-xs font-semibold text-[#ECE8E3]">{panelData.dataset}</span>
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-xs text-[#A8A49D]">{panelData.status}</span>
                </div>
                <span className="font-mono text-xs text-[#D7BF87]">{panelData.latency}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
