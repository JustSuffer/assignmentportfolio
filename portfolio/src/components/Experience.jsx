import React from 'react';

const Experience = ({ t }) => {
  return (
    <section id="experience" className="section-padding clair-experience-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-crimson">{t.experience.tag}</span>
          <h2 className="section-title-serif">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>

        <div className="timeline-clair-wrapper">
          {t.experience.roles.map((exp, index) => (
            <div key={index} className="timeline-clair-card clair-card">
              <div className="timeline-card-header">
                <div className="role-group">
                  <h3 className="timeline-role-title">{exp.role}</h3>
                  <span className={`company-name text-${exp.badgeColor}`}>{exp.company}</span>
                </div>
                <div className="meta-group">
                  <span className="location-tag text-dim">{exp.location}</span>
                  <span className="period-badge-mono">{exp.period}</span>
                </div>
              </div>

              <ul className="timeline-bullets-list">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <span className="bullet-star">❖</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
