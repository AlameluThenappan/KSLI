import React from 'react';
import { Link } from 'react-router-dom';
import TallImageCard from '../components/TallImageCard.jsx';
import '../styles/OurWork.css';

// Media assets
import heroBg from '../assets/domains/hero.jpg';
import sccaImg from '../../assets/SCCA.webp';

export default function Outreach() {
  const outreachInitiatives = [
    {
      id: 'velan-thiruvizha',
      title: 'Kongunadu Velan Matrum Kaalnadai Thiruvizha',
      tag: 'FARMER FESTIVAL',
      desc: 'Regional farmer and livestock festival celebrating indigenous breeds, sustainable agriculture, and local farming heritage.',
      location: 'Tiruppur',
      image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&auto=format&fit=crop&q=80',
      to: '/our-work/events'
    },
    {
      id: 'dairy-yatra',
      title: 'Dairy Yatra: Traveling Field Immersion',
      tag: 'FIELD IMMERSION',
      desc: 'Connecting young farmers, researchers, and students directly with modern chilling centres and cooperative milk collection yards.',
      location: 'Western Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80',
      to: '/our-work/events'
    },
    {
      id: 'ghats-festival',
      title: 'Western Ghats Festival',
      tag: 'COMMUNITY ECOLOGY',
      desc: 'Annual festival celebrating the indigenous flora, wildlife corridors, and ecological traditions of the Western Ghats landscape.',
      location: 'Anaimalai Foothills',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
      to: '/our-work/events'
    },
    {
      id: 'uzhavan-project',
      title: 'Uzhavan Foundation Community Action',
      tag: 'RURAL WATERSHED',
      desc: 'Working with rainfed agrarian farming clusters to build interconnected percolation pond networks and recharge ground aquifers.',
      location: 'Manapparai, Tiruchirappalli',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
      to: '/our-work/projects'
    },
    {
      id: 'young-farmers',
      title: 'Young Farmers Forum',
      tag: 'AGRI-TECH NETWORK',
      desc: 'Equipping emerging regional agriculturists with modern agronomic tools, market access, and collaborative peer support.',
      location: 'Kongu Region',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
      to: '/our-work/initiatives'
    },
    {
      id: 'wetland-stewards',
      title: 'Singanallur Wetland Citizen Naturalists',
      tag: 'URBAN CONSERVATION',
      desc: 'Grassroots birdwatching, native vegetation audits, and water monitoring in partnership with BNHS and volunteer naturalists.',
      location: 'Singanallur Lake, Coimbatore',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=80',
      to: '/our-work/projects'
    }
  ];

  return (
    <div className="ourwork-page">
      {/* ── Page Hero Area ── */}
      <header
        className="ourwork-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 42, 92, 0.90) 0%, rgba(10, 42, 92, 0.75) 100%), url(${heroBg})`
        }}
      >
        <div className="shell ourwork-hero-shell">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>Community &amp; Extension</p>
          <h1>Outreach &amp; Community Engagement</h1>
          <p className="ourwork-hero-sub">
            Bridging institutional research and grassroots action through traveling field yatras, community watershed restoration, farmer conclaves, and citizen ecological stewardship.
          </p>

          <div className="ourwork-hero-stats">
            <div className="ourwork-hero-stat">
              <strong>5,000+</strong>
              <span>Smallholder Farmers Engaged</span>
            </div>
            <div className="ourwork-hero-stat">
              <strong>600+</strong>
              <span>Youth &amp; Student Participants</span>
            </div>
            <div className="ourwork-hero-stat">
              <strong>20+</strong>
              <span>Community Partner Groups</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Content Section ── */}
      <main className="section shell ourwork-content-section">
        <div className="ourwork-section-head">
          <p className="eyebrow" style={{ color: '#1856A5' }}>Grassroots Programs</p>
          <h2>Field Outreach in Action</h2>
          <p>
            Explore our continuous community extension programs across Western Tamil Nadu connecting agrarian livelihoods with ecological health.
          </p>
        </div>

        <div className="tall-image-grid tall-image-grid-3">
          {outreachInitiatives.map((item) => (
            <TallImageCard
              key={item.id}
              title={item.title}
              tag={item.tag}
              desc={item.desc}
              location={item.location}
              image={item.image}
              to={item.to}
            />
          ))}
        </div>

        {/* ── Ways to Participate CTA ── */}
        <div className="ourwork-cta-banner">
          <div className="ourwork-cta-copy">
            <span className="eyebrow" style={{ color: '#1856A5' }}>Get Involved</span>
            <h3>Participate in Our Community Outreach</h3>
            <p>
              Whether as a volunteer in field tree censuses, an intern embedded in rural clusters, or a CSR sponsor funding water infrastructure, your involvement drives measurable change.
            </p>
          </div>
          <div className="ourwork-cta-actions">
            <Link to="/get-involved/volunteer" className="btn-primary">
              Volunteer With Us →
            </Link>
            <Link to="/get-involved" className="btn-secondary">
              All Engagement Tracks
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
