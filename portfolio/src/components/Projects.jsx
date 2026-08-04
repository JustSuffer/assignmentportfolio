import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = ({ t }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterCategories = t.projects.categories;

  const filteredProjects = activeFilter === 'All' || activeFilter === 'Tümü'
    ? t.projects.items
    : t.projects.items.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding clair-projects-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-gold">{t.projects.tag}</span>
          <h2 className="section-title-serif">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Filter Bar */}
        <div className="clair-filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              className={`clair-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="clair-projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="clair-project-card clair-card">
              <div className="project-card-top">
                <span className="mono-tag text-gold">{project.category}</span>
                <span className="mono-tag text-dim">{project.date}</span>
              </div>

              <h3 className="project-title-serif">{project.title}</h3>
              <p className="project-subtitle-gold">{project.subtitle}</p>
              <p className="project-desc-text">{project.shortDesc}</p>

              <div className="project-tags-flex">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag-chip-clair">{tag}</span>
                ))}
              </div>

              <div className="project-card-bottom">
                <button 
                  className="btn-gold-link"
                  onClick={() => setActiveModalProject(project)}
                >
                  {t.projects.btnBreakdown}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          t={t}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
