import React, { useState, useRef, useEffect } from 'react';

function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { text: "AWS-CLI Version: 2.15.22 / Python 3.11.6", type: "system" },
    { text: "Connected to instance: i-0fa39281a8b910ee2 (Ubuntu 22.04 LTS)", type: "system" },
    { text: "Type 'help' to view all available commands.", type: "prompt" }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: [
      "Available commands:",
      "  help       - Display this list of options",
      "  skills     - List cloud, devops, development proficiencies",
      "  projects   - Show engineering projects with descriptions",
      "  experience - View professional timeline & background milestones",
      "  contact    - Retrieve contact methods & profiles",
      "  clear      - Clear the console output history",
      "  sudo cat resume.txt - Retrieve complete CV credentials"
    ],
    skills: [
      "=== CLOUD COMPUTING ===",
      "  AWS: EC2, S3, RDS, IAM, VPC, CloudWatch, Lambda",
      "",
      "=== DEVOPS & CI/CD ===",
      "  Docker, Kubernetes, Jenkins, GitHub Actions, Terraform",
      "",
      "=== PROGRAMMING & CORE ===",
      "  Python (Boto3 SDK), Java, JavaScript, Bash Shell Scripting",
      "",
      "=== TOOLS ===",
      "  Git, GitHub, Linux Administration (Ubuntu/RedHat)"
    ],
    projects: [
      "1. Portfolio Website [React, Vite, CSS, Netlify] -> Interactive SPA",
      "2. AWS Two-Tier Architecture [VPC, RDS, ALB, CloudFormation] -> High-availability system",
      "3. CI/CD Jenkins Pipeline [Docker, SonarQube, Slack] -> Automated test-deploy hook",
      "4. Docker Microservice Suit [Compose, Nginx, Alpine] -> Lightweight setups",
      "5. Kubernetes Cluster Setup [EKS, HPA, Prometheus, Grafana] -> Autoscaling cluster",
      "6. AWS Cost Optimization Tool [Lambda, Boto3, EventBridge] -> Auto-shut idle EC2 instances"
    ],
    experience: [
      "- Aditya Sharma - IT Engineering Student (Present)",
      "  Focusing on systems automation, virtualization, and cloud platforms.",
      "",
      "- Personal DevOps Sandbox Labs (2025 - Present)",
      "  Implemented continuous integration configurations, configured mock VPCs, and automated Linux backups.",
      "",
      "- Technical Open Source Contributor",
      "  Contributing configuration scripts and documentation updates to community repos."
    ],
    contact: [
      "Connecting to directory...",
      "  Email:    adityapradipsharma@gmail.com",
      "  LinkedIn: linkedin.com/in/aditya-sharma-73b377363",
      "  GitHub:   github.com/Advaitam07"
    ],
    clear: []
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    
    // Add command echo to history
    let newHistory = [...history, { text: `student@aws-shell:~$ ${cmdStr}`, type: "command" }];

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'sudo cat resume.txt') {
      newHistory = [
        ...newHistory,
        { text: "[sudo] authentication requested for administrator privileges", type: "system" },
        { text: "Verifying SSH signature... Success.", type: "success" },
        { text: "==================================================", type: "info" },
        { text: "NAME: Aditya Sharma", type: "info" },
        { text: "ROLE: Cloud & DevOps Engineer", type: "info" },
        { text: "AWS SKILLS: EC2, VPC, Lambda, CloudFormation, S3", type: "info" },
        { text: "DEVOPS SKILLS: Docker, Kubernetes, Jenkins, Terraform", type: "info" },
        { text: "LANGUAGES: Python, Java, JavaScript, Bash", type: "info" },
        { text: "==================================================", type: "info" }
      ];
    } else if (commands[trimmed]) {
      const outputLines = commands[trimmed].map(line => ({ text: line, type: "info" }));
      newHistory = [...newHistory, ...outputLines];
    } else if (trimmed !== '') {
      newHistory = [
        ...newHistory,
        { text: `bash: command not found: ${trimmed}. Type 'help' to review commands.`, type: "error" }
      ];
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={focusInput}
      style={{
        maxWidth: '800px',
        margin: '2rem auto 0 auto',
        cursor: 'text'
      }}
    >
      {/* Terminal Header */}
      <div style={{
        backgroundColor: '#1E293B',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        padding: '0.75rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
        </div>
        <span style={{
          color: 'var(--text-secondary)',
          fontSize: '0.8rem',
          fontFamily: 'monospace',
          fontWeight: 600
        }}>
          student@devops-workspace:~
        </span>
        <div style={{ width: '48px' }} />
      </div>

      {/* Terminal Screen Area */}
      <div style={{
        backgroundColor: '#0F172A',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        padding: '1.5rem',
        height: '400px',
        overflowY: 'auto',
        fontFamily: 'Consolas, Monaco, "Courier New", Courier, monospace',
        fontSize: '0.9rem',
        lineHeight: 1.5,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        border: '1px solid var(--glass-border)',
        borderTop: 'none',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
      }}>
        {history.map((line, idx) => {
          let color = '#F3F4F6';
          if (line.type === 'system') color = 'var(--text-muted)';
          else if (line.type === 'command') color = 'var(--primary)';
          else if (line.type === 'prompt') color = 'var(--secondary)';
          else if (line.type === 'error') color = '#EF4444';
          else if (line.type === 'success') color = 'var(--success)';
          else if (line.type === 'info') color = '#E2E8F0';

          return (
            <div key={idx} style={{ color, whiteSpace: 'pre-wrap' }}>
              {line.text}
            </div>
          );
        })}
        
        {/* Active Input Line */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--secondary)', marginRight: '0.5rem' }}>student@aws-shell:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--primary)',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              flexGrow: 1,
              caretColor: 'var(--secondary)'
            }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            aria-label="Terminal command prompt input"
          />
        </form>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}

export default InteractiveTerminal;
