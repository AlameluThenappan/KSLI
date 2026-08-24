import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/AboutKSLI.css';

const thrustAreas = [
  ['01', 'Development Projects', 'Place-based initiatives that translate institutional intent into sustained community work.'],
  ['02', 'Research & Field Innovation', 'Applied inquiry and field innovation that inform practical, scalable solutions.'],
  ['03', 'Entrepreneurship Development', 'Entrepreneurship-focused pathways that create value across sustainability and livelihood ecosystems.'],
  ['04', 'Education & Capacity Building', 'Practice-oriented education and capacity building connected to real environmental and livelihood challenges.'],
];

const teamMembers = [
  // Dairy
  { name: 'Dr. Thanammal', role: '', category: 'Dairy' },
  { name: 'Nethaji Subash', role: 'Program Management', category: 'Dairy' },
  { name: 'Kavin', role: 'Program Associate', category: 'Dairy' },
  { name: 'Arun Kumar', role: 'Field', category: 'Dairy' },
  { name: 'Bharani', role: 'Admin Support', category: 'Dairy' },

  // Sugarcane
  { name: 'Dr. Hemalatha', role: '', category: 'Sugarcane' },
  { name: 'Boopathy', role: 'JRF', category: 'Sugarcane' },
  { name: 'Bhuvaneshwari', role: 'JRF', category: 'Sugarcane' },
  { name: 'Sujeeth', role: 'Field Coordinator', category: 'Sugarcane' },
  { name: 'Gokulraj', role: 'Field Coordinator', category: 'Sugarcane' },

  // Farmer 360
  { name: 'Mr. Sezhian', role: '', category: 'Farmer 360' },
  { name: 'Dr. Gopi', role: '', category: 'Farmer 360' },
  { name: 'Dr. Sudhakar', role: '', category: 'Farmer 360' },
  { name: 'Mr. Amarendran', role: '', category: 'Farmer 360' },
  { name: 'Ms. Sangeetha', role: '', category: 'Farmer 360' },

  // Campus Sustainability
  { name: 'Keerthana', role: '', category: 'Campus Sustainability' },
  { name: 'Jeevesh', role: '', category: 'Campus Sustainability' },
  { name: 'Paramaguru', role: '', category: 'Campus Sustainability' },

  // Farmer Producer Organization
  { name: 'Shanthra', role: 'CEO', category: 'Farmer Producer Organization' },
  { name: 'Gowsika', role: 'Accountant', category: 'Farmer Producer Organization' },
  { name: 'Karthika', role: 'Extension Officer', category: 'Farmer Producer Organization' },
  { name: 'Nithya', role: 'Business Executive', category: 'Farmer Producer Organization' },
];

const teamFilters = [
  'All',
  'Dairy',
  'Sugarcane',
  'Farmer 360',
  'Campus Sustainability',
  'Farmer Producer Organization',
];

function ImagePlaceholder({ label, className = '' }) {
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

function RevealSection({ eyebrow, title, children, direction, imageLabel, reverse = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      node.classList.toggle('is-visible', entry.isIntersecting);
    }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} className={`aboutksli-story ${reverse ? 'aboutksli-story--reverse' : ''}`}>
      <div className="shell aboutksli-story-grid">
        <ImagePlaceholder className="aboutksli-story-image aboutksli-reveal-image" label={imageLabel} />
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
      const firstCard = carouselViewport.current.querySelector('.aboutksli-person');
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

  const maxIndex = Math.max(0, visibleMembers.length - visibleCardsCount);
  const isPaginationNeeded = visibleMembers.length > visibleCardsCount;

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
      <section className="aboutksli-hero">
        <ImagePlaceholder className="aboutksli-hero-image" label="HERO IMAGE PLACEHOLDER" />
        <div className="aboutksli-hero-overlay" />
        <div className="shell">
          <div className="aboutksli-hero-content">
            <p className="eyebrow">About KSLI</p>
            <h1>Kumaraguru Sustainability and <span>Livelihood Institute</span></h1>
            <p>KSLI is a strategic institutional platform advancing sustainability and rural livelihoods through integrated research, practice-oriented education, projects, and long-term partnerships.</p>
          </div>
        </div>
      </section>

      <RevealSection eyebrow="Vision" title="Advancing sustainability and livelihoods." direction="right" imageLabel="VISION IMAGE PLACEHOLDER">
        <p>Through research, education, entrepreneurship, and community transformation.</p>
      </RevealSection>

      <RevealSection eyebrow="Mission" title="Integrated solutions for lasting change." direction="left" reverse imageLabel="MISSION IMAGE PLACEHOLDER">
        <p>To design and deliver integrated solutions that advance sustainability and strengthen rural livelihoods by combining applied research, practice-oriented education, entrepreneurship incubation, and long-term partnerships with farmers, industry, and institutions.</p>
      </RevealSection>

      <RevealSection eyebrow="Purpose" title="One platform. Shared direction." direction="right" imageLabel="PURPOSE IMAGE PLACEHOLDER">
        <p>KSLI is proposed to consolidate, lead, and scale sustainability- and livelihood-focused initiatives, aligning academic programs, research, partnerships, flagship events, and community engagement under a single governance and identity.</p>
      </RevealSection>

      <section className="aboutksli-thrust">
        <div className="shell">
          <p className="eyebrow teal">Thrust Areas</p>
          <div className="aboutksli-thrust-heading">
            <h2>From knowledge to meaningful action.</h2>
            <p>KSLI brings its work together through four connected areas of institutional focus.</p>
          </div>
          <div className="aboutksli-thrust-grid">
            {thrustAreas.map(([number, title, description]) => (
              <article className="aboutksli-thrust-card" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="aboutksli-team" onKeyDown={handleKeyDown} tabIndex="0" aria-label="Our Team Section">
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
                  <article
                    className="aboutksli-person"
                    key={`${member.category}-${member.name}`}
                  >
                    <TeamMemberPhoto photo={member.photo} name={member.name} />
                    <div className="aboutksli-person-meta">
                      <h3 className="aboutksli-person-name">{member.name}</h3>
                      <p className="aboutksli-person-role">
                        {member.role || ''}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Hiring Callout Link */}
          <div className="aboutksli-team-hiring">
            <p>
              Looking to create meaningful impact in sustainability and rural livelihoods?{' '}
              <Link to="/contact" className="aboutksli-hiring-link">
                We're hiring — Explore open opportunities <span>→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="aboutksli-cta">
        <div className="shell">
          <p className="eyebrow teal">KSLI</p>
          <h2>Research. Learning. Partnership. Action.</h2>
          <p>Explore how KSLI connects academic inquiry, field practice, and long-term collaboration.</p>
          <Link className="primary" to="/sustainability">Explore Our Work <span>→</span></Link>
        </div>
      </section>
    </article>
  );
}
