import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#hero" className="nav-logo">
            <span className="logo-badge">I</span>
            <span className="logo-text">İzzet Can<span className="logo-accent">.Sorna</span></span>
          </a>
          <p className="footer-tagline">
            Building intelligent web solutions, AI workflows, and high-performance user interfaces.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#playground">AI Lab</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} İzzet Can Sorna. All rights reserved.</p>
          <div className="footer-badge">
            ⚡ Powered by React 19 + Vite | Deployed on Netlify
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
