/**
 * KSLI Form Submission Service
 * Centralized submission handler for all 5 dedicated engagement forms.
 *
 * TODO: Integrate with backend endpoint (e.g. Email service, Google Sheets API, or Database).
 * Currently simulates asynchronous network submission.
 */

export async function submitForm(formType, payload) {
  // Validate honeypot (anti-spam)
  if (payload.honeypot_website) {
    throw new Error('Spam submission detected.');
  }

  // Validate minimum time to submit (anti-bot)
  const minimumFillTimeMs = 1800;
  if (payload._formLoadTime && Date.now() - payload._formLoadTime < minimumFillTimeMs) {
    throw new Error('Please review your inputs before submitting.');
  }

  // Clean payload (exclude internal spam guard metadata)
  const cleanPayload = {
    formType,
    submittedAt: new Date().toISOString(),
    ...payload
  };
  delete cleanPayload.honeypot_website;
  delete cleanPayload._formLoadTime;

  // In production: Replace with actual fetch('/api/submit', { method: 'POST', body: JSON.stringify(cleanPayload) })
  // For now: Simulate network request with 750ms latency
  await new Promise((resolve) => setTimeout(resolve, 750));

  // Return success response
  return {
    success: true,
    message: 'Your submission has been received successfully.'
  };
}
