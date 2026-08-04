import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Apple Section Header */}
        <div className="flex flex-col items-start mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            {t.about.tag}
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            {t.about.title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-3xl mt-4 font-normal">
            {t.about.subtitle}
          </p>
        </div>

        {/* Apple Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Portrait & Pro Meta Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-[36px] bg-zinc-950 border border-white/10 shadow-2xl flex flex-col justify-between h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center font-serif text-2xl font-bold text-amber-400">
                  İS
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-extrabold text-white">
                    {t.about.portraitCard.name}
                  </h3>
                  <p className="font-mono text-xs text-amber-400 font-semibold">
                    {t.about.portraitCard.role}
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs pt-6 border-t border-white/10">
                <div className="flex justify-between text-zinc-400">
                  <span>FOCUS:</span>
                  <span className="text-white font-bold">{t.about.portraitCard.focus}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>LOCATION:</span>
                  <span className="text-white font-bold">{t.about.portraitCard.location}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>LANGUAGES:</span>
                  <span className="text-amber-300 font-bold">{t.about.portraitCard.languages}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{t.about.portraitCard.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Statement & Education Pro Badge */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Story Card */}
            <div className="p-8 md:p-10 rounded-[36px] bg-zinc-950 border border-white/10 space-y-4">
              <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-white">
                {t.about.storyTitle}
              </h3>
              <p className="font-sans text-base text-zinc-300 leading-relaxed">
                {t.about.bio1}
              </p>
              <p className="font-sans text-base text-zinc-400 leading-relaxed">
                {t.about.bio2}
              </p>
            </div>

            {/* Apple Mission Card */}
            <div className="p-8 md:p-10 rounded-[36px] bg-gradient-to-br from-amber-500/10 via-zinc-950 to-zinc-950 border border-amber-400/30 relative overflow-hidden shadow-2xl">
              <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 block">
                {t.about.missionTitle}
              </span>
              <p className="font-serif text-2xl md:text-3xl text-white italic leading-snug">
                "{t.about.missionText}"
              </p>
            </div>

            {/* Education Pro Card */}
            <div className="p-8 rounded-[36px] bg-zinc-950 border border-white/10 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase block">
                {t.about.eduTitle}
              </span>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-white/10">
                <div>
                  <h4 className="font-sans text-lg font-bold text-white">{t.about.marmaraSchool}</h4>
                  <p className="font-sans text-xs text-zinc-400">{t.about.marmaraDegree}</p>
                </div>
                <span className="font-mono text-xs text-amber-400 font-bold mt-2 sm:mt-0">{t.about.marmaraDates}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <h4 className="font-sans text-base font-semibold text-zinc-300">{t.about.highSchool}</h4>
                  <p className="font-sans text-xs text-zinc-500">{t.about.highSchoolDegree}</p>
                </div>
                <span className="font-mono text-xs text-zinc-500 mt-2 sm:mt-0">{t.about.highSchoolDates}</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {t.about.pillars.map((p, idx) => (
            <div key={idx} className="p-6 rounded-[28px] bg-zinc-950 border border-white/10 hover:border-amber-400/40 transition-all">
              <h4 className="font-sans text-lg font-bold text-amber-400 mb-2">{p.title}</h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
