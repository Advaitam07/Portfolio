import React, { useState, useEffect } from 'react';
import { FileText, ArrowDown, ArrowRight } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';

const Hero = () => {
  const titles = [
    'AWS Cloud Specialist',
    'DevOps Practitioner',
    'Linux System Administrator',
    'Software Developer'
  ];

  const [text, setText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentFullText = titles[titleIdx];

    if (isDeleting) {
      // Deleting speed
      setSpeed(60);
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length - 1));
      }, speed);
    } else {
      // Typing speed
      setSpeed(120);
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length + 1));
      }, speed);
    }

    // Switch state triggers
    if (!isDeleting && text === currentFullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIdx]);

  return (
    <section id="hero" style={styles.section}>
      <div className="grid-bg"></div>
      <div className="radial-glow" style={{ top: '10%', left: '5%' }}></div>
      <div className="radial-glow" style={{ bottom: '15%', right: '5%', background: 'radial-gradient(circle, var(--devops-blue-glow) 0%, transparent 70%)' }}></div>

      <div className="container" style={styles.container}>
        <div style={styles.grid}>
          {/* Text Branding Column */}
          <div style={styles.introCol}>
            <div style={styles.badge}>
              <span style={styles.badgePulse}></span>
              <span>Available for Internships &amp; Roles</span>
            </div>
            
            <h1 style={styles.mainTitle}>
              Hi, I'm <span style={styles.nameText}>Aditya Sharma</span>
            </h1>
            
            <h2 style={styles.typingSub}>
              An aspiring <span style={styles.dynamicText}>{text}</span>
              <span style={styles.cursor}>|</span>
            </h2>

            <p style={styles.description}>
              IT Engineering student specializing in automating infrastructure, orchestrating containers, and deploying robust cloud architectures on AWS. I design pipelines that deploy at speed.
            </p>

            <div style={styles.actions}>
              <a href="#projects" className="btn btn-primary" style={styles.btn}>
                Explore Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary" style={styles.btn}>
                Get In Touch
              </a>
              <a 
                href="/resume.pdf" 
                download="Aditya Sharma_Resume.pdf" 
                className="btn btn-outline" 
                style={{ ...styles.btn, borderStyle: 'dashed' }}
                onClick={(e) => {
                  // If resume file isn't uploaded, we provide nice fallback alert
                  alert("Resume downloading... (Mock File Download Triggered. Add your resume.pdf to 'public/' directory to activate)");
                }}
              >
                <FileText size={16} /> CV.pdf <ArrowDown size={16} />
              </a>
            </div>
          </div>

          {/* Interactive Terminal Column */}
          <div style={styles.terminalCol}>
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '100px',
    paddingBottom: '50px',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    position: 'relative',
    zIndex: 2
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '40px',
    alignItems: 'center',
    width: '100%'
  },
  introCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(16, 185, 129, 0.08)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    color: '#10B981',
    padding: '6px 14px',
    borderRadius: '9999px',
    fontSize: '0.8rem',
    fontWeight: '600',
    alignSelf: 'flex-start',
    fontFamily: 'var(--font-mono)'
  },
  badgePulse: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10B981',
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'pulseGlow 2s infinite'
  },
  mainTitle: {
    fontSize: '3.5rem',
    lineHeight: '1.1',
    color: '#FFFFFF'
  },
  nameText: {
    background: 'linear-gradient(135deg, var(--aws-orange) 0%, var(--devops-blue) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '800'
  },
  typingSub: {
    fontSize: '1.75rem',
    color: '#E5E7EB',
    minHeight: '42px',
    fontWeight: '600'
  },
  dynamicText: {
    color: 'var(--devops-blue)'
  },
  cursor: {
    color: 'var(--aws-orange)',
    animation: 'typingBlink 0.8s infinite',
    marginLeft: '3px'
  },
  description: {
    fontSize: '1.05rem',
    color: 'var(--color-text-secondary)',
    maxWidth: '540px',
    lineHeight: '1.7'
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '15px'
  },
  btn: {
    padding: '0.85rem 1.6rem',
    fontSize: '0.9rem'
  },
  terminalCol: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
};

// Let's add styling for mobile grid stacking in index.css so it overrides beautifully.
export default Hero;
