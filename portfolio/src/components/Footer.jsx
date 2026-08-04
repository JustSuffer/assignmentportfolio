import React from 'react';

const Footer = () => {
  return (
    <footer className="clair-footer">
      <div className="container footer-clair-row">
        <div className="footer-brand-group">
          <span className="brand-name">İZZET CAN <span className="text-gold">SORNA</span></span>
          <span className="footer-sub text-dim">Machine Learning & Computer Vision Engineer</span>
        </div>

        <div className="footer-links-group">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#diagnostics">AI Lab</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-copy-group">
          <span className="text-mono text-dim">© {new Date().getFullYear()} İZZET CAN SORNA // MARMARA UNIVERSITY</span>
          <span className="text-mono text-gold">DEPLOYED ON NETLIFY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
