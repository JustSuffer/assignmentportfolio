import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Machine Learning Engineer Intern',
      company: 'FlyRank AI',
      location: 'Remote',
      period: 'Jun 2026 – Present',
      badgeColor: 'gold',
      bullets: [
        'Engineered and evaluated machine learning models, applying core AI fluency principles to optimize data processing pipelines, reducing data preparation time by 35%.',
        'Accelerated model training processes across 10+ datasets by focusing on advanced feature engineering, hyperparameter tuning, and cross-validation techniques.',
        'Evaluated models in staging environments, formulating alternative technical solutions to ensure robust edge-case handling prior to production rollouts.'
      ]
    },
    {
      role: 'AI Engineer Intern',
      company: 'Bluesense | AI-Powered Software and Services',
      location: 'Boston, MA (Remote)',
      period: 'Dec 2025 – Present',
      badgeColor: 'crimson',
      bullets: [
        'Formulated computer vision solutions using ResNet, MobileNet, and YOLOv11 to precisely detect and classify skin concerns, trained on a 3.5K+ labeled dataset with an 80/20 validation split.',
        'Optimized high-performance deep learning models using transfer learning on Google Colab, achieving 98% precision and 97.03% recall in diagnostic accuracy across 100+ real-world user samples.'
      ]
    },
    {
      role: 'Frontend Developer Intern',
      company: 'INNOEM | Sustainability and Innovation Consultancy',
      location: 'Istanbul, Turkey',
      period: 'Aug 2024 – Jan 2025',
      badgeColor: 'gold',
      bullets: [
        'Architected responsive, user-friendly web interfaces utilizing React.js and Tailwind CSS, improving page load speed by 30%.',
        'Collaborated closely within a cross-functional team of 7 to enhance UI/UX and optimize front-end architecture.'
      ]
    },
    {
      role: 'ICT Network Engineer Intern',
      company: 'Albil Merkezi Hizmetler | Information Technologies',
      location: 'Istanbul, Turkey',
      period: 'Jul 2024 – Aug 2024',
      badgeColor: 'blue',
      bullets: [
        'Orchestrated the organization’s information systems, ensuring zero downtime and secure access for 5,500+ daily internal queries.',
        'Monitored network infrastructure and systematically diagnosed system anomalies by evaluating alternative technical root causes, deploying efficient data storage protocols.'
      ]
    },
    {
      role: 'Aircraft Maintenance Engineer Intern',
      company: 'Turkish Technic | Aircraft Maintenance Hangar',
      location: 'Istanbul, Turkey',
      period: 'Aug 2023 – Sep 2023',
      badgeColor: 'crimson',
      bullets: [
        'Executed detailed mechanical and technical maintenance on complex aircraft systems at Atatürk Airport’s main hangar.',
        'Assisted in root-cause analysis for hardware malfunctions, strictly adhering to international aviation safety standards.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding clair-experience-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-crimson">// CAREER & INDUSTRY MILESTONES</span>
          <h2 className="section-title-serif">Professional Engineering Experience</h2>
          <p className="section-subtitle">
            Hands-on work in machine learning research, computer vision optimization, frontend development, and network infrastructure.
          </p>
        </div>

        <div className="timeline-clair-wrapper">
          {experiences.map((exp, index) => (
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
