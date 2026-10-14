import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { advisoryCouncil, teamMembers, teamFilters } from '../data/teamData.js';
import '../styles/AboutKSLI.css';

function TeamMemberPhoto({ photo, name }) {
  if (photo) {
    return (
      <div className="aboutksli-person-photo">
        <img src={photo} alt={name} className="aboutksli-person-img" loading="lazy" />
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

export default function HomeTeamSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState(null);
  const [cardStep, setCardStep] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(5);
  const [isFilterSwitching, setIsFilterSwitching] = useState(false);
  const carouselViewport = useRef(null);

  const visibleMembers = activeFilter === 'All'
    ? teamMembers
    : teamMembers.filter((member) => member.category === activeFilter);

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

  const maxIndex = Math.max(0, visibleMembers.length - 1);
  const isPaginationNeeded = visibleMembers.length > visibleCardsCount;

  useEffect(() => {
    setCarouselIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

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

  const moveCarousel = (directionDelta) => {
    if (directionDelta > 0) {
      setActiveArrow('right');
      setCarouselIndex((current) => Math.min(current + 1, maxIndex));
    } else {
      setActiveArrow('left');
      setCarouselIndex((current) => Math.max(current - 1, 0));
    }
  };

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
    <div id="team" style={{ scrollMarginTop: '100px' }}>
      {/* ── ADVISORY COUNCIL SECTION ── */}
      <section className="aboutksli-advisory" aria-label="Advisory Council Section">
        <div className="shell">
          <div className="aboutksli-section-head">
            <span className="eyebrow" style={{ color: '#1856A5' }}>Governance &amp; Strategic Guidance</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', color: '#0A2A5C', margin: '8px 0 14px', fontWeight: 700 }}>
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
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <section className="aboutksli-team" onKeyDown={handleKeyDown} tabIndex="0" aria-label="Our Team Section">
        <div className="aboutksli-team-shell">
          <div className="aboutksli-team-topline">
            <div className="aboutksli-team-heading-group">
              <p className="eyebrow" style={{ color: '#1856A5' }}>Our Team</p>
              <h2>The People Behind KSLI</h2>
            </div>

            {/* Pagination Controls */}
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
            {/* Filter Pills */}
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

            {/* Continuous Horizontal Sliding Track */}
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
                        <span style={{ fontSize: '11px', color: '#1856A5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
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
    </div>
  );
}
