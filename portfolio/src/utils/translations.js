export const translations = {
  EN: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      aiLab: 'AI Diagnostics Lab',
      skills: 'Skills & Ed',
      contact: 'Contact',
      viewCV: 'View CV',
    },
    hero: {
      badge: 'MARMARA UNIVERSITY MECHATRONICS B.S. · COMPUTER VISION ENGINEER',
      titleLine1: 'Engineering',
      titleLine2: 'Computer Vision',
      titleLine3: 'Autonomous',
      titleLine4: 'Robotic Systems',
      lead: 'Hi, I’m İzzet Can Sorna — a Machine Learning Engineer specializing in deep learning pipelines, medical image quantification, and real-time autonomous systems using PyTorch, YOLOv11, and C++.',
      btnProjects: 'Explore Research & Projects',
      btnLab: 'Try Live Computer Vision Lab',
      btnCV: 'Full Resume',
      metrics: {
        brainMap: 'mAP Brain Medical Imaging',
        skinDiag: 'Precision / Recall Diagnostic',
        robotLatency: 'Metsuke Quadruped Latency',
        eyelidInference: 'Eyelid Inference / Frame',
      },
      telemetry: {
        active: 'YOLOV11_DIAGNOSTICS // ACTIVE',
        dataset: '3.5K+ Samples',
        precision: 'Precision: 98%',
        clinicalMetrics: 'Sub-Millimeter',
        frameRate: '36 FPS (3K+ Dataset)',
        latency: '20ms Real-Time',
        manuscript: 'Multimedia Tools & Apps',
      }
    },
    about: {
      tag: '// BIOGRAPHY & ACADEMIC BACKGROUND',
      title: 'Bridging Computer Vision & Mechatronics',
      subtitle: 'Translating complex research, clinical datasets, and embedded hardware into deployable high-performance AI systems.',
      cardTitle: 'Professional Profile',
      bio1: 'I am a Machine Learning Engineer specializing in Computer Vision and production-grade AI systems. My experience spans building AI-assisted medical imaging quantification solutions, autonomous quadruped robotics (Metsuke), and scalable deep learning pipelines with PyTorch and YOLOv11.',
      bio2: 'Graduating from Marmara University (Department of Mechatronics Engineering), I combine deep theoretical understanding of kinematics and control logic with cutting-edge deep learning techniques.',
      eduTitle: 'EDUCATION & ACADEMICS',
      marmaraSchool: 'Marmara University',
      marmaraDegree: 'B.S., Department of Mechatronics Engineering — GPA: 3.10 / 4.00',
      marmaraDates: 'Sep 2020 – Jul 2025',
      marmaraLocation: 'Istanbul, Turkey',
      highSchool: 'Nişantaşı Nuri Akın Anatolian High School',
      highSchoolDegree: 'High School Diploma',
      highSchoolDates: 'Jun 2020',
      highSchoolLocation: 'Istanbul, Turkey',
      pillar1Title: 'Computer Vision & Medical Imaging',
      pillar1Text: 'Developing state-of-the-art diagnostic models using PyTorch, YOLOv11, and OpenCV. Published brain imaging research (mAP 97.04%) and clinical lower eyelid metrics calculation (20ms/frame).',
      pillar2Title: 'Autonomous Robotics & Kinematics',
      pillar2Text: 'Architecting real-time autonomous systems like Metsuke Quadruped Robot utilizing ESP32-S3, C/C++, WebSockets (15ms latency), servo kinematics, and dynamic obstacle avoidance.',
      pillar3Title: 'Production ML & Full-Stack APIs',
      pillar3Text: 'Building scalable APIs and deployment pipelines using FastAPI, REST APIs, Docker, Oracle Cloud Infrastructure, and React.js to bring deep learning models to web applications.',
    },
    experience: {
      tag: '// CAREER & INDUSTRY MILESTONES',
      title: 'Professional Engineering Experience',
      subtitle: 'Hands-on work in machine learning research, computer vision optimization, frontend development, and network infrastructure.',
      roles: [
        {
          role: 'Machine Learning Engineer Intern',
          company: 'FlyRank AI',
          location: 'Remote',
          period: 'Jun 2026 – Present',
          badgeColor: 'gold',
          bullets: [
            'Engineered and evaluated machine learning models, applying core AI fluency principles to optimize data processing pipelines, reducing data preparation time by 35%.',
            'Accelerated model training processes across 10+ datasets by focusing on advanced feature engineering, hyperparameter tuning, and cross-validation techniques.',
            'Evaluated models in staging environments, formulating alternative technical solutions to ensure robust edge-case handling prior to production rollouts.'
          ]
        },
        {
          role: 'AI Engineer Intern',
          company: 'Bluesense | AI-Powered Software and Services',
          location: 'Boston, MA (Remote)',
          period: 'Dec 2025 – Present',
          badgeColor: 'crimson',
          bullets: [
            'Formulated computer vision solutions using ResNet, MobileNet, and YOLOv11 to precisely detect and classify skin concerns, trained on a 3.5K+ labeled dataset with an 80/20 validation split.',
            'Optimized high-performance deep learning models using transfer learning on Google Colab, achieving 98% precision and 97.03% recall in diagnostic accuracy across 100+ real-world user samples.'
          ]
        },
        {
          role: 'Frontend Developer Intern',
          company: 'INNOEM | Sustainability and Innovation Consultancy',
          location: 'Istanbul, Turkey',
          period: 'Aug 2024 – Jan 2025',
          badgeColor: 'gold',
          bullets: [
            'Architected responsive, user-friendly web interfaces utilizing React.js and Tailwind CSS, improving page load speed by 30%.',
            'Collaborated closely within a cross-functional team of 7 to enhance UI/UX and optimize front-end architecture.'
          ]
        },
        {
          role: 'ICT Network Engineer Intern',
          company: 'Albil Merkezi Hizmetler | Information Technologies',
          location: 'Istanbul, Turkey',
          period: 'Jul 2024 – Aug 2024',
          badgeColor: 'blue',
          bullets: [
            'Orchestrated the organization’s information systems, ensuring zero downtime and secure access for 5,500+ daily internal queries.',
            'Monitored network infrastructure and systematically diagnosed system anomalies by evaluating alternative technical root causes, deploying efficient data storage protocols.'
          ]
        },
        {
          role: 'Aircraft Maintenance Engineer Intern',
          company: 'Turkish Technic | Aircraft Maintenance Hangar',
          location: 'Istanbul, Turkey',
          period: 'Aug 2023 – Sep 2023',
          badgeColor: 'crimson',
          bullets: [
            'Executed detailed mechanical and technical maintenance on complex aircraft systems at Atatürk Airport’s main hangar.',
            'Assisted in root-cause analysis for hardware malfunctions, strictly adhering to international aviation safety standards.'
          ]
        }
      ]
    },
    projects: {
      tag: '// RESEARCH & ENGINEERING PROJECTS',
      title: 'Featured Computer Vision & Robotics Projects',
      subtitle: 'A showcase of manuscripts, autonomous robotics, and medical imaging applications from İzzet Can Sorna’s portfolio.',
      btnBreakdown: 'Read Technical Breakdown →',
      btnDiscuss: 'Discuss Engineering & Deployment',
      btnClose: 'Close Project',
      categories: ['All', 'Computer Vision', 'Autonomous Robotics', 'Medical AI'],
      items: [
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
      ]
    },
    diagnostics: {
      tag: '// INTERACTIVE COMPUTER VISION & ROBOTICS LAB',
      title: 'Live Diagnostic & Kinematics Simulator',
      subtitle: 'Test İzzet Can Sorna’s YOLOv11 medical vision models and Metsuke quadruped robot telemetry in real-time.',
      tabEyelid: '👁️ Eyelid Malposition AI (YOLOv11)',
      tabBrain: '🧠 Brain Medical RMI (mAP 97.04%)',
      tabRobot: '🤖 Metsuke Robot Telemetry (15ms)',
      ctrlHeader: 'MODEL INFERENCE CONTROLS',
      eyelidIntro: 'Quantifies lower eyelid position in real-time using YOLOv11 and OpenCV, calculating surgical metrics like MRD2.',
      brainIntro: 'AI-assisted brain medical imaging model trained on RMI datasets achieving 97.04% mAP score.',
      robotIntro: 'Real-time quadruped robot assistant running C/C++ embedded kinematics and WebSockets at 15ms latency.',
      btnRunEyelid: '🚀 Run Eyelid Diagnostic Inference',
      btnRunBrain: '🚀 Run Brain RMI Inference',
      running: '⚡ Running YOLOv11 Inference...',
      telemetryHeader: 'TELEMETRY & INFERENCE RESULTS',
      waiting: 'STATUS: WAITING_FOR_TRIGGER',
      waitingMsg: 'Click "Run Inference" on the left to execute model simulation.',
      processing: 'PROCESSING YOLOV11 PIPELINE...',
      btnObstacleSim: '⚡ Simulate Obstacle Detection',
      btnClearObstacle: '⚠️ Clear Obstacle',
    },
    skills: {
      tag: '// TECHNICAL SKILLS & TOOLSET',
      title: 'Engineering Capabilities & Technologies',
      subtitle: 'A comprehensive matrix of frameworks, cloud services, and programming languages mastered by İzzet Can Sorna.',
      languages: 'LANGUAGES:',
      langVal: 'English (Professional Working Proficiency) · Turkish (Native)',
      location: 'LOCATION:',
      locVal: 'Istanbul, Turkey (Available Remote Worldwide & Relocation)',
    },
    contact: {
      tag: '// INITIATE CONTACT & INQUIRIES',
      title: 'Get In Touch with İzzet Can Sorna',
      subtitle: 'Open for Machine Learning Engineer positions, Computer Vision projects, and technical collaborations.',
      cardTitle: 'Contact Information',
      intro: 'Feel free to reach out directly via email, phone, LinkedIn, or GitHub for technical inquiries or full-time roles.',
      formTitle: 'Send Direct Message',
      btnViewCV: '📄 View / Print Full CV',
      btnSend: 'SEND MESSAGE →',
      sending: 'SENDING MESSAGE...',
      successTitle: 'MESSAGE RECEIVED // SUCCESS',
      successMsg: 'Thank you for reaching out. İzzet Can Sorna will respond to your email promptly.',
      btnSendAnother: 'Send Another Message',
      errRequired: 'Please fill out all required fields.',
      nameLabel: 'Your Name *',
      namePlace: 'e.g. Dr. Alex Mercer',
      emailLabel: 'Your Email Address *',
      emailPlace: 'alex@institution.com',
      subjLabel: 'Inquiry Category',
      subjML: 'Machine Learning Engineering Role',
      subjCV: 'Computer Vision / Medical AI Project',
      subjRobot: 'Autonomous Robotics (Metsuke)',
      subjGen: 'General Collaboration',
      msgLabel: 'Your Message *',
      msgPlace: 'Describe your opportunity, project specifications, or inquiry...',
    },
    footer: {
      sub: 'Machine Learning & Computer Vision Engineer',
      copy: '© 2026 İZZET CAN SORNA // MARMARA UNIVERSITY',
      deployed: 'DEPLOYED ON NETLIFY',
    }
  },
  TR: {
    nav: {
      about: 'Hakkımda',
      experience: 'Deneyim',
      projects: 'Projeler',
      aiLab: 'Yapay Zeka Laboratuvarı',
      skills: 'Yetenekler',
      contact: 'İletişim',
      viewCV: 'CV İncele',
    },
    hero: {
      badge: 'MARMARA ÜNİVERSİTESİ MEKATRONİK MÜH. · BİLGİSAYARLI GÖRÜ MÜHENDİSİ',
      titleLine1: 'Bilgisayarlı Görü',
      titleLine2: '& Otonom Robotik',
      titleLine3: 'Sistemler',
      titleLine4: 'Mühendisliği',
      lead: 'Merhaba, ben İzzet Can Sorna — PyTorch, YOLOv11 ve C++ kullanarak derin öğrenme boru hatları, medikal görüntü nicelleştirme ve gerçek zamanlı otonom sistemlerde uzmanlaşmış Makine Öğrenmesi Mühendisiyim.',
      btnProjects: 'Araştırma & Projeleri İncele',
      btnLab: 'Canlı Bilgisayarlı Görü Laboratuvarı',
      btnCV: 'Tam Özgeçmiş (CV)',
      metrics: {
        brainMap: 'mAP Beyin Medikal Görüntüleme',
        skinDiag: 'Hassasiyet / Duyarlılık Teşhis',
        robotLatency: 'Metsuke Dört Bacaklı Robot Gecikmesi',
        eyelidInference: 'Göz Kapağı Çıkarım Süresi / Kare',
      },
      telemetry: {
        active: 'YOLOV11_TEŞHİS // AKTİF',
        dataset: '3.5K+ Veri Kümesi',
        precision: 'Hassasiyet: %98',
        clinicalMetrics: 'Milimetre Altı Hassasiyet',
        frameRate: '36 FPS (3K+ Veri Kümesi)',
        latency: '20ms Gerçek Zamanlı',
        manuscript: 'Multimedia Tools & Apps',
      }
    },
    about: {
      tag: '// BİYOGRAFİ VE AKADEMİK GEÇMİŞ',
      title: 'Bilgisayarlı Görü ve Mekatronik Birleşimi',
      subtitle: 'Karmaşık araştırmaları, klinik veri kümelerini ve gömülü donanımları dağıtılabilir yüksek performanslı yapay zeka sistemlerine dönüştürme.',
      cardTitle: 'Profesyonel Profil',
      bio1: 'Bilgisayarlı Görü ve üretim seviyesindeki yapay zeka sistemlerinde uzmanlaşmış bir Makine Öğrenmesi Mühendisiyim. Deneyimim yapay zeka destekli medikal görüntüleme nicelleştirme çözümleri, otonom dört bacaklı robotik (Metsuke) ve PyTorch & YOLOv11 ile ölçeklenebilir derin öğrenme boru hatlarını kapsamaktadır.',
      bio2: 'Marmara Üniversitesi Mekatronik Mühendisliği bölümünden mezun olarak, kinematik ve kontrol mantığındaki derin teorik anlayışı en son derin öğrenme teknikleriyle birleştiriyorum.',
      eduTitle: 'EĞİTİM VE AKADEMİK GEÇMİŞ',
      marmaraSchool: 'Marmara Üniversitesi',
      marmaraDegree: 'Lisans, Mekatronik Mühendisliği Bölümü — GANO: 3.10 / 4.00',
      marmaraDates: 'Eyl 2020 – Tem 2025',
      marmaraLocation: 'İstanbul, Türkiye',
      highSchool: 'Nişantaşı Nuri Akın Anadolu Lisesi',
      highSchoolDegree: 'Lise Diploması',
      highSchoolDates: 'Haz 2020',
      highSchoolLocation: 'İstanbul, Türkiye',
      pillar1Title: 'Bilgisayarlı Görü ve Medikal Görüntüleme',
      pillar1Text: 'PyTorch, YOLOv11 ve OpenCV kullanarak en son teknoloji teşhis modelleri geliştirme. Yayınlanmış beyin görüntüleme araştırması (mAP %97.04) ve klinik alt göz kapağı metrikleri hesabı (20ms/kare).',
      pillar2Title: 'Otonom Robotik ve Kinematik',
      pillar2Text: 'ESP32-S3, C/C++, WebSockets (15ms gecikme), servo kinematiği ve dinamik engel kaçınma kullanan Metsuke Dört Bacaklı Robot gibi gerçek zamanlı otonom sistemlerin mimarisi.',
      pillar3Title: 'Üretim Seviyesi ML ve Full-Stack API’ler',
      pillar3Text: 'Derin öğrenme modellerini web uygulamalarına taşımak için FastAPI, REST API’ler, Docker, Oracle Cloud Infrastructure ve React.js kullanarak ölçeklenebilir API’ler ve dağıtım boru hatları kurma.',
    },
    experience: {
      tag: '// KARİYER VE ENDÜSTRİ DENEYİMLERİ',
      title: 'Profesyonel Mühendislik Deneyimi',
      subtitle: 'Makine öğrenmesi araştırması, bilgisayarlı görü optimizasyonu, frontend geliştirme ve ağ altyapısında pratik saha çalışmaları.',
      roles: [
        {
          role: 'Makine Öğrenmesi Mühendisi Stajyeri',
          company: 'FlyRank AI',
          location: 'Uzaktan (Remote)',
          period: 'Haz 2026 – Halen',
          badgeColor: 'gold',
          bullets: [
            'Veri işleme boru hatlarını optimize etmek için temel AI ilkelerini uygulayarak makine öğrenmesi modellerini tasarladı ve değerlendirdi, veri hazırlama süresini %35 azalttı.',
            'İleri özellik mühendisliği, hiperparametre ayarlama ve çapraz doğrulama tekniklerine odaklanarak 10+ veri kümesinde model eğitim süreçlerini hızlandırdı.',
            'Üretim öncesinde kenar durumlarını (edge-case) güvenle ele almak için alternatif teknik çözümler geliştirerek modelleri canlı ortamda değerlendirdi.'
          ]
        },
        {
          role: 'Yapay Zeka Mühendisi Stajyeri',
          company: 'Bluesense | AI-Powered Software and Services',
          location: 'Boston, MA (Uzaktan)',
          period: 'Ara 2025 – Halen',
          badgeColor: 'crimson',
          bullets: [
            'Deri problemlerini hassas bir şekilde tespit etmek ve sınıflandırmak için ResNet, MobileNet ve YOLOv11 kullanarak 3.5K+ etiketli veri kümesi (80/20 doğrulama) üzerinde bilgisayarlı görü çözümleri geliştirdi.',
            'Google Colab üzerinde transfer learning ile derin öğrenme modellerini optimize etti; 100+ gerçek kullanıcı örneğinde %98 hassasiyet ve %97.03 duyarlılık elde etti.'
          ]
        },
        {
          role: 'Frontend Geliştirici Stajyeri',
          company: 'INNOEM | Sustainability and Innovation Consultancy',
          location: 'İstanbul, Türkiye',
          period: 'Ağu 2024 – Oca 2025',
          badgeColor: 'gold',
          bullets: [
            'React.js ve Tailwind CSS kullanarak sayfa yükleme hızını %30 artıran, duyarlı ve kullanıcı dostu web arayüzleri mimarisi oluşturdu.',
            'UI/UX geliştirmek ve ön yüz mimarisini optimize etmek için 7 kişilik disiplinler arası bir ekiple yakın iş birliği içinde çalıştı.'
          ]
        },
        {
          role: 'BİT Ağ Mühendisi Stajyeri',
          company: 'Albil Merkezi Hizmetler | Bilgi Teknolojileri',
          location: 'İstanbul, Türkiye',
          period: 'Tem 2024 – Ağu 2024',
          badgeColor: 'blue',
          bullets: [
            'Kurumun bilgi sistemlerini yöneterek 5.500+ günlük dahili sorgu için %0 kesinti ve güvenli erişim sağladı.',
            'Ağ altyapısını izledi ve alternatif teknik kök nedenleri değerlendirerek sistem anormalliklerini sistematik olarak teşhis etti, verimli veri depolama protokolleri sundu.'
          ]
        },
        {
          role: 'Uçak Bakım Mühendisi Stajyeri',
          company: 'Turkish Technic | Uçak Bakım Hangarı',
          location: 'İstanbul, Türkiye',
          period: 'Ağu 2023 – Eyl 2023',
          badgeColor: 'crimson',
          bullets: [
            'Atatürk Havalimanı ana hangarında karmaşık uçak sistemleri üzerinde detaylı mekanik ve teknik bakım gerçekleştirdi.',
            'Uluslararası havacılık güvenlik standartlarına sıkı sıkıya bağlı kalarak donanım arızaları için kök neden analizine yardımcı oldu.'
          ]
        }
      ]
    },
    projects: {
      tag: '// ARAŞTIRMA VE MÜHENDİSLİK PROJELERİ',
      title: 'Öne Çıkan Bilgisayarlı Görü ve Robotik Projeleri',
      subtitle: 'İzzet Can Sorna’nın portfolyosundan akademik makaleler, otonom robotik ve medikal görüntüleme uygulamaları.',
      btnBreakdown: 'Teknik Detayları Oku →',
      btnDiscuss: 'Mühendislik & Dağıtımı Tartışın',
      btnClose: 'Projeyi Kapat',
      categories: ['Tümü', 'Bilgisayarlı Görü', 'Otonom Robotik', 'Medikal AI'],
      items: [
        {
          id: 1,
          title: 'Hesaplamalı Medikal Görüntüleme Nicelleştirme Araştırması',
          subtitle: 'AI Destekli Beyin RMI Görüntüleme ve YOLOv11 Model Nicelleştirmesi',
          category: 'Medikal AI',
          date: 'Tem 2026',
          tags: ['YOLOv11', 'PyTorch', 'Medikal Görü', 'Beyin RMI', 'Araştırma Makalesi'],
          shortDesc: 'Multimedia Tools and Applications dergisine sunulan (İncelemede) yapay zeka destekli medikal görüntüleme nicelleştirmesi araştırmasına liderlik etti. Beyin RMI veri kümelerinde %97.04 mAP skoruna ulaştı.',
          highlights: [
            'Multimedia Tools and Applications dergisine sunulan yapay zeka destekli medikal görüntüleme nicelleştirmesi araştırmasına liderlik etti (İnceleme Aşamasında).',
            'Beyin görüntüleme RMI veri kümesinde YOLOv11 nesne tespiti modelini eğiterek %97.04 mAP skoru elde etti.',
            'Medikal iş akışlarında hızlı teşhis değerlendirmesi için boru hattı ön işlemesini optimize etti.'
          ],
          metrics: [
            { val: '%97.04', lbl: 'mAP Skoru' },
            { val: 'YOLOv11', lbl: 'Model Mimarisi' },
            { val: 'İncelemede', lbl: 'Multimedia Tools & Apps' }
          ]
        },
        {
          id: 2,
          title: 'Metsuke — Otonom Dört Bacaklı Robot Asistanı',
          subtitle: 'ESP32-S3 Gerçek Zamanlı Gömülü C/C++ Servo Kinematiği ve Hareket Planlama',
          category: 'Otonom Robotik',
          date: 'Mar 2026',
          tags: ['ESP32-S3', 'C/C++', 'Kinematik', 'WebSockets', 'Engel Kaçınma'],
          shortDesc: 'ESP32-S3 mikrodenetleyicisi ve C/C++ kullanarak 15ms sensör gecikmesine sahip gerçek zamanlı çalışma ortamında otonom dört bacaklı robot asistanı mimarisini kodladı.',
          highlights: [
            'ESP32-S3 mikrodenetleyicisi ve C/C++ kullanarak gerçek zamanlı çalışma ortamında otonom dört bacaklı robot asistanı geliştirdi.',
            'Karmaşık servo motor kinematiği ve WebSocket iletişim protokollerini entegre ederek sensör veri işlemede 15ms yanıt süresi elde etti.',
            'Engebeli arazide navigasyon kararlılığını önemli ölçüde artıran dinamik engel kaçınma ve hareket planlama sistemi tasarladı.'
          ],
          metrics: [
            { val: '15ms', lbl: 'Veri Gecikmesi' },
            { val: 'ESP32-S3', lbl: 'Mikrodenetleyici' },
            { val: 'C / C++', lbl: 'Çekirdek Sistem' }
          ]
        },
        {
          id: 3,
          title: 'Düşük Alt Göz Kapağı Bozukluğunda Yapay Zeka Teşhisi',
          subtitle: 'MRD2 Cerrahi Metriklerini Hesaplayan Gerçek Zamanlı Medikal Teşhis Aracı',
          category: 'Medikal AI',
          date: 'Oca 2026',
          tags: ['YOLOv11', 'OpenCV', 'Python', 'MRD2 Metriği', 'Klinik Görü'],
          shortDesc: 'YOLOv11, Python ve OpenCV kullanarak MRD2 gibi cerrahi metrikleri dinamik olarak hesaplayan ve alt göz kapağı bozukluğunu gerçek zamanlı nicelleyen uçtan uca teşhis aracı geliştirdi.',
          highlights: [
            'YOLOv11, Python ve OpenCV kullanarak MRD2 cerrahi metriklerini dinamik hesaplayan uçtan uca medikal teşhis aracı geliştirdi.',
            '3K+ klinik görüntü veri kümesinde özel çözünürlük ölçekleme algoritmasıyla %98 hassasiyet (mAP@50) ve milimetre altı doğruluk elde ederek manuel kumpas hatalarını ortadan kaldırdı.',
            'Model çıkarım süresini kare başına 20ms’ye optimize ederek klinik donanımlara doğrudan dağıtılabilir hale getirdi.'
          ],
          metrics: [
            { val: '%98', lbl: 'Hassasiyet (mAP@50)' },
            { val: '20ms', lbl: 'Çıkarım Süresi' },
            { val: '3K+', lbl: 'Klinik Veri Kümesi' }
          ]
        },
        {
          id: 4,
          title: 'Gerçek Zamanlı Görüntü İşlemeli Hareket Takip Tareti',
          subtitle: '36 FPS Hızında Bilgisayarlı Görü Servo Kontrolü ve Hedef Takibi',
          category: 'Bilgisayarlı Görü',
          date: 'Ağu 2025',
          tags: ['Keras', 'OpenCV', 'Python', 'Nesne Takibi', 'Servo Donanım'],
          shortDesc: 'Özel donanım ve gelişmiş bilgisayarlı görü algoritmalarını entegre ederek değişken ışık koşullarında 36 FPS hızında çalışan gerçek zamanlı hareket takip tareti kodladı.',
          highlights: [
            'Özel donanım ve gelişmiş bilgisayarlı görü algoritmalarını entegre ederek gerçek zamanlı hareket takip tareti geliştirdi.',
            'Python’da Keras ve OpenCV kullanarak değişken ışık koşullarında 36 FPS hızında çalışan nesne takip özellikleri uyguladı.',
            'Hızlı hedef yakalama için donanım tepki döngülerini kalibre etti.'
          ],
          metrics: [
            { val: '36 FPS', lbl: 'Takip Hızı' },
            { val: 'Keras/OpenCV', lbl: 'Görü Teknolojisi' },
            { val: 'Gerçek Zamanlı', lbl: 'Donanım Servo Kontrolü' }
          ]
        }
      ]
    },
    diagnostics: {
      tag: '// İNTERAKTİF BİLGİSAYARLI GÖRÜ VE ROBOTİK LAB',
      title: 'Canlı Teşhis ve Kinematik Simülatörü',
      subtitle: 'İzzet Can Sorna’nın YOLOv11 medikal görü modellerini ve Metsuke robot telemetrisini gerçek zamanlı test edin.',
      tabEyelid: '👁️ Alt Göz Kapağı AI (YOLOv11)',
      tabBrain: '🧠 Beyin Medikal RMI (%97.04 mAP)',
      tabRobot: '🤖 Metsuke Robot Telemetrisi (15ms)',
      ctrlHeader: 'MODEL ÇIKARIM KONTROLLERİ',
      eyelidIntro: 'YOLOv11 ve OpenCV kullanarak alt göz kapağı konumunu gerçek zamanlı niceller ve MRD2 cerrahi metriklerini hesaplar.',
      brainIntro: 'RMI veri kümelerinde eğitilmiş ve %97.04 mAP skoruna ulaşmış AI destekli beyin görüntüleme modeli.',
      robotIntro: 'C/C++ gömülü kinematiği ve 15ms WebSockets ile çalışan gerçek zamanlı dört bacaklı robot asistanı.',
      btnRunEyelid: '🚀 Göz Kapağı Çıkarımını Çalıştır',
      btnRunBrain: '🚀 Beyin RMI Çıkarımını Çalıştır',
      running: '⚡ YOLOv11 Çıkarımı Yapılıyor...',
      telemetryHeader: 'TELEMETRİ VE ÇIKARIM SONUÇLARI',
      waiting: 'DURUM: TETİKLEME_BEKLENİYOR',
      waitingMsg: 'Model simülasyonunu çalıştırmak için soldaki "Çıkarımı Çalıştır" butonuna basın.',
      processing: 'YOLOV11 BORU HATTI İŞLENİYOR...',
      btnObstacleSim: '⚡ Engel Algılamayı Simüle Et',
      btnClearObstacle: '⚠️ Engeli Temizle',
    },
    skills: {
      tag: '// TEKNİK YETENEKLER VE ARAÇLAR',
      title: 'Mühendislik Becerileri ve Teknolojiler',
      subtitle: 'İzzet Can Sorna tarafından uzmanlaşılmış kütüphaneler, bulut servisleri ve programlama dillerinin kapsamlı matriksi.',
      languages: 'DİLLER:',
      langVal: 'İngilizce (Profesyonel Çalışma Düzeyi) · Türkçe (Ana Dili)',
      location: 'KONUM:',
      locVal: 'İstanbul, Türkiye (Dünya Çapında Uzaktan Çalışma & Taşınmaya Uygun)',
    },
    contact: {
      tag: '// İLETİŞİME GEÇİN',
      title: 'İzzet Can Sorna ile İletişime Geçin',
      subtitle: 'Makine Öğrenmesi Mühendisliği pozisyonları, Bilgisayarlı Görü projeleri ve teknik iş birliklerine açıktır.',
      cardTitle: 'İletişim Bilgileri',
      intro: 'Teknik sorularınız veya tam zamanlı rol fırsatları için e-posta, telefon, LinkedIn veya GitHub üzerinden doğrudan ulaşabilirsiniz.',
      formTitle: 'Doğrudan Mesaj Gönderin',
      btnViewCV: '📄 Tam CV’yi Görüntüle / Yazdır',
      btnSend: 'MESAJ GÖNDER →',
      sending: 'MESAJ GÖNDERİLİYOR...',
      successTitle: 'MESAJ ALINDI // BAŞARILI',
      successMsg: 'İletişime geçtiğiniz için teşekkürler. İzzet Can Sorna e-postanıza kısa süre içinde yanıt verecektir.',
      btnSendAnother: 'Başka Bir Mesaj Gönder',
      errRequired: 'Lütfen zorunlu alanları doldurun.',
      nameLabel: 'Adınız Soyadınız *',
      namePlace: 'örn. Dr. Alex Mercer',
      emailLabel: 'E-Posta Adresiniz *',
      emailPlace: 'alex@kurum.com',
      subjLabel: 'İletişim Kategorisi',
      subjML: 'Makine Öğrenmesi Mühendisliği Rolü',
      subjCV: 'Bilgisayarlı Görü / Medikal AI Projesi',
      subjRobot: 'Otonom Robotik (Metsuke)',
      subjGen: 'Genel İş Birliği',
      msgLabel: 'Mesajınız *',
      msgPlace: 'Fırsat detaylarını, proje özelliklerinizi veya sorunuzu açıklayın...',
    },
    footer: {
      sub: 'Makine Öğrenmesi & Bilgisayarlı Görü Mühendisi',
      copy: '© 2026 İZZET CAN SORNA // MARMARA ÜNİVERSİTESİ',
      deployed: 'NETLIFY ÜZERİNDE YAYINDA',
    }
  }
};
