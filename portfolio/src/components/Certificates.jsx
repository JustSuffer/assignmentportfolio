import React from 'react';

const Certificates = ({ t }) => {
  return (
    <section id="certificates" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Apple Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            {t.certificates.tag}
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            {t.certificates.title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-3xl mt-4 font-normal leading-relaxed">
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certificates.items.map((cert, idx) => (
            <div 
              key={idx}
              className="p-6 md:p-8 rounded-[32px] bg-zinc-950 border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{cert.date}</span>
                </div>

                <h3 className="font-sans text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors mb-3 leading-snug">
                  {cert.title}
                </h3>

                {cert.credentialId && (
                  <p className="font-mono text-[11px] text-zinc-500 mb-4">
                    Credential ID: <span className="text-zinc-300 font-semibold">{cert.credentialId}</span>
                  </p>
                )}
              </div>

              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-300">
                      {skill}
                    </span>
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

export default Certificates;
