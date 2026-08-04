import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="clair-footer">
      <div className="container footer-clair-row">
        <div className="footer-brand-group">
          <span className="brand-name">İZZET CAN <span className="text-gold">SORNA</span></span>
          <span className="footer-sub text-dim">{t.footer.sub}</span>
        </div>

        <div className="footer-links-group">
          <a href="#about">{t.nav.about}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#diagnostics">{t.nav.aiLab}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="footer-copy-group">
          <span className="text-mono text-dim">{t.footer.copy}</span>
          <span className="text-mono text-gold">{t.footer.deployed}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
