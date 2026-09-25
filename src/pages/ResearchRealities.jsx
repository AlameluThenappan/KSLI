import Resources from './Resources.jsx';
import Stories from './Stories.jsx';

export default function ResearchRealities() {
  return (
    <div className="research-realities-page" style={{ paddingTop: '86px' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #0A2A5C 0%, #1856A5 100%)',
          color: '#FFFFFF',
          padding: '64px 0 54px'
        }}
      >
        <div className="shell">
          <div style={{ maxWidth: '760px' }}>
            <span
              style={{
                display: 'inline-block', background: 'rgba(255, 255, 255, 0.15)', color: '#DCE9F8',
                padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px'
              }}
            >
              Knowledge &amp; Experience
            </span>
            <h1 style={{ fontSize: 'clamp(34px, 4vw, 48px)', color: '#FFFFFF', margin: '0 0 14px', fontWeight: 800 }}>
              Research &amp; Realities
            </h1>
            <p style={{ fontSize: '17px', color: '#DCE9F8', lineHeight: 1.6, margin: 0 }}>
              Explore the knowledge, resources, experiences and stories emerging from KSLI&apos;s work.
            </p>
          </div>
        </div>
      </section>
      <Resources embedded />
      <Stories embedded />
    </div>
  );
}
