import React from 'react';
import { Calendar, Briefcase, Code, Milestone } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      type: "learning",
      title: "AWS Cloud Practitioner & Linux Training",
      organization: "Academic Studies / Self-Learning",
      date: "Feb 2025 - May 2025",
      desc: "Mastered cloud architectural concepts (IAM roles, storage buckets, computing instances, database configurations) and Linux scripting. Earned AWS Certified Cloud Practitioner credential.",
      outcomes: ["Linux Bash Scripts", "AWS IAM Polices", "Virtual Environments"],
      icon: Milestone,
      color: "var(--success)"
    },
    {
      type: "project",
      title: "CI/CD & Infrastructure Sandbox Setup",
      organization: "Personal Lab Labs",
      date: "Jun 2025 - Nov 2025",
      desc: "Designed multiple automated architectures. Built a custom Jenkins runner on EC2, multi-stage Docker deployment pipelines, and custom Terraform scripts for automating security groups.",
      outcomes: ["Jenkins pipelines", "Multi-stage Dockerfiles", "Terraform modules"],
      icon: Code,
      color: "var(--secondary)"
    },
    {
      type: "freelance",
      title: "Freelance Technical Writer (Cloud/DevOps)",
      organization: "Upwork / Remote",
      date: "Dec 2025 - Mar 2026",
      desc: "Authored technical articles and documentation on configuring Nginx server setups, Docker security rules, and migrating monlithic Python scripts to AWS Lambda handlers.",
      outcomes: ["Technical documentation", "Script validation", "Nginx optimizations"],
      icon: Briefcase,
      color: "var(--primary)"
    },
    {
      type: "internship",
      title: "Cloud Support / DevOps Intern",
      organization: "Aviation Tech Solutions",
      date: "Apr 2026 - Present",
      desc: "Assisting in migrating staging systems to AWS. Configuring CloudWatch alarm rules, refining automated Docker image compilation triggers, and updating Kubernetes service charts.",
      outcomes: ["CloudWatch metrics", "ECR tagging automation", "Kubernetes configmaps"],
      icon: Briefcase,
      color: "var(--secondary)"
    }
  ];

  return (
    <div style={{
      padding: '8rem 0',
      backgroundColor: 'var(--bg-secondary)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Roadmap</span>
          <h2 className="section-title">Experience & Milestones</h2>
        </div>

        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem 0'
        }} className="timeline-container">
          {/* Vertical axis line */}
          <div style={{
            position: 'absolute',
            left: '31px',
            top: 0,
            width: '2px',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }} className="timeline-axis" />

          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: '3rem',
                  position: 'relative'
                }}
                className="timeline-item"
              >
                {/* Timeline Node Circle */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: `2px solid ${exp.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: exp.color,
                  zIndex: 2,
                  boxShadow: `0 0 15px ${exp.color}15`,
                  flexShrink: 0
                }}>
                  <Icon size={24} />
                </div>

                {/* Timeline Card */}
                <div className="glass-panel timeline-card" style={{
                  padding: '2rem',
                  width: '100%',
                  position: 'relative'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: '#ffffff',
                        fontFamily: 'var(--font-title)'
                      }}>
                        {exp.title}
                      </h3>
                      <span style={{
                        fontSize: '0.9rem',
                        color: 'var(--secondary)'
                      }}>
                        {exp.organization}
                      </span>
                    </div>

                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--glass-border)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '30px'
                    }}>
                      <Calendar size={12} /> {exp.date}
                    </span>
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {exp.desc}
                  </p>

                  {/* Outcomes Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {exp.outcomes.map((outcome, oIdx) => (
                      <span
                        key={oIdx}
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-primary)',
                          backgroundColor: `${exp.color}08`,
                          border: `1px solid ${exp.color}25`,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px'
                        }}
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-card {
          transition: var(--transition-smooth);
        }
        .timeline-card:hover {
          transform: translateX(4px);
          border-color: rgba(0, 210, 255, 0.2);
        }
        @media (max-width: 576px) {
          .timeline-axis {
            left: 21px !important;
          }
          .timeline-item {
            gap: 1rem !important;
          }
          .timeline-item > div:first-child {
            width: 44px !important;
            height: 44px !important;
          }
          .timeline-item svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Experience;
