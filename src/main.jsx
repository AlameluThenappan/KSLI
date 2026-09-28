import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './styles.css';
import './navbar.css';
import './brand.css';
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
import heroVideo from '../assets/Video Project 9.mp4';

// Pages
import AboutKSLI from './pages/AboutKSLI.jsx';
import AcademicPrograms from './pages/AcademicPrograms.jsx';
import Domains from './pages/Domains.jsx';
import Sustainability from './pages/Sustainability.jsx';
import Livelihood from './pages/Livelihood.jsx';
import Resources from './pages/Resources.jsx';
import Stories from './pages/Stories.jsx';
import ResearchRealities from './pages/ResearchRealities.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import DedicatedFormPage from './pages/DedicatedFormPage.jsx';
import TeamMemberProfile from './pages/TeamMemberProfile.jsx';
import Manage from './pages/Manage.jsx';
import TallImageCard from './components/TallImageCard.jsx';
import { navConfig } from './data/navConfig.js';
import FloatingNavPanel from './components/FloatingNavPanel.jsx';

const img = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcrwWa2o5nAozqqQvUmytqo_H5g2TNutO1HQaexxVhNVGMzd3EHQZtW5NrJ4Cau1x28EfnmfV7FLRNk_crjxfahtdYIl39mroK_JR1pn-2xZtPD8Q5o8RzXmyu6SuAx0dhw0Yl8nVgSXWreMpqyX_b77lBnQvpjfmG6KyVtScBb_v3DpyQjGkP0CIjm1sZeLkJKX-5Oy6ibBeWkEKIOk8iga-55mgEpkqn4m3Ay4DVhgnYc2cZNOQ0Vw',
  sustainability: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0aCfPGhwkzRiq7INx_Ku7YGgODgysXSucL-W3k7qk9eu_kloM62NV55XdkMPM0iL8AiD-CZLk_R24QathZPnOboweQPs-OYzDuOp0l9-TaiwqFTJKMS2h9DdlHpaobN9gkQ6WLpG0HmdDLV_ugP2Fx9hk1fttB50b3nebFXo0gBwsLpLN9GHLlFRXS9AkjOpa301BU1QPfYRc2zBCqvfYxUaZNh61mmit4jwdRxqzoOvPsfDmbToulw',
  pathway: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAltNZbzl24YOhTpyttO8MN3RtWjYr-alPnC9UZze6fpMLYgP7ErFYMDI02fNXQqeuuO2J_7fuc4cHqS7AoFxoMawEioD_qgxCw-QrED4P2FZfSrejylmvv3IwZy2qHGmLApJK8CRPO6vzjSlD3eS0ZZphrqUUfnqa7bRCn0KMJPT_42IeDN0Izvr4d00FaRlu6bFwiB9jtFPrqdV3oxLMxyRXh7zpQeMevtVjKc9-gbxBa9tUViiG0aQ'
};

function Header() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePanelId, setActivePanelId] = useState(null);
  const [triggerRect, setTriggerRect] = useState(null);
  const [navRect, setNavRect] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [mobileNestedAccordion, setMobileNestedAccordion] = useState(null);

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const triggerRefs = useRef({});
  const leaveTimerRef = useRef(null);
  const location = useLocation();

  // Preload panel images so switching items never flashes
  useEffect(() => {
    navConfig.forEach((item) => {
      item.items?.forEach((sub) => {
        if (sub.image) {
          const img = new Image();
          img.src = sub.image;
        }
      });
    });
  }, []);

  const close = () => {
    setMobile(false);
    setActivePanelId(null);
    setMobileAccordion(null);
    setMobileNestedAccordion(null);
  };

  // Close menus on route navigation
  useEffect(() => {
    close();
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (activePanelId) setActivePanelId(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activePanelId]);

  // Click outside to close floating panel
  useEffect(() => {
    if (!activePanelId) return;
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActivePanelId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activePanelId]);

  // Update measurements of active trigger and nav bar
  const updateMeasurements = (id) => {
    if (navRef.current && triggerRefs.current[id]) {
      setNavRect(navRef.current.getBoundingClientRect());
      setTriggerRect(triggerRefs.current[id].getBoundingClientRect());
    }
  };

  const handleMouseEnterTrigger = (item) => {
    if (!item.items) {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = setTimeout(() => {
        setActivePanelId(null);
      }, 120);
      return;
    }
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    updateMeasurements(item.id);
    setActivePanelId(item.id);
  };

  const handleMouseLeaveTrigger = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setActivePanelId(null);
    }, 150);
  };

  const handlePanelMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handlePanelMouseLeave = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setActivePanelId(null);
    }, 150);
  };

  const handleTriggerClick = (e, item) => {
    if (item.items) {
      if (window.innerWidth >= 1200) {
        if (activePanelId === item.id) {
          setActivePanelId(null);
        } else {
          updateMeasurements(item.id);
          setActivePanelId(item.id);
        }
      }
    } else {
      close();
    }
  };

  const activePanelConfig = navConfig.find((item) => item.id === activePanelId);
  const isHome = location.pathname === '/';

  const centerNavItems = navConfig.filter((item) => item.id !== 'get-involved' && !item.isCta);
  const ctaNavItem = navConfig.find((item) => item.id === 'get-involved' || item.isCta);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${isHome ? 'transparent-hero' : ''}`} ref={headerRef}>
      <nav className="nav" ref={navRef} aria-label="Main navigation">
        {/* Left Zone: KSLI Logo */}
        <div className="nav-left-zone">
          <Link className="brand" to="/" onClick={close} aria-label="Kumaraguru Sustainability and Livelihood Institute">
            <img src={ksliLogo} alt="Kumaraguru Sustainability and Livelihood Institute" width="275" height="52" />
          </Link>
        </div>

        {/* Center Zone: Page Links (Truly centered in the bar) */}
        <div className="nav-center-zone">
          {centerNavItems.map((item) => {
            const isActive = item.activeCheck
              ? item.activeCheck(location.pathname)
              : item.exact
                ? location.pathname === item.to
                : location.pathname.startsWith(item.to);

            const hasPanel = Boolean(item.items && item.items.length > 0);
            const isOpen = activePanelId === item.id;

            if (hasPanel) {
              return (
                <div
                  key={item.id}
                  className={`nav-trigger-wrapper ${isOpen ? 'is-open' : ''}`}
                  ref={(el) => (triggerRefs.current[item.id] = el)}
                  onMouseEnter={() => handleMouseEnterTrigger(item)}
                  onMouseLeave={handleMouseLeaveTrigger}
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
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.to}
                onClick={close}
                onMouseEnter={() => handleMouseEnterTrigger(item)}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Zone: Prominent Get Involved Button */}
        <div className="nav-right-zone">
          {ctaNavItem && (() => {
            const isActive = ctaNavItem.activeCheck
              ? ctaNavItem.activeCheck(location.pathname)
              : ctaNavItem.exact
                ? location.pathname === ctaNavItem.to
                : location.pathname.startsWith(ctaNavItem.to);

            const hasPanel = Boolean(ctaNavItem.items && ctaNavItem.items.length > 0);
            const isOpen = activePanelId === ctaNavItem.id;

            if (hasPanel) {
              return (
                <div
                  key={ctaNavItem.id}
                  className={`nav-trigger-wrapper ${isOpen ? 'is-open' : ''}`}
                  ref={(el) => (triggerRefs.current[ctaNavItem.id] = el)}
                  onMouseEnter={() => handleMouseEnterTrigger(ctaNavItem)}
                  onMouseLeave={handleMouseLeaveTrigger}
                >
                  <Link
                    to={ctaNavItem.to}
                    onClick={(e) => handleTriggerClick(e, ctaNavItem)}
                    className={`nav-cta-button ${isActive ? 'active' : ''}`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{ctaNavItem.label}</span>
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
                </div>
              );
            }

            return (
              <Link
                key={ctaNavItem.id}
                to={ctaNavItem.to}
                onClick={close}
                className={`nav-cta-button ${isActive ? 'active' : ''}`}
              >
                {ctaNavItem.label}
              </Link>
            );
          })()}
        </div>

        {/* Mobile Toggle Button (< 1024px) */}
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? '✕' : '☰'}
        </button>

        {/* Mobile navigation drawer (< 1024px) */}
        <div className={`nav-links ${mobile ? 'show' : ''}`}>
          <div className="nav-mobile-drawer-body">
            {navConfig.map((item) => {
              const isActive = item.activeCheck
                ? item.activeCheck(location.pathname)
                : item.exact
                  ? location.pathname === item.to
                  : location.pathname.startsWith(item.to);

              if (!item.items) {
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
              }

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
                      <Link
                        to={item.to}
                        onClick={close}
                        className="nav-mobile-link"
                        style={{ fontWeight: 700, color: '#1856A5' }}
                      >
                        {item.label} Overview →
                      </Link>

                      {item.layoutType === 'two-level' ? (
                        item.items.map((sub) => {
                          const isNestedOpen = mobileNestedAccordion === sub.id;
                          return (
                            <div key={sub.id} className="nav-mobile-nested-accordion">
                              <button
                                type="button"
                                className="nav-mobile-nested-trigger"
                                onClick={() => setMobileNestedAccordion(isNestedOpen ? null : sub.id)}
                                aria-expanded={isNestedOpen}
                              >
                                <span>{sub.label}</span>
                                <span className={`nav-mobile-chevron ${isNestedOpen ? 'is-open' : ''}`} aria-hidden="true">▾</span>
                              </button>
                              {isNestedOpen && (
                                <div className="nav-mobile-nested-content">
                                  <Link to={sub.to} onClick={close} className="nav-mobile-link">
                                    {sub.label} Overview →
                                  </Link>
                                  {sub.chips?.map((chip) => (
                                    <Link key={chip.label} to={chip.to} onClick={close} className="nav-mobile-link">
                                      {chip.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        item.items.map((sub) => (
                          <Link key={sub.id} to={sub.to} onClick={close} className="nav-mobile-link">
                            {sub.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Large Floating morphing mega-menu panel (desktop, centered under navbar) */}
      {!mobile && (
        <FloatingNavPanel
          isOpen={Boolean(activePanelId)}
          panelConfig={activePanelConfig}
          triggerRect={triggerRect}
          onClose={() => setActivePanelId(null)}
          onMouseEnter={handlePanelMouseEnter}
          onMouseLeave={handlePanelMouseLeave}
        />
      )}
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
          <p style={{ marginTop: '12px', fontSize: '12px', opacity: 0.7 }}>
            Saravanampatti, Coimbatore, Tamil Nadu 641049
          </p>
        </div>

        <div className="footer-nav-col">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>Navigation</p>
          <Link to="/">Home</Link>
          <Link to="/about">About KSLI</Link>
          <Link to="/domains">Domains</Link>
          <Link to="/learning">Learning</Link>
          <Link to="/research-realities">Research &amp; Realities</Link>
        </div>

        <div className="footer-nav-col">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>Domains & CoEs</p>
          <Link to="/domains/sustainability">Sustainability</Link>
          <Link to="/domains/livelihood">Livelihood</Link>
          <Link to="/domains#thrust-areas">Thrust Areas</Link>
          <div style={{ display: 'grid', gap: '6px', paddingTop: '6px', opacity: 0.8, fontSize: '12.5px' }}>
            <span>CoE – Dairy</span>
            <span>CoE – Sugarcane</span>
            <span>CoE – Social Development</span>
          </div>
        </div>

        <div className="footer-nav-col">
          <p className="eyebrow" style={{ color: '#8CC2FC' }}>Action & Connect</p>
          <Link to="/get-involved">Get Involved</Link>
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

function CountUpStat({ number, label, icon }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = React.useRef();

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const target = parseInt(number.replace(/\D/g, ''));
    if (!target) return;
    let startTimestamp = null;
    const duration = 1500;
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
  }, [inView, number]);

  const displayValue = parseInt(number.replace(/\D/g, ''))
    ? `${count}${number.replace(/[0-9]/g, '')}`
    : number;

  return (
    <div ref={ref} className={`stat ${inView ? 'animate' : ''}`}>
      <span>{icon}</span>
      <strong>{displayValue}</strong>
      <small>{label}</small>
    </div>
  );
}

function Stats() {
  const items = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

  return (
    <section className="stats">
      <div className="shell stats-grid">
        {items.map((item) => (
          <CountUpStat key={item.label} icon={item.icon} number={item.number} label={item.label} />
        ))}
      </div>
    </section>
  );
}

function EntryCard({ title, type = 'RESEARCH', text = 'Content details will be added.', location, image, to = '/domains' }) {
  const defaultImages = {
    'LIVELIHOOD EVENT': 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80',
    'SUSTAINABILITY EVENT': 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&auto=format&fit=crop&q=80',
    'APPLIED RESEARCH': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    'DEVELOPMENT PROJECT': 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=80',
    'RESEARCH': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    'CENTRE OF EXCELLENCE': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80'
  };

  const cardImg = image || defaultImages[type] || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80';

  return (
    <TallImageCard
      title={title}
      tag={type}
      desc={text}
      location={location}
      image={cardImg}
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

function LogoGrid({ title = 'Our Partners', categories }) {
  if (categories) {
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
  return null;
}

function CorePurposeArch() {
  const [inView, setInView] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const nodes = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 0-9 9c0 4.5 3.5 8.2 8 8.9V22h2v-2.1c4.5-.7 8-4.4 8-8.9a9 9 0 0 0-9-9Z" />
          <path d="M12 6v8" />
        </svg>
      ),
      left: '4.68%',
      top: '57.74%',
      delay: '0.2s'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="4" />
          <path d="M17 11a3 3 0 1 0-2.8-4" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 19a4 4 0 0 0 5-3.5v-.5" />
        </svg>
      ),
      left: '28.87%',
      top: '9.37%',
      delay: '0.35s'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      left: '71.13%',
      top: '9.37%',
      delay: '0.5s'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1856A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      left: '95.31%',
      top: '57.74%',
      delay: '0.65s'
    }
  ];
  const dots = [
    { left: '14.65%', top: '29.3%' },
    { left: '50%', top: '0%' },
    { left: '85.35%', top: '29.3%' }
  ];

  return (
    <section className="section" ref={ref} style={{ padding: '80px 0 40px' }}>
      <div className={`arch-wrapper ${inView ? 'in-view' : ''}`}>
        <div className="arch-path">
          {nodes.map((node, i) => (
            <div
              className="arch-node"
              key={i}
              style={{
                left: node.left,
                top: node.top,
                transitionDelay: inView ? node.delay : '0s'
              }}
            >
              {node.icon}
            </div>
          ))}
          {dots.map((dot, i) => (
            <div className="arch-dot" key={i} style={{ left: dot.left, top: dot.top }} />
          ))}
        </div>
        <div className="arch-content">
          <span className="eyebrow" style={{ color: '#1856A5' }}>Institutional Mandate</span>
          <h2 className="core-purpose-title" style={{ color: '#0A2A5C', margin: '8px 0 14px' }}>
            Our Core Purpose
          </h2>
          <p style={{ color: '#4F617D', fontSize: '16px', lineHeight: 1.65 }}>
            KSLI is proposed as a strategic institutional platform to consolidate, lead, and scale sustainability- and livelihood-focused initiatives, aligning academic programs, research, partnerships, flagship events, and community engagement under a single governance and identity.
          </p>
        </div>
      </div>
    </section>
  );
}

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
      {/* VIDEO HERO */}
      <section className="home-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'rgba(24, 86, 165, 0.50)'
          }}
        />
        <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ maxWidth: '800px' }}>
            <p className="intro-label">Kumaraguru Sustainability and Livelihood Institute</p>
            <h1>Fostering a Sustainable Future through Knowledge and Action</h1>
            <p>
              Advancing sustainability and livelihoods through research, education, entrepreneurship, and community transformation.
            </p>
            <div className="actions">
              <Link className="primary" to="/domains">
                Explore KSLI Learning pathway→
              </Link>
              <Link className="btn-navy" to="/get-involved">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <Stats />

      {/* CORE PURPOSE ARCH */}
      <CorePurposeArch />

      {/* TWO DOMAINS SECTION */}
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

      {/* LATEST UPDATES & FLAGSHIP EVENTS */}
      <section className="section shell">
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
            to="/domains/livelihood#events"
          />
          <EntryCard
            title="Climate Action Conclave (SCCA)"
            type="SUSTAINABILITY EVENT"
            location="Coimbatore"
            text="Over 600 students prototyping campus decarbonization frameworks and renewable micro-grids."
            image="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&auto=format&fit=crop&q=80"
            to="/domains/sustainability#events"
          />
          <EntryCard
            title="Watershed Resilience Study"
            type="APPLIED RESEARCH"
            location="Bhavani Basin"
            text="A ~₹5 crore grant assessing micro-catchment habitats and hydrological resilience."
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80"
            to="/domains/sustainability#research"
          />
          <EntryCard
            title="Urban Wetland Restoration"
            type="DEVELOPMENT PROJECT"
            location="Singanallur Lake"
            text="Revitalizing wetlands through bio-treatment islands and citizen biodiversity audits."
            image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=80"
            to="/domains/sustainability#projects"
          />
        </div>
      </section>

      {/* COLLABORATORS MARQUEE */}
      <section className="section shell">
        <LogoGrid title="Our Collaborators & Research Partners" categories={partnerCategories} />
      </section>
    </>
  );
}

function Partners({ centres = false }) {
  return (
    <div style={{ paddingTop: '86px' }}>
      <header className="page-intro">
        <div className="shell">
          <p className="eyebrow">{centres ? 'Specialized Centres' : 'Partnership Ecosystem'}</p>
          <h1>{centres ? 'Centres of Excellence' : 'CoE & Partners'}</h1>
          <p>Working collaboratively with institutions, communities, and industry leaders to advance shared planetary goals.</p>
        </div>
      </header>
      <section className="section shell">
        {centres ? (
          <div className="tall-image-grid tall-image-grid-3">
            <EntryCard title="Centre of Excellence – Dairy" type="CENTRE OF EXCELLENCE" text="Driving productivity enhancement, clean milk hygiene, and youth dairy entrepreneurship." />
            <EntryCard title="Centre of Excellence – Sugarcane" type="CENTRE OF EXCELLENCE" text="Partnering with Sakthi Sugars to deliver precision N-balancing and soil carbon rejuvenation." />
            <EntryCard title="Centre of Excellence – Social Development" type="CENTRE OF EXCELLENCE" text="Anchoring community water projects, rural livelihoods, and social work fieldwork." />
          </div>
        ) : (
          <div className="cards-2">
            <Link to="/coe-partners/centres-of-excellence" className="btn-primary" style={{ padding: '24px', borderRadius: '18px', textAlign: 'center' }}>
              Centres of Excellence →
            </Link>
            <Link to="/about" className="btn-navy" style={{ padding: '24px', borderRadius: '18px', textAlign: 'center' }}>
              About KSLI Secretariat →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

function OurPartners() {
  return (
    <div style={{ paddingTop: '86px' }}>
      <header className="page-intro">
        <div className="shell">
          <p className="eyebrow">Institutional Network</p>
          <h1>Our Partners</h1>
          <p>Collaborating with industry leaders and academic institutions worldwide.</p>
        </div>
      </header>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ paddingTop: '100px', textAlign: 'center', paddingBottom: '100px' }}>
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
          {/* Main navigation routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutKSLI />} />
          {/* Dedicated Domain Routes */}
          <Route path="/domains" element={<Domains />} />
          <Route path="/domains/sustainability" element={<Sustainability />} />
          <Route path="/domains/livelihood" element={<Livelihood />} />

          {/* Other Main Navigation Routes */}
          <Route path="/learning" element={<AcademicPrograms />} />
          <Route path="/research-realities" element={<ResearchRealities />} />
          <Route path="/resources" element={<Navigate to="/research-realities" replace />} />
          <Route path="/stories" element={<Navigate to="/research-realities" replace />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/get-involved/volunteer" element={<DedicatedFormPage formKey="volunteer" />} />
          <Route path="/get-involved/student-internship" element={<DedicatedFormPage formKey="student-internship" />} />
          <Route path="/get-involved/academic-collaboration" element={<DedicatedFormPage formKey="academic-collaboration" />} />
          <Route path="/get-involved/industry-csr-partnership" element={<DedicatedFormPage formKey="industry-csr-partnership" />} />
          <Route path="/get-involved/contact" element={<DedicatedFormPage formKey="contact" />} />

          {/* Form aliases and redirects */}
          <Route path="/get-involved/internships" element={<Navigate to="/get-involved/student-internship" replace />} />
          <Route path="/get-involved/internship" element={<Navigate to="/get-involved/student-internship" replace />} />
          <Route path="/get-involved/partnerships" element={<Navigate to="/get-involved/industry-csr-partnership" replace />} />
          <Route path="/get-involved/csr" element={<Navigate to="/get-involved/industry-csr-partnership" replace />} />
          <Route path="/get-involved/collaboration" element={<Navigate to="/get-involved/academic-collaboration" replace />} />

          <Route path="/manage" element={<Manage />} />
          <Route path="/team/:id" element={<TeamMemberProfile />} />
          <Route path="/about/team/:id" element={<TeamMemberProfile />} />

          {/* Legacy Aliases & Redirects */}
          <Route path="/sustainability" element={<Navigate to="/domains/sustainability" replace />} />
          <Route path="/sustainability/*" element={<Navigate to="/domains/sustainability" replace />} />
          <Route path="/livelihood" element={<Navigate to="/domains/livelihood" replace />} />
          <Route path="/livelihood/*" element={<Navigate to="/domains/livelihood" replace />} />

          {/* Aliases & Complementary Routes */}
          <Route path="/academic-programs" element={<AcademicPrograms />} />
          <Route path="/contact" element={<Navigate to="/get-involved/contact" replace />} />
          <Route path="/coe-partners" element={<Partners />} />
          <Route path="/coe-partners/centres-of-excellence" element={<Partners centres />} />
          <Route path="/coe-partners/our-partners" element={<OurPartners />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
