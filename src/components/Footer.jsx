import React from 'react';
import { Github, Linkedin, Mail, Cloud, Terminal } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--glass-border)',
      padding: '4rem 0 2rem 0',
      position: 'relative',
      zIndex: 5
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem'
      }}>
        {/* Logo and Brand */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <a href="#hero" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: '#ffffff',
            fontFamily: 'var(--font-title)',
            fontSize: '1.25rem',
            fontWeight: 700
          }}>
            <Cloud size={24} style={{ color: 'var(--secondary)' }} />
            <span>Cloud<span style={{ color: 'var(--primary)' }}>DevOps</span></span>
          </a>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            textAlign: 'center',
            maxWidth: '400px',
            lineHeight: 1.5
          }}>
            Designing scalable cloud architectures and building resilient automated deployment mechanisms.
          </p>
        </div>

        {/* Quick Links */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }} className="footer-links">
          <li><a href="#about" className="footer-link">About</a></li>
          <li><a href="#skills" className="footer-link">Skills</a></li>
          <li><a href="#projects" className="footer-link">Projects</a></li>
          <li><a href="#terminal" className="footer-link">Terminal</a></li>
          <li><a href="#pipeline" className="footer-link">Pipeline</a></li>
          <li><a href="#certifications" className="footer-link">Certifications</a></li>
          <li><a href="#experience" className="footer-link">Experience</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <a href="https://github.com/Advaitam07" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="footer-social-icon"><Github size={20} /></a>
          <a href="https://linkedin.com/in/aditya-sharma-73b377363" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="footer-social-icon"><Linkedin size={20} /></a>
          <a href="mailto:adityapradipsharma@gmail.com" aria-label="Email Contact" className="footer-social-icon"><Mail size={20} /></a>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '1.5rem',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }} className="footer-meta">
          <span>&copy; {currentYear} Aditya Sharma. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Powered by React + Vite <Terminal size={12} style={{ color: 'var(--secondary)' }} />
          </span>
        </div>
      </div>

      <style>{`
        .footer-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-family: var(--font-title);
          font-weight: 500;
          transition: var(--transition-smooth);
        }
        .footer-link:hover {
          color: #ffffff;
        }
        .footer-social-icon {
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .footer-social-icon:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }
        @media (max-width: 576px) {
          .footer-meta {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
