import React, { useState, useEffect } from 'react';

const Navbar = ({ lang, setLang, t, onOpenCVModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'diagnostics', 'skills', 'contact'];
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
    { name: t.nav.aiLab, id: 'diagnostics' },
    { name: t.nav.skills, id: 'skills' },
    { name: t.nav.contact, id: 'contact' },
  ];

  return (
    <header className={`obscura-navbar-wrapper fixed top-6 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4`}>
      <div className={`obscura-nav-pill ${scrolled ? 'scrolled' : ''}`}>
        {/* Geometric Latent Field Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="obscura-logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#C4A86A" strokeWidth="1.5" strokeDasharray="4 2" />
              <path d="M12 7V17M7 12H17" stroke="#ECE8E3" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="#C4A86A" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-semibold tracking-wider text-[#ECE8E3] group-hover:text-[#C4A86A] transition-colors">
              İZZET CAN <span className="text-[#C4A86A]">SORNA</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#84827D] uppercase">
              ML & CV Engineer
            </span>
          </div>
        </a>

        {/* Center Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`obscura-nav-link relative font-sans text-sm font-medium transition-colors ${
                  isActive ? 'text-[#C4A86A]' : 'text-[#A8A49D] hover:text-[#ECE8E3]'
                }`}
              >
                {link.name}
                {isActive && <span className="active-gold-underline" />}
              </a>
            );
          })}
        </nav>

        {/* Right Actions & Social Links & Language Switcher */}
        <div className="flex items-center gap-3">
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/JustSuffer"
            target="_blank"
            rel="noopener noreferrer"
            className="obscura-social-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/izzetcansorna/"
            target="_blank"
            rel="noopener noreferrer"
            className="obscura-social-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
            </svg>
          </a>

          {/* EN | TR Segmented Language Switcher */}
          <div className="obscura-lang-segmented">
            <button
              className={`lang-segment-btn ${lang === 'EN' ? 'active' : ''}`}
              onClick={() => setLang('EN')}
              title="Switch to English"
            >
              EN
            </button>
            <span className="text-[#5E5E5E] text-xs">|</span>
            <button
              className={`lang-segment-btn ${lang === 'TR' ? 'active' : ''}`}
              onClick={() => setLang('TR')}
              title="Türkçe'ye Geç"
            >
              TR
            </button>
          </div>

          <button className="obscura-btn-gold-sm hidden md:inline-flex" onClick={onOpenCVModal}>
            <span>{t.nav.resume}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#ECE8E3] p-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
        <div className="lg:hidden fixed top-24 left-4 right-4 bg-[#121417] border border-[#C4A86A]/20 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl z-50 flex flex-col gap-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <div className="flex gap-4">
              <a href="https://github.com/JustSuffer" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#C4A86A]">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/izzetcansorna/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#C4A86A]">LinkedIn ↗</a>
            </div>
            <div className="flex items-center gap-1.5 bg-[#171A1E] px-2.5 py-1 rounded-full border border-white/10">
              <button className={`text-xs font-mono font-bold ${lang === 'EN' ? 'text-[#C4A86A]' : 'text-[#84827D]'}`} onClick={() => setLang('EN')}>EN</button>
              <span className="text-[#5E5E5E] text-xs">|</span>
              <button className={`text-xs font-mono font-bold ${lang === 'TR' ? 'text-[#C4A86A]' : 'text-[#84827D]'}`} onClick={() => setLang('TR')}>TR</button>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-base text-[#D2CEC8] hover:text-[#C4A86A] transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="obscura-btn-gold-solid w-full mt-2"
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
