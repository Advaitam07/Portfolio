import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ShieldAlert, Cpu, HardDrive, Wifi } from 'lucide-react';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Aditya Sharma OS v2.4.0-LTS (x86_64-pc-linux-gnu)' },
    { type: 'system', content: 'Welcome to Aditya Sharma\'s Cloud & DevOps Portfolio Terminal Shell!' },
    { type: 'system', content: 'Type "help" to view the list of available commands.' },
    { type: 'system', content: '' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Command configurations
  const commands = {
    help: [
      'Available commands:',
      '  help       - Display this list of commands',
      '  skills     - List cloud, devops, and developer skills',
      '  projects   - Show key portfolio projects',
      '  experience - Display career and education timeline',
      '  contact    - Print contact information and social handles',
      '  clear      - Clear terminal screen',
      '  sudo cat resume.txt - Print professional resume file'
    ],
    skills: [
      'AWS Cloud Services:',
      '  EC2, S3, RDS, VPC, IAM, Lambda, CloudWatch, Route53',
      '',
      'DevOps & Infrastructure:',
      '  Docker, Kubernetes, Jenkins, Git, GitHub Actions, Linux',
      '',
      'Programming & Automation:',
      '  Python (Boto3), Java, JavaScript (React, Node.js)',
      '',
      'Operating Systems:',
      '  Linux (Ubuntu, CentOS, RHEL, Amazon Linux)'
    ],
    projects: [
      'Deployments & Infrastructure Projects:',
      '  1. AWS Two-Tier Architecture - Auto Scaling & VPC security design',
      '  2. CI/CD DevOps Pipeline - Jenkins, Docker, and Kubernetes deployment',
      '  3. AWS Cost Optimizer - Automated S3 cleanup & unused resources script',
      '  4. Kubernetes Cluster deployment - High-availability pod architecture',
      '',
      'Type "sudo cat resume.txt" for more project highlights.'
    ],
    experience: [
      'Timeline & Learning Milestones:',
      '  [Present] IT Engineering Student - Specializing in Cloud Systems',
      '  [2025] DevOps & Cloud Intern - CI/CD pipeline automation & VPC setups',
      '  [2024] Personal Dev Projects - Full-stack cloud-native applications',
      '  [Ongoing] AWS Certified Solutions Architect Associate Prep'
    ],
    contact: [
      'Connect with me:',
      '  Email:    adityapradipsharma@gmail.com',
      '  GitHub:   https://github.com/Advaitam07',
      '  LinkedIn: www.linkedin.com/in/aditya-sharma-73b377363'
    ],
    'sudo cat resume.txt': [
      '========================================================================',
      '                       Aditya Sharma - CLOUD & DEVOPS ENGINEER',
      '========================================================================',
      'EDUCATION:',
      '  Bachelor of Technology in Information Technology',
      '  Focus: Distributed Systems, Cloud Architecture, DevOps Methodologies',
      '',
      'PROFESSIONAL SUMMARY:',
      '  Highly motivated IT Engineering student focusing on cloud operations,',
      '  continuous integration/deployment, and container orchestration.',
      '  Passionate about automate-everything methodologies and infrastructure as code.',
      '',
      'TECHNICAL SPECIALTIES:',
      '  - Amazon Web Services (VPC, IAM, CloudWatch, Lambda, S3, RDS, EC2)',
      '  - CI/CD Pipelines (Jenkins, GitHub Actions, GitLab CI)',
      '  - Containerization & Orchestration (Docker, Kubernetes/EKS)',
      '  - Programming Languages: Python, Java, JavaScript, Shell Scripting',
      '========================================================================'
    ]
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    const commandLower = trimmed.toLowerCase();
    
    // Track Command Output
    let response = [];
    let isCommandValid = false;

    if (commandLower === '') {
      response = [''];
      isCommandValid = true;
    } else if (commandLower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (commands[commandLower]) {
      response = commands[commandLower];
      isCommandValid = true;
    } else if (trimmed === 'sudo cat resume.txt') {
      response = commands['sudo cat resume.txt'];
      isCommandValid = true;
    } else if (trimmed.startsWith('sudo') && trimmed !== 'sudo cat resume.txt') {
      response = [
        'WARNING: Unauthorized access attempt registered.',
        '[sudo] password for guest: **********',
        'Sorry, user guest is not allowed to execute commands as root, except "sudo cat resume.txt".'
      ];
      isCommandValid = true;
    } else {
      response = [
        `bash: ${trimmed}: command not found`,
        'Type "help" to see available command list.'
      ];
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', content: cmdStr },
      ...response.map(line => ({ 
        type: isCommandValid ? 'output' : 'error', 
        content: line 
      })),
      { type: 'system', content: '' } // blank spacer
    ]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  // Scroll to bottom on updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input when terminal container clicked
  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="terminal-container glass-card" onClick={focusTerminal} style={styles.terminalContainer}>
      {/* Terminal Title Bar */}
      <div style={styles.titleBar}>
        <div style={styles.windowControls}>
          <span style={{ ...styles.dot, backgroundColor: '#EF4444' }}></span>
          <span style={{ ...styles.dot, backgroundColor: '#F59E0B' }}></span>
          <span style={{ ...styles.dot, backgroundColor: '#10B981' }}></span>
        </div>
        <div style={styles.title}>
          <Terminal size={14} style={{ marginRight: '6px' }} />
          guest@Aditya Sharma-devops-sh: ~
        </div>
        <div style={styles.sysStats}>
          <span style={styles.statItem}><Cpu size={12} /> AWS-EC2</span>
          <span style={styles.statItem}><HardDrive size={12} /> S3-Mounted</span>
        </div>
      </div>

      {/* Terminal Content Screen */}
      <div style={styles.screen}>
        {history.map((log, index) => {
          if (log.type === 'input') {
            return (
              <div key={index} style={styles.line}>
                <span style={styles.prompt}>guest@Aditya Sharma-devops-sh:~$</span>{' '}
                <span style={styles.inputText}>{log.content}</span>
              </div>
            );
          }
          if (log.type === 'error') {
            return (
              <div key={index} style={{ ...styles.line, color: '#EF4444' }}>
                <ShieldAlert size={14} style={{ marginRight: '6px', display: 'inline' }} />
                {log.content}
              </div>
            );
          }
          if (log.type === 'system') {
            return (
              <div key={index} style={{ ...styles.line, color: '#10B981' }}>
                {log.content}
              </div>
            );
          }
          return (
            <div key={index} style={styles.line}>
              {log.content}
            </div>
          );
        })}
        <div ref={terminalEndRef} />

        {/* Input Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <span style={styles.prompt}>guest@Aditya Sharma-devops-sh:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <span style={styles.cursor}></span>
        </form>
      </div>
    </div>
  );
};

// Inline CSS Styles for absolute styling consistency
const styles = {
  terminalContainer: {
    fontFamily: "var(--font-mono)",
    width: '100%',
    maxHeight: '450px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid rgba(255, 153, 0, 0.2)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 153, 0, 0.15)',
    animation: 'pulseGlow 8s infinite alternate',
    fontSize: '0.9rem',
    borderRadius: '10px'
  },
  titleBar: {
    height: '38px',
    backgroundColor: '#0F131E',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px',
    userSelect: 'none'
  },
  windowControls: {
    display: 'flex',
    gap: '6px'
  },
  dot: {
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  title: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500'
  },
  sysStats: {
    display: 'flex',
    gap: '12px',
    color: '#6B7280',
    fontSize: '0.75rem',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  screen: {
    flexGrow: 1,
    padding: '15px',
    backgroundColor: 'rgba(10, 15, 26, 0.95)',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    color: '#E5E7EB'
  },
  line: {
    whiteSpace: 'pre-wrap',
    minHeight: '20px',
    lineHeight: '1.5'
  },
  prompt: {
    color: 'var(--aws-orange)',
    fontWeight: 'bold'
  },
  inputText: {
    color: '#FFFFFF'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative'
  },
  input: {
    flexGrow: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#FFFFFF',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    paddingLeft: '8px',
    caretColor: 'var(--devops-blue)',
  }
};

export default InteractiveTerminal;
