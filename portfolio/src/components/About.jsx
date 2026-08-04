import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding clair-about-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-gold">// BIOGRAPHY & ACADEMIC BACKGROUND</span>
          <h2 className="section-title-serif">Bridging Computer Vision & Mechatronics</h2>
          <p className="section-subtitle">
            Translating complex research, clinical datasets, and embedded hardware into deployable high-performance AI systems.
          </p>
        </div>

        <div className="about-clair-grid">
          {/* Bio & Education Card */}
          <div className="bio-card-clair clair-card">
            <h3 className="card-title-gold">Professional Profile</h3>
            <p className="bio-text">
              I am a <strong>Machine Learning Engineer</strong> specializing in Computer Vision and production-grade AI systems. My experience spans building AI-assisted medical imaging quantification solutions, autonomous quadruped robotics (**Metsuke**), and scalable deep learning pipelines with PyTorch and YOLOv11.
            </p>
            <p className="bio-text">
              Graduating from <strong>Marmara University (Department of Mechatronics Engineering)</strong>, I combine deep theoretical understanding of kinematics and control logic with cutting-edge deep learning techniques.
            </p>

            <div className="education-box">
              <h4 className="box-title-mono">EDUCATION & ACADEMICS</h4>
              
              <div className="edu-item">
                <div className="edu-header">
                  <span className="edu-school text-gold">Marmara University</span>
                  <span className="edu-date text-mono text-dim">Sep 2020 – Jul 2025</span>
                </div>
                <span className="edu-degree">B.S., Department of Mechatronics Engineering — GPA: 3.10 / 4.00</span>
                <span className="edu-location text-dim">Istanbul, Turkey</span>
              </div>

              <div className="edu-item">
                <div className="edu-header">
                  <span className="edu-school text-gold-light">Nişantaşı Nuri Akın Anatolian High School</span>
                  <span className="edu-date text-mono text-dim">Jun 2020</span>
                </div>
                <span className="edu-degree">High School Diploma</span>
                <span className="edu-location text-dim">Istanbul, Turkey</span>
              </div>
            </div>
          </div>

          {/* 3 Core Expertise Pillars */}
          <div className="pillars-container">
            <div className="pillar-clair-box clair-card">
              <div className="pillar-icon">👁️</div>
              <div className="pillar-content">
                <h4 className="pillar-title">Computer Vision & Medical Imaging</h4>
                <p className="pillar-text">
                  Developing state-of-the-art diagnostic models using PyTorch, YOLOv11, and OpenCV. Published brain imaging research (mAP 97.04%) and clinical lower eyelid metrics calculation (20ms/frame).
                </p>
              </div>
            </div>

            <div className="pillar-clair-box clair-card">
              <div className="pillar-icon">🤖</div>
              <div className="pillar-content">
                <h4 className="pillar-title">Autonomous Robotics & Kinematics</h4>
                <p className="pillar-text">
                  Architecting real-time autonomous systems like <strong>Metsuke Quadruped Robot</strong> utilizing ESP32-S3, C/C++, WebSockets (15ms latency), servo kinematics, and dynamic obstacle avoidance.
                </p>
              </div>
            </div>

            <div className="pillar-clair-box clair-card">
              <div className="pillar-icon">⚡</div>
              <div className="pillar-content">
                <h4 className="pillar-title">Production ML & Full-Stack APIs</h4>
                <p className="pillar-text">
                  Building scalable APIs and deployment pipelines using FastAPI, REST APIs, Docker, Oracle Cloud Infrastructure, and React.js to bring deep learning models to web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
