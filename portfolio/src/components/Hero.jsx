import React from 'react';

const Hero = ({ onOpenCVModal }) => {
  return (
    <section id="hero" className="hero-clair-section">
      <div className="container">
        <div className="hero-clair-grid">
          {/* Text Content */}
          <div className="hero-text-block">
            <div className="clair-badge-pill">
              <span className="pill-dot"></span>
              <span>MARMARA UNIVERSITY MECHATRONICS B.S. · COMPUTER VISION ENGINEER</span>
            </div>

            <h1 className="hero-title-serif">
              Engineering <span className="text-gold">Computer Vision</span> & <br />
              Autonomous <span className="text-crimson">Robotic Systems</span>
            </h1>

            <p className="hero-lead-text">
              Hi, I’m <strong>İzzet Can Sorna</strong> — a Machine Learning Engineer specializing in deep learning pipelines, medical image quantification, and real-time autonomous systems using <strong>PyTorch</strong>, <strong>YOLOv11</strong>, and <strong>C++</strong>.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-gold-solid">
                <span>Explore Research & Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
              <a href="#diagnostics" className="btn-crimson-outline">
                <span>Try Live Computer Vision Lab</span>
              </a>
              <button className="btn-subtle" onClick={onOpenCVModal}>
                📄 Full Resume
              </button>
            </div>

            {/* Verified CV Metrics Row */}
            <div className="hero-metrics-row">
              <div className="metric-clair-item">
                <span className="metric-val text-gold">97.04%</span>
                <span className="metric-lbl">mAP Brain Medical Imaging</span>
              </div>
              <div className="metric-clair-item">
                <span className="metric-val text-crimson">98% / 97%</span>
                <span className="metric-lbl">Precision / Recall Diagnostic</span>
              </div>
              <div className="metric-clair-item">
                <span className="metric-val text-gold">15ms</span>
                <span className="metric-lbl">Metsuke Quadruped Latency</span>
              </div>
              <div className="metric-clair-item">
                <span className="metric-val text-crimson">20ms</span>
                <span className="metric-lbl">Eyelid Inference / Frame</span>
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
                <span className="text-mono text-dim">YOLOV11_DIAGNOSTICS // ACTIVE</span>
              </div>

              <div className="card-inner-display">
                <div className="neural-wireframe">
                  <div className="wireframe-node node-input">
                    <span className="text-mono text-gold">RMI_INPUT_DATASET</span>
                    <span className="text-mono text-dim">3.5K+ Samples</span>
                  </div>
                  <div className="wireframe-line"></div>
                  <div className="wireframe-node node-model">
                    <span className="text-mono text-crimson">YOLOV11_PYTORCH</span>
                    <span className="text-mono text-dim">Precision: 98%</span>
                  </div>
                  <div className="wireframe-line"></div>
                  <div className="wireframe-node node-output">
                    <span className="text-mono text-gold">MRD2_CLINICAL_METRICS</span>
                    <span className="text-mono text-dim">Sub-Millimeter</span>
                  </div>
                </div>

                <div className="telemetry-live-box">
                  <div className="telemetry-row">
                    <span className="text-mono text-dim">FRAME_RATE:</span>
                    <span className="text-mono text-gold">36 FPS (3K+ Dataset)</span>
                  </div>
                  <div className="telemetry-row">
                    <span className="text-mono text-dim">MODEL_LATENCY:</span>
                    <span className="text-mono text-crimson">20ms Real-Time</span>
                  </div>
                  <div className="telemetry-row">
                    <span className="text-mono text-dim">MANUSCRIPT:</span>
                    <span className="text-mono text-gold-light">Multimedia Tools & Apps</span>
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
