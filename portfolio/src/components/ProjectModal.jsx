import React, { useEffect } from 'react';

const ProjectModal = ({ project, t, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="clair-modal-overlay" onClick={onClose}>
      <div className="clair-modal-card clair-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-top-tag">
          <span className="mono-tag text-gold">{project.category} // RESEARCH & ENGINEERING</span>
          <span className="mono-tag text-dim">{project.date}</span>
        </div>

        <h2 className="modal-title-serif">{project.title}</h2>
        <p className="modal-subtitle-gold">{project.subtitle}</p>

        <div className="modal-tags-flex">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag-chip-clair">{tag}</span>
          ))}
        </div>

        <div className="modal-section-block">
          <h4 className="mono-heading">TECHNICAL BREAKDOWN & HIGHLIGHTS</h4>
          <ul className="modal-bullets">
            {project.highlights.map((h, idx) => (
              <li key={idx}>
                <span className="text-gold">❖</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.metrics && (
          <div className="modal-metrics-grid">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="metric-mini-box">
                <span className="mini-val text-gold">{m.val}</span>
                <span className="mini-lbl text-dim">{m.lbl}</span>
              </div>
            ))}
          </div>
        )}

        <div className="modal-actions-bar">
          <a href="#contact" className="btn-gold-solid" onClick={onClose}>
            <span>{t.projects.btnDiscuss}</span>
          </a>
          <button className="btn-crimson-outline" onClick={onClose}>
            <span>{t.projects.btnClose}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
