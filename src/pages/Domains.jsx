import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

/* ─── Clean, minimal SVG icons for institutional realism (no emojis) ─── */
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

function IconEnterprise({ className = '' }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
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
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDomain = searchParams.get('domain') === 'livelihood' ? 'livelihood' : 'sustainability';
  const [activeDomain, setActiveDomain] = useState(initialDomain);
  const [activeThrust, setActiveThrust] = useState('research');
  const [domainFilter, setDomainFilter] = useState('all');

  useEffect(() => {
    const param = searchParams.get('domain');
    if (param === 'livelihood' || param === 'sustainability') {
      setActiveDomain(param);
    }
  }, [searchParams]);

  const handleDomainSwitch = (domain) => {
    setActiveDomain(domain);
    setSearchParams({ domain });
  };

  // ─── REALISTIC SUSTAINABILITY DATA ───
  const sustainabilityFocusAreas = [
    {
      title: 'Sustainable Agriculture',
      icon: <IconAgriculture />,
      desc: 'Agro-ecological practices, organic soil enrichment, and resource-efficient regenerative farming systems.'
    },
    {
      title: 'Resource Efficiency',
      icon: <IconResource />,
      desc: 'Industrial energy mapping, waste heat recovery, circular manufacturing, and closed-loop water stewardship.'
    },
    {
      title: 'Nature Conservation',
      icon: <IconConservation />,
      desc: 'Protecting Western Ghats biodiversity corridors, wetland restoration, and endemic species censuses.'
    },
    {
      title: 'Sustainable Human Settlements',
      icon: <IconSettlements />,
      desc: 'Eco-responsive architecture, low-carbon earth buildings, and net-zero institutional campus models.'
    }
  ];

  const sustainabilityResearch = [
    {
      title: 'Dutch Fund for Climate Action (DFCD) Watershed Study',
      focus: 'Nature Conservation',
      location: 'Western Ghats & Bhavani Basin',
      desc: 'A ~₹5 crore climate adaptation grant with WWF India assessing river catchment micro-habitats and hydrological resilience.',
      partner: 'WWF India & DFCD',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Industrial Energy Audit & Thermal Decarbonization',
      focus: 'Resource Efficiency',
      location: 'Coimbatore Industrial Cluster',
      desc: 'Field modeling of waste heat recovery and rooftop solar integration across regional manufacturing clusters.',
      partner: 'CEEW & Schneider Electric',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Regenerative Agriculture & Soil Organic Carbon Mapping',
      focus: 'Sustainable Agriculture',
      location: 'Erode & Tiruppur Districts',
      desc: 'Multi-year field trials assessing biochar application, multi-tier cropping, and biological nitrogen fixation.',
      partner: 'Centre for Sustainable Agriculture',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Campus Micro-Grid & Water Neutrality Assessment',
      focus: 'Sustainable Human Settlements',
      location: 'Kumaraguru Campus, Coimbatore',
      desc: 'Longitudinal empirical evaluation of decentralized root-zone wastewater recycling and smart solar microgrids.',
      partner: 'IGBC & Biome Environmental',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const sustainabilityProjects = [
    {
      title: 'Urban Wetland Ecological Restoration & Bird Sanctuary',
      focus: 'Nature Conservation',
      location: 'Singanallur Lake, Coimbatore',
      desc: 'Establishing indigenous wetland vegetation, floating bio-treatment wetlands, and citizen-science biodiversity audits.',
      partner: 'BNHS India & Zoo Outreach',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Clean Energy & Water Neutrality Infrastructure',
      focus: 'Resource Efficiency',
      location: 'Regional Campus Network',
      desc: 'Deployment of smart water meters, greywater recycling root-zone systems, and real-time solar tracking micro-grids.',
      partner: 'Mobitech Wireless & Biome',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Low-Carbon Earth Building & Vernacular Architecture',
      focus: 'Sustainable Human Settlements',
      location: 'Coimbatore & Auroville',
      desc: 'Prototyping compressed stabilized earth blocks, bamboo tension structures, and natural lime finishes.',
      partner: 'Thannal & Auroville',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Regenerative Farm Demonstration Living Plots',
      focus: 'Sustainable Agriculture',
      location: 'Western Tamil Nadu',
      desc: 'Hands-on living plots evaluating multi-tier polyculture, cow-based bio-enhancers, and moisture retention mulching.',
      partner: 'EDF & CSA',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const sustainabilityEvents = [
    {
      title: 'Student Conclave for Climate Action (SCCA)',
      focus: 'Nature Conservation',
      location: 'Coimbatore',
      desc: 'Statewide convention gathering over 600 student delegates to present campus decarbonization prototypes.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Western Ghats Bio-Diversity & Forest Culture Festival',
      focus: 'Nature Conservation',
      location: 'Anaimalai Foothills',
      desc: 'Three-day field festival celebrating the ecological and botanical heritage of the Western Ghats corridor.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Agri Yatra: Regenerative Farm Demonstrations',
      focus: 'Sustainable Agriculture',
      location: 'Western Tamil Nadu',
      desc: 'Field immersion taking agronomists, farmers, and students through natural farming demonstration plots.',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Circular Economy & Clean Energy Forum',
      focus: 'Resource Efficiency',
      location: 'Kumaraguru Innovation Hub',
      desc: 'Annual industry roundtable on rooftop solar adoption, industrial effluent treatment, and waste-to-energy.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80'
    }
  ];

  // ─── REALISTIC LIVELIHOOD DATA ───
  const livelihoodFocusAreas = [
    {
      title: 'Farm-Based Livelihood',
      icon: <IconAgriculture />,
      desc: 'Agriculture, animal husbandry, smallholder dairy farming, and integrated climate-resilient farming systems.'
    },
    {
      title: 'Off-Farm Livelihood',
      icon: <IconEnterprise />,
      desc: 'Agro-processing, rural manufacturing, post-harvest grading, and collective producer value-addition.'
    },
    {
      title: 'Non-Farm Livelihood',
      icon: <IconLivelihood />,
      desc: 'Rural services, artisan micro-enterprises, trade clusters, and youth vocational skills pathways.'
    }
  ];

  const livelihoodStats = [
    { number: '5,000+', label: 'Farmers Engaged', sub: 'Sugarcane fertilizer optimization program' },
    { number: '3', label: 'Centres of Excellence', sub: 'Dairy, Sugarcane & Social Development' },
    { number: '4+', label: 'Active Initiatives', sub: 'Dairy Program, Pariyur FPO, Farmer 360' },
    { number: '₹5 Cr+', label: 'Adaptation Grant', sub: 'Scalable nature-based livelihood solutions' }
  ];

  const livelihoodResearch = [
    {
      title: 'Fertilizer Optimization (N-Balancing) in Sugarcane',
      focus: 'Farm-Based Livelihood',
      location: 'Sakthi Nagar & Erode',
      desc: 'Integrated program supporting over 5,000 farmers supplying Sakthi Sugars, balancing nitrogen to boost soil health and yields.',
      partner: 'Univ. of Hohenheim & Sakthi Sugars',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Climate Smart Dairy Digital Extension Model',
      focus: 'Farm-Based Livelihood',
      location: 'Coimbatore & Tiruppur',
      desc: 'Evidence-based digital extension model using IoT sensors and automated nutritional formulation for dairy herds.',
      partner: 'NITARA & Aavin',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Dutch Fund for Climate Action (DFCD) Livelihood Grant',
      focus: 'Off-Farm Livelihood',
      location: 'Western Ghats Landscape',
      desc: 'A ~₹5 crore adaptation grant implemented with WWF India, designing scalable enterprise solutions for forest-fringe communities.',
      partner: 'WWF India & DFCD',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Techno-Economic Study of Indigenous Dairy By-Products',
      focus: 'Off-Farm Livelihood',
      location: 'Kongu Agrarian Belt',
      desc: 'Market and feasibility study for smallholder bio-slurry packaging, organic manures, and fermented dairy derivatives.',
      partner: 'NDDB Mrida',
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const livelihoodProjects = [
    {
      title: 'Climate Smart Dairy Entrepreneurship Program',
      focus: 'Farm-Based Livelihood',
      location: 'Western Tamil Nadu',
      desc: 'Building farmer-led dairy enterprises with climate-resilient practices, hygienic milking, and collective chilling units.',
      partner: 'ABT Foods & Aavin',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Pariyur Farmer Producer Organization (FPO)',
      focus: 'Off-Farm Livelihood',
      location: 'Gobichettipalayam',
      desc: 'A farmer-owned collective strengthening market access, bargaining power, and bulk input procurement.',
      partner: 'StartupTN & NABARD',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Farmer 360 Holistic Support Initiative',
      focus: 'Farm-Based Livelihood',
      location: 'Regional Clusters',
      desc: 'Comprehensive advisory covering soil testing, crop health insurance, market price intelligence, and credit.',
      partner: 'Kisan Konnect',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Uzhavan Foundation Dryland Community Project',
      focus: 'Farm-Based Livelihood',
      location: 'Manapparai, Tiruchirappalli',
      desc: 'CSR-funded initiative revitalizing rainfed agrarian communities through farm pond networks and multi-tier cropping.',
      partner: 'Uzhavan Foundation',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const livelihoodEvents = [
    {
      title: 'Young Farmers Conclave & Agri-Tech Expo',
      focus: 'Farm-Based Livelihood',
      location: 'Coimbatore',
      desc: 'A platform for emerging farmers to connect with precision agriculture robotics, agritech founders, and peer networks.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Sugarcane Innovation & Sustainability Conference',
      focus: 'Farm-Based Livelihood',
      location: 'Sakthi Nagar',
      desc: 'Bringing together sugarcane researchers, mill leaders, agronomists, and over 1,000 progressive growers around soil carbon.',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Kongunadu Velan Matrum Kaalnadai Thiruvizha',
      focus: 'Farm-Based Livelihood',
      location: 'Tiruppur',
      desc: 'A regional farmer and livestock festival celebrating indigenous cattle breeds, local agricultural heritage, and organic inputs.',
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Dairy Yatra: Value Addition Field Immersion',
      focus: 'Off-Farm Livelihood',
      location: 'Western Tamil Nadu',
      desc: 'Traveling immersion visiting high-yield dairy farms, chilling centres, and cooperative value-addition facilities.',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=600&auto=format&fit=crop&q=80'
    }
  ];

  // ─── CROSS-DOMAIN THRUST AREAS ───
  const thrustData = {
    research: {
      title: 'Research & Field Innovation',
      icon: <IconSearch />,
      desc: 'Bridging knowledge and practice for real-world impact across Sustainability and Livelihood.',
      items: [
        { title: 'Fertilizer Optimization (N-Balancing) in Sugarcane', domain: 'Livelihood', focus: 'Farm-Based Livelihood', location: 'Sakthi Nagar', type: 'Research' },
        { title: 'Dutch Fund for Climate Action (DFCD) Watershed Study', domain: 'Sustainability', focus: 'Nature Conservation', location: 'Western Ghats', type: 'Research' },
        { title: 'Climate Smart Dairy Digital Extension Model', domain: 'Livelihood', focus: 'Farm-Based Livelihood', location: 'Coimbatore', type: 'Research' },
        { title: 'Industrial Energy Audit & Thermal Decarbonization', domain: 'Sustainability', focus: 'Resource Efficiency', location: 'Coimbatore Cluster', type: 'Research' }
      ]
    },
    projects: {
      title: 'Development Projects',
      icon: <IconProjects />,
      desc: 'Place-based development initiatives translating research into sustained community and ecological impact.',
      items: [
        { title: 'Kumaraguru Microcosm Living Lab', domain: 'Sustainability', focus: 'Sustainable Human Settlements', location: 'Kumaraguru Campus', type: 'Project' },
        { title: 'Pariyur Farmer Producer Organization (FPO)', domain: 'Livelihood', focus: 'Off-Farm Livelihood', location: 'Gobichettipalayam', type: 'Project' },
        { title: 'Urban Wetland Restoration & Bird Sanctuary', domain: 'Sustainability', focus: 'Nature Conservation', location: 'Singanallur Lake', type: 'Project' },
        { title: 'Farmer 360 Holistic Advisory System', domain: 'Livelihood', focus: 'Farm-Based Livelihood', location: 'Erode & Tiruppur', type: 'Project' }
      ]
    },
    education: {
      title: 'Education & Capacity Building',
      icon: <IconEducation />,
      desc: 'Practice-oriented education, vocational workshops, and exposure visits training the next generation.',
      items: [
        { title: 'Sustainability Pathway Experiential Curriculum', domain: 'Sustainability', focus: 'Human Settlements', location: 'Higher-Ed Network', type: 'Education' },
        { title: 'Dairy Yatra: Value Addition Field Immersion', domain: 'Livelihood', focus: 'Farm-Based Livelihood', location: 'Western Tamil Nadu', type: 'Education' },
        { title: 'Community Water Stewards Training Program', domain: 'Sustainability', focus: 'Resource Efficiency', location: 'Tiruchirappalli', type: 'Education' },
        { title: 'Rural Youth Agro-Enterprise Fellowship', domain: 'Livelihood', focus: 'Off-Farm Livelihood', location: 'Erode District', type: 'Education' }
      ]
    },
    entrepreneurship: {
      title: 'Entrepreneurship Development',
      icon: <IconGrowth />,
      desc: 'Catalyzing scalable rural enterprises, green startups, and farmer-owned producer collectives.',
      items: [
        { title: 'Climate Smart Dairy Entrepreneurship Program', domain: 'Livelihood', focus: 'Farm-Based Livelihood', location: 'Western Tamil Nadu', type: 'Enterprise' },
        { title: 'Low-Carbon Earth Building Micro-Guilds', domain: 'Sustainability', focus: 'Human Settlements', location: 'Tamil Nadu Clusters', type: 'Enterprise' },
        { title: 'Young Farmers Forum Enterprise Launchpad', domain: 'Livelihood', focus: 'Farm-Based Livelihood', location: 'Kongu Region', type: 'Enterprise' },
        { title: 'Circular Economy University Spin-Outs', domain: 'Sustainability', focus: 'Resource Efficiency', location: 'Innovation Hub', type: 'Enterprise' }
      ]
    }
  };

  const currentThrust = thrustData[activeThrust];
  const filteredThrustItems = domainFilter === 'all'
    ? currentThrust.items
    : currentThrust.items.filter((item) => item.domain.toLowerCase() === domainFilter.toLowerCase());

  return (
    <div className="domains-continuous-page" style={{ background: '#FFFFFF' }}>
      {/* ─── REALISTIC HERO SECTION (Atmospheric Western Ghats Landscape with Deep Navy Overlay) ─── */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '50px',
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
              Institutional Structure & Action
            </span>

            <h1
              style={{
                fontSize: 'clamp(40px, 5vw, 56px)',
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
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                color: '#DCE9F8',
                fontWeight: 600,
                margin: '0 0 12px'
              }}
            >
              Two domains. Four ways of working. Real solutions for people and the planet.
            </p>

            <p style={{ color: 'rgba(220, 233, 248, 0.88)', fontSize: '15.5px', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.6 }}>
              Explore KSLI’s institutional work seamlessly by toggling between our two foundational verticals below, or discover cross-cutting Thrust Areas.
            </p>
          </div>

          {/* ─── PROMINENT CENTERED PILL TAB BAR ─── */}
          <div
            role="tablist"
            aria-label="Domain Selector"
            style={{
              display: 'inline-flex',
              background: '#FFFFFF',
              padding: '6px',
              borderRadius: '9999px',
              border: '1.5px solid #DCE9F8',
              boxShadow: '0 12px 36px rgba(10, 42, 92, 0.22)',
              margin: '0 auto 10px',
              gap: '8px',
              position: 'relative',
              zIndex: 10
            }}
          >
            <button
              type="button"
              id="tab-sustainability"
              role="tab"
              aria-selected={activeDomain === 'sustainability'}
              onClick={() => handleDomainSwitch('sustainability')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 36px',
                borderRadius: '9999px',
                border: 0,
                background: activeDomain === 'sustainability' ? '#1856A5' : 'transparent',
                color: activeDomain === 'sustainability' ? '#FFFFFF' : '#0A2A5C',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.01em',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow:
                  activeDomain === 'sustainability' ? '0 4px 14px rgba(24, 86, 165, 0.35)' : 'none'
              }}
            >
              <span>Sustainability</span>
            </button>

            <button
              type="button"
              id="tab-livelihood"
              role="tab"
              aria-selected={activeDomain === 'livelihood'}
              onClick={() => handleDomainSwitch('livelihood')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 36px',
                borderRadius: '9999px',
                border: 0,
                background: activeDomain === 'livelihood' ? '#1856A5' : 'transparent',
                color: activeDomain === 'livelihood' ? '#FFFFFF' : '#0A2A5C',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.01em',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow:
                  activeDomain === 'livelihood' ? '0 4px 14px rgba(24, 86, 165, 0.35)' : 'none'
              }}
            >
              <span>Livelihood</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── ACTIVE DOMAIN CONTENT AREA (IN-PAGE SWITCH) ─── */}
      <div style={{ transition: 'opacity 0.3s ease' }}>
        {activeDomain === 'sustainability' ? (
          /* ===============================================================
             SUSTAINABILITY DOMAIN CONTENT
             =============================================================== */
          <div className="domain-sustainability-section">
            {/* DOMAIN INTRO STRIP */}
            <div style={{ background: '#FFFFFF', padding: '44px 0 20px', textAlign: 'center' }}>
              <div className="shell">
                <span
                  style={{
                    color: '#1856A5',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  Selected Domain
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 3.4vw, 40px)',
                    color: '#0A2A5C',
                    margin: '6px 0 8px',
                    fontWeight: 800
                  }}
                >
                  Sustainability
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4F617D',
                    maxWidth: '680px',
                    margin: '0 auto',
                    lineHeight: 1.6
                  }}
                >
                  Creating a healthier planet through sustainable practices, applied climate research, and resilient ecosystems.
                </p>
              </div>
            </div>

            {/* FOCUS AREAS: 4 COMPACT CARDS */}
            <section style={{ padding: '30px 0 50px', background: '#FFFFFF' }}>
              <div className="shell">
                <div style={{ marginBottom: '22px' }}>
                  <h3 style={{ fontSize: '18px', color: '#0A2A5C', margin: 0, fontWeight: 700 }}>
                    Focus Areas
                  </h3>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '18px'
                  }}
                >
                  {sustainabilityFocusAreas.map((fa, i) => (
                    <div
                      key={fa.title}
                      style={{
                        background: '#EEF4FC',
                        borderRadius: '16px',
                        padding: '24px 20px',
                        border: '1.5px solid #DCE9F8',
                        boxShadow: '0 2px 8px rgba(10, 42, 92, 0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            background: '#FFFFFF',
                            color: '#1856A5',
                            display: 'grid',
                            placeItems: 'center',
                            border: '1px solid #DCE9F8'
                          }}
                        >
                          {fa.icon}
                        </div>
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1A8FBF' }}>
                          0{i + 1}
                        </span>
                      </div>
                      <h4 style={{ margin: 0, fontSize: '16px', color: '#0A2A5C', fontWeight: 700 }}>
                        {fa.title}
                      </h4>
                      <p style={{ margin: 0, fontSize: '13px', color: '#4F617D', lineHeight: 1.5 }}>
                        {fa.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FEATURED: KUMARAGURU MICROCOSM HORIZONTAL CARD */}
            <section style={{ padding: '0 0 50px', background: '#FFFFFF' }}>
              <div className="shell">
                <div
                  style={{
                    background: 'linear-gradient(135deg, #0A2A5C 0%, #1856A5 100%)',
                    borderRadius: '20px',
                    padding: '36px 40px',
                    color: '#FFFFFF',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px',
                    alignItems: 'center',
                    boxShadow: '0 12px 32px rgba(10, 42, 92, 0.12)'
                  }}
                >
                  <div>
                    <span
                      style={{
                        background: 'rgba(255, 255, 255, 0.16)',
                        color: '#DCE9F8',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        display: 'inline-block',
                        marginBottom: '10px'
                      }}
                    >
                      Campus Living Laboratory
                    </span>
                    <h3 style={{ margin: '0 0 8px', fontSize: '26px', color: '#FFFFFF', fontWeight: 800 }}>
                      Kumaraguru Microcosm
                    </h3>
                    <p style={{ margin: '0 0 14px', fontSize: '15.5px', color: '#DCE9F8', fontWeight: 600 }}>
                      Campus sustainability as a living lab for a better tomorrow.
                    </p>
                    <p style={{ margin: '0 0 22px', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6 }}>
                      Prototyping closed-loop water treatment (1.2 MLD), endemic biodiversity arboretum mapping, rooftop solar microgrids, and organic waste mess composting on-site.
                    </p>
                    <a
                      href="#research"
                      className="btn-primary"
                      style={{
                        background: '#FFFFFF',
                        color: '#0A2A5C',
                        fontWeight: 700,
                        padding: '10px 22px',
                        borderRadius: '999px',
                        fontSize: '13px',
                        textDecoration: 'none'
                      }}
                    >
                      View Campus Research & Data →
                    </a>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {[
                      { title: 'Campus Biodiversity', desc: 'Native flora & butterfly habitats' },
                      { title: 'Waste Management', desc: '100% mess organic compost conversion' },
                      { title: 'Water Stewardship', desc: '1.2 MLD root-zone recycled' },
                      { title: 'Energy Conservation', desc: 'Smart solar microgrids' }
                    ].map((item) => (
                      <div
                        key={item.title}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '14px',
                          padding: '16px',
                          backdropFilter: 'blur(6px)'
                        }}
                      >
                        <strong style={{ fontSize: '13.5px', color: '#FFFFFF', display: 'block', marginBottom: '4px' }}>
                          {item.title}
                        </strong>
                        <span style={{ fontSize: '12px', color: '#DCE9F8', lineHeight: 1.4 }}>
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* RESEARCH (4-COLUMN CARD GRID) */}
            <section id="research" style={{ padding: '40px 0 50px', background: '#EEF4FC', borderTop: '1px solid #DCE9F8' }}>
              <div className="shell">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', color: '#0A2A5C', fontWeight: 800 }}>
                    Research
                  </h3>
                  <a href="#thrust-areas" style={{ fontSize: '13px', color: '#1856A5', fontWeight: 700 }}>
                    View All →
                  </a>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {sustainabilityResearch.map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #DCE9F8',
                        boxShadow: '0 4px 14px rgba(10, 42, 92, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            height: '140px',
                            background: `url(${card.image}) center/cover no-repeat`,
                            position: 'relative'
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              background: 'rgba(10, 42, 92, 0.85)',
                              color: '#FFFFFF',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 600
                            }}
                          >
                            {card.location.split('&')[0]}
                          </span>
                        </div>
                        <div style={{ padding: '18px' }}>
                          <span
                            style={{
                              background: '#EEF4FC',
                              color: '#1856A5',
                              fontSize: '11px',
                              fontWeight: 700,
                              padding: '3px 8px',
                              borderRadius: '999px',
                              display: 'inline-block',
                              marginBottom: '8px'
                            }}
                          >
                            {card.focus}
                          </span>
                          <h4 style={{ margin: '0 0 8px', fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700, lineHeight: 1.35 }}>
                            {card.title}
                          </h4>
                          <p style={{ margin: 0, fontSize: '13px', color: '#4F617D', lineHeight: 1.5 }}>
                            {card.desc}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '10px 18px',
                          borderTop: '1px solid #EEF4FC',
                          fontSize: '12px',
                          color: '#1856A5',
                          fontWeight: 600
                        }}
                      >
                        Partner: {card.partner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PROJECTS (4-COLUMN CARD GRID) */}
            <section style={{ padding: '40px 0 50px', background: '#FFFFFF', borderTop: '1px solid #DCE9F8' }}>
              <div className="shell">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', color: '#0A2A5C', fontWeight: 800 }}>
                    Projects
                  </h3>
                  <a href="#thrust-areas" style={{ fontSize: '13px', color: '#1856A5', fontWeight: 700 }}>
                    View All →
                  </a>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {sustainabilityProjects.map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #DCE9F8',
                        boxShadow: '0 4px 14px rgba(10, 42, 92, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            height: '140px',
                            background: `url(${card.image}) center/cover no-repeat`,
                            position: 'relative'
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              background: 'rgba(10, 42, 92, 0.85)',
                              color: '#FFFFFF',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 600
                            }}
                          >
                            {card.location.split(',')[0]}
                          </span>
                        </div>
                        <div style={{ padding: '18px' }}>
                          <span
                            style={{
                              background: '#EEF4FC',
                              color: '#1856A5',
                              fontSize: '11px',
                              fontWeight: 700,
                              padding: '3px 8px',
                              borderRadius: '999px',
                              display: 'inline-block',
                              marginBottom: '8px'
                            }}
                          >
                            {card.focus}
                          </span>
                          <h4 style={{ margin: '0 0 8px', fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700, lineHeight: 1.35 }}>
                            {card.title}
                          </h4>
                          <p style={{ margin: 0, fontSize: '13px', color: '#4F617D', lineHeight: 1.5 }}>
                            {card.desc}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '10px 18px',
                          borderTop: '1px solid #EEF4FC',
                          fontSize: '12px',
                          color: '#1856A5',
                          fontWeight: 600
                        }}
                      >
                        Partner: {card.partner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* EVENTS (4-COLUMN CARD GRID) */}
            <section style={{ padding: '40px 0 60px', background: '#EEF4FC', borderTop: '1px solid #DCE9F8' }}>
              <div className="shell">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', color: '#0A2A5C', fontWeight: 800 }}>
                    Events
                  </h3>
                  <a href="#thrust-areas" style={{ fontSize: '13px', color: '#1856A5', fontWeight: 700 }}>
                    View All →
                  </a>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {sustainabilityEvents.map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #DCE9F8',
                        boxShadow: '0 4px 14px rgba(10, 42, 92, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div
                        style={{
                          height: '140px',
                          background: `url(${card.image}) center/cover no-repeat`,
                          position: 'relative'
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'rgba(10, 42, 92, 0.85)',
                            color: '#FFFFFF',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600
                          }}
                        >
                          {card.location}
                        </span>
                      </div>
                      <div style={{ padding: '18px' }}>
                        <span
                          style={{
                            background: '#EEF4FC',
                            color: '#1856A5',
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: '999px',
                            display: 'inline-block',
                            marginBottom: '8px'
                          }}
                        >
                          {card.focus}
                        </span>
                        <h4 style={{ margin: '0 0 8px', fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700, lineHeight: 1.35 }}>
                          {card.title}
                        </h4>
                        <p style={{ margin: 0, fontSize: '13px', color: '#4F617D', lineHeight: 1.5 }}>
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* ===============================================================
             LIVELIHOOD DOMAIN CONTENT
             =============================================================== */
          <div className="domain-livelihood-section">
            {/* DOMAIN INTRO STRIP */}
            <div style={{ background: '#FFFFFF', padding: '44px 0 20px', textAlign: 'center' }}>
              <div className="shell">
                <span
                  style={{
                    color: '#0A2A5C',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  Selected Domain
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 3.4vw, 40px)',
                    color: '#0A2A5C',
                    margin: '6px 0 8px',
                    fontWeight: 800
                  }}
                >
                  Livelihood
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4F617D',
                    maxWidth: '680px',
                    margin: '0 auto',
                    lineHeight: 1.6
                  }}
                >
                  Strengthening livelihoods for resilient and prosperous rural communities through farming, enterprise, and community-driven innovation.
                </p>
              </div>
            </div>

            {/* FOCUS AREAS: 3 COMPACT CARDS */}
            <section style={{ padding: '30px 0 40px', background: '#FFFFFF' }}>
              <div className="shell">
                <div style={{ marginBottom: '22px' }}>
                  <h3 style={{ fontSize: '18px', color: '#0A2A5C', margin: 0, fontWeight: 700 }}>
                    Focus Areas
                  </h3>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {livelihoodFocusAreas.map((fa, i) => (
                    <div
                      key={fa.title}
                      style={{
                        background: '#EEF4FC',
                        borderRadius: '16px',
                        padding: '26px 22px',
                        border: '1.5px solid #DCE9F8',
                        boxShadow: '0 2px 8px rgba(10, 42, 92, 0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            background: '#FFFFFF',
                            color: '#0A2A5C',
                            display: 'grid',
                            placeItems: 'center',
                            border: '1px solid #DCE9F8'
                          }}
                        >
                          {fa.icon}
                        </div>
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#0A2A5C' }}>
                          0{i + 1}
                        </span>
                      </div>
                      <h4 style={{ margin: 0, fontSize: '17px', color: '#0A2A5C', fontWeight: 700 }}>
                        {fa.title}
                      </h4>
                      <p style={{ margin: 0, fontSize: '13.5px', color: '#4F617D', lineHeight: 1.55 }}>
                        {fa.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* KPI STATS BAR */}
            <section style={{ padding: '0 0 50px', background: '#FFFFFF' }}>
              <div className="shell">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                    gap: '16px',
                    background: '#EEF4FC',
                    padding: '24px',
                    borderRadius: '18px',
                    border: '1.5px solid #DCE9F8'
                  }}
                >
                  {livelihoodStats.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '14px',
                        padding: '18px 20px',
                        border: '1px solid #DCE9F8'
                      }}
                    >
                      <div style={{ fontSize: '28px', fontWeight: 800, color: '#0A2A5C', lineHeight: 1.1 }}>
                        {s.number}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1856A5', margin: '4px 0 2px' }}>
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

            {/* RESEARCH (4-COLUMN CARD GRID) */}
            <section style={{ padding: '40px 0 50px', background: '#EEF4FC', borderTop: '1px solid #DCE9F8' }}>
              <div className="shell">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', color: '#0A2A5C', fontWeight: 800 }}>
                    Research
                  </h3>
                  <a href="#thrust-areas" style={{ fontSize: '13px', color: '#1856A5', fontWeight: 700 }}>
                    View All →
                  </a>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {livelihoodResearch.map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #DCE9F8',
                        boxShadow: '0 4px 14px rgba(10, 42, 92, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            height: '140px',
                            background: `url(${card.image}) center/cover no-repeat`,
                            position: 'relative'
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              background: 'rgba(10, 42, 92, 0.85)',
                              color: '#FFFFFF',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 600
                            }}
                          >
                            {card.location.split('&')[0]}
                          </span>
                        </div>
                        <div style={{ padding: '18px' }}>
                          <span
                            style={{
                              background: '#EEF4FC',
                              color: '#0A2A5C',
                              fontSize: '11px',
                              fontWeight: 700,
                              padding: '3px 8px',
                              borderRadius: '999px',
                              display: 'inline-block',
                              marginBottom: '8px'
                            }}
                          >
                            {card.focus}
                          </span>
                          <h4 style={{ margin: '0 0 8px', fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700, lineHeight: 1.35 }}>
                            {card.title}
                          </h4>
                          <p style={{ margin: 0, fontSize: '13px', color: '#4F617D', lineHeight: 1.5 }}>
                            {card.desc}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '10px 18px',
                          borderTop: '1px solid #EEF4FC',
                          fontSize: '12px',
                          color: '#1856A5',
                          fontWeight: 600
                        }}
                      >
                        Partner: {card.partner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PROJECTS (4-COLUMN CARD GRID) */}
            <section style={{ padding: '40px 0 50px', background: '#FFFFFF', borderTop: '1px solid #DCE9F8' }}>
              <div className="shell">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', color: '#0A2A5C', fontWeight: 800 }}>
                    Projects
                  </h3>
                  <a href="#thrust-areas" style={{ fontSize: '13px', color: '#1856A5', fontWeight: 700 }}>
                    View All →
                  </a>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {livelihoodProjects.map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #DCE9F8',
                        boxShadow: '0 4px 14px rgba(10, 42, 92, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            height: '140px',
                            background: `url(${card.image}) center/cover no-repeat`,
                            position: 'relative'
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              background: 'rgba(10, 42, 92, 0.85)',
                              color: '#FFFFFF',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 600
                            }}
                          >
                            {card.location.split(',')[0]}
                          </span>
                        </div>
                        <div style={{ padding: '18px' }}>
                          <span
                            style={{
                              background: '#EEF4FC',
                              color: '#0A2A5C',
                              fontSize: '11px',
                              fontWeight: 700,
                              padding: '3px 8px',
                              borderRadius: '999px',
                              display: 'inline-block',
                              marginBottom: '8px'
                            }}
                          >
                            {card.focus}
                          </span>
                          <h4 style={{ margin: '0 0 8px', fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700, lineHeight: 1.35 }}>
                            {card.title}
                          </h4>
                          <p style={{ margin: 0, fontSize: '13px', color: '#4F617D', lineHeight: 1.5 }}>
                            {card.desc}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '10px 18px',
                          borderTop: '1px solid #EEF4FC',
                          fontSize: '12px',
                          color: '#1856A5',
                          fontWeight: 600
                        }}
                      >
                        Partner: {card.partner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* EVENTS (4-COLUMN CARD GRID) */}
            <section style={{ padding: '40px 0 60px', background: '#EEF4FC', borderTop: '1px solid #DCE9F8' }}>
              <div className="shell">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', color: '#0A2A5C', fontWeight: 800 }}>
                    Events
                  </h3>
                  <a href="#thrust-areas" style={{ fontSize: '13px', color: '#1856A5', fontWeight: 700 }}>
                    View All →
                  </a>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {livelihoodEvents.map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #DCE9F8',
                        boxShadow: '0 4px 14px rgba(10, 42, 92, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div
                        style={{
                          height: '140px',
                          background: `url(${card.image}) center/cover no-repeat`,
                          position: 'relative'
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'rgba(10, 42, 92, 0.85)',
                            color: '#FFFFFF',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600
                          }}
                        >
                          {card.location}
                        </span>
                      </div>
                      <div style={{ padding: '18px' }}>
                        <span
                          style={{
                            background: '#EEF4FC',
                            color: '#0A2A5C',
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: '999px',
                            display: 'inline-block',
                            marginBottom: '8px'
                          }}
                        >
                          {card.focus}
                        </span>
                        <h4 style={{ margin: '0 0 8px', fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700, lineHeight: 1.35 }}>
                          {card.title}
                        </h4>
                        <p style={{ margin: 0, fontSize: '13px', color: '#4F617D', lineHeight: 1.5 }}>
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* ─── CROSS-DOMAIN WAYS OF WORKING (THRUST AREAS) ─── */}
      <section
        id="thrust-areas"
        style={{
          padding: '70px 0',
          background: '#FFFFFF',
          borderTop: '2px solid #DCE9F8'
        }}
      >
        <div className="shell">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <span
              style={{
                color: '#1856A5',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Cross-Domain Ways of Working
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 38px)', color: '#0A2A5C', margin: '0 0 10px', fontWeight: 800 }}>
              How We Work Across Both Domains
            </h2>
            <p style={{ color: '#4F617D', fontSize: '15.5px', lineHeight: 1.6 }}>
              Four institutional Thrust Areas that apply across <strong>BOTH Sustainability and Livelihood</strong>. Select a thrust area to see cross-cutting research, projects, and events.
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
              { id: 'research', title: 'Research & Field Innovation', icon: <IconSearch /> },
              { id: 'projects', title: 'Development Projects', icon: <IconProjects /> },
              { id: 'education', title: 'Education & Capacity Building', icon: <IconEducation /> },
              { id: 'entrepreneurship', title: 'Entrepreneurship Development', icon: <IconGrowth /> }
            ].map((t) => {
              const isSelected = activeThrust === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveThrust(t.id)}
                  style={{
                    background: isSelected ? '#1856A5' : '#EEF4FC',
                    color: isSelected ? '#FFFFFF' : '#0A2A5C',
                    border: isSelected ? '1.5px solid #1856A5' : '1.5px solid #DCE9F8',
                    borderRadius: '16px',
                    padding: '22px 18px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 8px 24px rgba(24, 86, 165, 0.28)' : '0 2px 8px rgba(10, 42, 92, 0.04)',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ color: isSelected ? '#FFFFFF' : '#1856A5' }}>
                    {t.icon}
                  </div>
                  <strong style={{ fontSize: '15.5px', color: isSelected ? '#FFFFFF' : '#0A2A5C' }}>
                    {t.title}
                  </strong>
                </button>
              );
            })}
          </div>

          {/* THRUST AREA IN-PLACE SHOWCASE */}
          <div
            style={{
              background: '#EEF4FC',
              borderRadius: '22px',
              border: '1.5px solid #DCE9F8',
              padding: '36px',
              boxShadow: '0 8px 30px rgba(10, 42, 92, 0.06)'
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

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px'
              }}
            >
              {filteredThrustItems.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '18px 20px',
                    border: '1px solid #DCE9F8',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span
                        style={{
                          background: item.domain === 'Sustainability' ? '#EEF4FC' : '#DCE9F8',
                          color: item.domain === 'Sustainability' ? '#1856A5' : '#0A2A5C',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '999px'
                        }}
                      >
                        {item.domain}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#1A8FBF', fontWeight: 600 }}>
                        {item.location}
                      </span>
                    </div>
                    <h5 style={{ margin: '0 0 6px', fontSize: '15px', color: '#0A2A5C', fontWeight: 700 }}>
                      {item.title}
                    </h5>
                    <span style={{ fontSize: '12px', color: '#4F617D' }}>
                      Focus: {item.focus}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '12.5px', color: '#4F617D' }}>
              ✦ Cross-cutting initiatives from both domains under the <strong>{currentThrust.title}</strong> thrust area.
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISITOR JOURNEYS (REALISTIC INSTITUTIONAL PATHWAYS) ─── */}
      <section style={{ padding: '60px 0', background: '#EEF4FC', borderTop: '1px solid #DCE9F8' }}>
        <div className="shell">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 32px' }}>
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
            <h2 style={{ fontSize: '26px', color: '#0A2A5C', margin: '4px 0 8px', fontWeight: 800 }}>
              Visitor Journeys
            </h2>
            <p style={{ color: '#4F617D', fontSize: '14.5px', margin: 0 }}>
              Tailored exploration paths according to your area of interest.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '18px'
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
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#EEF4FC', color: '#1856A5', display: 'grid', placeItems: 'center' }}>
                  <IconAgriculture />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700 }}>
                    A Farmer or Dairy Entrepreneur
                  </h4>
                  <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600 }}>Practitioner Pathway</span>
                </div>
              </div>
              <div style={{ padding: '10px 14px', background: '#EEF4FC', borderRadius: '8px', fontSize: '12.5px', color: '#4F617D' }}>
                <Link to="/" style={{ color: '#1856A5', fontWeight: 600 }}>Home</Link> →{' '}
                <button onClick={() => handleDomainSwitch('livelihood')} style={{ border: 0, background: 'transparent', color: '#1856A5', fontWeight: 600, cursor: 'pointer', padding: 0 }}>Domains (Livelihood)</button> →{' '}
                <span style={{ fontWeight: 600, color: '#1856A5' }}>Projects</span> →{' '}
                <Link to="/get-involved" style={{ color: '#0A2A5C', fontWeight: 700 }}>Get Involved</Link>
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
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#EEF4FC', color: '#1856A5', display: 'grid', placeItems: 'center' }}>
                  <IconEducation />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700 }}>
                    A Student or Researcher
                  </h4>
                  <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600 }}>Academic Pathway</span>
                </div>
              </div>
              <div style={{ padding: '10px 14px', background: '#EEF4FC', borderRadius: '8px', fontSize: '12.5px', color: '#4F617D' }}>
                <Link to="/" style={{ color: '#1856A5', fontWeight: 600 }}>Home</Link> →{' '}
                <Link to="/learning" style={{ color: '#1856A5', fontWeight: 600 }}>Learning</Link> →{' '}
                <button onClick={() => handleDomainSwitch('sustainability')} style={{ border: 0, background: 'transparent', color: '#1856A5', fontWeight: 600, cursor: 'pointer', padding: 0 }}>Domains (Sustainability)</button> →{' '}
                <Link to="/get-involved" style={{ color: '#0A2A5C', fontWeight: 700 }}>Get Involved</Link>
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
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#EEF4FC', color: '#1856A5', display: 'grid', placeItems: 'center' }}>
                  <IconLivelihood />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '15.5px', color: '#0A2A5C', fontWeight: 700 }}>
                    A Partner or Funder
                  </h4>
                  <span style={{ fontSize: '12px', color: '#1A8FBF', fontWeight: 600 }}>Institutional Pathway</span>
                </div>
              </div>
              <div style={{ padding: '10px 14px', background: '#EEF4FC', borderRadius: '8px', fontSize: '12.5px', color: '#4F617D' }}>
                <Link to="/" style={{ color: '#1856A5', fontWeight: 600 }}>Home</Link> →{' '}
                <a href="#thrust-areas" style={{ color: '#1856A5', fontWeight: 600 }}>Thrust Area</a> →{' '}
                <Link to="/resources" style={{ color: '#1856A5', fontWeight: 600 }}>Resources</Link> →{' '}
                <Link to="/get-involved" style={{ color: '#0A2A5C', fontWeight: 700 }}>Get Involved</Link>
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
