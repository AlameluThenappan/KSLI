import React from 'react';
import { Link } from 'react-router-dom';

export default function Livelihood() {
  const focusAreas = [
    {
      id: 'farm',
      title: 'Farm-Based Livelihood',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20h10" />
          <path d="M10 20c0-5 2-8 2-14" />
          <path d="M12 6c1.5 1 3 1.5 5 1-1 2-1.5 3.5-1 5" />
          <path d="M12 10c1.5 1 3 1.5 5 1-1 2-1.5 3.5-1 5" />
          <path d="M12 8c-1.5 1-3 1.5-5 1 1 2 1.5 3.5 1 5" />
        </svg>
      ),
      desc: 'Agriculture, animal husbandry, dairy farming, and climate-resilient integrated farming systems.'
    },
    {
      id: 'off-farm',
      title: 'Off-Farm Livelihood',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      desc: 'Agro-processing, rural manufacturing, post-harvest sorting, and value-addition collective enterprises.'
    },
    {
      id: 'non-farm',
      title: 'Non-Farm Livelihood',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      desc: 'Rural services, artisan micro-enterprises, trade clusters, and vocational entrepreneurship pathways.'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Farmers Engaged', sub: 'Smallholder farmers in sugarcane fertilizer-optimization program' },
    { number: '3', label: 'Centres of Excellence', sub: 'Dedicated CoEs for Dairy, Sugarcane, and Social Development' },
    { number: '4+', label: 'Active Initiatives', sub: 'Climate Smart Dairy, Pariyur FPO, Farmer 360 & Young Farmers Forum' },
    { number: '₹5 Cr+', label: 'Climate Adaptation Grant', sub: 'Backing scalable nature-based livelihood solutions with WWF' }
  ];

  const research = [
    {
      title: 'Fertilizer Optimization (N-Balancing) in Sugarcane',
      focus: 'Farm-Based Livelihood',
      location: 'Sakthi Nagar & Erode',
      desc: 'An integrated research and extension program supporting over 5,000 farmers supplying Sakthi Sugars, combining scientific nitrogen-balancing with field capacity building.',
      partner: 'Univ. of Hohenheim & Sakthi Sugars'
    },
    {
      title: 'Climate Smart Dairy Digital Extension Model',
      focus: 'Farm-Based Livelihood',
      location: 'Coimbatore & Tiruppur',
      desc: 'Focused on productivity enhancement through entrepreneurship and farmer training, alongside a digital, evidence-based extension platform for smallholder dairy herds.',
      partner: 'NITARA & Aavin'
    },
    {
      title: 'Dutch Fund for Climate Action (DFCD) Livelihood Grant',
      focus: 'Off-Farm Livelihood',
      location: 'Western Ghats Landscape',
      desc: 'A ~₹5 crore climate adaptation grant implemented in partnership with WWF India, focused on scalable, nature-based enterprise solutions for forest-fringe communities.',
      partner: 'WWF India & DFCD'
    }
  ];

  const coreProjects = [
    {
      title: 'Climate Smart Dairy Entrepreneurship Program',
      focus: 'Farm-Based Livelihood',
      location: 'Western Tamil Nadu',
      desc: 'Building farmer-led dairy enterprises with climate-resilient practices, clean milking systems, and collective chilling infrastructure.',
      partner: 'ABT Foods & Aavin'
    },
    {
      title: 'Pariyur Farmer Producer Organization (FPO)',
      focus: 'Off-Farm Livelihood',
      location: 'Gobichettipalayam',
      desc: 'A farmer-owned collective strengthening direct market access, bulk agricultural input procurement, and shared post-harvest facilities.',
      partner: 'StartupTN & NABARD'
    },
    {
      title: 'Farmer 360 Holistic Advisory Initiative',
      focus: 'Farm-Based Livelihood',
      location: 'Regional Clusters',
      desc: 'A comprehensive support model addressing the full spectrum of farmer needs from soil testing and credit counseling to weather risk mitigation.',
      partner: 'Kisan Konnect'
    },
    {
      title: 'Young Farmers Forum',
      focus: 'Farm-Based Livelihood',
      location: 'Kongu Region',
      desc: 'Engaging and equipping the next generation of rural youth in modern, tech-enabled, sustainable agriculture and precision farming.',
      partner: 'Kumaraguru AgTech Hub'
    }
  ];

  const csrProjects = [
    {
      title: 'Uzhavan Foundation Community Project',
      focus: 'Farm-Based Livelihood',
      location: 'Manapparai, Tiruchirappalli',
      desc: 'CSR-funded initiative revitalizing rainfed agrarian communities through farm pond networks and drought-hardy millet cultivation.',
      partner: 'Uzhavan Foundation'
    },
    {
      title: 'Armour Steel Buildings Vocational Hub',
      focus: 'Non-Farm Livelihood',
      location: 'Salem',
      desc: 'Funded technical skills training in precision metal fabrication, structural fabrication, and rural industrial enterprise development.',
      partner: 'Armour Steel'
    },
    {
      title: 'Centres of Excellence (CoE Network)',
      focus: 'Cross-Pathway',
      location: 'Coimbatore & Erode',
      desc: 'Anchoring these projects are the dedicated CoE for Dairy, CoE for Sugarcane, and CoE for Social Development.',
      partner: 'Sakthi Sugars & Ashok Leyland'
    }
  ];

  const events = [
    {
      title: 'Young Farmers Conclave',
      focus: 'Farm-Based Livelihood',
      location: 'Coimbatore',
      desc: 'A statewide platform for emerging farmers, agri-entrepreneurs, and researchers to connect, showcase technologies, and network.'
    },
    {
      title: 'Sugarcane Innovation & Sustainability Conference',
      focus: 'Farm-Based Livelihood',
      location: 'Sakthi Nagar',
      desc: 'Bringing together sugarcane researchers, mill leaders, agronomists, and over 1,000 progressive cane growers around soil health.'
    },
    {
      title: 'Kongunadu Velan Matrum Kaalnadai Thiruvizha',
      focus: 'Farm-Based Livelihood',
      location: 'Tiruppur',
      desc: 'A regional farmer and livestock festival celebrating indigenous cattle breeds, local agricultural heritage, and organic inputs.'
    }
  ];

  return (
    <div className="livelihood-page" style={{ paddingTop: '86px' }}>
      {/* ─── HERO BANNER ─── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A2A5C 0%, #114383 60%, #1856A5 100%)',
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
              'radial-gradient(circle at 85% 25%, rgba(24, 86, 165, 0.4) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />
        <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ marginBottom: '14px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Link to="/domains" style={{ color: '#8CC2FC', textDecoration: 'none', fontWeight: 600 }}>Domains</Link>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>/</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Livelihood</span>
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
              Domain 02 · Rural Prosperity
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
              Livelihood
            </h1>
            <p
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: '#DCE9F8',
                lineHeight: 1.6,
                margin: '0 0 14px'
              }}
            >
              Strengthening livelihoods for resilient and prosperous rural communities.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.6,
                maxWidth: '740px',
                margin: 0
              }}
            >
              KSLI’s Livelihood vertical works at the intersection of agriculture, entrepreneurship, and rural development — helping farming communities build resilient, diversified income streams through applied field research, farmer producer organizations, and market linkages.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4 KPI STATS BAR ─── */}
      <section style={{ background: '#EEF4FC', borderBottom: '1px solid #DCE9F8', padding: '24px 0' }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '20px'
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px 22px',
                  border: '1px solid #DCE9F8',
                  boxShadow: '0 2px 8px rgba(10, 42, 92, 0.04)'
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#0A2A5C', lineHeight: 1.1 }}>
                  {s.number}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1856A5', margin: '4px 0' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '12px', color: '#4F617D', lineHeight: 1.4 }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3 FOCUS AREAS WIDGETS ─── */}
      <section style={{ padding: '60px 0', background: '#FFFFFF', borderBottom: '1px solid #DCE9F8' }}>
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
              Livelihood Pathways
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
              Three interconnected pathways covering the full spectrum of rural economic empowerment.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {focusAreas.map((fa, i) => (
              <div
                key={fa.id}
                style={{
                  background: '#EEF4FC',
                  borderRadius: '20px',
                  padding: '30px 26px',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 4px 16px rgba(10, 42, 92, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
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
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      border: '1px solid #DCE9F8',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: '24px'
                    }}
                  >
                    {fa.icon}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#0A2A5C',
                      background: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: '1px solid #DCE9F8'
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '19px',
                    color: '#0A2A5C',
                    margin: 0,
                    fontWeight: 700
                  }}
                >
                  {fa.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
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

      {/* ─── RESEARCH SECTION ─── */}
      <section id="research" style={{ padding: '70px 0', background: '#EEF4FC', borderBottom: '1px solid #DCE9F8' }}>
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
                Applied Field Inquiry
              </span>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  color: '#0A2A5C',
                  margin: '4px 0 0',
                  fontWeight: 800
                }}
              >
                Research Driving Livelihood Impact
              </h2>
            </div>
            <span style={{ color: '#4F617D', fontSize: '14px', fontWeight: 600 }}>
              Evidence-based Programs →
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
      <section id="projects" style={{ padding: '70px 0', background: '#FFFFFF', borderBottom: '1px solid #DCE9F8' }}>
        <div className="shell">
          <div style={{ marginBottom: '36px' }}>
            <span
              style={{
                color: '#1856A5',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              On-Ground Implementation
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 34px)',
                color: '#0A2A5C',
                margin: '4px 0 8px',
                fontWeight: 800
              }}
            >
              Livelihood Projects
            </h2>
            <p style={{ color: '#4F617D', fontSize: '15px', margin: 0 }}>
              Translating research into measurable farmer income enhancement and enterprise creation.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', color: '#1856A5', marginBottom: '18px', fontWeight: 700 }}>
            Core Livelihood Initiatives
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '22px',
              marginBottom: '44px'
            }}
          >
            {coreProjects.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '24px',
                  border: '1.5px solid #DCE9F8',
                  boxShadow: '0 4px 16px rgba(10, 42, 92, 0.05)',
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
                      marginBottom: '10px'
                    }}
                  >
                    <span
                      style={{
                        background: '#EEF4FC',
                        color: '#1856A5',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '999px'
                      }}
                    >
                      {item.focus}
                    </span>
                    <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '16px', color: '#0A2A5C', margin: '4px 0 8px', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#4F617D', lineHeight: 1.5, margin: '0 0 14px' }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ fontSize: '12px', color: '#1856A5', borderTop: '1px solid #EEF4FC', paddingTop: '10px', fontWeight: 600 }}>
                  Partner: {item.partner}
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '18px', color: '#1856A5', marginBottom: '18px', fontWeight: 700 }}>
            CSR-Funded Projects & Centres of Excellence
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '22px'
            }}
          >
            {csrProjects.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#EEF4FC',
                  borderRadius: '18px',
                  padding: '24px',
                  border: '1px solid #DCE9F8',
                  boxShadow: '0 4px 16px rgba(10, 42, 92, 0.04)',
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
                      marginBottom: '10px'
                    }}
                  >
                    <span
                      style={{
                        background: '#FFFFFF',
                        color: '#0A2A5C',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '999px',
                        border: '1px solid #DCE9F8'
                      }}
                    >
                      {item.focus}
                    </span>
                    <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '16px', color: '#0A2A5C', margin: '4px 0 8px', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#4F617D', lineHeight: 1.5, margin: '0 0 14px' }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ fontSize: '12px', color: '#0A2A5C', borderTop: '1px solid #DCE9F8', paddingTop: '10px', fontWeight: 600 }}>
                  Partner: {item.partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS SECTION ─── */}
      <section id="events" style={{ padding: '70px 0', background: '#EEF4FC' }}>
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
                Knowledge Exchange
              </span>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  color: '#0A2A5C',
                  margin: '4px 0 0',
                  fontWeight: 800
                }}
              >
                Livelihood Events
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

          {/* Return to Domains */}
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
