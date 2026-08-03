import React, { useState } from 'react';

const Playground = () => {
  const [candidateRole, setCandidateRole] = useState('AI Engineer & Full-Stack');
  const [selectedSkills, setSelectedSkills] = useState(['React 19', 'Python/AI', 'Netlify Deploy', 'Vite']);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const availableSkills = [
    'React 19', 'Python/AI', 'Netlify Deploy', 'Vite', 'Node.js', 
    'TypeScript', 'LLM Prompting', 'CSS Architecture', 'REST APIs', 'Git CI/CD'
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
      const score = Math.min(100, 72 + selectedSkills.length * 3);
      setResult({
        score,
        status: 'READY_FOR_PRODUCTION',
        netlifyCheck: selectedSkills.includes('Netlify Deploy') || selectedSkills.includes('Vite') ? 'PASSED (netlify.toml OK)' : 'PASSED',
        verdict: `Profile verified for ${candidateRole}. Core skills align with production deployment standards.`
      });
      setAnalyzing(false);
    }, 600);
  };

  return (
    <section id="playground" className="section-padding playground-section-clean">
      <div className="container">
        <div className="section-header-left">
          <span className="mono-tag">—— INTERACTIVE AI LAB // 005</span>
          <h2 className="section-title">Live System Benchmark</h2>
        </div>

        <div className="lab-grid-clean">
          <div className="lab-panel-clean">
            <h3 className="panel-title-mono">TEST_PARAMS // INPUT</h3>

            <form onSubmit={handleRunAnalysis}>
              <div className="form-group-clean">
                <label className="form-label-mono">Target Role:</label>
                <select 
                  value={candidateRole} 
                  onChange={(e) => setCandidateRole(e.target.value)}
                  className="input-select-clean"
                >
                  <option value="AI Engineer & Full-Stack">AI Engineer & Full-Stack Developer</option>
                  <option value="Frontend Architect (React 19)">Frontend Architect (React 19)</option>
                  <option value="LLM Integration Specialist">LLM Integration Specialist</option>
                </select>
              </div>

              <div className="form-group-clean">
                <label className="form-label-mono">Benchmark Skill Modules:</label>
                <div className="chips-row">
                  {availableSkills.map((skill) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        type="button"
                        key={skill}
                        className={`chip-btn-clean ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {isSelected ? '✓ ' : '+ '} {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button type="submit" className="btn-primary-blue btn-full" disabled={analyzing}>
                {analyzing ? 'EXECUTING BENCHMARK...' : 'RUN LIVE EVALUATION →'}
              </button>
            </form>
          </div>

          <div className="lab-panel-clean">
            <h3 className="panel-title-mono">TELEMETRY // OUTPUT</h3>

            {!result && !analyzing && (
              <div className="output-placeholder">
                <span className="mono-tag">STATUS: WAITING_FOR_INPUT</span>
                <p>Select modules on the left and trigger evaluation.</p>
              </div>
            )}

            {analyzing && (
              <div className="output-placeholder">
                <span className="mono-tag text-cyan">STATUS: RUNNING_BENCHMARK...</span>
              </div>
            )}

            {result && !analyzing && (
              <div className="result-display-clean">
                <div className="result-score-box">
                  <span className="score-num-clean">{result.score}</span>
                  <span className="score-label-mono">SCORE / 100</span>
                </div>

                <div className="result-spec-row">
                  <span className="spec-key">STATUS:</span>
                  <span className="spec-val text-emerald">{result.status}</span>
                </div>
                <div className="result-spec-row">
                  <span className="spec-key">NETLIFY BUILD:</span>
                  <span className="spec-val text-cyan">{result.netlifyCheck}</span>
                </div>

                <div className="verdict-box">
                  <p>{result.verdict}</p>
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
