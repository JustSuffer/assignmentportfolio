import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Computer Vision', 'Autonomous Robotics', 'Medical AI'];

  const projectsData = [
    {
      id: 1,
      title: 'Computational Medical Imaging Quantification Research',
      subtitle: 'AI-Assisted Brain RMI Imaging & YOLOv11 Model Quantification',
      category: 'Medical AI',
      date: 'Jul 2026',
      tags: ['YOLOv11', 'PyTorch', 'Medical Vision', 'Brain RMI', 'Research Paper'],
      shortDesc: 'Spearheaded a computer vision research manuscript focusing on AI-assisted medical imaging quantification, submitted to Multimedia Tools and Applications (Under Review). Achieved 97.04% mAP score on brain RMI datasets.',
      highlights: [
        'Spearheaded a computer vision research manuscript focusing on AI-assisted medical imaging, submitted to Multimedia Tools and Applications (Under Review).',
        'Trained a robust object detection model utilizing YOLOv11 on an RMI dataset specifically for brain imaging, achieving an mAP score of 97.04%.',
        'Optimized pipeline pre-processing for rapid diagnostic evaluation in medical workflows.'
      ],
      metrics: [
        { val: '97.04%', lbl: 'mAP Score' },
        { val: 'YOLOv11', lbl: 'Model Architecture' },
        { val: 'Under Review', lbl: 'Multimedia Tools & Apps' }
      ]
    },
    {
      id: 2,
      title: 'Metsuke — Autonomous Quadruped Robot Assistant',
      subtitle: 'ESP32-S3 Real-Time Embedded C/C++ Servo Kinematics & Motion Planning',
      category: 'Autonomous Robotics',
      date: 'Mar 2026',
      tags: ['ESP32-S3', 'C/C++', 'Kinematics', 'WebSockets', 'Obstacle Avoidance'],
      shortDesc: 'Architected and programmed an autonomous quadruped robot assistant utilizing an ESP32-S3 microcontroller and C/C++ in a real-time operating environment with 15ms sensor latency.',
      highlights: [
        'Architected and programmed an autonomous quadruped robot assistant utilizing an ESP32-S3 microcontroller and C/C++ in a real-time operating environment.',
        'Integrated complex servo motor kinematics and WebSocket communication protocols, achieving a 15ms response time in sensor data processing.',
        'Engineered a dynamic obstacle avoidance and motion planning system, significantly improving navigational stability on uneven terrain.'
      ],
      metrics: [
        { val: '15ms', lbl: 'Data Latency' },
        { val: 'ESP32-S3', lbl: 'Microcontroller' },
        { val: 'C / C++', lbl: 'Core Systems' }
      ]
    },
    {
      id: 3,
      title: 'Artificial Intelligence in Droopy Lower Eyelid Malposition',
      subtitle: 'Real-Time Medical Diagnostic Tool Calculating MRD2 Surgical Metrics',
      category: 'Medical AI',
      date: 'Jan 2026',
      tags: ['YOLOv11', 'OpenCV', 'Python', 'MRD2 Metric', 'Clinical Vision'],
      shortDesc: 'Developed an end-to-end computer-vision diagnostic tool using YOLOv11, Python, and OpenCV to quantify lower eyelid malposition in real-time by dynamically calculating key surgical metrics like MRD2.',
      highlights: [
        'Developed an end-to-end computer-vision diagnostic tool using YOLOv11, Python, and OpenCV to quantify lower eyelid malposition in real-time by dynamically calculating key surgical metrics like MRD2.',
        'Achieved 98% precision (mAP@50) and sub-millimeter accuracy through a custom resolution-scaling algorithm on a dataset of 3K+ clinical images, eliminating manual caliper errors.',
        'Optimized model inference time to 20ms per frame, ensuring seamless deployment viability for clinical hardware.'
      ],
      metrics: [
        { val: '98%', lbl: 'Precision (mAP@50)' },
        { val: '20ms', lbl: 'Inference Time' },
        { val: '3K+', lbl: 'Clinical Image Dataset' }
      ]
    },
    {
      id: 4,
      title: 'Motion Tracking Turret with Real-Time Image Processing',
      subtitle: 'Computer Vision Servo Control & Target Tracking at 36 FPS',
      category: 'Computer Vision',
      date: 'Aug 2025',
      tags: ['Keras', 'OpenCV', 'Python', 'Object Tracking', 'Servo Hardware'],
      shortDesc: 'Programmed a real-time motion tracking turret system integrating custom hardware and advanced computer vision algorithms operating at 36 FPS under varying lighting conditions.',
      highlights: [
        'Programmed a real-time motion tracking turret system integrating custom hardware and advanced computer vision algorithms.',
        'Implemented object tracking features utilizing Keras and OpenCV in Python, operating at 36 FPS under varying lighting conditions.',
        'Calibrated hardware response loops for rapid target acquisition.'
      ],
      metrics: [
        { val: '36 FPS', lbl: 'Tracking Speed' },
        { val: 'Keras/OpenCV', lbl: 'CV Stack' },
        { val: 'Real-Time', lbl: 'Hardware Servo Control' }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding clair-projects-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-gold">// RESEARCH & ENGINEERING PROJECTS</span>
          <h2 className="section-title-serif">Featured Computer Vision & Robotics Projects</h2>
          <p className="section-subtitle">
            A showcase of manuscripts, autonomous robotics, and medical imaging applications from İzzet Can Sorna's portfolio.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="clair-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`clair-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="clair-projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="clair-project-card clair-card">
              <div className="project-card-top">
                <span className="mono-tag text-gold">{project.category}</span>
                <span className="mono-tag text-dim">{project.date}</span>
              </div>

              <h3 className="project-title-serif">{project.title}</h3>
              <p className="project-subtitle-gold">{project.subtitle}</p>
              <p className="project-desc-text">{project.shortDesc}</p>

              <div className="project-tags-flex">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag-chip-clair">{tag}</span>
                ))}
              </div>

              <div className="project-card-bottom">
                <button 
                  className="btn-gold-link"
                  onClick={() => setActiveModalProject(project)}
                >
                  Read Technical Breakdown →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
