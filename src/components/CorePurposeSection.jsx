import React, { useState, useEffect, useRef } from 'react';
import '../styles/CorePurposeSection.css';

// ── Pillar Geometry ──
// SVG viewBox: 0 0 1200 560
// Semicircle: Center (600, 540), Radius 480
// Arc: M 120 540 A 480 480 0 0 1 1080 540
// Arc Length: PI * 480 ≈ 1507.96
//
// Node positions (on the arc):
//   Vision  : angle ≈ 155° from right → x≈ 600 - 480·cos(25°) = 165, y≈ 540 - 480·sin(25°) ≈ 337
//   Mission : angle = 90° (top center) → x=600, y=540-480=60
//   Purpose : angle ≈ 25° from right  → x≈ 600 + 480·cos(25°) ≈ 1035, y≈ 337

const VISION_X  = 168;
const VISION_Y  = 337;
const MISSION_X = 600;
const MISSION_Y = 62;
const PURPOSE_X = 1032;
const PURPOSE_Y = 337;

const ARC_PATH_D      = 'M 120 540 A 480 480 0 0 1 1080 540';
const ARC_TOTAL_LENGTH = Math.PI * 480; // ≈ 1507.96

// arcFraction: fractional distance along the arc where each node sits
// Vision  → ~21.1% of arc (left side, lower quarter up)
// Mission → 50% (apex)
// Purpose → ~78.9% (right side)
const PILLARS = {
  vision: {
    id: 'vision',
    number: '01',
    badge: 'VISION',
    title: 'Our Vision',
    statement: 'Advancing sustainability and livelihoods through research, education, entrepreneurship, and community transformation.',
    icon: (
      // Eye icon — clean outline, 22×22
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    x: VISION_X,
    y: VISION_Y,
    arcFraction: 0.211,
  },
  mission: {
    id: 'mission',
    number: '02',
    badge: 'MISSION',
    title: 'Our Mission',
    statement: 'To design and deliver integrated solutions that advance sustainability and strengthen rural livelihoods by combining applied research, practice-oriented education, entrepreneurship incubation, and long-term partnerships.',
    icon: (
      // Target / crosshair icon
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6"  />
        <circle cx="12" cy="12" r="2"  />
      </svg>
    ),
    x: MISSION_X,
    y: MISSION_Y,
    arcFraction: 0.500,
  },
  purpose: {
    id: 'purpose',
    number: '03',
    badge: 'PURPOSE',
    title: 'Our Purpose',
    statement: 'KSLI is a strategic institutional platform consolidating sustainability and livelihood-focused initiatives, aligning academic programs, research, partnerships, and community engagement under a single governance and identity.',
    icon: (
      // Leaf / growth icon
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    x: PURPOSE_X,
    y: PURPOSE_Y,
    arcFraction: 0.789,
  },
};

export default function CorePurposeSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress]           = useState(0);
  const [selectedPillarOverride, setSelectedPillarOverride] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Scroll-progress listener (RAF-throttled)
  useEffect(() => {
    if (prefersReducedMotion) { setScrollProgress(1); return; }
    let ticking = false;

    const calc = () => {
      if (!containerRef.current) return;
      const rect   = containerRef.current.getBoundingClientRect();
      const vh     = window.innerHeight;
      const total  = rect.height - vh;
      if (total <= 0) { setScrollProgress(1); return; }
      const raw    = -rect.top / total;
      setScrollProgress(Math.max(0, Math.min(1, raw)));
      if (selectedPillarOverride) setSelectedPillarOverride(null);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { calc(); ticking = false; });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    calc();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [prefersReducedMotion]);

  const p = prefersReducedMotion ? 1 : scrollProgress;

  // ── Stroke drawing stages ──
  // [0.00–0.08] no stroke
  // [0.08–0.22] draw to Vision   (0.211)
  // [0.22–0.40] hold at Vision
  // [0.40–0.54] draw to Mission  (0.500)
  // [0.54–0.72] hold at Mission
  // [0.72–0.86] draw to Purpose  (1.000)
  // [0.86–1.00] hold complete
  let strokeFraction = 0;
  if      (p < 0.08) strokeFraction = 0;
  else if (p < 0.22) strokeFraction = ((p - 0.08) / 0.14) * 0.211;
  else if (p < 0.40) strokeFraction = 0.211;
  else if (p < 0.54) strokeFraction = 0.211 + ((p - 0.40) / 0.14) * (0.500 - 0.211);
  else if (p < 0.72) strokeFraction = 0.500;
  else if (p < 0.86) strokeFraction = 0.500 + ((p - 0.72) / 0.14) * 0.500;
  else               strokeFraction = 1.000;

  const strokeDashoffset = ARC_TOTAL_LENGTH * (1 - strokeFraction);

  // Which pillar text to show
  let activePillarKey = null;
  if      (p >= 0.15 && p < 0.45) activePillarKey = 'vision';
  else if (p >= 0.45 && p < 0.76) activePillarKey = 'mission';
  else if (p >= 0.76)              activePillarKey = 'purpose';

  const currentKey    = selectedPillarOverride || activePillarKey;
  const currentPillar = currentKey ? PILLARS[currentKey] : null;

  // Node illumination (each lights up when stroke reaches it)
  const nodeStates = {
    vision:  strokeFraction >= 0.20 || selectedPillarOverride === 'vision',
    mission: strokeFraction >= 0.49 || selectedPillarOverride === 'mission',
    purpose: strokeFraction >= 0.78 || selectedPillarOverride === 'purpose',
  };

  return (
    <section
      id="purpose"
      ref={containerRef}
      className="cp-section"
      style={{ height: prefersReducedMotion ? 'auto' : '260vh' }}
      aria-label="KSLI Core Purpose"
    >
      <div className="cp-sticky">
        <div className="cp-inner">

          {/* ── Header ── */}
          <header className="cp-header">
            <span className="cp-eyebrow">OUR CORE PURPOSE</span>
            <h2 className="cp-heading">Our Vision, Mission &amp; Purpose</h2>
            <p className="cp-subtitle">
              A unified institutional journey advancing sustainable futures, resilient livelihoods,
              and community transformation.
            </p>
          </header>

          {/* ── Semicircle + Interior Content ── */}
          <div className="cp-arc-wrap">
            <svg
              className="cp-svg"
              viewBox="0 0 1200 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Full dashed guide (always visible, light blue) */}
              <path d={ARC_PATH_D} className="cp-guide" />

              {/* Progressive solid stroke */}
              <path
                d={ARC_PATH_D}
                className="cp-stroke"
                style={{
                  strokeDasharray:  ARC_TOTAL_LENGTH,
                  strokeDashoffset: strokeDashoffset,
                }}
              />

              {/* Left endpoint dot */}
              <circle
                cx="120" cy="540" r="6"
                className="cp-dot"
                style={{ fill: p >= 0.08 ? '#1856A5' : '#B8D0E8' }}
              />

              {/* Right endpoint dot */}
              <circle
                cx="1080" cy="540" r="6"
                className="cp-dot"
                style={{ fill: strokeFraction >= 0.98 ? '#1856A5' : '#B8D0E8' }}
              />

              {/* ── Three milestone nodes ── */}
              {Object.entries(PILLARS).map(([key, pillar]) => {
                const isActive  = nodeStates[key];
                const isCurrent = currentKey === key;
                return (
                  <g
                    key={key}
                    className={`cp-node${isActive ? ' is-active' : ''}${isCurrent ? ' is-current' : ''}`}
                    onClick={() => setSelectedPillarOverride(key)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${pillar.number} ${pillar.badge}: ${pillar.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedPillarOverride(key);
                      }
                    }}
                  >
                    {/* Subtle halo ring (active only) */}
                    {isActive && (
                      <circle cx={pillar.x} cy={pillar.y} r="52" className="cp-node-halo" />
                    )}

                    {/* White disc */}
                    <circle cx={pillar.x} cy={pillar.y} r="38" className="cp-node-disc" />

                    {/* Icon (centred) */}
                    <g
                      transform={`translate(${pillar.x - 11}, ${pillar.y - 11})`}
                      className="cp-node-icon"
                    >
                      {pillar.icon}
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* ── Active milestone text ── */}
            <div className="cp-content" aria-live="polite">
              {currentPillar && (
                <div key={currentPillar.id} className="cp-stage">
                  {/* Eyebrow: fade + letter-spacing expand */}
                  <div className="cp-reveal-line">
                    <span className="cp-stage-eyebrow cp-anim-eyebrow">
                      {currentPillar.number}&nbsp;·&nbsp;{currentPillar.badge}
                    </span>
                  </div>

                  {/* Title: clipped slide-up reveal */}
                  <div className="cp-reveal-line">
                    <h3 className="cp-stage-title cp-anim-title">
                      {currentPillar.title}
                    </h3>
                  </div>

                  {/* Description: blur-to-clear fade */}
                  <p className="cp-stage-text cp-anim-body">
                    {currentPillar.statement}
                  </p>

                  {/* Rule: draw left-to-right */}
                  <div className="cp-stage-rule cp-anim-rule" aria-hidden="true" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
