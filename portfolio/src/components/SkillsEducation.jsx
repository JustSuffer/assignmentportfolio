import React from 'react';

const SkillsEducation = () => {
  const skillCategories = [
    {
      title: 'ML & Computer Vision',
      badgeColor: 'gold',
      skills: ['PyTorch', 'YOLOv11', 'OpenCV', 'ResNet', 'MobileNet', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Programming & Languages',
      badgeColor: 'crimson',
      skills: ['Python', 'C++', 'JavaScript', 'HTML/CSS', 'SQL']
    },
    {
      title: 'Cloud & DevOps Infrastructure',
      badgeColor: 'gold',
      skills: ['Oracle Cloud Infrastructure', 'Docker', 'Linux', 'GitHub Actions', 'CI/CD']
    },
    {
      title: 'Web & API Engineering',
      badgeColor: 'blue',
      skills: ['FastAPI', 'REST APIs', 'React.js', 'Tailwind CSS', 'WebSockets']
    },
    {
      title: 'Tools & Hardware Microcontrollers',
      badgeColor: 'gold',
      skills: ['Git', 'Google Colab', 'MATLAB', 'Arduino', 'ESP32-S3']
    }
  ];

  return (
    <section id="skills" className="section-padding clair-skills-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-gold">// TECHNICAL SKILLS & TOOLSET</span>
          <h2 className="section-title-serif">Engineering Capabilities & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive matrix of frameworks, cloud services, and programming languages mastered by İzzet Can Sorna.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-cat-card clair-card">
              <div className="cat-header">
                <span className="cat-bullet text-gold">◆</span>
                <h3 className="cat-title">{cat.title}</h3>
              </div>

              <div className="cat-tags-flex">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge-clair">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="additional-info-bar clair-card">
          <div className="info-block">
            <span className="mono-tag text-gold">LANGUAGES:</span>
            <span className="info-text-val">English (Professional Working Proficiency) · Turkish (Native)</span>
          </div>
          <div className="info-block">
            <span className="mono-tag text-crimson">LOCATION:</span>
            <span className="info-text-val">Istanbul, Turkey (Available Remote Worldwide & Relocation)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
