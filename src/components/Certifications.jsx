import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  // Configured as a structured array so certificates can easily be added/modified later
  const certificates = [
    {
      title: 'AWS Academy Graduate - Cloud Architecting',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Dec 2025',
      id: 'AWS-ACA-9821',
      link: 'https://www.credly.com/',
      badgeColor: 'var(--aws-orange)'
    },
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jul 2025',
      id: 'AWS-ACF-7412',
      link: 'https://www.credly.com/',
      badgeColor: '#FFB84D'
    },
    {
      title: 'Linux Essentials Certificate',
      issuer: 'Linux Professional Institute (LPI)',
      date: 'Oct 2024',
      id: 'LPI-LE-8832',
      link: 'https://www.lpi.org/',
      badgeColor: 'var(--success-green)'
    }
  ];

  return (
    <section id="certifications" className="section" style={styles.section}>
      <div className="radial-glow" style={{ bottom: '15%', right: '10%', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}></div>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <p className="section-subtitle">Credentials &amp; Badges</p>
          <h2 className="section-title">Certifications &amp; <span>Training</span></h2>
        </div>

        {/* Certificate Cards Grid */}
        <div style={styles.grid}>
          {certificates.map((cert, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{ ...styles.badgeBox, backgroundColor: `${cert.badgeColor}15` }}>
                  <Award size={24} color={cert.badgeColor} />
                </div>
                <div style={styles.dateBadge}>
                  <Calendar size={12} style={{ marginRight: '4px' }} />
                  {cert.date}
                </div>
              </div>

              <div style={styles.content}>
                <h3 style={styles.certTitle}>{cert.title}</h3>
                <p style={styles.issuer}>{cert.issuer}</p>
                <div style={styles.verificationRow}>
                  <span style={styles.verifyLabel}>Verification ID:</span>
                  <span style={styles.verifyId}>{cert.id}</span>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={styles.verifyBtn}
                aria-label={`Verify credential for ${cert.title}`}
              >
                Verify Credential <ExternalLink size={14} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          ))}

          {/* Add Placeholder Certificate Card (Empty Slate ready to fill) */}
          <div className="glass-card" style={styles.placeholderCard}>
            <div style={styles.dashedCircle}>
              <ShieldCheck size={28} color="rgba(255, 255, 255, 0.2)" />
            </div>
            <h3 style={styles.placeholderTitle}>AWS Solutions Architect Associate</h3>
            <p style={styles.placeholderText}>Currently preparing. Targeted completion: Q3 2026.</p>
            <div style={styles.targetBadge}>PREPARING</div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '25px',
    width: '100%'
  },
  card: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '260px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  badgeBox: {
    width: '46px',
    height: '46px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: 'var(--color-text-secondary)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    padding: '4px 10px',
    borderRadius: '4px',
    border: '1px solid var(--border-color)',
    fontFamily: 'var(--font-mono)'
  },
  content: {
    marginBottom: '25px'
  },
  certTitle: {
    fontSize: '1.15rem',
    lineHeight: '1.4',
    marginBottom: '6px',
    color: '#FFFFFF'
  },
  issuer: {
    fontSize: '0.9rem',
    color: 'var(--color-text-secondary)',
    marginBottom: '15px'
  },
  verificationRow: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    fontSize: '0.8rem',
    fontFamily: 'var(--font-mono)'
  },
  verifyLabel: {
    color: 'var(--color-text-muted)'
  },
  verifyId: {
    color: 'var(--devops-blue)'
  },
  verifyBtn: {
    fontSize: '0.8rem',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    width: '100%',
    textAlign: 'center'
  },
  placeholderCard: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderStyle: 'dashed',
    borderColor: 'rgba(255, 255, 255, 0.15)',
    minHeight: '260px'
  },
  dashedCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    border: '2px dashed rgba(255, 255, 255, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px'
  },
  placeholderTitle: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '6px'
  },
  placeholderText: {
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
    maxWidth: '220px',
    marginBottom: '15px'
  },
  targetBadge: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--color-text-muted)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '3px 8px',
    borderRadius: '4px',
    fontFamily: 'var(--font-mono)',
    backgroundColor: 'rgba(255,255,255,0.02)'
  }
};

export default Certifications;
