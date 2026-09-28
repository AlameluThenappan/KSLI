import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FloatingNavPanel.css';

/**
 * FloatingNavPanel component (Large 3-Zone Mega-Menu Spec)
 * - Near full-screen floating panel, centered horizontally under the navbar
 * - Three-zone layout: Left Column (28%), Details Column (34%), Image (38%)
 * - Left items are real clickable links (<Link>) that navigate on click and preview on hover/focus
 * - Smooth morphing between top-level menu triggers with sliding caret
 * - Pinned 2-column pill chips at bottom of details column
 * - Keyboard navigation (Up/Down/Left/Right/Esc)
 * - Wide-screen touch handling (first tap previews, second tap navigates)
 */
export default function FloatingNavPanel({
  isOpen,
  panelConfig,
  triggerRect,
  onClose,
  onMouseEnter,
  onMouseLeave
}) {
  const [activeLeftIndex, setActiveLeftIndex] = useState(0);
  const leftListRef = useRef(null);
  const rightAreaRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Track window resize to recompute caret position
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset active left index when switching panels
  useEffect(() => {
    setActiveLeftIndex(0);
  }, [panelConfig?.id]);

  // Handle global escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !panelConfig || !panelConfig.items) {
    return null;
  }

  // Calculate panel dimensions and sliding caret position
  const panelWidth = Math.min(windowWidth - 64, 1400);
  const panelLeft = (windowWidth - panelWidth) / 2;

  let caretLeft = panelWidth / 2;
  if (triggerRect) {
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    caretLeft = triggerCenter - panelLeft;
    // Constrain caret within the panel's rounded border
    caretLeft = Math.max(36, Math.min(caretLeft, panelWidth - 36));
  }

  const currentItem = panelConfig.items[activeLeftIndex] || panelConfig.items[0];

  // Touch device support for wide screens (≥ 1024px with hover: none):
  // First tap previews; second tap follows link.
  const handleLeftItemClick = (e, item, idx) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
      if (activeLeftIndex !== idx) {
        e.preventDefault();
        setActiveLeftIndex(idx);
        return;
      }
    }
    // Normal desktop click or second tap: follow link and close panel
    onClose();
    if (item.to && item.to.includes('#')) {
      const [path, hash] = item.to.split('#');
      if (typeof window !== 'undefined' && window.location.pathname === path && hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const yOffset = -140;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 80);
      }
    }
  };

  // Keyboard navigation on left links list
  const handleLeftKeyDown = (e, index) => {
    const count = panelConfig.items.length;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (index + 1) % count;
      setActiveLeftIndex(next);
      const links = leftListRef.current?.querySelectorAll('a');
      links?.[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (index - 1 + count) % count;
      setActiveLeftIndex(prev);
      const links = leftListRef.current?.querySelectorAll('a');
      links?.[prev]?.focus();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const rightLink = rightAreaRef.current?.querySelector('a');
      rightLink?.focus();
    }
  };

  const handleRightKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const links = leftListRef.current?.querySelectorAll('a');
      links?.[activeLeftIndex]?.focus();
    }
  };

  const handleChipClick = (to) => {
    onClose();
    if (to && to.includes('#')) {
      const [path, hash] = to.split('#');
      if (typeof window !== 'undefined' && window.location.pathname === path && hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const yOffset = -140;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 80);
      }
    }
  };

  return (
    <div
      className="nav-floating-portal"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label={`${panelConfig.label} submenu`}
    >
      <div
        className="nav-floating-card"
        style={{ width: `${panelWidth}px` }}
      >
        {/* Sliding Caret Notch pointing to active trigger */}
        <div
          className="nav-floating-caret"
          style={{ left: `${caretLeft}px` }}
          aria-hidden="true"
        />

        <div className="nav-floating-content-box">
          <div className="nav-panel-grid">
            {/* Zone 1: Left Column (Master Links List) */}
            <div className="nav-panel-left">
              {panelConfig.groupLabel && (
                <p className="nav-panel-group-label">{panelConfig.groupLabel}</p>
              )}
              <ul
                className="nav-panel-menu-list has-active"
                ref={leftListRef}
              >
                {panelConfig.items.map((item, idx) => {
                  const isActive = idx === activeLeftIndex;
                  return (
                    <li key={item.id}>
                      <Link
                        to={item.to}
                        className={`nav-panel-item-link ${isActive ? 'is-active' : ''}`}
                        onMouseEnter={() => setActiveLeftIndex(idx)}
                        onFocus={() => setActiveLeftIndex(idx)}
                        onClick={(e) => handleLeftItemClick(e, item, idx)}
                        onKeyDown={(e) => handleLeftKeyDown(e, idx)}
                      >
                        <span>{item.label}</span>
                        <span className="nav-panel-arrow-affordance" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Zones 2 & 3: Live Preview Area (Details Column + Image Column) */}
            <div
              className="nav-panel-preview-area"
              key={currentItem.id}
              ref={rightAreaRef}
              onKeyDown={handleRightKeyDown}
            >
              {/* Zone 2: Details Column */}
              <div className="nav-panel-details">
                <div className="nav-details-top">
                  <span className="nav-details-category-label">EXPLORE</span>
                  <Link
                    to={currentItem.to}
                    onClick={onClose}
                    className="nav-details-title-link"
                  >
                    <span>{currentItem.title}</span>
                    <span className="nav-details-arrow" aria-hidden="true">→</span>
                  </Link>
                  <p className="nav-details-desc">{currentItem.desc}</p>
                </div>

                {/* Pinned Pill Chips at Bottom (No arrows, premium capsules like reference) */}
                {currentItem.chips && currentItem.chips.length > 0 && (
                  <div className="nav-details-widgets-bottom">
                    <div className="nav-details-widgets-wrap">
                      {currentItem.chips.map((chip) => (
                        <Link
                          key={chip.label}
                          to={chip.to}
                          onClick={() => handleChipClick(chip.to)}
                          className="nav-premium-pill"
                        >
                          {chip.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Zone 3: Large Image Column */}
              <div className="nav-panel-image-column">
                <div className="nav-panel-image-wrapper">
                  {currentItem.image && (
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="nav-panel-large-image"
                      loading="eager"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
