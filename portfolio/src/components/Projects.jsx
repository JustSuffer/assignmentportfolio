import React, { useState } from 'react';
import ProjectDetailModal from './ProjectDetailModal';

const Projects = ({ t }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = t.projects.categories;

  const filteredProjects = activeFilter === 'All' || activeFilter === 'Tümü'
    ? t.projects.items
    : activeFilter === 'Featured' || activeFilter === 'Öne Çıkanlar'
    ? t.projects.items.filter(p => p.isFeatured)
    : t.projects.items.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Apple Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            {t.projects.tag}
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            {t.projects.title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-3xl mt-4 font-normal">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2.5 rounded-full font-mono text-xs font-extrabold transition-all uppercase tracking-wider ${
                activeFilter === cat
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                  : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:border-amber-400/40 hover:text-white'
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Apple Bento Grid Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="p-8 md:p-10 rounded-[36px] bg-zinc-950 border border-white/10 hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{project.date}</span>
                </div>

                <h3 className="font-sans text-3xl font-extrabold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-amber-300 font-bold uppercase tracking-wider mb-4">
                  {project.subtitle}
                </p>
                <p className="font-sans text-sm text-zinc-400 mb-6 leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <button 
                  className="font-mono text-xs font-bold text-amber-400 hover:text-amber-200 transition-colors uppercase tracking-wider flex items-center gap-2"
                  onClick={() => setActiveModalProject(project)}
                >
                  <span>{t.projects.btnBreakdown}</span>
                </button>
                <span className="font-mono text-[10px] text-zinc-600">PRO SPEC V1.0</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeModalProject && (
        <ProjectDetailModal
          project={activeModalProject}
          t={t}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
