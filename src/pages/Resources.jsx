import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'papers', label: 'Research Papers' },
    { id: 'publications', label: 'Publications' },
    { id: 'reports', label: 'Reports & Policy Briefs' }
  ];

  const items = [
    {
      category: 'papers',
      tag: 'Research Paper',
      title: 'Precision Nitrogen Balancing & Soil Organic Carbon in Tropical Sugarcane Agro-Ecosystems',
      author: 'KSLI Sugarcane CoE & University of Hohenheim',
      date: '2025',
      domain: 'Livelihood & Sustainability',
      summary: 'Comprehensive quantitative analysis of 5,000+ farmer plots in Western Tamil Nadu evaluating reduced synthetic fertilizer usage, yield stabilization, and micro-nutrient retention.'
    },
    {
      category: 'reports',
      tag: 'Grant Report',
      title: 'Dutch Fund for Climate Action (DFCD): Catchment Hydrology & Climate Vulnerability Assessment',
      author: 'WWF India & KSLI Field Research Group',
      date: '2024',
      domain: 'Sustainability',
      summary: 'Strategic baseline report surveying riparian buffer degradation, tribal livelihood dependency, and ecological intervention blueprints for the Bhavani River sub-basin.'
    },
    {
      category: 'publications',
      tag: 'Technical Monograph',
      title: 'Smallholder Dairy Innovation: Digital Extension Protocols & IoT Biomarkers',
      author: 'Centre of Excellence – Dairy & NITARA Research',
      date: '2025',
      domain: 'Livelihood',
      summary: 'Practical field manual detailing automated heat detection, clean milk handling benchmarks, and community chilling optimization across smallholder cooperatives.'
    },
    {
      category: 'reports',
      tag: 'Campus Audit Report',
      title: 'Kumaraguru Microcosm: Annual Decarbonization & Resource Neutrality Audit',
      author: 'KSLI Campus Living Lab & IGBC Working Group',
      date: '2025',
      domain: 'Sustainability',
      summary: 'Institutional empirical review recording 1.2 MLD wastewater recycling efficiency, rooftop PV generation metrics, and endemic biodiversity tree census.'
    },
    {
      category: 'papers',
      tag: 'Research Paper',
      title: 'Farmer Producer Organizations as Catalysts for Climate Adaptation in Rainfed Tracts',
      author: 'KSLI Livelihood Vertical & StartupTN',
      date: '2024',
      domain: 'Livelihood',
      summary: 'Econometric case study of the Pariyur FPO model evaluating aggregation margins, input price resilience, and post-harvest grain storage economics.'
    },
    {
      category: 'publications',
      tag: 'Policy Brief',
      title: 'Decentralized Built Environments: Natural Earth Blocks & Vernacular Building Codes',
      author: 'KSLI Sustainable Human Settlements & Thannal',
      date: '2025',
      domain: 'Sustainability',
      summary: 'Recommended technical guidelines for incorporating compressed stabilized earth blocks (CSEB) and bamboo joinery into rural housing schemes.'
    }
  ];

  const filtered = activeCategory === 'all' ? items : items.filter((i) => i.category === activeCategory);

  return (
    <div className="resources-page" style={{ paddingTop: '86px' }}>
      {/* HEADER */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A2A5C 0%, #1856A5 100%)',
          color: '#FFFFFF',
          padding: '64px 0 54px'
        }}
      >
        <div className="shell">
          <div style={{ maxWidth: '760px' }}>
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
              Knowledge Repository
            </span>
            <h1
              style={{
                fontSize: 'clamp(34px, 4vw, 48px)',
                color: '#FFFFFF',
                margin: '0 0 14px',
                fontWeight: 800
              }}
            >
              Resources
            </h1>
            <p style={{ fontSize: '17px', color: '#DCE9F8', lineHeight: 1.6, margin: 0 }}>
              Access peer-reviewed research papers, technical monographs, policy briefs, and institutional reports published by KSLI and research partners.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS & RESOURCE LIST */}
      <section style={{ padding: '60px 0', background: '#EEF4FC', minHeight: '600px' }}>
        <div className="shell">
          {/* CATEGORY BUTTONS */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '36px'
            }}
          >
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  style={{
                    background: isActive ? '#1856A5' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#0A2A5C',
                    border: isActive ? '1px solid #1856A5' : '1px solid #DCE9F8',
                    padding: '10px 22px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: isActive
                      ? '0 4px 12px rgba(24, 86, 165, 0.25)'
                      : '0 2px 6px rgba(10, 42, 92, 0.04)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* GRID OF RESOURCES */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px'
            }}
          >
            {filtered.map((r) => (
              <div
                key={r.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '28px',
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
                        padding: '4px 12px',
                        borderRadius: '999px',
                        border: '1px solid #DCE9F8'
                      }}
                    >
                      {r.tag}
                    </span>
                    <span style={{ fontSize: '12px', color: '#4F617D', fontWeight: 600 }}>
                      Year {r.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      color: '#0A2A5C',
                      margin: '6px 0 10px',
                      fontWeight: 700,
                      lineHeight: 1.35
                    }}
                  >
                    {r.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '12.5px',
                      color: '#1A8FBF',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}
                  >
                    {r.author}
                  </div>

                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4F617D',
                      lineHeight: 1.55,
                      margin: '0 0 20px'
                    }}
                  >
                    {r.summary}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid #EEF4FC',
                    paddingTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#0A2A5C',
                      fontWeight: 600,
                      background: '#EEF4FC',
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {r.domain}
                  </span>
                  <button
                    onClick={() => alert(`Downloading "${r.title}" (PDF)`)}
                    style={{
                      border: '1.5px solid #1856A5',
                      background: 'transparent',
                      color: '#1856A5',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Download PDF <span>↓</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
