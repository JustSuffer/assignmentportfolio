import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>AVAILABLE FOR AI & FULL-STACK PROJECTS</span>
          </div>

          <h1 className="hero-title">
            Crafting Intelligent <br />
            <span className="gradient-text">Web Applications</span> & <br />
            AI Solutions
          </h1>

          <p className="hero-description">
            Hi, I’m <strong>İzzet Can Sorna</strong> — an AI Engineer & Full-Stack Developer specializing in high-performance React architectures, intelligent LLM integration, and modern digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#playground" className="btn btn-secondary">
              <span>Try Live AI Demo</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">⚡ Fast</span>
              <span className="stat-label">Lighthouse 99+ Score</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-card glass-card">
            <div className="avatar-wrapper">
              <img src="/assets/avatar.jpg" alt="İzzet Can Sorna" className="avatar-img" />
              <div className="avatar-glow"></div>
            </div>

            <div className="floating-badge badge-top-right">
              <span className="badge-icon">🧠</span>
              <span className="badge-text">AI Integration</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <span className="badge-icon">⚛️</span>
              <span className="badge-text">React 19 & Vite</span>
            </div>

            <div className="code-snippet-box">
              <div className="code-header">
                <span className="code-dot dot-red"></span>
                <span className="code-dot dot-yellow"></span>
                <span className="code-dot dot-green"></span>
                <span className="code-title">engineer.ts</span>
              </div>
              <pre className="code-content">
                <code>
                  <span className="code-keyword">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-string">'İzzet Can Sorna'</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-string">'AI & Full-Stack Developer'</span>,<br />
                  &nbsp;&nbsp;focus: [<span className="code-string">'LLMs'</span>, <span className="code-string">'React'</span>, <span className="code-string">'Python'</span>],<br />
                  &nbsp;&nbsp;status: <span className="code-string">'Deploy Ready 🚀'</span><br />
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
