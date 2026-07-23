import React from 'react';
import { Mail, Cloud } from 'lucide-react';

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        {/* Brand section */}
        <div style={styles.brandSection}>
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} style={styles.brand}>
            <Cloud size={18} color="var(--aws-orange)" style={{ marginRight: '6px' }} />
            <span>Aditya Sharma</span>
            <span style={styles.brandTerminal}>:_</span>
          </a>
          <p style={styles.tagline}>IT Student &amp; Cloud DevOps Specialist</p>
        </div>

        {/* Short links */}
        <div style={styles.linksSection}>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={styles.link}>About</a>
          <a href="#learning" onClick={(e) => handleNavClick(e, 'learning')} style={styles.link}>Learning</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} style={styles.link}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} style={styles.link}>Projects</a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} style={styles.link}>Certifications</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} style={styles.link}>Experience</a>
        </div>

        {/* Socials & Copyright */}
        <div style={styles.bottomSection}>
          <div style={styles.socials}>
            <a href="https://https://github.com/Advaitam07" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="GitHub Profile">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-sharma-73b377363" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="LinkedIn Profile">
              <Linkedin size={18} />
            </a>
            <a href="mailto:adityapradipsharma@gmail.com" style={styles.socialIcon} aria-label="Send Email">
              <Mail size={18} />
            </a>
          </div>
          <p style={styles.copy}>
            &copy; {currentYear} Aditya Sharma. All rights reserved. Deployed via AWS.
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#070A12',
    borderTop: '1px solid var(--border-color)',
    padding: '40px 0 30px 0',
    color: 'var(--color-text-secondary)'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    textAlign: 'center'
  },
  brandSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
    fontSize: '1.15rem',
    color: '#FFFFFF',
    letterSpacing: '0.05em'
  },
  brandTerminal: {
    color: 'var(--devops-blue)',
  },
  tagline: {
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)'
  },
  linksSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px 30px',
    maxWidth: '600px'
  },
  link: {
    fontSize: '0.85rem',
    color: 'var(--color-text-secondary)',
    transition: 'var(--transition-fast)',
    ':hover': {
      color: 'var(--aws-orange)'
    }
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    borderTop: '1px solid rgba(255,255,255,0.04)',
    paddingTop: '20px',
    width: '100%'
  },
  socials: {
    display: 'flex',
    gap: '15px'
  },
  socialIcon: {
    color: 'var(--color-text-muted)',
    transition: 'var(--transition-fast)',
    ':hover': {
      color: '#FFFFFF'
    }
  },
  copy: {
    fontSize: '0.78rem',
    color: 'var(--color-text-muted)'
  }
};

export default Footer;
