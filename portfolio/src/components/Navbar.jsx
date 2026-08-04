import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenCVModal }) => {
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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Lab', href: '#diagnostics' },
    { name: 'Skills & Ed', href: '#skills' },
    { name: 'Contact', href: '#contact' },
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

        {/* Desktop Links */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button className="btn-gold-outline" onClick={onOpenCVModal}>
            <span>View CV</span>
          </button>
          <a href="#contact" className="btn-crimson">
            <span>Contact</span>
          </a>

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
            View Full CV
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
