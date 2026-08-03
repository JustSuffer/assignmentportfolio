import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
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
      setStatus({ submitting: false, submitted: false, error: 'Please complete all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: 'Project Collaboration', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="section-padding contact-section-clean">
      <div className="container">
        <div className="section-header-left">
          <span className="mono-tag">—— CONTACT & INQUIRIES // 007</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid-clean">
          <div className="contact-info-clean">
            <h3 className="contact-title-clean">Direct Communication</h3>
            <p className="contact-subtitle-clean">
              Available for full-stack web applications, AI agent integration, and technical engineering roles.
            </p>

            <div className="contact-links-list">
              <a href="mailto:izzetcansorna@gmail.com" className="contact-link-item">
                <span className="contact-link-label">EMAIL:</span>
                <span className="contact-link-val">izzetcansorna@gmail.com</span>
              </a>
              <a href="https://github.com/izzet" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-link-label">GITHUB:</span>
                <span className="contact-link-val">github.com/izzet</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-link-label">LINKEDIN:</span>
                <span className="contact-link-val">linkedin.com/in/izzetcansorna</span>
              </a>
            </div>

            <div className="availability-box-clean">
              <span className="bullet-blue">▪</span>
              <span>AVAILABILITY: OPEN FOR NEW PROJECTS</span>
            </div>
          </div>

          <div className="contact-form-clean">
            {status.submitted ? (
              <div className="submitted-box-clean">
                <h4>MESSAGE_SENT // SUCCESS</h4>
                <p>Thank you. İzzet Can Sorna will respond shortly.</p>
                <button 
                  className="btn-outline-dark btn-sm"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status.error && <div className="error-box-clean">⚠️ {status.error}</div>}

                <div className="form-group-clean">
                  <label className="form-label-mono">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-text-clean"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group-clean">
                  <label className="form-label-mono">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-text-clean"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>

                <div className="form-group-clean">
                  <label className="form-label-mono">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-select-clean"
                  >
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="AI Integration">AI / LLM Integration</option>
                    <option value="Full-Stack Role">Full-Stack Role</option>
                  </select>
                </div>

                <div className="form-group-clean">
                  <label className="form-label-mono">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="input-textarea-clean"
                    placeholder="Project details..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary-blue btn-full" disabled={status.submitting}>
                  {status.submitting ? 'SENDING...' : 'SEND MESSAGE →'}
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
