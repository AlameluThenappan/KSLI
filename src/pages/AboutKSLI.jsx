import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { advisoryCouncil, teamMembers, teamFilters } from '../data/teamData.js';
import '../styles/AboutKSLI.css';

function ImagePlaceholder({ label, className = '', imageSrc }) {
  if (imageSrc) {
    return (
      <div className={`aboutksli-image-card ${className}`} role="img" aria-label={label} style={{ borderRadius: '16px', overflow: 'hidden', height: '100%', minHeight: '340px' }}>
        <img src={imageSrc} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    );
  }
  return (
    <div className={`aboutksli-image-placeholder ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}

function TeamMemberPhoto({ photo, name }) {
  if (photo) {
    return (
      <div className="aboutksli-person-photo">
        <img src={photo} alt={name} className="aboutksli-person-img" />
      </div>
    );
  }

  return (
    <div className="aboutksli-person-photo" aria-hidden="true">
      <svg
        className="aboutksli-placeholder-svg"
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="54" r="22" stroke="#cbd5e1" strokeWidth="1.5" fill="none" opacity="0.65" />
        <path
          d="M26 136C26 108 42 96 60 96C78 96 94 108 94 136"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
      </svg>
    </div>
  );
}

function RevealSection({ eyebrow, title, children, direction, imageLabel, imageSrc, reverse = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      node.classList.toggle('is-visible', entry.isIntersecting);
    }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`aboutksli-story ${reverse ? 'aboutksli-story--reverse' : ''}`}>
      <div className="shell aboutksli-story-grid">
        <ImagePlaceholder className="aboutksli-story-image aboutksli-reveal-image" label={imageLabel} imageSrc={imageSrc} />
        <div className={`aboutksli-story-copy aboutksli-reveal-text aboutksli-reveal-text--${direction}`}>
          <p className="eyebrow teal">{eyebrow}</p>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function AboutKSLI() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState(null); // 'left' | 'right' | null
  const [cardStep, setCardStep] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(5);
  const [isFilterSwitching, setIsFilterSwitching] = useState(false);

  const carouselViewport = useRef(null);

  const visibleMembers = activeFilter === 'All'
    ? teamMembers
    : teamMembers.filter((member) => member.category === activeFilter);

  // Calculate visible cards count and dynamic card step (card width + 18px gap)
  const updateCardMetrics = useCallback(() => {
    const width = window.innerWidth;
    let count = 5;
    if (width <= 520) {
      count = 1;
    } else if (width <= 800) {
      count = 2;
    } else if (width <= 1100) {
      count = 3;
    } else {
      count = 5;
    }
    setVisibleCardsCount(count);

    if (carouselViewport.current) {
      const firstCard = carouselViewport.current.querySelector('.aboutksli-person-link');
      if (firstCard) {
        const rect = firstCard.getBoundingClientRect();
        setCardStep(rect.width + 18);
      }
    }
  }, []);

  useEffect(() => {
    updateCardMetrics();
    window.addEventListener('resize', updateCardMetrics);
    return () => window.removeEventListener('resize', updateCardMetrics);
  }, [updateCardMetrics, activeFilter]);

  // The counter represents the leading card in the track.
  const maxIndex = Math.max(0, visibleMembers.length - 1);
  const isPaginationNeeded = visibleMembers.length > visibleCardsCount;

  // Keep the index valid if the viewport size or active dataset changes.
  useEffect(() => {
    setCarouselIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  // Filter change handler
  const chooseFilter = (filter) => {
    if (filter === activeFilter) return;
    setIsFilterSwitching(true);
    setActiveFilter(filter);
    setCarouselIndex(0);
    setActiveArrow(null);
    setTimeout(() => {
      setIsFilterSwitching(false);
      updateCardMetrics();
    }, 250);
  };

  // Carousel navigation handler - continuous horizontal slide
  const moveCarousel = (directionDelta) => {
    if (directionDelta > 0) {
      setActiveArrow('right');
      setCarouselIndex((current) => Math.min(current + 1, maxIndex));
    } else {
      setActiveArrow('left');
      setCarouselIndex((current) => Math.max(current - 1, 0));
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && carouselIndex < maxIndex) {
      moveCarousel(1);
    } else if (e.key === 'ArrowLeft' && carouselIndex > 0) {
      moveCarousel(-1);
    }
  };

  const isLeftDisabled = carouselIndex === 0;
  const isRightDisabled = carouselIndex >= maxIndex;

  return (
    <article className="aboutksli-page">
      {/* ── HERO SECTION ── */}
      <section className="aboutksli-hero">
        <div className="aboutksli-hero-bg-img" />
        <div className="aboutksli-hero-overlay" />
        <div className="shell">
          <div className="aboutksli-hero-content">
            <p className="eyebrow">About KSLI</p>
            <h1>Kumaraguru Sustainability and <span>Livelihood Institute</span></h1>
            <p>KSLI is a strategic institutional platform advancing sustainability and rural livelihoods through integrated research, practice-oriented education, projects, and long-term partnerships.</p>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <RevealSection
        eyebrow="Vision"
        title="Advancing sustainability and livelihoods."
        direction="right"
        imageLabel="KSLI Vision: Living Landscapes"
        imageSrc="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80"
      >
        <p>Through research, education, entrepreneurship, and community transformation.</p>
      </RevealSection>

      {/* ── MISSION ── */}
      <RevealSection
        eyebrow="Mission"
        title="Integrated solutions for lasting change."
        direction="left"
        reverse
        imageLabel="KSLI Mission: Agrarian Resilience"
        imageSrc="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80"
      >
        <p>To design and deliver integrated solutions that advance sustainability and strengthen rural livelihoods by combining applied research, practice-oriented education, entrepreneurship incubation, and long-term partnerships with farmers, industry, and institutions.</p>
      </RevealSection>

      {/* ── PURPOSE ── */}
      <RevealSection
        eyebrow="Purpose"
        title="One platform. Shared direction."
        direction="right"
        imageLabel="KSLI Purpose: Research & Action"
        imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80"
      >
        <p>KSLI is proposed to consolidate, lead, and scale sustainability- and livelihood-focused initiatives, aligning academic programs, research, partnerships, flagship events, and community engagement under a single governance and identity.</p>
      </RevealSection>

      {/* ── ADVISORY COUNCIL SECTION (Immediately before Team Members) ── */}
      <section className="aboutksli-advisory" aria-label="Advisory Council Section">
        <div className="shell">
          <div className="aboutksli-section-head">
            <span className="eyebrow" style={{ color: '#1856A5' }}>Governance & Strategic Guidance</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', color: '#0A2A5C', margin: '8px 0 14px', fontWeight: 700 }}>
              Advisory Council
            </h2>
            <p style={{ color: '#4F617D', fontSize: '16px', lineHeight: 1.6, maxWidth: '720px', margin: '0 0 36px' }}>
              Distinguished advisors offering strategic guidance across ecological stewardship, rural livelihoods, scientific research, and community partnerships.
            </p>
          </div>

          <div className="aboutksli-advisory-grid">
            {advisoryCouncil.map((advisor) => (
              <article key={advisor.id} className="aboutksli-advisory-card">
                <div className="aboutksli-advisory-avatar">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="aboutksli-advisory-content">
                  <span className="aboutksli-advisory-focus">{advisor.focusArea}</span>
                  <h3 className="aboutksli-advisory-name">{advisor.name}</h3>
                  <p className="aboutksli-advisory-role">{advisor.role}</p>
                  <p className="aboutksli-advisory-desc">{advisor.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION (With Clickable Team Member Cards) ── */}
      <section id="team" className="aboutksli-team" onKeyDown={handleKeyDown} tabIndex="0" aria-label="Our Team Section">
        <div className="aboutksli-team-shell">
          <div className="aboutksli-team-topline">
            <div className="aboutksli-team-heading-group">
              <p className="eyebrow teal">Our Team</p>
              <h2>The People Behind KSLI</h2>
            </div>

            {/* Pagination Controls - only visible if more cards than visible slots */}
            {isPaginationNeeded && (
              <div className="aboutksli-carousel-controls" role="group" aria-label="Team carousel pagination">
                <button
                  type="button"
                  className={`aboutksli-arrow-btn ${activeArrow === 'left' && !isLeftDisabled ? 'is-active' : ''}`}
                  aria-label="Previous team member"
                  onClick={() => moveCarousel(-1)}
                  disabled={isLeftDisabled}
                  aria-disabled={isLeftDisabled}
                >
                  ←
                </button>
                <output className="aboutksli-carousel-counter" aria-live="polite">
                  {carouselIndex + 1}/{visibleMembers.length}
                </output>
                <button
                  type="button"
                  className={`aboutksli-arrow-btn ${activeArrow === 'right' && !isRightDisabled ? 'is-active' : ''}`}
                  aria-label="Next team member"
                  onClick={() => moveCarousel(1)}
                  disabled={isRightDisabled}
                  aria-disabled={isRightDisabled}
                >
                  →
                </button>
              </div>
            )}
          </div>

          <div className="aboutksli-team-directory">
            {/* Sidebar Filter Pills */}
            <nav className="aboutksli-team-filters" aria-label="Filter team members by category">
              {teamFilters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    type="button"
                    key={filter}
                    className={`aboutksli-filter-pill ${isActive ? 'is-active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => chooseFilter(filter)}
                  >
                    {filter}
                  </button>
                );
              })}
            </nav>

            {/* Continuous Horizontal Sliding Viewport & Track */}
            <div className="aboutksli-carousel-viewport" ref={carouselViewport}>
              <div
                className={`aboutksli-carousel-track ${isFilterSwitching ? 'is-filter-switching' : ''}`}
                style={{ transform: `translateX(-${carouselIndex * cardStep}px)` }}
              >
                {visibleMembers.map((member) => (
                  <Link
                    to={`/team/${member.id}`}
                    key={`${member.category}-${member.name}`}
                    className="aboutksli-person-link"
                    aria-label={`View profile of ${member.name}, ${member.role || member.category}`}
                  >
                    <article className="aboutksli-person">
                      <TeamMemberPhoto photo={member.photo} name={member.name} />
                      <div className="aboutksli-person-meta">
                        <span style={{ fontSize: '11px', color: '#1A8FBF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {member.category}
                        </span>
                        <h3 className="aboutksli-person-name">{member.name}</h3>
                        <p className="aboutksli-person-role">
                          {member.role || 'Program Fellow'}
                        </p>
                        <span className="aboutksli-person-cta">
                          View Profile <span>→</span>
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Hiring Callout Link */}
          <div className="aboutksli-team-hiring">
            <p>
              Looking to create meaningful impact in sustainability and rural livelihoods?{' '}
              <Link to="/get-involved" className="aboutksli-hiring-link">
                We're hiring — Explore open opportunities <span>→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTNERS / CTA ── */}
      <section className="aboutksli-cta">
        <div className="shell">
          <p className="eyebrow teal">KSLI</p>
          <h2>Research. Learning. Partnership. Action.</h2>
          <p>Explore how KSLI connects academic inquiry, field practice, and long-term collaboration.</p>
          <Link className="primary" to="/domains">Explore Our Work <span>→</span></Link>
        </div>
      </section>
    </article>
  );
}
