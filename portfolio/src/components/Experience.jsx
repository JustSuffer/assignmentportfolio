import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Engineer & Full-Stack Developer',
      company: 'FlyRank AI Platform',
      period: '2024 — Present',
      desc: 'Architecting intelligent SEO analytics dashboard and AI content generation engines. Building production-grade React 19 applications with seamless Netlify deployment.',
      highlights: [
        'Developed real-time analytics graphs and AI site scoring tools',
        'Implemented prompt engineering pipelines for automated keyword insights',
        'Achieved 99+ Lighthouse performance scores across core web vitals'
      ]
    },
    {
      role: 'Full-Stack Software Specialist',
      company: 'Digital Solutions & Client Portfolio Suite',
      period: '2023 — 2024',
      desc: 'Designed and deployed responsive web applications for international clients, emphasizing clean code, accessibility, and high conversion rate UI/UX.',
      highlights: [
        'Built custom React components and REST API integration layers',
        'Automated CI/CD workflows and multi-environment build scripts',
        'Reduced frontend bundle sizes by 40% using Vite tree-shaking'
      ]
    },
    {
      role: 'Computer Science & Software Engineering',
      company: 'Academic & Project Portfolio Mastery',
      period: '2021 — 2023',
      desc: 'Deep study and practical implementation of software engineering principles, algorithms, data structures, and web technologies.',
      highlights: [
        'Mastered JavaScript ES6+, Python, HTML5/CSS3, and Node.js backend design',
        'Created open-source developer utilities and static code audit tools',
        'Built high-impact assignment and personal portfolio showcases'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// CAREER & JOURNEY</div>
          <h2 className="section-title">Experience & Milestones</h2>
          <p className="section-subtitle">
            A timeline of roles, projects, and key engineering achievements.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item glass-card">
              <div className="timeline-marker">
                <span className="marker-dot"></span>
              </div>
              <div className="timeline-header">
                <div className="role-title-group">
                  <h3 className="role-title">{exp.role}</h3>
                  <span className="company-name">{exp.company}</span>
                </div>
                <span className="period-badge">{exp.period}</span>
              </div>
              
              <p className="timeline-desc">{exp.desc}</p>

              <div className="timeline-highlights">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="highlight-point">
                    <span className="point-bullet">⚡</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
