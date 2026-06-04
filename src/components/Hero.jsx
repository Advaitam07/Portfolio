import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Cloud, Cpu, ArrowDown } from 'lucide-react';

function Hero() {
  const words = [
    "AWS Cloud Infrastructure",
    "DevOps Automation",
    "Kubernetes Orchestration",
    "CI/CD Pipeline Engineering",
    "Linux Systems Administration"
  ];
  
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullWord = words[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at end
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  // Fake Resume Download action
  const handleDownloadResume = () => {
    // Generate a mock resume text and trigger download
    const docContent = `=====================================================
CLOUD & DEVOPS ENGINEER PORTFOLIO RESUME
=====================================================

CONTACT INFO:
- Name: Aditya Sharma
- Email: adityapradipsharma@gmail.com
- Github: github.com/Advaitam07
- LinkedIn: linkedin.com/in/aditya-sharma-73b377363

EDUCATION:
- B.Tech in Information Technology Engineering (Ongoing)

CORE SPECIALIZATIONS:
- Cloud Computing: AWS (EC2, S3, RDS, IAM, VPC, CloudWatch, Lambda)
- DevOps & CI/CD: Jenkins, GitLab CI, GitHub Actions, Terraform
- Containers & Orchestration: Docker, Kubernetes
- Programming: Python, Java, JavaScript, Shell Scripting
- Systems: Linux Administration (Ubuntu/RedHat), Networking Fundamentals

CERTIFICATIONS (IN PROGRESS / EARNED):
- AWS Certified Cloud Practitioner (Earned)
- AWS Certified Solutions Architect - Associate (In Progress)
- HashiCorp Certified: Terraform Associate (In Progress)

PROJECTS METADATA:
1. Two-Tier AWS Architecture (VPC, Auto Scaling, RDS, ALB)
2. Jenkins CI/CD Pipeline (Docker build, SonarQube quality gate, EC2 deploy)
3. Kubernetes Cluster Deployment (EKS, Helm, Prometheus/Grafana)
4. Serverless Cost Optimizer (AWS Lambda, Python, EventBridge)

=====================================================
Thank you for downloading! Check my interactive terminal
and deploy pipeline on my website.
=====================================================`;
    const blob = new Blob([docContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DevOps_Cloud_Engineer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '8rem 0 4rem 0',
      overflow: 'hidden'
    }}>
      {/* Background Accent Gradients */}
      <div className="bg-accent-glow" style={{ top: '10%', left: '-10%' }} />
      <div className="bg-accent-glow" style={{ bottom: '15%', right: '-10%', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.04) 0%, transparent 70%)' }} />

      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem',
        alignItems: 'center',
        zIndex: 5
      }}>
        {/* Text Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(255, 153, 0, 0.08)',
            border: '1px solid rgba(255, 153, 0, 0.2)',
            borderRadius: '50px',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            alignSelf: 'flex-start',
            textTransform: 'uppercase'
          }}>
            <Terminal size={14} /> Ready to Automate & Scale
          </div>

          <h1 style={{
            fontSize: 'calc(2.2rem + 1.5vw)',
            lineHeight: 1.15,
            fontFamily: 'var(--font-title)',
            fontWeight: 800,
            letterSpacing: '-0.03em'
          }}>
            Hi, I'm <span style={{
              background: 'linear-gradient(135deg, #ffffff 50%, var(--primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255,153,0,0.1)'
            }}>Aditya Sharma</span>
          </h1>

          <div style={{
            fontSize: 'calc(1.1rem + 0.5vw)',
            fontFamily: 'var(--font-title)',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            Focused on&nbsp;
            <span style={{
              color: 'var(--secondary)',
              borderRight: '2px solid var(--secondary)',
              paddingRight: '4px',
              animation: 'cursor-blink 1s step-end infinite',
              fontWeight: 600
            }}>
              {currentText}
            </span>
          </div>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            maxWidth: '560px'
          }}>
            Specializing in designing secure, scalable AWS Cloud infrastructures, building automated Jenkins CI/CD integration pipelines, and orchestrating container workloads using Docker & Kubernetes.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <a href="#contact" className="btn btn-primary">
              Hire Me <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Work
            </a>
            <button onClick={handleDownloadResume} className="btn btn-tertiary">
              Download Resume <ArrowDown size={16} />
            </button>
          </div>
        </div>

        {/* Dynamic Graphic Card */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }} className="hero-graphic-container">
          <div className="glass-panel" style={{
            width: '100%',
            maxWidth: '440px',
            aspectRatio: '1',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            animation: 'float 6s ease-in-out infinite'
          }}>
            {/* Visual background cloud graphic */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.05,
              color: 'var(--secondary)',
              zIndex: 1
            }}>
              <Cloud size={300} />
            </div>

            {/* Glowing nodes simulating an infrastructure architecture */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem',
              width: '100%',
              height: '100%',
              padding: '1rem'
            }}>
              {/* VPC boundary decoration */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: '1.5px dashed rgba(0, 210, 255, 0.25)',
                borderRadius: '12px',
                pointerEvents: 'none'
              }} />
              <span style={{
                position: 'absolute',
                top: '6px',
                left: '12px',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-title)',
                color: 'var(--secondary)',
                fontWeight: 600,
                letterSpacing: '0.1em'
              }}>AWS VPC REGION</span>

              {/* Node 1: Code */}
              <div className="node-element" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1rem',
                backgroundColor: 'rgba(17, 24, 37, 0.8)'
              }}>
                <Terminal style={{ color: 'var(--primary)' }} size={24} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Git Repo</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>push master</span>
              </div>

              {/* Node 2: CI/CD */}
              <div className="node-element" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1rem',
                backgroundColor: 'rgba(17, 24, 37, 0.8)'
              }}>
                <Cpu style={{ color: 'var(--secondary)' }} size={24} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Jenkins Build</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--success)' }}>SUCCESS</span>
              </div>

              {/* Node 3: Container */}
              <div className="node-element" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1rem',
                backgroundColor: 'rgba(17, 24, 37, 0.8)'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 210, 255, 0.1)',
                  border: '1.5px solid var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  color: 'var(--secondary)',
                  fontWeight: 'bold'
                }}>K8s</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Docker Pod</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>ReplicaSet: 3</span>
              </div>

              {/* Node 4: Cloud */}
              <div className="node-element" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1rem',
                backgroundColor: 'rgba(17, 24, 37, 0.8)'
              }}>
                <Cloud style={{ color: 'var(--primary)' }} size={24} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>AWS Target</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--primary)' }}>EC2 / EKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1.2fr 0.8fr;
        }
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-grid > div {
            align-items: center;
            justify-content: center;
          }
          .hero-grid div[style*="flexDirection: column"] {
            align-items: center;
          }
          .hero-grid a.btn {
            align-self: center;
          }
        }
        .node-element {
          transition: var(--transition-smooth);
        }
        .node-element:hover {
          transform: translateY(-4px);
          border-color: var(--secondary) !important;
          box-shadow: var(--glow-cyan);
        }
      `}</style>
    </div>
  );
}

export default Hero;
