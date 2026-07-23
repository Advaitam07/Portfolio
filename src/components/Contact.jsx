import React, { useState } from 'react';
import { Mail, Send, Terminal, Loader2, RefreshCw } from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionState, setSubmissionState] = useState('idle'); // idle, deploying, success
  const [logs, setLogs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all contact inputs first.");
      return;
    }

    setSubmissionState('deploying');
    setLogs(['[INFO] Contact form payload registered.', '[INFO] Preparing container mail-dispatcher-v1...']);

    // Sequence of simulated deployment logs
    const logSteps = [
      'Authenticating connection with AWS SES gateway in us-east-1...',
      'Setting secure TLS handshake on port 587...',
      `Injecting package variables: { Sender: "${formData.name}", Email: "${formData.email}" }`,
      'Validating payload size and protection tokens...',
      'SUCCESS: Transaction request completed, Message ID: ses-msg-8a29cf47',
      'SUCCESS: Message successfully dispatched to mailbox: adityapradipsharma@gmail.com',
      'SUCCESS: Container terminated with exit code 0.'
    ];

    for (let i = 0; i < logSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 200));
      setLogs(prev => [...prev, `[LOG] ${logSteps[i]}`]);
    }

    setSubmissionState('success');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmissionState('idle');
    setLogs([]);
  };

  return (
    <section id="contact" className="section" style={styles.section}>
      <div className="radial-glow" style={{ top: '15%', left: '10%', background: 'radial-gradient(circle, var(--aws-orange-glow) 0%, transparent 70%)' }}></div>
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrapper">
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact <span>Me</span></h2>
        </div>

        {/* Contact Split Layout */}
        <div style={styles.split}>
          {/* Info Side */}
          <div style={styles.infoCol}>
            <h3 style={styles.infoTitle}>Connect with me</h3>
            <p style={styles.infoText}>
              Have an internship role, freelance requirement, or want to talk cloud architectures? Feel free to reach out via email or connect with me on professional platforms!
            </p>

            <div style={styles.linksContainer}>
              <a href="mailto:adityapradipsharma@gmail.com" style={styles.infoLink} className="glass-card">
                <div style={{ ...styles.iconCircle, backgroundColor: 'var(--aws-orange-glow)', borderColor: 'rgba(255,153,0,0.15)' }}>
                  <Mail size={18} color="var(--aws-orange)" />
                </div>
                <div>
                  <h4 style={styles.linkLabel}>Email Direct</h4>
                  <p style={styles.linkValue}>adityapradipsharma@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/aditya-sharma-73b377363" target="_blank" rel="noopener noreferrer" style={styles.infoLink} className="glass-card">
                <div style={{ ...styles.iconCircle, backgroundColor: 'var(--devops-blue-glow)', borderColor: 'rgba(0,210,255,0.15)' }}>
                  <Linkedin size={18} color="var(--devops-blue)" />
                </div>
                <div>
                  <h4 style={styles.linkLabel}>LinkedIn</h4>
                  <p style={styles.linkValue}>www.linkedin.com/in/aditya-sharma-73b377363</p>
                </div>
              </a>

              <a href="https://https://github.com/Advaitam07" target="_blank" rel="noopener noreferrer" style={styles.infoLink} className="glass-card">
                <div style={{ ...styles.iconCircle, backgroundColor: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.15)' }}>
                  <Github size={18} color="var(--success-green)" />
                </div>
                <div>
                  <h4 style={styles.linkLabel}>GitHub</h4>
                  <p style={styles.linkValue}>https://github.com/Advaitam07</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form / Log Terminal Side */}
          <div className="glass-card" style={styles.formCard}>
            {submissionState === 'idle' ? (
              <form onSubmit={handleFormSubmit} style={styles.form}>
                <h3 style={styles.formTitle}>Send Message</h3>
                <div style={styles.inputGroup}>
                  <label htmlFor="name" style={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label htmlFor="email" style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label htmlFor="message" style={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ ...styles.input, ...styles.textarea }}
                    placeholder="Write your message here..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
                  Deploy Message <Send size={16} />
                </button>
              </form>
            ) : (
              /* Simulated AWS SES deployment shell */
              <div style={styles.terminal}>
                <div style={styles.terminalHeader}>
                  <div style={styles.controls}>
                    <span style={{ ...styles.dot, backgroundColor: '#EF4444' }}></span>
                    <span style={{ ...styles.dot, backgroundColor: '#F59E0B' }}></span>
                    <span style={{ ...styles.dot, backgroundColor: '#10B981' }}></span>
                  </div>
                  <div style={styles.terminalTitle}>
                    <Terminal size={12} style={{ marginRight: '5px' }} /> mailer-agent.sh
                  </div>
                </div>

                <div style={styles.terminalScreen}>
                  {logs.map((log, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        ...styles.logLine, 
                        color: log.includes('SUCCESS') ? 'var(--success-green)' : log.includes('[INFO]') ? 'var(--devops-blue)' : '#FFFFFF' 
                      }}
                    >
                      {log}
                    </div>
                  ))}
                  {submissionState === 'deploying' && (
                    <div style={styles.loadingLine}>
                      <Loader2 size={14} style={{ marginRight: '6px', animation: 'spin 1.5s infinite linear' }} />
                      Executing mail transport payload...
                    </div>
                  )}
                </div>

                {submissionState === 'success' && (
                  <button onClick={handleReset} className="btn btn-secondary" style={styles.resetBtn}>
                    <RefreshCw size={14} style={{ marginRight: '5px' }} /> Dispatch Another Mail
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative'
  },
  split: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'stretch'
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px'
  },
  infoTitle: {
    fontSize: '1.75rem',
    color: '#FFFFFF'
  },
  infoText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'var(--color-text-secondary)'
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '10px'
  },
  infoLink: {
    padding: '18px 22px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'var(--transition-fast)'
  },
  iconCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  linkLabel: {
    fontSize: '0.75rem',
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  linkValue: {
    fontSize: '1rem',
    color: '#FFFFFF',
    fontWeight: '500',
    marginTop: '2px'
  },
  formCard: {
    padding: '35px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  formTitle: {
    fontSize: '1.5rem',
    marginBottom: '5px',
    color: '#FFFFFF'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '0.8rem',
    color: 'var(--color-text-secondary)',
    fontWeight: '500'
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    padding: '10px 14px',
    color: '#FFFFFF',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'var(--transition-fast)'
  },
  textarea: {
    minHeight: '120px',
    resize: 'vertical'
  },
  submitBtn: {
    marginTop: '10px',
    padding: '0.75rem 1.5rem',
    fontSize: '0.9rem'
  },
  terminal: {
    backgroundColor: '#070A13',
    borderRadius: '8px',
    border: '1px solid rgba(255, 153, 0, 0.2)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '340px'
  },
  terminalHeader: {
    backgroundColor: '#0F1322',
    height: '34px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px',
    userSelect: 'none'
  },
  controls: {
    display: 'flex',
    gap: '6px'
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%'
  },
  terminalTitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)'
  },
  terminalScreen: {
    flexGrow: 1,
    padding: '15px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.78rem',
    color: '#E5E7EB',
    lineHeight: '1.6',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    overflowY: 'auto'
  },
  logLine: {
    animation: 'serverLogFade 0.2s ease forwards'
  },
  loadingLine: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--devops-blue)',
    marginTop: '5px'
  },
  resetBtn: {
    margin: '15px',
    fontSize: '0.8rem',
    padding: '0.5rem 1rem',
    alignSelf: 'flex-start'
  }
};

export default Contact;
