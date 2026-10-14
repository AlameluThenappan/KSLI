import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ksliOverallVid from '../assets/hero/ksli_overall.mp4';
import ksliSustainabilityVid from '../assets/hero/ksli_sustainability.mp4';
import ksliLivelihoodVid from '../assets/hero/ksli_livelihood.mp4';
import '../styles/HomeHeroSlider.css';

const SLIDES = [
  {
    id: 'ksli-overall',
    kicker: 'Kumaraguru Sustainability and Livelihood Institute',
    title: 'Fostering a Sustainable Future through Knowledge and Action',
    desc: 'Consolidating, leading, and scaling sustainability and livelihood initiatives across research, education, entrepreneurship, and community transformation.',
    primaryTo: '/our-work/research',
    primaryLabel: 'Explore Our Work',
    secondaryTo: '/domains',
    secondaryLabel: 'Explore Domains',
    videoSrc: ksliOverallVid,
    dotLabel: '01 · KSLI Overall'
  },
  {
    id: 'sustainability',
    kicker: 'Sustainability Domain',
    title: 'Living Landscapes & Ecological Stewardship',
    desc: 'Advancing resource efficiency, sustainable agriculture, biodiversity conservation, and green infrastructure through applied research and campus living labs.',
    primaryTo: '/domains/sustainability',
    primaryLabel: 'Sustainability Domain',
    secondaryTo: '/our-work/projects',
    secondaryLabel: 'View Projects',
    videoSrc: ksliSustainabilityVid,
    dotLabel: '02 · Sustainability'
  },
  {
    id: 'livelihood',
    kicker: 'Livelihood Domain',
    title: 'Strengthening Rural Livelihoods & Enterprise',
    desc: 'Equipping smallholder farmers, dairy collectives, and rural entrepreneurs through scientific extension, capacity building, and direct market linkages.',
    primaryTo: '/domains/livelihood',
    primaryLabel: 'Livelihood Domain',
    secondaryTo: '/our-work/initiatives',
    secondaryLabel: 'Centres of Excellence',
    videoSrc: ksliLivelihoodVid,
    dotLabel: '03 · Livelihood'
  }
];

const STATS_ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 20h10" />
        <path d="M10 20c0-5 2-8 2-14" />
        <path d="M12 6c1.5 1 3 1.5 5 1-1 2-1.5 3.5-1 5" />
        <path d="M12 10c1.5 1 3 1.5 5 1-1 2-1.5 3.5-1 5" />
        <path d="M12 8c-1.5 1-3 1.5-5 1 1 2 1.5 3.5 1 5" />
      </svg>
    ),
    number: '5,000+',
    label: 'Farmers Engaged'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a9 9 0 0 0-9 9c0 4.5 3.5 8.2 8 8.9V22h2v-2.1c4.5-.7 8-4.4 8-8.9a9 9 0 0 0-9-9Z" />
        <path d="M12 7v7" />
        <path d="M9 11l3-3 3 3" />
      </svg>
    ),
    number: '₹5Cr+',
    label: 'Climate Adaptation Grant'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h1" />
        <path d="M14 10h1" />
        <path d="M9 14h1" />
        <path d="M14 14h1" />
      </svg>
    ),
    number: '3',
    label: 'Centres of Excellence'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="7" r="4" />
        <path d="M17 11a3 3 0 1 0-2.8-4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 19a4 4 0 0 0 5-3.5v-.5" />
      </svg>
    ),
    number: '20+',
    label: 'Partner Organizations'
  }
];

function CountUpItem({ icon, number, label }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  const match = number.match(/^([^0-9]*)([\d,]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const hasComma = match ? match[2].includes(',') : false;
  const target = match ? parseInt(match[2].replace(/,/g, ''), 10) : 0;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    if (!inView || !target) return;
    let startTimestamp = null;
    const duration = 1400;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, target]);

  const formattedCount = hasComma ? count.toLocaleString('en-IN') : count;
  const displayValue = target ? `${prefix}${formattedCount}${suffix}` : number;

  return (
    <div ref={itemRef} className={`hero-stat-card ${inView ? 'animate' : ''}`}>
      <span className="hero-stat-icon">{icon}</span>
      <strong className="hero-stat-number">{displayValue}</strong>
      <small className="hero-stat-label">{label}</small>
    </div>
  );
}

export default function HomeHeroSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRefs = useRef([]);
  const timerRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goToSlide = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlideIndex(idx);
  };

  const advanceSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  // Play active video when slide changes
  useEffect(() => {
    if (prefersReducedMotion) return;

    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === currentSlideIndex) {
        vid.currentTime = 0;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay prevented, fallback gracefully
          });
        }
      } else {
        vid.pause();
      }
    });

    // Fallback auto-advance timer in case video end event is missed or delayed
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      advanceSlide();
    }, 12000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlideIndex, prefersReducedMotion]);

  const activeSlide = SLIDES[currentSlideIndex];

  return (
    <section className="hero-slider-section" aria-label="KSLI Institutional Showcase">
      {/* ── Background Video Layers ── */}
      <div className="hero-video-viewport" aria-hidden="true">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`hero-video-slide ${isActive ? 'is-active' : ''}`}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={slide.videoSrc}
                muted
                playsInline
                preload={idx === 0 ? 'auto' : 'metadata'}
                onEnded={advanceSlide}
                className="hero-slide-video"
              />
            </div>
          );
        })}
        {/* Contrast overlay */}
        <div className="hero-video-scrim" />
      </div>

      {/* ── Foreground Hero Copy & Actions ── */}
      <div className="shell hero-slider-shell">
        <div className="hero-slider-content">
          <p className="intro-label">{activeSlide.kicker}</p>
          <h1 key={`title-${currentSlideIndex}`} className="hero-slider-title">
            {activeSlide.title}
          </h1>
          <p key={`desc-${currentSlideIndex}`} className="hero-slider-desc">
            {activeSlide.desc}
          </p>

          <div className="actions hero-slider-actions">
            <Link className="primary" to={activeSlide.primaryTo}>
              {activeSlide.primaryLabel} →
            </Link>
            <Link className="btn-navy" to={activeSlide.secondaryTo}>
              {activeSlide.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Section 2: KSLI Impact Statistics Floating Directly On The Hero Section ── */}
      <div className="hero-stats-deck">
        <div className="shell">
          <div className="hero-stats-grid" role="region" aria-label="KSLI Impact Key Statistics">
            {STATS_ITEMS.map((item) => (
              <CountUpItem
                key={item.label}
                icon={item.icon}
                number={item.number}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Three Understated Navigation Dots Below Hero Stats ── */}
      <div className="hero-dots-container" role="tablist" aria-label="Hero video slides">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Select slide ${idx + 1}: ${slide.dotLabel}`}
              className={`hero-dot-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => goToSlide(idx)}
            >
              <span className="hero-dot-indicator" />
              <span className="hero-dot-text">{slide.dotLabel}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
