import React, { useEffect } from 'react';

const ProjectDetailModal = ({ project, t, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl" onClick={onClose}>
      <div 
        className="p-8 md:p-12 rounded-[36px] bg-zinc-950 border border-amber-400/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 text-zinc-400 hover:text-white text-xl font-mono"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-amber-400 font-bold uppercase tracking-wider">{project.category} // PRO SPEC</span>
          <span className="text-zinc-500">{project.date}</span>
        </div>

        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white">
          {project.title}
        </h2>
        <p className="font-sans text-xs text-amber-300 font-bold uppercase tracking-wider">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-3 pt-4 border-t border-white/10">
          <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
            TECHNICAL BREAKDOWN & HIGHLIGHTS
          </h4>
          <ul className="space-y-2 font-sans text-sm text-zinc-300">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-amber-400 font-mono mt-0.5">❖</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Pipeline */}
        <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-3">
          <h5 className="font-mono text-xs text-amber-400 uppercase font-bold">ARCHITECTURE PIPELINE FLOW</h5>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="p-2 rounded-xl bg-zinc-900 text-white">Dataset</span>
            <span>→</span>
            <span className="p-2 rounded-xl bg-zinc-900 text-amber-300">YOLOv11 PyTorch Core</span>
            <span>→</span>
            <span className="p-2 rounded-xl bg-zinc-900 text-blue-400">FastAPI / C++</span>
            <span>→</span>
            <span className="p-2 rounded-xl bg-zinc-900 text-rose-400">Live Client</span>
          </div>
        </div>

        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-black border border-white/10 font-mono">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-amber-400">{m.val}</span>
                <span className="text-[10px] text-zinc-500 uppercase">{m.lbl}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
          <a href="#contact" className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all" onClick={onClose}>
            <span>{t.projects.btnDiscuss}</span>
          </a>
          <button className="px-6 py-3 rounded-full bg-white/10 text-white font-mono text-xs font-bold" onClick={onClose}>
            <span>{t.projects.btnClose}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
