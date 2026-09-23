import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/AcademicPrograms.css';
import academicHero from '../assets/academic programs/academic.webp';
import edfLogo from '../../assets/Environmental Defense Fund.png';
import nddbLogo from '../../assets/NDDB Mrida Limited.png';

/* ─────────────────────────────────────────────────────────────
   DATA  (sourced from KSLI Pitch Deck — do not alter without
   updating the source document)
   ───────────────────────────────────────────────────────────── */

const PROGRAMS = [
  { id: 1, title: 'MBA – Agri Business Management',                      type: 'MBA', dark: true  },
  { id: 2, title: 'MSW – Master of Social Work',                         type: 'MSW', dark: false },
  { id: 3, title: 'M.E – Environmental Engineering',                     type: 'M.E', dark: false },
  { id: 4, title: 'MBA – Sustainability Management',                     type: 'MBA', dark: true  },
  { id: 5, title: 'BSW – Bachelor of Social Work (Sustainability Focus)',type: 'BSW', dark: false },
];

const WORKSHOP_GROUPS = [
  {
    title: 'PG Diploma',
    items: ['Dairy Farm Management', 'Integrated Farm Management', 'Sustainability Management'],
  },
  {
    title: 'Exposure Visit',
    items: ['International Summer School', 'Dairy – Value Addition Trainings & Visits', 'Nature Camps / Walks'],
  },
  {
    title: 'Certificate Programs',
    items: ['Dairy Farm Management', 'Goat / Sheep Farm Management', 'Mushroom Cultivation', 'Equine Management'],
  },
];

/* ─────────────────────────────────────────────────────────────
   SECTION 4 DATA — SUSTAINABILITY PATHWAY
   Sourced strictly from KSLI_Pitch.pdf (Slides 17 & 18).
   Note: Each story is carefully phrased into a 4–5 line natural
   editorial story derived exclusively from the source text.
   Stops 5–6 and 7–8 reflect the two-part paired stages in the deck.
   No outside statistics or unverified claims are added.
   ───────────────────────────────────────────────────────────── */

const PATHWAY_STOPS = [
  {
    id: 1,
    name: 'Sustainability Immersion',
    short: 'Immersion',
    subtitle: 'Curriculum Phase 1',
    narrative:
      'Introduce Sustainability concepts and understand the need for climate resilience.',
    takeForward: 'Sustainability Concepts & Climate Resilience',
    targetX: 640,
    placement: 'above',
  },
  {
    id: 2,
    name: 'Project Based Learning',
    short: 'Project Learning',
    subtitle: 'Curriculum Phase 2',
    narrative:
      'Identifying Climate Challenges and Solving through Project Based Learning module.',
    takeForward: 'Identifying & Solving Climate Challenges',
    targetX: 1260,
    placement: 'below',
  },
  {
    id: 3,
    name: 'Elective Papers',
    short: 'Elective Papers',
    subtitle: 'Curriculum Phase 3',
    narrative:
      'Capacity Building through Elective Papers in collaboration with Clean Tech Industries and Institutions.',
    takeForward: 'Clean Tech Industries & Institutions',
    targetX: 1880,
    placement: 'above',
  },
  {
    id: 4,
    name: 'EDGE / EDGE+',
    short: 'EDGE / EDGE+',
    subtitle: 'Curriculum Phase 4',
    narrative:
      'Certification by Professional Bodies through immersive experiential learning.',
    takeForward: 'Professional Bodies Certification',
    targetX: 2500,
    placement: 'below',
  },
  {
    id: 5,
    name: 'Prototyping Semester',
    short: 'Prototyping I',
    subtitle: 'Curriculum Phase 5',
    narrative:
      'A 20 weeks Graduate Innovation Engineer Certification that will be offered by Forge as a comprehensive skills and competency development program that embeds an innovation-centered approach to engineering education.',
    takeForward: 'Forge Graduate Innovation Engineer',
    targetX: 3120,
    placement: 'above',
  },
  {
    id: 6,
    name: 'Prototyping Semester (cont.)',
    short: 'Prototyping II',
    subtitle: 'Curriculum Phase 6',
    narrative:
      'Continuation of the 20-week Graduate Innovation Engineer Certification offered by Forge, advancing comprehensive skills and technical competency development through an innovation-centered approach to engineering education.',
    takeForward: 'Skills & Competency Development',
    targetX: 3740,
    placement: 'below',
  },
  {
    id: 7,
    name: 'Internships & Capstone Project',
    short: 'Capstone I',
    subtitle: 'Curriculum Phase 7',
    narrative:
      'Apply engineering principles to solve environmental challenges, design sustainable solutions, and promote resource efficiency.',
    takeForward: 'Applied Engineering & Solutions',
    targetX: 4360,
    placement: 'above',
  },
  {
    id: 8,
    name: 'Capstone Project (cont.)',
    short: 'Capstone II',
    subtitle: 'Curriculum Phase 8',
    narrative:
      'Continuation of internships and capstone projects, applying engineering principles to solve environmental challenges, design sustainable solutions, and promote ongoing resource efficiency.',
    takeForward: 'Resource Efficiency & Real-world Impact',
    targetX: 4980,
    placement: 'below',
  },
];

const FINAL_DESTINATION = {
  title: 'IMPACT',
  subtitle: 'FROM LEARNER TO CHANGE-MAKER',
  flow: ['LEARN', 'EXPLORE', 'SPECIALISE', 'INNOVATE', 'APPLY', 'IMPACT'],
  statement: 'ENGINEER FOR A SUSTAINABLE TOMORROW.',
};

/* Expansive horizontal SVG coordinate space (5600 x 540)
   Smooth undulating wave providing ~620px between each milestone */
const DESKTOP_VB_W = 5600;
const DESKTOP_VB_H = 540;
const DESKTOP_CURVE_D =
  'M 140,270 C 300,270 460,330 640,330 C 840,330 1060,190 1260,190 C 1460,190 1680,330 1880,330 C 2080,330 2300,190 2500,190 C 2700,190 2920,330 3120,330 C 3320,330 3540,190 3740,190 C 3940,190 4160,330 4360,330 C 4560,330 4780,190 4980,190 C 5160,190 5360,270 5500,270';

/* Vertical SVG path geometry for Narrow Mobile viewports (380 x 3400) */
const MOBILE_VB_W = 380;
const MOBILE_VB_H = 3400;
const MOBILE_CURVE_D =
  'M 190,80 C 100,240 100,400 190,520 C 280,640 280,800 190,920 C 100,1040 100,1200 190,1320 C 280,1440 280,1600 190,1720 C 100,1840 100,2000 190,2120 C 280,2240 280,2400 190,2520 C 100,2640 100,2800 190,2920 C 280,3040 280,3200 190,3320';

/* ─────────────────────────────────────────────────────────────
   SHARED HOOK
   ───────────────────────────────────────────────────────────── */

function useScrollReveal(threshold = 0.14) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="ap-hero" aria-labelledby="ap-hero-heading">
      <img
        src={academicHero}
        alt=""
        className="ap-hero-bg"
        aria-hidden="true"
      />
      <div className="ap-hero-overlay" aria-hidden="true" />

      <div className="ap-hero-content shell">
        <p className="ap-hero-eyebrow">Learning at KSLI</p>
        <h1 id="ap-hero-heading" className="ap-hero-title">Academic Programs</h1>
        <p className="ap-hero-sub">
          Connecting academic knowledge with responsible practice — from agri-business
          and social work to sustainability engineering.
        </p>
      </div>

      <div className="ap-hero-kpis shell" role="region" aria-label="Program highlights">
        {/* KPI 1 — sourced from deck "Academic Programs" slide (5 listed programs) */}
        <div className="ap-kpi-card">
          <strong className="ap-kpi-number">5</strong>
          <span className="ap-kpi-label">Total Academic Programs</span>
        </div>

        {/* KPI 2 — PG Diploma (3) + Exposure Visit (3) + Certificate Programs (4) = 10 */}
        <div className="ap-kpi-card">
          <strong className="ap-kpi-number">10+</strong>
          <span className="ap-kpi-label">Workshops &amp; Certificate Offerings</span>
        </div>

        {/* KPI 3 — Students Reached: NOT present in source deck.
            TODO: Replace "—" with actual student count when data is available. */}
        <div className="ap-kpi-card" aria-label="Students Reached — data not yet available">
          <strong className="ap-kpi-number ap-kpi-placeholder" aria-label="data not available">—</strong>
          <span className="ap-kpi-label">Students Reached</span>
          <span className="ap-kpi-coming" aria-hidden="true">Coming soon</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — ACADEMIC PROGRAMS GRID
   ───────────────────────────────────────────────────────────── */

function AcademicProgramsSection() {
  const [ref, inView] = useScrollReveal(0.12);

  return (
    <section
      className={`ap-section ap-programs-section${inView ? ' is-visible' : ''}`}
      ref={ref}
    >
      <div className="shell">
        <div className="ap-section-heading">
          <p className="eyebrow teal">Academic Offerings</p>
          <h2>Academic Programs</h2>
          <p className="ap-section-sub">
            Five structured programs bridging sustainability, social development,
            and engineering education.
          </p>
        </div>

        <div className="ap-programs-grid">
          {PROGRAMS.map((prog, i) => (
            <article
              key={prog.id}
              className={`ap-program-card${prog.dark ? ' ap-program-card--dark' : ''}`}
              style={{ transitionDelay: inView ? `${i * 85}ms` : '0ms' }}
            >
              <span className="ap-program-type">{prog.type}</span>
              <h3 className="ap-program-title">{prog.title}</h3>
              <div className="ap-program-divider" aria-hidden="true" />
              <p className="ap-program-desc">
                Programme details and admissions information will be featured here.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — WORKSHOPS & CERTIFICATE PROGRAMS
   ───────────────────────────────────────────────────────────── */

function WorkshopsSection() {
  const [ref, inView] = useScrollReveal(0.10);

  return (
    <section
      className={`ap-section ap-workshops-section${inView ? ' is-visible' : ''}`}
      ref={ref}
    >
      <div className="shell">
        <div className="ap-section-heading">
          <p className="eyebrow teal">Short-term &amp; Continuing Education</p>
          <h2>Workshops &amp; Certificate Programs</h2>
          <p className="ap-section-sub">
            Practical, industry-aligned programs spanning dairy farming, integrated
            agriculture, sustainability management, and natural resource stewardship.
          </p>
        </div>

        <div className="ap-workshops-grid">
          {WORKSHOP_GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className="ap-workshop-group"
              style={{ transitionDelay: inView ? `${gi * 100}ms` : '0ms' }}
            >
              <div className="ap-workshop-group-header">
                <h3 className="ap-workshop-group-title">{group.title}</h3>
              </div>
              <ul
                className="ap-workshop-list"
                aria-label={`${group.title} offerings`}
              >
                {group.items.map(item => (
                  <li key={item} className="ap-workshop-item">
                    <span className="ap-workshop-bullet" aria-hidden="true">↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner logos — PUM, EDF, NDDB, NIANP, TANUVAS */}
        <div
          className="ap-workshop-partners"
          style={{ transitionDelay: inView ? '360ms' : '0ms' }}
        >
          <p className="eyebrow teal ap-partners-label">Program Partners</p>
          <div className="ap-partners-row" role="list" aria-label="Workshop program partners">
            <div className="ap-partner-tile ap-partner-text" role="listitem">
              <span>PUM</span>
            </div>
            <div className="ap-partner-tile" role="listitem">
              <img src={edfLogo} alt="Environmental Defense Fund" />
            </div>
            <div className="ap-partner-tile" role="listitem">
              <img src={nddbLogo} alt="NDDB Dairy Services" />
            </div>
            <div className="ap-partner-tile ap-partner-text" role="listitem">
              <span>NIANP</span>
            </div>
            <div className="ap-partner-tile ap-partner-text" role="listitem">
              <span>TANUVAS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4 — SUSTAINABILITY PATHWAY (Scroll-Driven Editorial Curve)
   - Section is pinned/sticky during vertical scrolling.
   - Vertical scroll position translates into horizontal pathway progress (0% - 100%).
   - Minimal traveling accent dot indicates current position along the curve.
   - 8 milestones with 3 states: upcoming (muted), active (highlighted + 4-5 line story), passed (completed).
   - Only ONE story is ever visible at a time with smooth 350ms fade/slide transitions.
   - Full keyboard accessibility and prefers-reduced-motion fallback.
   ───────────────────────────────────────────────────────────── */

function SustainabilityPathway() {
  const trackRef = useRef(null);
  const desktopPathRef = useRef(null);
  const mobilePathRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [cameraPanX, setCameraPanX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [desktopLength, setDesktopLength] = useState(0);
  const [mobileLength, setMobileLength] = useState(0);
  const [milestones, setMilestones] = useState([]);
  const [markerPos, setMarkerPos] = useState({ x: 140, y: 270 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Screen resize / viewport check
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Measure SVG paths & calculate milestone coordinates along the curve
  useEffect(() => {
    const dPath = desktopPathRef.current;
    const mPath = mobilePathRef.current;
    const path = isMobile ? mPath : dPath;
    if (!path) return;

    const totalLen = path.getTotalLength();
    if (isMobile) {
      setMobileLength(totalLen);
      // Evenly distribute milestones along vertical path
      const coords = PATHWAY_STOPS.map((stop, i) => {
        const frac = 0.08 + i * 0.11;
        const pt = path.getPointAtLength(frac * totalLen);
        return { ...stop, x: pt.x, y: pt.y, frac };
      });
      setMilestones(coords);
    } else {
      setDesktopLength(totalLen);
      // Binary search along curve to find exact length corresponding to targetX
      const coords = PATHWAY_STOPS.map((stop) => {
        let low = 0;
        let high = totalLen;
        for (let iter = 0; iter < 28; iter++) {
          const mid = (low + high) / 2;
          const pt = path.getPointAtLength(mid);
          if (pt.x < stop.targetX) low = mid;
          else high = mid;
        }
        const len = (low + high) / 2;
        const pt = path.getPointAtLength(len);
        return { ...stop, x: pt.x, y: pt.y, frac: len / totalLen };
      });
      setMilestones(coords);
    }

    const startPt = path.getPointAtLength(0);
    setMarkerPos({ x: startPt.x, y: startPt.y });
  }, [isMobile]);

  // Scroll listener: translates vertical page scroll into smooth progress (0 to 1)
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
          const track = trackRef.current;
          if (!track) return;

          const rect = track.getBoundingClientRect();
          const scrollable = track.offsetHeight - window.innerHeight;
          if (scrollable <= 0) return;

          const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
          setScrollProgress(progress);

          const activePath = isMobile ? mobilePathRef.current : desktopPathRef.current;
          if (!activePath) return;

          const total = activePath.getTotalLength();
          const pt = activePath.getPointAtLength(progress * total);
          setMarkerPos({ x: pt.x, y: pt.y });

          // Smooth horizontal camera pan tracking on desktop
          if (!isMobile) {
            const vw = window.innerWidth;
            // Keep the protagonist dot comfortably in view (~32% from the left)
            const targetPan = pt.x - vw * 0.32;
            const maxPan = Math.max(0, DESKTOP_VB_W - vw);
            const clampedPan = Math.min(Math.max(targetPan, 0), maxPan);
            setCameraPanX(clampedPan);
          }
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion, isMobile]);

  // Click handler to smooth scroll directly to a milestone fraction
  const handleMilestoneSelect = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track || typeof window === 'undefined' || !milestones[index]) return;
      const scrollable = track.offsetHeight - window.innerHeight;
      const targetFrac = milestones[index].frac;
      const trackTop = window.scrollY + track.getBoundingClientRect().top;
      window.scrollTo({
        top: trackTop + targetFrac * scrollable,
        behavior: 'smooth',
      });
    },
    [milestones]
  );

  const activeLength = isMobile ? mobileLength : desktopLength;
  const traveledDash = scrollProgress * activeLength;

  // Determine current active milestone index (or -1 if between/before)
  const currentStageIndex = milestones.findIndex(
    (m) => scrollProgress >= m.frac - 0.02 && scrollProgress < m.frac + 0.055
  );
  const focusedStageIndex = milestones.reduce((bestIndex, milestone, index) => {
    if (scrollProgress >= milestone.frac - 0.025) return index;
    return bestIndex;
  }, 0);
  const activeStage = milestones[focusedStageIndex] || PATHWAY_STOPS[0];
  const progressPercent = Math.round(scrollProgress * 100);
  const displayStageNum = currentStageIndex >= 0 ? currentStageIndex + 1 : Math.min(
    Math.max(1, Math.round(scrollProgress * PATHWAY_STOPS.length)),
    PATHWAY_STOPS.length
  );

  return (
    <section
      className="ap-pathway-root"
      aria-labelledby="ap-pathway-heading"
      style={{ '--pathway-progress': `${progressPercent}%` }}
    >
      {/* ── Accessible Static Fallback (for prefers-reduced-motion) ── */}
      {prefersReducedMotion ? (
        <div className="shell ap-pathway-static-mode">
          <div className="ap-section-heading">
            <p className="eyebrow teal">Learning Journey</p>
            <h2 id="ap-pathway-heading">Sustainability Pathway</h2>
            <p className="ap-section-sub">
              An end-to-end curriculum journey from initial sustainability concepts to
              industry-recognized engineering innovation and real-world impact.
            </p>
          </div>

          <div className="ap-static-timeline" role="list">
            {PATHWAY_STOPS.map((stop) => (
              <article key={stop.id} className="ap-static-card" role="listitem">
                <div className="ap-static-badge">0{stop.id}</div>
                <div className="ap-static-body">
                  <span className="ap-static-tag">{stop.subtitle}</span>
                  <h3 className="ap-static-title">{stop.name}</h3>
                  <p className="ap-static-narrative">{stop.narrative}</p>
                  <div className="ap-static-takeforward">
                    <strong>TAKE FORWARD:</strong> {stop.takeForward}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        /* ── Scroll-Driven Scrollytelling Track (500vh distance for smooth pacing) ── */
        <div className="ap-pathway-scroll-track" ref={trackRef}>
          <div className="ap-pathway-sticky-stage">
            <div className="ap-pathway-ambient" aria-hidden="true" />
            <div className="ap-pathway-grid" aria-hidden="true" />

            {/* Minimalist Fixed Header */}
            <div className="ap-pathway-fixed-header shell">
              <div className="ap-pathway-eyebrow-row">
                <span className="eyebrow teal">KSLI Curriculum Journey</span>
                <span className="ap-pathway-progress-badge">
                  {progressPercent}% mapped
                </span>
              </div>
              <div className="ap-pathway-header-meta">
                <h2 id="ap-pathway-heading" className="ap-pathway-title">
                  Sustainability Pathway
                </h2>
                <div className="ap-pathway-stepper" aria-label="Pathway milestones">
                  {PATHWAY_STOPS.map((st, si) => {
                    const m = milestones[si];
                    const isPassed = m ? scrollProgress >= m.frac + 0.055 : false;
                    const isActive = m ? scrollProgress >= m.frac && scrollProgress < m.frac + 0.055 : false;
                    return (
                      <button
                        key={st.id}
                        type="button"
                        className={`ap-stepper-dot ${isActive ? 'is-active' : isPassed ? 'is-passed' : ''}`}
                        onClick={() => handleMilestoneSelect(si)}
                        title={`Jump to 0${st.id} ${st.name}`}
                        aria-label={`Milestone 0${st.id}: ${st.name}`}
                      >
                        <span className="ap-stepper-index">0{st.id}</span>
                        <span className="ap-stepper-label">{st.short}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="ap-pathway-command-panel" aria-live="polite">
                <div>
                  <span className="ap-command-kicker">Live stage</span>
                  <strong>0{displayStageNum} - {activeStage.name}</strong>
                </div>
                <div>
                  <span className="ap-command-kicker">Focus</span>
                  <strong>{activeStage.takeForward}</strong>
                </div>
                <div className="ap-command-meter" aria-label={`Journey progress ${progressPercent}%`}>
                  <span />
                </div>
              </div>
            </div>

            {/* ── Camera Viewport Window (clipping mask) ── */}
            <div className="ap-camera-window">
              {/* ── World Canvas (Expansive horizontal landscape panned via translateX) ── */}
              <div
                className="ap-world-canvas"
                style={{
                  transform: isMobile ? 'none' : `translate3d(-${cameraPanX}px, 0, 0)`,
                }}
              >
                <svg
                  className="ap-curve-svg"
                  viewBox={
                    isMobile
                      ? `0 0 ${MOBILE_VB_W} ${MOBILE_VB_H}`
                      : `0 0 ${DESKTOP_VB_W} ${DESKTOP_VB_H}`
                  }
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="apPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0A2A5C" />
                      <stop offset="46%" stopColor="#1856A5" />
                      <stop offset="100%" stopColor="#1A8FBF" />
                    </linearGradient>
                    <filter id="apPathGlow" x="-20%" y="-80%" width="140%" height="260%">
                      <feGaussianBlur stdDeviation="7" result="blur" />
                      <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="0 0 0 0 0.10 0 0 0 0 0.34 0 0 0 0 0.65 0 0 0 0.34 0"
                      />
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Invisible measurement path for Desktop */}
                  <path
                    ref={desktopPathRef}
                    d={DESKTOP_CURVE_D}
                    fill="none"
                    stroke="none"
                  />
                  {/* Invisible measurement path for Mobile */}
                  <path
                    ref={mobilePathRef}
                    d={MOBILE_CURVE_D}
                    fill="none"
                    stroke="none"
                  />

                  {/* 1. Base Pathway Curve (Subtle neutral line ahead of dot) */}
                  <path
                    d={isMobile ? MOBILE_CURVE_D : DESKTOP_CURVE_D}
                    className="ap-curve-glow-line"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d={isMobile ? MOBILE_CURVE_D : DESKTOP_CURVE_D}
                    className="ap-curve-base-line"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* 2. Traveled Pathway Curve (KSLI Teal progressively drawn up to dot) */}
                  {activeLength > 0 && (
                    <path
                      d={isMobile ? MOBILE_CURVE_D : DESKTOP_CURVE_D}
                      className="ap-curve-traveled-line"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${traveledDash} ${activeLength}`}
                      strokeDashoffset="0"
                    />
                  )}

                  {/* 3. Milestone Nodes and Stage Titles positioned along the curve */}
                  {milestones.map((m, i) => {
                    const isPassed = scrollProgress >= m.frac + 0.055;
                    const isActive = scrollProgress >= m.frac && scrollProgress < m.frac + 0.055;
                    const isApproach = scrollProgress >= m.frac - 0.045 && scrollProgress < m.frac;
                    const isAbove = m.placement === 'above';
                    const titleY = isMobile
                      ? m.y
                      : isAbove
                      ? m.y + 36
                      : m.y - 22;

                    return (
                      <g key={m.id} className="ap-milestone-group">
                        {/* Simple milestone dot - clean circular marker (NO checkmark, NO moving pulse) */}
                        <circle
                          cx={m.x}
                          cy={m.y}
                          r={isActive ? 22 : isPassed ? 15 : 12}
                          className={`ap-milestone-halo ${
                            isActive ? 'is-active' : isPassed ? 'is-passed' : 'is-upcoming'
                          }`}
                        />
                        <circle
                          cx={m.x}
                          cy={m.y}
                          r={isActive ? 8 : isPassed ? 5.5 : 5}
                          className={`ap-milestone-circle ${
                            isActive ? 'is-active' : isPassed ? 'is-passed' : 'is-upcoming'
                          }`}
                          onClick={() => handleMilestoneSelect(i)}
                          style={{ cursor: 'pointer' }}
                          tabIndex={0}
                          role="button"
                          aria-label={`Milestone 0${m.id}: ${m.name}`}
                          aria-pressed={isActive}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleMilestoneSelect(i);
                            }
                          }}
                        />

                        {/* Stage Title along the pathway curve */}
                        <text
                          x={isMobile ? m.x + (i % 2 === 0 ? 22 : -22) : m.x}
                          y={titleY}
                          textAnchor={isMobile ? (i % 2 === 0 ? 'start' : 'end') : 'middle'}
                          className={`ap-curve-stage-title ${
                            isActive
                              ? 'is-active'
                              : isApproach
                              ? 'is-approach'
                              : isPassed
                              ? 'is-passed'
                              : 'is-upcoming'
                          }`}
                        >
                          {`0${m.id} — ${m.name.toUpperCase()}`}
                        </text>
                      </g>
                    );
                  })}

                  {/* 4. Single Pathway Marker Dot - strictly derived from user scroll progress */}
                  <g
                    transform={`translate(${markerPos.x}, ${markerPos.y})`}
                    className="ap-student-marker"
                  >
                    <circle r="18" className="ap-student-orbit" />
                    <circle r="7" className="ap-student-core" />
                    <circle r="2.5" fill="#ffffff" opacity="0.9" />
                  </g>
                </svg>

                {/* ── Contextual Editorial Story Panels (Positioned spatially on canvas) ── */}
                {!isMobile &&
                  milestones.map((m) => {
                    const isStoryVisible =
                      scrollProgress >= m.frac && scrollProgress < m.frac + 0.055;
                    const isAbove = m.placement === 'above';
                    // Negative space positioning: above or below curve
                    const panelTop = isAbove ? m.y - 280 : m.y + 44;
                    const panelLeft = m.x - 190;

                    return (
                      <div
                        key={m.id}
                        className={`ap-editorial-panel ${isStoryVisible ? 'is-visible' : ''}`}
                        style={{
                          top: `${panelTop}px`,
                          left: `${panelLeft}px`,
                        }}
                        aria-hidden={!isStoryVisible}
                        role="region"
                        aria-label={`Milestone 0${m.id} story: ${m.name}`}
                      >
                        <div className="ap-panel-badge">
                          <span className="ap-panel-num">0{m.id}</span>
                          <span className="ap-panel-sub">{m.subtitle}</span>
                        </div>
                        <h3 className="ap-panel-title">{m.name}</h3>
                        <p className="ap-panel-narrative">{m.narrative}</p>
                        <div className="ap-panel-footer">
                          <span className="ap-takeforward-label">TAKE FORWARD</span>
                          <span className="ap-takeforward-tag">{m.takeForward}</span>
                        </div>
                      </div>
                    );
                  })}

                {/* ── Final Destination: IMPACT (Opens gracefully at 100% canvas end) ── */}
                {!isMobile && (
                  <div
                    className={`ap-impact-destination ${
                      scrollProgress >= 0.89 ? 'is-visible' : ''
                    }`}
                    style={{ left: '5160px', top: '100px' }}
                    aria-label="Final Destination: Impact"
                  >
                    <div className="ap-impact-badge">CULMINATION</div>
                    <h3 className="ap-impact-title">{FINAL_DESTINATION.title}</h3>
                    <p className="ap-impact-subtitle">{FINAL_DESTINATION.subtitle}</p>
                    <div className="ap-impact-flow">
                      {FINAL_DESTINATION.flow.map((step, idx) => (
                        <span key={step} className="ap-flow-step">
                          {step}
                          {idx < FINAL_DESTINATION.flow.length - 1 && (
                            <span className="ap-flow-arrow">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <div className="ap-impact-statement">
                      {FINAL_DESTINATION.statement}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Story Panel (Renders anchored contextually below sticky view) */}
            {isMobile && currentStageIndex >= 0 && (
              <div className="ap-mobile-story-dock">
                {(() => {
                  const m = milestones[currentStageIndex];
                  return (
                    <div className="ap-editorial-panel is-visible">
                      <div className="ap-panel-badge">
                        <span className="ap-panel-num">0{m.id}</span>
                        <span className="ap-panel-sub">{m.subtitle}</span>
                      </div>
                      <h3 className="ap-panel-title">{m.name}</h3>
                      <p className="ap-panel-narrative">{m.narrative}</p>
                      <div className="ap-panel-footer">
                        <span className="ap-takeforward-label">TAKE FORWARD</span>
                        <span className="ap-takeforward-tag">{m.takeForward}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE ROOT
   ───────────────────────────────────────────────────────────── */

export default function AcademicPrograms() {
  return (
    <div className="ap-page">
      <HeroSection />
      <AcademicProgramsSection />
      <WorkshopsSection />
      <SustainabilityPathway />
    </div>
  );
}
