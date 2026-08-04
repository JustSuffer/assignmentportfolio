import React, { useState } from 'react';

const Contact = ({ t, onOpenCVModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: t.contact.subjML,
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: t.contact.errRequired });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: t.contact.subjML, message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Apple Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-rose-500 uppercase mb-3">
            {t.contact.tag}
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            {t.contact.title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-3xl mt-4 font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 md:p-10 rounded-[36px] bg-zinc-950 border border-white/10 space-y-6 shadow-2xl">
              <h3 className="font-sans text-2xl font-extrabold text-white">{t.contact.cardTitle}</h3>
              <p className="font-sans text-sm text-zinc-400">{t.contact.intro}</p>

              <div className="space-y-4 font-mono text-xs">
                <a href="mailto:izzet4626@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-black border border-white/10 hover:border-amber-400 transition-colors">
                  <span className="text-xl">✉️</span>
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[10px]">EMAIL</span>
                    <span className="text-white font-bold text-sm">izzet4626@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+905340879034" className="flex items-center gap-4 p-4 rounded-2xl bg-black border border-white/10 hover:border-amber-400 transition-colors">
                  <span className="text-xl">📞</span>
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[10px]">PHONE</span>
                    <span className="text-white font-bold text-sm">+90 534 087 9034</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/izzetcansorna/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-black border border-white/10 hover:border-amber-400 transition-colors">
                  <span className="text-xl">💼</span>
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[10px]">LINKEDIN</span>
                    <span className="text-amber-400 font-bold text-sm">linkedin.com/in/izzetcansorna</span>
                  </div>
                </a>

                <a href="https://github.com/JustSuffer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-black border border-white/10 hover:border-amber-400 transition-colors">
                  <span className="text-xl">📦</span>
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[10px]">GITHUB</span>
                    <span className="text-amber-400 font-bold text-sm">github.com/JustSuffer</span>
                  </div>
                </a>
              </div>

              <button 
                onClick={onOpenCVModal}
                className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg"
              >
                {t.contact.btnViewCV}
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-[36px] bg-zinc-950 border border-white/10 shadow-2xl">
              <h3 className="font-sans text-2xl font-extrabold text-white mb-6">{t.contact.formTitle}</h3>

              {status.submitted ? (
                <div className="text-center py-12 space-y-4">
                  <h4 className="font-sans text-2xl font-bold text-amber-400">{t.contact.successTitle}</h4>
                  <p className="font-sans text-sm text-zinc-300 max-w-md mx-auto">{t.contact.successMsg}</p>
                  <button 
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white font-mono text-xs font-bold"
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  >
                    {t.contact.btnSendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status.error && (
                    <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500 text-rose-400 text-xs font-mono">
                      ⚠️ {status.error}
                    </div>
                  )}

                  <div>
                    <label className="font-mono text-xs text-amber-400 font-bold block mb-2">{t.contact.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-black border border-white/10 text-white font-sans text-sm focus:border-amber-400 outline-none transition-colors"
                      placeholder={t.contact.namePlace}
                      required
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-amber-400 font-bold block mb-2">{t.contact.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-black border border-white/10 text-white font-sans text-sm focus:border-amber-400 outline-none transition-colors"
                      placeholder={t.contact.emailPlace}
                      required
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-amber-400 font-bold block mb-2">{t.contact.subjLabel}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-black border border-white/10 text-white font-sans text-sm focus:border-amber-400 outline-none transition-colors"
                    >
                      <option value={t.contact.subjML}>{t.contact.subjML}</option>
                      <option value={t.contact.subjCV}>{t.contact.subjCV}</option>
                      <option value={t.contact.subjRobot}>{t.contact.subjRobot}</option>
                      <option value={t.contact.subjGen}>{t.contact.subjGen}</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-amber-400 font-bold block mb-2">{t.contact.msgLabel}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full p-4 rounded-2xl bg-black border border-white/10 text-white font-sans text-sm focus:border-amber-400 outline-none transition-colors"
                      placeholder={t.contact.msgPlace}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg" 
                    disabled={status.submitting}
                  >
                    {status.submitting ? t.contact.sending : t.contact.btnSend}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
