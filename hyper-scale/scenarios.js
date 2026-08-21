/**
 * Hyper-Scale Lab scenarios
 * randomizeParams() reshuffles numbers for the same story/question type.
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

window.SCENARIO_TEMPLATES = [
  {
    id: 'savings',
    family: 'exponential',
    title: 'Compound Interest',
    context: 'You deposit money in an account that grows by a fixed percentage each year. Growth multiplies the balance — it does not add the same dollar amount every year.',
    xLabel: 'Years',
    yLabel: 'Balance ($)',
    xMin: 0, xMax: 10,
    form: 'y = a · b^x',
    eval: (p, x) => p.a * Math.pow(p.b, x),
    motion: null,
    paramDefs: [
      { key: 'a', label: 'Starting amount a ($)', min: 500, max: 2000, step: 100 },
      { key: 'b', label: 'Growth factor b (e.g. 1.07 = 7%)', min: 1.04, max: 1.12, step: 0.01 }
    ],
    atX: 10,
    build(p) {
      const target = roundNice(p.a * Math.pow(p.b, 10), 0);
      const pct = roundNice((p.b - 1) * 100, 0);
      return {
        question: `Using y = a · b^x, set a = ${p.a} and choose b so the balance after 10 years is about ${target}. What balance does your model give at year 10?`,
        answer: { type: 'numeric', target, tol: Math.max(50, target * 0.08), atX: 10, prompt: 'Balance at year 10 ($)' },
        hints: [
          'b > 1 means growth each year',
          `Try b near ${p.b} (about ${pct}% per year)`,
          `Check y at x = 10: a · b^10 ≈ ${target}`
        ]
      };
    }
  },
  {
    id: 'bacteria',
    family: 'exponential',
    title: 'Kitchen Bacteria',
    context: 'Bacteria roughly double (or grow by a fixed factor) each time unit. After several steps the colony is huge.',
    xLabel: 'Time units',
    yLabel: 'Colony size',
    xMin: 0, xMax: 10,
    form: 'y = a · b^x',
    eval: (p, x) => p.a * Math.pow(p.b, x),
    motion: 'colonies',
    paramDefs: [
      { key: 'a', label: 'Starting size a', min: 1, max: 4, step: 1 },
      { key: 'b', label: 'Growth factor b', min: 1.8, max: 2.2, step: 0.1 }
    ],
    atX: 8,
    build(p) {
      const target = roundNice(p.a * Math.pow(p.b, 8), 0);
      return {
        question: `Model y = a · b^x with a = ${p.a} and b ≈ ${p.b}. What is the colony size at turn 8?`,
        answer: { type: 'numeric', target, tol: Math.max(5, target * 0.1), atX: 8, prompt: 'Size at turn 8' },
        hints: [
          `Start with a = ${p.a}, growth factor b ≈ ${p.b}`,
          `At x = 8: a · b^8 ≈ ${target}`
        ]
      };
    }
  },
  {
    id: 'hoop',
    family: 'quadratic',
    title: 'Basketball Shot',
    context: 'A basketball under gravity follows a parabolic path. Height vs position is quadratic.',
    xLabel: 'Horizontal position',
    yLabel: 'Height',
    xMin: 0, xMax: 10,
    form: 'y = a(x − h)² + k',
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    motion: 'ball',
    paramDefs: [
      { key: 'a', label: 'Curvature a (negative)', min: -0.8, max: -0.3, step: 0.05 },
      { key: 'h', label: 'Peak position h', min: 4, max: 6, step: 0.25 },
      { key: 'k', label: 'Peak height k', min: 10, max: 16, step: 0.5 }
    ],
    atX: null, // set to h in build
    build(p) {
      const atX = p.h;
      const target = roundNice(p.k, 1);
      return {
        question: `Use y = a(x − h)² + k with a negative. Set the peak near h = ${p.h} and height k ≈ ${p.k}. What height does your model give at x = ${atX}?`,
        answer: { type: 'numeric', target, tol: 1.5, atX, prompt: `Height at x = ${atX}` },
        hints: [
          'Peak is at x = h with height k',
          'a must be negative for a downward arc',
          `At the peak, y = k ≈ ${target}`
        ]
      };
    }
  },
  {
    id: 'taxi',
    family: 'linear',
    title: 'Taxi Fare',
    context: 'A taxi charges a fixed start fee plus a constant rate per kilometre. Total cost is linear.',
    xLabel: 'Distance (km)',
    yLabel: 'Fare ($)',
    xMin: 0, xMax: 10,
    form: 'y = mx + c',
    eval: (p, x) => p.m * x + p.c,
    motion: null,
    paramDefs: [
      { key: 'm', label: 'Rate m ($ per km)', min: 1.5, max: 3, step: 0.1 },
      { key: 'c', label: 'Start fee c ($)', min: 2, max: 5, step: 0.5 }
    ],
    atX: 7,
    build(p) {
      const atX = 7;
      const target = roundNice(p.m * atX + p.c, 1);
      return {
        question: `Model y = mx + c with m = ${p.m} and c = ${p.c}. What is the fare for a ${atX} km trip?`,
        answer: { type: 'numeric', target, tol: 0.6, atX, prompt: `Fare for ${atX} km ($)` },
        hints: [
          `y = ${p.m} · x + ${p.c}`,
          `At x = ${atX}: y = ${target}`
        ]
      };
    }
  },
  {
    id: 'richter',
    family: 'logarithmic',
    title: 'Earthquake Magnitude',
    context: 'On a logarithmic scale, each step up corresponds to a much larger change in energy.',
    xLabel: 'Relative energy x',
    yLabel: 'Magnitude reading',
    xMin: 1, xMax: 16,
    form: 'y = a · log₂(x) + k',
    eval: (p, x) => (x <= 0 ? NaN : p.a * Math.log2(x) + p.k),
    motion: 'scale',
    paramDefs: [
      { key: 'a', label: 'Scale factor a', min: 1.5, max: 3, step: 0.1 },
      { key: 'k', label: 'Offset k', min: 0, max: 1, step: 0.1 }
    ],
    atX: 8,
    build(p) {
      const atX = 8;
      const target = roundNice(p.a * Math.log2(atX) + p.k, 1);
      return {
        question: `Model y = a · log₂(x) + k with a = ${p.a} and k = ${p.k}. What is y when x = ${atX}?`,
        answer: { type: 'numeric', target, tol: 0.4, atX, prompt: `Reading at x = ${atX}` },
        hints: [
          `log₂(8) = 3`,
          `y = ${p.a} · 3 + ${p.k} ≈ ${target}`
        ]
      };
    }
  },
  {
    id: 'pizza',
    family: 'rational',
    title: 'Sharing a Pizza',
    context: 'One pizza shared equally: amount per person = total ÷ number of people (rational / 1/x).',
    xLabel: 'Number of people',
    yLabel: 'Slices each',
    xMin: 1, xMax: 10,
    form: 'y = a / (x − h)',
    eval: (p, x) => {
      const d = x - (p.h || 0);
      return Math.abs(d) < 1e-9 ? NaN : p.a / d;
    },
    motion: 'slices',
    paramDefs: [
      { key: 'a', label: 'Total slices a', min: 6, max: 12, step: 1 },
      { key: 'h', label: 'Shift h (usually 0)', min: 0, max: 0, step: 1 }
    ],
    atX: 4,
    build(p) {
      const atX = 4;
      const target = roundNice(p.a / atX, 2);
      return {
        question: `Model y = a / x with a = ${p.a} slices. How many slices per person when ${atX} people share?`,
        answer: { type: 'numeric', target, tol: 0.25, atX, prompt: `Slices each when ${atX} people` },
        hints: [
          `${p.a} slices ÷ ${atX} people = ${target} each`
        ]
      };
    }
  },
  {
    id: 'walk',
    family: 'linear',
    title: 'Walk to School',
    context: 'You walk at a nearly constant speed. Distance increases steadily with time — linear.',
    xLabel: 'Time',
    yLabel: 'Distance (km)',
    xMin: 0, xMax: 10,
    form: 'y = mx + c',
    eval: (p, x) => p.m * x + p.c,
    motion: null,
    paramDefs: [
      { key: 'm', label: 'Speed m (km per unit)', min: 0.8, max: 1.5, step: 0.1 },
      { key: 'c', label: 'Start position c', min: 0, max: 0, step: 0.1 }
    ],
    atX: 5,
    build(p) {
      const atX = 5;
      const target = roundNice(p.m * atX + p.c, 1);
      return {
        question: `Model y = mx with m = ${p.m}. How far have you walked at t = ${atX}?`,
        answer: { type: 'numeric', target, tol: 0.3, atX, prompt: `Distance at t = ${atX} (km)` },
        hints: [`${p.m} × ${atX} = ${target}`]
      };
    }
  },
  {
    id: 'phone',
    family: 'quadratic',
    title: 'Dropped Phone',
    context: 'In free fall, height vs time is roughly quadratic (accelerated motion).',
    xLabel: 'Time',
    yLabel: 'Height',
    xMin: 0, xMax: 6,
    form: 'y = a(x − h)² + k',
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    motion: 'ball',
    paramDefs: [
      { key: 'a', label: 'a (negative for falling)', min: -1.2, max: -0.5, step: 0.1 },
      { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 },
      { key: 'k', label: 'Start height k', min: 15, max: 25, step: 1 }
    ],
    atX: 3,
    build(p) {
      const atX = 3;
      const target = roundNice(p.a * Math.pow(atX - p.h, 2) + p.k, 1);
      return {
        question: `Use y = a(x − h)² + k with a = ${p.a}, h = ${p.h}, k = ${p.k}. What is height at t = ${atX}?`,
        answer: { type: 'numeric', target, tol: 1.2, atX, prompt: `Height at t = ${atX}` },
        hints: [
          `y = ${p.a}·(${atX})² + ${p.k} ≈ ${target}`
        ]
      };
    }
  }
];

/** Instantiate a scenario with random (or fixed) parameters */
window.instantiateScenario = function (template, fixedParams) {
  const params = {};
  const paramUI = [];
  template.paramDefs.forEach(d => {
    const val = fixedParams && fixedParams[d.key] != null
      ? fixedParams[d.key]
      : randBetween(d.min, d.max, d.step);
    params[d.key] = val;
    paramUI.push({
      key: d.key,
      label: d.label,
      min: d.min,
      max: d.max,
      step: d.step,
      default: val
    });
  });
  const built = template.build(params);
  return {
    id: template.id,
    family: template.family,
    title: template.title,
    context: template.context,
    xLabel: template.xLabel,
    yLabel: template.yLabel,
    xMin: template.xMin,
    xMax: template.xMax,
    form: template.form,
    eval: template.eval,
    motion: template.motion,
    params: paramUI,
    idealParams: { ...params },
    question: built.question,
    answer: built.answer,
    hints: built.hints
  };
};

window.pickScenario = function (familyFilter) {
  let pool = window.SCENARIO_TEMPLATES;
  if (familyFilter) pool = pool.filter(s => s.family === familyFilter);
  if (!pool.length) pool = window.SCENARIO_TEMPLATES;
  const t = pool[Math.floor(Math.random() * pool.length)];
  return window.instantiateScenario(t);
};

/** Same story, new random numbers */
window.rerollScenario = function (scenarioId) {
  const t = window.SCENARIO_TEMPLATES.find(s => s.id === scenarioId);
  if (!t) return window.pickScenario();
  return window.instantiateScenario(t);
};
