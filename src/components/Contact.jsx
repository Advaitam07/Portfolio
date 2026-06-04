import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Send, RefreshCw, Terminal, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logs, setLogs] = useState([]);
  const [success, setSuccess] = useState(false);
  const logEndRef = useRef(null);

  const serverlessLogs = [
    "AWS API Gateway: POST /contact route triggered. Origin validation passed.",
    "API Gateway: Injecting Lambda payload integration: Event Version 2.0...",
    "AWS Lambda: Initializing python3.11 container env (Cold Start: 0.18s)...",
    "Lambda-Handler: Fetching event details... extracting body fields.",
    "Lambda-Handler: Validating data schemas (checking emails & strings)...",
    "Lambda-Handler: Connecting to AWS DynamoDB client: region us-east-1...",
    "DynamoDB: Executing PutItem statement on table 'UserContactMessages'...",
    "DynamoDB: [OK] Item created successfully. ItemID: contact-uuid-987123-a1.",
    "Lambda-Handler: Triggering AWS SNS event handler 'ContactFormAlert'...",
    "SNS-Client: Publishing message to TopicARN: arn:aws:sns:us-east-1:123456:ContactFormAlert...",
    "SNS-Client: [OK] Notification dispatched to Administrator Email.",
    "AWS Lambda: Function execution duration: 422 ms. Memory used: 128 MB.",
    "AWS API Gateway: Returning status: 200 OK. Content-Type: application/json."
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSuccess(false);
    setLogs(["[SYSTEM] Initiating serverless route submission..."]);

    for (const logLine of serverlessLogs) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setLogs(prev => [...prev, `[AWS-INFRA] ${logLine}`]);
    }

    setIsSubmitting(false);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div style={{
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Connection</span>
          <h2 className="section-title">Contact & Socials</h2>
        </div>

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '0.8fr 1.2fr',
          gap: '4rem'
        }}>
          {/* Left Column: Social Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem', fontFamily: 'var(--font-title)' }}>
                Let's Discuss Projects
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '2rem' }}>
                Feel free to reach out to me for internship positions, freelance engineering, cloud systems optimization, or system administration collaboration.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a
                  href="mailto:adityapradipsharma@gmail.com"
                  className="contact-social-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div className="social-icon-wrapper" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}><Mail size={20} /></div>
                  <span>adityapradipsharma@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Advaitam07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div className="social-icon-wrapper" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary)'
                  }}><Github size={20} /></div>
                  <span>github.com/Advaitam07</span>
                </a>

                <a
                  href="https://linkedin.com/in/aditya-sharma-73b377363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div className="social-icon-wrapper" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--success)'
                  }}><Linkedin size={20} /></div>
                  <span>aditya-sharma-73b377363</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form or Deployment Simulation */}
          <div className="glass-panel" style={{
            padding: '2.5rem',
            position: 'relative'
          }}>
            {isSubmitting || logs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-title)'
                }}>
                  <Terminal size={18} style={{ color: 'var(--primary)' }} /> AWS Lambda Execution Monitor
                </h3>
                
                {/* Console logs */}
                <div style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  padding: '1.25rem',
                  height: '260px',
                  overflowY: 'auto',
                  fontFamily: 'Consolas, Monaco, "Courier New", Courier, monospace',
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  color: '#94A3B8'
                }}>
                  {logs.map((log, idx) => {
                    let color = '#94A3B8';
                    if (log.includes('[OK]')) color = 'var(--success)';
                    else if (log.startsWith('[SYSTEM]')) color = 'var(--primary)';
                    else if (log.includes('Lambda-Handler')) color = 'var(--secondary)';
                    
                    return (
                      <div key={idx} style={{ color, whiteSpace: 'pre-wrap', marginBottom: '0.25rem' }}>
                        {log}
                      </div>
                    );
                  })}
                  <div ref={logEndRef} />
                </div>

                {success && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '8px',
                    padding: '1rem',
                    color: 'var(--success)'
                  }}>
                    <CheckCircle size={20} />
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message Route Executed</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>DynamoDB entry complete. I will respond to your email shortly.</p>
                    </div>
                  </div>
                )}

                {success && (
                  <button
                    onClick={() => { setLogs([]); setSuccess(false); }}
                    className="btn btn-tertiary"
                    style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
                  >
                    Send Another Message
                  </button>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontFamily: 'var(--font-title)' }}>Send a Message</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                      transition: 'var(--transition-smooth)'
                    }}
                    placeholder="Enter your name"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                      transition: 'var(--transition-smooth)'
                    }}
                    placeholder="name@company.com"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    placeholder="Describe your requirements or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  Submit Payload <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        .contact-social-link:hover {
          color: #ffffff !important;
        }
        .contact-social-link:hover .social-icon-wrapper {
          border-color: rgba(0, 210, 255, 0.4) !important;
          background-color: rgba(255, 255, 255, 0.06) !important;
        }
        input:focus, textarea:focus {
          border-color: var(--secondary) !important;
          box-shadow: var(--glow-cyan);
        }
      `}</style>
    </div>
  );
}

export default Contact;
