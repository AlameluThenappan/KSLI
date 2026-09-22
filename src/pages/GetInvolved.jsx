import React, { useState } from 'react';

export default function GetInvolved() {
  const [activePathway, setActivePathway] = useState('volunteer');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Individual Volunteer',
    domainInterest: 'Both Sustainability & Livelihood',
    message: ''
  });

  const pathways = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      tagline: 'Join community field actions & living lab initiatives.',
      description: 'Engage in Western Ghats habitat cleanups, wetland bird censuses, tree planting drives, or rural farmer outreach events alongside our research fellows.',
      opportunities: [
        'Urban Wetland Restoration Volunteer (Singanallur Lake)',
        'Native Species Arboretum Maintenance (Microcosm Campus)',
        'Community Farmer Outreach & Event Support (Velan Thiruvizha)'
      ]
    },
    {
      id: 'internships',
      title: 'Student Internships',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 3 6 3 6 3s6 0 6-3v-5" />
        </svg>
      ),
      tagline: 'Hands-on practical research for undergraduate and postgraduate scholars.',
      description: 'Spend 2 to 6 months embedded in our Centres of Excellence (Dairy, Sugarcane, Social Development) conducting empirical fieldwork, sensor data collection, or community surveys.',
      opportunities: [
        'Agri-Tech & IoT Extension Intern (Dairy CoE)',
        'Soil Organic Carbon Field Analyst (Sugarcane CoE)',
        'Campus Sustainability Micro-Grid Intern (Microcosm)'
      ]
    },
    {
      id: 'collaboration',
      title: 'Academic Collaboration',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        </svg>
      ),
      tagline: 'Joint research proposals, faculty exchanges & curriculum design.',
      description: 'We co-develop action research grants, peer-reviewed monographs, and experiential learning modules with Indian and international university departments.',
      opportunities: [
        'Joint Research Proposals (DST, SERB, International Foundations)',
        'Cross-Institutional Student Immersion Visits',
        'Co-Authoring Technical Reports & Case Studies'
      ]
    },
    {
      id: 'partnerships',
      title: 'Industry & CSR Partnerships',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      tagline: 'Deploy CSR capital and industrial innovation into verified high-impact pathways.',
      description: 'Partner with KSLI to anchor CSR initiatives across agriculture, rural dairy enterprise incubation, and ecological conservation with institutional rigor and transparency.',
      opportunities: [
        'Fund a Farmer Producer Organization Cluster',
        'Sponsor a Centre of Excellence Research Track',
        'Industrial Decarbonization & Resource Efficiency Assessment'
      ]
    },
    {
      id: 'contact',
      title: 'Contact KSLI',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      tagline: 'Reach our institutional secretariat and leadership directly.',
      description: 'Visit our campus living laboratory, connect with our program managers, or submit a custom institutional inquiry.',
      opportunities: [
        'Campus: Kumaraguru Institutions, Saravanampatti, Coimbatore, TN 641049',
        'Email: info@ksli.org.in / partnerships@ksli.org.in',
        'Phone: +91 422 266 9401'
      ]
    }
  ];

  const current = pathways.find((p) => p.id === activePathway);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                marginBottom: '14px'
              }}
            >
              Collaborative Engagement
            </span>
            <h1
              style={{
                fontSize: 'clamp(34px, 4vw, 48px)',
                color: '#FFFFFF',
                margin: '0 0 14px',
                fontWeight: 800
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

      {/* 5 PATHWAY SELECTORS */}
      <section style={{ padding: '60px 0', background: '#FFFFFF', borderBottom: '1px solid #DCE9F8' }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              marginBottom: '40px'
            }}
          >
            {pathways.map((p) => {
              const isActive = activePathway === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePathway(p.id)}
                  style={{
                    background: isActive ? '#0A2A5C' : '#EEF4FC',
                    color: isActive ? '#FFFFFF' : '#0A2A5C',
                    border: isActive ? '1.5px solid #0A2A5C' : '1px solid #DCE9F8',
                    borderRadius: '16px',
                    padding: '18px 16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 6px 20px rgba(10, 42, 92, 0.2)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span style={{ fontSize: '26px', display: 'block', marginBottom: '8px' }}>
                    {p.icon}
                  </span>
                  <strong style={{ fontSize: '14px', display: 'block' }}>{p.title}</strong>
                </button>
              );
            })}
          </div>

          {/* ACTIVE PATHWAY DETAIL CARD */}
          <div
            style={{
              background: '#EEF4FC',
              borderRadius: '24px',
              border: '1.5px solid #DCE9F8',
              padding: '40px 36px',
              marginBottom: '60px'
            }}
          >
            <div style={{ maxWidth: '800px' }}>
              <span
                style={{
                  color: '#1856A5',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Engagement Track
              </span>
              <h2
                style={{
                  fontSize: '28px',
                  color: '#0A2A5C',
                  margin: '6px 0 10px',
                  fontWeight: 800
                }}
              >
                {current.title}
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#1856A5',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                {current.tagline}
              </p>
              <p style={{ color: '#4F617D', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                {current.description}
              </p>

              <h4 style={{ color: '#0A2A5C', fontSize: '15px', margin: '0 0 12px', fontWeight: 700 }}>
                Current Openings & Focus Channels:
              </h4>
              <ul style={{ paddingLeft: '20px', margin: '0 0 28px', color: '#1D2D44', fontSize: '14.5px', lineHeight: 1.7 }}>
                {current.opportunities.map((opp) => (
                  <li key={opp} style={{ marginBottom: '6px' }}>
                    {opp}
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className="btn-primary"
                style={{
                  padding: '12px 26px',
                  background: '#1856A5',
                  color: '#FFFFFF',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Register Your Interest Below ↓
              </a>
            </div>
          </div>

          {/* INQUIRY & SUBMISSION FORM */}
          <div id="form" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span
                style={{
                  color: '#1856A5',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Direct Connect
              </span>
              <h2 style={{ fontSize: '28px', color: '#0A2A5C', margin: '4px 0 8px', fontWeight: 800 }}>
                Get In Touch With KSLI
              </h2>
              <p style={{ color: '#4F617D', fontSize: '15px' }}>
                Complete this form to submit your interest, propose a project, or contact our team.
              </p>
            </div>

            {submitted ? (
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '48px',
                  textAlign: 'center',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 8px 30px rgba(10, 42, 92, 0.08)'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '24px', color: '#0A2A5C', margin: '0 0 10px', fontWeight: 800 }}>
                  Thank You for Your Interest!
                </h3>
                <p style={{ color: '#4F617D', fontSize: '15px', maxWidth: '540px', margin: '0 auto 24px' }}>
                  Your submission has been received by the KSLI Institutional Secretariat. A member of our relevant domain team will reach out to you within 2 working days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="secondary"
                  style={{ padding: '10px 22px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '36px',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 8px 30px rgba(10, 42, 92, 0.06)',
                  display: 'grid',
                  gap: '20px'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <label style={{ display: 'grid', gap: '8px', color: '#0A2A5C', fontSize: '13.5px', fontWeight: 600 }}>
                    Full Name *
                    <input
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DCE9F8',
                        fontSize: '14px',
                        background: '#EEF4FC'
                      }}
                    />
                  </label>

                  <label style={{ display: 'grid', gap: '8px', color: '#0A2A5C', fontSize: '13.5px', fontWeight: 600 }}>
                    Email Address *
                    <input
                      required
                      type="email"
                      placeholder="e.g. anand@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DCE9F8',
                        fontSize: '14px',
                        background: '#EEF4FC'
                      }}
                    />
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <label style={{ display: 'grid', gap: '8px', color: '#0A2A5C', fontSize: '13.5px', fontWeight: 600 }}>
                    I am engaging as:
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DCE9F8',
                        fontSize: '14px',
                        background: '#EEF4FC'
                      }}
                    >
                      <option>Individual Volunteer</option>
                      <option>Student / Research Scholar</option>
                      <option>Faculty / Academic Representative</option>
                      <option>Corporate / CSR Funder</option>
                      <option>Farmer / Producer Organization</option>
                      <option>Government / Policy Maker</option>
                    </select>
                  </label>

                  <label style={{ display: 'grid', gap: '8px', color: '#0A2A5C', fontSize: '13.5px', fontWeight: 600 }}>
                    Domain of Interest:
                    <select
                      value={formData.domainInterest}
                      onChange={(e) => setFormData({ ...formData, domainInterest: e.target.value })}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DCE9F8',
                        fontSize: '14px',
                        background: '#EEF4FC'
                      }}
                    >
                      <option>Both Sustainability & Livelihood</option>
                      <option>Sustainability (Agriculture, Resource Efficiency, Nature)</option>
                      <option>Livelihood (Dairy, Sugarcane, FPO Enterprise)</option>
                      <option>Academic Programs & Certificate Courses</option>
                    </select>
                  </label>
                </div>

                <label style={{ display: 'grid', gap: '8px', color: '#0A2A5C', fontSize: '13.5px', fontWeight: 600 }}>
                  Message / Project Proposal Details *
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us how you would like to collaborate or describe your initiative..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #DCE9F8',
                      fontSize: '14px',
                      background: '#EEF4FC',
                      fontFamily: 'inherit'
                    }}
                  />
                </label>

                <div style={{ textAlign: 'right', marginTop: '10px' }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      padding: '13px 32px',
                      fontSize: '14px',
                      fontWeight: 700
                    }}
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
