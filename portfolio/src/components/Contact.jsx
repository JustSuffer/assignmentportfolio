import React, { useState } from 'react';

const Contact = ({ t, onOpenCVModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: t.contact.subjML,
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

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
    <section id="contact" className="section-padding clair-contact-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-crimson">{t.contact.tag}</span>
          <h2 className="section-title-serif">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-clair-grid">
          {/* Info Card */}
          <div className="contact-info-card clair-card">
            <h3 className="card-title-gold">{t.contact.cardTitle}</h3>
            <p className="contact-intro">{t.contact.intro}</p>

            <div className="contact-details-list">
              <a href="mailto:izzet4626@gmail.com" className="contact-detail-item">
                <span className="detail-icon">✉️</span>
                <div className="detail-meta">
                  <span className="mono-tag text-dim">EMAIL</span>
                  <span className="detail-val text-gold">izzet4626@gmail.com</span>
                </div>
              </a>

              <a href="tel:+905340879034" className="contact-detail-item">
                <span className="detail-icon">📞</span>
                <div className="detail-meta">
                  <span className="mono-tag text-dim">PHONE</span>
                  <span className="detail-val text-gold">+90 534 087 9034</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/izzetcansorna/" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <span className="detail-icon">💼</span>
                <div className="detail-meta">
                  <span className="mono-tag text-dim">LINKEDIN</span>
                  <span className="detail-val text-gold-light">linkedin.com/in/izzetcansorna</span>
                </div>
              </a>

              <a href="https://github.com/JustSuffer" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <span className="detail-icon">📦</span>
                <div className="detail-meta">
                  <span className="mono-tag text-dim">GITHUB</span>
                  <span className="detail-val text-gold-light">github.com/JustSuffer</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <span className="detail-icon">📍</span>
                <div className="detail-meta">
                  <span className="mono-tag text-dim">LOCATION</span>
                  <span className="detail-val">Istanbul, Turkey (Remote / Relocation)</span>
                </div>
              </div>
            </div>

            <div className="cv-download-box">
              <button className="btn-gold-solid full-width" onClick={onOpenCVModal}>
                {t.contact.btnViewCV}
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card clair-card">
            <h3 className="card-title-gold">{t.contact.formTitle}</h3>

            {status.submitted ? (
              <div className="submitted-clair-box">
                <h4 className="text-gold">{t.contact.successTitle}</h4>
                <p>{t.contact.successMsg}</p>
                <button 
                  className="btn-crimson-outline btn-sm"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  {t.contact.btnSendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status.error && <div className="error-clair-box">⚠️ {status.error}</div>}

                <div className="form-clair-group">
                  <label className="form-label-clair">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-clair"
                    placeholder={t.contact.namePlace}
                    required
                  />
                </div>

                <div className="form-clair-group">
                  <label className="form-label-clair">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-clair"
                    placeholder={t.contact.emailPlace}
                    required
                  />
                </div>

                <div className="form-clair-group">
                  <label className="form-label-clair">{t.contact.subjLabel}</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="select-clair"
                  >
                    <option value={t.contact.subjML}>{t.contact.subjML}</option>
                    <option value={t.contact.subjCV}>{t.contact.subjCV}</option>
                    <option value={t.contact.subjRobot}>{t.contact.subjRobot}</option>
                    <option value={t.contact.subjGen}>{t.contact.subjGen}</option>
                  </select>
                </div>

                <div className="form-clair-group">
                  <label className="form-label-clair">{t.contact.msgLabel}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="textarea-clair"
                    placeholder={t.contact.msgPlace}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold-solid full-width" disabled={status.submitting}>
                  {status.submitting ? t.contact.sending : t.contact.btnSend}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
