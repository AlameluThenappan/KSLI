import React from 'react';
import { Link } from 'react-router-dom';

export default function GetInvolved() {
  const engagementTracks = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      to: '/get-involved/volunteer',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      tagline: 'Join community field actions & living lab initiatives.',
      description: 'Engage in Western Ghats habitat cleanups, wetland bird censuses, tree planting drives, or rural farmer outreach events alongside our research fellows.',
      actionText: 'Apply as Volunteer'
    },
    {
      id: 'student-internship',
      title: 'Student Internships',
      to: '/get-involved/student-internship',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 3 6 3 6 3s6 0 6-3v-5" />
        </svg>
      ),
      tagline: 'Hands-on practical research for undergraduate and postgraduate scholars.',
      description: 'Spend 2 to 6 months embedded in our Centres of Excellence (Dairy, Sugarcane, Social Development) conducting empirical fieldwork, sensor data collection, or community surveys.',
      actionText: 'Apply for Internship'
    },
    {
      id: 'academic-collaboration',
      title: 'Academic Collaboration',
      to: '/get-involved/academic-collaboration',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        </svg>
      ),
      tagline: 'Joint research proposals, faculty exchanges & curriculum design.',
      description: 'We co-develop action research grants, peer-reviewed monographs, and experiential learning modules with Indian and international university departments.',
      actionText: 'Propose Collaboration'
    },
    {
      id: 'industry-csr-partnership',
      title: 'Industry & CSR Partnerships',
      to: '/get-involved/industry-csr-partnership',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      tagline: 'Deploy CSR capital and industrial innovation into verified high-impact pathways.',
      description: 'Partner with KSLI to anchor CSR initiatives across agriculture, rural dairy enterprise incubation, and ecological conservation with institutional rigor and transparency.',
      actionText: 'Partner with KSLI'
    },
    {
      id: 'contact',
      title: 'Contact KSLI',
      to: '/get-involved/contact',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      tagline: 'Reach our institutional secretariat and leadership directly.',
      description: 'Visit our campus living laboratory, connect with our program managers, or submit a custom institutional inquiry.',
      actionText: 'Contact Secretariat'
    }
  ];

  return (
    <div className="get-involved-page" style={{ paddingTop: '86px' }}>
      {/* HEADER */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A2A5C 0%, #114383 60%, #1856A5 100%)',
          color: '#FFFFFF',
          padding: '64px 0 54px'
        }}
      >
        <div className="shell">
          <div style={{ maxWidth: '780px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#DCE9F8',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '14px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              Collaborative Engagement
            </span>
            <h1
              style={{
                fontSize: 'clamp(34px, 4vw, 48px)',
                color: '#FFFFFF',
                margin: '0 0 14px',
                fontWeight: 800,
                lineHeight: 1.15
              }}
            >
              Get Involved
            </h1>
            <p style={{ fontSize: '17px', color: '#DCE9F8', lineHeight: 1.6, margin: 0 }}>
              Whether you are an aspiring student, a dedicated volunteer, an academic researcher, or an industry partner, KSLI provides structured avenues to create lasting environmental and rural impact.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT TRACKS GRID WITH DIRECT DEDICATED FORM LINKS */}
      <section id="form" style={{ padding: '64px 0 80px', background: '#FFFFFF' }}>
        <div className="shell">
          <div style={{ maxWidth: '720px', marginBottom: '36px' }}>
            <span
              style={{
                color: '#1856A5',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Engagement Tracks
            </span>
            <h2 style={{ fontSize: '30px', color: '#0A2A5C', margin: '6px 0 10px', fontWeight: 800 }}>
              Select a Pathway to Apply
            </h2>
            <p style={{ color: '#4F617D', fontSize: '15.5px', lineHeight: 1.6, margin: 0 }}>
              Each engagement track has a dedicated submission form. Choose the pathway that best aligns with your goals to connect with the respective KSLI domain team.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {engagementTracks.map((track) => (
              <article
                key={track.id}
                style={{
                  background: '#F9FBFE',
                  border: '1.5px solid #DCE9F8',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(10, 42, 92, 0.04)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: '#EEF4FC',
                      color: '#1856A5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px'
                    }}
                  >
                    {track.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '22px',
                      color: '#0A2A5C',
                      margin: '0 0 8px',
                      fontWeight: 700
                    }}
                  >
                    {track.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: '#1856A5',
                      fontWeight: 600,
                      marginBottom: '10px'
                    }}
                  >
                    {track.tagline}
                  </p>
                  <p
                    style={{
                      color: '#4F617D',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}
                  >
                    {track.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={track.to}
                    className="btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: '#1856A5',
                      color: '#FFFFFF',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{track.actionText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
