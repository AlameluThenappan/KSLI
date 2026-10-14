import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import TallImageCard from '../components/TallImageCard.jsx';
import '../styles/OurWork.css';

// Approved photography assets from repository
import rockyHillsImg from '../assets/domains/rocky_hills_banner.jpg';
import sccaImg from '../../assets/SCCA.webp';

const WORK_CONFIGS = {
  research: {
    slug: 'research',
    badge: 'Applied Inquiry',
    title: 'Research & Field Innovation',
    subtitle: 'Integrated scientific inquiry, field trials, and digital extension models.',
    overview: 'KSLI conducts applied research combining scientific inquiry and field extension to enhance productivity and climate resilience for farmers and regional ecosystems across Tamil Nadu.',
    bannerImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop&q=80',
    stats: [
      { value: '5,000+', label: 'Farmers in Field Trials' },
      { value: '₹5 Cr+', label: 'Climate Adaptation Grant' },
      { value: '3', label: 'Centres of Excellence' }
    ],
    items: [
      {
        id: 'r-sugarcane',
        title: 'Fertilizer Optimization (N-Balancing) in Sugarcane',
        tag: 'APPLIED RESEARCH',
        desc: 'Integrated research supporting 5,000 farmers supplying to Sakthi Sugars through scientific nitrogen balancing.',
        location: 'Sakthi Nagar & Erode',
        partner: 'Univ. of Hohenheim & Sakthi Sugars',
        image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#research'
      },
      {
        id: 'r-dairy',
        title: 'Climate Smart Dairy Digital Extension Model',
        tag: 'DIGITAL INNOVATION',
        desc: 'Evidence-based digital extension optimizing smallholder dairy productivity, animal nutrition, and IoT biomarkers.',
        location: 'Coimbatore & Tiruppur',
        partner: 'NITARA & Aavin',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#research'
      },
      {
        id: 'r-dfcd',
        title: 'Dutch Fund for Climate Action (DFCD) Watershed Study',
        tag: 'NATURE-BASED SOLUTIONS',
        desc: 'A ~₹5 crore climate adaptation grant implemented with WWF India assessing hydrological resilience.',
        location: 'Western Ghats & Bhavani Basin',
        partner: 'WWF India & DFCD',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#research'
      },
      {
        id: 'r-carbon',
        title: 'Precision Nitrogen Balancing & Soil Organic Carbon',
        tag: 'RESEARCH MONOGRAPH',
        desc: 'Quantitative analysis of 5,000+ farmer plots evaluating reduced synthetic inputs and soil organic carbon.',
        location: 'Western Tamil Nadu',
        partner: 'KSLI Sugarcane CoE',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#research'
      },
      {
        id: 'r-microcosm',
        title: 'Kumaraguru Microcosm: Campus Decarbonization Audit',
        tag: 'LIVING LAB RESEARCH',
        desc: 'Empirical review recording 1.2 MLD wastewater recycling efficiency, rooftop PV generation, and native tree census.',
        location: 'Kumaraguru Campus, Coimbatore',
        partner: 'IGBC Working Group',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#microcosm'
      },
      {
        id: 'r-academic',
        title: 'Academic Programs Integration & Curriculum Research',
        tag: 'CURRICULUM INNOVATION',
        desc: 'Curriculum development for MBA Agri Business, MSW, M.E Environmental Engineering, and MBA Sustainability.',
        location: 'Kumaraguru Campus',
        partner: 'KSLI Faculty Network',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
        to: '/education#academic-programs'
      }
    ]
  },

  projects: {
    slug: 'projects',
    badge: 'Field Implementation',
    title: 'Development Projects',
    subtitle: 'Place-based development initiatives translating research into sustained community impact.',
    overview: 'KSLI implements place-based projects in decentralized campus sustainability, community water management, and rural institution building across regional agrarian clusters.',
    bannerImg: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&auto=format&fit=crop&q=80',
    stats: [
      { value: '250 KW', label: 'Solar Capacity Operable' },
      { value: '1.2 MLD', label: 'Wastewater Treated Daily' },
      { value: '4+', label: 'Active Cluster Projects' }
    ],
    items: [
      {
        id: 'p-microcosm',
        title: 'Campus Sustainability — Kumaraguru Microcosm',
        tag: 'CAMPUS LIVING LAB',
        desc: 'Campus living lab featuring 250 KW solar operations, STP, biogas installation, and rainwater harvesting.',
        location: 'Kumaraguru Campus, Coimbatore',
        partner: 'Campus Operations',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#microcosm'
      },
      {
        id: 'p-fpo',
        title: 'Pariyur Farmer Producer Organization (FPO)',
        tag: 'RURAL COLLECTIVE',
        desc: 'Farmer-owned collective providing shared post-harvest sorting, value-addition processing, and market linkages.',
        location: 'Gobichettipalayam',
        partner: 'StartupTN & NABARD',
        image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        id: 'p-uzhavan',
        title: 'Uzhavan Foundation Community Water Project',
        tag: 'WATERSHED RESTORATION',
        desc: 'CSR-funded initiative revitalizing rainfed agrarian communities through farm pond networks and watershed restoration.',
        location: 'Manapparai, Tiruchirappalli',
        partner: 'Uzhavan Foundation',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        id: 'p-armour',
        title: 'Armour Steel Buildings Vocational Project',
        tag: 'VOCATIONAL SKILLS',
        desc: 'CSR-supported technical skills training in precision fabrication and rural industrial enterprise development.',
        location: 'Salem',
        partner: 'Armour Steel Buildings',
        image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        id: 'p-farmer360',
        title: 'Farmer 360 Advisory Initiative',
        tag: 'AGRI ADVISORY',
        desc: 'Holistic agricultural advisory model providing continuous soil testing, credit guidance, and crop health monitoring.',
        location: 'Regional Clusters',
        partner: 'Kisan Konnect',
        image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        id: 'p-wetland',
        title: 'Singanallur Urban Wetland Restoration',
        tag: 'ECOLOGICAL ACTION',
        desc: 'Revitalizing urban wetlands through bio-treatment reed beds and community citizen biodiversity audits.',
        location: 'Singanallur, Coimbatore',
        partner: 'BNHS & Local Naturalists',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#projects'
      }
    ]
  },

  events: {
    slug: 'events',
    badge: 'Conclaves & Gatherings',
    title: 'Conclaves, Yatras & Events',
    subtitle: 'Convening students, farmers, scientists, and policy champions around hands-on field immersion.',
    overview: 'KSLI hosts flagship conclaves, experiential travel immersions, hackathons, and regional festivals celebrating agrarian resilience and ecological conservation.',
    bannerImg: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&auto=format&fit=crop&q=80',
    stats: [
      { value: '600+', label: 'Student Conclave Delegates' },
      { value: '3', label: 'Field Yatras Completed' },
      { value: '20+', label: 'Partner Institutions Present' }
    ],
    items: [
      {
        id: 'e-scca',
        title: 'Student Conclave for Climate Action (SCCA)',
        tag: 'FLAGSHIP CONCLAVE',
        desc: 'Statewide convention gathering over 600 students to propose and pitch campus climate and decarbonization solutions.',
        location: 'Kumaraguru Campus, Coimbatore',
        partner: 'KSLI Youth Climate Hub',
        image: sccaImg,
        to: '/domains/sustainability#events'
      },
      {
        id: 'e-dairy-yatra',
        title: 'Dairy Yatra: Immersion',
        tag: 'TRAVELING IMMERSION',
        desc: 'Traveling field immersion visiting modern chilling centres, automated milking yards, and value-addition units.',
        location: 'Western Tamil Nadu Dairy Corridor',
        partner: 'Aavin & ABT Foods',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      },
      {
        id: 'e-agri-yatra',
        title: 'Agri Yatra: Regenerative Agriculture',
        tag: 'FARMER FIELD WALK',
        desc: 'Traveling exhibition and field walk taking farmers and students through regenerative agricultural practices.',
        location: 'Western Tamil Nadu',
        partner: 'KSLI Agronomy Team',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#events'
      },
      {
        id: 'e-velan',
        title: 'Kongunadu Velan Matrum Kaalnadai Thiruvizha',
        tag: 'AGRI & CATTLE FESTIVAL',
        desc: 'Regional farmer and livestock festival celebrating indigenous breeds, sustainable agriculture, and local farming heritage.',
        location: 'Tiruppur',
        partner: 'Regional Farmer Collectives',
        image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      },
      {
        id: 'e-ghats',
        title: 'Western Ghats Festival',
        tag: 'CONSERVATION FESTIVAL',
        desc: 'Field festival celebrating the ecological, indigenous, and botanical heritage of the Western Ghats landscape.',
        location: 'Anaimalai Foothills',
        partner: 'Nature Conservation Network',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#events'
      },
      {
        id: 'e-cane-conf',
        title: 'Sugarcane Innovation & Sustainability Conference',
        tag: 'INDUSTRY CONCLAVE',
        desc: 'Gathering sugarcane researchers, mill leaders, agronomists, and growers around soil health and N-balancing.',
        location: 'Sakthi Nagar',
        partner: 'Sakthi Sugars',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      },
      {
        id: 'e-hackathon',
        title: 'Livestock Hackathon',
        tag: 'INNOVATION CHALLENGE',
        desc: 'Open innovation hackathon solving dairy and livestock enterprise challenges with IoT and automation.',
        location: 'Coimbatore',
        partner: 'AgTech Hub',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      }
    ]
  },

  initiatives: {
    slug: 'initiatives',
    badge: 'Strategic Platforms',
    title: 'Flagship Strategic Initiatives',
    subtitle: 'Institutional platforms consolidating research, entrepreneurship, and community action.',
    overview: 'KSLI is structured around flagship institutional platforms that unite academic research, sector expertise, and community engagement under a single governance and identity.',
    bannerImg: rockyHillsImg,
    stats: [
      { value: '3', label: 'Centres of Excellence' },
      { value: '2', label: 'Primary Domains' },
      { value: '20+', label: 'Partner Organizations' }
    ],
    items: [
      {
        id: 'i-coe-dairy',
        title: 'Centre of Excellence – Dairy',
        tag: 'CENTRE OF EXCELLENCE',
        desc: 'Driving productivity enhancement, clean milk hygiene, silage preservation, and youth dairy entrepreneurship.',
        location: 'Western Tamil Nadu',
        partner: 'Aavin & ABT Foods',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood'
      },
      {
        id: 'i-coe-sugarcane',
        title: 'Centre of Excellence – Sugarcane',
        tag: 'CENTRE OF EXCELLENCE',
        desc: 'Partnering with Sakthi Sugars to deliver precision N-balancing and soil organic carbon rejuvenation.',
        location: 'Sakthi Nagar & Erode',
        partner: 'Sakthi Sugars & Hohenheim',
        image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood'
      },
      {
        id: 'i-coe-social',
        title: 'Centre of Excellence – Social Development',
        tag: 'CENTRE OF EXCELLENCE',
        desc: 'Anchoring community water projects, rural livelihoods, participatory fieldwork, and grassroots governance.',
        location: 'Coimbatore & Central TN',
        partner: 'Social Work Fieldwork Network',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability'
      },
      {
        id: 'i-dairy-ent',
        title: 'Climate Smart Dairy Entrepreneurship',
        tag: 'ENTERPRISE INCUBATION',
        desc: 'Building farmer-led dairy enterprises with modern milking infrastructure, clean cold chains, and direct offtake.',
        location: 'Western Tamil Nadu',
        partner: 'ABT Foods & Aavin',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        id: 'i-young-farmers',
        title: 'Young Farmers Forum & AgTech Hub',
        tag: 'YOUTH ENTREPRENEURSHIP',
        desc: 'Equipping emerging farmers with modern agricultural tools, entrepreneurship skills, and collaborative business networks.',
        location: 'Kongu Region',
        partner: 'Kumaraguru AgTech Hub',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        id: 'i-living-landscapes',
        title: 'Living Landscapes Conservation Network',
        tag: 'ECOLOGICAL STEWARDSHIP',
        desc: 'Landscape-scale conservation corridor protecting native flora, wetland hydrology, and human settlements.',
        location: 'Western Ghats Buffer Zone',
        partner: 'WWF, BNHS & Auroville Botanical',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability'
      }
    ]
  }
};

export default function OurWorkPage({ defaultCategory }) {
  const { category: paramCategory } = useParams();
  const categoryKey = paramCategory || defaultCategory || 'research';
  const config = WORK_CONFIGS[categoryKey];

  if (!config) {
    return <Navigate to="/our-work/research" replace />;
  }

  const tabs = [
    { id: 'research', label: 'Research', to: '/our-work/research' },
    { id: 'projects', label: 'Projects', to: '/our-work/projects' },
    { id: 'events', label: 'Events', to: '/our-work/events' },
    { id: 'initiatives', label: 'Initiatives', to: '/our-work/initiatives' }
  ];

  return (
    <div className="ourwork-page">
      {/* ── Page Hero Area ── */}
      <header
        className="ourwork-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 42, 92, 0.88) 0%, rgba(10, 42, 92, 0.72) 100%), url(${config.bannerImg})`
        }}
      >
        <div className="shell ourwork-hero-shell">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>{config.badge}</p>
          <h1>{config.title}</h1>
          <p className="ourwork-hero-sub">{config.overview}</p>

          {/* Quick Metrics */}
          <div className="ourwork-hero-stats">
            {config.stats.map((s) => (
              <div key={s.label} className="ourwork-hero-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Category Sub-navigation Pills ── */}
      <div className="ourwork-nav-strip">
        <div className="shell ourwork-nav-shell" role="tablist" aria-label="Our Work categories">
          {tabs.map((tab) => {
            const isActive = tab.id === categoryKey;
            return (
              <Link
                key={tab.id}
                to={tab.to}
                role="tab"
                aria-selected={isActive}
                className={`ourwork-tab-link ${isActive ? 'is-active' : ''}`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Established Image Card Grid ── */}
      <main className="section shell ourwork-content-section">
        <div className="ourwork-section-head">
          <p className="eyebrow" style={{ color: '#1856A5' }}>Verified Portfolios</p>
          <h2>{config.title}</h2>
          <p>{config.subtitle}</p>
        </div>

        <div className="tall-image-grid tall-image-grid-3">
          {config.items.map((item) => (
            <TallImageCard
              key={item.id}
              title={item.title}
              tag={item.tag}
              desc={item.desc}
              location={item.location}
              partner={item.partner}
              image={item.image}
              to={item.to}
            />
          ))}
        </div>

        {/* ── Contextual Action Callout ── */}
        <div className="ourwork-cta-banner">
          <div className="ourwork-cta-copy">
            <span className="eyebrow" style={{ color: '#1856A5' }}>Collaboration</span>
            <h3>Partner with KSLI on {config.title}</h3>
            <p>
              We collaborate with academic institutions, industry sponsors, CSR partners, and rural farmer collectives to co-create sustainable impact.
            </p>
          </div>
          <div className="ourwork-cta-actions">
            <Link to="/get-involved" className="btn-primary">
              Get Involved →
            </Link>
            <Link to="/domains" className="btn-secondary">
              Explore Domains
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
