import React, { useState } from 'react';
import LatentSpaceCanvas from './components/3d/LatentSpaceCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
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
    <div className="obscura-app relative bg-black text-white min-h-screen font-sans selection:bg-amber-400 selection:text-black">
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
        <Certificates t={t} />
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