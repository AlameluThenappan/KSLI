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

// Sourced directly from the deck's "Sustainability Pathway" slides.
// Stops 5–6 and 7–8 share descriptions (the deck presents them as paired stages).
const PATHWAY_STOPS = [
  {
    id: 1, pct: 0,
    name: 'Sustainability Immersion',
    short: ['Sustainability', 'Immersion'],
    desc: 'Introduce sustainability concepts and understand the need for climate resilience.',
  },
  {
    id: 2, pct: 13,
    name: 'Project Based Learning',
    short: ['Project Based', 'Learning'],
    desc: 'Identifying climate challenges and solving them through a project-based learning module.',
  },
  {
    id: 3, pct: 26,
    name: 'Elective Papers',
    short: ['Elective', 'Papers'],
    desc: 'Capacity building through elective papers in collaboration with Clean Tech industries and institutions.',
  },
  {
    id: 4, pct: 38,
    name: 'Edge / Edge+',
    short: ['Edge /', 'Edge+'],
    desc: 'Certification by professional bodies through immersive experiential learning.',
  },
  {
    id: 5, pct: 50,
    name: 'Prototyping Semester',
    short: ['Prototyping', 'Semester'],
    desc: 'A 20-week Graduate Innovation Engineer Certification offered by Forge — a comprehensive skills and competency development program with an innovation-centered approach to engineering education.',
  },
  {
    id: 6, pct: 61,
    name: 'Prototyping Semester (cont.)',
    short: ['Prototyping', '(cont.)'],
    desc: 'A 20-week Graduate Innovation Engineer Certification offered by Forge — a comprehensive skills and competency development program with an innovation-centered approach to engineering education.',
  },
  {
    id: 7, pct: 80,
    name: 'Internships & Capstone Project',
    short: ['Internships &', 'Capstone'],
    desc: 'Apply engineering principles to solve environmental challenges, design sustainable solutions, and promote resource efficiency.',
  },
  {
    id: 8, pct: 100,
    name: 'Internships & Capstone Project (cont.)',
    short: ['Capstone', '(cont.)'],
    desc: 'Apply engineering principles to solve environmental challenges, design sustainable solutions, and promote resource efficiency.',
  },
];

// SVG road path — desktop serpentine (two-row S-curve)
const VB_W = 1300;
const VB_H = 480;
const ROAD_PATH_D =
  'M 80,140 C 280,78 480,78 680,140 C 880,202 1080,202 1240,140 ' +
  'C 1322,108 1322,210 1240,302 C 1080,364 880,364 680,302 ' +
  'C 480,240 280,240 80,302';

// Road colour constants
const ROAD_SHADOW   = '#8aa490';  // soft drop-shadow strip
const ROAD_BASE     = '#c6d8ca';  // upcoming road surface
const ROAD_TRAVELED = '#7a9e87';  // traveled portion — richer sage
const ROAD_EDGE_LT  = '#dde8df';  // centre highlight
const TERRAIN_BG    = '#d8ead9';  // background terrain

// Threshold: pins with y < this show labels BELOW; otherwise ABOVE
const LABEL_Y_THRESHOLD = VB_H * 0.54;

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
   SVG NATURE DECORATIONS
   ───────────────────────────────────────────────────────────── */

// Three colour palettes — dark forest, mid sage, muted grey-green
// Each palette has: trunk, canopy-main, canopy-mid, canopy-dark, canopy-highlight
const TREE_PALETTES = [
  { trunk: '#3e5230', main: '#2d5a3d', mid: '#3a7050', dark: '#214530', hi: '#4a8060' },
  { trunk: '#4a5e3c', main: '#4a7c5a', mid: '#5c8e6a', dark: '#3a6348', hi: '#6a9c78' },
  { trunk: '#567050', main: '#6c8c7c', mid: '#7ca08c', dark: '#4a7060', hi: '#8cb09c' },
];

function Tree({ x, y, s = 1, v = 0 }) {
  const c = TREE_PALETTES[v % 3];
  // Unique shadow id per tree to avoid collisions when multiple Trees share a filter
  const shadowId = `ts-${v}-${Math.round(x)}-${Math.round(y)}`;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} aria-hidden="true">
      <defs>
        <filter id={shadowId} x="-40%" y="0%" width="180%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a2e1a" floodOpacity="0.28" />
        </filter>
      </defs>
      {/* Ground shadow ellipse */}
      <ellipse cx="0" cy="30" rx="10" ry="3.5" fill="#1a2e1a" opacity="0.18" />
      {/* Trunk */}
      <rect x="-3" y="14" width="6" height="18" rx="2" fill={c.trunk} />
      {/* Lower side foliage (darkest) */}
      <ellipse cx="-8" cy="10" rx="10" ry="13" fill={c.dark}  opacity="0.82" filter={`url(#${shadowId})`} />
      <ellipse cx="8"  cy="10" rx="10" ry="13" fill={c.dark}  opacity="0.82" />
      {/* Main canopy */}
      <ellipse cx="0"  cy="2"  rx="13" ry="17" fill={c.main}  opacity="0.92" filter={`url(#${shadowId})`} />
      {/* Mid highlight */}
      <ellipse cx="-3" cy="-2" rx="9"  ry="12" fill={c.mid}   opacity="0.76" />
      {/* Top highlight spot */}
      <ellipse cx="1"  cy="-8" rx="5"  ry="7"  fill={c.hi}    opacity="0.55" />
    </g>
  );
}

// Small bush/shrub for foreground detail
function Shrub({ x, y, s = 1, v = 0 }) {
  const fills = ['#3a6348', '#4a7c5a', '#5c8e6a'];
  const darks = ['#214530', '#3a6348', '#4a7060'];
  const f = fills[v % 3];
  const d = darks[v % 3];
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} aria-hidden="true">
      <ellipse cx="0"  cy="5"  rx="8"  ry="5"  fill={d} opacity="0.70" />
      <ellipse cx="-5" cy="3"  rx="7"  ry="5"  fill={f} opacity="0.80" />
      <ellipse cx="5"  cy="3"  rx="7"  ry="5"  fill={f} opacity="0.80" />
      <ellipse cx="0"  cy="-1" rx="6"  ry="5"  fill={f} opacity="0.88" />
    </g>
  );
}

function Leaf({ x, y, r = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${r}) scale(${s})`} aria-hidden="true">
      <path d="M0,0 C5,-9 12,-6 8,2 C4,10 -2,6 0,0Z" fill="#4a7c5a" opacity="0.38" />
    </g>
  );
}

function RoadDecorations() {
  // Top tree-line — varied sizes for natural depth
  const topTrees = [
    { x: 45,   y: 44,  s: 0.76, v: 0 }, { x: 120,  y: 30,  s: 1.22, v: 2 },
    { x: 200,  y: 26,  s: 0.95, v: 1 }, { x: 285,  y: 30,  s: 1.10, v: 0 },
    { x: 375,  y: 24,  s: 0.82, v: 2 }, { x: 455,  y: 28,  s: 1.16, v: 1 },
    { x: 545,  y: 22,  s: 0.88, v: 0 }, { x: 630,  y: 27,  s: 1.05, v: 2 },
    { x: 720,  y: 24,  s: 0.78, v: 1 }, { x: 810,  y: 21,  s: 1.18, v: 0 },
    { x: 895,  y: 26,  s: 0.90, v: 2 }, { x: 980,  y: 22,  s: 1.02, v: 1 },
    { x: 1065, y: 27,  s: 0.84, v: 0 }, { x: 1148, y: 24,  s: 1.14, v: 2 },
    { x: 1230, y: 30,  s: 0.92, v: 1 }, { x: 1280, y: 42,  s: 0.80, v: 0 },
  ];
  // Bottom tree-line
  const botTrees = [
    { x: 50,   y: 455, s: 0.80, v: 1 }, { x: 130,  y: 462, s: 1.14, v: 0 },
    { x: 215,  y: 455, s: 0.88, v: 2 }, { x: 305,  y: 460, s: 1.00, v: 1 },
    { x: 395,  y: 454, s: 0.76, v: 0 }, { x: 475,  y: 459, s: 1.18, v: 2 },
    { x: 565,  y: 454, s: 0.92, v: 1 }, { x: 650,  y: 458, s: 0.82, v: 0 },
    { x: 740,  y: 453, s: 1.12, v: 2 }, { x: 830,  y: 460, s: 0.86, v: 1 },
    { x: 915,  y: 454, s: 1.04, v: 0 }, { x: 1000, y: 459, s: 0.78, v: 2 },
    { x: 1085, y: 453, s: 1.10, v: 1 }, { x: 1170, y: 458, s: 0.90, v: 0 },
    { x: 1250, y: 453, s: 1.16, v: 2 }, { x: 1290, y: 464, s: 0.82, v: 1 },
  ];
  // Mid-ground shrubs
  const topShrubs = [
    { x: 80,  y: 56, s: 0.90, v: 0 }, { x: 160, y: 54, s: 1.10, v: 2 },
    { x: 340, y: 52, s: 0.80, v: 1 }, { x: 510, y: 55, s: 1.00, v: 0 },
    { x: 680, y: 52, s: 0.95, v: 2 }, { x: 860, y: 54, s: 1.05, v: 1 },
    { x: 1030,y: 53, s: 0.88, v: 0 }, { x: 1210,y: 55, s: 0.96, v: 2 },
  ];
  const botShrubs = [
    { x: 90,  y: 436, s: 0.92, v: 1 }, { x: 175, y: 440, s: 1.08, v: 0 },
    { x: 360, y: 437, s: 0.82, v: 2 }, { x: 530, y: 440, s: 1.02, v: 1 },
    { x: 700, y: 437, s: 0.90, v: 0 }, { x: 875, y: 440, s: 1.06, v: 2 },
    { x: 1045,y: 437, s: 0.86, v: 1 }, { x: 1215,y: 440, s: 0.98, v: 0 },
  ];
  const leaves = [
    { x: 150, y: 60, r: 20 },  { x: 260, y: 50, r: 80 },  { x: 440, y: 53, r: 140 },
    { x: 600, y: 48, r: 200 }, { x: 775, y: 52, r: 260 },  { x: 940, y: 50, r: 320 },
    { x: 1080,y: 54, r: 20 },  { x: 1200,y: 50, r: 80 },
    { x: 155, y: 427,r: 50 },  { x: 310, y: 435,r: 110 }, { x: 490, y: 428,r: 170 },
    { x: 670, y: 433,r: 230 }, { x: 850, y: 428,r: 290 }, { x: 1025,y: 433,r: 350 },
    { x: 1175,y: 428,r: 50 },
  ];

  return (
    <>
      {/* Darker terrain grass bands — top and bottom */}
      <rect x="0" y="0"   width={VB_W} height="65" fill={TERRAIN_BG} />
      <rect x="0" y="415" width={VB_W} height="65" fill={TERRAIN_BG} />
      {/* Leaf litter scatter */}
      {leaves.map((l, i) => <Leaf key={`l${i}`} x={l.x} y={l.y} r={l.r} s={0.82 + (i % 4) * 0.10} />)}
      {/* Mid-ground shrubs — drawn BEFORE trees so trees overlap them */}
      {topShrubs.map((t, i) => <Shrub key={`tsh${i}`} x={t.x} y={t.y} s={t.s} v={t.v} />)}
      {botShrubs.map((t, i) => <Shrub key={`bsh${i}`} x={t.x} y={t.y} s={t.s} v={t.v} />)}
      {/* Tree clusters */}
      {topTrees.map((t, i) => <Tree key={`tt${i}`} x={t.x} y={t.y} s={t.s} v={t.v} />)}
      {botTrees.map((t, i) => <Tree key={`bt${i}`} x={t.x} y={t.y} s={t.s} v={t.v} />)}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   GRADUATION CAP ICON  — academic journey metaphor
   Rendered as clean single-color navy SVG, legible at ~48px.
   ───────────────────────────────────────────────────────────── */

function GradCapIcon() {
  return (
    <svg
      viewBox="-24 -22 48 44"
      width="48"
      height="44"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      {/* Soft drop-shadow circle behind cap */}
      <ellipse cx="0" cy="18" rx="18" ry="5" fill="rgba(27,40,64,0.22)" />

      {/* Board (flat top of mortarboard) */}
      <polygon
        points="0,-20  24,-8  0,4  -24,-8"
        fill="#1b2840"
      />
      {/* Board edge highlight */}
      <polygon
        points="0,-20  24,-8  22,-7  0,-18  -22,-7  -24,-8"
        fill="#2d4a6f"
        opacity="0.55"
      />

      {/* Cap body (cylindrical drum underneath the board) */}
      <rect x="-10" y="-4" width="20" height="14" rx="1" fill="#243b5c" />
      {/* Drum shading */}
      <rect x="7"   y="-4" width="3"  height="14" rx="1" fill="#1b2840" opacity="0.40" />

      {/* Tassel cord — hangs from right corner of board */}
      <line x1="24" y1="-8" x2="24" y2="6"  stroke="#6c8c7c" strokeWidth="1.8" strokeLinecap="round" />
      {/* Tassel knot */}
      <circle cx="24" cy="6" r="2.2" fill="#6c8c7c" />
      {/* Tassel fringe */}
      <line x1="22" y1="6" x2="20" y2="14" stroke="#6c8c7c" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="24" y1="6" x2="24" y2="15" stroke="#6c8c7c" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="26" y1="6" x2="28" y2="14" stroke="#6c8c7c" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Alias keeps JSX call-site unchanged
const VehicleIcon = GradCapIcon;

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
   SECTION 4 — SUSTAINABILITY PATHWAY (Animated Road Journey)
   ───────────────────────────────────────────────────────────── */

function SustainabilityPathway() {
  const sectionRef = useRef(null);
  const pathRef    = useRef(null);

  const [inView,       setInView]       = useState(false);
  const [pinPositions, setPinPositions] = useState(null);
  const [vehiclePos,   setVehiclePos]   = useState({ x: 80, y: 140 }); // default = stop 1
  const [currentStop,  setCurrentStop]  = useState(-1);  // -1 = not started
  const [activeCard,   setActiveCard]   = useState(null);
  const [isPlaying,    setIsPlaying]    = useState(false);
  const [isComplete,   setIsComplete]   = useState(false);
  const [isMobile,     setIsMobile]     = useState(false);
  const [started,      setStarted]      = useState(false);

  const autoTimerRef   = useRef(null);
  const resumeTimerRef = useRef(null);

  const prefersReducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  // ── Mobile detection ──────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Calculate exact pin positions from the SVG path ───────
  useEffect(() => {
    if (isMobile || !pathRef.current) return;
    const totalLen = pathRef.current.getTotalLength();
    const positions = PATHWAY_STOPS.map(s => {
      const pt = pathRef.current.getPointAtLength((s.pct / 100) * totalLen);
      return { x: pt.x, y: pt.y };
    });
    setPinPositions(positions);
    setVehiclePos({ x: positions[0].x, y: positions[0].y });
  }, [isMobile]);

  // ── Intersection observer for section reveal ──────────────
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.10 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ── Start auto-play once in-view and positions are ready ──
  useEffect(() => {
    if (!inView || !pinPositions || prefersReducedMotion.current || started || isMobile) return;
    setStarted(true);
    setCurrentStop(0);
    setActiveCard(0);
    setVehiclePos(pinPositions[0]);
    setIsPlaying(true);
  }, [inView, pinPositions, started, isMobile]);

  // ── Auto-advance timer (re-runs each time currentStop changes) ──
  useEffect(() => {
    if (!isPlaying || isComplete) return;
    clearTimeout(autoTimerRef.current);
    autoTimerRef.current = setTimeout(() => {
      const next = currentStop + 1;
      if (next >= PATHWAY_STOPS.length) {
        setIsComplete(true);
        setIsPlaying(false);
        setActiveCard(PATHWAY_STOPS.length - 1);
        return;
      }
      if (pinPositions) setVehiclePos(pinPositions[next]);
      setCurrentStop(next);
      setActiveCard(next);
    }, 4000); // 4s per stop: ~1.2s travel + ~2.8s pause
    return () => clearTimeout(autoTimerRef.current);
  }, [isPlaying, isComplete, currentStop, pinPositions]);

  // ── Cleanup on unmount ────────────────────────────────────
  useEffect(() => {
    return () => {
      clearTimeout(autoTimerRef.current);
      clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // ── Manual pin click / keyboard ───────────────────────────
  const handlePinClick = useCallback((idx) => {
    clearTimeout(autoTimerRef.current);
    clearTimeout(resumeTimerRef.current);
    setIsPlaying(false);
    setIsComplete(false);
    if (pinPositions) setVehiclePos(pinPositions[idx]);
    setCurrentStop(idx);
    setActiveCard(idx);
    // Resume autoplay 5 s after last interaction
    if (idx < PATHWAY_STOPS.length - 1) {
      resumeTimerRef.current = setTimeout(() => setIsPlaying(true), 5000);
    }
  }, [pinPositions]);

  const handlePinKeyDown = useCallback((e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePinClick(idx);
    }
  }, [handlePinClick]);

  // ── Position helpers (SVG coord → CSS % of container) ─────
  const toLeft = (svgX) => `${(svgX / VB_W) * 100}%`;
  const toTop  = (svgY) => `${(svgY / VB_H) * 100}%`;

  const getInfoCardStyle = useCallback((idx) => {
    if (!pinPositions || !pinPositions[idx]) return { display: 'none' };
    const { x, y } = pinPositions[idx];
    const xPct = x / VB_W;
    const yPct = y / VB_H;
    const isBottom = yPct > 0.55;
    const isRight  = xPct > 0.73;
    const isLeft   = xPct < 0.18;
    const tX = isRight ? 'calc(-100% - 14px)' : isLeft ? '14px' : '-50%';
    const tY = isBottom ? 'calc(-100% - 38px)' : '30px';
    return {
      left: toLeft(x),
      top:  toTop(y),
      transform: `translate(${tX}, ${tY})`,
    };
  }, [pinPositions]);

  const getLabelStyle = useCallback((pos) => {
    if (!pos) return { display: 'none' };
    const isTop   = pos.y < LABEL_Y_THRESHOLD;
    const isRight = (pos.x / VB_W) > 0.76;
    const isLeft  = (pos.x / VB_W) < 0.14;
    const tX = isRight ? '-100%' : isLeft ? '0%' : '-50%';
    const tY = isTop ? '0%' : '-100%';
    const yOffset = isTop ? 24 : -24; // px offset in SVG units → converted below
    return {
      left: toLeft(pos.x),
      top: `calc(${toTop(pos.y)} + ${yOffset * (100 / VB_H)}%)`,
      transform: `translate(${tX}, ${tY})`,
    };
  }, []);

  // ── Show static list on mobile OR reduced-motion ──────────
  const showStatic = isMobile || prefersReducedMotion.current;

  return (
    <section
      className={`ap-section ap-pathway-section${inView ? ' is-visible' : ''}`}
      ref={sectionRef}
      aria-labelledby="ap-pathway-heading"
    >
      <div className="shell">
        <div className="ap-section-heading">
          <p className="eyebrow teal">Learning Journey</p>
          <h2 id="ap-pathway-heading">Sustainability Pathway</h2>
          <p className="ap-section-sub">
            An end-to-end curriculum journey from first sustainability exposure to
            professional-grade engineering innovation and real-world impact.
          </p>
        </div>
      </div>

      {/* ── Static fallback (mobile / prefers-reduced-motion) ── */}
      {showStatic && (
        <div className="shell ap-pathway-static">
          {PATHWAY_STOPS.map(stop => (
            <div key={stop.id} className="ap-static-stop">
              <div className="ap-static-number">{String(stop.id).padStart(2, '0')}</div>
              <div>
                <h3 className="ap-static-title">{stop.name}</h3>
                <p className="ap-static-desc">{stop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Animated road (desktop, no reduced-motion) ─────── */}
      {!showStatic && (
        <div className="ap-road-outer">
          <div
            className="ap-road-container"
            role="region"
            aria-label="Interactive sustainability pathway — click any milestone pin to explore"
          >
            {/* ── Road SVG ─────────────────────────────────── */}
            <svg
              className="ap-road-svg"
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                {/* Road drop-shadow filter */}
                <filter id="road-shadow" x="-5%" y="-10%" width="110%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1a2e1a" floodOpacity="0.22" />
                </filter>
              </defs>

              {/* Canvas background — lighter neutral so road reads clearly */}
              <rect width={VB_W} height={VB_H} fill="#e8f0e9" />

              {/* Nature / greenery decorations */}
              <RoadDecorations />

              {/*
                Road rendering — 4 layers:
                1. Wide dark shadow strip (lifts road off terrain)
                2. Road surface — upcoming portion (lighter sage)
                3. Measurement path (ref, same geometry, invisible stroke)
                4. Traveled portion overlay (richer/darker sage) — clipped to 0..currentStop%
                5. Edge highlight — subtle lighter centre stripe
                6. Dashed white centre line
              */}

              {/* 1 — Drop shadow */}
              <path
                d={ROAD_PATH_D}
                stroke={ROAD_SHADOW} strokeWidth="40"
                fill="none" strokeLinecap="round"
                filter="url(#road-shadow)"
                opacity="0.70"
              />
              {/* 2 — Road surface (upcoming) */}
              <path
                d={ROAD_PATH_D}
                stroke={ROAD_BASE} strokeWidth="32"
                fill="none" strokeLinecap="round"
              />
              {/* 3 — Measurement path (invisible — ref used for getPointAtLength) */}
              <path
                ref={pathRef}
                d={ROAD_PATH_D}
                stroke="none"
                fill="none"
              />
              {/* 4 — Traveled portion: drawn as a dasharray trick using stroke-dashoffset.
                   totalLength * (currentPct/100) fills the traveled segment.
                   currentStop pct drives the visual fill via inline style. */}
              {pinPositions && currentStop >= 0 && (() => {
                const el     = pathRef.current;
                const total  = el ? el.getTotalLength() : 0;
                const pct    = PATHWAY_STOPS[currentStop]?.pct ?? 0;
                const filled = (pct / 100) * total;
                return (
                  <path
                    d={ROAD_PATH_D}
                    fill="none" strokeLinecap="round"
                    stroke={ROAD_TRAVELED}
                    strokeWidth="32"
                    strokeDasharray={`${filled} ${total}`}
                    strokeDashoffset="0"
                    style={{ transition: 'stroke-dasharray 1.15s cubic-bezier(0.45,0.01,0.55,1.0)' }}
                  />
                );
              })()}
              {/* 5 — Subtle lighter centre edge highlight */}
              <path
                d={ROAD_PATH_D}
                stroke={ROAD_EDGE_LT} strokeWidth="8"
                fill="none" strokeLinecap="round"
                opacity="0.55"
              />
              {/* 6 — Dashed white centre line */}
              <path
                d={ROAD_PATH_D}
                stroke="rgba(255,255,255,0.70)" strokeWidth="2"
                fill="none" strokeLinecap="round"
                strokeDasharray="18 14"
              />

              {/* Pin markers — rendered after positions are calculated */}
              {pinPositions && PATHWAY_STOPS.map((stop, i) => {
                const pos       = pinPositions[i];
                const isActive  = currentStop === i;
                const isVisited = i < currentStop;
                // Upcoming: clear mid-sage; visited: muted dark sage; active: full navy
                const pinR      = isActive ? 17 : 13;
                const pinFill   = isActive ? '#1b2840'
                                : isVisited ? '#4a7c5a'
                                : '#c4d8c8';         // clearly visible mid-sage, not near-white
                const pinStroke = isActive ? '#0e1820'
                                : isVisited ? '#2d5a3d'
                                : '#7a9e87';
                const textFill  = isActive  ? '#ffffff'
                                : isVisited ? '#ffffff'
                                : '#1b2840';         // dark navy on pale sage — high contrast

                return (
                  <g
                    key={stop.id}
                    transform={`translate(${pos.x},${pos.y})`}
                    className={`ap-road-pin${isActive ? ' is-active' : ''}${isVisited ? ' is-visited' : ''}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Stop ${stop.id}: ${stop.name}${isVisited ? ' — visited' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => handlePinClick(i)}
                    onKeyDown={(e) => handlePinKeyDown(e, i)}
                    style={{ outline: 'none' }}
                  >
                    {/* Outer pulse halo — active only */}
                    {isActive && (
                      <circle r="26" fill="rgba(27,40,64,0.13)" />
                    )}
                    {/* Outer ring for all pins — adds subtle definition */}
                    <circle
                      r={pinR + 2}
                      fill="none"
                      stroke={isActive ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.08)'}
                      strokeWidth="1"
                    />
                    {/* Main pin body */}
                    <circle
                      r={pinR}
                      fill={pinFill}
                      stroke={pinStroke}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      style={{ transition: 'r 0.4s ease, fill 0.4s ease, stroke 0.4s ease' }}
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={isActive ? 11 : 9}
                      fontWeight="700"
                      fontFamily="Inter, sans-serif"
                      fill={textFill}
                      style={{ transition: 'fill 0.4s ease, font-size 0.4s ease', pointerEvents: 'none' }}
                    >
                      {stop.id}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* ── Vehicle (HTML div positioned over SVG) ──── */}
            <div
              className="ap-vehicle"
              style={{ left: toLeft(vehiclePos.x), top: toTop(vehiclePos.y) }}
              aria-hidden="true"
            >
              <VehicleIcon />
            </div>

            {/* ── Stop name labels ─────────────────────────── */}
            {pinPositions && PATHWAY_STOPS.map((stop, i) => {
              const pos       = pinPositions[i];
              const isActive  = currentStop === i;
              const isVisited = i < currentStop;
              return (
                <div
                  key={`lbl-${stop.id}`}
                  className={`ap-stop-label${isActive ? ' is-active' : ''}${isVisited ? ' is-visited' : ''}`}
                  style={getLabelStyle(pos)}
                  aria-hidden="true"
                >
                  {stop.short.map((line, li) => (
                    <span key={li} style={{ display: 'block' }}>{line}</span>
                  ))}
                </div>
              );
            })}

            {/* ── Info card ────────────────────────────────── */}
            {activeCard !== null && pinPositions && (
              <div
                className="ap-info-card is-visible"
                role="region"
                aria-live="polite"
                aria-label={`Stop ${PATHWAY_STOPS[activeCard].id} details: ${PATHWAY_STOPS[activeCard].name}`}
                style={getInfoCardStyle(activeCard)}
              >
                <span className="ap-info-stop-num">
                  STOP {PATHWAY_STOPS[activeCard].id}
                </span>
                <strong className="ap-info-title">
                  {PATHWAY_STOPS[activeCard].name}
                </strong>
                <p className="ap-info-desc">
                  {PATHWAY_STOPS[activeCard].desc}
                </p>
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
