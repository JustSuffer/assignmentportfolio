import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-text-content">
            <div className="eyebrow-line">
              <span className="line-prefix">——</span>
              <span className="mono-tag">AI & FULL-STACK SYSTEM ARCHITECTURE // 001</span>
            </div>

            <h1 className="hero-headline">
              AI Engineer & <br />
              Full-Stack Developer
            </h1>

            <p className="hero-lead">
              Building autonomous AI pipelines, intelligent LLM solutions, and high-performance web applications with clean, performant interfaces. Translating abstract data into seamless user experiences.
            </p>

            <div className="hero-action-row">
              <a href="#projects" className="btn-primary-blue">
                <span>View Projects</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
              <a href="#playground" className="btn-outline-dark">
                <span>Interactive AI Lab</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual — Technical Telemetry Terminal Card (NO PERSON PHOTOS) */}
          <div className="hero-schematic-wrapper">
            <div className="telemetry-card">
              <div className="telemetry-header">
                <div className="telemetry-meta">
                  <span>SYS_MONITOR: ACTIVE</span>
                  <span>LATENCY: 12ms</span>
                </div>
                <div className="telemetry-meta">
                  <span>MODEL: GEMINI_FLASH</span>
                </div>
              </div>

              {/* Wireframe Diagram / Code Monitor */}
              <div className="telemetry-screen">
                <div className="wireframe-grid">
                  <div className="node-box node-input">
                    <span className="node-title">INPUT_DATA</span>
                    <span className="node-status">Active</span>
                  </div>
                  <div className="node-connector"></div>
                  <div className="node-box node-core">
                    <span className="node-title">AI_LLM_PIPELINE</span>
                    <span className="node-status text-blue">Processing</span>
                  </div>
                  <div className="node-connector"></div>
                  <div className="node-box node-output">
                    <span className="node-title">REACT_UI_RENDER</span>
                    <span className="node-status text-emerald">Deployed</span>
                  </div>
                </div>

                {/* Telemetry Stat Overlay */}
                <div className="stat-overlay-box">
                  <span className="stat-value">98.4%</span>
                  <span className="stat-label">SYSTEM ACCURACY & SPEED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Technical Core Skills (Exact match to Image 2 bottom grid) */}
        <div className="hero-pillars-grid">
          <div className="pillar-item">
            <div className="pillar-header">
              <span className="pillar-icon">🖥️</span>
              <h3 className="pillar-title">FULL-STACK ARCHITECTURE</h3>
            </div>
            <p className="pillar-desc">
              Modular React 19 frontends, REST APIs, and optimized Vite build systems. Clean, scalable, and responsive codebases.
            </p>
            <div className="pillar-line-wrapper">
              <div className="pillar-line-fill fill-85"></div>
            </div>
          </div>

          <div className="pillar-item">
            <div className="pillar-header">
              <span className="pillar-icon">🧠</span>
              <h3 className="pillar-title">APPLIED AI & LLM AGENTS</h3>
            </div>
            <p className="pillar-desc">
              Implementation of autonomous agent workflows, prompt engineering, and intelligent site analytics engines like FlyRank AI.
            </p>
            <div className="pillar-line-wrapper">
              <div className="pillar-line-fill fill-95"></div>
            </div>
          </div>

          <div className="pillar-item">
            <div className="pillar-header">
              <span className="pillar-icon">⚡</span>
              <h3 className="pillar-title">PERFORMANCE & DEPLOY</h3>
            </div>
            <p className="pillar-desc">
              Low-latency web vitals, Lighthouse 99+ scoring, netlify.toml configurations, and production-ready CI/CD pipelines.
            </p>
            <div className="pillar-line-wrapper">
              <div className="pillar-line-fill fill-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
