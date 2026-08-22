/**
 * Persist test results to Cloudflare Worker + D1, with localStorage fallback.
 */
(function (global) {
  const API_BASE = 'https://precalc-odyssey-auth.t-ullas.workers.dev';
  const LS_KEY = 'hs_test_history_v1';

  function getUser() {
    try {
      const raw = localStorage.getItem('precalc_user') || localStorage.getItem('hs_user');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  }

  function getAuthHeaders() {
    const h = { 'Content-Type': 'application/json' };
    const token = localStorage.getItem('precalc_token') || localStorage.getItem('hs_token') || localStorage.getItem('token');
    if (token) h['Authorization'] = 'Bearer ' + token;
    return h;
  }

  function saveLocal(record) {
    let list = [];
    try { list = JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (e) {}
    const user = getUser();
    const email = user && user.email;
    // scope history per email when possible
    const key = email ? LS_KEY + ':' + email.toLowerCase() : LS_KEY;
    try { list = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { list = []; }
    list.unshift(record);
    if (list.length > 50) list = list.slice(0, 50);
    localStorage.setItem(key, JSON.stringify(list));
    localStorage.setItem(LS_KEY, JSON.stringify(list)); // mirror default
    return list;
  }

  function loadLocal() {
    const user = getUser();
    const email = user && user.email;
    const key = email ? LS_KEY + ':' + email.toLowerCase() : LS_KEY;
    try {
      const scoped = JSON.parse(localStorage.getItem(key) || 'null');
      if (scoped) return scoped;
    } catch (e) {}
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (e) { return []; }
  }

  async function submitSession(payload) {
    saveLocal({
      id: payload.sessionId,
      level: payload.level,
      unit: payload.unit,
      score: payload.score,
      total: payload.total,
      percent: payload.percent,
      improve_units: (payload.improve || []).map(x => x.unit).join(','),
      improve: payload.improve,
      details: payload.details,
      created_at: new Date().toISOString()
    });

    try {
      const res = await fetch(API_BASE + '/test/submit', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return { ok: false, local: true, error: err.error || ('HTTP ' + res.status) };
      }
      const data = await res.json();
      return { ok: true, local: false, data };
    } catch (e) {
      return { ok: false, local: true, error: String(e.message || e) };
    }
  }

  async function fetchReport(userId) {
    const user = getUser() || {};
    try {
      let q = '';
      if (userId) q = '?user_id=' + encodeURIComponent(userId);
      else if (user.email) q = '?email=' + encodeURIComponent(user.email);
      const res = await fetch(API_BASE + '/test/report' + q, {
        method: 'GET',
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.sessions) return { ok: true, source: 'api', sessions: data.sessions };
      }
    } catch (e) {}
    return { ok: true, source: 'local', sessions: loadLocal() };
  }

  global.TestAPI = { submitSession, fetchReport, loadLocal, getUser, API_BASE };
})(window);
