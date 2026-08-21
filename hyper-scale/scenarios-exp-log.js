/** Standard — Exponential & Logarithmic (25 unique scenarios) */
(function () {
  const T = [];
  const L = 'standard', U = 'exp-log';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  add({
    id: 'el-double', family: 'exponential', title: 'Bacteria Doubling',
    context: 'A colony starts at 1 and doubles each period: y = 2^x.',
    xLabel: 'Periods x', yLabel: 'Count y', xMin: 0, xMax: 8, form: 'y = 2^x',
    symbolGlossary: [{ sym: 'x', mean: 'time periods' }, { sym: 'y', mean: 'population' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }, { key: 'b', label: 'b', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => Math.pow(2, x), motion: 'colonies',
    build() { return { question: 'Population after 5 doublings?', answer: { type: 'numeric', target: 32, tol: 1, atX: 5, prompt: 'Count at x = 5' }, hints: ['2^5 = 32'] }; }
  });

  add({
    id: 'el-savings', family: 'exponential', title: 'Compound Savings',
    context: 'Start with $1000, multiply by 1.05 each year.',
    xLabel: 'Years x', yLabel: 'Balance $ y', xMin: 0, xMax: 10, form: 'y = 1000·1.05^x',
    symbolGlossary: [{ sym: 'a', mean: 'start $' }, { sym: 'b', mean: '1.05 = 5% growth' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1000, max: 1000, step: 100 }, { key: 'b', label: 'b', min: 1.05, max: 1.05, step: 0.01 }],
    eval: (p, x) => 1000 * Math.pow(1.05, x),
    build() { return { question: 'About what balance after 10 years? (enter nearest whole dollar from the model)', answer: { type: 'numeric', target: 1629, tol: 40, atX: 10, prompt: 'Balance year 10' }, hints: ['1000·1.05^10 ≈ 1629'] }; }
  });

  add({
    id: 'el-half', family: 'exponential', title: 'Half-Life Style Decay',
    context: 'A quantity halves each step: y = 80 · (0.5)^x.',
    xLabel: 'Steps x', yLabel: 'Amount y', xMin: 0, xMax: 6, form: 'y = 80·(0.5)^x',
    symbolGlossary: [{ sym: 'b', mean: '0.5 means half each step' }],
    paramDefs: [{ key: 'a', label: 'a', min: 80, max: 80, step: 1 }, { key: 'b', label: 'b', min: 0.5, max: 0.5, step: 0.05 }],
    eval: (p, x) => 80 * Math.pow(0.5, x),
    build() { return { question: 'Amount after 3 steps?', answer: { type: 'numeric', target: 10, tol: 0.5, atX: 3, prompt: 'Amount at x = 3' }, hints: ['80·(1/8) = 10'] }; }
  });

  add({
    id: 'el-rumor', family: 'exponential', title: 'Rumor Multiplies',
    context: '3 people start a rumor; each day the count multiplies by 2.',
    xLabel: 'Days x', yLabel: 'People y', xMin: 0, xMax: 6, form: 'y = 3·2^x',
    symbolGlossary: [{ sym: 'a', mean: 'starters' }, { sym: 'b', mean: 'daily factor' }],
    paramDefs: [{ key: 'a', label: 'a', min: 3, max: 3, step: 1 }, { key: 'b', label: 'b', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => 3 * Math.pow(2, x), motion: 'colonies',
    build() { return { question: 'People after 4 days?', answer: { type: 'numeric', target: 48, tol: 2, atX: 4, prompt: 'People' }, hints: ['3·16 = 48'] }; }
  });

  add({
    id: 'el-log-basic', family: 'logarithmic', title: 'Log Asks the Exponent',
    context: 'log₂(x) answers: “2 to what power is x?” So log₂(8) = 3.',
    xLabel: 'x', yLabel: 'log₂(x)', xMin: 1, xMax: 16, form: 'y = log₂(x)',
    symbolGlossary: [{ sym: 'x', mean: 'argument > 0' }, { sym: 'y', mean: 'exponent on base 2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => Math.log2(x), motion: 'scale',
    build() { return { question: 'What is log₂(8)?', answer: { type: 'numeric', target: 3, tol: 0.15, atX: 8, prompt: 'log₂(8)' }, hints: ['2³ = 8'] }; }
  });

  add({
    id: 'el-log16', family: 'logarithmic', title: 'Another Power of Two',
    context: 'log₂(16) = 4 because 2⁴ = 16.',
    xLabel: 'x', yLabel: 'log₂(x)', xMin: 1, xMax: 16, form: 'y = log₂(x)',
    symbolGlossary: [{ sym: 'x', mean: 'argument' }, { sym: 'y', mean: 'log base 2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => Math.log2(x), motion: 'scale',
    build() { return { question: 'log₂(16)?', answer: { type: 'numeric', target: 4, tol: 0.15, atX: 16, prompt: 'log₂(16)' }, hints: ['2⁴ = 16'] }; }
  });

  add({
    id: 'el-log-scaled', family: 'logarithmic', title: 'Stretched Log Scale',
    context: 'y = 2·log₂(x) stretches the log reading by 2.',
    xLabel: 'x', yLabel: 'y', xMin: 1, xMax: 16, form: 'y = 2·log₂(x)',
    symbolGlossary: [{ sym: 'a', mean: 'vertical stretch' }],
    paramDefs: [{ key: 'a', label: 'a', min: 2, max: 2, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => 2 * Math.log2(x), motion: 'scale',
    build() { return { question: 'y when x = 8?', answer: { type: 'numeric', target: 6, tol: 0.25, atX: 8, prompt: 'y at x = 8' }, hints: ['2·3 = 6'] }; }
  });

  add({
    id: 'el-growth-3', family: 'exponential', title: 'Triple Each Stage',
    context: 'Start at 2, multiply by 3 each stage: y = 2·3^x.',
    xLabel: 'Stage x', yLabel: 'Value y', xMin: 0, xMax: 5, form: 'y = 2·3^x',
    symbolGlossary: [{ sym: 'b', mean: 'triple factor' }],
    paramDefs: [{ key: 'a', label: 'a', min: 2, max: 2, step: 1 }, { key: 'b', label: 'b', min: 3, max: 3, step: 0.1 }],
    eval: (p, x) => 2 * Math.pow(3, x),
    build() { return { question: 'Value after 3 stages?', answer: { type: 'numeric', target: 54, tol: 2, atX: 3, prompt: 'y at x = 3' }, hints: ['2·27 = 54'] }; }
  });

  add({
    id: 'el-decay-09', family: 'exponential', title: 'Slow Fade',
    context: 'Each year a machine is worth 90% of last year: y = 1000·(0.9)^x.',
    xLabel: 'Years x', yLabel: 'Value $ y', xMin: 0, xMax: 10, form: 'y = 1000·0.9^x',
    symbolGlossary: [{ sym: 'b', mean: '0.9 = 10% loss per year' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1000, max: 1000, step: 50 }, { key: 'b', label: 'b', min: 0.9, max: 0.9, step: 0.01 }],
    eval: (p, x) => 1000 * Math.pow(0.9, x),
    build() { return { question: 'Approx value after 1 year?', answer: { type: 'numeric', target: 900, tol: 15, atX: 1, prompt: 'Value year 1' }, hints: ['1000×0.9 = 900'] }; }
  });

  add({
    id: 'el-invest', family: 'exponential', title: 'Investment Growth',
    context: 'Invest $500 at factor 1.08 per year.',
    xLabel: 'Years x', yLabel: 'Balance y', xMin: 0, xMax: 10, form: 'y = 500·1.08^x',
    symbolGlossary: [{ sym: 'a', mean: 'principal' }, { sym: 'b', mean: '1.08 yearly' }],
    paramDefs: [{ key: 'a', label: 'a', min: 500, max: 500, step: 50 }, { key: 'b', label: 'b', min: 1.08, max: 1.08, step: 0.01 }],
    eval: (p, x) => 500 * Math.pow(1.08, x),
    build() { return { question: 'Balance after 2 years (model value)?', answer: { type: 'numeric', target: 583, tol: 12, atX: 2, prompt: 'Balance year 2' }, hints: ['500·1.08² ≈ 583'] }; }
  });

  add({
    id: 'el-log4', family: 'logarithmic', title: 'log₂ of 4',
    context: '2² = 4, so log₂(4) = 2.',
    xLabel: 'x', yLabel: 'log₂(x)', xMin: 1, xMax: 8, form: 'y = log₂(x)',
    symbolGlossary: [{ sym: 'y', mean: 'exponent' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => Math.log2(x),
    build() { return { question: 'log₂(4)?', answer: { type: 'numeric', target: 2, tol: 0.15, atX: 4, prompt: 'log₂(4)' }, hints: ['2² = 4'] }; }
  });

  add({
    id: 'el-exp-table', family: 'exponential', title: 'Powers of 2',
    context: 'y = 2^x at whole numbers is the classic doubling table.',
    xLabel: 'x', yLabel: '2^x', xMin: 0, xMax: 6, form: 'y = 2^x',
    symbolGlossary: [{ sym: 'x', mean: 'exponent' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }, { key: 'b', label: 'b', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => Math.pow(2, x),
    build() { return { question: '2^6?', answer: { type: 'numeric', target: 64, tol: 1, atX: 6, prompt: '2^6' }, hints: ['2^6 = 64'] }; }
  });

  add({
    id: 'el-log-offset', family: 'logarithmic', title: 'Log Plus Offset',
    context: 'y = log₂(x) + 1 shifts the log graph up by 1.',
    xLabel: 'x', yLabel: 'y', xMin: 1, xMax: 16, form: 'y = log₂(x) + 1',
    symbolGlossary: [{ sym: 'k', mean: 'vertical shift' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.log2(x) + 1,
    build() { return { question: 'y at x = 8?', answer: { type: 'numeric', target: 4, tol: 0.2, atX: 8, prompt: 'y at x = 8' }, hints: ['3 + 1 = 4'] }; }
  });

  add({
    id: 'el-pop', family: 'exponential', title: 'Town Population',
    context: 'Town of 2000 grows by factor 1.1 each decade: y = 2000·1.1^x.',
    xLabel: 'Decades x', yLabel: 'Population y', xMin: 0, xMax: 5, form: 'y = 2000·1.1^x',
    symbolGlossary: [{ sym: 'b', mean: '10% growth per decade' }],
    paramDefs: [{ key: 'a', label: 'a', min: 2000, max: 2000, step: 100 }, { key: 'b', label: 'b', min: 1.1, max: 1.1, step: 0.01 }],
    eval: (p, x) => 2000 * Math.pow(1.1, x),
    build() { return { question: 'Population after 1 decade?', answer: { type: 'numeric', target: 2200, tol: 30, atX: 1, prompt: 'Population' }, hints: ['2000×1.1 = 2200'] }; }
  });

  add({
    id: 'el-fold', family: 'exponential', title: 'Paper Fold Myth Scale',
    context: 'Thickness multiplies by 2 each fold: y = 0.1·2^x mm (toy model).',
    xLabel: 'Folds x', yLabel: 'Thickness y', xMin: 0, xMax: 8, form: 'y = 0.1·2^x',
    symbolGlossary: [{ sym: 'x', mean: 'folds' }],
    paramDefs: [{ key: 'a', label: 'a', min: 0.1, max: 0.1, step: 0.05 }, { key: 'b', label: 'b', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => 0.1 * Math.pow(2, x),
    build() { return { question: 'Thickness after 6 folds?', answer: { type: 'numeric', target: 6.4, tol: 0.4, atX: 6, prompt: 'Thickness' }, hints: ['0.1·64 = 6.4'] }; }
  });

  add({
    id: 'el-log2', family: 'logarithmic', title: 'log₂(2)',
    context: 'Anything to the first power is itself: log₂(2) = 1.',
    xLabel: 'x', yLabel: 'log₂(x)', xMin: 1, xMax: 8, form: 'y = log₂(x)',
    symbolGlossary: [{ sym: 'y', mean: 'log base 2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => Math.log2(x),
    build() { return { question: 'log₂(2)?', answer: { type: 'numeric', target: 1, tol: 0.1, atX: 2, prompt: 'log₂(2)' }, hints: ['2¹ = 2'] }; }
  });

  add({
    id: 'el-exp-1', family: 'exponential', title: 'Anything to the Zero',
    context: 'y = 5^x equals 1 when x = 0.',
    xLabel: 'x', yLabel: '5^x', xMin: 0, xMax: 4, form: 'y = 5^x',
    symbolGlossary: [{ sym: 'x', mean: 'exponent' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }, { key: 'b', label: 'b', min: 5, max: 5, step: 0.1 }],
    eval: (p, x) => Math.pow(5, x),
    build() { return { question: '5^0?', answer: { type: 'numeric', target: 1, tol: 0.1, atX: 0, prompt: '5^0' }, hints: ['a^0 = 1'] }; }
  });

  add({
    id: 'el-chain', family: 'exponential', title: 'Chain Email',
    context: 'Each person messages 2 new people: y = 4·2^x starting from 4.',
    xLabel: 'Rounds x', yLabel: 'Messages y', xMin: 0, xMax: 5, form: 'y = 4·2^x',
    symbolGlossary: [{ sym: 'a', mean: 'start' }, { sym: 'b', mean: '×2 each round' }],
    paramDefs: [{ key: 'a', label: 'a', min: 4, max: 4, step: 1 }, { key: 'b', label: 'b', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => 4 * Math.pow(2, x),
    build() { return { question: 'Messages after 3 rounds?', answer: { type: 'numeric', target: 32, tol: 1, atX: 3, prompt: 'Messages' }, hints: ['4·8 = 32'] }; }
  });

  add({
    id: 'el-richter', family: 'logarithmic', title: 'Magnitude Style Scale',
    context: 'A toy magnitude y = log₂(x) turns energy-like x into a slower scale.',
    xLabel: 'Energy-like x', yLabel: 'Reading y', xMin: 1, xMax: 16, form: 'y = log₂(x)',
    symbolGlossary: [{ sym: 'x', mean: 'relative energy' }, { sym: 'y', mean: 'log reading' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => Math.log2(x), motion: 'scale',
    build() { return { question: 'Reading when x = 32? Wait — use x = 16 on this graph.', answer: { type: 'numeric', target: 4, tol: 0.2, atX: 16, prompt: 'y at x = 16' }, hints: ['log₂(16) = 4'] }; }
  });

  add({
    id: 'el-cool', family: 'exponential', title: 'Cooling Factor',
    context: 'Temperature difference from room multiplies by 0.8 each hour: y = 50·(0.8)^x.',
    xLabel: 'Hours x', yLabel: 'Diff °C y', xMin: 0, xMax: 8, form: 'y = 50·0.8^x',
    symbolGlossary: [{ sym: 'b', mean: '0.8 decay factor' }],
    paramDefs: [{ key: 'a', label: 'a', min: 50, max: 50, step: 5 }, { key: 'b', label: 'b', min: 0.8, max: 0.8, step: 0.05 }],
    eval: (p, x) => 50 * Math.pow(0.8, x),
    build() { return { question: 'Difference after 1 hour?', answer: { type: 'numeric', target: 40, tol: 1.5, atX: 1, prompt: 'Diff at 1 hour' }, hints: ['50×0.8 = 40'] }; }
  });

  add({
    id: 'el-exp-eval', family: 'exponential', title: 'Evaluate 3^x',
    context: 'Read y = 3^x at a whole-number input.',
    xLabel: 'x', yLabel: '3^x', xMin: 0, xMax: 5, form: 'y = 3^x',
    symbolGlossary: [{ sym: 'x', mean: 'exponent' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }, { key: 'b', label: 'b', min: 3, max: 3, step: 0.1 }],
    eval: (p, x) => Math.pow(3, x),
    build() { return { question: '3^4?', answer: { type: 'numeric', target: 81, tol: 2, atX: 4, prompt: '3^4' }, hints: ['3^4 = 81'] }; }
  });

  add({
    id: 'el-log-1', family: 'logarithmic', title: 'log₂(1)',
    context: '2^0 = 1, so log₂(1) = 0.',
    xLabel: 'x', yLabel: 'log₂(x)', xMin: 1, xMax: 8, form: 'y = log₂(x)',
    symbolGlossary: [{ sym: 'y', mean: 'log base 2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => Math.log2(x),
    build() { return { question: 'log₂(1)?', answer: { type: 'numeric', target: 0, tol: 0.1, atX: 1, prompt: 'log₂(1)' }, hints: ['2^0 = 1'] }; }
  });

  add({
    id: 'el-money-daily', family: 'exponential', title: 'Daily Multiplier',
    context: 'A promo multiplies signups by 1.5 each day from 10.',
    xLabel: 'Days x', yLabel: 'Signups y', xMin: 0, xMax: 6, form: 'y = 10·1.5^x',
    symbolGlossary: [{ sym: 'b', mean: '1.5 daily' }],
    paramDefs: [{ key: 'a', label: 'a', min: 10, max: 10, step: 1 }, { key: 'b', label: 'b', min: 1.5, max: 1.5, step: 0.05 }],
    eval: (p, x) => 10 * Math.pow(1.5, x),
    build() { return { question: 'Signups after 2 days?', answer: { type: 'numeric', target: 22.5, tol: 1, atX: 2, prompt: 'Signups' }, hints: ['10·2.25 = 22.5'] }; }
  });

  add({
    id: 'el-log-product-idea', family: 'logarithmic', title: 'Log Turns Multiply into Add (Reading)',
    context: 'Compare log₂(8) and log₂(4): 3 and 2. Their sum 5 equals log₂(32), a hint that logs turn products into sums.',
    xLabel: 'x', yLabel: 'log₂(x)', xMin: 1, xMax: 32, form: 'y = log₂(x)',
    symbolGlossary: [{ sym: 'y', mean: 'log base 2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.1 }],
    eval: (p, x) => Math.log2(x),
    build() { return { question: 'log₂(32)?', answer: { type: 'numeric', target: 5, tol: 0.2, atX: 32, prompt: 'log₂(32)' }, hints: ['2^5 = 32'] }; }
  });

  add({
    id: 'el-start-one', family: 'exponential', title: 'Start at One',
    context: 'y = 1·1.2^x grows 20% each step from 1.',
    xLabel: 'Steps x', yLabel: 'y', xMin: 0, xMax: 8, form: 'y = 1.2^x',
    symbolGlossary: [{ sym: 'b', mean: '1.2 growth factor' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }, { key: 'b', label: 'b', min: 1.2, max: 1.2, step: 0.05 }],
    eval: (p, x) => Math.pow(1.2, x),
    build() { return { question: 'y after 1 step?', answer: { type: 'numeric', target: 1.2, tol: 0.08, atX: 1, prompt: 'y at x = 1' }, hints: ['1.2^1 = 1.2'] }; }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
