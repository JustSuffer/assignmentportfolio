import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend & AI', 'Tools & Cloud'];

  const skillsData = [
    { name: 'React 19 & JSX', category: 'Frontend', level: 95, icon: '⚛️', desc: 'Component architecture, hooks, state management, SPA routing' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 92, icon: '🟨', desc: 'Async/Await, DOM manipulation, functional programming' },
    { name: 'HTML5 & CSS3 / Modern CSS', category: 'Frontend', level: 95, icon: '🎨', desc: 'Flexbox, Grid, CSS animations, responsive layouts' },
    { name: 'Vite & Build Tools', category: 'Frontend', level: 90, icon: '⚡', desc: 'Fast HMR, module bundling, production optimization' },
    
    { name: 'Python & AI Scripting', category: 'Backend & AI', level: 88, icon: '🐍', desc: 'LLM pipelines, data processing, backend automation' },
    { name: 'AI & LLM Integration', category: 'Backend & AI', level: 94, icon: '🧠', desc: 'Prompt engineering, Agent orchestration, OpenAI/Gemini APIs' },
    { name: 'Node.js & Express', category: 'Backend & AI', level: 85, icon: '🟢', desc: 'REST APIs, serverless functions, middleware design' },
    { name: 'REST APIs & JSON Data', category: 'Backend & AI', level: 90, icon: '🔌', desc: 'API design, payload handling, async data fetching' },

    { name: 'Netlify & CI/CD Deployment', category: 'Tools & Cloud', level: 95, icon: '☁️', desc: 'Production builds, netlify.toml, redirect rules, custom domains' },
    { name: 'Git & GitHub', category: 'Tools & Cloud', level: 92, icon: '📦', desc: 'Version control, branch workflows, release tagging' },
    { name: 'ESLint & Code Hygiene', category: 'Tools & Cloud', level: 88, icon: '🧹', desc: 'Linting rules, syntax checking, code formatting' },
    { name: 'SEO & Performance Audit', category: 'Tools & Cloud', level: 90, icon: '📈', desc: 'Lighthouse scoring, web vitals, semantic tags' }
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// TECH STACK & SKILLS</div>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical toolset and engineering capabilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category-badge">{skill.category}</span>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              
              <p className="skill-desc">{skill.desc}</p>

              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
