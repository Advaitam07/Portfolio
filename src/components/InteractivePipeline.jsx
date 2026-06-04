import React, { useState, useEffect, useRef } from 'react';
import { GitBranch, Wrench, CheckCircle, Package, Send, Play, RefreshCw } from 'lucide-react';

function InteractivePipeline() {
  const [pipelineState, setPipelineState] = useState('idle'); // idle, running, success
  const [activeStage, setActiveStage] = useState(-1); // index of active stage
  const [logs, setLogs] = useState([]);
  const [stageStatuses, setStageStatuses] = useState(['idle', 'idle', 'idle', 'idle', 'idle']); // idle, running, success
  const logEndRef = useRef(null);

  const stages = [
    { name: "Code Commit", icon: GitBranch, description: "Webhook Trigger" },
    { name: "Artifact Build", icon: Wrench, description: "Vite Compile" },
    { name: "Unit Testing", icon: CheckCircle, description: "PyTest Suite" },
    { name: "Dockerize", icon: Package, description: "AWS ECR Push" },
    { name: "AWS Deploy", icon: Send, description: "ECS/EKS Release" }
  ];

  const stageLogs = [
    [
      "Connecting to GitHub Webhook listener...",
      "Event received: push on repository: main",
      "Commit ID: ac7d0fa - Author: student@aws-shell",
      "Fetching branch info... origin/main ready.",
      "STAGE 1 COMPLETE: Source code checkout success."
    ],
    [
      "Initializing environment variables...",
      "Running npm install --frozen-lockfile...",
      "Compiling source files using Vite builder...",
      "Assets optimized (size: 412kB). Chunk split complete.",
      "STAGE 2 COMPLETE: Production bundle output saved to dist/."
    ],
    [
      "Triggering test runner...",
      "Running pytest tests/cloud_boto3_test.py...",
      "Running frontend vitest assertions...",
      "PASS: AWS Lambda trigger test (0.04s)",
      "PASS: SPA Route hydration matches (0.12s)",
      "All 12 unit tests passed. Code Coverage: 94.6%",
      "STAGE 3 COMPLETE: Test metrics approved."
    ],
    [
      "Reading local Dockerfile... Multi-stage architecture detected.",
      "Executing Step 1/8: FROM node:18-alpine...",
      "Executing Step 5/8: COPY --from=builder /app/dist...",
      "Compressing layer filesystems... Image size: 48.2 MB",
      "Logging in to AWS Elastic Container Registry (ECR)...",
      "Pushing image student-portfolio:latest to AWS ECR registry...",
      "SHA256 digest: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "STAGE 4 COMPLETE: Docker ECR release published."
    ],
    [
      "Initializing AWS CLI authentication tokens...",
      "Fetching Amazon ECS Service Status... Active.",
      "Applying rolling updates to cluster nodes...",
      "Running Database migrations (RDS MySQL updates)... Done.",
      "Routing network interfaces via Application Load Balancer (ALB)...",
      "DNS propagation check: student-portfolio.awsdevops.student [OK]",
      "STAGE 5 COMPLETE: Application successfully live in Staging VPC!"
    ]
  ];

  const runPipeline = async () => {
    if (pipelineState === 'running') return;

    setPipelineState('running');
    setLogs(["[SYSTEM] Initiating DevOps automation pipeline trigger..."]);
    setStageStatuses(['idle', 'idle', 'idle', 'idle', 'idle']);
    setActiveStage(0);

    for (let i = 0; i < stages.length; i++) {
      setActiveStage(i);
      
      // Update stage status to running
      setStageStatuses(prev => {
        const next = [...prev];
        next[i] = 'running';
        return next;
      });

      setLogs(prev => [...prev, `\n>>> STARTING STAGE ${i + 1}: ${stages[i].name} <<<`]);

      // Print logs sequentially
      const logsForStage = stageLogs[i];
      for (const logLine of logsForStage) {
        await new Promise(resolve => setTimeout(resolve, 350));
        setLogs(prev => [...prev, `[LOG] ${logLine}`]);
      }

      // Update stage status to success
      setStageStatuses(prev => {
        const next = [...prev];
        next[i] = 'success';
        return next;
      });

      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setPipelineState('success');
    setActiveStage(-1);
    setLogs(prev => [...prev, "\n[SUCCESS] CI/CD pipeline finished successfully. Deploy state: ACTIVE."]);
  };

  const getStageColor = (status, isActive) => {
    if (status === 'success') return 'var(--success)';
    if (status === 'running') return 'var(--secondary)';
    if (isActive) return 'var(--primary)';
    return 'var(--text-muted)';
  };

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto 0 auto' }}>
      {/* Pipeline Diagram */}
      <div className="glass-panel" style={{
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        {/* Stages list */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          flexWrap: 'wrap',
          gap: '2rem'
        }} className="pipeline-flex">
          {/* Connector Line */}
          <div style={{
            position: 'absolute',
            top: '25px',
            left: '5%',
            width: '90%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            zIndex: 1
          }} className="pipeline-line" />

          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const status = stageStatuses[idx];
            const isActive = activeStage === idx;
            const borderCol = getStageColor(status, isActive);
            
            return (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 2,
                flex: '1 1 0px',
                minWidth: '100px'
              }}>
                {/* Node circle */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: status === 'running' ? 'rgba(0, 210, 255, 0.1)' : 'var(--bg-secondary)',
                  border: `2px solid ${borderCol}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: borderCol,
                  boxShadow: status === 'running' ? '0 0 15px rgba(0, 210, 255, 0.3)' : status === 'success' ? '0 0 15px rgba(16, 185, 129, 0.2)' : 'none',
                  animation: status === 'running' ? 'pulse-cyan 1.5s infinite' : 'none',
                  transition: 'var(--transition-smooth)'
                }}>
                  {status === 'running' ? (
                    <RefreshCw size={22} className="spinning" style={{ animation: 'spin-slow 2s linear infinite' }} />
                  ) : (
                    <Icon size={22} />
                  )}
                </div>

                <div style={{ textAlign: 'center' }}>
                  <h4 style={{
                    fontSize: '0.85rem',
                    color: isActive ? 'var(--secondary)' : '#ffffff',
                    fontWeight: 600
                  }}>{stage.name}</h4>
                  <span style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)'
                  }}>{stage.description}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <button
          onClick={runPipeline}
          disabled={pipelineState === 'running'}
          className={`btn ${pipelineState === 'running' ? 'btn-tertiary' : 'btn-primary'}`}
          style={{
            minWidth: '200px',
            marginTop: '1rem'
          }}
        >
          {pipelineState === 'running' ? (
            <>
              <RefreshCw size={16} className="spinning" style={{ animation: 'spin-slow 2s linear infinite' }} /> Running Pipeline...
            </>
          ) : (
            <>
              <Play size={16} /> Run Pipeline Simulation
            </>
          )}
        </button>
      </div>

      {/* Log Console Output */}
      <div style={{
        backgroundColor: '#0F172A',
        borderRadius: '12px',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
        padding: '1.5rem',
        height: '240px',
        overflowY: 'auto',
        fontFamily: 'Consolas, Monaco, "Courier New", Courier, monospace',
        fontSize: '0.85rem',
        lineHeight: 1.6,
        color: '#E2E8F0'
      }}>
        {logs.length === 0 ? (
          <span style={{ color: 'var(--text-muted)' }}>Console idle. Click "Run Pipeline Simulation" to view outputs.</span>
        ) : (
          logs.map((log, idx) => {
            let color = '#E2E8F0';
            if (log.startsWith('>>>')) color = 'var(--secondary)';
            else if (log.startsWith('[SYSTEM]')) color = 'var(--primary)';
            else if (log.includes('COMPLETE') || log.includes('SUCCESS')) color = 'var(--success)';
            
            return (
              <div key={idx} style={{ color, whiteSpace: 'pre-wrap' }}>
                {log}
              </div>
            );
          })
        )}
        <div ref={logEndRef} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pipeline-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .pipeline-line {
            display: none !important;
          }
          .pipeline-flex > div {
            flex-direction: row !important;
            align-items: center !important;
            width: 100% !important;
            text-align: left !important;
          }
          .pipeline-flex > div > div {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}

export default InteractivePipeline;
