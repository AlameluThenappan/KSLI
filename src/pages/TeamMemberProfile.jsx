import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData.js';
import '../styles/TeamMemberProfile.css';

export default function TeamMemberProfile() {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="profile-page" style={{ padding: '140px 0 80px', textAlign: 'center' }}>
        <div className="shell">
          <h1 style={{ color: '#0A2A5C', fontSize: '36px', marginBottom: '16px' }}>Team Member Not Found</h1>
          <p style={{ color: '#4F617D', marginBottom: '28px' }}>The requested team profile could not be located.</p>
          <Link to="/about" className="primary">
            ← Return to About KSLI
          </Link>
        </div>
      </div>
    );
  }

  // Related members from the same category
  const relatedMembers = teamMembers.filter((m) => m.category === member.category && m.id !== member.id);

  return (
    <div className="profile-page">
      {/* ── PROFILE HEADER HERO ── */}
      <section className="profile-hero">
        <div className="shell">
          <Link to="/about#team" className="profile-back-link">
            ← Back to Team & About KSLI
          </Link>

          <div className="profile-header-grid">
            <div className="profile-avatar-wrap">
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="profile-avatar-img" />
              ) : (
                <div className="profile-placeholder-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}
            </div>

            <div className="profile-header-copy">
              <span className="profile-category-pill">{member.category}</span>
              <h1 className="profile-name">{member.name}</h1>
              {member.role && <p className="profile-role">{member.role}</p>}
              <p className="profile-intro">{member.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFILE CONTENT BODY ── */}
      <section className="profile-body">
        <div className="shell profile-content-grid">
          {/* Main Column */}
          <div className="profile-main-col">
            {/* About */}
            <article className="profile-card">
              <h2 className="profile-card-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                About
              </h2>
              <p className="profile-text">{member.about}</p>
            </article>

            {/* Role at KSLI */}
            <article className="profile-card">
              <h2 className="profile-card-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
                Role at KSLI
              </h2>
              {member.responsibilities && member.responsibilities.length > 0 ? (
                <ul className="profile-list">
                  {member.responsibilities.map((resp, i) => (
                    <li key={i} className="profile-list-item">
                      <svg className="profile-bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="profile-text">
                  Directing initiatives, community outreach, and research deliverables within the {member.category} vertical.
                </p>
              )}
            </article>

            {/* Associated Projects */}
            <article className="profile-card">
              <h2 className="profile-card-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Associated Projects
              </h2>
              {member.projects && member.projects.length > 0 ? (
                <div className="profile-projects-grid">
                  {member.projects.map((proj) => (
                    <div key={proj.title} className="profile-project-item">
                      {proj.image ? (
                        <img src={proj.image} alt={proj.title} className="profile-project-img" />
                      ) : (
                        <div style={{ background: '#EEF4FC', minHeight: '140px' }} />
                      )}
                      <div className="profile-project-copy">
                        <div>
                          <div className="profile-project-topline">
                            <span style={{ color: '#1856A5' }}>{proj.focus}</span>
                            {proj.location && <span style={{ color: '#1A8FBF' }}>{proj.location}</span>}
                          </div>
                          <h3 className="profile-project-title">{proj.title}</h3>
                          <p className="profile-project-desc">{proj.description}</p>
                        </div>
                        {proj.link && (
                          <Link to={proj.link} className="profile-project-link">
                            Explore Project Detail <span>→</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="profile-empty-state">
                  Field project associations and community initiatives are currently being consolidated for this profile.
                </div>
              )}
            </article>

            {/* Associated Research */}
            <article className="profile-card">
              <h2 className="profile-card-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Associated Research
              </h2>
              {member.research && member.research.length > 0 ? (
                <div style={{ display: 'grid', gap: '16px' }}>
                  {member.research.map((res) => (
                    <div key={res.title} className="profile-research-item">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ background: '#EEF4FC', color: '#1856A5', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>
                          {res.focus}
                        </span>
                        {res.year && <span style={{ fontSize: '12px', color: '#4F617D', fontWeight: 600 }}>Year {res.year}</span>}
                      </div>
                      <h3 className="profile-research-title">{res.title}</h3>
                      <p className="profile-text" style={{ fontSize: '14px' }}>{res.summary}</p>
                      {res.partner && (
                        <div className="profile-research-meta">Partner: {res.partner}</div>
                      )}
                      {res.link && (
                        <Link to={res.link} className="profile-project-link">
                          View Research Publication <span>→</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="profile-empty-state">
                  Scientific papers, monographs, and empirical baseline audits will be updated.
                </div>
              )}
            </article>
          </div>

          {/* Sidebar Column */}
          <aside className="profile-sidebar">
            {/* Category / Centre Card */}
            <div className="profile-side-card">
              <h4>Institutional Vertical</h4>
              <p style={{ fontSize: '14px', color: '#4F617D', lineHeight: 1.6, margin: '0 0 16px' }}>
                This profile is affiliated with KSLI’s <strong>{member.category}</strong> mandate, consolidating applied interventions and academic linkages.
              </p>
              <Link to="/domains" className="primary" style={{ width: '100%', boxSizing: 'border-box', textAlign: 'center', fontSize: '13px', padding: '10px 16px' }}>
                Explore Domains →
              </Link>
            </div>

            {/* Other Members in this Vertical */}
            {relatedMembers.length > 0 && (
              <div className="profile-side-card">
                <h4>Other {member.category} Members</h4>
                <div className="profile-related-members">
                  {relatedMembers.map((rel) => (
                    <Link key={rel.id} to={`/team/${rel.id}`} className="profile-related-link">
                      <span>{rel.name}</span>
                      <span style={{ color: '#1856A5', fontSize: '12px' }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to All Team Members */}
            <div className="profile-side-card" style={{ background: '#0A2A5C', color: '#FFFFFF', borderColor: '#0A2A5C' }}>
              <h4 style={{ color: '#FFFFFF', borderBottomColor: 'rgba(255,255,255,0.15)' }}>The KSLI Team</h4>
              <p style={{ fontSize: '13.5px', color: '#DCE9F8', lineHeight: 1.6, margin: '0 0 16px' }}>
                Discover our multidisciplinary fellows, agronomists, and social researchers across all verticals.
              </p>
              <Link to="/about#team" style={{ display: 'block', textAlign: 'center', padding: '10px 16px', background: '#FFFFFF', color: '#0A2A5C', borderRadius: '999px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                All Team Members →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
