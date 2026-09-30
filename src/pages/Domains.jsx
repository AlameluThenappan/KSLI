import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Domains.css';

// Quadrant, hero and banner images
import heroBg from '../assets/domains/hero.jpg';
import seedlingImg from '../assets/domains/quadrant_seedling.jpg';
import ecosystemImg from '../assets/domains/quadrant_ecosystem.jpg';
import educationImg from '../assets/domains/quadrant_education.jpg';
import processingImg from '../assets/domains/quadrant_processing.jpg';
import rockyHillsBanner from '../assets/domains/rocky_hills_banner.jpg';

export default function Domains() {
  const kpiStats = [
    {
      id: 'projects',
      value: '50+',
      label: 'Projects Implemented',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      )
    },
    {
      id: 'farms',
      value: '1,20,000+',
      label: 'Farms Engaged',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )
    },
    {
      id: 'collaborations',
      value: '180+',
      label: 'Industry & Institutional Collaborations',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'outputs',
      value: '200+',
      label: 'Research & Knowledge Outputs',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    }
  ];

  // Actual Thrust Areas sourced strictly from KSLI_Pitch.pdf
  const pathways = [
    {
      id: '01',
      num: '01 —',
      title: 'Research & Field Innovation',
      desc: 'Integrated research and digital, evidence-based extension models.',
      to: '/thrust-areas/research-field-innovation',
      image: seedlingImg,
      iconType: 'leaf',
      position: 'tl',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 4 13a7 7 0 0 1 12.6-4.5L20 8" />
          <path d="M20 4v4h-4" />
          <path d="M12 20a8 8 0 0 0 8-8V4" />
        </svg>
      )
    },
    {
      id: '02',
      num: '02 —',
      title: 'Development Projects',
      desc: 'Place-based development initiatives translating research into sustained community impact.',
      to: '/thrust-areas/development-projects',
      image: ecosystemImg,
      iconType: 'droplet',
      position: 'tr',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      )
    },
    {
      id: '03',
      num: '03 —',
      title: 'Education & Capacity Building',
      desc: 'Practice-oriented education, workshops, and immersive field learning.',
      to: '/thrust-areas/education-capacity-building',
      image: educationImg,
      iconType: 'education',
      position: 'bl',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      id: '04',
      num: '04 —',
      title: 'Entrepreneurship Development',
      desc: 'Incubating farmer producer organizations, dairy ventures, and youth-led enterprises.',
      to: '/thrust-areas/entrepreneurship-development',
      image: processingImg,
      iconType: 'network',
      position: 'br',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    }
  ];

  return (
    <div className="domains-page">
      {/* ─────────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────────── */}
      <section
        className="domains-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-label="KSLI Domains Hub"
      >
        <div className="domains-hero-overlay" aria-hidden="true" />
        <div className="domains-hero-vignette" aria-hidden="true" />

        <div className="domains-hero-shell">
          <div className="domains-hero-content">
            <div className="domains-hero-eyebrow">
              <span>INSTITUTIONAL DOMAINS &amp; MODES OF ACTION</span>
              <span className="domains-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="domains-hero-title">Domains</h1>

            <p className="domains-hero-lead">
              Two foundational domains. Four ways of working.<br />
              Real solutions for people and the planet.
            </p>

            <p className="domains-hero-desc">
              KSLI consolidates regional sustainability and rural empowerment across two primary verticals. Explore each dedicated domain or discover our cross-cutting thrust areas.
            </p>

            <div className="domains-hero-actions">
              <Link to="/domains/sustainability" className="domains-btn-primary">
                <span>Explore Sustainability</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/domains/livelihood" className="domains-btn-translucent">
                <span>Explore Livelihood</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 KPI Cards in Hero bottom dock */}
        <div className="domains-kpi-dock-wrapper">
          <div className="domains-kpi-dock">
            {kpiStats.map((kpi) => (
              <div key={kpi.id} className="domains-kpi-item">
                <div className="domains-kpi-icon-pill" aria-hidden="true">
                  {kpi.icon}
                </div>
                <div className="domains-kpi-text">
                  <span className="domains-kpi-value">{kpi.value}</span>
                  <span className="domains-kpi-label">{kpi.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          2. OUR THRUST AREAS SECTION (Exact circular 4-quadrant layout)
          ───────────────────────────────────────────────────────────────── */}
      <section className="domains-thrust-section" id="thrust-areas" aria-label="Our Thrust Areas">
        <div className="domains-thrust-header">
          <div className="domains-thrust-eyebrow">
            OUR THRUST AREAS
          </div>
          <h2 className="domains-thrust-title">
            Four pathways. A stronger tomorrow.
          </h2>
          <p className="domains-thrust-subtitle">
            Our thrust areas bring together research, education, innovation and on-ground action to build resilient and inclusive agri-food systems.
          </p>
        </div>

        <div className="domains-orbit-container">
          {/* DESKTOP 3-COLUMN CIRCULAR 4-QUADRANT COMPOSITION */}
          <div className="domains-orbit-desktop-grid">
            {/* Left Column (01 & 03) */}
            <div className="domains-orbit-col domains-orbit-col--left">
              {/* Quadrant 01 Card: Research & Field Innovation */}
              <div className="domains-pathway-card">
                <div className="domains-pathway-num">{pathways[0].num}</div>
                <h3 className="domains-pathway-heading">{pathways[0].title}</h3>
                <p className="domains-pathway-desc">{pathways[0].desc}</p>
                <Link to={pathways[0].to} className="domains-pathway-link">
                  <span>Explore This Area</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Quadrant 03 Card: Education & Capacity Building */}
              <div className="domains-pathway-card">
                <div className="domains-pathway-num">{pathways[2].num}</div>
                <h3 className="domains-pathway-heading">{pathways[2].title}</h3>
                <p className="domains-pathway-desc">{pathways[2].desc}</p>
                <Link to={pathways[2].to} className="domains-pathway-link">
                  <span>Explore This Area</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Central Circular Stage */}
            <div className="domains-center-orbit-stage">
              {/* Outer decorative dashed orbit and cardinal connection lines */}
              <svg className="domains-orbit-svg-canvas" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Circular orbit ring */}
                <circle cx="300" cy="300" r="268" stroke="#1856A5" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="5 5" />
                {/* Subtle outer glow ring */}
                <circle cx="300" cy="300" r="286" stroke="#1856A5" strokeOpacity="0.08" strokeWidth="1" />
                {/* Cardinal axis lines with connector dots */}
                <line x1="300" y1="12" x2="300" y2="588" stroke="#1856A5" strokeOpacity="0.20" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="12" y1="300" x2="588" y2="300" stroke="#1856A5" strokeOpacity="0.20" strokeWidth="1" strokeDasharray="3 3" />
                {/* Cardinal Dots */}
                <circle cx="300" cy="32" r="4.5" fill="#1856A5" />
                <circle cx="300" cy="568" r="4.5" fill="#1856A5" />
                <circle cx="32" cy="300" r="4.5" fill="#1856A5" />
                <circle cx="568" cy="300" r="4.5" fill="#1856A5" />
              </svg>

              {/* The 4 Quadrant Arched Photos */}
              <div className="domains-quadrants-ring">
                {/* Top-Left: Research & Field Innovation */}
                <div className="domains-quadrant-piece domains-quadrant-piece--tl">
                  <Link to={pathways[0].to} aria-label={pathways[0].title}>
                    <img src={seedlingImg} alt="Research & Field Innovation - Crop science and field trials" />
                    <div className="domains-quadrant-badge domains-quadrant-badge--tl" title={pathways[0].title}>
                      {pathways[0].icon}
                    </div>
                  </Link>
                </div>

                {/* Top-Right: Development Projects */}
                <div className="domains-quadrant-piece domains-quadrant-piece--tr">
                  <Link to={pathways[1].to} aria-label={pathways[1].title}>
                    <img src={ecosystemImg} alt="Development Projects - Watershed and ecological resilience" />
                    <div className="domains-quadrant-badge domains-quadrant-badge--tr" title={pathways[1].title}>
                      {pathways[1].icon}
                    </div>
                  </Link>
                </div>

                {/* Bottom-Left: Education & Capacity Building */}
                <div className="domains-quadrant-piece domains-quadrant-piece--bl">
                  <Link to={pathways[2].to} aria-label={pathways[2].title}>
                    <img src={educationImg} alt="Education & Capacity Building - Hands-on learning workshop" />
                    <div className="domains-quadrant-badge domains-quadrant-badge--bl" title={pathways[2].title}>
                      {pathways[2].icon}
                    </div>
                  </Link>
                </div>

                {/* Bottom-Right: Entrepreneurship Development */}
                <div className="domains-quadrant-piece domains-quadrant-piece--br">
                  <Link to={pathways[3].to} aria-label={pathways[3].title}>
                    <img src={processingImg} alt="Entrepreneurship Development - Modern agri-processing enterprise" />
                    <div className="domains-quadrant-badge domains-quadrant-badge--br" title={pathways[3].title}>
                      {pathways[3].icon}
                    </div>
                  </Link>
                </div>
              </div>

              {/* Central Floating Hub Card */}
              <div className="domains-center-hub-card">
                <span className="domains-hub-eyebrow">CONNECTING</span>
                <span className="domains-hub-sub-eyebrow">PEOPLE, IDEAS AND ACTION</span>
                <h4 className="domains-hub-title">
                  Resilient Agri-Food Systems for a Better Tomorrow.
                </h4>
                <div className="domains-hub-divider" aria-hidden="true" />
              </div>
            </div>

            {/* Right Column (02 & 04) */}
            <div className="domains-orbit-col domains-orbit-col--right">
              {/* Quadrant 02 Card: Development Projects */}
              <div className="domains-pathway-card">
                <div className="domains-pathway-num">{pathways[1].num}</div>
                <h3 className="domains-pathway-heading">{pathways[1].title}</h3>
                <p className="domains-pathway-desc">{pathways[1].desc}</p>
                <Link to={pathways[1].to} className="domains-pathway-link">
                  <span>Explore This Area</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Quadrant 04 Card: Entrepreneurship Development */}
              <div className="domains-pathway-card">
                <div className="domains-pathway-num">{pathways[3].num}</div>
                <h3 className="domains-pathway-heading">{pathways[3].title}</h3>
                <p className="domains-pathway-desc">{pathways[3].desc}</p>
                <Link to={pathways[3].to} className="domains-pathway-link">
                  <span>Explore This Area</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* TABLET & MOBILE FALLBACK (< 1024px) */}
          <div className="domains-orbit-mobile-view">
            <div className="domains-mobile-hub-badge">
              <span className="domains-hub-eyebrow">CONNECTING</span>
              <span className="domains-hub-sub-eyebrow">PEOPLE, IDEAS AND ACTION</span>
              <h4 className="domains-hub-title" style={{ fontSize: '20px', margin: '4px 0 8px' }}>
                Resilient Agri-Food Systems for a Better Tomorrow.
              </h4>
              <div className="domains-hub-divider" style={{ margin: '0 auto' }} aria-hidden="true" />
            </div>

            <div className="domains-mobile-cards-grid">
              {pathways.map((pathway) => (
                <div key={pathway.id} className="domains-mobile-card">
                  <div className="domains-mobile-card-img-wrap">
                    <img src={pathway.image} alt={pathway.title} />
                    <div className="domains-mobile-card-badge" aria-hidden="true">
                      {pathway.icon}
                    </div>
                  </div>
                  <div className="domains-mobile-card-body">
                    <div className="domains-pathway-num">{pathway.num}</div>
                    <h3 className="domains-pathway-heading" style={{ fontSize: '20px' }}>{pathway.title}</h3>
                    <p className="domains-pathway-desc">{pathway.desc}</p>
                    <Link to={pathway.to} className="domains-pathway-link" style={{ marginTop: 'auto' }}>
                      <span>Explore This Area</span>
                      <span className="link-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          3. SECTION: FROM RESEARCH TO REAL-WORLD CHANGE (Exact Reference 3rd Image)
          ───────────────────────────────────────────────────────────────── */}
      <section className="domains-realworld-banner-section" aria-label="From Research to Real-World Change">
        <div className="domains-realworld-banner-shell">
          <div
            className="domains-realworld-banner"
            style={{ backgroundImage: `url(${rockyHillsBanner})` }}
          >
            <div className="domains-realworld-curve-overlay">
              <div className="domains-realworld-content">
                <div className="domains-realworld-eyebrow">
                  <span>FROM RESEARCH TO REAL-WORLD CHANGE</span>
                  <span className="domains-realworld-eyebrow-line" aria-hidden="true" />
                </div>
                <h3 className="domains-realworld-title">
                  Solving today’s challenges<br />
                  for tomorrow’s opportunities.
                </h3>
                <p className="domains-realworld-desc">
                  Our domains and thrust areas come together to create knowledge, build capacity, enable innovation and drive on-ground impact across Karnataka and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
