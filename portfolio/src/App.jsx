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

function App() {
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <div className="portfolio-app-clair">
      {/* 3D Chiaroscuro Interactive Background Canvas */}
      <ChiaroscuroCanvas />

      <Navbar onOpenCVModal={() => setShowCVModal(true)} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenCVModal={() => setShowCVModal(true)} />
        <About />
        <Experience />
        <Projects />
        <DiagnosticsLab />
        <SkillsEducation />
        <Contact onOpenCVModal={() => setShowCVModal(true)} />
      </main>

      <Footer />

      {/* CV Printable Modal */}
      {showCVModal && (
        <CVModal onClose={() => setShowCVModal(false)} />
      )}
    </div>
  );
}

export default App;