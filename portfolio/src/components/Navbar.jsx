import React, { useState, useEffect } from 'react';

const Navbar = ({ lang, setLang, t, onOpenCVModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'experience', 'projects', 'certificates', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: 'hero' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.experience, id: 'experience' },
    { name: t.nav.projects, id: 'projects' },
    { name: t.nav.certificates, id: 'certificates' },
    { name: t.nav.skills, id: 'skills' },
    { name: t.nav.contact, id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center p-4">
      <div 
        className={`w-full max-w-[1320px] h-[64px] rounded-full px-6 flex items-center justify-between transition-all duration-500 border ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-2xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
            : 'bg-black/40 backdrop-blur-xl border-white/10'
        }`}
      >
        {/* Apple-style Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-serif text-sm font-bold text-amber-300">
              İS
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              İZZET CAN <span className="text-amber-400">SORNA</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
              ML & Computer Vision
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive ? 'text-amber-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-amber-400 rounded-full shadow-[0_0_10px_#f59e0b]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions & Social Links */}
        <div className="flex items-center gap-3">
          {/* GitHub Icon */}
          <a
            href="https://github.com/JustSuffer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center hover:bg-amber-400 hover:text-black hover:scale-105 transition-all"
            title="GitHub Profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/izzetcansorna/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center hover:bg-amber-400 hover:text-black hover:scale-105 transition-all"
            title="LinkedIn Profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
            </svg>
          </a>

          {/* EN | TR Switcher */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
            <button
              className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full transition-all ${
                lang === 'EN' ? 'bg-amber-400 text-black' : 'text-zinc-400 hover:text-white'
              }`}
              onClick={() => setLang('EN')}
            >
              EN
            </button>
            <span className="text-zinc-600 text-xs">|</span>
            <button
              className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full transition-all ${
                lang === 'TR' ? 'bg-amber-400 text-black' : 'text-zinc-400 hover:text-white'
              }`}
              onClick={() => setLang('TR')}
            >
              TR
            </button>
          </div>

          <button
            onClick={onOpenCVModal}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-black font-sans text-xs font-extrabold hover:bg-amber-400 transition-all hover:scale-105"
          >
            {t.nav.resume}
          </button>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-black/95 border border-white/20 rounded-3xl p-6 shadow-2xl backdrop-blur-3xl z-50 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-lg font-bold text-white hover:text-amber-400 transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="w-full py-3 rounded-full bg-amber-400 text-black font-extrabold text-sm"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCVModal();
            }}
          >
            {t.nav.resume}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
