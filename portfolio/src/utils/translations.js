export const translations = {
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      certificates: 'Certificates',
      skills: 'Skills',
      contact: 'Contact',
      resume: 'Resume',
      viewCV: 'View CV',
    },
    hero: {
      badge: 'LATENT SPACE VECTOR ENVIRONMENT // OBSCURA SPEC V1.0',
      tagline: 'MACHINE LEARNING ENGINEER & COMPUTER VISION RESEARCHER',
      titleLine1: 'Engineering',
      titleLine2: 'Production AI',
      titleLine3: 'Computer Vision',
      titleLine4: '& Robotics',
      lead: 'Translating high-dimensional neural representations, medical imaging research, and embedded hardware into production-grade AI systems with PyTorch, YOLOv11, and C++.',
      btnCV: 'Download Resume (PDF)',
      btnProjects: 'Explore Projects',
      btnLab: 'View Certificates',
      metrics: [
        { val: '20+', lbl: 'AI & Engineering Projects' },
        { val: '4+', lbl: 'Industry Engineering Roles' },
        { val: '17', lbl: 'Professional Certifications' },
        { val: '98%', lbl: 'Diagnostic Precision' }
      ]
    },
    about: {
      tag: '// BIOGRAPHY & RESEARCH PHILOSOPHY',
      title: 'Translating Theory into Production Systems',
      subtitle: 'Combining mathematical rigor in neural topology with real-world mechatronics engineering.',
      portraitCard: {
        name: 'İzzet Can Sorna',
        role: 'Machine Learning Engineer',
        focus: 'Computer Vision & Medical AI',
        location: 'Istanbul, Turkey',
        languages: 'English (Proficient) · Turkish (Native)',
        availability: 'Open to AI Engineering Roles'
      },
      storyTitle: 'Engineering Identity',
      bio1: 'Graduating from Marmara University Department of Mechatronics Engineering (GPA: 3.10), I build production-grade AI systems that bridge deep learning research, medical computer vision, and autonomous robotics.',
      bio2: 'My work focuses on scalable deep learning pipelines, real-time object detection models (YOLOv11), sub-millimeter surgical metric calculation, and low-latency embedded firmware on ESP32-S3 hardware.',
      missionTitle: 'MISSION STATEMENT',
      missionText: 'Building intelligent systems that transform complex research into reliable products capable of solving real-world problems.',
      quoteTitle: 'ENGINEERING PHILOSOPHY',
      quoteText: '"Precision over complexity. Research before implementation. Performance before aesthetics. Engineering over hype."',
      focusTitle: 'CORE TECHNICAL FOCUS',
      eduTitle: 'ACADEMIC BACKGROUND',
      marmaraSchool: 'Marmara University',
      marmaraDegree: 'B.S., Department of Mechatronics Engineering (GPA: 3.10 / 4.00)',
      marmaraDates: 'Sep 2020 – Jul 2025',
      highSchool: 'Nişantaşı Nuri Akın Anatolian High School',
      highSchoolDegree: 'High School Diploma',
      highSchoolDates: 'Graduated Jun 2020',
      pillars: [
        {
          title: 'Research',
          desc: 'Building solutions supported by empirical evidence and mathematical rigor.'
        },
        {
          title: 'Engineering',
          desc: 'Reliable production-grade systems before clever prototype workarounds.'
        },
        {
          title: 'Innovation',
          desc: 'Creating practical real-world applications from cutting-edge AI architectures.'
        },
        {
          title: 'Deployment',
          desc: 'Transforming trained weights into Dockerized REST APIs and edge deployments.'
        }
      ]
    },
    experience: {
      tag: '// CHRONOLOGICAL JOURNEY',
      title: 'Professional Engineering Evolution',
      subtitle: 'Demonstrating technical growth from network infrastructure to production AI pipelines.',
      roles: [
        {
          company: 'FlyRank AI',
          role: 'Machine Learning Engineer Intern',
          period: 'Jun 2026 – Present',
          location: 'Remote',
          theme: 'Production AI & Optimization',
          badgeColor: 'gold',
          summary: 'Engineered production data processing pipelines and staging evaluations.',
          bullets: [
            'Engineered machine learning models to optimize data processing pipelines, reducing data prep time by 35%.',
            'Accelerated model training across 10+ datasets through hyperparameter tuning and cross-validation.',
            'Evaluated models in staging environments to ensure robust edge-case handling prior to production.'
          ],
          metrics: [
            { val: '-35%', lbl: 'Prep Time Reduction' },
            { val: '10+', lbl: 'Datasets Tuned' }
          ],
          stack: ['PyTorch', 'Python', 'FastAPI', 'Docker', 'Oracle Cloud', 'Git']
        },
        {
          company: 'Bluesense',
          role: 'AI Engineer Intern',
          period: 'Dec 2025 – Present',
          location: 'Boston, MA (Remote)',
          theme: 'Medical AI & Computer Vision',
          badgeColor: 'crimson',
          summary: 'Formulated computer vision solutions for skin diagnostics.',
          bullets: [
            'Developed CV solutions using ResNet, MobileNet, and YOLOv11 on a 3.5K+ labeled dataset (80/20 split).',
            'Optimized deep learning models using transfer learning on Colab, achieving 98% precision and 97.03% recall across 100+ user samples.'
          ],
          metrics: [
            { val: '98%', lbl: 'Precision' },
            { val: '97.03%', lbl: 'Recall' }
          ],
          stack: ['YOLOv11', 'ResNet', 'MobileNet', 'OpenCV', 'Google Colab', 'Python']
        },
        {
          company: 'INNOEM',
          role: 'Frontend Developer Intern',
          period: 'Aug 2024 – Jan 2025',
          location: 'Istanbul, Turkey',
          theme: 'UI Systems & Web Performance',
          badgeColor: 'gold',
          summary: 'Architected high-performance web interfaces and UI components.',
          bullets: [
            'Architected responsive user interfaces with React.js and Tailwind CSS, speeding up page loads by 30%.',
            'Collaborated within a cross-functional team of 7 to optimize front-end architecture.'
          ],
          metrics: [
            { val: '+30%', lbl: 'Load Speedup' },
            { val: '7 Member', lbl: 'Cross Team' }
          ],
          stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git']
        },
        {
          company: 'Albil Merkezi Hizmetler',
          role: 'ICT Network Engineer Intern',
          period: 'Jul 2024 – Aug 2024',
          location: 'Istanbul, Turkey',
          theme: 'Network Infrastructure & Security',
          badgeColor: 'blue',
          summary: 'Managed enterprise IT infrastructure for zero-downtime operations.',
          bullets: [
            'Orchestrated information systems for 5,500+ daily internal queries with zero downtime.',
            'Diagnosed system anomalies and deployed efficient data storage protocols.'
          ],
          metrics: [
            { val: '5,500+', lbl: 'Daily Queries' },
            { val: '0%', lbl: 'Downtime' }
          ],
          stack: ['Network Infrastructure', 'Linux', 'SQL', 'System Security']
        },
        {
          company: 'Turkish Technic',
          role: 'Aircraft Maintenance Engineer Intern',
          period: 'Aug 2023 – Sep 2023',
          location: 'Istanbul, Turkey',
          theme: 'Industrial Engineering & Hardware',
          badgeColor: 'steel',
          summary: 'Executed mechanical maintenance on commercial aircraft at Atatürk Airport hangar.',
          bullets: [
            'Executed detailed mechanical maintenance on aircraft systems adhering to aviation safety standards.',
            'Assisted in root-cause analysis for hardware malfunctions under strict protocols.'
          ],
          metrics: [
            { val: 'Hangar', lbl: 'Atatürk Airport' },
            { val: '100%', lbl: 'Safety Standard' }
          ],
          stack: ['Mechanical Systems', 'Root-Cause Analysis', 'Aviation Hardware', 'MATLAB']
        }
      ]
    },
    projects: {
      tag: '// FEATURED PRODUCTS & RESEARCH',
      title: 'Interactive Project Gallery',
      subtitle: 'Production AI systems, research papers, quadruped robotics, and computer vision software.',
      btnBreakdown: 'Technical Breakdown →',
      btnDiscuss: 'Discuss Architecture',
      btnClose: 'Close Project',
      categories: ['All', 'Medical AI', 'Robotics', 'Computer Vision', 'Research & AI', 'Web Applications'],
      items: [
        {
          id: 1,
          title: 'Real-Time Multi-Class Brain Tumor Localization in MRI Using YOLOv11 for Early Intervention',
          subtitle: 'AI-ASSISTED BRAIN RMI IMAGING & YOLOV11 MODEL QUANTIFICATION',
          category: 'Medical AI',
          isFeatured: true,
          date: 'Jul 2026',
          image: '/images/brain_mri_paper.png',
          tags: ['YOLOv11', 'PyTorch', 'Medical Vision', 'Brain RMI', 'Research Paper'],
          shortDesc: 'Manuscript submitted to Multimedia Tools and Applications (Under Review). Achieved 97.04% mAP score on brain RMI datasets.',
          highlights: [
            'Spearheaded research manuscript submitted to Multimedia Tools and Applications (Under Review).',
            'Trained YOLOv11 on RMI brain imaging dataset achieving an mAP score of 97.04%.',
            'Optimized preprocessing pipeline for rapid diagnostic evaluation.'
          ],
          metrics: [
            { val: '97.04%', lbl: 'mAP Score' },
            { val: 'YOLOv11', lbl: 'Model Architecture' },
            { val: 'Under Review', lbl: 'Journal Status' }
          ]
        },
        {
          id: 2,
          title: 'Metsuke — Autonomous Quadruped Robot Assistant',
          subtitle: 'ESP32-S3 Real-Time C/C++ Servo Kinematics & Motion Planning',
          category: 'Robotics',
          isFeatured: true,
          date: 'Mar 2026',
          image: '/images/metsuke.jpg',
          tags: ['ESP32-S3', 'C/C++', 'Kinematics', 'WebSockets', 'Obstacle Avoidance'],
          shortDesc: 'Autonomous quadruped robot programmed on ESP32-S3 microcontroller with 15ms sensor response time.',
          highlights: [
            'Architected autonomous quadruped robot using ESP32-S3 microcontroller and C/C++.',
            'Integrated servo motor kinematics and WebSockets achieving 15ms latency.',
            'Engineered dynamic obstacle avoidance and motion planning for rough terrain.'
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
          subtitle: 'REAL-TIME DIAGNOSTIC TOOL CALCULATING MRD2 SURGICAL METRICS',
          category: 'Medical AI',
          isFeatured: true,
          date: 'Jan 2026',
          image: '/images/eyelid_report.png',
          tags: ['YOLOv11', 'OpenCV', 'Python', 'MRD2 Metric', 'Clinical Vision'],
          shortDesc: 'End-to-end CV diagnostic tool quantifying lower eyelid malposition in real-time by calculating surgical metrics like MRD2.',
          highlights: [
            'Developed diagnostic tool using YOLOv11 and OpenCV to quantify lower eyelid position.',
            'Achieved 98% precision (mAP@50) and sub-millimeter accuracy on 3K+ clinical dataset.',
            'Optimized model inference time to 20ms per frame for clinical hardware deployment.'
          ],
          metrics: [
            { val: '98%', lbl: 'Precision (mAP@50)' },
            { val: '20ms', lbl: 'Inference Time' },
            { val: '3K+', lbl: 'Clinical Samples' }
          ]
        },
        {
          id: 4,
          title: 'Real-Time Motion Tracking Turret',
          subtitle: 'COMPUTER VISION SERVO CONTROL & TARGET TRACKING AT 36 FPS',
          category: 'Computer Vision',
          isFeatured: true,
          date: 'Aug 2025',
          image: '/images/motion_turret.png',
          tags: ['Keras', 'OpenCV', 'Python', 'Object Tracking', 'Servo Hardware'],
          shortDesc: 'Real-time motion tracking turret system running custom hardware and object tracking algorithms at 36 FPS.',
          highlights: [
            'Programmed motion tracking turret system integrating custom hardware and CV algorithms.',
            'Implemented object tracking using Keras and OpenCV operating at 36 FPS.',
            'Calibrated hardware response loops for rapid target acquisition.'
          ],
          metrics: [
            { val: '36 FPS', lbl: 'Tracking Speed' },
            { val: 'Keras/OpenCV', lbl: 'CV Stack' },
            { val: 'Real-Time', lbl: 'Hardware Control' }
          ]
        },
        {
          id: 5,
          title: 'ALMP — Adaptive Latent Manifold Projection',
          subtitle: 'EXPLAINABLE AI & DEEP LEARNING ARCHITECTURAL TRANSPARENCY',
          category: 'Research & AI',
          isFeatured: true,
          date: 'Jul 2026',
          image: '/images/almp_visualization.png',
          tags: ['Deep Learning', 'PyTorch', 'Latent Space', 'Explainable AI', 'CNNs', 'Medical Vision'],
          shortDesc: 'As Deep Learning (DL) models and Convolutional Neural Networks (CNNs) scale in complexity, their internal decision-making processes have become increasingly opaque. This "black box" phenomenon poses a critical bottleneck, particularly in high-stakes domains such as medical image analysis (e.g., Alzheimer\'s classification, brain tumor localization), where architectural transparency is as vital as predictive accuracy.',
          highlights: [
            'Developed Adaptive Latent Manifold Projection (ALMP) to map CNN internal feature representations.',
            'Created high-dimensional latent space visualizer for transparent decision auditing in medical AI.',
            'Eliminated black-box opacity in deep neural network decision boundaries.'
          ],
          metrics: [
            { val: 'Explainable AI', lbl: 'Core Focus' },
            { val: 'PyTorch', lbl: 'Framework' },
            { val: 'Manifold', lbl: 'Topology' }
          ]
        },
        {
          id: 6,
          title: 'Aura XI',
          subtitle: 'NEXT-GEN FOOTBALL MANAGER EXPERIENCE',
          category: 'Web Applications',
          isFeatured: true,
          date: '2026',
          image: '/images/aura_xi_game.png',
          tags: ['React.js', 'Web Applications', 'Game Engine', 'Full Stack', 'Tailwind CSS'],
          shortDesc: 'Welcome to the Next-Gen Football Manager Experience! Tired of classic, tedious, and sluggish football management games? Aura XI offers a fast-paced, competitive experience packed with "Aura." Build your dream team, open rare player packs, define your strategy, and dominate the pitch!',
          highlights: [
            'Designed and built a fast-paced, competitive next-gen football management web application.',
            'Integrated dynamic player card pack drafting, tactical formation builders, and match simulation engines.',
            'Engineered responsive high-performance UI/UX with React.js and custom state management.'
          ],
          metrics: [
            { val: '1248+', lbl: 'Real Players Pool' },
            { val: 'Next-Gen', lbl: 'Game Engine' },
            { val: 'React.js', lbl: 'Tech Stack' }
          ]
        }
      ]
    },
    certificates: {
      tag: '// ACCREDITATION & CONTINUOUS LEARNING',
      title: 'Certificates & Professional Licenses',
      subtitle: 'Licenses and certifications I\'ve earned across AI, deep learning, cloud engineering, and modern web development — a record of continuous learning alongside my engineering work.',
      items: [
        {
          title: 'Claude on Google Cloud',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'im57i93ibtqf',
          skills: ['MCP', 'Retrieval-Augmented Generation (RAG)']
        },
        {
          title: 'Model Context Protocol: Advanced Topics',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: '4yx5b2danvuq',
          skills: ['Prompt Engineering', 'MCP']
        },
        {
          title: 'Claude in Amazon Bedrock',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 't395no7bysq2',
          skills: ['Amazon Web Services (AWS)', 'Amazon Bedrock']
        },
        {
          title: 'Claude Code in Action',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'mrgedzg5ywig',
          skills: ['Claude Code', 'MCP']
        },
        {
          title: 'Introduction to Model Context Protocol',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: '8ka56nbgskgo',
          skills: ['MCP', 'Retrieval-Augmented Generation (RAG)']
        },
        {
          title: 'Teaching the AI Fluency Framework',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: '8ohvxf36a487',
          skills: ['AI Fluency', 'Claude Code']
        },
        {
          title: 'Introduction to Agent Skills',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'o4ih9wxvssux',
          skills: ['AI Agents', 'Claude Agent SDK']
        },
        {
          title: 'Claude 101',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'zqxhaho6kshz',
          skills: ['MCP']
        },
        {
          title: 'Building with the Claude API',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'xorjx4239em4',
          skills: ['Web Services API', 'WebSocket']
        },
        {
          title: 'AI Fluency Framework & Foundations',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'df9cx7nac4pu',
          skills: ['Claude Code', 'Claude Agent SDK']
        },
        {
          title: 'AI Fluency for Students',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: '4euq79cg9hv5',
          skills: ['AI Fluency']
        },
        {
          title: 'AI Fluency for Nonprofits',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'igygtqeuem3u',
          skills: ['AI Fluency', 'Prompt Flow']
        },
        {
          title: 'AI Fluency for Educators',
          issuer: 'Anthropic',
          date: 'Jul 2026',
          credentialId: 'ocybbotgdsnv',
          skills: ['AI Fluency']
        },
        {
          title: 'A Deep Understanding of Deep Learning (with Python Intro)',
          issuer: 'Udemy',
          date: 'Nov 2025',
          credentialId: 'UC-37ac1b67-9988-439f-975a-a424acdac4d2',
          skills: ['PyTorch', 'Python']
        },
        {
          title: 'The Ultimate React Course 2025: React, Next.js, Redux & More',
          issuer: 'Udemy',
          date: 'Oct 2025',
          credentialId: 'UC-52fe3c90-6392-4bed-94d8-b0ce46b30b81',
          skills: ['React.js', 'Redux']
        },
        {
          title: 'Launch Your First Full-Stack App on AWS',
          issuer: 'Amazon Web Services (AWS)',
          date: 'Mar 2026',
          credentialId: 'AWS-FS-2026',
          skills: ['JavaScript', 'Python']
        },
        {
          title: 'Build and Ship Cloud-Native Python Apps',
          issuer: 'Amazon Web Services (AWS)',
          date: 'Mar 2026',
          credentialId: 'AWS-CN-2026',
          skills: ['Docker', 'Python']
        }
      ]
    },
    skills: {
      tag: '// COMPETENCIES & TOOLSET',
      title: 'Technical Capabilities Matrix',
      subtitle: 'Comprehensive matrix of AI frameworks, languages, cloud services, and hardware platforms.',
      categories: [
        {
          title: 'Machine Learning & Computer Vision',
          items: ['PyTorch', 'YOLOv11', 'OpenCV', 'ResNet', 'MobileNet', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy']
        },
        {
          title: 'Programming Diction',
          items: ['Python', 'C++', 'JavaScript', 'HTML5/CSS3', 'SQL']
        },
        {
          title: 'Cloud & Infrastructure',
          items: ['Oracle Cloud Infrastructure', 'Docker', 'Linux', 'GitHub Actions', 'CI/CD Pipelines']
        },
        {
          title: 'Web & API Engineering',
          items: ['FastAPI', 'REST APIs', 'React.js', 'Tailwind CSS', 'WebSockets']
        },
        {
          title: 'Embedded Hardware & Tools',
          items: ['ESP32-S3', 'Arduino', 'MATLAB', 'Git', 'Google Colab']
        }
      ]
    },
    contact: {
      tag: '// INITIATE INQUIRY',
      title: 'Get In Touch',
      subtitle: 'Open for Machine Learning Engineer roles, Computer Vision projects, and research collaborations.',
      cardTitle: 'Direct Channels',
      intro: 'Reach out directly for technical inquiries, research papers, or engineering roles.',
      btnViewCV: '📄 View / Print Full Resume',
      formTitle: 'Send Direct Message',
      btnSend: 'SEND MESSAGE →',
      sending: 'SENDING MESSAGE...',
      successTitle: 'MESSAGE RECEIVED',
      successMsg: 'Thank you for your message. İzzet Can Sorna will get back to you promptly.',
      btnSendAnother: 'Send Another Message',
      errRequired: 'Please complete all required fields.',
      nameLabel: 'Your Name *',
      namePlace: 'e.g. Dr. Alex Mercer',
      emailLabel: 'Email Address *',
      emailPlace: 'alex@institution.com',
      subjLabel: 'Category',
      subjML: 'Machine Learning Engineering Role',
      subjCV: 'Computer Vision / Medical AI Project',
      subjRobot: 'Autonomous Robotics (Metsuke)',
      subjGen: 'General Collaboration',
      msgLabel: 'Message *',
      msgPlace: 'Describe your opportunity or technical inquiry...',
    },
    footer: {
      sub: 'Machine Learning & Computer Vision Engineer',
      copy: '© 2026 İZZET CAN SORNA // OBSCURA SPEC V1.0',
      deployed: 'DEPLOYED ON NETLIFY',
    }
  },
  TR: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experience: 'Deneyim',
      projects: 'Projeler',
      certificates: 'Sertifikalar',
      skills: 'Yetenekler',
      contact: 'İletişim',
      resume: 'Özgeçmiş',
      viewCV: 'CV İncele',
    },
    hero: {
      badge: 'GİZLİ VEKTÖR ALANI // OBSCURA MASTER SPEC V1.0',
      tagline: 'MAKİNE ÖĞRENMESİ MÜHENDİSİ & BİLGİSAYARLI GÖRÜ ARAŞTIRMACISI',
      titleLine1: 'Üretim Seviyesi',
      titleLine2: 'Yapay Zeka',
      titleLine3: 'Bilgisayarlı Görü',
      titleLine4: '& Robotik',
      lead: 'PyTorch, YOLOv11 ve C++ kullanarak yüksek boyutlu sinir ağı temsil alanlarını, medikal görüntüleme araştırmalarını ve gömülü donanımları üretim seviyesi yapay zeka sistemlerine dönüştürme.',
      btnCV: 'Özgeçmiş İndir (PDF)',
      btnProjects: 'Projeleri İncele',
      btnLab: 'Sertifikaları İncele',
      metrics: [
        { val: '20+', lbl: 'Yapay Zeka & Mühendislik Projesi' },
        { val: '4+', lbl: 'Endüstriyel Mühendislik Rolü' },
        { val: '17', lbl: 'Mesleki Sertifika' },
        { val: '%98', lbl: 'Teşhis Hassasiyeti' }
      ]
    },
    about: {
      tag: '// BİYOGRAFİ VE ARAŞTIRMA FELSEFESİ',
      title: 'Teoriyi Üretim Sistemlerine Dönüştürme',
      subtitle: 'Sinir ağı topolojisindeki matematiksel titizliği gerçek dünya mekatronik mühendisliği ile birleştirme.',
      portraitCard: {
        name: 'İzzet Can Sorna',
        role: 'Makine Öğrenmesi Mühendisi',
        focus: 'Bilgisayarlı Görü & Medikal Yapay Zeka',
        location: 'İstanbul, Türkiye',
        languages: 'İngilizce (Yetkin) · Türkçe (Ana Dili)',
        availability: 'AI Mühendisliği Rollerine Açık'
      },
      storyTitle: 'Mühendislik Kimliği',
      bio1: 'Marmara Üniversitesi Mekatronik Mühendisliği (GANO: 3.10) mezuniyetiyle, derin öğrenme araştırmaları, medikal bilgisayarlı görü ve otonom robotik arasında köprü kuran üretim seviyesinde AI sistemleri inşa ediyorum.',
      bio2: 'Çalışmalarım ölçeklenebilir derin öğrenme boru hatları, gerçek zamanlı nesne tespiti modelleri (YOLOv11), milimetre altı cerrahi metrik hesabı ve ESP32-S3 donanımında düşük gecikmeli gömülü yazılımlara odaklanmaktadır.',
      missionTitle: 'MİSYON BİLDİRİMİ',
      missionText: 'Karmaşık araştırmaları gerçek dünyadaki sorunları çözebilecek güvenilir ürünlere dönüştüren zeki sistemler inşa etmek.',
      quoteTitle: 'MÜHENDİSLİK FELSEFESİ',
      quoteText: '"Karmaşıklığa karşı hassasiyet. Uygulamadan önce araştırma. Estetikten önce performans. Popülerliğe karşı mühendislik."',
      focusTitle: 'TEMEL TEKNİK ODAK',
      eduTitle: 'AKADEMİK GEÇMİŞ',
      marmaraSchool: 'Marmara Üniversitesi',
      marmaraDegree: 'Lisans, Mekatronik Mühendisliği Bölümü (GANO: 3.10 / 4.00)',
      marmaraDates: 'Eyl 2020 – Tem 2025',
      highSchool: 'Nişantaşı Nuri Akın Anadolu Lisesi',
      highSchoolDegree: 'Lise Diploması',
      highSchoolDates: 'Mezuniyet Haz 2020',
      pillars: [
        {
          title: 'Araştırma',
          desc: 'Matematiksel titizlik ve ampirik kanıtlarla desteklenen çözümler geliştirme.'
        },
        {
          title: 'Mühendislik',
          desc: 'Geçici prototipler yerine güvenilir üretim seviyesinde sistemler inşa etme.'
        },
        {
          title: 'İnovasyon',
          desc: 'En son AI mimarilerinden pratik gerçek dünya uygulamaları yaratma.'
        },
        {
          title: 'Dağıtım',
          desc: 'Eğitilmiş model ağırlıklarını Dockerize edilmiş REST API’lere ve kenar cihazlara taşıma.'
        }
      ]
    },
    experience: {
      tag: '// KRONOLOJİK GEÇMİŞ',
      title: 'Profesyonel Mühendislik Evrimi',
      subtitle: 'Ağ altyapısından üretim seviyesi yapay zeka boru hatlarına uzanan teknik gelişim.',
      roles: [
        {
          company: 'FlyRank AI',
          role: 'Makine Öğrenmesi Mühendisi Stajyeri',
          period: 'Haz 2026 – Halen',
          location: 'Uzaktan',
          theme: 'Üretim AI & Optimizasyon',
          badgeColor: 'gold',
          summary: 'Üretim veri işleme boru hatları ve canlı ortam değerlendirmeleri geliştirdi.',
          bullets: [
            'Veri hazırlama süresini %35 azaltan makine öğrenmesi modelleri ve veri boru hatları geliştirdi.',
            'Hiperparametre ayarlama ve çapraz doğrulama ile 10+ veri kümesinde model eğitimini hızlandırdı.',
            'Üretim öncesinde kenar durumlarını güvenle yönetmek için canlı ortamda modelleri değerlendirdi.'
          ],
          metrics: [
            { val: '-%35', lbl: 'Hazırlık Süresi Düşüşü' },
            { val: '10+', lbl: 'Optimize Veri Kümesi' }
          ],
          stack: ['PyTorch', 'Python', 'FastAPI', 'Docker', 'Oracle Cloud', 'Git']
        },
        {
          company: 'Bluesense',
          role: 'Yapay Zeka Mühendisi Stajyeri',
          period: 'Ara 2025 – Halen',
          location: 'Boston, MA (Uzaktan)',
          theme: 'Medikal AI & Bilgisayarlı Görü',
          badgeColor: 'crimson',
          summary: 'Deri teşhisi için bilgisayarlı görü çözümleri geliştirdi.',
          bullets: [
            '3.5K+ etiketli veri kümesi üzerinde ResNet, MobileNet ve YOLOv11 ile bilgisayarlı görü modelleri kurdu.',
            'Google Colab üzerinde transfer learning ile %98 hassasiyet ve %97.03 duyarlılık elde etti.'
          ],
          metrics: [
            { val: '%98', lbl: 'Hassasiyet' },
            { val: '%97.03', lbl: 'Duyarlılık' }
          ],
          stack: ['YOLOv11', 'ResNet', 'MobileNet', 'OpenCV', 'Google Colab', 'Python']
        },
        {
          company: 'INNOEM',
          role: 'Frontend Geliştirici Stajyeri',
          period: 'Ağu 2024 – Oca 2025',
          location: 'İstanbul, Türkiye',
          theme: 'UI Sistemleri & Web Performansı',
          badgeColor: 'gold',
          summary: 'Yüksek performanslı web arayüzleri ve UI bileşenleri tasarladı.',
          bullets: [
            'React.js ve Tailwind CSS kullanarak sayfa yükleme hızını %30 artıran web arayüzleri geliştirdi.',
            'Ön yüz mimarisini optimize etmek için 7 kişilik ekiple çalıştı.'
          ],
          metrics: [
            { val: '+%30', lbl: 'Yükleme Hızı' },
            { val: '7 Üye', lbl: 'Disiplinler Arası Ekip' }
          ],
          stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git']
        },
        {
          company: 'Albil Merkezi Hizmetler',
          role: 'BİT Ağ Mühendisi Stajyeri',
          period: 'Tem 2024 – Ağu 2024',
          location: 'İstanbul, Türkiye',
          theme: 'Ağ Altyapısı & Güvenlik',
          badgeColor: 'blue',
          summary: 'Kurumsal BT altyapısını kesintisiz erişim için yönetti.',
          bullets: [
            'Günlük 5.500+ dahili sorgu için kesintisiz bilgi sistemleri erişimi sağladı.',
            'Sistem anormalliklerini teşhis etti ve verimli depolama protokolleri sundu.'
          ],
          metrics: [
            { val: '5.500+', lbl: 'Günlük Sorgu' },
            { val: '%0', lbl: 'Kesinti' }
          ],
          stack: ['Ağ Altyapısı', 'Linux', 'SQL', 'Sistem Güvenliği']
        },
        {
          company: 'Turkish Technic',
          role: 'Uçak Bakım Mühendisi Stajyeri',
          period: 'Ağu 2023 – Eyl 2023',
          location: 'İstanbul, Türkiye',
          theme: 'Endüstriyel Mühendislik & Donanım',
          badgeColor: 'steel',
          summary: 'Atatürk Havalimanı hangarında ticari uçakların mekanik bakımlarını gerçekleştirdi.',
          bullets: [
            'Havacılık güvenlik standartlarına bağlı kalarak karmaşık uçak sistemlerinin bakımını yaptı.',
            'Donanım arızalarında kök neden analizine katıldı.'
          ],
          metrics: [
            { val: 'Hangar', lbl: 'Atatürk Havalimanı' },
            { val: '%100', lbl: 'Güvenlik Standartı' }
          ],
          stack: ['Mekanik Sistemler', 'Kök Neden Analizi', 'Havacılık Donanımı', 'MATLAB']
        }
      ]
    },
    projects: {
      tag: '// ÖNE ÇIKAN ÜRÜNLER VE ARAŞTIRMALAR',
      title: 'İnteraktif Proje Galerisi',
      subtitle: 'Üretim AI sistemleri, araştırma makaleleri, dört bacaklı robotik ve bilgisayarlı görü yazılımları.',
      btnBreakdown: 'Teknik Detaylar →',
      btnDiscuss: 'Mimarini Tartışın',
      btnClose: 'Projeyi Kapat',
      categories: ['Tümü', 'Medikal AI', 'Robotik', 'Bilgisayarlı Görü', 'Araştırma & AI', 'Web Uygulamaları'],
      items: [
        {
          id: 1,
          title: 'Real-Time Multi-Class Brain Tumor Localization in MRI Using YOLOv11 for Early Intervention',
          subtitle: 'AI-ASSISTED BRAIN RMI IMAGING & YOLOV11 MODEL QUANTIFICATION',
          category: 'Medikal AI',
          isFeatured: true,
          date: 'Tem 2026',
          image: '/images/brain_mri_paper.png',
          tags: ['YOLOv11', 'PyTorch', 'Medikal Görü', 'Beyin RMI', 'Araştırma Makalesi'],
          shortDesc: 'Multimedia Tools and Applications dergisine sunulan makale (İncelemede). Beyin RMI veri kümesinde %97.04 mAP skoru.',
          highlights: [
            'Multimedia Tools and Applications dergisine sunulan makaleye liderlik etti (İncelemede).',
            'Beyin RMI veri kümesinde YOLOv11 modelini eğiterek %97.04 mAP skoru elde etti.',
            'Hızlı teşhis için veri ön işleme boru hattını optimize etti.'
          ],
          metrics: [
            { val: '%97.04', lbl: 'mAP Skoru' },
            { val: 'YOLOv11', lbl: 'Model Mimarisi' },
            { val: 'İncelemede', lbl: 'Dergide İnceleme' }
          ]
        },
        {
          id: 2,
          title: 'Metsuke — Otonom Dört Bacaklı Robot Asistanı',
          subtitle: 'ESP32-S3 Gerçek Zamanlı C/C++ Servo Kinematiği ve Hareket Planlama',
          category: 'Robotik',
          isFeatured: true,
          date: 'Mar 2026',
          image: '/images/metsuke.jpg',
          tags: ['ESP32-S3', 'C/C++', 'Kinematik', 'WebSockets', 'Engel Kaçınma'],
          shortDesc: 'ESP32-S3 mikrodenetleyici üzerinde 15ms sensör yanıt süresine sahip otonom dört bacaklı robot.',
          highlights: [
            'ESP32-S3 ve C/C++ kullanarak otonom dört bacaklı robot tasarladı.',
            'Servo kinematiği ve WebSockets entegre ederek 15ms gecikme elde etti.',
            'Engebeli araziler için dinamik engel kaçınma sistemi geliştirdi.'
          ],
          metrics: [
            { val: '15ms', lbl: 'Veri Gecikmesi' },
            { val: 'ESP32-S3', lbl: 'Mikrodenetleyici' },
            { val: 'C / C++', lbl: 'Çekirdek Sistem' }
          ]
        },
        {
          id: 3,
          title: 'Artificial Intelligence in Droopy Lower Eyelid Malposition',
          subtitle: 'REAL-TIME DIAGNOSTIC TOOL CALCULATING MRD2 SURGICAL METRICS',
          category: 'Medikal AI',
          isFeatured: true,
          date: 'Oca 2026',
          image: '/images/eyelid_report.png',
          tags: ['YOLOv11', 'OpenCV', 'Python', 'MRD2 Metriği', 'Klinik Görü'],
          shortDesc: 'YOLOv11 ve OpenCV ile MRD2 gibi cerrahi metrikleri dinamik hesaplayan uçtan uca teşhis aracı.',
          highlights: [
            'Alt göz kapağı konumunu nicelleyen teşhis aracı geliştirdi.',
            '3K+ klinik veri kümesinde %98 hassasiyet ve milimetre altı doğruluk elde etti.',
            'Çıkarım süresini kare başına 20ms’ye düşürerek klinikte kullanıma uygun hale getirdi.'
          ],
          metrics: [
            { val: '%98', lbl: 'Hassasiyet (mAP@50)' },
            { val: '20ms', lbl: 'Çıkarım Süresi' },
            { val: '3K+', lbl: 'Klinik Veri' }
          ]
        },
        {
          id: 4,
          title: 'Real-Time Motion Tracking Turret',
          subtitle: 'COMPUTER VISION SERVO CONTROL & TARGET TRACKING AT 36 FPS',
          category: 'Bilgisayarlı Görü',
          isFeatured: true,
          date: 'Ağu 2025',
          image: '/images/motion_turret.png',
          tags: ['Keras', 'OpenCV', 'Python', 'Nesne Takibi', 'Servo Donanım'],
          shortDesc: '36 FPS hızında özel donanım ve nesne takip algoritmaları çalıştıran hareket takip tareti.',
          highlights: [
            'Özel donanım ve bilgisayarlı görü algoritmalarını entegre etti.',
            'Python’da Keras ve OpenCV ile 36 FPS hızında nesne takibi sağladı.',
            'Hızlı hedef tespiti için donanım döngülerini kalibre etti.'
          ],
          metrics: [
            { val: '36 FPS', lbl: 'Takip Hızı' },
            { val: 'Keras/OpenCV', lbl: 'Görü Teknolojisi' },
            { val: 'Gerçek Zamanlı', lbl: 'Donanım Kontrolü' }
          ]
        },
        {
          id: 5,
          title: 'ALMP — Adaptive Latent Manifold Projection',
          subtitle: 'EXPLAINABLE AI & DEEP LEARNING ARCHITECTURAL TRANSPARENCY',
          category: 'Araştırma & AI',
          isFeatured: true,
          date: 'Tem 2026',
          image: '/images/almp_visualization.png',
          tags: ['Deep Learning', 'PyTorch', 'Latent Space', 'Explainable AI', 'CNNs', 'Medical Vision'],
          shortDesc: 'Derin Öğrenme (DL) modelleri ve Evrişimli Sinir Ağları (CNN) karmaşıklığı arttıkça, iç karar verme süreçleri giderek daha kapalı hale gelmiştir. Bu "kara kutu" fenomeni, mimari şeffaflığın tahmin doğruluğu kadar hayati olduğu medikal görüntü analizi gibi alanlarda kritik bir engel oluşturmaktadır.',
          highlights: [
            'CNN iç karar yapılarını haritalamak için Adaptive Latent Manifold Projection (ALMP) geliştirildi.',
            'Medikal AI karar süreçlerini incelemek için yüksek boyutlu gizli alan görselleştiricisi oluşturuldu.',
            'Derin sinir ağlarındaki kara kutu kapalılığı ortadan kaldırıldı.'
          ],
          metrics: [
            { val: 'Açıklanabilir AI', lbl: 'Temel Odak' },
            { val: 'PyTorch', lbl: 'Framework' },
            { val: 'Manifold', lbl: 'Topoloji' }
          ]
        },
        {
          id: 6,
          title: 'Aura XI',
          subtitle: 'NEXT-GEN FOOTBALL MANAGER EXPERIENCE',
          category: 'Web Uygulamaları',
          isFeatured: true,
          date: '2026',
          image: '/images/aura_xi_game.png',
          tags: ['React.js', 'Web Applications', 'Game Engine', 'Full Stack', 'Tailwind CSS'],
          shortDesc: 'Yeni Nesil Futbol Menajerliği Deneyimi! Klasik, sıkıcı ve yavaş futbol menajerlik oyunlarından sıkıldınız mı? Aura XI, yüksek tempolu, rekabetçi ve "Aura" dolu bir deneyim sunuyor. Hayalinizdeki takımı kurun, nadir oyuncu paketleri açın ve sahaya hükmedin!',
          highlights: [
            'Hızlı tempolu, rekabetçi yeni nesil futbol menajerlik web uygulaması tasarlandı.',
            'Dinamik oyuncu kartı paket açılımı, taktik formasyon kurucu ve maç simülatörü entegre edildi.',
            'React.js ile yüksek performanslı UI/UX geliştirildi.'
          ],
          metrics: [
            { val: '1248+', lbl: 'Oyuncu Havuzu' },
            { val: 'Yeni Nesil', lbl: 'Oyun Motoru' },
            { val: 'React.js', lbl: 'Teknolojiler' }
          ]
        }
      ]
    },
    certificates: {
      tag: '// AKREDİTASYON VE SÜREKLİ ÖĞRENME',
      title: 'Sertifikalar ve Mesleki Yetki Belgeleri',
      subtitle: 'Yapay zeka, derin öğrenme, bulut mühendisliği ve modern web geliştirme alanlarında kazandığım sertifikalar — mühendislik çalışmalarımla birlikte sürekli öğrenme kaydım.',
      items: [
        {
          title: 'Claude on Google Cloud',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'im57i93ibtqf',
          skills: ['MCP', 'Retrieval-Augmented Generation (RAG)']
        },
        {
          title: 'Model Context Protocol: Advanced Topics',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: '4yx5b2danvuq',
          skills: ['Prompt Engineering', 'MCP']
        },
        {
          title: 'Claude in Amazon Bedrock',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 't395no7bysq2',
          skills: ['Amazon Web Services (AWS)', 'Amazon Bedrock']
        },
        {
          title: 'Claude Code in Action',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'mrgedzg5ywig',
          skills: ['Claude Code', 'MCP']
        },
        {
          title: 'Introduction to Model Context Protocol',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: '8ka56nbgskgo',
          skills: ['MCP', 'Retrieval-Augmented Generation (RAG)']
        },
        {
          title: 'Teaching the AI Fluency Framework',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: '8ohvxf36a487',
          skills: ['AI Fluency', 'Claude Code']
        },
        {
          title: 'Introduction to Agent Skills',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'o4ih9wxvssux',
          skills: ['AI Agents', 'Claude Agent SDK']
        },
        {
          title: 'Claude 101',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'zqxhaho6kshz',
          skills: ['MCP']
        },
        {
          title: 'Building with the Claude API',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'xorjx4239em4',
          skills: ['Web Services API', 'WebSocket']
        },
        {
          title: 'AI Fluency Framework & Foundations',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'df9cx7nac4pu',
          skills: ['Claude Code', 'Claude Agent SDK']
        },
        {
          title: 'AI Fluency for Students',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: '4euq79cg9hv5',
          skills: ['AI Fluency']
        },
        {
          title: 'AI Fluency for Nonprofits',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'igygtqeuem3u',
          skills: ['AI Fluency', 'Prompt Flow']
        },
        {
          title: 'AI Fluency for Educators',
          issuer: 'Anthropic',
          date: 'Tem 2026',
          credentialId: 'ocybbotgdsnv',
          skills: ['AI Fluency']
        },
        {
          title: 'A Deep Understanding of Deep Learning (with Python Intro)',
          issuer: 'Udemy',
          date: 'Kas 2025',
          credentialId: 'UC-37ac1b67-9988-439f-975a-a424acdac4d2',
          skills: ['PyTorch', 'Python']
        },
        {
          title: 'The Ultimate React Course 2025: React, Next.js, Redux & More',
          issuer: 'Udemy',
          date: 'Ekim 2025',
          credentialId: 'UC-52fe3c90-6392-4bed-94d8-b0ce46b30b81',
          skills: ['React.js', 'Redux']
        },
        {
          title: 'Launch Your First Full-Stack App on AWS',
          issuer: 'Amazon Web Services (AWS)',
          date: 'Mar 2026',
          credentialId: 'AWS-FS-2026',
          skills: ['JavaScript', 'Python']
        },
        {
          title: 'Build and Ship Cloud-Native Python Apps',
          issuer: 'Amazon Web Services (AWS)',
          date: 'Mar 2026',
          credentialId: 'AWS-CN-2026',
          skills: ['Docker', 'Python']
        }
      ]
    },
    skills: {
      tag: '// YETKİNLİKLER VE ARAÇLAR',
      title: 'Teknik Beceriler Matriksi',
      subtitle: 'Yapay zeka kütüphaneleri, programlama dilleri, bulut servisleri ve donanım platformları.',
      categories: [
        {
          title: 'Makine Öğrenmesi & Bilgisayarlı Görü',
          items: ['PyTorch', 'YOLOv11', 'OpenCV', 'ResNet', 'MobileNet', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy']
        },
        {
          title: 'Programlama Dilleri',
          items: ['Python', 'C++', 'JavaScript', 'HTML5/CSS3', 'SQL']
        },
        {
          title: 'Bulut & Altyapı',
          items: ['Oracle Cloud Infrastructure', 'Docker', 'Linux', 'GitHub Actions', 'CI/CD Pipelines']
        },
        {
          title: 'Web & API Mühendisliği',
          items: ['FastAPI', 'REST APIs', 'React.js', 'Tailwind CSS', 'WebSockets']
        },
        {
          title: 'Gömülü Donanım & Araçlar',
          items: ['ESP32-S3', 'Arduino', 'MATLAB', 'Git', 'Google Colab']
        }
      ]
    },
    contact: {
      tag: '// İLETİŞİME GEÇİN',
      title: 'Doğrudan İletişim',
      subtitle: 'Makine Öğrenmesi Mühendisliği rolleri, Bilgisayarlı Görü projeleri ve araştırmalar için açık.',
      cardTitle: 'Doğrudan Kanallar',
      intro: 'Teknik sorularınız veya mühendislik fırsatları için doğrudan bana ulaşın.',
      btnViewCV: '📄 Tam Özgeçmişi Görüntüle / Yazdır',
      formTitle: 'Doğrudan Mesaj Gönderin',
      btnSend: 'MESAJ GÖNDER →',
      sending: 'MESAJ GÖNDERİLİYOR...',
      successTitle: 'MESAJ ALINDI',
      successMsg: 'Mesajınız için teşekkürler. İzzet Can Sorna en kısa sürede size dönüş yapacaktır.',
      btnSendAnother: 'Başka Bir Mesaj Gönder',
      errRequired: 'Lütfen tüm zorunlu alanları doldurun.',
      nameLabel: 'Adınız Soyadınız *',
      namePlace: 'örn. Dr. Alex Mercer',
      emailLabel: 'E-Posta Adresiniz *',
      emailPlace: 'alex@kurum.com',
      subjLabel: 'Kategori',
      subjML: 'Makine Öğrenmesi Mühendisliği Rolü',
      subjCV: 'Bilgisayarlı Görü / Medikal AI Projesi',
      subjRobot: 'Otonom Robotik (Metsuke)',
      subjGen: 'Genel İş Birliği',
      msgLabel: 'Mesajınız *',
      msgPlace: 'Fırsat detaylarını veya teknik sorunuzu açıklayın...',
    },
    footer: {
      sub: 'Makine Öğrenmesi & Bilgisayarlı Görü Mühendisi',
      copy: '© 2026 İZZET CAN SORNA // OBSCURA SPEC V1.0',
      deployed: 'NETLIFY ÜZERİNDE YAYINDA',
    }
  }
};
