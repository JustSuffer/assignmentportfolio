import React from 'react';

const Hero = ({ t, onOpenCVModal }) => {
  return (
    <section id="hero" className="hero-clair-section">
      <div className="container">
        <div className="hero-clair-grid">
          {/* Text Content */}
          <div className="hero-text-block">
            <div className="clair-badge-pill">
              <span className="pill-dot"></span>
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="hero-title-serif">
              {t.hero.titleLine1} <span className="text-gold">{t.hero.titleLine2}</span> & <br />
              {t.hero.titleLine3} <span className="text-crimson">{t.hero.titleLine4}</span>
            </h1>

            <p className="hero-lead-text">
              {t.hero.lead}
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-gold-solid">
                <span>{t.hero.btnProjects}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
              <a href="#diagnostics" className="btn-crimson-outline">
                <span>{t.hero.btnLab}</span>
              </a>
              <button className="btn-subtle" onClick={onOpenCVModal}>
                📄 {t.hero.btnCV}
              </button>
            </div>

            {/* Verified CV Metrics Row */}
            <div className="hero-metrics-row">
              <div className="metric-clair-item">
                <span className="metric-val text-gold">97.04%</span>
                <span className="metric-lbl">{t.hero.metrics.brainMap}</span>
              </div>
              <div className="metric-clair-item">
                <span className="metric-val text-crimson">98% / 97%</span>
                <span className="metric-lbl">{t.hero.metrics.skinDiag}</span>
              </div>
              <div className="metric-clair-item">
                <span className="metric-val text-gold">15ms</span>
                <span className="metric-lbl">{t.hero.metrics.robotLatency}</span>
              </div>
              <div className="metric-clair-item">
                <span className="metric-val text-crimson">20ms</span>
                <span className="metric-lbl">{t.hero.metrics.eyelidInference}</span>
              </div>
            </div>
          </div>

          {/* Right Telemetry / Chiaroscuro Card */}
          <div className="hero-card-block">
            <div className="clair-telemetry-box clair-card">
              <div className="card-top-bar">
                <div className="bar-dots">
                  <span className="dot dot-gold"></span>
                  <span className="dot dot-crimson"></span>
                  <span className="dot dot-blue"></span>
                </div>
                <span className="text-mono text-dim">{t.hero.telemetry.active}</span>
              </div>

              <div className="card-inner-display">
                <div className="neural-wireframe">
                  <div className="wireframe-node node-input">
                    <span className="text-mono text-gold">RMI_INPUT_DATASET</span>
                    <span className="text-mono text-dim">{t.hero.telemetry.dataset}</span>
                  </div>
                  <div className="wireframe-line"></div>
                  <div className="wireframe-node node-model">
                    <span className="text-mono text-crimson">YOLOV11_PYTORCH</span>
                    <span className="text-mono text-dim">{t.hero.telemetry.precision}</span>
                  </div>
                  <div className="wireframe-line"></div>
                  <div className="wireframe-node node-output">
                    <span className="text-mono text-gold">MRD2_CLINICAL_METRICS</span>
                    <span className="text-mono text-dim">{t.hero.telemetry.clinicalMetrics}</span>
                  </div>
                </div>

                <div className="telemetry-live-box">
                  <div className="telemetry-row">
                    <span className="text-mono text-dim">FRAME_RATE:</span>
                    <span className="text-mono text-gold">{t.hero.telemetry.frameRate}</span>
                  </div>
                  <div className="telemetry-row">
                    <span className="text-mono text-dim">MODEL_LATENCY:</span>
                    <span className="text-mono text-crimson">{t.hero.telemetry.latency}</span>
                  </div>
                  <div className="telemetry-row">
                    <span className="text-mono text-dim">MANUSCRIPT:</span>
                    <span className="text-mono text-gold-light">{t.hero.telemetry.manuscript}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
