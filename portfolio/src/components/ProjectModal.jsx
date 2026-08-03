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
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-image-container">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-badge">{project.category}</div>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-tagline">{project.tagline}</p>

          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tech-tag">{tag}</span>
            ))}
          </div>

          <div className="modal-section">
            <h3>Overview</h3>
            <p>{project.longDesc}</p>
          </div>

          <div className="modal-section">
            <h3>Key Features</h3>
            <ul className="modal-features-list">
              {project.features.map((feat, i) => (
                <li key={i}>
                  <span className="feature-check">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-actions">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>View Live Site</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <span>View Code</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
