import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: '🤖',
      title: 'AI & LLM Integration',
      desc: 'Architecting intelligent autonomous agents, multi-tool workflows, and prompt engineering solutions using state-of-the-art models.'
    },
    {
      icon: '⚡',
      title: 'Modern Web Architecture',
      desc: 'Building blazingly fast full-stack applications with React 19, Vite, modular CSS, and responsive UI components.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Excellence',
      desc: 'Designing rich aesthetic user interfaces with dynamic animations, glassmorphism, and intuitive design patterns.'
    },
    {
      icon: '🛠️',
      title: 'Seamless Deployment',
      desc: 'Optimizing build pipelines, Netlify/Vercel continuous deployments, and production-ready clean code.'
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// ABOUT ME</div>
          <h2 className="section-title">Driven by Innovation, <span className="gradient-purple-text">Powered by AI</span></h2>
          <p className="section-subtitle">
            Bridging the gap between cutting-edge Artificial Intelligence and sleek, user-centric web applications.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio glass-card">
            <h3 className="bio-title">Hello! I'm İzzet Can Sorna 👋</h3>
            <p className="bio-paragraph">
              I am a passionate software developer and AI engineer focused on building high-impact web solutions. With expertise spanning modern frontend frameworks, backend integrations, and machine learning/LLM tooling, I create applications that look incredible and perform effortlessly.
            </p>
            <p className="bio-paragraph">
              Whether building autonomous AI agent platforms, SEO analytics engines like <strong>FlyRank AI</strong>, or custom client tools, I focus on clean code, rapid load times, and delighting users at every interaction.
            </p>

            <div className="bio-info-chips">
              <div className="info-chip">
                <span className="chip-key">Location:</span>
                <span className="chip-val">Turkey 🇹🇷</span>
              </div>
              <div className="info-chip">
                <span className="chip-key">Specialization:</span>
                <span className="chip-val">AI & Full-Stack</span>
              </div>
              <div className="info-chip">
                <span className="chip-key">Education:</span>
                <span className="chip-val">Software & Computer Science</span>
              </div>
            </div>
          </div>

          <div className="about-cards">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card glass-card">
                <div className="card-icon">{item.icon}</div>
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
