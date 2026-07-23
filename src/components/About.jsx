import React from 'react';
import { GraduationCap, Target, Eye, User } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: 'Education',
      details: 'B.Tech in Information Technology',
      desc: 'Focused on operating systems, distributed architectures, software engineering, and database management systems.'
    },
    {
      icon: Target,
      title: 'Career Objectives',
      details: 'DevOps & Site Reliability',
      desc: 'Aims to eliminate manual developer friction by orchestrating automated container systems, CI/CD integrations, and cloud hosting.'
    },
    {
      icon: Eye,
      title: 'Current Focus',
      details: 'AWS & Kubernetes Scaling',
      desc: 'Deep diving into multi-region high-availability configurations, cost optimization scripts, and infrastructure deployment via Terraform.'
    }
  ];

  return (
    <section id="about" className="section" style={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <p className="section-subtitle">Profile Overview</p>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        {/* Profile Split Layout */}
        <div style={styles.split}>
          <div className="glass-card" style={styles.profileCard}>
            <div style={styles.avatarWrapper}>
              <div style={styles.avatarGlow}></div>
              <div style={styles.avatar}>
                <User size={48} color="var(--aws-orange)" />
              </div>
            </div>
            <h3 style={styles.profileTitle}>Aditya Sharma</h3>
            <p style={styles.profileRole}>AWS / DevOps Student Engineer</p>
            <div style={styles.divider}></div>
            <p style={styles.profileText}>
              I am a final-year Information Technology student with a strong engineering foundation and a passion for automation, cloud infrastructure, and software scalability. I build bridges between clean application code and resilient cloud operations.
            </p>
          </div>

          <div style={styles.detailsCol}>
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="glass-card" style={styles.aboutCard}>
                  <div style={styles.iconCircle}>
                    <Icon size={22} color="var(--devops-blue)" />
                  </div>
                  <div>
                    <h4 style={styles.cardTitle}>{card.title}</h4>
                    <h5 style={styles.cardSubtitle}>{card.details}</h5>
                    <p style={styles.cardDesc}>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)'
  },
  split: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr',
    gap: '35px',
    alignItems: 'stretch'
  },
  profileCard: {
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: '20px'
  },
  avatarGlow: {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--aws-orange) 0%, var(--devops-blue) 100%)',
    filter: 'blur(8px)',
    opacity: 0.6
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#0F1322',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    border: '2px solid rgba(255, 255, 255, 0.08)'
  },
  profileTitle: {
    fontSize: '1.5rem',
    marginBottom: '5px'
  },
  profileRole: {
    fontSize: '0.85rem',
    color: 'var(--devops-blue)',
    fontFamily: 'var(--font-mono)',
    marginBottom: '20px'
  },
  divider: {
    width: '50px',
    height: '2px',
    backgroundColor: 'var(--border-color)',
    marginBottom: '20px'
  },
  profileText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'var(--color-text-secondary)'
  },
  detailsCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  aboutCard: {
    padding: '25px',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
  },
  iconCircle: {
    width: '46px',
    height: '46px',
    borderRadius: '8px',
    backgroundColor: 'var(--devops-blue-glow)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: '1px solid rgba(0, 210, 255, 0.15)'
  },
  cardTitle: {
    fontSize: '1.1rem',
    marginBottom: '3px',
    color: '#FFFFFF'
  },
  cardSubtitle: {
    fontSize: '0.85rem',
    color: 'var(--aws-orange)',
    fontFamily: 'var(--font-mono)',
    fontWeight: '500',
    marginBottom: '10px'
  },
  cardDesc: {
    fontSize: '0.9rem',
    lineHeight: '1.5'
  }
};

export default About;
