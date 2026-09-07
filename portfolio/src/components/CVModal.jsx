import React from 'react';

const CVModal = ({ lang, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const isTR = lang === 'TR';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl" onClick={onClose}>
      <div 
        className="bg-zinc-950 text-white max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-10 rounded-[36px] border border-amber-400/40 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="/CV/CV.pdf" 
              download="Izzet_Can_Sorna_CV.pdf"
              className="px-5 py-2.5 rounded-full bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-300 hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
            >
              📥 {isTR ? 'CV.pdf İndir' : 'Download CV (PDF)'}
            </a>
            <a 
              href="/CV/CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-bold hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              ↗ {isTR ? 'Yeni Sekmede Aç' : 'Open PDF in New Tab'}
            </a>
            <button 
              className="px-4 py-2.5 rounded-full bg-white/10 text-zinc-300 font-mono text-xs font-bold hover:bg-white/20 transition-all"
              onClick={handlePrint}
            >
              🖨️ {isTR ? 'Yazdır' : 'Print'}
            </button>
          </div>
          <button 
            className="text-zinc-400 hover:text-white text-2xl font-mono p-1 focus:outline-none"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="w-full h-[65vh] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner mb-8">
          <iframe 
            src="/CV/CV.pdf#toolbar=1" 
            title="İzzet Can Sorna CV PDF" 
            className="w-full h-full border-none"
          />
        </div>

        {/* Structured Resume Text Backup */}
        <div className="p-8 rounded-2xl bg-black border border-white/10 font-sans text-xs space-y-6 text-zinc-300">
          <div className="border-b border-white/10 pb-4">
            <h1 className="font-sans text-2xl font-extrabold text-white">İZZET CAN SORNA</h1>
            <p className="font-mono text-xs text-amber-400 mt-1">
              Istanbul, Turkey | izzet4626@gmail.com | +90-534-087-9034 | linkedin.com/in/izzetcansorna | github.com/JustSuffer
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              {isTR ? 'PROFESYONEL ÖZET' : 'PROFESSIONAL SUMMARY'}
            </h3>
            <p className="leading-relaxed">
              {isTR 
                ? 'PyTorch ve YOLOv11 kullanarak medikal görüntüleme çözümleri, otonom robotik ve ölçeklenebilir derin öğrenme boru hatları inşa etme konusunda saha deneyimine sahip, Bilgisayarlı Görü ve üretim seviyesi yapay zeka sistemlerinde uzmanlaşmış Makine Öğrenmesi Mühendisi. Karmaşık araştırmaları ve veri kümelerini dağıtılabilir, yüksek performanslı teknik ürünlere dönüştürme tutkusuna sahip.'
                : 'Machine Learning Engineer specializing in Computer Vision and production-grade AI systems, with hands-on experience building medical imaging solutions, autonomous robotics, and scalable deep learning pipelines using PyTorch and YOLOv11. Passionate about translating complex research and datasets into deployable, high-performance technical products.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CVModal;
