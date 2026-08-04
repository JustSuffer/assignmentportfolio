import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="section-padding clair-about-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-gold">{t.about.tag}</span>
          <h2 className="section-title-serif">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about-clair-grid">
          {/* Bio & Education Card */}
          <div className="bio-card-clair clair-card">
            <h3 className="card-title-gold">{t.about.cardTitle}</h3>
            <p className="bio-text">{t.about.bio1}</p>
            <p className="bio-text">{t.about.bio2}</p>

            <div className="education-box">
              <h4 className="box-title-mono">{t.about.eduTitle}</h4>
              
              <div className="edu-item">
                <div className="edu-header">
                  <span className="edu-school text-gold">{t.about.marmaraSchool}</span>
                  <span className="edu-date text-mono text-dim">{t.about.marmaraDates}</span>
                </div>
                <span className="edu-degree">{t.about.marmaraDegree}</span>
                <span className="edu-location text-dim">{t.about.marmaraLocation}</span>
              </div>

              <div className="edu-item">
                <div className="edu-header">
                  <span className="edu-school text-gold-light">{t.about.highSchool}</span>
                  <span className="edu-date text-mono text-dim">{t.about.highSchoolDates}</span>
                </div>
                <span className="edu-degree">{t.about.highSchoolDegree}</span>
                <span className="edu-location text-dim">{t.about.highSchoolLocation}</span>
              </div>
            </div>
          </div>

          {/* 3 Core Expertise Pillars */}
          <div className="pillars-container">
            <div className="pillar-clair-box clair-card">
              <div className="pillar-icon">👁️</div>
              <div className="pillar-content">
                <h4 className="pillar-title">{t.about.pillar1Title}</h4>
                <p className="pillar-text">{t.about.pillar1Text}</p>
              </div>
            </div>

            <div className="pillar-clair-box clair-card">
              <div className="pillar-icon">🤖</div>
              <div className="pillar-content">
                <h4 className="pillar-title">{t.about.pillar2Title}</h4>
                <p className="pillar-text">{t.about.pillar2Text}</p>
              </div>
            </div>

            <div className="pillar-clair-box clair-card">
              <div className="pillar-icon">⚡</div>
              <div className="pillar-content">
                <h4 className="pillar-title">{t.about.pillar3Title}</h4>
                <p className="pillar-text">{t.about.pillar3Text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
