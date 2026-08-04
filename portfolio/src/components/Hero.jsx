import React from 'react';

const Hero = ({ t, onOpenCVModal }) => {
  const metricsList = Array.isArray(t?.hero?.metrics)
    ? t.hero.metrics
    : [
        { val: '20+', lbl: 'AI & Engineering Projects' },
        { val: '4+', lbl: 'Industry Engineering Roles' },
        { val: '98%', lbl: 'Diagnostic Precision' },
        { val: '97.03%', lbl: 'Model Recall' }
      ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-36 pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: TRIONN Kinetic Stacked Typography */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C4A86A]/15 border border-[#C4A86A]/40 text-[#E5C478] font-mono text-xs font-bold mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C4A86A] animate-pulse" />
              <span>{t?.hero?.badge || 'LATENT SPACE VECTOR ENVIRONMENT // OBSCURA SPEC V1.0'}</span>
            </div>

            {/* TRIONN Massive Stacked Title */}
            <h1 className="trionn-stacked-title text-5xl sm:text-7xl md:text-8xl lg:text-[105px] mb-8">
              MACHINE <br />
              <span className="trionn-word-gold">LEARNING</span> <br />
              <span className="text-[#7693B2]">COMPUTER</span> VISION <br />
              & ROBOTICS
            </h1>

            {/* Executive Lead Text */}
            <p className="font-sans text-lg md:text-xl text-[#D4D4D8] max-w-2xl font-normal leading-relaxed mb-10">
              {t?.hero?.lead}
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <button className="obscura-btn-gold-solid" onClick={onOpenCVModal}>
                <span>📄 {t?.hero?.btnCV || 'DOWNLOAD RESUME'}</span>
              </button>
              <a href="#projects" className="obscura-btn-glass">
                <span>{t?.hero?.btnProjects || 'EXPLORE PROJECTS'} →</span>
              </a>
            </div>

            {/* Metric Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 w-full">
              {metricsList.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-sans text-4xl lg:text-5xl font-black text-[#C4A86A] tracking-tight">
                    {m.val}
                  </span>
                  <span className="font-mono text-xs text-[#71717A] mt-1 uppercase font-semibold">
                    {m.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating Telemetry Glass Panel */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="trionn-card p-8 w-full max-w-md shadow-2xl">
              <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#C4A86A]" />
                  <span className="w-3 h-3 rounded-full bg-[#A7383D]" />
                  <span className="w-3 h-3 rounded-full bg-[#7693B2]" />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#71717A] uppercase">
                  AI_MODEL_TELEMETRY
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#050507] border border-white/10 flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-[#C4A86A]">FRAMEWORK</span>
                  <span className="font-mono text-xs font-bold text-[#FFFFFF]">PyTorch + YOLOv11</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#050507] border border-white/10 flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-[#7693B2]">3D ENGINE</span>
                  <span className="font-mono text-xs font-bold text-[#FFFFFF]">60 FPS WebGL</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#050507] border border-white/10 flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-[#A7383D]">DATASET</span>
                  <span className="font-mono text-xs font-bold text-[#FFFFFF]">3.5K+ Samples</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[#A1A1AA] font-bold">SYSTEM_NOMINAL</span>
                </div>
                <span className="text-[#C4A86A] font-bold">15ms Latency</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
