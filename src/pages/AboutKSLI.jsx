import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/AboutKSLI.css';

const thrustAreas = [
  ['01', 'Development Projects', 'Place-based initiatives that translate institutional intent into sustained community work.', 'Sustainability'],
  ['02', 'Research & Field Innovation', 'Applied inquiry and field innovation that inform practical, scalable solutions.', 'Research'],
  ['03', 'Entrepreneurship Development', 'Entrepreneurship-focused pathways that create value across sustainability and livelihood ecosystems.', 'Livelihood'],
  ['04', 'Education & Capacity Building', 'Practice-oriented education and capacity building connected to real environmental and livelihood challenges.', 'Education'],
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

function ThrustPlaceholder({ number, title }) {
  return (
    <div className="aboutksli-thrust-visual" role="img" aria-label={`${title} graphic placeholder`}>
      <span className="aboutksli-thrust-visual-number">{number}</span>
      <svg viewBox="0 0 320 320" aria-hidden="true" focusable="false">
        <circle cx="160" cy="160" r="94" />
        <circle cx="160" cy="160" r="61" />
        <path d="M74 221C122 173 166 142 250 100" />
        <path d="M105 93C138 143 174 185 223 239" />
      </svg>
      <span className="aboutksli-thrust-visual-label">KSLI</span>
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
  const [thrustIndex, setThrustIndex] = useState(0);
  const [thrustVisible, setThrustVisible] = useState(false);
  const [thrustPaused, setThrustPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const carouselViewport = useRef(null);
  const thrustSection = useRef(null);
  const thrustResumeTimer = useRef(null);

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

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => {
      setReducedMotion(media.matches);
      if (media.matches) setThrustIndex(0);
    };
    syncMotionPreference();
    media.addEventListener('change', syncMotionPreference);
    return () => media.removeEventListener('change', syncMotionPreference);
  }, []);

  useEffect(() => {
    const node = thrustSection.current;
    if (!node || reducedMotion) {
      if (reducedMotion) setThrustVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setThrustVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!thrustVisible || thrustPaused || reducedMotion) return undefined;
    const interval = window.setInterval(() => {
      setThrustIndex((current) => (current + 1) % thrustAreas.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [thrustVisible, thrustPaused, reducedMotion]);

  useEffect(() => () => window.clearTimeout(thrustResumeTimer.current), []);

  const pauseThrustCarousel = () => {
    window.clearTimeout(thrustResumeTimer.current);
    setThrustPaused(true);
  };

  const selectThrust = (index) => {
    setThrustIndex(index);
    pauseThrustCarousel();
    thrustResumeTimer.current = window.setTimeout(() => setThrustPaused(false), 5000);
  };

  // The counter represents the leading card in the track. Allow it to advance
  // through the final member, even when the final viewport has fewer cards.
  // This keeps navigation and its disabled state tied to the active dataset.
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

      <section ref={thrustSection} className={`aboutksli-thrust ${thrustVisible ? 'is-visible' : ''}`} aria-labelledby="thrust-title">
        <div className="aboutksli-thrust-shell">
          <p className="eyebrow teal">Thrust Areas</p>
          <div
            className="aboutksli-thrust-viewport"
            onMouseEnter={pauseThrustCarousel}
            onMouseLeave={() => {
              thrustResumeTimer.current = window.setTimeout(() => setThrustPaused(false), 3000);
            }}
          >
            <div className="aboutksli-thrust-track" style={{ transform: `translateX(-${thrustIndex * 100}%)` }}>
              {thrustAreas.map(([number, title, description, tag]) => (
                <article className="aboutksli-thrust-card" key={title} aria-hidden={thrustIndex !== Number(number) - 1}>
                  <ThrustPlaceholder number={number} title={title} />
                  <div className="aboutksli-thrust-card-copy">
                    <div className="aboutksli-thrust-card-meta">
                      <span>Thrust Areas · KSLI</span>
                      <strong>{tag}</strong>
                    </div>
                    <span className="aboutksli-thrust-counter">{number} / 04</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link to="/sustainability" className="aboutksli-thrust-link" tabIndex={thrustIndex === Number(number) - 1 ? 0 : -1}>Learn more <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="aboutksli-thrust-dots" role="group" aria-label="Thrust area slides">
            {thrustAreas.map(([, title], index) => (
              <button
                key={title}
                type="button"
                className={index === thrustIndex ? 'is-active' : ''}
                aria-label={`Show ${title}`}
                aria-current={index === thrustIndex ? 'true' : undefined}
                onClick={() => selectThrust(index)}
              />
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
