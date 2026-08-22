/**
 * Snippet to merge into the auth Worker (precalc-odyssey-auth).
 * Endpoints: POST /test/submit , GET /test/report
 *
 * Requires D1 tables from auth/schema-tests.sql
 */

export async function handleTestRoutes(request, env, corsHeaders) {
  const url = new URL(request.url);
  const path = url.pathname;

  function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // POST /test/submit
  if (path === '/test/submit' && request.method === 'POST') {
    const body = await request.json();
    const {
      sessionId, userId, email, level, unit,
      score, total, percent, improve, details
    } = body;

    if (!sessionId || level == null || unit == null || score == null || total == null) {
      return json({ error: 'Missing required fields' }, 400);
    }

    let uid = userId;
    if (!uid && email) {
      const row = await env.DB.prepare('SELECT id FROM users WHERE email = ?')
        .bind(String(email).toLowerCase()).first();
      uid = row && row.id;
    }
    if (!uid) {
      return json({ error: 'User not found — log in again' }, 401);
    }

    const improveUnits = Array.isArray(improve)
      ? improve.map(x => x.unit || x).join(',')
      : (improve || '');

    await env.DB.prepare(
      `INSERT INTO test_sessions (id, user_id, level, unit, score, total, percent, improve_units)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      sessionId, uid, level, unit,
      Number(score), Number(total), Number(percent),
      improveUnits
    ).run();

    if (Array.isArray(details)) {
      for (const d of details) {
        await env.DB.prepare(
          `INSERT INTO test_answers (session_id, q_index, scenario_id, question, user_answer, expected_answer, correct, unit)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          sessionId,
          d.qIndex ?? 0,
          d.scenarioId || null,
          d.question || null,
          d.userAnswer || null,
          d.expectedAnswer || null,
          d.correct ? 1 : 0,
          d.unit || null
        ).run();
      }
    }

    return json({ success: true, sessionId });
  }

  // GET /test/report?user_id=
  if (path === '/test/report' && request.method === 'GET') {
    let uid = url.searchParams.get('user_id');
    // Optional: resolve from email query
    const email = url.searchParams.get('email');
    if (!uid && email) {
      const row = await env.DB.prepare('SELECT id FROM users WHERE email = ?')
        .bind(String(email).toLowerCase()).first();
      uid = row && row.id;
    }
    if (!uid) {
      return json({ error: 'user_id required' }, 400);
    }

    const { results } = await env.DB.prepare(
      `SELECT id, level, unit, score, total, percent, improve_units, created_at
       FROM test_sessions WHERE user_id = ? ORDER BY created_at DESC LIMIT 100`
    ).bind(uid).all();

    return json({ success: true, sessions: results || [] });
  }

  return null; // not handled
}
