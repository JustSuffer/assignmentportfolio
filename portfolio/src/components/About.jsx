import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding about-section-clean">
      <div className="container">
        <div className="section-header-left">
          <span className="mono-tag">—— SYSTEM & BIOGRAPHY // 003</span>
          <h2 className="section-title">About İzzet Can Sorna</h2>
        </div>

        <div className="about-split-clean">
          <div className="about-bio-card">
            <h3 className="bio-headline">Engineering Intelligent Web Systems & AI Models</h3>
            <p>
              I am a software engineer and AI developer focused on creating scalable web architecture, automated LLM workflows, and modern React applications.
            </p>
            <p>
              My work spans frontend performance optimization, backend API integration, and AI system design like <strong>FlyRank AI</strong>. I prioritize clean code structure, ultra-low latency load times, and intuitive interfaces.
            </p>

            <div className="about-specs-grid">
              <div className="spec-box">
                <span className="spec-label">LOCATION</span>
                <span className="spec-val">Turkey (Remote)</span>
              </div>
              <div className="spec-label-box">
                <span className="spec-label">CORE FOCUS</span>
                <span className="spec-val">AI Systems & React 19</span>
              </div>
              <div className="spec-label-box">
                <span className="spec-label">DEPLOYMENT</span>
                <span className="spec-val">Netlify / Vercel CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
