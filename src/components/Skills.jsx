import React from 'react';
import { Cloud, Cog, Code, Monitor, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'var(--aws-orange)',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 'Advanced', value: 85 },
        { name: 'VPC / Networking / Security Groups', level: 'Advanced', value: 80 },
        { name: 'EC2 / Auto Scaling / ELB', level: 'Advanced', value: 90 },
        { name: 'S3 / RDS / DynamoDB Storage', level: 'Advanced', value: 85 },
        { name: 'CloudWatch / Systems monitoring', level: 'Intermediate', value: 75 }
      ]
    },
    {
      title: 'DevOps & Orchestration',
      icon: Cog,
      color: 'var(--devops-blue)',
      skills: [
        { name: 'Docker Containerization', level: 'Advanced', value: 85 },
        { name: 'Kubernetes Cluster Administration', level: 'Intermediate', value: 70 },
        { name: 'Jenkins CI/CD Automation', level: 'Advanced', value: 80 },
        { name: 'GitHub Actions / Workflows', level: 'Advanced', value: 80 },
        { name: 'Terraform (IaC basics)', level: 'Intermediate', value: 65 }
      ]
    },
    {
      title: 'Programming & Automation',
      icon: Code,
      color: '#A463F2',
      skills: [
        { name: 'Python (Scripting & Boto3)', level: 'Advanced', value: 80 },
        { name: 'Java (OOP & Software Dev)', level: 'Advanced', value: 75 },
        { name: 'JavaScript (ES6+)', level: 'Intermediate', value: 70 },
        { name: 'Linux Shell Scripting (Bash)', level: 'Advanced', value: 85 }
      ]
    },
    {
      title: 'Frontend & Presentation',
      icon: Monitor,
      color: '#E5C07B',
      skills: [
        { name: 'HTML5 & Semantic Structure', level: 'Advanced', value: 90 },
        { name: 'CSS3 (Flexbox, Grid, Keyframes)', level: 'Advanced', value: 85 },
        { name: 'React.js Web Applications', level: 'Intermediate', value: 75 }
      ]
    },
    {
      title: 'Development Tools & Systems',
      icon: Wrench,
      color: '#10B981',
      skills: [
        { name: 'Linux System Administration', level: 'Advanced', value: 85 },
        { name: 'Git & Git Branching Workflows', level: 'Advanced', value: 90 },
        { name: 'GitHub Collaboration & PRs', level: 'Advanced', value: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={styles.section}>
      <div className="radial-glow" style={{ bottom: '10%', left: '5%' }}></div>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <p className="section-subtitle">Technical Stack</p>
          <h2 className="section-title">Skills &amp; <span>Expertise</span></h2>
        </div>

        {/* Categories Grid */}
        <div style={styles.grid}>
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            return (
              <div key={catIdx} className="glass-card" style={styles.categoryCard}>
                <div style={styles.cardHeader}>
                  <div style={{ ...styles.iconBox, backgroundColor: `${category.color}15` }}>
                    <CategoryIcon size={20} color={category.color} />
                  </div>
                  <h3 style={styles.cardTitle}>{category.title}</h3>
                </div>

                <div style={styles.skillsList}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} style={styles.skillItem}>
                      <div style={styles.skillMeta}>
                        <span style={styles.skillName}>{skill.name}</span>
                        <span style={{ ...styles.skillLevel, color: category.color }}>{skill.level}</span>
                      </div>
                      <div style={styles.barBg}>
                        <div 
                          style={{ 
                            ...styles.barFill, 
                            width: `${skill.value}%`, 
                            backgroundColor: category.color,
                            boxShadow: `0 0 8px ${category.color}40`
                          }}
                        />
                      </div>
                    </div>
                  ))}
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
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '25px',
    width: '100%'
  },
  categoryCard: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '25px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '15px'
  },
  iconBox: {
    width: '38px',
    height: '38px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardTitle: {
    fontSize: '1.2rem',
    color: '#FFFFFF'
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  skillItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  skillMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem'
  },
  skillName: {
    color: 'var(--color-text-primary)',
    fontWeight: '500'
  },
  skillLevel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: '600'
  },
  barBg: {
    height: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '2.5px',
    overflow: 'hidden'
  },
  barFill: {
    height: '100%',
    borderRadius: '2.5px',
    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

export default Skills;
