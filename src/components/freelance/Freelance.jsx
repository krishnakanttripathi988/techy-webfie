// src/components/freelance/Freelance.jsx
import React, { useState, useEffect } from 'react';

export default function Freelance() {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && progress < 100) {
      timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + Math.ceil(Math.random() * 15), 100));
      }, 300);
    } else if (progress >= 100) {
      setRunning(false);
    }
    return () => clearTimeout(timer);
  }, [running, progress]);

  const startDiagnostic = () => {
    if (!running) {
      setProgress(0);
      setRunning(true);
    }
  };

  const containerStyle = {
    background: '#111',
    color: '#50fa7b',
    fontFamily: 'monospace',
    padding: '2rem',
    maxWidth: '600px',
    margin: '4rem auto',
    border: '2px solid #6272a4',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 0 12px rgba(80,250,123,0.3)',
  };
  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.75rem 1.25rem',
    background: running ? '#6272a4' : '#8be9fd',
    color: '#282a36',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'monospace',
    fontSize: '1rem',
    transition: 'background 0.2s',
  };
  const barContainer = {
    width: '100%',
    height: '1rem',
    background: '#282a36',
    borderRadius: '4px',
    margin: '1rem 0',
    overflow: 'hidden',
  };
  const barStyle = {
    width: `${progress}%`,
    height: '100%',
    background: 'linear-gradient(90deg, #50fa7b, #8be9fd)',
    transition: 'width 0.3s',
  };

  return (
    <div style={containerStyle}>
      <pre style={{ margin: 0, color: '#ff5555', fontSize: '1rem' }}>
      {`   .--.
  |o_o |
  |:_/ |
  |    |
  '|  |'
   '--'`}
      </pre>
      <h1 style={{ margin: '1rem 0', color: '#ff79c6' }}>🚧 Under Maintenance 🚧</h1>
      <p>Oops! The Freelance Dashboard is taking an espresso break. ☕️</p>
      <button style={buttonStyle} onClick={startDiagnostic}>
        {running ? 'Running Self-Diagnostic...' : 'Run Self-Diagnostic'}
      </button>
      {(running || progress === 100) && (
        <>
          <div style={barContainer}>
            <div style={barStyle}></div>
          </div>
          {progress >= 100 && (
            <p style={{ color: '#ffb86c', margin: '0.5rem 0' }}>
              ✅ Diagnostics complete. Hold tight—we'll be back online soon!
            </p>
          )}
        </>
      )}
    </div>
  );
}
