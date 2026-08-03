import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Engineer & Full-Stack Developer',
      company: 'FlyRank AI Platform',
      period: '2024 — PRESENT',
      desc: 'Architecting intelligent SEO analytics dashboard and AI content generation engines. Building production-grade React 19 applications with seamless Netlify deployment.',
      points: [
        'Developed real-time analytics graphs and AI site scoring tools',
        'Implemented prompt engineering pipelines for automated keyword insights',
        'Achieved 99+ Lighthouse performance scores across core web vitals'
      ]
    },
    {
      role: 'Full-Stack Software Specialist',
      company: 'Digital Solutions & Client Suite',
      period: '2023 — 2024',
      desc: 'Designed and deployed responsive web applications for clients, emphasizing clean code, accessibility, and fast load times.',
      points: [
        'Built custom React components and REST API integration layers',
        'Automated CI/CD workflows and multi-environment build scripts',
        'Reduced frontend bundle sizes by 40% using Vite tree-shaking'
      ]
    },
    {
      role: 'Computer Science & Systems Engineering',
      company: 'Academic & Project Portfolio Mastery',
      period: '2021 — 2023',
      desc: 'Deep study and practical implementation of software engineering principles, algorithms, data structures, and web technologies.',
      points: [
        'Mastered JavaScript ES6+, Python, HTML5/CSS3, and Node.js backend design',
        'Created open-source developer utilities and static code audit tools'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding experience-section-clean">
      <div className="container">
        <div className="section-header-left">
          <span className="mono-tag">—— TIMELINE // 006</span>
          <h2 className="section-title">Experience & Roles</h2>
        </div>

        <div className="timeline-clean">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item-clean">
              <div className="timeline-meta">
                <span className="timeline-period-mono">{exp.period}</span>
              </div>
              <div className="timeline-body-clean">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-company">{exp.company}</span>
                <p className="timeline-desc">{exp.desc}</p>
                <ul className="timeline-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>▪ {pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
