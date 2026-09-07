import React from 'react';

const Hero = ({ t, onOpenCVModal }) => {
  const metricsList = Array.isArray(t?.hero?.metrics)
    ? t.hero.metrics
    : [
        { val: '20+', lbl: 'AI & Engineering Projects' },
        { val: '4+', lbl: 'Industry Engineering Roles' },
        { val: '17', lbl: 'Professional Certifications' },
        { val: '98%', lbl: 'Diagnostic Precision' }
      ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 overflow-hidden bg-black">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10 my-auto">
        
        {/* Eyebrow Product Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 font-mono text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>{t?.hero?.badge || 'OBSCURA PRO SPEC // OBSCURA SPEC V1.0'}</span>
        </div>

        {/* Apple Product Giant Stacked Title */}
        <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-[115px] font-black tracking-tight text-white leading-[0.92] mb-8">
          MACHINE LEARNING. <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            PRO VISION.
          </span> <br />
          <span className="text-zinc-500">ROBOTIC INTELLIGENCE.</span>
        </h1>

        {/* Sub-headline Lead Paragraph */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl font-medium leading-relaxed mb-10">
          {t?.hero?.lead}
        </p>

        {/* Apple Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a 
            href="/CV/CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="Izzet_Can_Sorna_CV.pdf"
            className="px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] inline-flex items-center gap-2"
          >
            📄 {t?.hero?.btnCV || 'DOWNLOAD RESUME (PDF)'}
          </a>
          <button 
            onClick={onOpenCVModal}
            className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            🔍 PREVIEW CV
          </button>
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-white font-extrabold text-sm uppercase tracking-wider hover:bg-white/20 hover:border-amber-400 transition-all"
          >
            {t?.hero?.btnProjects || 'EXPLORE PROJECTS'} →
          </a>
        </div>

        {/* Apple Metric Spec Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10 w-full">
          {metricsList.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-sans text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {m.val}
              </span>
              <span className="font-mono text-xs text-zinc-400 mt-1 uppercase font-semibold">
                {m.lbl}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Hero;
