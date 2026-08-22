# Cloudflare prompt — enable Test sessions + D1 storage

Paste into Cloudflare dashboard AI / Workers editor for **precalc-odyssey-auth**.

## 1. Run this SQL on D1 database `precalc-odyssey-db`

```sql
CREATE TABLE IF NOT EXISTS test_sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  level TEXT NOT NULL,
  unit TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percent REAL NOT NULL,
  improve_units TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS test_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  q_index INTEGER NOT NULL,
  scenario_id TEXT,
  question TEXT,
  user_answer TEXT,
  expected_answer TEXT,
  correct INTEGER NOT NULL,
  unit TEXT
);

CREATE INDEX IF NOT EXISTS idx_test_sessions_user ON test_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_test_answers_session ON test_answers(session_id);
```

## 2. Agent prompt

```
Update Worker precalc-odyssey-auth (D1 binding name DB → precalc-odyssey-db).

Add two routes with CORS enabled (same as existing /login):

1) POST /test/submit
Body JSON: {
  sessionId, userId?, email?, level, unit,
  score, total, percent,
  improve: [{ unit, misses, message }],
  details: [{ qIndex, scenarioId, question, userAnswer, expectedAnswer, correct, unit }]
}
- Resolve user_id from userId or email lookup in users table
- INSERT into test_sessions
- INSERT each details row into test_answers
- Return { success: true, sessionId }

2) GET /test/report?user_id=ID  (or ?email=)
- SELECT sessions for that user ORDER BY created_at DESC LIMIT 100
- Return { success: true, sessions: [...] }

Keep existing /register /login /forgot-password /reset-password working.
Do not remove D1 binding DB.
```

## 3. Frontend (already in repo)

- Practice: `/hyper-scale/` (unchanged learning loop)
- Test: `/hyper-scale/test.html`
- Report: `/hyper-scale/report.html`

Until the Worker is updated, tests still save history in the browser (localStorage).
