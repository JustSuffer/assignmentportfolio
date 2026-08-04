import React from 'react';

const MarqueeTicker = () => {
  const items = [
    'COMPUTER VISION',
    'MACHINE LEARNING',
    'MEDICAL AI',
    'AUTONOMOUS ROBOTICS',
    'PYTORCH & YOLOV11',
    'ESP32-S3 EMBEDDED C++',
    'FASTAPI & DOCKER',
    'BRAIN MRI QUANTIFICATION',
    'MRD2 SURGICAL METRICS'
  ];

  return (
    <div className="w-full overflow-hidden bg-[#050507] border-y border-white/10 py-5 my-12 relative z-10 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-[#ECE8E3] uppercase">
              {text}
            </span>
            <span className="text-[#C4A86A] text-2xl font-bold">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
