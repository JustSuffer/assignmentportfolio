import React, { useState } from 'react';
import ChiaroscuroCanvas from './components/ChiaroscuroCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DiagnosticsLab from './components/DiagnosticsLab';
import SkillsEducation from './components/SkillsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import { translations } from './utils/translations';

function App() {
  const [lang, setLang] = useState('EN'); // Default language is English
  const [showCVModal, setShowCVModal] = useState(false);

  const t = translations[lang];

  return (
    <div className="portfolio-app-clair">
      {/* 3D Chiaroscuro Interactive Background Canvas */}
      <ChiaroscuroCanvas />

      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onOpenCVModal={() => setShowCVModal(true)} 
      />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero t={t} onOpenCVModal={() => setShowCVModal(true)} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <DiagnosticsLab t={t} />
        <SkillsEducation t={t} />
        <Contact t={t} onOpenCVModal={() => setShowCVModal(true)} />
      </main>

      <Footer t={t} />

      {/* CV Printable Modal */}
      {showCVModal && (
        <CVModal lang={lang} onClose={() => setShowCVModal(false)} />
      )}
    </div>
  );
}

export default App;