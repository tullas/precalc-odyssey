/**
 * Scenario engine — templates loaded from unit packs:
 *   scenarios-functions.js
 *   scenarios-poly-rational.js
 *   scenarios-exp-log.js
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
  return pool.length ? pool : [];
};

window.pickScenario = function (level, unit) {
  const pool = window.filterTemplates(level || 'standard', unit || null);
  if (!pool.length) return null;
  for (let i = 0; i < 20; i++) {
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
