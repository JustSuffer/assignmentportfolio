import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Lab', href: '#playground' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-badge">I</span>
          <span className="logo-text">İzzet Can<span className="logo-accent">.Sorna</span></span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-cta">
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button 
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
