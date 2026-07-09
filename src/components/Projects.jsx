import React, { useState } from 'react';
import { ExternalLink, Cloud, Server, Code, Layers, Wrench, ShieldAlert } from 'lucide-react';
import InteractivePipeline from './InteractivePipeline';

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


const Projects = () => {
  // Storing projects in an array makes it trivial to modify/add projects in the future
  const projectsData = [
    {
      title: 'AWS Two-Tier Architecture',
      desc: 'Provisioned a highly-available, scalable VPC network hosting web applications behind an Application Load Balancer with secure private database subnets and Auto Scaling groups.',
      icon: Server,
      tags: ['VPC', 'EC2', 'ALB', 'Auto Scaling', 'RDS', 'Security Groups'],
      github: 'https://github.com/Advaitam07/aws-two-tier',
      live: '#'
    },
    {
      title: 'CI/CD DevOps Pipeline Project',
      desc: 'Automated software deployments via a Git-triggered Jenkins pipeline executing code checks, Unit Tests, building Docker images, and deploying to an orchestrator.',
      icon: Code,
      tags: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube', 'Git', 'Bash'],
      github: 'https://github.com/Advaitam07/devops-pipeline',
      live: '#'
    },
    {
      title: 'AWS Cost Optimization Dashboard',
      desc: 'Written a custom python script using Boto3 SDK to automatically identify and clean unassociated elastic IPs, orphaned EBS volumes, and stale S3 backups with email alerts.',
      icon: Cloud,
      tags: ['Python', 'Boto3', 'AWS Lambda', 'SES', 'CloudWatch', 'S3'],
      github: 'https://github.com/Advaitam07/aws-cost-optimizer',
      live: '#'
    },
    {
      title: 'Kubernetes Production Cluster',
      desc: 'Deployed and configured a multi-node Kubernetes cluster using kubeadm on Linux servers. Set up ingress controller rules, secret definitions, and Helm monitoring stacks.',
      icon: Layers,
      tags: ['Kubernetes', 'Kubeadm', 'Ingress', 'Helm', 'Prometheus', 'Linux'],
      github: 'https://github.com/Advaitam07/k8s-cluster-setup',
      live: '#'
    },
    {
      title: 'Docker Microservices Deployment',
      desc: 'Dockerized a polyglot microservice application. Written customized multi-stage Dockerfiles to minimize asset size and set up multi-container docker-compose environments.',
      icon: Wrench,
      tags: ['Docker', 'Docker Compose', 'Multi-stage Build', 'Nginx', 'Node.js'],
      github: 'https://github.com/Advaitam07/docker-microservices',
      live: '#'
    },
    {
      title: 'Developer Portfolio Website',
      desc: 'This modern cloud-themed SPA developer portfolio built from scratch in React + Vite, fully responsive, optimized production configurations, and integrated terminal controls.',
      icon: Cloud,
      tags: ['React', 'Vite', 'Modern CSS', 'Lucide Icons', 'Nginx Hosting'],
      github: 'https://github.com/Advaitam07/portfolio',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section" style={styles.section}>
      <div className="radial-glow" style={{ top: '30%', left: '15%', background: 'radial-gradient(circle, rgba(0,210,255,0.08) 0%, transparent 70%)' }}></div>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <p className="section-subtitle">Technical Portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        {/* DevOps Pipeline Feature Spotlight */}
        <div style={styles.spotlightContainer}>
          <div style={styles.spotlightHeader}>
            <span style={styles.spotlightBadge}>SPOTLIGHT PROJECT</span>
            <h3 style={styles.spotlightTitle}>Interactive CI/CD Deployment Orchestration</h3>
          </div>
          <InteractivePipeline />
        </div>

        {/* Projects Cards Grid */}
        <div style={styles.grid}>
          {projectsData.map((project, idx) => {
            const ProjectIcon = project.icon;
            return (
              <div key={idx} className="glass-card" style={styles.card}>
                <div style={styles.cardTop}>
                  <div style={styles.iconCircle}>
                    <ProjectIcon size={20} color="var(--aws-orange)" />
                  </div>
                  <div style={styles.links}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.linkIcon}
                      title="View GitHub Repository"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.live} 
                      onClick={(e) => {
                        if (project.live === '#') {
                          e.preventDefault();
                          alert(`Demo deployment for "${project.title}" is simulated. Code repositories are available on GitHub.`);
                        }
                      }}
                      style={styles.linkIcon}
                      title="View Live Demonstration"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div style={styles.cardContent}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDesc}>{project.desc}</p>
                </div>

                {/* Tech Tags */}
                <div style={styles.tagsContainer}>
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`tag ${tag === 'VPC' || tag === 'EC2' || tag === 'ALB' || tag === 'RDS' || tag === 'AWS Lambda' || tag === 'S3' ? 'tag-orange' : tag === 'Jenkins' || tag === 'Docker' || tag === 'Kubernetes' ? 'tag-blue' : ''}`}
                      style={{ fontSize: '0.7rem' }}
                    >
                      {tag}
                    </span>
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
    backgroundColor: 'var(--bg-primary)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative'
  },
  spotlightContainer: {
    marginBottom: '50px',
  },
  spotlightHeader: {
    marginBottom: '15px'
  },
  spotlightBadge: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--aws-orange)',
    letterSpacing: '0.15em',
    fontFamily: 'var(--font-mono)'
  },
  spotlightTitle: {
    fontSize: '1.4rem',
    marginTop: '4px',
    color: '#FFFFFF'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '25px',
    width: '100%'
  },
  card: {
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '280px',
    height: '100%'
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  iconCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '8px',
    backgroundColor: 'var(--aws-orange-glow)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 153, 0, 0.15)'
  },
  links: {
    display: 'flex',
    gap: '12px'
  },
  linkIcon: {
    color: 'var(--color-text-secondary)',
    transition: 'var(--transition-fast)',
    cursor: 'pointer'
  },
  cardContent: {
    marginBottom: '20px'
  },
  projectTitle: {
    fontSize: '1.25rem',
    marginBottom: '10px',
    color: '#FFFFFF'
  },
  projectDesc: {
    fontSize: '0.88rem',
    lineHeight: '1.5',
    color: 'var(--color-text-secondary)'
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px'
  }
};

export default Projects;
