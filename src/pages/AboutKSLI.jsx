import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../styles/AboutKSLI.css';

const thrustAreas = [
  ['01', 'Development Projects', 'Place-based initiatives that translate institutional intent into sustained community work.'],
  ['02', 'Research & Field Innovation', 'Applied inquiry and field innovation that inform practical, scalable solutions.'],
  ['03', 'Entrepreneurship Development', 'Entrepreneurship-focused pathways that create value across sustainability and livelihood ecosystems.'],
  ['04', 'Education & Capacity Building', 'Practice-oriented education and capacity building connected to real environmental and livelihood challenges.'],
];

const teams = [
  { name: 'Campus Sustainability', people: ['Keerthana', 'Jeevesh', 'Paramaguru'] },
  { name: 'Dairy', people: ['Dr Thanammal', 'Nethaji Subash - Program Management', 'Kavin - Program Associate', 'Arun Kumar - Field', 'Bharani - Admin Support'] },
  { name: 'Farmer 360', people: ['Mr Sezhian', 'Dr Gopi', 'Dr Sudhakar', 'Mr Amarendran', 'Ms Sangeetha'] },
  { name: 'Sugarcane', people: ['Dr Hemalatha', 'Boopathy - JRF', 'Bhuvaneshwari - JRF', 'Sujeeth - Field Coordinator', 'Gokulraj - FC'] },
  { name: 'Farmer Producer Organization', people: ['Shanthra - CEO', 'Gowsika - Accountant', 'Karthika - Extension Officer', 'Nithya - Business Executive'] },
];

function ImagePlaceholder({ label, className = '' }) {
  return <div className={`aboutksli-image-placeholder ${className}`} role="img" aria-label={label}><span>{label}</span></div>;
}

function RevealSection({ eyebrow, title, children, direction, imageLabel, reverse = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
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
      <div className="shell">
        <p className="eyebrow teal">Our Team</p>
        <div className="aboutksli-team-heading"><h2>People working across campus and communities.</h2><p>The current KSLI team spans campus sustainability, dairy, Farmer 360, sugarcane, and farmer producer organization work.</p></div>
        <div className="aboutksli-team-groups">{teams.map((team) => <section className="aboutksli-team-group" key={team.name}><h3>{team.name}</h3><div className="aboutksli-people">{team.people.map((person) => <article className="aboutksli-person" key={person}><ImagePlaceholder label="TEAM PHOTO PLACEHOLDER"/><p>{person}</p></article>)}</div></section>)}</div>
      </div>
    </section>

    <section className="aboutksli-cta"><div className="shell"><p className="eyebrow teal">KSLI</p><h2>Research. Learning. Partnership. Action.</h2><p>Explore how KSLI connects academic inquiry, field practice, and long-term collaboration.</p><Link className="primary" to="/sustainability">Explore Our Work <span>→</span></Link></div></section>
  </article>;
}
