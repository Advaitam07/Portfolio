import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Learning', id: 'learning' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  // Track scroll position for navbar background and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // 1. Add background blur after 20px
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Scroll Spy detection
      const scrollPos = window.scrollY + 120; // offset for nav height
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // Offset for sticky header
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      style={{
        ...styles.nav,
        backgroundColor: scrolled ? 'rgba(11, 15, 25, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
      }}
    >
      <div className="container" style={styles.navContainer}>
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} style={styles.brand}>
          <Cloud size={20} color="var(--aws-orange)" style={{ marginRight: '6px' }} />
          <span>ADVAIT</span>
          <span style={styles.brandTerminal}>:_</span>
        </a>

        {/* Desktop Menu */}
        <ul style={styles.menuList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  ...styles.link,
                  color: activeSection === item.id ? 'var(--aws-orange)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === item.id ? '600' : '400'
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          style={styles.mobileToggle}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <ul style={styles.mobileDrawerList}>
            {navItems.map((item) => (
              <li key={item.id} style={styles.mobileDrawerItem}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    ...styles.mobileDrawerLink,
                    color: activeSection === item.id ? 'var(--aws-orange)' : 'var(--color-text-secondary)',
                    fontWeight: activeSection === item.id ? '600' : '400'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

// Inline CSS for the Navigation Bar
const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
    fontSize: '1.25rem',
    color: '#FFFFFF',
    letterSpacing: '0.05em'
  },
  brandTerminal: {
    color: 'var(--devops-blue)',
    animation: 'typingBlink 1s infinite'
  },
  menuList: {
    display: 'flex',
    gap: '25px',
    listStyle: 'none',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  link: {
    fontSize: '0.9rem',
    fontFamily: 'var(--font-display)',
    transition: 'var(--transition-fast)',
    textTransform: 'capitalize'
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    outline: 'none',
    '@media (max-width: 768px)': {
      display: 'block'
    }
  },
  mobileDrawer: {
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: '#0F1322',
    borderBottom: '1px solid var(--border-color)',
    padding: '20px',
    zIndex: 999
  },
  mobileDrawerList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  mobileDrawerItem: {
    textAlign: 'center'
  },
  mobileDrawerLink: {
    display: 'block',
    padding: '10px 0',
    fontSize: '1.1rem',
    fontFamily: 'var(--font-display)'
  }
};

// Add responsive media query support via JS injecting a style block or inline emulation.
// Since standard React inline styles do not support media queries directly, we can define them in CSS.
// Let's add them as CSS rules in index.css for mobile-nav display toggle! 
// We will write this toggle in index.css so it works smoothly.

export default Navbar;
