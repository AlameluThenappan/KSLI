import React from 'react';
import { Link } from 'react-router-dom';

export default function Sustainability() {
  const focusAreas = [
    {
      id: 'agri',
      title: 'Sustainable Agriculture',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20h10" />
          <path d="M10 20c0-5 2-8 2-14" />
          <path d="M12 6c1.5 1 3 1.5 5 1-1 2-1.5 3.5-1 5" />
          <path d="M12 10c1.5 1 3 1.5 5 1-1 2-1.5 3.5-1 5" />
          <path d="M12 8c-1.5 1-3 1.5-5 1 1 2 1.5 3.5 1 5" />
        </svg>
      ),
      desc: 'Advancing agro-ecological practices, organic soil enrichment, and resource-efficient regenerative farming systems.'
    },
    {
      id: 'resource',
      title: 'Resource Efficiency',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      desc: 'Optimizing industrial energy use, closed-loop water stewardship, and circular waste-to-resource flows.'
    },
    {
      id: 'nature',
      title: 'Nature Conservation',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 0-9 9c0 4.5 3.5 8.2 8 8.9V22h2v-2.1c4.5-.7 8-4.4 8-8.9a9 9 0 0 0-9-9Z" />
          <path d="M12 6v8" />
        </svg>
      ),
      desc: 'Protecting Western Ghats biodiversity corridors, restoring native wetlands, and habitat preservation.'
    },
    {
      id: 'settlements',
      title: 'Sustainable Human Settlements',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      desc: 'Eco-responsive architecture, climate-resilient community infrastructure, and net-zero institutional campuses.'
    }
  ];

  const research = [
    {
      title: 'Dutch Fund for Climate Action (DFCD) Watershed Resilience Study',
      focus: 'Nature Conservation',
      location: 'Western Ghats & Bhavani Basin',
      desc: 'A ~₹5 crore climate adaptation grant implemented in partnership with WWF India, assessing vulnerable river catchment micro-habitats and hydrological resilience.',
      partner: 'WWF India & DFCD'
    },
    {
      title: 'Industrial Energy Audit & Thermal Decarbonization Roadmap',
      focus: 'Resource Efficiency',
      location: 'Coimbatore Industrial Corridor',
      desc: 'Field modeling of waste heat recovery and rooftop solar integration across regional manufacturing and foundry clusters.',
      partner: 'CEEW & Schneider Electric'
    },
    {
      title: 'Regenerative Agriculture & Soil Organic Carbon Mapping',
      focus: 'Sustainable Agriculture',
      location: 'Erode & Tiruppur Districts',
      desc: 'Multi-year field trials assessing biochar application, multi-tier cropping, and biological nitrogen fixation in tropical soils.',
      partner: 'Centre for Sustainable Agriculture'
    }
  ];

  const projects = [
    {
      title: 'Urban Wetland Ecological Restoration & Bird Sanctuary',
      focus: 'Nature Conservation',
      location: 'Singanallur Lake, Coimbatore',
      desc: 'Establishing indigenous wetland vegetation, floating bio-treatment wetlands, and citizen-science biodiversity audits.',
      partner: 'BNHS India & Zoo Outreach'
    },
    {
      title: 'Clean Energy & Water Neutrality Infrastructure',
      focus: 'Resource Efficiency',
      location: 'Regional Campus Network',
      desc: 'Deployment of smart water meters, greywater recycling root-zone systems, and real-time solar tracking micro-grids.',
      partner: 'Mobitech Wireless & Biome'
    },
    {
      title: 'Low-Carbon Earth Building & Vernacular Architecture Guild',
      focus: 'Sustainable Human Settlements',
      location: 'Coimbatore & Auroville',
      desc: 'Prototyping compressed stabilized earth blocks, bamboo tension structures, and natural lime finishes for rural community housing.',
      partner: 'Thannal & Auroville Botanical Gardens'
    }
  ];

  const events = [
    {
      title: 'Student Conclave for Climate Action (SCCA)',
      focus: 'Nature Conservation',
      location: 'Coimbatore',
      desc: 'Annual statewide convention gathering over 600 student researchers and youth leaders to pitch institutional decarbonization frameworks.'
    },
    {
      title: 'Western Ghats Bio-Diversity & Forest Culture Festival',
      focus: 'Nature Conservation',
      location: 'Anaimalai Foothills',
      desc: 'Three-day immersive field festival celebrating the ecological, indigenous, and botanical heritage of the Western Ghats corridor.'
    },
    {
      title: 'Agri Yatra: Regenerative Farm Field Demonstrations',
      focus: 'Sustainable Agriculture',
      location: 'Western Tamil Nadu',
      desc: 'Traveling exhibition and field walk taking agronomists, farmers, and students through zero-budget natural farming demonstration plots.'
    }
  ];

  return (
    <div className="sustainability-page" style={{ paddingTop: '86px' }}>
      {/* ─── HERO BANNER ─── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A2A5C 0%, #1856A5 65%, #1A8FBF 100%)',
          color: '#FFFFFF',
          padding: '70px 0 60px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(26, 143, 191, 0.25) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />
        <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{ marginBottom: '14px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Link to="/domains" style={{ color: '#8CC2FC', textDecoration: 'none', fontWeight: 600 }}>Domains</Link>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>/</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Sustainability</span>
            </div>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#DCE9F8',
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              Domain 01 · Ecological Resilience
            </span>
            <h1
              style={{
                fontSize: 'clamp(36px, 4.4vw, 52px)',
                color: '#FFFFFF',
                margin: '0 0 16px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15
              }}
            >
              Sustainability
            </h1>
            <p
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: '#DCE9F8',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              Creating a healthier planet through sustainable practices, applied climate research, and resilient ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4 FOCUS AREAS WIDGETS ─── */}
      <section style={{ padding: '60px 0', background: '#EEF4FC', borderBottom: '1px solid #DCE9F8' }}>
        <div className="shell">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                color: '#1856A5',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Core Dimensions
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                color: '#0A2A5C',
                margin: '4px 0 8px',
                fontWeight: 800
              }}
            >
              Focus Areas
            </h2>
            <p style={{ color: '#4F617D', fontSize: '15px' }}>
              Four strategic priority areas addressing climate action, biodiversity, and built environment sustainability.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            {focusAreas.map((fa, i) => (
              <div
                key={fa.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 4px 16px rgba(10, 42, 92, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#EEF4FC',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: '22px'
                    }}
                  >
                    {fa.icon}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#1A8FBF',
                      background: '#EEF4FC',
                      padding: '4px 10px',
                      borderRadius: '999px'
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    color: '#0A2A5C',
                    margin: 0,
                    fontWeight: 700
                  }}
                >
                  {fa.title}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#4F617D',
                    lineHeight: 1.55,
                    margin: 0
                  }}
                >
                  {fa.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KUMARAGURU MICROCOSM INSIDE SUSTAINABILITY ─── */}
      <section
        id="microcosm"
        style={{
          padding: '70px 0',
          background: '#FFFFFF',
          borderBottom: '1px solid #DCE9F8'
        }}
      >
        <div className="shell">
          <div
            style={{
              background: 'linear-gradient(135deg, #0A2A5C 0%, #1856A5 100%)',
              borderRadius: '24px',
              padding: '44px 40px',
              color: '#FFFFFF',
              boxShadow: '0 16px 40px rgba(10, 42, 92, 0.16)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center'
              }}
            >
              <div>
                <span
                  style={{
                    background: 'rgba(255, 255, 255, 0.18)',
                    color: '#DCE9F8',
                    padding: '5px 14px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                    marginBottom: '14px'
                  }}
                >
                  Featured Initiative
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 3.2vw, 38px)',
                    color: '#FFFFFF',
                    margin: '0 0 12px',
                    fontWeight: 800
                  }}
                >
                  Kumaraguru Microcosm
                </h2>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#DCE9F8',
                    fontWeight: 600,
                    marginBottom: '12px'
                  }}
                >
                  Campus sustainability as a living lab for a better tomorrow.
                </p>
                <p
                  style={{
                    fontSize: '14.5px',
                    color: 'rgba(255, 255, 255, 0.88)',
                    lineHeight: 1.6,
                    margin: '0 0 24px'
                  }}
                >
                  The Kumaraguru campus serves as a microcosm of sustainable regional development. Through decentralized sewage treatment plants, solar rooftops, biodiversity mapping, and zero-waste mess composting, our campus provides student researchers with direct, living laboratories for clean technologies.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href="#research"
                    className="btn-primary"
                    style={{
                      background: '#FFFFFF',
                      color: '#0A2A5C',
                      fontWeight: 700,
                      padding: '11px 22px'
                    }}
                  >
                    View Research & Data ↓
                  </a>
                </div>
              </div>

              {/* 4 Microcosm Pillars */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px'
                }}
              >
                {[
                  {
                    title: 'Campus Biodiversity',
                    desc: 'Native flora arboretum, bird census & butterfly habitats',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DCE9F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a9 9 0 0 0-9 9c0 4.5 3.5 8.2 8 8.9V22h2v-2.1c4.5-.7 8-4.4 8-8.9a9 9 0 0 0-9-9Z" />
                        <path d="M12 6v8" />
                      </svg>
                    )
                  },
                  {
                    title: 'Waste Management',
                    desc: '100% organic waste composted & biogas fuel conversion',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DCE9F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 4 23 10 17 10" />
                        <polyline points="1 20 1 14 7 14" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                      </svg>
                    )
                  },
                  {
                    title: 'Water Stewardship',
                    desc: '1.2 MLD wastewater treated & groundwater recharge pits',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DCE9F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Energy Conservation',
                    desc: 'Rooftop solar arrays & smart micro-grid monitoring',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DCE9F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                    )
                  }
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '16px',
                      padding: '18px',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>
                      {pillar.icon}
                    </span>
                    <h4 style={{ margin: '0 0 4px', fontSize: '15px', color: '#FFFFFF', fontWeight: 700 }}>
                      {pillar.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '12.5px', color: '#DCE9F8', lineHeight: 1.4 }}>
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESEARCH SECTION ─── */}
      <section id="research" style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <div className="shell">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '32px'
            }}
          >
            <div>
              <span
                style={{
                  color: '#1856A5',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Scientific Inquiry
              </span>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  color: '#0A2A5C',
                  margin: '4px 0 0',
                  fontWeight: 800
                }}
              >
                Research
              </h2>
            </div>
            <span style={{ color: '#4F617D', fontSize: '14px', fontWeight: 600 }}>
              Applied Environmental Studies →
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px'
            }}
          >
            {research.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '26px',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 6px 20px rgba(10, 42, 92, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}
                  >
                    <span
                      style={{
                        background: '#EEF4FC',
                        color: '#1856A5',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        border: '1px solid #DCE9F8'
                      }}
                    >
                      {item.focus}
                    </span>
                    <span style={{ fontSize: '12.5px', color: '#1A8FBF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '17px',
                      color: '#0A2A5C',
                      margin: '4px 0 10px',
                      fontWeight: 700,
                      lineHeight: 1.35
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4F617D',
                      lineHeight: 1.55,
                      margin: '0 0 16px'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  style={{
                    borderTop: '1px solid #EEF4FC',
                    paddingTop: '12px',
                    fontSize: '12.5px',
                    color: '#1856A5',
                    fontWeight: 600
                  }}
                >
                  Partner: {item.partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS SECTION ─── */}
      <section
        id="projects"
        style={{
          padding: '70px 0',
          background: '#EEF4FC',
          borderTop: '1px solid #DCE9F8'
        }}
      >
        <div className="shell">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '32px'
            }}
          >
            <div>
              <span
                style={{
                  color: '#1856A5',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Field Implementation
              </span>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  color: '#0A2A5C',
                  margin: '4px 0 0',
                  fontWeight: 800
                }}
              >
                Projects
              </h2>
            </div>
            <span style={{ color: '#4F617D', fontSize: '14px', fontWeight: 600 }}>
              Action Initiatives →
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px'
            }}
          >
            {projects.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '26px',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 6px 20px rgba(10, 42, 92, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}
                  >
                    <span
                      style={{
                        background: '#EEF4FC',
                        color: '#1856A5',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        border: '1px solid #DCE9F8'
                      }}
                    >
                      {item.focus}
                    </span>
                    <span style={{ fontSize: '12.5px', color: '#1A8FBF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '17px',
                      color: '#0A2A5C',
                      margin: '4px 0 10px',
                      fontWeight: 700,
                      lineHeight: 1.35
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4F617D',
                      lineHeight: 1.55,
                      margin: '0 0 16px'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  style={{
                    borderTop: '1px solid #EEF4FC',
                    paddingTop: '12px',
                    fontSize: '12.5px',
                    color: '#1856A5',
                    fontWeight: 600
                  }}
                >
                  Partner: {item.partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS SECTION ─── */}
      <section
        id="events"
        style={{
          padding: '70px 0',
          background: '#FFFFFF',
          borderTop: '1px solid #DCE9F8'
        }}
      >
        <div className="shell">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '32px'
            }}
          >
            <div>
              <span
                style={{
                  color: '#1856A5',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Community & Gatherings
              </span>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  color: '#0A2A5C',
                  margin: '4px 0 0',
                  fontWeight: 800
                }}
              >
                Events
              </h2>
            </div>
            <span style={{ color: '#4F617D', fontSize: '14px', fontWeight: 600 }}>
              Flagship Conclaves →
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px'
            }}
          >
            {events.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '26px',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 6px 20px rgba(10, 42, 92, 0.05)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}
                >
                  <span
                    style={{
                      background: '#EEF4FC',
                      color: '#1856A5',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: '1px solid #DCE9F8'
                    }}
                  >
                    {item.focus}
                  </span>
                  <span style={{ fontSize: '12.5px', color: '#1A8FBF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.location}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    color: '#0A2A5C',
                    margin: '4px 0 10px',
                    fontWeight: 700,
                    lineHeight: 1.35
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4F617D',
                    lineHeight: 1.55,
                    margin: 0
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Link Back to Domains */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/domains" className="secondary" style={{ padding: '12px 28px' }}>
              ← Return to All Domains
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
