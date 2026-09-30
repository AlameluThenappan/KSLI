import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TallImageCard.css';

/**
 * TallImageCard component
 * Inspired by Squarespace Extensions/Payments/Capital/Analytics cards:
 * - Aspect ratio ~ 3:4 (desktop ≈ 280 × 370 px)
 * - Crisp border radius (~8-10px)
 * - Full image background with dark gradient overlay
 * - Title at top-left with exactly ONE line of description directly below it
 * - Text sits directly on photo
 * - Arrow button at bottom-right navigating to detail page
 * - Stretched link pattern (arrow <a> has ::after covering card, 1 link & tab stop)
 * - Hover/focus: image scales very slightly (scale(1.03), 300ms ease), arrow shifts ~4px right
 */
export default function TallImageCard({
  title,
  description,
  desc,
  text,
  image,
  to = '/domains',
  tag,
  type,
  location,
  partner,
  meta
}) {
  const cardDesc = description || desc || text || '';
  const cardTag = tag || type;
  const metaText = location || partner || meta;

  const isExternal = typeof to === 'string' && (to.startsWith('http://') || to.startsWith('https://'));

  return (
    <article className="tall-image-card">
      {/* Background Image */}
      {image && (
        <img
          src={image}
          alt=""
          className="tall-image-card-bg"
          loading="lazy"
        />
      )}

      {/* Dark overlay for text legibility */}
      <div className="tall-image-card-overlay" aria-hidden="true" />

      {/* Top-Left Content */}
      <div className="tall-image-card-header">
        {cardTag && <span className="tall-image-card-tag">{cardTag}</span>}
        <h3 className="tall-image-card-title">{title}</h3>
        {cardDesc && <p className="tall-image-card-desc" title={cardDesc}>{cardDesc}</p>}
      </div>

      {/* Bottom Footer: Meta + Arrow link with stretched ::after */}
      <div className="tall-image-card-footer">
        {metaText ? (
          <span className="tall-image-card-meta">
            {location && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            )}
            {metaText.replace(/^📍\s*/, '')}
          </span>
        ) : (
          <span />
        )}

        {isExternal ? (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="tall-image-card-arrow-link"
            aria-label={`Navigate to ${title} details`}
          >
            <span className="tall-image-card-arrow-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        ) : (
          <Link
            to={to}
            className="tall-image-card-arrow-link"
            aria-label={`Navigate to ${title} details`}
          >
            <span className="tall-image-card-arrow-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
