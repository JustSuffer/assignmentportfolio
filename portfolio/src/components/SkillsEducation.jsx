import React from 'react';

const SkillsEducation = ({ t }) => {
  const skillCategories = [
    {
      title: 'ML & Computer Vision',
      skills: ['PyTorch', 'YOLOv11', 'OpenCV', 'ResNet', 'MobileNet', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Programming & Languages',
      skills: ['Python', 'C++', 'JavaScript', 'HTML/CSS', 'SQL']
    },
    {
      title: 'Cloud & DevOps Infrastructure',
      skills: ['Oracle Cloud Infrastructure', 'Docker', 'Linux', 'GitHub Actions', 'CI/CD']
    },
    {
      title: 'Web & API Engineering',
      skills: ['FastAPI', 'REST APIs', 'React.js', 'Tailwind CSS', 'WebSockets']
    },
    {
      title: 'Tools & Hardware Microcontrollers',
      skills: ['Git', 'Google Colab', 'MATLAB', 'Arduino', 'ESP32-S3']
    }
  ];

  return (
    <section id="skills" className="section-padding clair-skills-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-gold">{t.skills.tag}</span>
          <h2 className="section-title-serif">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
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

        {/* Additional Info Bar */}
        <div className="additional-info-bar clair-card">
          <div className="info-block">
            <span className="mono-tag text-gold">{t.skills.languages}</span>
            <span className="info-text-val">{t.skills.langVal}</span>
          </div>
          <div className="info-block">
            <span className="mono-tag text-crimson">{t.skills.location}</span>
            <span className="info-text-val">{t.skills.locVal}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
