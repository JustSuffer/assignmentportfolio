import React, { useState } from 'react';

const DiagnosticsLab = ({ t }) => {
  const [activeTab, setActiveTab] = useState('eyelid'); // 'eyelid' | 'brain' | 'robot'
  const [simulating, setSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  // Robot telemetry state
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
          type: 'Eyelid Malposition Diagnosis',
          model: 'YOLOv11 PyTorch Clinical Weights',
          mAP50: '98.00%',
          mrd2Value: '4.85 mm (Sub-Millimeter Precision)',
          inferenceTime: '20 ms / frame',
          datasetSize: '3,000+ Clinical Samples',
          recommendation: 'Normal lower eyelid position. Margin Reflex Distance 2 within clinical threshold.'
        });
      } else if (sampleType === 'brain') {
        setSimulationResult({
          type: 'Brain Medical Imaging Quantification',
          model: 'YOLOv11 RMI Research Model',
          mAP50: '97.04%',
          boundingBBoxes: 3,
          inferenceTime: '18 ms / frame',
          manuscriptStatus: 'Submitted to Multimedia Tools & Applications',
          recommendation: 'Target region detected with 97.04% confidence. Zero false positives on test split.'
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
    <section id="diagnostics" className="section-padding clair-lab-section">
      <div className="container">
        <div className="clair-section-header">
          <span className="mono-tag text-crimson">{t.diagnostics.tag}</span>
          <h2 className="section-title-serif">{t.diagnostics.title}</h2>
          <p className="section-subtitle">{t.diagnostics.subtitle}</p>
        </div>

        {/* Lab Navigation Tabs */}
        <div className="clair-filter-bar">
          <button
            className={`clair-filter-btn ${activeTab === 'eyelid' ? 'active' : ''}`}
            onClick={() => { setActiveTab('eyelid'); setSimulationResult(null); }}
          >
            {t.diagnostics.tabEyelid}
          </button>
          <button
            className={`clair-filter-btn ${activeTab === 'brain' ? 'active' : ''}`}
            onClick={() => { setActiveTab('brain'); setSimulationResult(null); }}
          >
            {t.diagnostics.tabBrain}
          </button>
          <button
            className={`clair-filter-btn ${activeTab === 'robot' ? 'active' : ''}`}
            onClick={() => { setActiveTab('robot'); setSimulationResult(null); }}
          >
            {t.diagnostics.tabRobot}
          </button>
        </div>

        {/* Simulator Box */}
        <div className="lab-display-container clair-card">
          {(activeTab === 'eyelid' || activeTab === 'brain') && (
            <div className="vision-sim-grid">
              <div className="sim-control-side">
                <h4 className="mono-heading text-gold">{t.diagnostics.ctrlHeader}</h4>
                <p className="sim-intro-text">
                  {activeTab === 'eyelid' ? t.diagnostics.eyelidIntro : t.diagnostics.brainIntro}
                </p>

                <div className="sim-button-group">
                  <button 
                    className="btn-gold-solid full-width"
                    onClick={() => handleRunMedicalInference(activeTab)}
                    disabled={simulating}
                  >
                    {simulating 
                      ? t.diagnostics.running 
                      : (activeTab === 'eyelid' ? t.diagnostics.btnRunEyelid : t.diagnostics.btnRunBrain)}
                  </button>
                </div>

                <div className="sim-specs-list">
                  <div className="spec-item-row">
                    <span className="spec-k">FRAMEWORK:</span>
                    <span className="spec-v text-gold">PyTorch + OpenCV</span>
                  </div>
                  <div className="spec-item-row">
                    <span className="spec-k">TARGET LATENCY:</span>
                    <span className="spec-v text-crimson">20ms / Frame</span>
                  </div>
                  <div className="spec-item-row">
                    <span className="spec-k">ACCURACY:</span>
                    <span className="spec-v text-gold-light">Sub-Millimeter Caliper Precision</span>
                  </div>
                </div>
              </div>

              <div className="sim-output-side">
                <h4 className="mono-heading text-crimson">{t.diagnostics.telemetryHeader}</h4>

                {!simulationResult && !simulating && (
                  <div className="sim-placeholder-box">
                    <span className="mono-tag">{t.diagnostics.waiting}</span>
                    <p>{t.diagnostics.waitingMsg}</p>
                  </div>
                )}

                {simulating && (
                  <div className="sim-placeholder-box">
                    <div className="clair-spinner"></div>
                    <span className="mono-tag text-gold">{t.diagnostics.processing}</span>
                  </div>
                )}

                {simulationResult && !simulating && (
                  <div className="sim-results-card">
                    <div className="res-row-hero">
                      <span className="res-title-gold">{simulationResult.type}</span>
                      <span className="res-badge-green">VALIDATED</span>
                    </div>

                    <div className="res-metrics-grid">
                      <div className="res-box">
                        <span className="res-lbl">PRECISION / MAP:</span>
                        <span className="res-val text-gold">{simulationResult.mAP50}</span>
                      </div>
                      <div className="res-box">
                        <span className="res-lbl">INFERENCE SPEED:</span>
                        <span className="res-val text-crimson">{simulationResult.inferenceTime}</span>
                      </div>
                      {simulationResult.mrd2Value && (
                        <div className="res-box">
                          <span className="res-lbl">MRD2 METRIC:</span>
                          <span className="res-val text-gold-light">{simulationResult.mrd2Value}</span>
                        </div>
                      )}
                    </div>

                    <div className="res-verdict-box">
                      <span className="res-lbl">CLINICAL VERDICT:</span>
                      <p>{simulationResult.recommendation}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'robot' && (
            <div className="robot-sim-grid">
              <div className="robot-control-panel">
                <h4 className="mono-heading text-gold">METSUKE ROBOT TELEMETRY (ESP32-S3)</h4>
                <p className="sim-intro-text">{t.diagnostics.robotIntro}</p>

                <div className="robot-actions-group">
                  <button 
                    className={`btn-gold-solid full-width ${robotState.obstacleDetected ? 'btn-crimson-solid' : ''}`}
                    onClick={toggleObstacleAvoidance}
                  >
                    {robotState.obstacleDetected ? t.diagnostics.btnClearObstacle : t.diagnostics.btnObstacleSim}
                  </button>
                </div>

                <div className="robot-specs-grid">
                  <div className="spec-box">
                    <span className="spec-k">RESPONSE TIME:</span>
                    <span className="spec-v text-gold">{robotState.latency} ms</span>
                  </div>
                  <div className="spec-box">
                    <span className="spec-k">MCU CORE:</span>
                    <span className="spec-v text-gold-light">ESP32-S3 Dual-Core</span>
                  </div>
                  <div className="spec-box">
                    <span className="spec-k">PROTOCOL:</span>
                    <span className="spec-v text-crimson">WebSocket C/C++</span>
                  </div>
                </div>
              </div>

              <div className="robot-visual-panel">
                <div className="robot-status-banner">
                  <span className="mono-tag text-dim">SYSTEM STATUS:</span>
                  <span className={`status-val ${robotState.obstacleDetected ? 'text-crimson' : 'text-gold'}`}>
                    {robotState.systemStatus}
                  </span>
                </div>

                <div className="servo-kinematics-box">
                  <h5 className="mono-heading text-dim">SERVO KINEMATICS MATRIX</h5>
                  <div className="servo-grid">
                    <div className="servo-item">
                      <span>LEG_01:</span> <strong>{robotState.servoAngles.leg1}°</strong>
                    </div>
                    <div className="servo-item">
                      <span>LEG_02:</span> <strong>{robotState.servoAngles.leg2}°</strong>
                    </div>
                    <div className="servo-item">
                      <span>LEG_03:</span> <strong>{robotState.servoAngles.leg3}°</strong>
                    </div>
                    <div className="servo-item">
                      <span>LEG_04:</span> <strong>{robotState.servoAngles.leg4}°</strong>
                    </div>
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
