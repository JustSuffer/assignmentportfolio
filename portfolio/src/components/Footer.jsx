import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="relative py-16 border-t border-white/10 bg-black text-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-sans text-xl font-extrabold tracking-tight">
            İZZET CAN <span className="text-amber-400">SORNA</span>
          </span>
          <span className="font-mono text-xs text-zinc-500 mt-1">{t.footer.sub}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-mono text-xs uppercase tracking-wider text-zinc-400">
          <a href="#hero" className="hover:text-amber-400 transition-colors">{t.nav.home}</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">{t.nav.about}</a>
          <a href="#experience" className="hover:text-amber-400 transition-colors">{t.nav.experience}</a>
          <a href="#projects" className="hover:text-amber-400 transition-colors">{t.nav.projects}</a>
          <a href="#diagnostics" className="hover:text-amber-400 transition-colors">{t.nav.aiLab}</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex flex-col items-center md:items-end font-mono text-xs text-zinc-500">
          <span>{t.footer.copy}</span>
          <span className="text-amber-400 font-bold mt-1">{t.footer.deployed}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
