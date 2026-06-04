import React, { useState } from 'react';
import { Cloud, Cpu, Code, Monitor, Settings } from 'lucide-react';

function Skills() {
  const [activeTab, setActiveTab] = useState('cloud');

  const categories = [
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud },
    { id: 'devops', name: 'DevOps & CI/CD', icon: Cpu },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Monitor },
    { id: 'tools', name: 'Tools & Systems', icon: Settings },
  ];

  const skillData = {
    cloud: [
      { name: 'Amazon Web Services (AWS)', level: 'Advanced', desc: 'EC2, S3, RDS, IAM, VPC, CloudWatch, Lambda, Auto Scaling' },
      { name: 'Cloud Fundamentals', level: 'Advanced', desc: 'Virtualization, networking, IAM security policies, cloud architectures' },
      { name: 'Serverless Architectures', level: 'Intermediate', desc: 'AWS Lambda, API Gateway, DynamoDB' }
    ],
    devops: [
      { name: 'Docker', level: 'Advanced', desc: 'Containerization, Multi-stage builds, Docker Compose, Registry management' },
      { name: 'Kubernetes', level: 'Intermediate', desc: 'Pod scheduling, services, ReplicaSets, deployments, ConfigMaps' },
      { name: 'Jenkins CI/CD', level: 'Advanced', desc: 'Declarative pipelines, automation hooks, agent configurations' },
      { name: 'GitHub Actions / GitLab CI', level: 'Advanced', desc: 'Repository-integrated runners, action configurations' }
    ],
    programming: [
      { name: 'Python', level: 'Advanced', desc: 'Automation scripts, boto3 AWS SDK development, web scraping, API wrappers' },
      { name: 'Java', level: 'Intermediate', desc: 'Object-oriented programming, data structures, application development' },
      { name: 'JavaScript', level: 'Advanced', desc: 'ES6+ specifications, asynchronous flow, script engines' }
    ],
    frontend: [
      { name: 'HTML & CSS', level: 'Advanced', desc: 'Semantic tags, Flexbox, Grid, custom styling, animations' },
      { name: 'React', level: 'Advanced', desc: 'Component life cycle, state hooks, performance optimizations, Vite pipelines' }
    ],
    tools: [
      { name: 'Linux', level: 'Advanced', desc: 'Bash scripting, Cron automation, package managers, network configurations' },
      { name: 'Git & GitHub', level: 'Advanced', desc: 'Branching, PR reviews, merge resolutions, Git workflows' }
    ]
  };

  const getThemeColor = (tab) => {
    switch (tab) {
      case 'cloud': return 'var(--primary)';
      case 'devops': return 'var(--secondary)';
      case 'programming': return 'var(--primary)';
      case 'frontend': return 'var(--secondary)';
      case 'tools': return 'var(--success)';
      default: return 'var(--primary)';
    }
  };

  return (
    <div style={{
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Tab Buttons */}
        <div className="skills-tabs" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem'
        }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            const activeColor = getThemeColor(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.03)' : 'rgba(17, 24, 39, 0.4)',
                  border: isActive ? `1px solid ${activeColor}` : '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'var(--transition-smooth)',
                  boxShadow: isActive ? `0 0 15px ${activeColor}20` : 'none'
                }}
              >
                <Icon size={16} style={{ color: isActive ? activeColor : 'inherit' }} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {skillData[activeTab].map((skill, idx) => {
            const activeColor = getThemeColor(activeTab);
            return (
              <div
                key={idx}
                className="glass-panel skill-card"
                style={{
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Visual accent top border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: activeColor,
                  boxShadow: `0 0 10px ${activeColor}`
                }} />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                    {skill.name}
                  </h3>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: activeColor,
                    backgroundColor: `${activeColor}12`,
                    border: `1px solid ${activeColor}40`,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    {skill.level}
                  </span>
                </div>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .skill-card {
          transition: var(--transition-smooth);
        }
        .skill-card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}

export default Skills;
