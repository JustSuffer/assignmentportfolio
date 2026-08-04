import React from 'react';

const Experience = ({ t }) => {
  return (
    <section id="experience" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Apple Section Header */}
        <div className="flex flex-col items-start mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            {t.experience.tag}
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            {t.experience.title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-3xl mt-4 font-normal">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Experience List - Apple Spec Cards */}
        <div className="space-y-8">
          {t.experience.roles.map((role, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-12 rounded-[36px] bg-zinc-950 border border-white/10 hover:border-amber-400/40 transition-all duration-300 shadow-2xl flex flex-col lg:flex-row justify-between gap-8"
            >
              
              {/* Left Details */}
              <div className="lg:w-2/3 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                    {role.theme}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{role.period}</span>
                </div>

                <h3 className="font-sans text-3xl md:text-4xl font-extrabold text-white">
                  {role.role}
                </h3>
                <h4 className="font-sans text-lg font-bold text-amber-400">
                  {role.company} <span className="text-zinc-500 font-normal text-sm">| {role.location}</span>
                </h4>

                <p className="font-sans text-sm text-zinc-300 font-medium">
                  {role.summary}
                </p>

                <ul className="space-y-2 pt-2 font-sans text-sm text-zinc-400">
                  {role.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="text-amber-400 font-mono mt-0.5">❖</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {role.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Big Metrics */}
              {role.metrics && (
                <div className="lg:w-1/3 flex flex-col justify-center gap-4 p-6 rounded-3xl bg-black border border-white/10">
                  {role.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="font-sans text-4xl lg:text-5xl font-black text-amber-400 tracking-tight">
                        {m.val}
                      </span>
                      <span className="font-mono text-xs text-zinc-400 uppercase font-semibold mt-1">
                        {m.lbl}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
