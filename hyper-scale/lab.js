/**
 * Hyper-Scale Lab — core logic (no game deck)
 */
window.LabMath = {
  points(scenario, params, samples) {
    const n = samples || 80;
    const x0 = scenario.xMin ?? 0;
    const x1 = scenario.xMax ?? 10;
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const x = x0 + (i / n) * (x1 - x0);
      let y = scenario.eval(params, x);
      if (!Number.isFinite(y)) y = NaN;
      pts.push({ x, y });
    }
    return pts;
  },
  valueAt(scenario, params, x) {
    const y = scenario.eval(params, x);
    return Number.isFinite(y) ? y : null;
  }
};
