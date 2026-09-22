import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Stories() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'people', label: 'People' },
    { id: 'places', label: 'Places' },
    { id: 'journeys', label: 'Project Journeys' },
    { id: 'field', label: 'Field Experiences' }
  ];

  const stories = [
    {
      type: 'people',
      tag: 'Farmer Champion',
      title: 'Balasubramaniam: From Chemical Dependency to Soil Carbon Regeneration',
      location: 'Appakudal, Erode',
      excerpt: 'How one cane farmer in the Sakthi Sugars cluster cut chemical nitrogen fertilizer by 35% using KSLI’s N-Balancing kit while boosting brix sugar content and net harvest profits.',
      quote: '"We used to pour urea blindly. Once we started measuring leaf chlorophyll, our soil started breathing again."'
    },
    {
      type: 'places',
      tag: 'Place of Impact',
      title: 'Manapparai Watershed: Reviving Drylands with Community Farm Ponds',
      location: 'Manapparai, Tiruchirappalli',
      excerpt: 'In this rain-shadow belt, Uzhavan Foundation and KSLI built a connected network of percolation ponds that raised local borewell water tables by 40 feet in 18 months.',
      quote: '"When the rains came, not a single drop ran off into the gullies. It stayed in our land."'
    },
    {
      type: 'journeys',
      tag: 'Project Journey',
      title: 'The Pariyur Collective: How 400 Smallholders Built Direct Market Autonomy',
      location: 'Gobichettipalayam',
      excerpt: 'The journey of the Pariyur FPO from fragmented individual sales at rural mandis to collective turmeric sorting, cold storage bargaining, and direct institutional supply agreements.',
      quote: '"We went from price-takers to price-negotiators because we stood together as a legal producer collective."'
    },
    {
      type: 'field',
      tag: 'Field Experience',
      title: 'Dairy Yatra: 72 Hours on the Road with Kongu Dairy Innovators',
      location: 'Western Tamil Nadu',
      excerpt: 'Kumaraguru students and young farmers traveled across five districts observing automated milking sheds, silage bale fermenters, and cooperative chilling centers.',
      quote: '"Dairy isn’t just milk; it’s an entire circular biotechnology cycle when combined with bio-slurry and biogas."'
    },
    {
      type: 'people',
      tag: 'Student Innovator',
      title: 'Keerthana & The Microcosm Zero-Waste Mess Protocol',
      location: 'Kumaraguru Campus, Coimbatore',
      excerpt: 'Undergraduate engineering student Keerthana led an audit of 3,500 daily dining meals, introducing segregated food scrap conversion into 150 kg of organic potting compost daily.',
      quote: '"Our campus was our test lab. When you solve waste for thousands of students, you realize you can solve it for towns."'
    },
    {
      type: 'places',
      tag: 'Sanctuary & Community',
      title: 'Singanallur Wetland: Where Citizen Naturalists Saved an Urban Lake',
      location: 'Singanallur, Coimbatore',
      excerpt: 'Documenting the collaboration between local volunteer birdwatchers, BNHS biologists, and KSLI to establish native reed bio-filters and protect migratory spot-billed pelicans.',
      quote: '"Urban wetlands are the lungs and kidneys of modern cities. Saving them requires both science and community pride."'
    }
  ];

  const filtered = activeTab === 'all' ? stories : stories.filter((s) => s.type === activeTab);

  return (
    <div className="stories-page" style={{ paddingTop: '86px' }}>
      {/* HEADER */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A2A5C 0%, #114383 60%, #1856A5 100%)',
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
              Voices & Transformations
            </span>
            <h1
              style={{
                fontSize: 'clamp(34px, 4vw, 48px)',
                color: '#FFFFFF',
                margin: '0 0 14px',
                fontWeight: 800
              }}
            >
              Stories
            </h1>
            <p style={{ fontSize: '17px', color: '#DCE9F8', lineHeight: 1.6, margin: 0 }}>
              Real accounts of people, landscapes, project journeys, and field experiences from the frontlines of sustainability and rural livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & STORIES GRID */}
      <section style={{ padding: '60px 0', background: '#EEF4FC', minHeight: '600px' }}>
        <div className="shell">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '36px'
            }}
          >
            {categories.map((c) => {
              const isActive = activeTab === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '26px'
            }}
          >
            {filtered.map((story) => (
              <article
                key={story.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '30px',
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
                      {story.tag}
                    </span>
                    <span style={{ fontSize: '12.5px', color: '#1A8FBF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {story.location}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      color: '#0A2A5C',
                      margin: '8px 0 12px',
                      fontWeight: 700,
                      lineHeight: 1.35
                    }}
                  >
                    {story.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4F617D',
                      lineHeight: 1.6,
                      margin: '0 0 18px'
                    }}
                  >
                    {story.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    background: '#EEF4FC',
                    padding: '16px',
                    borderRadius: '12px',
                    borderLeft: '3px solid #1856A5',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: '#0A2A5C',
                    lineHeight: 1.5
                  }}
                >
                  {story.quote}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
