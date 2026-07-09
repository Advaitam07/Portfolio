import React from 'react';
import { BookOpen, Shield, Cloud, Terminal, Layers, RefreshCw } from 'lucide-react';

const CurrentlyLearning = () => {
  const subjects = [
    {
      icon: Cloud,
      name: 'AWS Solutions Architecting',
      progress: 85,
      status: 'Deep Diving',
      color: 'var(--aws-orange)',
      topics: ['Advanced VPC configurations', 'Multi-region failover configurations', 'IAM Roles & Security Policies']
    },
    {
      icon: Layers,
      name: 'Kubernetes Orchestration',
      progress: 70,
      status: 'Practicing EKS/Helm',
      color: 'var(--devops-blue)',
      topics: ['Pod Scheduling & Autoscaling', 'Helm Chart Package Management', 'Persistent Volumes & Claims']
    },
    {
      icon: Shield,
      name: 'Terraform (IaC)',
      progress: 60,
      status: 'Hands-on Modules',
      color: '#A463F2', // Terraform purple
      topics: ['Modular code configurations', 'State Management (S3 Backends)', 'Dynamic Provisioning blocks']
    },
    {
      icon: RefreshCw,
      name: 'Jenkins Declarative Pipelines',
      progress: 80,
      status: 'Building complex workflows',
      color: '#E68A00',
      topics: ['Pipeline-as-code syntax', 'Shared libraries integration', 'Docker agent setups']
    },
    {
      icon: Terminal,
      name: 'Linux Administration',
      progress: 90,
      status: 'Bash Automation',
      color: '#10B981',
      topics: ['Shell Script automatons', 'Systemd unit monitoring', 'Permissions & Storage security']
    }
  ];

  return (
    <section id="learning" className="section" style={styles.section}>
      <div className="radial-glow" style={{ top: '20%', right: '10%', background: 'radial-gradient(circle, rgba(164,99,242,0.1) 0%, transparent 70%)' }}></div>
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrapper">
          <p className="section-subtitle">Active Milestones</p>
          <h2 className="section-title">Currently <span>Learning</span></h2>
        </div>

        {/* Subjects Grid */}
        <div style={styles.grid}>
          {subjects.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <div key={idx} className="glass-card" style={{ ...styles.card, borderTop: `4px solid ${sub.color}` }}>
                <div style={styles.cardHeader}>
                  <div style={{ ...styles.iconBox, backgroundColor: `${sub.color}15` }}>
                    <Icon size={20} color={sub.color} />
                  </div>
                  <span style={{ ...styles.statusTag, color: sub.color, backgroundColor: `${sub.color}10` }}>
                    {sub.status}
                  </span>
                </div>

                <h3 style={styles.name}>{sub.name}</h3>

                {/* Progress Bar */}
                <div style={styles.progressContainer}>
                  <div style={styles.progressHeader}>
                    <span>Progress Meter</span>
                    <span>{sub.progress}%</span>
                  </div>
                  <div style={styles.progressBarBg}>
                    <div style={{ ...styles.progressBarFill, width: `${sub.progress}%`, backgroundColor: sub.color }}></div>
                  </div>
                </div>

                {/* Topics Bullet List */}
                <div style={styles.topicsWrapper}>
                  <h4 style={styles.topicsTitle}>Study Focus Areas:</h4>
                  <ul style={styles.topicsList}>
                    {sub.topics.map((topic, tIdx) => (
                      <li key={tIdx} style={styles.topicItem}>
                        <BookOpen size={12} style={{ marginRight: '6px', color: 'var(--color-text-muted)', flexShrink: 0 }} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-primary)',
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
    minHeight: '340px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px'
  },
  iconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusTag: {
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '4px',
    fontFamily: 'var(--font-mono)'
  },
  name: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#FFFFFF'
  },
  progressContainer: {
    marginBottom: '20px'
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: 'var(--color-text-secondary)',
    marginBottom: '6px',
    fontFamily: 'var(--font-mono)'
  },
  progressBarBg: {
    height: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '3px',
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 1s ease-out'
  },
  topicsWrapper: {
    borderTop: '1px solid var(--border-color)',
    paddingTop: '15px',
    marginTop: '5px'
  },
  topicsTitle: {
    fontSize: '0.8rem',
    color: 'var(--color-text-secondary)',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  topicsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  topicItem: {
    fontSize: '0.85rem',
    color: 'var(--color-text-secondary)',
    display: 'flex',
    alignItems: 'center'
  }
};

export default CurrentlyLearning;
