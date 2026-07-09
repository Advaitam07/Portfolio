import React from 'react';
import { Calendar, Briefcase, Award, Milestone } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'DevOps & Cloud Intern',
      company: 'Tech Solutions Corp',
      duration: 'May 2025 - Present',
      type: 'internship',
      icon: Briefcase,
      color: 'var(--aws-orange)',
      achievements: [
        'Built declarative Jenkinsfiles to automate the compilation, containerization, and testing of spring-boot services.',
        'Provisioned cloud resources on AWS (EC2, VPC, and RDS) using CloudFormation templates.',
        'Monitored container services on AWS ECS/EKS clusters using CloudWatch alerts and dashboards.'
      ]
    },
    {
      role: 'Cloud Automation Developer',
      company: 'Freelance & Open Source Projects',
      duration: 'Nov 2024 - Apr 2025',
      type: 'freelance',
      icon: Milestone,
      color: 'var(--devops-blue)',
      achievements: [
        'Developed custom Python scripts using Boto3 SDK to audit AWS credentials and prune orphaned EBS volumes, reducing test account costs by 24%.',
        'Configured Dockerfiles and docker-compose orchestration environments for full-stack JavaScript and Python applications.',
        'Maintained server setups on Linux (Ubuntu Server) incorporating Nginx routing, SSH keys, and systemd cron jobs.'
      ]
    },
    {
      role: 'AWS Cloud Foundations Training',
      company: 'AWS Academy Program',
      duration: 'Jun 2024 - Oct 2024',
      type: 'learning',
      icon: Award,
      color: 'var(--success-green)',
      achievements: [
        'Completed structured training labs in designing highly available multi-tier architectures.',
        'Practiced VPC creation including public and private subnets, security policies, NAT Gateways, and Route53 DNS configurations.',
        'Attained AWS Academy Graduate status with high marks in final theoretical exams.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={styles.section}>
      <div className="radial-glow" style={{ top: '20%', left: '5%', background: 'radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)' }}></div>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <p className="section-subtitle">Career Roadmap</p>
          <h2 className="section-title">Experience &amp; <span>Timeline</span></h2>
        </div>

        {/* Timeline Layout */}
        <div style={styles.timelineWrapper}>
          <div style={styles.timelineLine} />

          {experiences.map((exp, idx) => {
            const ExpIcon = exp.icon;
            return (
              <div key={idx} style={styles.timelineItem}>
                {/* Visual Timeline Marker Node */}
                <div style={{ ...styles.timelineMarker, backgroundColor: 'var(--bg-primary)', borderColor: exp.color, boxShadow: `0 0 10px ${exp.color}40` }}>
                  <ExpIcon size={16} color={exp.color} />
                </div>

                {/* Timeline Content Block */}
                <div className="glass-card" style={{ ...styles.contentCard, borderLeft: `3px solid ${exp.color}` }}>
                  <div style={styles.cardHeader}>
                    <div>
                      <h3 style={styles.roleTitle}>{exp.role}</h3>
                      <h4 style={styles.companyName}>{exp.company}</h4>
                    </div>
                    <div style={styles.meta}>
                      <span style={styles.duration}>
                        <Calendar size={12} style={{ marginRight: '5px' }} />
                        {exp.duration}
                      </span>
                      <span style={{ ...styles.typeTag, color: exp.color, backgroundColor: `${exp.color}10`, borderColor: `${exp.color}25` }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul style={styles.bullets}>
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} style={styles.bulletItem}>
                        {ach}
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
  timelineWrapper: {
    position: 'relative',
    maxWidth: '850px',
    margin: '0 auto',
    padding: '20px 0 20px 30px'
  },
  timelineLine: {
    position: 'absolute',
    left: '8px',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: 'var(--border-color)'
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '40px',
    width: '100%'
  },
  timelineMarker: {
    position: 'absolute',
    left: '-38px',
    top: '20px',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  contentCard: {
    padding: '30px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '15px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '15px',
    marginBottom: '18px'
  },
  roleTitle: {
    fontSize: '1.25rem',
    color: '#FFFFFF'
  },
  companyName: {
    fontSize: '0.95rem',
    color: 'var(--color-text-secondary)',
    fontWeight: '500',
    marginTop: '2px'
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  duration: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.8rem',
    color: 'var(--color-text-secondary)',
    fontFamily: 'var(--font-mono)'
  },
  typeTag: {
    fontSize: '0.7rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    padding: '3px 8px',
    borderRadius: '4px',
    border: '1px solid',
    fontFamily: 'var(--font-mono)'
  },
  bullets: {
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  bulletItem: {
    fontSize: '0.9rem',
    color: 'var(--color-text-secondary)',
    lineHeight: '1.6'
  }
};

export default Experience;
