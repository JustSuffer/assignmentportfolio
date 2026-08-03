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
      setStatus({ submitting: false, submitted: false, error: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate fast contact submission
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: 'Project Collaboration', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// GET IN TOUCH</div>
          <h2 className="section-title">Let's Build Something <span className="gradient-text">Exceptional</span></h2>
          <p className="section-subtitle">
            Have a project in mind, need an AI engineer, or want to discuss full-stack opportunities? Reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-info glass-card">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              I am available for freelance work, remote full-time positions, and AI consultation projects.
            </p>

            <div className="info-item-list">
              <a href="mailto:izzetcansorna@gmail.com" className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <span className="info-value">izzetcansorna@gmail.com</span>
                </div>
              </a>

              <a href="https://github.com/izzet" target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon">📦</div>
                <div className="info-text">
                  <span className="info-label">GitHub</span>
                  <span className="info-value">github.com/izzet</span>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon">💼</div>
                <div className="info-text">
                  <span className="info-label">LinkedIn</span>
                  <span className="info-value">linkedin.com/in/izzetcansorna</span>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Turkey (Remote Worldwide)</span>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <div className="pulse-dot"></div>
              <span>Currently accepting new high-impact projects</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-container glass-card">
            <h3 className="contact-info-title">Send a Message</h3>

            {status.submitted ? (
              <div className="success-banner">
                <div className="banner-icon">🎉</div>
                <h4>Message Received!</h4>
                <p>Thank you for reaching out. İzzet Can Sorna will get back to you as soon as possible.</p>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {status.error && (
                  <div className="error-banner">
                    ⚠️ {status.error}
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="AI Integration">AI / LLM Integration</option>
                    <option value="Full-Stack Role">Full-Stack Engineering Role</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals or requirements..."
                    rows="5"
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending Message...' : 'Send Message 🚀'}
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
