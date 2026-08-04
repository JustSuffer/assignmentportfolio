import React, { useState } from 'react';

const Contact = ({ onOpenCVModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Machine Learning Opportunity',
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
      setStatus({ submitting: false, submitted: false, error: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: 'Machine Learning Opportunity', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="section-padding clair-contact-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-crimson">// INITIATE CONTACT & INQUIRIES</span>
          <h2 className="section-title-serif">Get In Touch with İzzet Can Sorna</h2>
          <p className="section-subtitle">
            Open for Machine Learning Engineer positions, Computer Vision projects, and technical collaborations.
          </p>
        </div>

        <div className="contact-clair-grid">
          {/* Info Card */}
          <div className="contact-info-card clair-card">
            <h3 className="card-title-gold">Contact Information</h3>
            <p className="contact-intro">
              Feel free to reach out directly via email, phone, LinkedIn, or GitHub for technical inquiries or full-time roles.
            </p>

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

              <a href="https://linkedin.com/in/izzetcansorna" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
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
                📄 View / Print Full CV
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card clair-card">
            <h3 className="card-title-gold">Send Direct Message</h3>

            {status.submitted ? (
              <div className="submitted-clair-box">
                <h4 className="text-gold">MESSAGE RECEIVED // SUCCESS</h4>
                <p>Thank you for reaching out. İzzet Can Sorna will respond to your email promptly.</p>
                <button 
                  className="btn-crimson-outline btn-sm"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status.error && <div className="error-clair-box">⚠️ {status.error}</div>}

                <div className="form-clair-group">
                  <label className="form-label-clair">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-clair"
                    placeholder="e.g. Dr. Alex Mercer"
                    required
                  />
                </div>

                <div className="form-clair-group">
                  <label className="form-label-clair">Your Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-clair"
                    placeholder="alex@institution.com"
                    required
                  />
                </div>

                <div className="form-clair-group">
                  <label className="form-label-clair">Inquiry Category</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="select-clair"
                  >
                    <option value="Machine Learning Opportunity">Machine Learning Engineering Role</option>
                    <option value="Computer Vision Project">Computer Vision / Medical AI Project</option>
                    <option value="Autonomous Robotics">Autonomous Robotics (Metsuke)</option>
                    <option value="General Inquiry">General Collaboration</option>
                  </select>
                </div>

                <div className="form-clair-group">
                  <label className="form-label-clair">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="textarea-clair"
                    placeholder="Describe your opportunity, project specifications, or inquiry..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold-solid full-width" disabled={status.submitting}>
                  {status.submitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE →'}
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
