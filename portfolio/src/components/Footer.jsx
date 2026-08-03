import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-clean">
      <div className="container footer-row-clean">
        <span className="nav-logo-mono">İZZET_CAN_SORNA</span>
        <div className="footer-links-clean">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Stack</a>
          <a href="#playground">AI Lab</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="footer-copy-mono">© {new Date().getFullYear()} // DEPLOYED ON NETLIFY</span>
      </div>
    </footer>
  );
};

export default Footer;
