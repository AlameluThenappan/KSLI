import React, { useMemo, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Admin.css';
import ksliLogo from '../assets/branding/ksli-logo.png';

const ADMIN_SESSION_KEY = 'ksli_admin_session';

const ADMIN_ALLOWED_EMAILS = [
  'shruthi.24cs@kct.ac.in',
  'alamelu.24cs@kct.ac.in',
];

const MICROSOFT_AUTH = {
  clientId: import.meta.env.VITE_MS_CLIENT_ID || '',
  tenantId: import.meta.env.VITE_MS_TENANT_ID || 'common',
  redirectUri: import.meta.env.VITE_MS_REDIRECT_URI || `${window.location.origin}/admin`,
};

const APPLICATIONS = [
  {
    id: 'EVT-1042',
    type: 'Event',
    title: 'Student Conclave for Climate Action',
    applicant: 'Centre for Sustainability Learning',
    email: 'scca.team@kct.ac.in',
    submittedOn: '22 Sep 2026',
    date: '18 Oct 2026',
    status: 'Applied',
    priority: 'High',
    summary:
      'A campus-level conclave for student teams to present climate action prototypes, circular economy ideas, and decarbonization plans.',
    details: [
      'Expected participation: 600+ students',
      'Venue requested: Ramanandha Adigalar Auditorium',
      'Support needed: branding, logistics, guest coordination',
    ],
  },
  {
    id: 'PRJ-2187',
    type: 'Project',
    title: 'Dairy Value Addition Immersion',
    applicant: 'Livelihood Development Cell',
    email: 'livelihoods@kct.ac.in',
    submittedOn: '21 Sep 2026',
    date: '05 Nov 2026',
    status: 'Applied',
    priority: 'Medium',
    summary:
      'Field immersion connecting students with producer groups, chilling centres, and value-added dairy enterprise models.',
    details: [
      'Field area: Western Tamil Nadu dairy cluster',
      'Participants: 42 students and 6 faculty coordinators',
      'Outcome: field report and enterprise opportunity map',
    ],
  },
  {
    id: 'RES-3309',
    type: 'Research',
    title: 'Campus Water Circularity Baseline Study',
    applicant: 'Resource Efficiency Research Group',
    email: 'research.ksli@kct.ac.in',
    submittedOn: '20 Sep 2026',
    date: '01 Dec 2026',
    status: 'Applied',
    priority: 'High',
    summary:
      'A baseline study to assess water demand, reuse potential, and operational recommendations for institutional circularity.',
    details: [
      'Study duration: 12 weeks',
      'Outputs: baseline report, dashboard, and implementation roadmap',
      'Partners requested: facilities team and civil engineering department',
    ],
  },
  {
    id: 'EVT-0978',
    type: 'Event',
    title: 'Young Farmers Startup Expo',
    applicant: 'Agri Entrepreneurship Forum',
    email: 'agri.forum@kct.ac.in',
    submittedOn: '19 Sep 2026',
    date: '14 Nov 2026',
    status: 'Applied',
    priority: 'Medium',
    summary:
      'An expo for young farmers, FPOs, and student innovators to demonstrate precision agriculture and rural enterprise solutions.',
    details: [
      'Stalls requested: 35',
      'External invitees: FPO leaders, startups, and sector mentors',
      'Approval required for public outreach and partner invitations',
    ],
  },
];

function isKctEmail(email) {
  return email.trim().toLowerCase().endsWith('@kct.ac.in');
}

function isAllowedAdmin(email) {
  return ADMIN_ALLOWED_EMAILS.includes(email.trim().toLowerCase());
}

function readSession() {
  try {
    const stored = window.localStorage.getItem(ADMIN_SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function saveSession(email) {
  const session = {
    email,
    name: email.split('@')[0].replace(/[._-]/g, ' '),
    signedInAt: new Date().toISOString(),
  };
  window.localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
  return session;
}

function buildMicrosoftLoginUrl() {
  const params = new URLSearchParams({
    client_id: MICROSOFT_AUTH.clientId,
    response_type: 'id_token',
    redirect_uri: MICROSOFT_AUTH.redirectUri,
    response_mode: 'fragment',
    scope: 'openid profile email',
    nonce: window.crypto?.randomUUID?.() || `${Date.now()}`,
    prompt: 'select_account',
    domain_hint: 'kct.ac.in',
  });

  return `https://login.microsoftonline.com/${MICROSOFT_AUTH.tenantId}/oauth2/v2.0/authorize?${params.toString()}`;
}

function decodeJwtPayload(token) {
  try {
    const payload = token.split('.')[1];
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(normalized));
  } catch {
    return null;
  }
}

function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  React.useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.replace('#', ''));
    const authError = hash.get('error_description') || hash.get('error');
    const idToken = hash.get('id_token');

    if (authError) {
      setError(authError);
      window.history.replaceState(null, '', '/admin');
      return;
    }

    if (!idToken) return;

    const profile = decodeJwtPayload(idToken);
    const signedInEmail = (profile?.preferred_username || profile?.email || profile?.upn || '').toLowerCase();

    if (!isKctEmail(signedInEmail)) {
      setError('Only KCT Microsoft accounts ending with @kct.ac.in can access this admin area.');
      window.history.replaceState(null, '', '/admin');
      return;
    }

    if (!isAllowedAdmin(signedInEmail)) {
      setError('This KCT email is not on the KSLI admin access list.');
      window.history.replaceState(null, '', '/admin');
      return;
    }

    saveSession(signedInEmail);
    window.history.replaceState(null, '', '/admin/dashboard');
    navigate('/admin/dashboard', { replace: true });
  }, [navigate]);

  const handleMicrosoftLogin = () => {
    setError('');

    if (!MICROSOFT_AUTH.clientId) {
      setError('Microsoft authentication is ready, but VITE_MS_CLIENT_ID is not configured yet.');
      return;
    }

    window.location.href = buildMicrosoftLoginUrl();
  };

  return (
    <div className="admin-auth-page">
      <section className="admin-auth-shell">
        <div className="admin-auth-brand">
          <img src={ksliLogo} alt="KSLI" />
          <span>Admin Console</span>
        </div>
        <div className="admin-auth-copy">
          <p className="admin-eyebrow">KSLI Review Workflow</p>
          <h1>Review applied events, projects, and research work.</h1>
          <p>
            Sign in with a Microsoft account from the KCT domain. Only approved KSLI admin email IDs can open the review dashboard.
          </p>
        </div>
      </section>

      <section className="admin-login-card" aria-label="Admin login">
        <div className="admin-login-header">
          <span>Secure access</span>
          <strong>@kct.ac.in</strong>
        </div>
        <button type="button" className="admin-ms-button" onClick={handleMicrosoftLogin}>
          <span className="admin-ms-icon" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          Login with Microsoft
        </button>
        {error && <p className="admin-login-error">{error}</p>}
        <p className="admin-login-help">
          Permitted access: shruthi.24cs@kct.ac.in and alamelu.24cs@kct.ac.in.
        </p>
      </section>
    </div>
  );
}

function AdminDashboard() {
  const navigate = useNavigate();
  const session = readSession();
  const [items, setItems] = useState(APPLICATIONS);
  const [activeType, setActiveType] = useState('All');
  const [selectedId, setSelectedId] = useState(APPLICATIONS[0]?.id);

  const filteredItems = useMemo(() => {
    if (activeType === 'All') return items;
    return items.filter((item) => item.type === activeType);
  }, [activeType, items]);

  const selected = items.find((item) => item.id === selectedId) || filteredItems[0];
  const appliedCount = items.filter((item) => item.status === 'Applied').length;
  const approvedCount = items.filter((item) => item.status === 'Approved').length;

  const approveSelected = () => {
    if (!selected) return;
    setItems((current) =>
      current.map((item) =>
        item.id === selected.id
          ? { ...item, status: 'Approved', approvedBy: session.email, approvedOn: new Date().toLocaleDateString('en-IN') }
          : item
      )
    );
  };

  const signOut = () => {
    window.localStorage.removeItem(ADMIN_SESSION_KEY);
    navigate('/admin', { replace: true });
  };

  return (
    <div className="admin-dashboard-page">
      <header className="admin-dashboard-header">
        <div>
          <p className="admin-eyebrow">KSLI Admin Console</p>
          <h1>Application Review Board</h1>
          <p>Review applied events, projects, and research works before publishing or internal approval.</p>
        </div>
        <div className="admin-user-panel">
          <span>Signed in as</span>
          <strong>{session.email}</strong>
          <button type="button" onClick={signOut}>Sign out</button>
        </div>
      </header>

      <section className="admin-stat-grid" aria-label="Application summary">
        <article>
          <span>Applied</span>
          <strong>{appliedCount}</strong>
        </article>
        <article>
          <span>Approved</span>
          <strong>{approvedCount}</strong>
        </article>
        <article>
          <span>Total Queue</span>
          <strong>{items.length}</strong>
        </article>
      </section>

      <main className="admin-review-layout">
        <section className="admin-queue-panel">
          <div className="admin-panel-title">
            <div>
              <span>Applications</span>
              <strong>Applied queue</strong>
            </div>
            <div className="admin-filter-tabs" aria-label="Filter application type">
              {['All', 'Event', 'Project', 'Research'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={activeType === type ? 'is-active' : ''}
                  onClick={() => setActiveType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="admin-application-list">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`admin-application-row ${selected?.id === item.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedId(item.id)}
              >
                <span className={`admin-type-badge admin-type-${item.type.toLowerCase()}`}>{item.type}</span>
                <span className="admin-row-main">
                  <strong>{item.title}</strong>
                  <small>{item.applicant} · {item.submittedOn}</small>
                </span>
                <span className={`admin-status admin-status-${item.status.toLowerCase()}`}>{item.status}</span>
              </button>
            ))}
          </div>
        </section>

        {selected && (
          <aside className="admin-detail-panel">
            <div className="admin-detail-topline">
              <span className={`admin-type-badge admin-type-${selected.type.toLowerCase()}`}>{selected.type}</span>
              <span className={`admin-priority admin-priority-${selected.priority.toLowerCase()}`}>{selected.priority}</span>
            </div>
            <h2>{selected.title}</h2>
            <p>{selected.summary}</p>

            <dl className="admin-detail-meta">
              <div>
                <dt>Application ID</dt>
                <dd>{selected.id}</dd>
              </div>
              <div>
                <dt>Applicant</dt>
                <dd>{selected.applicant}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{selected.email}</dd>
              </div>
              <div>
                <dt>Planned Date</dt>
                <dd>{selected.date}</dd>
              </div>
            </dl>

            <div className="admin-detail-section">
              <span>Details</span>
              <ul>
                {selected.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>

            {selected.status === 'Approved' ? (
              <div className="admin-approved-note">
                Approved by {selected.approvedBy} on {selected.approvedOn}
              </div>
            ) : (
              <button type="button" className="admin-approve-button" onClick={approveSelected}>
                Approve application
              </button>
            )}
          </aside>
        )}
      </main>
    </div>
  );
}

function RequireAdmin({ children }) {
  const location = useLocation();
  const session = readSession();

  if (!session?.email || !isKctEmail(session.email) || !isAllowedAdmin(session.email)) {
    return <Navigate to="/admin" replace state={{ from: location }} />;
  }

  return children;
}

export function AdminEntry() {
  const session = readSession();

  if (session?.email && isKctEmail(session.email) && isAllowedAdmin(session.email)) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <AdminLogin />;
}

export function AdminProtectedDashboard() {
  return (
    <RequireAdmin>
      <AdminDashboard />
    </RequireAdmin>
  );
}
