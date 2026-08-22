-- Run in Cloudflare D1 console for precalc-odyssey-db

CREATE TABLE IF NOT EXISTS test_sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  level TEXT NOT NULL,
  unit TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percent REAL NOT NULL,
  improve_units TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
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
  unit TEXT,
  FOREIGN KEY (session_id) REFERENCES test_sessions(id)
);

CREATE INDEX IF NOT EXISTS idx_test_sessions_user ON test_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_test_answers_session ON test_answers(session_id);
