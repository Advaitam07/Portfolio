import React from 'react';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

function Certifications() {
  const certificationsData = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "May 2025",
      status: "Earned",
      id: "AWS-CCP-987123",
      link: "https://aws.amazon.com/verification",
      badgeColor: "var(--primary)"
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Target: Q3 2026",
      status: "In Progress",
      id: "N/A",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      badgeColor: "var(--secondary)"
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "Target: Q4 2026",
      status: "In Progress",
      id: "N/A",
      link: "https://www.hashicorp.com/certification/terraform-associate",
      badgeColor: "var(--success)"
    }
  ];

  return (
    <div style={{
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="cert-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {certificationsData.map((cert, idx) => {
            const isEarned = cert.status === "Earned";
            return (
              <div
                key={idx}
                className="glass-panel cert-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow status dot */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: isEarned ? 'var(--success)' : 'var(--text-secondary)',
                  backgroundColor: isEarned ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.03)',
                  border: isEarned ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid var(--glass-border)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '20px'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: isEarned ? 'var(--success)' : 'var(--text-muted)',
                    boxShadow: isEarned ? 'var(--glow-green)' : 'none'
                  }} />
                  {cert.status}
                </div>

                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: `${cert.badgeColor}12`,
                  border: `1px solid ${cert.badgeColor}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: cert.badgeColor
                }}>
                  <Award size={24} />
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    marginBottom: '0.4rem',
                    fontFamily: 'var(--font-title)',
                    lineHeight: 1.4
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {cert.issuer}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '1.25rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={14} style={{ color: 'var(--text-muted)' }} />
                    <span>Date: {cert.date}</span>
                  </div>
                  {isEarned && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--success)' }} />
                      <span>ID: <code>{cert.id}</code></span>
                    </div>
                  )}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: cert.badgeColor,
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginTop: '0.5rem',
                    alignSelf: 'flex-start',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  Verify Credential <ExternalLink size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cert-card {
          transition: var(--transition-smooth);
        }
        .cert-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 153, 0, 0.2);
        }
        .cert-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Certifications;
