import React from 'react';

const CVModal = ({ lang, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const isTR = lang === 'TR';

  return (
    <div className="clair-modal-overlay" onClick={onClose}>
      <div className="cv-modal-card clair-card" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-actions-top">
          <button className="btn-gold-solid btn-sm" onClick={handlePrint}>
            🖨️ {isTR ? 'PDF Kaydet / Yazdır' : 'Print / Save PDF'}
          </button>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cv-printable-document">
          <div className="cv-header">
            <h1 className="cv-name">İZZET CAN SORNA</h1>
            <p className="cv-contact-line">
              Istanbul, Turkey | izzet4626@gmail.com | +90-534-087-9034 | linkedin.com/in/izzetcansorna | github.com/JustSuffer | izzetportfolio.netlify.app
            </p>
          </div>

          <div className="cv-section">
            <h3 className="cv-sec-title">{isTR ? 'PROFESYONEL ÖZET' : 'PROFESSIONAL SUMMARY'}</h3>
            <p className="cv-sec-text">
              {isTR 
                ? 'PyTorch ve YOLOv11 kullanarak medikal görüntüleme çözümleri, otonom robotik ve ölçeklenebilir derin öğrenme boru hatları inşa etme konusunda saha deneyimine sahip, Bilgisayarlı Görü ve üretim seviyesi yapay zeka sistemlerinde uzmanlaşmış Makine Öğrenmesi Mühendisi. Karmaşık araştırmaları ve veri kümelerini dağıtılabilir, yüksek performanslı teknik ürünlere dönüştürme tutkusuna sahip.'
                : 'Machine Learning Engineer specializing in Computer Vision and production-grade AI systems, with hands-on experience building medical imaging solutions, autonomous robotics, and scalable deep learning pipelines using PyTorch and YOLOv11. Passionate about translating complex research and datasets into deployable, high-performance technical products.'}
            </p>
          </div>

          <div className="cv-section">
            <h3 className="cv-sec-title">{isTR ? 'EĞİTİM' : 'EDUCATION'}</h3>
            <div className="cv-item">
              <div className="cv-item-header">
                <strong>Marmara University</strong>
                <span>Istanbul, Turkey</span>
              </div>
              <p>{isTR ? 'Lisans, Mekatronik Mühendisliği Bölümü – GANO: 3.10 (Eyl 2020 – Tem 2025)' : 'B.S., Department of Mechatronics Engineering – GPA: 3.10 (Sep 2020 – Jul 2025)'}</p>
            </div>
            <div className="cv-item">
              <div className="cv-item-header">
                <strong>Nişantaşı Nuri Akın Anatolian High School</strong>
                <span>Istanbul, Turkey</span>
              </div>
              <p>{isTR ? 'Lise Diploması (Haz 2020)' : 'High School Diploma (Jun 2020)'}</p>
            </div>
          </div>

          <div className="cv-section">
            <h3 className="cv-sec-title">{isTR ? 'YETENEKLER' : 'SKILLS'}</h3>
            <p><strong>Programming:</strong> Python, C++.</p>
            <p><strong>ML & Computer Vision:</strong> PyTorch, YOLOv11, OpenCV, ResNet, MobileNet, TensorFlow, Keras, Scikit-learn, Pandas, NumPy.</p>
            <p><strong>Cloud & DevOps:</strong> Oracle Cloud Infrastructure, Docker, Linux, GitHub Actions.</p>
            <p><strong>Web & APIs:</strong> FastAPI, REST APIs, React.js, JavaScript, HTML/CSS.</p>
            <p><strong>Tools:</strong> Git, Google Colab, MATLAB, Arduino.</p>
          </div>

          <div className="cv-section">
            <h3 className="cv-sec-title">{isTR ? 'MESLEKİ DENEYİM' : 'PROFESSIONAL EXPERIENCE'}</h3>
            
            <div className="cv-item">
              <div className="cv-item-header">
                <strong>FlyRank AI — Machine Learning Engineer Intern</strong>
                <span>Remote | Jun 2026 – Present</span>
              </div>
              <ul>
                {isTR ? (
                  <>
                    <li>Veri işleme boru hatlarını optimize etmek için temel AI ilkelerini uygulayarak makine öğrenmesi modellerini tasarladı ve değerlendirdi, veri hazırlama süresini %35 azalttı.</li>
                    <li>İleri özellik mühendisliği, hiperparametre ayarlama ve çapraz doğrulama tekniklerine odaklanarak 10+ veri kümesinde model eğitim süreçlerini hızlandırdı.</li>
                    <li>Üretim öncesinde kenar durumlarını güvenle ele almak için alternatif teknik çözümler geliştirerek modelleri canlı ortamda değerlendirdi.</li>
                  </>
                ) : (
                  <>
                    <li>Engineered and evaluated machine learning models, applying core AI fluency principles to optimize data processing pipelines, reducing data preparation time by 35%.</li>
                    <li>Accelerated model training processes across 10+ datasets by focusing on advanced feature engineering, hyperparameter tuning, and cross-validation techniques.</li>
                    <li>Evaluated models in staging environments, formulating alternative technical solutions to ensure robust edge-case handling prior to production rollouts.</li>
                  </>
                )}
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <strong>Bluesense | AI-Powered Software and Services — AI Engineer Intern</strong>
                <span>Boston, MA (Remote) | Dec 2025 – Present</span>
              </div>
              <ul>
                {isTR ? (
                  <>
                    <li>Deri problemlerini hassas bir şekilde tespit etmek ve sınıflandırmak için ResNet, MobileNet ve YOLOv11 kullanarak 3.5K+ etiketli veri kümesi (80/20 doğrulama) üzerinde bilgisayarlı görü çözümleri geliştirdi.</li>
                    <li>Google Colab üzerinde transfer learning ile derin öğrenme modellerini optimize etti; 100+ gerçek kullanıcı örneğinde %98 hassasiyet ve %97.03 duyarlılık elde etti.</li>
                  </>
                ) : (
                  <>
                    <li>Formulated computer vision solutions using ResNet, MobileNet, and YOLOv11 to precisely detect and classify skin concerns, trained on a 3.5K+ labeled dataset with an 80/20 validation split.</li>
                    <li>Optimized high-performance deep learning models using transfer learning on Google Colab, achieving 98% precision and 97.03% recall in diagnostic accuracy across 100+ real-world user samples.</li>
                  </>
                )}
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <strong>INNOEM — Frontend Developer Intern</strong>
                <span>Istanbul, Turkey | Aug 2024 – Jan 2025</span>
              </div>
              <ul>
                {isTR ? (
                  <>
                    <li>React.js ve Tailwind CSS kullanarak sayfa yükleme hızını %30 artıran, duyarlı ve kullanıcı dostu web arayüzleri mimarisi oluşturdu.</li>
                    <li>UI/UX geliştirmek ve ön yüz mimarisini optimize etmek için 7 kişilik disiplinler arası bir ekiple yakın iş birliği içinde çalıştı.</li>
                  </>
                ) : (
                  <>
                    <li>Architected responsive, user-friendly web interfaces utilizing React.js and Tailwind CSS, improving page load speed by 30%.</li>
                    <li>Collaborated closely within a cross-functional team of 7 to enhance UI/UX and optimize front-end architecture.</li>
                  </>
                )}
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <strong>Albil Merkezi Hizmetler — ICT Network Engineer Intern</strong>
                <span>Istanbul, Turkey | Jul 2024 – Aug 2024</span>
              </div>
              <ul>
                {isTR ? (
                  <>
                    <li>Kurumun bilgi sistemlerini yöneterek 5.500+ günlük dahili sorgu için %0 kesinti ve güvenli erişim sağladı.</li>
                    <li>Ağ altyapısını izledi ve alternatif teknik kök nedenleri değerlendirerek sistem anormalliklerini sistematik olarak teşhis etti, verimli veri depolama protokolleri sundu.</li>
                  </>
                ) : (
                  <>
                    <li>Orchestrated the organization’s information systems, ensuring zero downtime and secure access for 5,500+ daily internal queries.</li>
                    <li>Monitored network infrastructure and systematically diagnosed system anomalies, deploying efficient data storage protocols.</li>
                  </>
                )}
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <strong>Turkish Technic — Aircraft Maintenance Engineer Intern</strong>
                <span>Istanbul, Turkey | Aug 2023 – Sep 2023</span>
              </div>
              <ul>
                {isTR ? (
                  <>
                    <li>Atatürk Havalimanı ana hangarında karmaşık uçak sistemleri üzerinde detaylı mekanik ve teknik bakım gerçekleştirdi.</li>
                    <li>Uluslararası havacılık güvenlik standartlarına sıkı sıkıya bağlı kalarak donanım arızaları için kök neden analizine yardımcı oldu.</li>
                  </>
                ) : (
                  <>
                    <li>Executed detailed mechanical and technical maintenance on complex aircraft systems at Atatürk Airport’s main hangar.</li>
                    <li>Assisted in root-cause analysis for hardware malfunctions, strictly adhering to international aviation safety standards.</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="cv-section">
            <h3 className="cv-sec-title">{isTR ? 'PROJELER' : 'PROJECTS'}</h3>
            <p><strong>Computational Medical Imaging Quantification Research (Jul 2026):</strong> {isTR ? 'Multimedia Tools and Applications dergisine sunulan makale (İncelemede). YOLOv11 ile beyin RMI veri kümesinde %97.04 mAP skoru.' : 'Manuscript on AI-assisted medical imaging submitted to Multimedia Tools and Applications (Under Review). Trained YOLOv11 on brain RMI dataset achieving 97.04% mAP.'}</p>
            <p><strong>Metsuke - Autonomous Quadruped Robot (Mar 2026):</strong> ESP32-S3, C/C++, {isTR ? 'servo kinematiği, WebSockets (15ms gecikme), dinamik engel kaçınma.' : 'servo kinematics, WebSockets (15ms latency), dynamic obstacle avoidance.'}</p>
            <p><strong>AI in Droopy Lower Eyelid Malposition (Jan 2026):</strong> YOLOv11, OpenCV, {isTR ? 'MRD2 cerrahi metrik hesabı (%98 hassasiyet, milimetre altı doğruluk, 20ms/kare, 3K+ veri kümesi).' : 'MRD2 surgical metric calculation (98% precision, sub-millimeter accuracy, 20ms/frame, 3K+ dataset).'}</p>
            <p><strong>Motion Tracking Turret with Image Processing (Aug 2025):</strong> Keras, OpenCV, Python, {isTR ? '36 FPS hızında gerçek zamanlı takip.' : 'operating at 36 FPS under varying lighting conditions.'}</p>
          </div>

          <div className="cv-section">
            <h3 className="cv-sec-title">{isTR ? 'EK BİLGİLER' : 'ADDITIONAL INFORMATION'}</h3>
            <p><strong>{isTR ? 'Diller:' : 'Languages:'}</strong> {isTR ? 'İngilizce (Profesyonel Çalışma Düzeyi), Türkçe (Ana Dili)' : 'English (Professional Working Proficiency), Turkish (Native)'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
