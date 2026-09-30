// Temporary frontend-only data. Replace this module with authenticated session
// and submission services once Microsoft authentication and the KSLI API are available.
export const developmentManageUser = {
  name: 'KSLI Demo User',
  role: 'Sustainability Coordinator',
  domain: 'Sustainability'
};

export const developmentSubmissions = [
  { id: 'preview-1', title: 'Climate Smart Dairy Entrepreneurship Programme', type: 'Project', domain: 'Livelihood', status: 'Under Review', submittedOn: '20 Sep 2026', updatedOn: '20 Sep 2026' },
  { id: 'preview-2', title: 'Sustainable Agriculture Workshop', type: 'Event', domain: 'Sustainability', status: 'Published', submittedOn: '15 Sep 2026', updatedOn: '18 Sep 2026' }
];

export function createDevelopmentSubmission({ title, type, domain, status }) {
  const today = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());
  return { id: `local-${Date.now()}`, title, type: `${type[0].toUpperCase()}${type.slice(1)}`, domain, status, submittedOn: today, updatedOn: today };
}
