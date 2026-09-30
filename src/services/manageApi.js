const apiBase = import.meta.env.VITE_KSLI_API_BASE_URL || '';

async function request(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, { credentials: 'include', ...options });
  if (!response.ok) throw new Error((await response.json().catch(() => ({}))).message || 'Unable to complete this request.');
  return response.status === 204 ? null : response.json();
}

// Reserved backend adapter. Connect these calls when the KSLI API is available.
export const manageApi = {
  getSubmissions: () => request('/api/manage/submissions'),
  saveDraft: (payload) => request('/api/manage/content/drafts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
  submit: (payload) => request('/api/manage/content/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
  uploadMedia: (formData) => request('/api/manage/media', { method: 'POST', body: formData })
};
