import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterCategories = ['All', 'AI Apps', 'Full-Stack', 'Tools'];

  const projectsData = [
    {
      id: 1,
      title: 'FlyRank AI Analytics Suite',
      category: 'AI Apps',
      tagline: 'AI-Powered Search & Content Performance Engine',
      image: '/assets/flyrank.jpg',
      tags: ['React 19', 'AI Analytics', 'Vite', 'Python', 'Tailwind/CSS'],
      shortDesc: 'Intelligent SEO analytics platform rendering real-time website audit scores, content recommendations, and automated keyword ranking charts.',
      longDesc: 'FlyRank AI is a high-performance web platform designed to analyze search engine performance and generate predictive content optimization insights using AI models. Built with a React frontend and Python AI API backend.',
      features: [
        'Real-time SEO scoring and keyword tracking analytics dashboard',
        'AI Content Generator with custom tone and structure parameters',
        'Interactive data visualization with glowing charts and metrics',
        'Full responsive layout built with glassmorphism design'
      ],
      liveUrl: 'https://flyrank.ai',
      githubUrl: 'https://github.com/izzet/flyrankai'
    },
    {
      id: 2,
      title: 'Nexus Autonomous AI Workspace',
      category: 'AI Apps',
      tagline: 'Multi-Agent Autonomous Workflow Automation Platform',
      image: '/assets/nexus.jpg',
      tags: ['React', 'Agent Framework', 'Node.js', 'WebSockets', 'LLM Pipeline'],
      shortDesc: 'A futuristic interactive workspace where users manage autonomous AI subagents to complete software development, research, and data synthesis tasks.',
      longDesc: 'Nexus Workspace allows developers and teams to configure autonomous multi-agent pipelines. It features node visualizers, live agent conversation streams, and instant code artifacts generation.',
      features: [
        'Interactive Node Workflow Canvas for visual agent pipeline creation',
        'Live streaming agent message stream with memory management',
        'Automated task scheduler and background execution logs',
        'Dark mode aesthetic with neon micro-interactions'
      ],
      liveUrl: '#hero',
      githubUrl: 'https://github.com/izzet/nexus-agent-workspace'
    },
    {
      id: 3,
      title: 'Smart Prompt & AI Studio',
      category: 'Tools',
      tagline: 'Interactive LLM Testbed & Token Estimator',
      image: '/assets/nexus.jpg',
      tags: ['JavaScript', 'Vite', 'REST API', 'CSS Grid', 'AI Prompting'],
      shortDesc: 'Web application for crafting, testing, and benchmarking structured LLM prompts across multiple model providers.',
      longDesc: 'Smart Prompt Studio streamlines the process of writing, evaluating, and optimizing prompts for LLMs. It features side-by-side output comparison, token count analysis, and automated system prompt generator templates.',
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
      image: '/assets/flyrank.jpg',
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
        <div className="section-header">
          <div className="section-tag">// PORTFOLIO WORK</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my latest work across AI systems, full-stack applications, and developer tools.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-tabs">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-category-tag">{project.category}</div>
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => setActiveModalProject(project)}
                  >
                    Details & Features ↗
                  </button>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="project-tags">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="tech-chip">{tag}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <button 
                    className="link-btn"
                    onClick={() => setActiveModalProject(project)}
                  >
                    Read Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
