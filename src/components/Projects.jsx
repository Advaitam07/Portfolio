import React from 'react';
import { Github, ExternalLink, Cloud, Cpu, Server, Layers, Shield, DollarSign } from 'lucide-react';

function Projects() {
  const projectsData = [
    {
      title: "Portfolio Website",
      category: "Frontend & CI/CD",
      desc: "This premium portfolio site built using React + Vite. Features custom CSS glassmorphism, responsive navigation drawers, an interactive shell terminal simulation, and a live visual DevOps pipeline emulator. Automatically deployed to AWS.",
      tags: ["React", "Vite", "Custom CSS", "Lucide React", "Netlify"],
      icon: Layers,
      color: "var(--secondary)",
      github: "https://github.com/devops-student/portfolio",
      demo: "#hero"
    },
    {
      title: "AWS Two-Tier Architecture",
      category: "Cloud Engineering",
      desc: "Designed and deployed a highly available, secure web application infrastructure using AWS CloudFormation. Includes a custom VPC, Multi-AZ subnets, Application Load Balancers, Auto Scaling Groups for EC2 instances, and Multi-AZ RDS MySQL instances.",
      tags: ["AWS VPC", "CloudFormation", "AutoScaling", "RDS", "EC2"],
      icon: Cloud,
      color: "var(--primary)",
      github: "https://github.com/devops-student/aws-two-tier-infra",
      demo: "https://aws.amazon.com/"
    },
    {
      title: "CI/CD Pipeline Project",
      category: "DevOps & Automation",
      desc: "Configured a robust Jenkins pipeline that triggers automatically on Git commits. The pipeline executes Python linting, executes unit tests, performs SonarQube quality gate scanning, constructs Docker images, and deploys them to staging environments.",
      tags: ["Jenkins", "Docker", "SonarQube", "Bash", "Webhooks"],
      icon: Cpu,
      color: "var(--primary)",
      github: "https://github.com/devops-student/jenkins-pipeline-suite",
      demo: "#pipeline"
    },
    {
      title: "Docker Deployment Project",
      category: "DevOps & Systems",
      desc: "Created lightweight Docker environments for multi-container microservice applications. Implemented multi-stage Dockerfiles to minimize build footprints (reduced from 800MB to 50MB) and managed system volumes/networks with Docker Compose.",
      tags: ["Docker", "Docker Compose", "Microservices", "Nginx", "Alpine"],
      icon: Server,
      color: "var(--secondary)",
      github: "https://github.com/devops-student/docker-deployment-micro",
      demo: "https://www.docker.com/"
    },
    {
      title: "Kubernetes Project",
      category: "DevOps & Orchestration",
      desc: "Deployed a containerized app to a local Minikube cluster and AWS EKS. Designed manifest structures for Deployments, LoadBalancer services, Horizontal Pod Autoscaling (HPA), and persistent volumes. Configured monitoring via Prometheus/Grafana.",
      tags: ["Kubernetes", "EKS", "YAML", "Prometheus", "Grafana"],
      icon: Shield,
      color: "var(--success)",
      github: "https://github.com/devops-student/k8s-cluster-configs",
      demo: "https://kubernetes.io/"
    },
    {
      title: "AWS Cost Optimization Dashboard",
      category: "Cloud & Automation",
      desc: "Developed a Python Lambda script that utilizes AWS Boto3 APIs to audit active resources. Automatically stops idle EC2 instances, deletes unattached EBS volumes, and generates a cloud-cost analysis log emailed daily via AWS SES.",
      tags: ["Python", "Boto3", "AWS Lambda", "SES", "EventBridge"],
      icon: DollarSign,
      color: "var(--primary)",
      github: "https://github.com/devops-student/aws-cost-optimizer",
      demo: "https://aws.amazon.com/lambda/"
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
          <span className="section-subtitle">Showcase</span>
          <h2 className="section-title">Technical Projects</h2>
        </div>

        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem'
        }}>
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="glass-panel project-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.25rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '10px',
                    backgroundColor: `${project.color}15`,
                    border: `1px solid ${project.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: project.color,
                    boxShadow: `0 0 10px ${project.color}10`
                  }}>
                    <Icon size={22} />
                  </div>
                  <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-title)',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.35rem',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-title)'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.925rem',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem',
                  flexGrow: 1
                }}>
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem'
                }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-primary)',
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '1.25rem'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <Github size={16} /> Code Codebase
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: project.color,
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .project-card {
          transition: var(--transition-smooth);
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 153, 0, 0.2);
        }
        .project-link:hover {
          color: #ffffff !important;
        }
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
