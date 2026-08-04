import React, { useState } from 'react';

const DiagnosticsLab = ({ t }) => {
  const [activeTab, setActiveTab] = useState('eyelid'); // 'eyelid' | 'brain' | 'robot'
  const [simulating, setSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  const [robotState, setRobotState] = useState({
    latency: 15,
    obstacleDetected: false,
    servoAngles: { leg1: 45, leg2: 90, leg3: 45, leg4: 90 },
    systemStatus: 'NOMINAL_STABLE'
  });

  const handleRunMedicalInference = (sampleType) => {
    setSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      if (sampleType === 'eyelid') {
        setSimulationResult({
          type: 'Lower Eyelid Diagnostic Inference',
          model: 'YOLOv11 PyTorch Clinical Weights',
          mAP50: '98.00%',
          mrd2Value: '4.85 mm (Sub-Millimeter Accuracy)',
          inferenceTime: '20 ms / frame',
          datasetSize: '3,000+ Clinical Samples',
          recommendation: 'Normal lower eyelid margin position. MRD2 value within standard surgical boundaries.'
        });
      } else if (sampleType === 'brain') {
        setSimulationResult({
          type: 'Brain RMI Tumor Object Detection',
          model: 'YOLOv11 Research Architecture',
          mAP50: '97.04%',
          boundingBBoxes: 3,
          inferenceTime: '18 ms / frame',
          manuscriptStatus: 'Multimedia Tools & Applications (Under Review)',
          recommendation: 'Target region identified with 97.04% confidence. Zero false positives on test split.'
        });
      }
      setSimulating(false);
    }, 700);
  };

  const toggleObstacleAvoidance = () => {
    setRobotState(prev => ({
      ...prev,
      obstacleDetected: !prev.obstacleDetected,
      latency: !prev.obstacleDetected ? 14 : 15,
      systemStatus: !prev.obstacleDetected ? 'OBSTACLE_AVOIDANCE_REPATHING' : 'NOMINAL_STABLE'
    }));
  };

  return (
    <section id="diagnostics" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Apple Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-[#2997ff] uppercase mb-3">
            {t.diagnostics.tag}
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            {t.diagnostics.title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-3xl mt-4 font-normal">
            {t.diagnostics.subtitle}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            className={`px-6 py-2.5 rounded-full font-mono text-xs font-bold transition-all uppercase tracking-wider ${
              activeTab === 'eyelid'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:border-amber-400/40'
            }`}
            onClick={() => { setActiveTab('eyelid'); setSimulationResult(null); }}
          >
            {t.diagnostics.tabEyelid}
          </button>
          <button
            className={`px-6 py-2.5 rounded-full font-mono text-xs font-bold transition-all uppercase tracking-wider ${
              activeTab === 'brain'
                ? 'bg-[#2997ff] text-white shadow-lg shadow-[#2997ff]/20'
                : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:border-[#2997ff]/40'
            }`}
            onClick={() => { setActiveTab('brain'); setSimulationResult(null); }}
          >
            {t.diagnostics.tabBrain}
          </button>
          <button
            className={`px-6 py-2.5 rounded-full font-mono text-xs font-bold transition-all uppercase tracking-wider ${
              activeTab === 'robot'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/20'
                : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:border-rose-600/40'
            }`}
            onClick={() => { setActiveTab('robot'); setSimulationResult(null); }}
          >
            {t.diagnostics.tabRobot}
          </button>
        </div>

        {/* Simulator Glass Card */}
        <div className="p-8 md:p-12 rounded-[36px] bg-zinc-950 border border-white/10 shadow-2xl">
          {(activeTab === 'eyelid' || activeTab === 'brain') && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {t.diagnostics.ctrlHeader}
                </h4>
                <p className="font-sans text-base text-zinc-300 leading-relaxed">
                  {activeTab === 'eyelid' ? t.diagnostics.eyelidIntro : t.diagnostics.brainIntro}
                </p>

                <button 
                  className="px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all w-full shadow-lg"
                  onClick={() => handleRunMedicalInference(activeTab)}
                  disabled={simulating}
                >
                  {simulating 
                    ? t.diagnostics.running 
                    : (activeTab === 'eyelid' ? t.diagnostics.btnRunEyelid : t.diagnostics.btnRunBrain)}
                </button>

                <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>FRAMEWORK:</span>
                    <span className="text-amber-400 font-bold">PyTorch + OpenCV</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>LATENCY TARGET:</span>
                    <span className="text-rose-400 font-bold">20ms / Frame</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>ACCURACY:</span>
                    <span className="text-blue-400 font-bold">Sub-Millimeter Precision</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[28px] bg-black border border-white/10 min-h-[320px] flex flex-col justify-center">
                {!simulationResult && !simulating && (
                  <div className="text-center space-y-2">
                    <span className="font-mono text-xs text-zinc-500 block">{t.diagnostics.waiting}</span>
                    <p className="font-sans text-sm text-zinc-400">{t.diagnostics.waitingMsg}</p>
                  </div>
                )}

                {simulating && (
                  <div className="text-center space-y-4">
                    <div className="w-10 h-10 border-2 border-amber-400/20 border-t-amber-400 rounded-full animate-spin mx-auto" />
                    <span className="font-mono text-xs text-amber-400 block font-bold">{t.diagnostics.processing}</span>
                  </div>
                )}

                {simulationResult && !simulating && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-3 border-b border-white/10">
                      <span className="font-sans text-lg font-bold text-amber-400">{simulationResult.type}</span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold">VALIDATED</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 font-mono">
                      <div className="p-4 rounded-2xl bg-zinc-950 border border-white/5">
                        <span className="text-[10px] text-zinc-500 block">PRECISION / MAP</span>
                        <span className="text-xl font-bold text-amber-400">{simulationResult.mAP50}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-zinc-950 border border-white/5">
                        <span className="text-[10px] text-zinc-500 block">INFERENCE SPEED</span>
                        <span className="text-xl font-bold text-rose-400">{simulationResult.inferenceTime}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                      <span className="font-mono text-xs font-bold text-amber-300 block mb-1">CLINICAL VERDICT:</span>
                      <p className="font-sans text-xs text-white leading-relaxed">{simulationResult.recommendation}</p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

          {activeTab === 'robot' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                  METSUKE ROBOT TELEMETRY (ESP32-S3)
                </h4>
                <p className="font-sans text-base text-zinc-300 leading-relaxed">
                  {t.diagnostics.robotIntro}
                </p>

                <button 
                  className={`px-8 py-4 rounded-full font-extrabold text-sm uppercase tracking-wider text-white transition-all w-full shadow-lg ${
                    robotState.obstacleDetected ? 'bg-rose-600' : 'bg-amber-500 text-black'
                  }`}
                  onClick={toggleObstacleAvoidance}
                >
                  {robotState.obstacleDetected ? t.diagnostics.btnClearObstacle : t.diagnostics.btnObstacleSim}
                </button>

                <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-black border border-white/10">
                    <span className="text-zinc-500 block">RESPONSE</span>
                    <span className="text-amber-400 font-bold text-base">{robotState.latency} ms</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-black border border-white/10">
                    <span className="text-zinc-500 block">MCU</span>
                    <span className="text-blue-400 font-bold text-base">ESP32-S3</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-black border border-white/10">
                    <span className="text-zinc-500 block">PROTOCOL</span>
                    <span className="text-rose-400 font-bold text-base">WebSockets</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[28px] bg-black border border-white/10 space-y-6 font-mono">
                <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs">
                  <span className="text-zinc-500">SYSTEM STATUS:</span>
                  <span className={`font-bold ${robotState.obstacleDetected ? 'text-rose-400' : 'text-amber-400'}`}>
                    {robotState.systemStatus}
                  </span>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs text-blue-400 uppercase">SERVO KINEMATICS MATRIX</h5>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-zinc-950 text-white">LEG 01: <strong>{robotState.servoAngles.leg1}°</strong></div>
                    <div className="p-4 rounded-xl bg-zinc-950 text-white">LEG 02: <strong>{robotState.servoAngles.leg2}°</strong></div>
                    <div className="p-4 rounded-xl bg-zinc-950 text-white">LEG 03: <strong>{robotState.servoAngles.leg3}°</strong></div>
                    <div className="p-4 rounded-xl bg-zinc-950 text-white">LEG 04: <strong>{robotState.servoAngles.leg4}°</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default DiagnosticsLab;
