import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/FloatingNavPanel.css';

/**
 * Domains FloatingNavPanel Component
 * - Styled after the ProClime reference design:
 *   * Column 1: 4 Thrust Areas one below another
 *   * Column 2: Sustainability (clickable header) + 4 focus areas
 *   * Column 3: Livelihood (clickable header) + 3 focus areas
 *   * Vertical divider line
 *   * Column 4: Kumaraguru Microcosm (bold) + short description + Explore button
 * - Positioned exactly from the left of the Domains navbar item to the right of the Get Involved button
 */
export default function FloatingNavPanel({
  isOpen,
  panelBounds,
  onClose,
  onMouseEnter,
  onMouseLeave
}) {
  const navigate = useNavigate();

  // Escape key closes panel
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (to) => {
    onClose();
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      if (window.location.pathname === path && hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <div
      className={`domains-floating-nav-portal ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'fixed',
        top: panelBounds ? `${panelBounds.top}px` : '76px',
        left: panelBounds ? `${panelBounds.left}px` : 'auto',
        width: panelBounds ? `${panelBounds.width}px` : 'auto',
        maxWidth: 'calc(100vw - 32px)',
        zIndex: 1050,
        pointerEvents: isOpen ? 'auto' : 'none'
      }}
    >
      {/* Invisible hover bridge to prevent mouse leave between nav item and panel */}
      <div className="domains-floating-nav-bridge" />

      <div className="domains-floating-nav-card" role="region" aria-label="Domains Directory">
        {/* Column 1: 4 Thrust Areas */}
        <div className="domains-panel-col">
          <h3 className="domains-panel-heading">Thrust Areas</h3>
          <div className="domains-panel-links-list">
            <Link
              to="/thrust-areas/research-field-innovation"
              onClick={() => handleLinkClick('/thrust-areas/research-field-innovation')}
              className="domains-panel-link"
            >
              Research &amp; Field Innovation
            </Link>
            <Link
              to="/thrust-areas/development-projects"
              onClick={() => handleLinkClick('/thrust-areas/development-projects')}
              className="domains-panel-link"
            >
              Development Projects
            </Link>
            <Link
              to="/thrust-areas/education-capacity-building"
              onClick={() => handleLinkClick('/thrust-areas/education-capacity-building')}
              className="domains-panel-link"
            >
              Education &amp; Capacity Building
            </Link>
            <Link
              to="/thrust-areas/entrepreneurship-development"
              onClick={() => handleLinkClick('/thrust-areas/entrepreneurship-development')}
              className="domains-panel-link"
            >
              Entrepreneurship Development
            </Link>
          </div>
        </div>

        {/* Column 2: Our Domains (Bold non-clickable heading, clickable domain links) */}
        <div className="domains-panel-col">
          <h3 className="domains-panel-heading">Our Domains</h3>
          <div className="domains-panel-links-list">
            <Link
              to="/domains/sustainability"
              onClick={() => handleLinkClick('/domains/sustainability')}
              className="domains-panel-link"
            >
              Sustainability
            </Link>
            <Link
              to="/domains/livelihood"
              onClick={() => handleLinkClick('/domains/livelihood')}
              className="domains-panel-link"
            >
              Livelihood
            </Link>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div className="domains-panel-divider" aria-hidden="true" />

        {/* Column 4: Kumaraguru Microcosm */}
        <div className="domains-panel-col domains-panel-col--spotlight">
          <div className="domains-panel-spotlight-tag">
            <span className="domains-panel-spotlight-tag-dot" aria-hidden="true" />
            <span>Campus Living Lab</span>
          </div>
          <h3 className="domains-panel-heading domains-panel-heading--spotlight">
            Kumaraguru Microcosm
          </h3>
          <p className="domains-panel-spotlight-desc">
            A campus living laboratory pioneering integrated ecological resilience, circular resource systems, and biodiversity conservation.
          </p>
          <div>
            <Link
              to="/domains/sustainability#microcosm"
              onClick={() => handleLinkClick('/domains/sustainability#microcosm')}
              className="domains-panel-explore-btn"
            >
              <span>Explore</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
