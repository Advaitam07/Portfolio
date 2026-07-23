import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Code, Cpu, ShieldCheck, Box, CloudLightning } from 'lucide-react';

const InteractivePipeline = () => {
  const [status, setStatus] = useState('idle'); // idle, running, completed, error
  const [currentStep, setCurrentStep] = useState(-1);
  const [logs, setLogs] = useState([]);
  
  const steps = [
    { name: 'Code', icon: Code, desc: 'Linting & Static Analysis' },
    { name: 'Build', icon: Cpu, desc: 'Webpack Production Bundle' },
    { name: 'Test', icon: ShieldCheck, desc: 'Unit & Integration Suites' },
    { name: 'Docker', icon: Box, desc: 'Image Build & AWS ECR Push' },
    { name: 'Deploy', icon: CloudLightning, desc: 'Rolling Update to AWS EKS' }
  ];

  const logMessages = [
    [
      'Cloning repository Aditya Sharmaam07/aws-devops-portfolio...',
      'Checking branch main, commit SHA: 8a7c29e...',
      'Running eslint rule check...',
      'SUCCESS: 0 linting errors found.'
    ],
    [
      'Running build script: npm run build...',
      'Generating optimized static assets...',
      'Chunks created successfully. Size: 1.2MB.',
      'SUCCESS: Webpack bundle ready.'
    ],
    [
      'Executing unit testing suite...',
      'Running jest verification on 24 test cases...',
      'All tests passed successfully (100% code coverage).',
      'SUCCESS: Test phase complete.'
    ],
    [
      'Creating container build context...',
      'Executing command: docker build -t portfolio:latest .',
      'Injecting production environment variables...',
      'Pushing image layers to AWS ECR: 123456789.dkr.ecr.us-east-1.amazonaws.com...',
      'SUCCESS: Image tag v1.0.4 registered.'
    ],
    [
      'Triggering rolling update for cluster deployment...',
      'Connecting to AWS EKS cluster api...',
      'Applying Helm charts deployment.yaml...',
      'Verifying pod health status: 3/3 active.',
      'SUCCESS: Traffic routed to new containers.'
    ]
  ];

  const runPipeline = async () => {
    if (status === 'running') return;
    setStatus('running');
    setLogs(['[INFO] Pipeline initiated by user command.']);
    
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      
      // Append stage starting log
      setLogs(prev => [...prev, `[STAGE: ${steps[i].name}] Launching...`]);
      
      // Simulate step progress logs
      for (let j = 0; j < logMessages[i].length; j++) {
        await new Promise(resolve => setTimeout(resolve, 350 + Math.random() * 200));
        setLogs(prev => [...prev, `  > ${logMessages[i][j]}`]);
      }
      
      setLogs(prev => [...prev, `[STAGE: ${steps[i].name}] Completed Successfully.`, '']);
      await new Promise(resolve => setTimeout(resolve, 400));
    }
    
    setCurrentStep(-1);
    setStatus('completed');
    setLogs(prev => [
      ...prev,
      '[PIPELINE SUCCESS] Release v1.0.4 deployed to AWS EC2/EKS production environment.',
      '[INFO] Deployment Health Status: green',
      `[INFO] Target Endpoint: https://portfolio.Aditya Sharma.dev/`
    ]);
  };

  const resetPipeline = () => {
    setStatus('idle');
    setCurrentStep(-1);
    setLogs([]);
  };

  return (
    <div className="glass-card" style={styles.container}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.title}>DevOps CI/CD Pipeline Simulator</h3>
          <p style={styles.subtitle}>Trigger a mock production deployment workflow to see container orchestration in action.</p>
        </div>
        <div style={styles.actions}>
          {status === 'completed' || status === 'running' ? (
            <button 
              onClick={resetPipeline} 
              disabled={status === 'running'} 
              className="btn btn-secondary" 
              style={{ ...styles.actionBtn, opacity: status === 'running' ? 0.5 : 1 }}
            >
              <RotateCcw size={16} /> Reset
            </button>
          ) : null}
          <button 
            onClick={runPipeline} 
            disabled={status === 'running'} 
            className="btn btn-primary" 
            style={styles.actionBtn}
          >
            <Play size={16} /> Trigger Build
          </button>
        </div>
      </div>

      {/* Visual Pipeline Grid */}
      <div style={styles.pipeline}>
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = currentStep === idx;
          const isCompleted = status === 'completed' || (currentStep > idx && status === 'running');
          
          let circleColor = 'rgba(255, 255, 255, 0.15)';
          let iconColor = 'var(--color-text-muted)';
          let glowStyle = {};

          if (isActive) {
            circleColor = 'rgba(0, 210, 255, 0.2)';
            iconColor = 'var(--devops-blue)';
            glowStyle = {
              border: '2px solid var(--devops-blue)',
              boxShadow: '0 0 15px rgba(0, 210, 255, 0.6)',
              animation: 'pulseGlowBlue 1.5s infinite alternate'
            };
          } else if (isCompleted) {
            circleColor = 'rgba(16, 185, 129, 0.2)';
            iconColor = 'var(--success-green)';
            glowStyle = {
              border: '2px solid var(--success-green)',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)'
            };
          }

          return (
            <React.Fragment key={idx}>
              {/* Pipeline Node */}
              <div style={styles.nodeWrapper}>
                <div style={{ ...styles.circle, ...glowStyle, backgroundColor: circleColor }}>
                  <StepIcon size={24} color={iconColor} />
                </div>
                <div style={styles.nodeLabel}>{step.name}</div>
                <div style={styles.nodeDesc}>{step.desc}</div>
              </div>

              {/* Connecting Line (except last item) */}
              {idx < steps.length - 1 && (
                <div style={styles.connectorContainer}>
                  <div 
                    style={{ 
                      ...styles.connectorLine, 
                      backgroundColor: isCompleted ? 'var(--success-green)' : isActive ? 'var(--devops-blue)' : 'rgba(255,255,255,0.08)' 
                    }} 
                  />
                  {isActive && (
                    <div className="flow-dot" style={styles.flowDot} />
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Rolling Console Output Log */}
      <div style={styles.consoleContainer}>
        <div style={styles.consoleHeader}>
          <span>AWS/EKS Deployment Logs</span>
          <span style={styles.statusIndicator}>
            STATUS: <span style={{ color: status === 'completed' ? 'var(--success-green)' : status === 'running' ? 'var(--devops-blue)' : '#9CA3AF' }}>
              {status.toUpperCase()}
            </span>
          </span>
        </div>
        <div style={styles.consoleScreen}>
          {logs.length === 0 ? (
            <span style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
              Pipeline idle. Waiting for trigger signals...
            </span>
          ) : (
            logs.map((log, lIdx) => (
              <div 
                key={lIdx} 
                style={{ 
                  ...styles.logLine,
                  color: log.includes('SUCCESS') || log.includes('PIPELINE SUCCESS')
                    ? 'var(--success-green)' 
                    : log.includes('[STAGE:') 
                      ? 'var(--devops-blue)' 
                      : '#E5E7EB'
                }}
              >
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    padding: '30px',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px'
  },
  title: {
    fontSize: '1.25rem',
    color: '#FFFFFF',
    marginBottom: '5px'
  },
  subtitle: {
    fontSize: '0.85rem',
    color: 'var(--color-text-secondary)'
  },
  actions: {
    display: 'flex',
    gap: '10px'
  },
  actionBtn: {
    fontSize: '0.85rem',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    height: '38px'
  },
  pipeline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
    overflowX: 'auto',
    width: '100%',
    gap: '10px'
  },
  nodeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '90px',
    textAlign: 'center'
  },
  circle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'all 0.4s ease'
  },
  nodeLabel: {
    fontWeight: '600',
    marginTop: '10px',
    fontSize: '0.9rem',
    color: '#FFFFFF'
  },
  nodeDesc: {
    fontSize: '0.7rem',
    color: 'var(--color-text-muted)',
    marginTop: '3px',
    maxWidth: '120px'
  },
  connectorContainer: {
    flexGrow: 1,
    height: '4px',
    position: 'relative',
    minWidth: '30px',
    display: 'flex',
    alignItems: 'center'
  },
  connectorLine: {
    width: '100%',
    height: '100%',
    borderRadius: '2px',
    transition: 'background-color 0.4s ease'
  },
  flowDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'var(--devops-blue)',
    position: 'absolute',
    left: '0',
    top: '-3px',
    boxShadow: '0 0 8px var(--devops-blue)',
    animation: 'pipelineFlow 1.2s infinite linear'
  },
  consoleContainer: {
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#070A13'
  },
  consoleHeader: {
    backgroundColor: '#0E1322',
    padding: '10px 15px',
    fontSize: '0.75rem',
    color: 'var(--color-text-secondary)',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
  },
  statusIndicator: {
    fontWeight: 'bold',
    fontFamily: 'var(--font-mono)'
  },
  consoleScreen: {
    padding: '15px',
    height: '180px',
    overflowY: 'auto',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: '1.6',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  logLine: {
    animation: 'serverLogFade 0.2s ease forwards',
    whiteSpace: 'pre-wrap'
  }
};

export default InteractivePipeline;
