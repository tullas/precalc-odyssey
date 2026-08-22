/**
 * Test session engine — randomized order, fresh params, scoring, improvement hints
 */
(function (global) {
  const QUESTIONS_PER_TEST = 10;
  const TOL_DEFAULT = 0.15;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function nearlyEqual(a, b, tol) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
    const t = tol != null ? tol : TOL_DEFAULT;
    const scale = Math.max(1, Math.abs(b));
    return Math.abs(a - b) <= Math.max(t, scale * 0.02);
  }

  function parseUserNumber(raw) {
    if (raw == null) return NaN;
    const s = String(raw).trim().replace(/,/g, '');
    if (!s) return NaN;
    return Number(s);
  }

  /**
   * Build a test: N scenarios from level/unit with shuffled order and new params.
   */
  function buildTest(level, unit, count) {
    const n = count || QUESTIONS_PER_TEST;
    const pool = (global.filterTemplates && global.filterTemplates(level, unit)) || [];
    if (!pool.length) return { ok: false, error: 'No scenarios for this unit.' };

    const shuffled = shuffle(pool);
    const picked = [];
    // Prefer unique templates; if pool smaller than n, allow reuse with new params
    for (let i = 0; i < n; i++) {
      const tmpl = shuffled[i % shuffled.length];
      const sc = global.instantiateScenario(tmpl);
      if (!sc) continue;
      const v = global.verifyScenarioMath ? global.verifyScenarioMath(sc) : { ok: true };
      if (!v.ok) {
        // retry once with new params
        const sc2 = global.instantiateScenario(tmpl);
        if (sc2) picked.push(sc2);
      } else {
        picked.push(sc);
      }
    }
    if (!picked.length) return { ok: false, error: 'Could not build test questions.' };
    return {
      ok: true,
      level: level || 'standard',
      unit: unit || picked[0].unit,
      questions: picked
    };
  }

  function gradeAnswer(scenario, userRaw) {
    const expected = scenario.answer && scenario.answer.target != null
      ? Number(scenario.answer.target)
      : NaN;
    const tol = (scenario.answer && scenario.answer.tol != null) ? scenario.answer.tol : TOL_DEFAULT;
    const userVal = parseUserNumber(userRaw);
    const correct = nearlyEqual(userVal, expected, tol);
    return {
      correct: !!correct,
      userAnswer: String(userRaw == null ? '' : userRaw),
      expectedAnswer: Number.isFinite(expected) ? String(roundDisplay(expected)) : '',
      expectedNumeric: expected,
      userNumeric: userVal
    };
  }

  function roundDisplay(v) {
    if (!Number.isFinite(v)) return v;
    const a = Math.abs(v);
    if (a >= 100) return Math.round(v);
    if (a >= 10) return Math.round(v * 10) / 10;
    return Math.round(v * 100) / 100;
  }

  /**
   * Grade full session; return score + per-question detail + improve units.
   */
  function gradeSession(questions, userAnswers) {
    const details = [];
    let score = 0;
    const missByUnit = {};

    questions.forEach((sc, i) => {
      const raw = userAnswers[i];
      const g = gradeAnswer(sc, raw);
      if (g.correct) score++;
      else {
        const u = sc.unit || 'unknown';
        missByUnit[u] = (missByUnit[u] || 0) + 1;
      }
      details.push({
        qIndex: i,
        scenarioId: sc.id,
        unit: sc.unit,
        level: sc.level,
        title: sc.title,
        question: sc.question,
        userAnswer: g.userAnswer,
        expectedAnswer: g.expectedAnswer,
        correct: g.correct,
        workedSolution: sc.workedSolution || null
      });
    });

    const total = questions.length;
    const percent = total ? Math.round((score / total) * 1000) / 10 : 0;

    // Suggest units with most misses (this unit first if any miss)
    const improve = Object.keys(missByUnit)
      .sort((a, b) => missByUnit[b] - missByUnit[a])
      .map(u => ({
        unit: u,
        misses: missByUnit[u],
        message: 'Review practice for “' + unitLabel(u) + '” — ' + missByUnit[u] + ' missed in this test.'
      }));

    return { score, total, percent, details, improve };
  }

  function unitLabel(id) {
    const map = {
      functions: 'Functions',
      'poly-rational': 'Polynomial & Rational',
      'exp-log': 'Exponential & Logarithmic',
      trigonometry: 'Trigonometry',
      sequences: 'Sequences & Series',
      conics: 'Conic Sections',
      vectors: 'Vectors',
      'adv-trig': 'Advanced Trig',
      polar: 'Polar Coordinates',
      parametric: 'Parametric Equations',
      matrices: 'Matrices',
      'rates-limits': 'Rates & Limits'
    };
    return map[id] || id;
  }

  function sessionId() {
    if (global.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 't_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10);
  }

  global.TestEngine = {
    QUESTIONS_PER_TEST,
    buildTest,
    gradeAnswer,
    gradeSession,
    unitLabel,
    sessionId,
    shuffle
  };
})(window);
