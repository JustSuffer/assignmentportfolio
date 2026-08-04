import React from 'react';

const SkillsEducation = ({ t }) => {
  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Apple Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            {t.skills.tag}
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            {t.skills.title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-3xl mt-4 font-normal">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.skills.categories.map((cat, idx) => (
            <div key={idx} className="p-8 rounded-[36px] bg-zinc-950 border border-white/10 hover:border-amber-400/40 transition-all">
              <h3 className="font-sans text-xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, iIdx) => (
                  <span key={iIdx} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-300 hover:border-amber-400 hover:text-white transition-all">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsEducation;
