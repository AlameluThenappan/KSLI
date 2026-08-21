import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../styles/AboutKSLI.css';

const thrustAreas = [
  ['01', 'Development Projects', 'Place-based initiatives that translate institutional intent into sustained community work.'],
  ['02', 'Research & Field Innovation', 'Applied inquiry and field innovation that inform practical, scalable solutions.'],
  ['03', 'Entrepreneurship Development', 'Entrepreneurship-focused pathways that create value across sustainability and livelihood ecosystems.'],
  ['04', 'Education & Capacity Building', 'Practice-oriented education and capacity building connected to real environmental and livelihood challenges.'],
];

const teamMembers = [
  { name: 'Keerthana', role: 'Role to be confirmed', category: 'Campus Sustainability' },
  { name: 'Jeevesh', role: 'Role to be confirmed', category: 'Campus Sustainability' },
  { name: 'Paramaguru', role: 'Role to be confirmed', category: 'Campus Sustainability' },
  { name: 'Dr Thanammal', role: 'Role to be confirmed', category: 'Dairy' },
  { name: 'Nethaji Subash', role: 'Program Management', category: 'Dairy' },
  { name: 'Kavin', role: 'Program Associate', category: 'Dairy' },
  { name: 'Arun Kumar', role: 'Field', category: 'Dairy' },
  { name: 'Bharani', role: 'Admin Support', category: 'Dairy' },
  { name: 'Mr Sezhian', role: 'Role to be confirmed', category: 'Farmer 360' },
  { name: 'Dr Gopi', role: 'Role to be confirmed', category: 'Farmer 360' },
  { name: 'Dr Sudhakar', role: 'Role to be confirmed', category: 'Farmer 360' },
  { name: 'Mr Amarendran', role: 'Role to be confirmed', category: 'Farmer 360' },
  { name: 'Ms Sangeetha', role: 'Role to be confirmed', category: 'Farmer 360' },
  { name: 'Dr Hemalatha', role: 'Role to be confirmed', category: 'Sugarcane' },
  { name: 'Boopathy', role: 'JRF', category: 'Sugarcane' },
  { name: 'Bhuvaneshwari', role: 'JRF', category: 'Sugarcane' },
  { name: 'Sujeeth', role: 'Field Coordinator', category: 'Sugarcane' },
  { name: 'Gokulraj', role: 'FC', category: 'Sugarcane' },
  { name: 'Shanthra', role: 'CEO', category: 'Farmer Producer Organization' },
  { name: 'Gowsika', role: 'Accountant', category: 'Farmer Producer Organization' },
  { name: 'Karthika', role: 'Extension Officer', category: 'Farmer Producer Organization' },
  { name: 'Nithya', role: 'Business Executive', category: 'Farmer Producer Organization' },
];
const teamFilters = ['All', 'Dairy', 'Sugarcane', 'Campus Sustainability', 'Farmer 360', 'Farmer Producer Organization'];

function ImagePlaceholder({ label, className = '' }) {
  return <div className={`aboutksli-image-placeholder ${className}`} role="img" aria-label={label}><span>{label}</span></div>;
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
  return <section ref={ref} className={`aboutksli-story ${reverse ? 'aboutksli-story--reverse' : ''}`}>
    <div className="shell aboutksli-story-grid">
      <ImagePlaceholder className="aboutksli-story-image aboutksli-reveal-image" label={imageLabel}/>
      <div className={`aboutksli-story-copy aboutksli-reveal-text aboutksli-reveal-text--${direction}`}>
        <p className="eyebrow teal">{eyebrow}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  </section>;
}

export default function AboutKSLI() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const carouselViewport = useRef(null);
  const visibleMembers = activeFilter === 'All' ? teamMembers : teamMembers.filter((member) => member.category === activeFilter);
  useEffect(() => {
    const updateStep = () => {
      const firstCard = carouselViewport.current?.querySelector('.aboutksli-person');
      if (firstCard) setCardStep(firstCard.getBoundingClientRect().width + 18);
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, [activeFilter]);
  const chooseFilter = (filter) => { setActiveFilter(filter); setCarouselIndex(0); };
  const moveCarousel = (direction) => setCarouselIndex((current) => Math.min(Math.max(current + direction, 0), Math.max(visibleMembers.length - 1, 0)));
  return <article className="aboutksli-page">
    <section className="aboutksli-hero">
      <ImagePlaceholder className="aboutksli-hero-image" label="HERO IMAGE PLACEHOLDER"/>
      <div className="aboutksli-hero-overlay"/>
      <div className="shell aboutksli-hero-content">
        <p className="eyebrow">About KSLI</p>
        <h1>Kumaraguru Sustainability and <span>Livelihood Institute</span></h1>
        <p>KSLI is a strategic institutional platform advancing sustainability and rural livelihoods through integrated research, practice-oriented education, entrepreneurship incubation, and long-term partnerships.</p>
      </div>
      <div className="aboutksli-scroll-cue" aria-hidden="true"><span>Scroll to explore</span><i/></div>
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
        <div className="aboutksli-thrust-heading"><h2>From knowledge to meaningful action.</h2><p>KSLI brings its work together through four connected areas of institutional focus.</p></div>
        <div className="aboutksli-thrust-grid">{thrustAreas.map(([number, title, description]) => <article className="aboutksli-thrust-card" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div>
    </section>

    <section className="aboutksli-team">
      <div className="aboutksli-team-shell">
        <div className="aboutksli-team-topline"><div><p className="eyebrow teal">Our Team</p><h2>The Faces Behind Our Mission</h2></div><div className="aboutksli-carousel-controls"><button type="button" aria-label="Previous team members" onClick={() => moveCarousel(-1)} disabled={carouselIndex === 0}>←</button><output aria-live="polite">{String(carouselIndex + 1).padStart(2, '0')}/{String(visibleMembers.length).padStart(2, '0')}</output><button type="button" aria-label="Next team members" onClick={() => moveCarousel(1)} disabled={carouselIndex >= visibleMembers.length - 1}>→</button></div></div>
        <div className="aboutksli-team-directory"><div className="aboutksli-team-filters" aria-label="Filter team members">{teamFilters.map((filter) => <button type="button" key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => chooseFilter(filter)}>{filter}</button>)}</div><div className="aboutksli-carousel-viewport" ref={carouselViewport}><div className="aboutksli-carousel-track" style={{ transform: `translateX(-${carouselIndex * cardStep}px)` }}>{visibleMembers.map((member) => <article className="aboutksli-person" key={`${member.category}-${member.name}`}><ImagePlaceholder label="TEAM PHOTO PLACEHOLDER"/><h3>{member.name}</h3><p>{member.role}</p></article>)}</div></div></div>
      </div>
    </section>

    <section className="aboutksli-cta"><div className="shell"><p className="eyebrow teal">KSLI</p><h2>Research. Learning. Partnership. Action.</h2><p>Explore how KSLI connects academic inquiry, field practice, and long-term collaboration.</p><Link className="primary" to="/sustainability">Explore Our Work <span>→</span></Link></div></section>
  </article>;
}
