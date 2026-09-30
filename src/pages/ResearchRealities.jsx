import Resources from './Resources.jsx';
import Stories from './Stories.jsx';
import researchHero from '../../assets/research & realities.jpg';

export default function ResearchRealities() {
  return (
    <div className="research-realities-page">
      <section
        className="viewport-hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '140px 0 70px',
          background: `linear-gradient(135deg, rgba(10, 42, 92, 0.75) 0%, rgba(24, 86, 165, 0.55) 100%), url("${researchHero}") center/cover no-repeat`,
          color: '#FFFFFF'
        }}
      >
        <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#DCE9F8',
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              Knowledge &amp; Experience
            </span>
            <h1 style={{ fontSize: 'clamp(38px, 4.8vw, 54px)', color: '#FFFFFF', margin: '0 0 16px', fontWeight: 800, lineHeight: 1.15 }}>
              Research &amp; Realities
            </h1>
            <p style={{ fontSize: '18px', color: '#DCE9F8', lineHeight: 1.6, margin: 0, maxWidth: '680px' }}>
              Explore the knowledge, resources, experiences and stories emerging from KSLI&apos;s field work across ecosystems and agrarian communities.
            </p>
          </div>
        </div>
      </section>
      <Resources embedded />
      <Stories embedded />
    </div>
  );
}
