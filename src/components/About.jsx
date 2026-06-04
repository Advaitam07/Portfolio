import React from 'react';
import { BookOpen, Target, Award, Brain } from 'lucide-react';

function About() {
  const learningStack = [
    { name: 'AWS Services & DevOps Tools', level: 85, color: 'var(--primary)' },
    { name: 'Docker & Containerization', level: 90, color: 'var(--secondary)' },
    { name: 'Kubernetes Orchestration', level: 75, color: 'var(--secondary)' },
    { name: 'Jenkins CI/CD Automation', level: 80, color: 'var(--primary)' },
    { name: 'Terraform Infrastructure as Code', level: 70, color: 'var(--secondary)' },
    { name: 'Linux Systems & Bash Shell Scripting', level: 85, color: 'var(--success)' },
  ];

  return (
    <div style={{
      padding: '8rem 0',
      backgroundColor: 'var(--bg-secondary)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Profile</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '4rem'
        }}>
          {/* Left Column: Bio Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }} className="bio-header-wrapper">
                <img
                  src="/profile.jpg"
                  alt="Aditya Sharma profile picture"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--primary)',
                    boxShadow: 'var(--glow-orange)',
                    flexShrink: 0
                  }}
                />
                <div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    marginBottom: '0.25rem',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <Brain style={{ color: 'var(--primary)' }} size={20} /> Professional Summary
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Aditya Sharma</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.975rem' }}>
                I am a passionate Information Technology Engineering student with a deep interest in cloud infrastructure design, DevOps processes, and system automation. I specialize in translating complex system requirements into scalable, reliable, and secure cloud environments on Amazon Web Services.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.975rem', marginTop: '1rem' }}>
                Through hands-on projects, I design production-ready infrastructures using Docker, deploy resilient applications to Kubernetes, and build robust CI/CD pipelines to achieve automated operations.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }} className="about-sub-cards">
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <BookOpen style={{ color: 'var(--secondary)' }} size={18} /> Education
                </h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  B.Tech in IT Engineering
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Ongoing Academic Degree
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Focus: Cloud Computing, OS, Networks, DBMS
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Target style={{ color: 'var(--primary)' }} size={18} /> Objectives
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Aiming to secure a Cloud Devops internship or junior role to apply automation concepts, container strategies, and AWS methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Currently Learning Stack */}
          <div className="glass-panel" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#ffffff',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Award style={{ color: 'var(--success)' }} size={20} /> Currently Learning
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Actively strengthening expertise and training in the following technical areas:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {learningStack.map((tech) => (
                <div key={tech.name}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>
                    <span>{tech.name}</span>
                    <span style={{ color: tech.color }}>{tech.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${tech.level}%`,
                      height: '100%',
                      backgroundColor: tech.color,
                      borderRadius: '10px',
                      boxShadow: `0 0 10px ${tech.color}`
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .bio-header-wrapper {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .about-sub-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
