import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

/* ─── Institutional SVG icons ─── */
function IconAgriculture({ className = '' }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" />
      <path d="M12 20V4" />
      <path d="M12 9a5 5 0 0 1 5-5 5 5 0 0 1 0 10" />
      <path d="M12 13a5 5 0 0 0-5-5 5 5 0 0 0 0 10" />
    </svg>
  );
}

function IconResource({ className = '' }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconConservation({ className = '' }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-7" />
      <path d="M17 14l-5-5-5 5" />
      <path d="M19 19l-7-7-7 7" />
    </svg>
  );
}

function IconSettlements({ className = '' }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconLivelihood({ className = '' }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconSearch({ className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconProjects({ className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconEducation({ className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 3 6 3 6 3s6 0 6-3v-5" />
    </svg>
  );
}

function IconGrowth({ className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export default function Domains() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeThrust, setActiveThrust] = useState('research');
  const [domainFilter, setDomainFilter] = useState('all');

  // Gracefully redirect legacy query param ?domain=sustainability or ?domain=livelihood
  useEffect(() => {
    const param = searchParams.get('domain');
    if (param === 'sustainability') {
      navigate('/domains/sustainability', { replace: true });
    } else if (param === 'livelihood') {
      navigate('/domains/livelihood', { replace: true });
    }
  }, [searchParams, navigate]);

  // ─── CROSS-DOMAIN THRUST AREAS (HOW WE WORK) ───
  const thrustData = {
    research: {
      title: 'Research & Field Innovation',
      icon: <IconSearch />,
      desc: 'Bridging scientific inquiry and field action for real-world impact across Sustainability and Livelihood.',
      items: [
        {
          title: 'Fertilizer Optimization (N-Balancing) in Sugarcane',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Farm-Based Livelihood',
          location: 'Sakthi Nagar & Erode',
          type: 'Research',
          partner: 'Univ. of Hohenheim & Sakthi Sugars',
          desc: 'Scientific nitrogen-balancing trials and soil carbon mapping supporting over 5,000 sugarcane growers.'
        },
        {
          title: 'Dutch Fund for Climate Action (DFCD) Watershed Study',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability',
          focus: 'Nature Conservation',
          location: 'Western Ghats & Bhavani Basin',
          type: 'Research',
          partner: 'WWF India & DFCD',
          desc: 'A ~₹5 crore grant analyzing vulnerable river catchments, hydrological patterns, and habitat resilience.'
        },
        {
          title: 'Climate Smart Dairy Digital Extension Model',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Farm-Based Livelihood',
          location: 'Coimbatore & Tiruppur',
          type: 'Research',
          partner: 'NITARA & Aavin',
          desc: 'Evidence-based digital extension platform optimizing cattle nutrition, health monitoring, and dairy yields.'
        },
        {
          title: 'Industrial Energy Audit & Thermal Decarbonization',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability',
          focus: 'Resource Efficiency',
          location: 'Coimbatore Industrial Cluster',
          type: 'Research',
          partner: 'CEEW & Schneider Electric',
          desc: 'Technical modeling of waste-heat recovery and rooftop solar integration across regional manufacturing hubs.'
        }
      ]
    },
    projects: {
      title: 'Development Projects',
      icon: <IconProjects />,
      desc: 'Place-based development initiatives translating research into sustained community and ecological impact.',
      items: [
        {
          title: 'Kumaraguru Microcosm Living Lab',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability#microcosm',
          focus: 'Sustainable Human Settlements',
          location: 'Kumaraguru Campus',
          type: 'Project',
          partner: 'Campus Operations',
          desc: 'Campus-wide living laboratory demonstrating decentralized STP, solar microgrids, and 100% mess waste composting.'
        },
        {
          title: 'Pariyur Farmer Producer Organization (FPO)',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Off-Farm Livelihood',
          location: 'Gobichettipalayam',
          type: 'Project',
          partner: 'StartupTN & NABARD',
          desc: 'Farmer-owned collective providing direct market access, bulk input procurement, and shared post-harvest facilities.'
        },
        {
          title: 'Urban Wetland Restoration & Bird Sanctuary',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability',
          focus: 'Nature Conservation',
          location: 'Singanallur Lake, Coimbatore',
          type: 'Project',
          partner: 'BNHS India & Zoo Outreach',
          desc: 'Ecological revitalization through indigenous wetland planting, floating bio-treatment islands, and citizen audits.'
        },
        {
          title: 'Farmer 360 Holistic Advisory System',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Farm-Based Livelihood',
          location: 'Erode & Tiruppur',
          type: 'Project',
          partner: 'Kisan Konnect',
          desc: 'Comprehensive extension network providing continuous soil guidance, weather risk mitigation, and crop advisory.'
        }
      ]
    },
    education: {
      title: 'Education & Capacity Building',
      icon: <IconEducation />,
      desc: 'Practice-oriented education, vocational workshops, and exposure immersions training the next generation.',
      items: [
        {
          title: 'Sustainability Pathway Experiential Curriculum',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability',
          focus: 'Sustainable Human Settlements',
          location: 'Higher-Ed Network',
          type: 'Education',
          partner: 'Kumaraguru Institutions',
          desc: 'Applied academic pathways immersing undergraduate and graduate researchers in real-world climate solutions.'
        },
        {
          title: 'Dairy Yatra: Value Addition Field Immersion',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Farm-Based Livelihood',
          location: 'Western Tamil Nadu',
          type: 'Education',
          partner: 'Aavin & ABT Foods',
          desc: 'Hands-on traveling immersion visiting modern chilling centers, hygienic milking yards, and value-addition units.'
        },
        {
          title: 'Community Water Stewards Training Program',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability',
          focus: 'Resource Efficiency',
          location: 'Tiruchirappalli & Cauvery Basin',
          type: 'Education',
          partner: 'Centre for Sustainable Agriculture',
          desc: 'Empowering village youth and field volunteers with groundwater testing skills and micro-irrigation management.'
        },
        {
          title: 'Rural Youth Agro-Enterprise Fellowship',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Off-Farm Livelihood',
          location: 'Erode District',
          type: 'Education',
          partner: 'NABARD & KSLI',
          desc: 'Incubation fellowship equipping rural youth with technical skills, financial literacy, and agro-service toolkits.'
        }
      ]
    },
    entrepreneurship: {
      title: 'Entrepreneurship Development',
      icon: <IconGrowth />,
      desc: 'Catalyzing scalable rural enterprises, green startups, and farmer-owned producer collectives.',
      items: [
        {
          title: 'Climate Smart Dairy Entrepreneurship Program',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Farm-Based Livelihood',
          location: 'Western Tamil Nadu',
          type: 'Enterprise',
          partner: 'ABT Foods & Aavin',
          desc: 'Supporting smallholder dairy entrepreneurs with hygienic milking machines, silage banking, and direct offtake.'
        },
        {
          title: 'Low-Carbon Earth Building Micro-Guilds',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability',
          focus: 'Sustainable Human Settlements',
          location: 'Tamil Nadu Clusters',
          type: 'Enterprise',
          partner: 'Thannal & Auroville',
          desc: 'Incubating artisan guilds trained in compressed stabilized earth blocks, bamboo joinery, and natural lime finishes.'
        },
        {
          title: 'Young Farmers Forum Enterprise Launchpad',
          domain: 'Livelihood',
          domainUrl: '/domains/livelihood',
          focus: 'Farm-Based Livelihood',
          location: 'Kongu Region',
          type: 'Enterprise',
          partner: 'Kumaraguru AgTech Hub',
          desc: 'Platform connecting next-generation farmers with precision agricultural tools, drone services, and market hubs.'
        },
        {
          title: 'Circular Economy University Spin-Outs',
          domain: 'Sustainability',
          domainUrl: '/domains/sustainability',
          focus: 'Resource Efficiency',
          location: 'Innovation Hub',
          type: 'Enterprise',
          partner: 'CEEW & StartupTN',
          desc: 'Commercializing student clean-tech solutions in agricultural residue valorization and decentralized water reuse.'
        }
      ]
    }
  };

  const currentThrust = thrustData[activeThrust];
  const filteredThrustItems = domainFilter === 'all'
    ? currentThrust.items
    : currentThrust.items.filter((item) => item.domain.toLowerCase() === domainFilter.toLowerCase());

  return (
    <div className="domains-landing-page" style={{ background: '#FFFFFF' }}>
      {/* ─── REALISTIC HERO SECTION ─── */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '60px',
          background: 'linear-gradient(180deg, rgba(10, 42, 92, 0.94) 0%, rgba(10, 42, 92, 0.85) 65%, rgba(10, 42, 92, 0.72) 100%), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop&q=80") center/cover no-repeat',
          color: '#FFFFFF',
          borderBottom: '1px solid rgba(220, 233, 248, 0.2)'
        }}
      >
        <div className="shell" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#DCE9F8',
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              Institutional Domains & Modes of Action
            </span>

            <h1
              style={{
                fontSize: 'clamp(38px, 4.8vw, 54px)',
                color: '#FFFFFF',
                margin: '0 0 16px',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.15
              }}
            >
              Domains
            </h1>

            <p
              style={{
                fontSize: 'clamp(18px, 2.2vw, 21px)',
                color: '#DCE9F8',
                fontWeight: 600,
                margin: '0 0 14px'
              }}
            >
              Two foundational domains. Four ways of working. Real solutions for people and the planet.
            </p>

            <p style={{ color: 'rgba(220, 233, 248, 0.88)', fontSize: '15.5px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              KSLI consolidates regional sustainability and rural empowerment across two primary verticals. Explore each dedicated domain below or discover our cross-cutting <strong>How We Work</strong> thrust areas.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TWO FOUNDATIONAL DOMAINS INTRO CARDS ─── */}
      <section style={{ padding: '60px 0 50px', background: '#F8FAFD', borderBottom: '1px solid #DCE9F8' }}>
        <div className="shell">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <span
              style={{
                color: '#1856A5',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Core Focus
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: '#0A2A5C', margin: '6px 0 10px', fontWeight: 800 }}>
              Our Two Domains
            </h2>
            <p style={{ color: '#4F617D', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Each domain has a dedicated space containing its specialized focus areas, applied research, field projects, and conclaves.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Sustainability Domain Card */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '34px 30px',
                border: '1.5px solid #DCE9F8',
                boxShadow: '0 8px 24px rgba(10, 42, 92, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      background: '#EEF4FC',
                      color: '#1856A5',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: '999px',
                      border: '1px solid #DCE9F8'
                    }}
                  >
                    Domain 01
                  </span>
                  <span style={{ fontSize: '12.5px', color: '#1A8FBF', fontWeight: 600 }}>
                    Ecological Resilience
                  </span>
                </div>
                <h3 style={{ fontSize: '24px', color: '#0A2A5C', margin: '0 0 10px', fontWeight: 800 }}>
                  Sustainability
                </h3>
                <p style={{ color: '#4F617D', fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Advancing sustainable agriculture, resource efficiency, nature conservation, and eco-responsive human settlements — anchored by the Kumaraguru Microcosm campus living lab.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {['Sustainable Agriculture', 'Resource Efficiency', 'Nature Conservation', 'Human Settlements'].map((f) => (
                    <span
                      key={f}
                      style={{
                        background: '#F4F8FD',
                        color: '#0A2A5C',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid #E2ECF8'
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/domains/sustainability"
                className="primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '14px'
                }}
              >
                Explore Sustainability Domain <span>→</span>
              </Link>
            </div>

            {/* Livelihood Domain Card */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '34px 30px',
                border: '1.5px solid #DCE9F8',
                boxShadow: '0 8px 24px rgba(10, 42, 92, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      background: '#DCE9F8',
                      color: '#0A2A5C',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: '999px',
                      border: '1px solid #C8DDF2'
                    }}
                  >
                    Domain 02
                  </span>
                  <span style={{ fontSize: '12.5px', color: '#1856A5', fontWeight: 600 }}>
                    Rural Prosperity
                  </span>
                </div>
                <h3 style={{ fontSize: '24px', color: '#0A2A5C', margin: '0 0 10px', fontWeight: 800 }}>
                  Livelihood
                </h3>
                <p style={{ color: '#4F617D', fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Strengthening farm-based, off-farm, and non-farm livelihoods — empowering 5,000+ farmers through applied agricultural research, farmer producer organizations (FPOs), and rural enterprise development.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {['Farm-Based Livelihood', 'Off-Farm Livelihood', 'Non-Farm Livelihood', '5,000+ Farmers Engaged'].map((f) => (
                    <span
                      key={f}
                      style={{
                        background: '#F4F8FD',
                        color: '#0A2A5C',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid #E2ECF8'
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/domains/livelihood"
                className="primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '14px'
                }}
              >
                Explore Livelihood Domain <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT: FOUR THRUST AREAS / HOW WE WORK ─── */}
      <section
        id="thrust-areas"
        style={{
          padding: '75px 0 85px',
          background: '#FFFFFF'
        }}
      >
        <div className="shell">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            <span
              style={{
                color: '#1856A5',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Institutional Modes of Action
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 42px)', color: '#0A2A5C', margin: '0 0 12px', fontWeight: 800 }}>
              How We Work
            </h2>
            <p style={{ color: '#4F617D', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
              KSLI translates ideas into real-world change through four foundational Thrust Areas that cut across <strong>both Sustainability and Livelihood</strong>. Select a thrust area below to explore active initiatives.
            </p>
          </div>

          {/* 4 THRUST SELECTORS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}
          >
            {[
              { id: 'research', num: '01', title: 'Research & Field Innovation', icon: <IconSearch /> },
              { id: 'projects', num: '02', title: 'Development Projects', icon: <IconProjects /> },
              { id: 'education', num: '03', title: 'Education & Capacity Building', icon: <IconEducation /> },
              { id: 'entrepreneurship', num: '04', title: 'Entrepreneurship Development', icon: <IconGrowth /> }
            ].map((t) => {
              const isSelected = activeThrust === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveThrust(t.id)}
                  style={{
                    background: isSelected ? '#1856A5' : '#F8FAFD',
                    color: isSelected ? '#FFFFFF' : '#0A2A5C',
                    border: isSelected ? '1.5px solid #1856A5' : '1.5px solid #DCE9F8',
                    borderRadius: '16px',
                    padding: '22px 20px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 8px 24px rgba(24, 86, 165, 0.28)' : '0 2px 8px rgba(10, 42, 92, 0.04)',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ color: isSelected ? '#FFFFFF' : '#1856A5' }}>
                      {t.icon}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: isSelected ? 'rgba(255,255,255,0.7)' : '#8CC2FC' }}>
                      {t.num}
                    </span>
                  </div>
                  <strong style={{ fontSize: '15.5px', color: isSelected ? '#FFFFFF' : '#0A2A5C', lineHeight: 1.35 }}>
                    {t.title}
                  </strong>
                </button>
              );
            })}
          </div>

          {/* THRUST AREA IN-PLACE SHOWCASE */}
          <div
            style={{
              background: '#F8FAFD',
              borderRadius: '24px',
              border: '1.5px solid #DCE9F8',
              padding: '36px',
              boxShadow: '0 8px 32px rgba(10, 42, 92, 0.06)'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                borderBottom: '1px solid #DCE9F8',
                paddingBottom: '20px',
                marginBottom: '26px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#1856A5' }}>{currentThrust.icon}</span>
                  <h3 style={{ margin: 0, fontSize: '22px', color: '#0A2A5C', fontWeight: 800 }}>
                    {currentThrust.title}
                  </h3>
                </div>
                <p style={{ color: '#4F617D', fontSize: '14.5px', margin: '4px 0 0' }}>
                  {currentThrust.desc}
                </p>
              </div>

              {/* Filter Pills */}
              <div
                style={{
                  display: 'inline-flex',
                  background: '#FFFFFF',
                  padding: '4px',
                  borderRadius: '999px',
                  border: '1px solid #DCE9F8'
                }}
              >
                {[
                  { id: 'all', label: 'All Work' },
                  { id: 'sustainability', label: 'Sustainability' },
                  { id: 'livelihood', label: 'Livelihood' }
                ].map((pill) => {
                  const isCur = domainFilter === pill.id;
                  return (
                    <button
                      key={pill.id}
                      onClick={() => setDomainFilter(pill.id)}
                      style={{
                        padding: '6px 16px',
                        borderRadius: '999px',
                        border: 0,
                        background: isCur ? '#1856A5' : 'transparent',
                        color: isCur ? '#FFFFFF' : '#0A2A5C',
                        fontWeight: 600,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {pill.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grid of Initiatives */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}
            >
              {filteredThrustItems.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '22px 24px',
                    border: '1px solid #DCE9F8',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 3px 12px rgba(10, 42, 92, 0.04)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <Link
                        to={item.domainUrl}
                        style={{
                          background: item.domain === 'Sustainability' ? '#EEF4FC' : '#DCE9F8',
                          color: item.domain === 'Sustainability' ? '#1856A5' : '#0A2A5C',
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 9px',
                          borderRadius: '999px',
                          textDecoration: 'none'
                        }}
                      >
                        {item.domain} ↗
                      </Link>
                      <span style={{ fontSize: '11.5px', color: '#1A8FBF', fontWeight: 600 }}>
                        {item.location}
                      </span>
                    </div>

                    <h4 style={{ margin: '0 0 8px', fontSize: '16px', color: '#0A2A5C', fontWeight: 700, lineHeight: 1.35 }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: '13px', color: '#4F617D', lineHeight: 1.5, margin: '0 0 14px' }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid #F0F4F8', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', color: '#718096' }}>
                    <span>Focus: <strong style={{ color: '#0A2A5C' }}>{item.focus}</strong></span>
                    <span style={{ color: '#1856A5', fontWeight: 600 }}>{item.partner}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '26px', fontSize: '13px', color: '#4F617D' }}>
              ✦ Initiatives under <strong>{currentThrust.title}</strong> across Western Tamil Nadu and the Western Ghats landscape.
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISITOR JOURNEYS ─── */}
      <section style={{ padding: '65px 0', background: '#EEF4FC', borderTop: '1px solid #DCE9F8' }}>
        <div className="shell">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
            <span
              style={{
                color: '#1856A5',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Recommended Pathways
            </span>
            <h2 style={{ fontSize: '28px', color: '#0A2A5C', margin: '4px 0 8px', fontWeight: 800 }}>
              Visitor Journeys
            </h2>
            <p style={{ color: '#4F617D', fontSize: '15px', margin: 0 }}>
              Tailored exploration paths according to your stakeholder interest.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}
          >
            {/* Journey 1 */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #DCE9F8'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EEF4FC', color: '#1856A5', display: 'grid', placeItems: 'center' }}>
                  <IconAgriculture />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#0A2A5C', fontWeight: 700 }}>
                    A Farmer or Agrarian Leader
                  </h4>
                  <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600 }}>Practitioner Pathway</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#4F617D', lineHeight: 1.5, margin: '0 0 14px' }}>
                Explore crop optimization research, climate-smart dairy modules, and farmer-owned cooperatives.
              </p>
              <div style={{ padding: '10px 14px', background: '#EEF4FC', borderRadius: '8px', fontSize: '12.5px', color: '#4F617D' }}>
                <Link to="/domains/livelihood" style={{ color: '#1856A5', fontWeight: 700 }}>Livelihood Domain</Link> →{' '}
                <a href="#thrust-areas" style={{ color: '#1856A5', fontWeight: 600 }}>Projects & Research</a> →{' '}
                <Link to="/get-involved" style={{ color: '#0A2A5C', fontWeight: 700 }}>Connect With Us</Link>
              </div>
            </div>

            {/* Journey 2 */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #DCE9F8'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EEF4FC', color: '#1856A5', display: 'grid', placeItems: 'center' }}>
                  <IconEducation />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#0A2A5C', fontWeight: 700 }}>
                    A Student or Researcher
                  </h4>
                  <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600 }}>Academic Pathway</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#4F617D', lineHeight: 1.5, margin: '0 0 14px' }}>
                Explore campus living lab data at Microcosm, interdisciplinary courses, and field fellowships.
              </p>
              <div style={{ padding: '10px 14px', background: '#EEF4FC', borderRadius: '8px', fontSize: '12.5px', color: '#4F617D' }}>
                <Link to="/domains/sustainability" style={{ color: '#1856A5', fontWeight: 700 }}>Sustainability Domain</Link> →{' '}
                <Link to="/learning" style={{ color: '#1856A5', fontWeight: 600 }}>Academic Programs</Link> →{' '}
                <Link to="/get-involved" style={{ color: '#0A2A5C', fontWeight: 700 }}>Apply / Collaborate</Link>
              </div>
            </div>

            {/* Journey 3 */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #DCE9F8'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EEF4FC', color: '#1856A5', display: 'grid', placeItems: 'center' }}>
                  <IconLivelihood />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#0A2A5C', fontWeight: 700 }}>
                    A Partner or Funder
                  </h4>
                  <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600 }}>Institutional Pathway</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#4F617D', lineHeight: 1.5, margin: '0 0 14px' }}>
                Discover our Centres of Excellence, grant-funded climate studies, and CSR partnership opportunities.
              </p>
              <div style={{ padding: '10px 14px', background: '#EEF4FC', borderRadius: '8px', fontSize: '12.5px', color: '#4F617D' }}>
                <a href="#thrust-areas" style={{ color: '#1856A5', fontWeight: 700 }}>Development Projects</a> →{' '}
                <Link to="/research-realities" style={{ color: '#1856A5', fontWeight: 600 }}>Whitepapers & Reports</Link> →{' '}
                <Link to="/get-involved" style={{ color: '#0A2A5C', fontWeight: 700 }}>Partner With KSLI</Link>
              </div>
            </div>
          </div>

          {/* CLOSING TAGLINE */}
          <div
            style={{
              marginTop: '40px',
              background: '#FFFFFF',
              borderRadius: '18px',
              padding: '28px',
              textAlign: 'center',
              border: '1px solid #DCE9F8',
              boxShadow: '0 4px 16px rgba(10, 42, 92, 0.04)'
            }}
          >
            <h3 style={{ fontSize: '20px', color: '#0A2A5C', margin: '0 0 6px', fontWeight: 800 }}>
              Different paths. A shared purpose.
            </h3>
            <p style={{ fontSize: '15px', color: '#1856A5', fontWeight: 600, margin: '0 0 4px' }}>
              Knowledge. Action. Lasting Change.
            </p>
            <p style={{ fontSize: '13px', color: '#4F617D', fontStyle: 'italic', margin: 0 }}>
              People · Nature · Livelihoods for a Sustainable Future
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
