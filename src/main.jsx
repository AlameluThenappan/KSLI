import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './styles.css';
import './navbar.css';
import './brand.css';

// Brand Assets
import ksliLogo from './assets/branding/ksli-logo.png';
import ceewLogo from '../assets/CEEW.png';
import earthonomicLogo from '../assets/Earthonomic Engineers.png';
import salzerLogo from '../assets/Salzer.png';
import schneiderLogo from '../assets/Schneider Electric.png';
import sierraLogo from '../assets/Sierra.png';
import edfLogo from '../assets/Environmental Defense Fund.png';
import kisanLogo from '../assets/Kisan Konnect.png';
import mobitechLogo from '../assets/Mobitech Wireless Solutions.png';
import nddbLogo from '../assets/NDDB Mrida Limited.png';
import csaLogo from '../assets/Centre for Sustainable Agriculture.png';
import bnhsLogo from '../assets/BNHS India.png';
import naturalistLogo from '../assets/The Naturalist School.png';
import zooOutreachLogo from '../assets/Zoo Outreach Organisation.png';
import aTreeLogo from '../assets/a tree.png';
import wwfLogo from '../assets/WWF.png';
import igbcLogo from '../assets/IGBC.png';
import nicmarLogo from '../assets/NICMAR.png';
import aurovilleLogo from '../assets/Auroville Botanical Gardens.png';
import udriLogo from '../assets/Urban Design Research Institute.png';
import biomeLogo from '../assets/Biome Environmental.png';
import thannalLogo from '../assets/thannal.png';
import sccaImg from '../assets/SCCA.webp';

// Pages & Components
import AcademicPrograms from './pages/AcademicPrograms.jsx';
import ThrustAreaDetail from './pages/ThrustAreaDetail.jsx';
import Sustainability from './pages/Sustainability.jsx';
import Livelihood from './pages/Livelihood.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import DedicatedFormPage from './pages/DedicatedFormPage.jsx';
import TeamMemberProfile from './pages/TeamMemberProfile.jsx';
import { AdminEntry, AdminProtectedDashboard } from './pages/Admin.jsx';
import Manage from './pages/Manage.jsx';
import Domains from './pages/Domains.jsx';
import TallImageCard from './components/TallImageCard.jsx';
import OurWorkPage from './pages/OurWorkPage.jsx';
import Outreach from './pages/Outreach.jsx';
import HomeHeroSlider from './components/HomeHeroSlider.jsx';
import HomeTeamSection from './components/HomeTeamSection.jsx';
import CorePurposeSection from './components/CorePurposeSection.jsx';
import { navConfig } from './data/navConfig.js';

const img = {
  sustainability: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0aCfPGhwkzRiq7INx_Ku7YGgODgysXSucL-W3k7qk9eu_kloM62NV55XdkMPM0iL8AiD-CZLk_R24QathZPnOboweQPs-OYzDuOp0l9-TaiwqFTJKMS2h9DdlHpaobN9gkQ6WLpG0HmdDLV_ugP2Fx9hk1fttB50b3nebFXo0gBwsLpLN9GHLlFRXS9AkjOpa301BU1QPfYRc2zBCqvfYxUaZNh61mmit4jwdRxqzoOvPsfDmbToulw',
  pathway: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAltNZbzl24YOhTpyttO8MN3RtWjYr-alPnC9UZze6fpMLYgP7ErFYMDI02fNXQqeuuO2J_7fuc4cHqS7AoFxoMawEioD_qgxCw-QrED4P2FZfSrejylmvv3IwZy2qHGmLApJK8CRPO6vzjSlD3eS0ZZphrqUUfnqa7bRCn0KMJPT_42IeDN0Izvr4d00FaRlu6bFwiB9jtFPrqdV3oxLMxyRXh7zpQeMevtVjKc9-gbxBa9tUViiG0aQ'
};

function Header() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const headerRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const location = useLocation();

  const close = () => {
    setMobile(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  };

  useEffect(() => {
    close();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (activeDropdown) setActiveDropdown(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseEnter = (itemId) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleTriggerClick = (e, item) => {
    if (item.hasDropdown) {
      if (window.innerWidth >= 1200) {
        if (activeDropdown === item.id) {
          setActiveDropdown(null);
        } else {
          setActiveDropdown(item.id);
        }
      }
    } else {
      close();
    }
  };

  const isNoHeroPage =
    location.pathname.startsWith('/get-involved/') ||
    location.pathname.startsWith('/thrust-areas/') ||
    location.pathname.startsWith('/team/') ||
    location.pathname.startsWith('/admin');

  const centerNavItems = navConfig.filter((item) => !item.isCta);
  const ctaNavItem = navConfig.find((item) => item.isCta);

  return (
    <header
      className={`site-header ${scrolled ? 'scrolled' : ''} ${isNoHeroPage ? 'nav-blue-solid nav-mild-blue' : ''}`}
      ref={headerRef}
    >
      <nav className="nav" aria-label="Main navigation">
        {/* Left Zone: KSLI Logo */}
        <div className="nav-left-zone">
          <Link className="brand" to="/" onClick={close} aria-label="Kumaraguru Sustainability and Livelihood Institute">
            <img src={ksliLogo} alt="Kumaraguru Sustainability and Livelihood Institute" width="275" height="52" />
          </Link>
        </div>

        {/* Center Zone: 4 Page Links (Home, Our Work, Education, Outreach) */}
        <div className="nav-center-zone">
          {centerNavItems.map((item) => {
            const isActive = item.activeCheck
              ? item.activeCheck(location.pathname)
              : item.exact
                ? location.pathname === item.to
                : location.pathname.startsWith(item.to);

            const isOpen = activeDropdown === item.id;

            if (item.hasDropdown && item.items) {
              return (
                <div
                  key={item.id}
                  className={`nav-trigger-wrapper ${isOpen ? 'is-open' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.to}
                    onClick={(e) => handleTriggerClick(e, item)}
                    className={`nav-link-item ${isActive ? 'active' : ''}`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <svg
                      className="nav-trigger-chevron"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M1 1.25L5 4.75L9 1.25" />
                    </svg>
                  </Link>

                  {/* Dropdown Panel with Hover Bridge */}
                  <div
                    className="nav-dropdown-menu"
                    role="menu"
                    aria-label={`${item.label} destinations`}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.items.map((sub) => {
                      const isSubActive = sub.to.includes('#')
                        ? location.pathname + location.hash === sub.to
                        : location.pathname === sub.to;

                      return (
                        <Link
                          key={sub.id}
                          to={sub.to}
                          onClick={close}
                          className={`nav-dropdown-item ${isSubActive ? 'is-active' : ''}`}
                          role="menuitem"
                        >
                          <span className="nav-dropdown-item-title">{sub.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.to}
                onClick={close}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Zone: Visually Distinct Get Involved CTA Button */}
        <div className="nav-right-zone">
          {ctaNavItem && (
            <Link
              to={ctaNavItem.to}
              onClick={close}
              className={`nav-cta-button ${location.pathname.startsWith(ctaNavItem.to) ? 'active' : ''}`}
            >
              {ctaNavItem.label}
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? '✕' : '☰'}
        </button>

        {/* Mobile Drawer */}
        <div className={`nav-links ${mobile ? 'show' : ''}`}>
          <div className="nav-mobile-drawer-body">
            {navConfig.map((item) => {
              const isActive = item.activeCheck
                ? item.activeCheck(location.pathname)
                : item.exact
                  ? location.pathname === item.to
                  : location.pathname.startsWith(item.to);

              if (item.hasDropdown && item.items) {
                const isAccordionOpen = mobileAccordion === item.id;
                return (
                  <div key={item.id} className="nav-mobile-accordion">
                    <button
                      type="button"
                      className={`nav-mobile-accordion-trigger ${isAccordionOpen ? 'is-open' : ''}`}
                      onClick={() => setMobileAccordion(isAccordionOpen ? null : item.id)}
                      aria-expanded={isAccordionOpen}
                    >
                      <span>{item.label}</span>
                      <span className={`nav-mobile-chevron ${isAccordionOpen ? 'is-open' : ''}`} aria-hidden="true">▾</span>
                    </button>
                    {isAccordionOpen && (
                      <div className="nav-mobile-accordion-content">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.to}
                            onClick={close}
                            className="nav-mobile-sublink"
                          >
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={close}
                  className={`nav-mobile-link ${item.isCta ? 'nav-cta-button' : ''} ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand" to="/" style={{ color: '#fff', fontSize: '20px', fontWeight: 800, textDecoration: 'none' }}>
            KSLI
          </Link>
          <p style={{ maxWidth: '340px', marginTop: '10px' }}>
            Kumaraguru Sustainability and Livelihood Institute — Consolidating, leading, and scaling sustainability and livelihood initiatives across research, education, entrepreneurship, and community transformation.
          </p>
          <p style={{ marginTop: '12px', fontSize: '12.5px', opacity: 0.75 }}>
            Saravanampatti, Coimbatore, Tamil Nadu 641049
          </p>
        </div>

        <div className="footer-nav-col">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>Navigation</p>
          <Link to="/">Home</Link>
          <Link to="/our-work/research">Our Work</Link>
          <Link to="/education">Education</Link>
          <Link to="/outreach">Outreach</Link>
          <Link to="/get-involved">Get Involved</Link>
        </div>

        <div className="footer-nav-col">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>Domains &amp; CoEs</p>
          <Link to="/domains/sustainability">Sustainability Domain</Link>
          <Link to="/domains/livelihood">Livelihood Domain</Link>
          <Link to="/domains">Domains Overview</Link>
          <div style={{ display: 'grid', gap: '6px', paddingTop: '6px', opacity: 0.8, fontSize: '12.5px' }}>
            <span>CoE – Dairy</span>
            <span>CoE – Sugarcane</span>
            <span>CoE – Social Development</span>
          </div>
        </div>

        <div className="footer-nav-col">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>Action &amp; Connect</p>
          <Link to="/get-involved">Join Platform</Link>
          <Link to="/get-involved/volunteer">Volunteer</Link>
          <Link to="/get-involved/student-internship">Student Internships</Link>
          <Link to="/get-involved/industry-csr-partnership">CSR Collaboration</Link>
          <Link to="/get-involved/contact">Contact Secretariat</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div>© 2026 Kumaraguru Sustainability and Livelihood Institute. All rights reserved.</div>
        <div>People · Nature · Livelihoods for a Sustainable Future</div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  const { pathname } = useLocation();
  if (pathname.startsWith('/manage')) return <main>{children}</main>;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function SectionHeading({ eyebrow, title, children, center = false }) {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function EntryCard({ title, type = 'RESEARCH', text = 'Content details will be added.', location, image, to = '/our-work/events' }) {
  return (
    <TallImageCard
      title={title}
      tag={type}
      desc={text}
      location={location}
      image={image}
      to={to}
    />
  );
}

function CtaCard({ title, text, to, image }) {
  const content = (
    <>
      <span style={{ fontSize: '28px', color: '#8CC2FC', display: 'block', marginBottom: '8px' }}>⌁</span>
      <h3>{title}</h3>
      <p>{text}</p>
      {to && <strong>Explore domain →</strong>}
    </>
  );
  return to ? (
    <Link
      to={to}
      className="cta-card"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(10, 42, 92, 0.94), rgba(10, 42, 92, 0.25)), url(${image})`
      }}
    >
      {content}
    </Link>
  ) : (
    <div
      className="cta-card"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(10, 42, 92, 0.94), rgba(10, 42, 92, 0.25)), url(${image})`
      }}
    >
      {content}
    </div>
  );
}

function LogoGrid({ title = 'Our Collaborators & Research Partners', categories }) {
  if (!categories) return null;
  return (
    <section>
      <SectionHeading title={title} center={true} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3
              style={{
                marginBottom: '14px',
                color: '#1856A5',
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              {cat.name}
            </h3>
            <div className="marquee-container">
              <div className="marquee-track">
                <div className="marquee-group">
                  {cat.partners.map((p) => (
                    <div
                      className="logo-tile"
                      style={{
                        minHeight: '75px',
                        minWidth: '180px',
                        border: 0
                      }}
                      key={p.name || p}
                    >
                      {p.logo ? (
                        <img
                          src={p.logo}
                          alt={p.name}
                          style={{ maxHeight: '52px', maxWidth: '100%', objectFit: 'contain' }}
                          loading="lazy"
                        />
                      ) : (
                        p.name || p
                      )}
                    </div>
                  ))}
                </div>
                <div className="marquee-group" aria-hidden="true">
                  {cat.partners.map((p) => (
                    <div
                      className="logo-tile"
                      style={{
                        minHeight: '75px',
                        minWidth: '180px',
                        border: 0
                      }}
                      key={(p.name || p) + '-dup'}
                    >
                      {p.logo ? (
                        <img
                          src={p.logo}
                          alt={p.name}
                          style={{ maxHeight: '52px', maxWidth: '100%', objectFit: 'contain' }}
                          loading="lazy"
                        />
                      ) : (
                        p.name || p
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────────────────────────
   HOMEPAGE (Restructured strictly in requested order)
   Section 1: Hero video slider
   Section 2: KSLI impact statistics (on bottom of slider)
   Section 3: Navigation to two domains
   Section 4: Core purpose semicircle (Vision / Mission / Purpose)
   Section 5: Latest Events
   Section 6: Team Members
   Section 7: Partners
   ───────────────────────────────────────────────────────────── */

function Home() {
  const partnerCategories = [
    {
      name: 'Resource Efficiency & Clean Energy',
      partners: [
        { name: 'CEEW', logo: ceewLogo },
        { name: 'Schneider Electric', logo: schneiderLogo },
        { name: 'Sierra', logo: sierraLogo },
        { name: 'Earthonomic Engineers', logo: earthonomicLogo },
        { name: 'Salzer', logo: salzerLogo }
      ]
    },
    {
      name: 'Sustainable Agriculture & Rural Enterprise',
      partners: [
        { name: 'Environmental Defense Fund', logo: edfLogo },
        { name: 'Kisan Konnect', logo: kisanLogo },
        { name: 'Mobitech Wireless Solutions', logo: mobitechLogo },
        { name: 'NDDB Mrida Limited', logo: nddbLogo },
        { name: 'Centre for Sustainable Agriculture', logo: csaLogo }
      ]
    },
    {
      name: 'Nature Conservation & Biodiversity',
      partners: [
        { name: 'BNHS India', logo: bnhsLogo },
        { name: 'The Naturalist School', logo: naturalistLogo },
        { name: 'Zoo Outreach Organisation', logo: zooOutreachLogo },
        { name: 'a tree', logo: aTreeLogo },
        { name: 'WWF', logo: wwfLogo }
      ]
    },
    {
      name: 'Green Buildings & Human Settlements',
      partners: [
        { name: 'IGBC', logo: igbcLogo },
        { name: 'NICMAR', logo: nicmarLogo },
        { name: 'Auroville Botanical Gardens', logo: aurovilleLogo },
        { name: 'Urban Design Research Institute', logo: udriLogo },
        { name: 'Biome Environmental', logo: biomeLogo },
        { name: 'thannal', logo: thannalLogo }
      ]
    }
  ];

  return (
    <>
      {/* SECTION 1 & 2: HERO VIDEO SLIDER + IMPACT STATISTICS */}
      <HomeHeroSlider />

      {/* SECTION 3: NAVIGATION TO TWO DOMAINS */}
      <section className="section muted" style={{ background: '#EEF4FC' }}>
        <div className="shell">
          <SectionHeading eyebrow="Primary Domains" title="Two Domains. Real Solutions." center={true}>
            Explore KSLI's core verticals advancing environmental stewardship and rural prosperity.
          </SectionHeading>
          <div className="cards-2">
            <CtaCard
              title="Sustainability Initiatives"
              text="Advancing resource efficiency, sustainable agriculture, nature conservation, and sustainable human settlements through applied research and green infrastructure."
              to="/domains/sustainability"
              image={img.sustainability}
            />
            <CtaCard
              title="Livelihood Development"
              text="Strengthening farm-based, off-farm, and non-farm livelihoods through capacity building, entrepreneurship, and market linkages."
              to="/domains/livelihood"
              image={img.pathway}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PURPOSE SEMICIRCLE (VISION · MISSION · PURPOSE) */}
      <CorePurposeSection />

      {/* SECTION 5: LATEST EVENTS */}
      <section className="section shell" id="events" style={{ scrollMarginTop: '100px' }}>
        <SectionHeading title="Latest Flagship Initiatives" eyebrow="Updates & Conclaves">
          Recent flagship events, projects, and research breakthroughs across Tamil Nadu.
        </SectionHeading>
        <div className="tall-image-grid tall-image-grid-4">
          <EntryCard
            title="Dairy Yatra: Immersion"
            type="LIVELIHOOD EVENT"
            location="Western Tamil Nadu"
            text="Connecting dairy farmers with automated chilling technologies and milk cooperatives."
            image="https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80"
            to="/our-work/events"
          />
          <EntryCard
            title="Climate Action Conclave (SCCA)"
            type="SUSTAINABILITY EVENT"
            location="Coimbatore"
            text="Over 600 students prototyping campus decarbonization frameworks and renewable micro-grids."
            image={sccaImg}
            to="/our-work/events"
          />
          <EntryCard
            title="Watershed Resilience Study"
            type="APPLIED RESEARCH"
            location="Bhavani Basin"
            text="A ~₹5 crore grant assessing micro-catchment habitats and hydrological resilience."
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80"
            to="/our-work/research"
          />
          <EntryCard
            title="Urban Wetland Restoration"
            type="DEVELOPMENT PROJECT"
            location="Singanallur Lake"
            text="Revitalizing wetlands through bio-treatment islands and citizen biodiversity audits."
            image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=80"
            to="/our-work/projects"
          />
        </div>
      </section>

      {/* SECTION 6: TEAM MEMBERS (BROUGHT FROM ABOUT PAGE) */}
      <HomeTeamSection />

      {/* SECTION 7: PARTNERS (COLLABORATORS MARQUEE) */}
      <section className="section shell">
        <LogoGrid title="Our Collaborators & Research Partners" categories={partnerCategories} />
      </section>
    </>
  );
}

function NotFound() {
  return (
    <div style={{ paddingTop: '140px', textAlign: 'center', paddingBottom: '100px' }}>
      <div className="shell">
        <h1 style={{ fontSize: '48px', color: '#0A2A5C' }}>404 - Page Not Found</h1>
        <p style={{ color: '#4F617D', marginBottom: '24px' }}>The requested route does not exist.</p>
        <Link to="/" className="primary">Return to Home</Link>
      </div>
    </div>
  );
}

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = 'KSLI';
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Layout>
        <Routes>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Home />} />

          {/* Section 4: Our Work Pages */}
          <Route path="/our-work" element={<Navigate to="/our-work/research" replace />} />
          <Route path="/our-work/research" element={<OurWorkPage defaultCategory="research" />} />
          <Route path="/our-work/projects" element={<OurWorkPage defaultCategory="projects" />} />
          <Route path="/our-work/events" element={<OurWorkPage defaultCategory="events" />} />
          <Route path="/our-work/initiatives" element={<OurWorkPage defaultCategory="initiatives" />} />
          <Route path="/our-work/:category" element={<OurWorkPage />} />

          {/* Section 5: Education (Single page with sub-anchors) */}
          <Route path="/education" element={<AcademicPrograms />} />
          <Route path="/learning" element={<AcademicPrograms />} />
          <Route path="/academic-programs" element={<AcademicPrograms />} />

          {/* Section 6: Outreach Page */}
          <Route path="/outreach" element={<Outreach />} />

          {/* Section 7: Get Involved & Forms */}
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/get-involved/volunteer" element={<DedicatedFormPage formKey="volunteer" />} />
          <Route path="/get-involved/student-internship" element={<DedicatedFormPage formKey="student-internship" />} />
          <Route path="/get-involved/academic-collaboration" element={<DedicatedFormPage formKey="academic-collaboration" />} />
          <Route path="/get-involved/industry-csr-partnership" element={<DedicatedFormPage formKey="industry-csr-partnership" />} />
          <Route path="/get-involved/contact" element={<DedicatedFormPage formKey="contact" />} />
          <Route path="/get-involved/internships" element={<Navigate to="/get-involved/student-internship" replace />} />
          <Route path="/get-involved/internship" element={<Navigate to="/get-involved/student-internship" replace />} />
          <Route path="/get-involved/partnerships" element={<Navigate to="/get-involved/industry-csr-partnership" replace />} />
          <Route path="/get-involved/csr" element={<Navigate to="/get-involved/industry-csr-partnership" replace />} />
          <Route path="/get-involved/collaboration" element={<Navigate to="/get-involved/academic-collaboration" replace />} />
          <Route path="/contact" element={<Navigate to="/get-involved/contact" replace />} />

          {/* Section 8: About page removed & redirected to Home */}
          <Route path="/about" element={<Navigate to="/#purpose" replace />} />
          <Route path="/about/team/:id" element={<TeamMemberProfile />} />
          <Route path="/team/:id" element={<TeamMemberProfile />} />

          {/* Dedicated Domains & Thrust Areas */}
          <Route path="/domains" element={<Domains />} />
          <Route path="/domains/sustainability" element={<Sustainability />} />
          <Route path="/domains/livelihood" element={<Livelihood />} />
          <Route path="/sustainability" element={<Navigate to="/domains/sustainability" replace />} />
          <Route path="/livelihood" element={<Navigate to="/domains/livelihood" replace />} />
          <Route path="/thrust-areas/:slug" element={<ThrustAreaDetail />} />
          <Route path="/thrust-areas" element={<Navigate to="/thrust-areas/research-field-innovation" replace />} />

          {/* Research & Realities / Stories aliases */}
          <Route path="/research-realities" element={<Navigate to="/our-work/research" replace />} />
          <Route path="/resources" element={<Navigate to="/our-work/research" replace />} />
          <Route path="/stories" element={<Navigate to="/outreach" replace />} />

          {/* Admin & Management */}
          <Route path="/manage" element={<Manage />} />
          <Route path="/admin" element={<AdminEntry />} />
          <Route path="/admin/dashboard" element={<AdminProtectedDashboard />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
