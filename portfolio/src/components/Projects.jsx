import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterCategories = ['All', 'AI Systems', 'Full-Stack', 'Tools'];

  const projectsData = [
    {
      id: 1,
      title: 'FlyRank AI Analytics Suite',
      category: 'AI Systems',
      tagline: 'AI-Powered Search & Content Performance Engine',
      tags: ['React 19', 'AI Analytics', 'Vite', 'Python', 'Tailwind/CSS'],
      shortDesc: 'Intelligent SEO analytics platform rendering real-time website audit scores, content recommendations, and automated keyword ranking charts.',
      longDesc: 'FlyRank AI is a high-performance web platform designed to analyze search engine performance and generate predictive content optimization insights using AI models.',
      features: [
        'Real-time SEO scoring and keyword tracking analytics dashboard',
        'AI Content Generator with custom tone and structure parameters',
        'Interactive data visualization with glowing charts and metrics',
        'Full responsive layout built with minimalist tech aesthetic'
      ],
      liveUrl: 'https://flyrank.ai',
      githubUrl: 'https://github.com/izzet/flyrankai'
    },
    {
      id: 2,
      title: 'Nexus Autonomous AI Workspace',
      category: 'AI Systems',
      tagline: 'Multi-Agent Autonomous Workflow Automation Platform',
      tags: ['React', 'Agent Framework', 'Node.js', 'WebSockets', 'LLM Pipeline'],
      shortDesc: 'An interactive workspace where users manage autonomous AI subagents to complete software development, research, and data synthesis tasks.',
      longDesc: 'Nexus Workspace allows developers and teams to configure autonomous multi-agent pipelines. It features node visualizers, live agent conversation streams, and instant code artifact generation.',
      features: [
        'Interactive Node Workflow Canvas for visual agent pipeline creation',
        'Live streaming agent message stream with memory management',
        'Automated task scheduler and background execution logs',
        'Clean dark telemetry aesthetic'
      ],
      liveUrl: '#hero',
      githubUrl: 'https://github.com/izzet/nexus-agent-workspace'
    },
    {
      id: 3,
      title: 'Smart Prompt & AI Studio',
      category: 'Tools',
      tagline: 'Interactive LLM Testbed & Token Estimator',
      tags: ['JavaScript', 'Vite', 'REST API', 'CSS Grid', 'AI Prompting'],
      shortDesc: 'Web application for crafting, testing, and benchmarking structured LLM prompts across multiple model providers.',
      longDesc: 'Smart Prompt Studio streamlines the process of writing, evaluating, and optimizing prompts for LLMs.',
      features: [
        'Side-by-side LLM response comparison matrix',
        'Real-time token cost & latency visualizer',
        'Exportable JSON template presets for quick deployment',
        'Built-in template library for zero-shot and few-shot prompts'
      ],
      liveUrl: '#playground',
      githubUrl: 'https://github.com/izzet/smart-prompt-studio'
    },
    {
      id: 4,
      title: 'DevFlow Code Quality Inspector',
      category: 'Full-Stack',
      tagline: 'Automated Static Code Analysis & Linting Dashboard',
      tags: ['React', 'Node.js', 'ESLint', 'CI/CD', 'Netlify API'],
      shortDesc: 'A full-stack code health dashboard providing instant quality metrics, dependency vulnerability checks, and automated build verification.',
      longDesc: 'DevFlow monitors git repositories to detect syntax flaws, performance bottlenecks, and deployment readiness before shipping to production environments.',
      features: [
        'Automated ESLint and security audit scanner',
        'Interactive code coverage heatmap',
        'Instant Netlify build readiness check',
        'GitHub Webhook integration for pull request status checks'
      ],
      liveUrl: '#hero',
      githubUrl: 'https://github.com/izzet/devflow-inspector'
    }
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header-left">
          <span className="mono-tag">—— SELECTED CASE STUDIES // 002</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn-clean ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-minimal">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-minimal">
              <div className="project-card-header">
                <span className="mono-tag text-cyan">{project.category}</span>
                <span className="project-num">0{project.id}</span>
              </div>

              <h3 className="project-title-clean">{project.title}</h3>
              <p className="project-tagline-clean">{project.tagline}</p>
              <p className="project-desc-clean">{project.shortDesc}</p>

              <div className="project-tags-row">
                {project.tags.slice(0, 4).map((tag, i) => (
                  <span key={i} className="tech-tag-clean">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <button 
                  className="btn-link-clean"
                  onClick={() => setActiveModalProject(project)}
                >
                  View Case Study ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
