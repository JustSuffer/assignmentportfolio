import React, { useState, useEffect } from 'react';

const Navbar = ({ lang, setLang, t, onOpenCVModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.aiLab, href: '#diagnostics' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`clair-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#hero" className="nav-brand">
          <span className="brand-init">İCS</span>
          <div className="brand-text-group">
            <span className="brand-name">İZZET CAN <span className="brand-gold">SORNA</span></span>
            <span className="brand-sub">ML & Computer Vision Engineer</span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions & Social Links & Language Switcher */}
        <div className="nav-actions">
          {/* GitHub Link */}
          <a
            href="https://github.com/JustSuffer"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/izzetcansorna/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
            </svg>
          </a>

          {/* Language Switcher EN | TR */}
          <div className="lang-switcher-toggle">
            <button
              className={`lang-btn ${lang === 'EN' ? 'active' : ''}`}
              onClick={() => setLang('EN')}
              title="Switch to English"
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${lang === 'TR' ? 'active' : ''}`}
              onClick={() => setLang('TR')}
              title="Türkçe'ye Geç"
            >
              TR
            </button>
          </div>

          <button className="btn-gold-outline hide-mobile" onClick={onOpenCVModal}>
            <span>{t.nav.viewCV}</span>
          </button>

          <button 
            className="mobile-hamburger"
            aria-label="Toggle menu"
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
        <div className="mobile-menu-drawer">
          <div className="mobile-top-row">
            <a href="https://github.com/JustSuffer" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/izzetcansorna/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              LinkedIn ↗
            </a>
            <div className="mobile-lang-row">
              <button className={`lang-btn ${lang === 'EN' ? 'active' : ''}`} onClick={() => setLang('EN')}>EN</button>
              <span>|</span>
              <button className={`lang-btn ${lang === 'TR' ? 'active' : ''}`} onClick={() => setLang('TR')}>TR</button>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="btn-gold-outline full-width"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCVModal();
            }}
          >
            {t.nav.viewCV}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
