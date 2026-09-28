import React from 'react';
import { Link } from 'react-router-dom';
import TallImageCard from '../components/TallImageCard.jsx';

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
      desc: 'Integrated research supporting over 5,000 farmers combining scientific nitrogen balancing with capacity building.',
      partner: 'Univ. of Hohenheim & Sakthi Sugars',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
      to: '/research-realities'
    },
    {
      title: 'Climate Smart Dairy Digital Extension Model',
      focus: 'Farm-Based Livelihood',
      location: 'Coimbatore & Tiruppur',
      desc: 'Digital evidence-based extension platform optimizing cattle nutrition and smallholder herd yields.',
      partner: 'NITARA & Aavin',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80',
      to: '/research-realities'
    },
    {
      title: 'Dutch Fund for Climate Action (DFCD) Livelihood Grant',
      focus: 'Off-Farm Livelihood',
      location: 'Western Ghats Landscape',
      desc: 'A ~₹5 crore climate adaptation grant focused on scalable nature-based enterprise solutions.',
      partner: 'WWF India & DFCD',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
      to: '/research-realities'
    }
  ];

  const coreProjects = [
    {
      title: 'Climate Smart Dairy Entrepreneurship Program',
      focus: 'Farm-Based Livelihood',
      location: 'Western Tamil Nadu',
      desc: 'Building farmer-led dairy enterprises with climate-resilient practices and chilling infrastructure.',
      partner: 'ABT Foods & Aavin',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80',
      to: '/domains/livelihood#projects'
    },
    {
      title: 'Pariyur Farmer Producer Organization (FPO)',
      focus: 'Off-Farm Livelihood',
      location: 'Gobichettipalayam',
      desc: 'Farmer-owned collective strengthening market access and shared post-harvest facilities.',
      partner: 'StartupTN & NABARD',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=80',
      to: '/domains/livelihood#projects'
    },
    {
      title: 'Farmer 360 Holistic Advisory Initiative',
      focus: 'Farm-Based Livelihood',
      location: 'Regional Clusters',
      desc: 'Holistic support model providing continuous soil testing, credit guidance, and crop advisory.',
      partner: 'Kisan Konnect',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&auto=format&fit=crop&q=80',
      to: '/domains/livelihood#projects'
    },
    {
      title: 'Young Farmers Forum',
      focus: 'Farm-Based Livelihood',
      location: 'Kongu Region',
      desc: 'Equipping rural youth in modern tech-enabled precision farming and agri-business management.',
      partner: 'Kumaraguru AgTech Hub',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
      to: '/domains/livelihood#projects'
    }
  ];

  const csrProjects = [
    {
      title: 'Uzhavan Foundation Community Project',
      focus: 'Farm-Based Livelihood',
      location: 'Manapparai, Tiruchirappalli',
      desc: 'CSR-funded initiative revitalizing rainfed agrarian communities through farm pond networks.',
      partner: 'Uzhavan Foundation',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
      to: '/domains/livelihood#projects'
    },
    {
      title: 'Armour Steel Buildings Vocational Hub',
      focus: 'Non-Farm Livelihood',
      location: 'Salem',
      desc: 'Technical skills training in precision fabrication and rural industrial enterprise development.',
      partner: 'Armour Steel',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
      to: '/domains/livelihood#projects'
    },
    {
      title: 'Centres of Excellence (CoE Network)',
      focus: 'Cross-Pathway',
      location: 'Coimbatore & Erode',
      desc: 'Dedicated CoEs for Dairy, Sugarcane, and Social Development driving sector impact.',
      partner: 'Sakthi Sugars & Ashok Leyland',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
      to: '/coe-partners/centres-of-excellence'
    }
  ];

  const events = [
    {
      title: 'Young Farmers Conclave',
      focus: 'Farm-Based Livelihood',
      location: 'Coimbatore',
      desc: 'Statewide platform for emerging farmers, agri-entrepreneurs, and researchers to connect.',
      image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&auto=format&fit=crop&q=80',
      to: '/get-involved'
    },
    {
      title: 'Sugarcane Innovation & Sustainability Conference',
      focus: 'Farm-Based Livelihood',
      location: 'Sakthi Nagar',
      desc: 'Gathering sugarcane researchers, mill leaders, agronomists, and growers around soil health.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
      to: '/get-involved'
    },
    {
      title: 'Kongunadu Velan Matrum Kaalnadai Thiruvizha',
      focus: 'Farm-Based Livelihood',
      location: 'Tiruppur',
      desc: 'Regional farmer and livestock festival celebrating indigenous breeds and local heritage.',
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80',
      to: '/get-involved'
    }
  ];

  return (
    <div className="livelihood-page">
      {/* ─── HERO BANNER ─── */}
      <section
        className="viewport-hero"
        style={{
          background: 'linear-gradient(135deg, #0A2A5C 0%, #114383 60%, #1856A5 100%)',
          color: '#FFFFFF',
          padding: '156px 0 60px',
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

          <div className="tall-image-grid tall-image-grid-3">
            {research.map((item) => (
              <TallImageCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                image={item.image}
                to={item.to}
                tag={item.focus}
                location={item.location}
              />
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
            CSR-Funded Projects & Centres of Excellence
          </h3>
          <div className="tall-image-grid tall-image-grid-3">
            {csrProjects.map((item) => (
              <TallImageCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                image={item.image}
                to={item.to}
                tag={item.focus}
                location={item.location}
              />
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

          <div className="tall-image-grid tall-image-grid-3">
            {events.map((item) => (
              <TallImageCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                image={item.image}
                to={item.to}
                tag={item.focus}
                location={item.location}
              />
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
