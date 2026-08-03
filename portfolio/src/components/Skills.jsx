import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend & AI', 'Tools & Cloud'];

  const skillsData = [
    { name: 'React 19 & JSX', category: 'Frontend', level: 95, desc: 'Modular components, custom hooks, state architecture' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 92, desc: 'Async execution, functional patterns, DOM management' },
    { name: 'HTML5 & CSS3 / Modern CSS', category: 'Frontend', level: 95, desc: 'Flexbox, Grid, clean typography, responsive design' },
    { name: 'Vite & Build Tooling', category: 'Frontend', level: 90, desc: 'HMR development, bundle optimization, tree-shaking' },
    
    { name: 'Python & AI Scripting', category: 'Backend & AI', level: 88, desc: 'LLM data pipelines, automation scripts, backend APIs' },
    { name: 'AI & LLM Integration', category: 'Backend & AI', level: 94, desc: 'Prompt orchestration, Agent workflows, OpenAI/Gemini APIs' },
    { name: 'Node.js & Express', category: 'Backend & AI', level: 85, desc: 'RESTful API architecture, middleware, JSON payloads' },
    { name: 'REST APIs & Data Contracts', category: 'Backend & AI', level: 90, desc: 'Async data fetching, payload validation, endpoint design' },

    { name: 'Netlify & CI/CD Pipelines', category: 'Tools & Cloud', level: 95, desc: 'netlify.toml configuration, SPA redirects, automated builds' },
    { name: 'Git & GitHub Workflows', category: 'Tools & Cloud', level: 92, desc: 'Version control, branch management, release tagging' },
    { name: 'ESLint & Code Hygiene', category: 'Tools & Cloud', level: 88, desc: 'Linting rules, static code audits, formatting' },
    { name: 'Performance & Web Vitals', category: 'Tools & Cloud', level: 90, desc: 'Lighthouse scoring 99+, load optimization' }
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding skills-section-clean">
      <div className="container">
        <div className="section-header-left">
          <span className="mono-tag">—— TECHNICAL STACK // 004</span>
          <h2 className="section-title">Core Technologies</h2>
        </div>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn-clean ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid-clean">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card-clean">
              <div className="skill-meta-row">
                <span className="skill-title-clean">{skill.name}</span>
                <span className="skill-score">{skill.level}%</span>
              </div>
              <p className="skill-desc-clean">{skill.desc}</p>
              <div className="skill-line-bg">
                <div className="skill-line-bar" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
