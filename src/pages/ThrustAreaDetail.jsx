import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { thrustAreasData } from '../data/thrustAreasData.js';
import TallImageCard from '../components/TallImageCard.jsx';

export default function ThrustAreaDetail() {
  const { slug } = useParams();
  const data = thrustAreasData[slug];

  if (!data) {
    return <Navigate to="/thrust-areas/research-field-innovation" replace />;
  }

  const hasResearch = data.research && data.research.length > 0;
  const hasProjects = data.projects && data.projects.length > 0;
  const hasEvents = data.events && data.events.length > 0;

  return (
    <div className="thrust-detail-page" style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: '76px' }}>
      {/* ─── CLEAN HEADER (NO HERO IMAGE) ─── */}
      <section
        style={{
          background: '#F8FAFD',
          borderBottom: '1px solid #DCE9F8',
          padding: '40px 0 32px'
        }}
      >
        <div className="shell">
          <nav aria-label="Breadcrumbs" style={{ marginBottom: '14px' }}>
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                color: '#556885'
              }}
            >
              <li>
                <Link to="/" style={{ color: '#1856A5', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
              </li>
              <li aria-hidden="true" style={{ color: '#A0B2C6' }}>/</li>
              <li style={{ color: '#556885' }}>Thrust Areas</li>
              <li aria-hidden="true" style={{ color: '#A0B2C6' }}>/</li>
              <li style={{ color: '#0A2A5C', fontWeight: 700 }} aria-current="page">{data.title}</li>
            </ol>
          </nav>

          <div style={{ maxWidth: '820px' }}>
            <span
              style={{
                display: 'inline-block',
                background: '#EEF4FC',
                color: '#1856A5',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                border: '1px solid #DCE9F8'
              }}
            >
              Thrust Area
            </span>

            <h1
              style={{
                fontSize: 'clamp(26px, 3.4vw, 38px)',
                color: '#0A2A5C',
                margin: '0 0 10px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}
            >
              {data.title}
            </h1>

            <p style={{ color: '#4F617D', fontSize: '15px', lineHeight: 1.6, margin: 0, maxWidth: '780px' }}>
              {data.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT SECTIONS ─── */}
      <main className="shell" style={{ padding: '44px 0 70px' }}>
        {/* RESEARCH SECTION */}
        {hasResearch && (
          <section style={{ marginBottom: '56px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: '#1856A5', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Applied Studies
              </span>
              <h2 style={{ fontSize: '26px', color: '#0A2A5C', margin: '4px 0 0', fontWeight: 800 }}>
                Research &amp; Field Studies
              </h2>
            </div>

            <div className="tall-image-grid tall-image-grid-3">
              {data.research.map((item) => (
                <TallImageCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  to={item.to || '/domains'}
                  tag={item.domain}
                  location={item.location}
                />
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS SECTION */}
        {hasProjects && (
          <section style={{ marginBottom: '56px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: '#1856A5', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Field Implementations
              </span>
              <h2 style={{ fontSize: '26px', color: '#0A2A5C', margin: '4px 0 0', fontWeight: 800 }}>
                Projects
              </h2>
            </div>

            <div className="tall-image-grid tall-image-grid-3">
              {data.projects.map((item) => (
                <TallImageCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  to={item.to || '/domains'}
                  tag={item.domain}
                  location={item.location}
                />
              ))}
            </div>
          </section>
        )}

        {/* EVENTS SECTION */}
        {hasEvents && (
          <section style={{ marginBottom: '56px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: '#1856A5', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Flagship Gatherings
              </span>
              <h2 style={{ fontSize: '26px', color: '#0A2A5C', margin: '4px 0 0', fontWeight: 800 }}>
                Events &amp; Conclaves
              </h2>
            </div>

            <div className="tall-image-grid tall-image-grid-3">
              {data.events.map((item) => (
                <TallImageCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  to={item.to || '/get-involved'}
                  tag={item.domain}
                  location={item.location}
                />
              ))}
            </div>
          </section>
        )}

        {/* ─── BOTTOM NAVIGATION / GET INVOLVED ─── */}
        <section
          style={{
            background: '#F8FAFD',
            borderRadius: '16px',
            border: '1px solid #DCE9F8',
            padding: '28px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '18px', color: '#0A2A5C', margin: '0 0 4px', fontWeight: 800 }}>
              Connect with KSLI
            </h3>
            <p style={{ color: '#4F617D', fontSize: '13.5px', margin: 0 }}>
              Partner with us on research, field projects, and institutional programs.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              to="/get-involved"
              style={{
                background: '#1856A5',
                color: '#FFFFFF',
                padding: '10px 22px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '13.5px'
              }}
            >
              Get Involved →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
