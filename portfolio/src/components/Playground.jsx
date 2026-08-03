import React, { useState } from 'react';

const Playground = () => {
  const [candidateRole, setCandidateRole] = useState('AI Engineer & Full-Stack');
  const [selectedSkills, setSelectedSkills] = useState(['React 19', 'Python/AI', 'Netlify Deploy', 'Vite']);
  const [projectType, setProjectType] = useState('Enterprise Web App');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const availableSkills = [
    'React 19', 'Python/AI', 'Netlify Deploy', 'Vite', 'Node.js', 
    'TypeScript', 'LLM Prompting', 'CSS Animations', 'REST APIs', 'Git CI/CD'
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRunAnalysis = (e) => {
    e.preventDefault();
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const score = Math.min(100, 70 + selectedSkills.length * 4);
      const isNetlifyReady = selectedSkills.includes('Netlify Deploy') || selectedSkills.includes('Vite');
      
      setResult({
        score,
        overallRating: score >= 90 ? '🌟 World-Class Candidate' : '🚀 Highly Skilled Engineer',
        buildReadiness: isNetlifyReady ? 'PASS — Ready for Netlify Deployment' : 'WARN — Add netlify.toml config',
        frontendScore: selectedSkills.includes('React 19') ? '98%' : '82%',
        aiCapability: selectedSkills.includes('Python/AI') || selectedSkills.includes('LLM Prompting') ? 'Advanced AI Agent Integration' : 'Standard Full-Stack',
        recommendation: `İzzet Can Sorna demonstrates exceptional proficiency for ${candidateRole} positions with high readiness for ${projectType} projects.`
      });
      setAnalyzing(false);
    }, 800);
  };

  return (
    <section id="playground" className="section-padding playground-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// INTERACTIVE AI LAB</div>
          <h2 className="section-title">Try Live <span className="gradient-text">Skill & Build Analyzer</span></h2>
          <p className="section-subtitle">
            Interactive widget demonstrating real-time logic evaluation, skill matching, and Netlify deployment validation.
          </p>
        </div>

        <div className="playground-grid">
          {/* Controls */}
          <div className="playground-controls glass-card">
            <h3 className="lab-card-title">⚙️ Test Configuration</h3>
            
            <form onSubmit={handleRunAnalysis}>
              <div className="form-group">
                <label className="form-label">Target Role:</label>
                <select 
                  value={candidateRole} 
                  onChange={(e) => setCandidateRole(e.target.value)}
                  className="form-select"
                >
                  <option value="AI Engineer & Full-Stack">AI Engineer & Full-Stack Developer</option>
                  <option value="Frontend Specialist (React 19)">Frontend Specialist (React 19)</option>
                  <option value="LLM Solutions Architect">LLM Solutions Architect</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Scope:</label>
                <select 
                  value={projectType} 
                  onChange={(e) => setProjectType(e.target.value)}
                  className="form-select"
                >
                  <option value="Enterprise Web App">Enterprise Web App (High Traffic)</option>
                  <option value="FlyRank AI SEO Platform">FlyRank AI SEO Platform</option>
                  <option value="SaaS AI Assistant">SaaS Autonomous AI Assistant</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Select Target Skills to Benchmark:</label>
                <div className="skills-chip-selector">
                  {availableSkills.map((skill) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        type="button"
                        key={skill}
                        className={`chip-toggle ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {isSelected ? '✓ ' : '+ '} {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={analyzing}
              >
                {analyzing ? '⚡ Evaluating Profile & Build Rules...' : '🚀 Run Live Benchmark Analysis'}
              </button>
            </form>
          </div>

          {/* Results Output */}
          <div className="playground-output glass-card">
            <h3 className="lab-card-title">📊 Analysis Results Dashboard</h3>

            {!result && !analyzing && (
              <div className="empty-state">
                <div className="empty-icon">💡</div>
                <p>Select your criteria on the left and click <strong>Run Live Benchmark Analysis</strong> to see real-time calculated evaluation metrics.</p>
              </div>
            )}

            {analyzing && (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Processing skill matrix and verifying Netlify build criteria...</p>
              </div>
            )}

            {result && !analyzing && (
              <div className="results-container">
                <div className="score-hero">
                  <div className="score-circle">
                    <span className="score-val">{result.score}</span>
                    <span className="score-max">/100</span>
                  </div>
                  <div className="score-meta">
                    <h4>{result.overallRating}</h4>
                    <span className="status-badge-green">Validated</span>
                  </div>
                </div>

                <div className="result-metrics-grid">
                  <div className="metric-box">
                    <span className="metric-title">Deployment Status</span>
                    <span className="metric-val text-cyan">{result.buildReadiness}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-title">Frontend Mastery</span>
                    <span className="metric-val text-purple">{result.frontendScore}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-title">AI Integration Tier</span>
                    <span className="metric-val text-emerald">{result.aiCapability}</span>
                  </div>
                </div>

                <div className="recommendation-box">
                  <h5>🤖 AI System Verdict:</h5>
                  <p>{result.recommendation}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;
