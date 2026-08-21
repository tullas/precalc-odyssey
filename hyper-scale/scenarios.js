/**
 * Scenario engine + legacy practical set + unit filters
 * Load scenarios-functions.js after this for Standard Functions (25).
 */

function roundNice(v, decimals) {
  const d = decimals != null ? decimals : (Math.abs(v) >= 100 ? 0 : Math.abs(v) >= 10 ? 1 : 2);
  const f = Math.pow(10, d);
  return Math.round(v * f) / f;
}

function randBetween(min, max, step) {
  const n = Math.round((max - min) / step);
  const i = Math.floor(Math.random() * (n + 1));
  return roundNice(min + i * step, 4);
}

window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];

// Keep a few classic practical templates tagged exp-log / general for mixed practice
(function seedPractical() {
  const practical = [
    {
      id: 'savings', level: 'standard', unit: 'exp-log', family: 'exponential',
      title: 'Savings Account',
      context: 'You put money in a savings account. Each year the bank multiplies your balance by the same growth factor.',
      xLabel: 'Years (x)', yLabel: 'Balance in $ (y)', xMin: 0, xMax: 10,
      form: 'y = a · b^x',
      symbolGlossary: [
        { sym: 'x', mean: 'time in years' }, { sym: 'y', mean: 'balance ($)' },
        { sym: 'a', mean: 'starting amount' }, { sym: 'b', mean: 'yearly growth factor' }
      ],
      eval: (p, x) => p.a * Math.pow(p.b, x), motion: null,
      paramDefs: [
        { key: 'a', label: 'a — Starting amount ($)', min: 500, max: 2000, step: 100 },
        { key: 'b', label: 'b — Growth factor', min: 1.04, max: 1.12, step: 0.01 }
      ],
      build(p) {
        const target = roundNice(p.a * Math.pow(p.b, 10), 0);
        return {
          question: `You start with $${p.a}. Aim for about $${target} after 10 years. Adjust sliders and enter the balance at year 10.`,
          answer: { type: 'numeric', target, tol: Math.max(50, target * 0.08), atX: 10, prompt: 'Balance at year 10 ($)' },
          hints: ['b > 1 means growth', `Read y at x = 10`]
        };
      }
    },
    {
      id: 'pizza', level: 'standard', unit: 'poly-rational', family: 'rational',
      title: 'Sharing a Pizza',
      context: 'One pizza split evenly: more people means fewer slices each.',
      xLabel: 'People (x)', yLabel: 'Slices each (y)', xMin: 1, xMax: 10,
      form: 'y = a / x',
      symbolGlossary: [
        { sym: 'x', mean: 'people' }, { sym: 'y', mean: 'slices each' }, { sym: 'a', mean: 'total slices' }
      ],
      eval: (p, x) => p.a / x, motion: 'slices',
      paramDefs: [
        { key: 'a', label: 'a — Total slices', min: 6, max: 12, step: 1 },
        { key: 'h', label: 'h', min: 0, max: 0, step: 1 }
      ],
      build(p) {
        const target = roundNice(p.a / 4, 2);
        return {
          question: `Pizza has ${p.a} slices shared by 4 people. How many does each get?`,
          answer: { type: 'numeric', target, tol: 0.25, atX: 4, prompt: 'Slices each (4 people)' },
          hints: [`${p.a} ÷ 4 = ${target}`]
        };
      }
    }
  ];
  practical.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();

window.instantiateScenario = function (template, fixedParams) {
  const params = {};
  const paramUI = [];
  (template.paramDefs || []).forEach(d => {
    const val = fixedParams && fixedParams[d.key] != null
      ? fixedParams[d.key]
      : (d.min === d.max ? d.min : randBetween(d.min, d.max, d.step));
    params[d.key] = val;
    paramUI.push({ key: d.key, label: d.label, min: d.min, max: d.max, step: d.step, default: val });
  });
  const built = template.build(params);
  return {
    id: template.id,
    level: template.level || 'standard',
    unit: template.unit || 'functions',
    family: template.family,
    title: template.title,
    context: template.context,
    xLabel: template.xLabel,
    yLabel: template.yLabel,
    xMin: template.xMin,
    xMax: template.xMax,
    form: template.form,
    symbolGlossary: template.symbolGlossary || [],
    eval: template.eval,
    motion: template.motion,
    params: paramUI,
    idealParams: { ...params },
    question: built.question,
    answer: built.answer,
    hints: built.hints
  };
};

window.verifyScenarioMath = function (scenario) {
  if (!scenario.answer || scenario.answer.atX == null) return { ok: true };
  const y = scenario.eval(scenario.idealParams, scenario.answer.atX);
  if (!Number.isFinite(y)) return { ok: false, reason: 'non-finite' };
  const tol = scenario.answer.tol ?? 1;
  if (Math.abs(y - scenario.answer.target) > tol) {
    return { ok: false, reason: `eval=${y} target=${scenario.answer.target}` };
  }
  return { ok: true };
};

window.filterTemplates = function (level, unit) {
  let pool = window.SCENARIO_TEMPLATES || [];
  if (level) pool = pool.filter(t => (t.level || 'standard') === level);
  if (unit) pool = pool.filter(t => t.unit === unit);
  return pool.length ? pool : (window.SCENARIO_TEMPLATES || []);
};

window.pickScenario = function (level, unit) {
  const pool = window.filterTemplates(level || 'standard', unit || null);
  if (!pool.length) return null;
  for (let i = 0; i < 15; i++) {
    const t = pool[Math.floor(Math.random() * pool.length)];
    const s = window.instantiateScenario(t);
    if (window.verifyScenarioMath(s).ok) return s;
  }
  return window.instantiateScenario(pool[0]);
};

window.rerollScenario = function (scenarioId) {
  const t = (window.SCENARIO_TEMPLATES || []).find(s => s.id === scenarioId);
  if (!t) return window.pickScenario('standard', null);
  for (let i = 0; i < 12; i++) {
    const s = window.instantiateScenario(t);
    if (window.verifyScenarioMath(s).ok) return s;
  }
  return window.instantiateScenario(t);
};

window.countByUnit = function (level) {
  const pool = window.filterTemplates(level || 'standard', null);
  const map = {};
  pool.forEach(t => {
    const u = t.unit || 'other';
    map[u] = (map[u] || 0) + 1;
  });
  return map;
};
