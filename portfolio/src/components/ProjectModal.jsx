import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-clean" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header-clean">
          <span className="mono-tag text-cyan">{project.category} // CASE STUDY</span>
          <h2 className="modal-title-clean">{project.title}</h2>
          <p className="modal-tagline-clean">{project.tagline}</p>
        </div>

        <div className="modal-body-clean">
          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tech-tag-clean">{tag}</span>
            ))}
          </div>

          <div className="modal-section-clean">
            <h4>System Overview</h4>
            <p>{project.longDesc}</p>
          </div>

          <div className="modal-section-clean">
            <h4>Key Features & Architecture</h4>
            <ul className="modal-list-clean">
              {project.features.map((feat, i) => (
                <li key={i}>
                  <span className="bullet-blue">▪</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-actions-clean">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-blue">
              <span>View Production Site</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
              <span>View Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
