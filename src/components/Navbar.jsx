import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Terminal } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Pipeline', href: '#pipeline' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['hero', 'about', 'skills', 'projects', 'terminal', 'pipeline', 'certifications', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'var(--transition-smooth)',
      backgroundColor: scrolled ? 'rgba(11, 15, 25, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      padding: scrolled ? '0.75rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
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
          <div style={{ display: 'flex', position: 'relative' }}>
            <Cloud size={24} style={{ color: 'var(--secondary)' }} />
            <Terminal size={12} style={{
              color: 'var(--primary)',
              position: 'absolute',
              bottom: -2,
              right: -4,
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '50%',
              padding: '1px'
            }} />
          </div>
          <span>Cloud<span style={{ color: 'var(--primary)' }}>DevOps</span></span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="desktop-menu-wrapper">
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '1.75rem'
          }}>
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      color: active ? '#ffffff' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      position: 'relative',
                      padding: '0.25rem 0',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => {
                      if (!active) e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.name}
                    {active && (
                      <span style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '2px',
                        boxShadow: 'var(--glow-orange)'
                      }} />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 60px)',
          backgroundColor: 'rgba(11, 15, 25, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--glass-border)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem'
        }} className="mobile-menu-drawer">
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            width: '100%'
          }}>
            {navLinks.map((link) => (
              <li key={link.name} style={{ width: '100%', textAlign: 'center' }}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: activeSection === link.href.substring(1) ? 'var(--primary)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-title)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    display: 'block',
                    padding: '0.75rem'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Inline styles for media query since we don't have standard CSS selectors in style attribute */}
      <style>{`
        .desktop-menu-wrapper {
          display: block !important;
        }
        .mobile-menu-btn {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-menu-wrapper {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
