import React, { useState, useEffect } from 'react';
import LatentSpaceCanvas from './components/3d/LatentSpaceCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
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
  const [lang, setLang] = useState('EN'); // Default language English
  const [showCVModal, setShowCVModal] = useState(false);

  const t = translations[lang];

  return (
    <div className="obscura-app relative bg-[#050507] text-[#FFFFFF] min-h-screen font-sans selection:bg-[#C4A86A] selection:text-[#050507]">
      {/* 3D WebGL Latent Feature Vector Canvas */}
      <LatentSpaceCanvas />

      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onOpenCVModal={() => setShowCVModal(true)} 
      />

      <main className="relative z-10">
        <Hero t={t} onOpenCVModal={() => setShowCVModal(true)} />
        
        {/* Kinetic Infinite Ticker Banner */}
        <MarqueeTicker />

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