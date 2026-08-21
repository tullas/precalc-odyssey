/**
 * Hyper-Scale Lab scenarios
 * Each template must define symbolGlossary for a,b,x etc.
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
    title: 'Savings Account',
    context: 'You put money in a savings account. Each year the bank multiplies your balance by the same growth factor (for example 1.05 means 5% interest). So the money grows faster over time — not by the same fixed dollar amount every year.',
    xLabel: 'Years (x)',
    yLabel: 'Balance in $ (y)',
    xMin: 0, xMax: 10,
    form: 'y = a · b^x',
    symbolGlossary: [
      { sym: 'x', mean: 'time in years (horizontal axis)' },
      { sym: 'y', mean: 'account balance in dollars (vertical axis)' },
      { sym: 'a', mean: 'starting amount (balance at year 0)' },
      { sym: 'b', mean: 'growth factor each year (1.05 means +5%)' }
    ],
    eval: (p, x) => p.a * Math.pow(p.b, x),
    motion: null,
    paramDefs: [
      { key: 'a', label: 'a — Starting amount ($)', min: 500, max: 2000, step: 100 },
      { key: 'b', label: 'b — Yearly growth factor (1.05 = 5%)', min: 1.04, max: 1.12, step: 0.01 }
    ],
    build(p) {
      const target = roundNice(p.a * Math.pow(p.b, 10), 0);
      const pct = roundNice((p.b - 1) * 100, 0);
      return {
        question: `You start with $${p.a}. After 10 years you want the balance to be about $${target}. Move the sliders until the curve reaches roughly that amount at year 10, then type the balance your model shows at year 10.`,
        answer: { type: 'numeric', target, tol: Math.max(50, target * 0.08), atX: 10, prompt: 'What balance do you get at year 10? ($)' },
        hints: [
          'b above 1 means the money increases each year',
          `About ${pct}% per year means b near ${p.b}`,
          'Read y on the graph where x (Years) = 10'
        ]
      };
    }
  },
  {
    id: 'bacteria',
    family: 'exponential',
    title: 'Bacteria on a Dish',
    context: 'Bacteria on a forgotten plate keep multiplying. If the population multiplies by the same factor each time period, it grows slowly at first and then very quickly — that is exponential growth.',
    xLabel: 'Time periods (x)',
    yLabel: 'Number of bacteria (y)',
    xMin: 0, xMax: 10,
    form: 'y = a · b^x',
    symbolGlossary: [
      { sym: 'x', mean: 'number of time periods' },
      { sym: 'y', mean: 'estimated bacteria count' },
      { sym: 'a', mean: 'starting count at time 0' },
      { sym: 'b', mean: 'factor multiplied each period (2 = double)' }
    ],
    eval: (p, x) => p.a * Math.pow(p.b, x),
    motion: 'colonies',
    paramDefs: [
      { key: 'a', label: 'a — Starting number', min: 1, max: 4, step: 1 },
      { key: 'b', label: 'b — Multiply by each period', min: 1.8, max: 2.2, step: 0.1 }
    ],
    build(p) {
      const target = roundNice(p.a * Math.pow(p.b, 8), 0);
      return {
        question: `Start with ${p.a} and multiply by about ${p.b} each period. After 8 periods, about how many bacteria are there? Adjust the sliders, then enter the value at time = 8.`,
        answer: { type: 'numeric', target, tol: Math.max(5, target * 0.1), atX: 8, prompt: 'How many bacteria at time 8?' },
        hints: ['A factor near 2 means roughly doubling each period', 'Read y where x = 8']
      };
    }
  },
  {
    id: 'hoop',
    family: 'quadratic',
    title: 'Basketball Shot',
    context: 'When you throw a basketball, it rises and then falls in a smooth curve. That path is a parabola. The highest point is the peak of the shot.',
    xLabel: 'Distance along court (x)',
    yLabel: 'Height of ball (y)',
    xMin: 0, xMax: 10,
    form: 'y = a(x − h)² + k',
    symbolGlossary: [
      { sym: 'x', mean: 'horizontal position along the court' },
      { sym: 'y', mean: 'height of the ball' },
      { sym: 'a', mean: 'curvature (negative = opens downward)' },
      { sym: 'h', mean: 'horizontal position of the peak' },
      { sym: 'k', mean: 'height at the peak' }
    ],
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    motion: 'ball',
    paramDefs: [
      { key: 'a', label: 'a — Curvature (negative)', min: -0.8, max: -0.3, step: 0.05 },
      { key: 'h', label: 'h — Peak position', min: 4, max: 6, step: 0.25 },
      { key: 'k', label: 'k — Peak height', min: 10, max: 16, step: 0.5 }
    ],
    build(p) {
      const atX = p.h;
      const target = roundNice(p.k, 1);
      return {
        question: `Make an arc that peaks near position ${atX} with height about ${target}. (Keep a negative so the ball goes up then down.) What height does your model show at the peak?`,
        answer: { type: 'numeric', target, tol: 1.5, atX, prompt: `Height at the peak (x = ${atX})` },
        hints: ['Peak height is k', 'a must be negative', 'Read y at x = h']
      };
    }
  },
  {
    id: 'taxi',
    family: 'linear',
    title: 'Taxi Ride',
    context: 'A taxi charges a starting fee when you get in, then a fixed price for every kilometre. The total cost goes up by the same amount each kilometre — a straight line.',
    xLabel: 'Distance in km (x)',
    yLabel: 'Total fare in $ (y)',
    xMin: 0, xMax: 10,
    form: 'y = mx + c',
    symbolGlossary: [
      { sym: 'x', mean: 'distance traveled in kilometres' },
      { sym: 'y', mean: 'total fare in dollars' },
      { sym: 'm', mean: 'price added per kilometre' },
      { sym: 'c', mean: 'starting fee at 0 km' }
    ],
    eval: (p, x) => p.m * x + p.c,
    motion: null,
    paramDefs: [
      { key: 'm', label: 'm — Price per kilometre ($)', min: 1.5, max: 3, step: 0.1 },
      { key: 'c', label: 'c — Starting fee ($)', min: 2, max: 5, step: 0.5 }
    ],
    build(p) {
      const atX = 7;
      const target = roundNice(p.m * atX + p.c, 1);
      return {
        question: `The meter starts at $${p.c} and adds $${p.m} each kilometre. What is the total fare after ${atX} km? Set the sliders and read the graph at ${atX} km.`,
        answer: { type: 'numeric', target, tol: 0.6, atX, prompt: `Fare after ${atX} km ($)` },
        hints: [`y = c + m · x`, `At x = ${atX}: ${p.c} + ${p.m}×${atX} = ${target}`]
      };
    }
  },
  {
    id: 'richter',
    family: 'logarithmic',
    title: 'Earthquake Scale',
    context: 'Earthquake magnitude is not a simple linear scale. A jump of 1 on the scale means a much larger jump in energy. That kind of scale is logarithmic.',
    xLabel: 'Relative energy (x)',
    yLabel: 'Magnitude reading (y)',
    xMin: 1, xMax: 16,
    form: 'y = a · log₂(x) + k',
    symbolGlossary: [
      { sym: 'x', mean: 'relative energy (must be > 0)' },
      { sym: 'y', mean: 'magnitude reading on the scale' },
      { sym: 'a', mean: 'how stretched the scale is' },
      { sym: 'k', mean: 'vertical offset of the scale' }
    ],
    eval: (p, x) => (x <= 0 ? NaN : p.a * Math.log2(x) + p.k),
    motion: 'scale',
    paramDefs: [
      { key: 'a', label: 'a — Scale stretch', min: 1.5, max: 3, step: 0.1 },
      { key: 'k', label: 'k — Offset', min: 0, max: 1, step: 0.1 }
    ],
    build(p) {
      const atX = 8;
      const target = roundNice(p.a * Math.log2(atX) + p.k, 1);
      return {
        question: `With stretch a = ${p.a} and offset k = ${p.k}, what magnitude do you read when relative energy x = ${atX}? Set the sliders and read y at x = ${atX}.`,
        answer: { type: 'numeric', target, tol: 0.4, atX, prompt: `Magnitude when x = ${atX}` },
        hints: ['log₂(8) = 3', `y ≈ ${p.a}×3 + ${p.k} ≈ ${target}`]
      };
    }
  },
  {
    id: 'pizza',
    family: 'rational',
    title: 'Sharing a Pizza',
    context: 'You order one pizza and split it evenly among friends. The more people who join, the fewer slices each person gets.',
    xLabel: 'Number of people (x)',
    yLabel: 'Slices per person (y)',
    xMin: 1, xMax: 10,
    form: 'y = a / x',
    symbolGlossary: [
      { sym: 'x', mean: 'number of people sharing' },
      { sym: 'y', mean: 'slices each person gets' },
      { sym: 'a', mean: 'total slices in the pizza' }
    ],
    eval: (p, x) => {
      const d = x - (p.h || 0);
      return Math.abs(d) < 1e-9 ? NaN : p.a / d;
    },
    motion: 'slices',
    paramDefs: [
      { key: 'a', label: 'a — Total slices', min: 6, max: 12, step: 1 },
      { key: 'h', label: 'h — Shift (keep 0)', min: 0, max: 0, step: 1 }
    ],
    build(p) {
      const atX = 4;
      const target = roundNice(p.a / atX, 2);
      return {
        question: `The pizza has ${p.a} slices. You share it equally among ${atX} people. How many slices does each person get? Set total slices to ${p.a} and read the graph at ${atX} people.`,
        answer: { type: 'numeric', target, tol: 0.25, atX, prompt: `Slices each (${atX} people)` },
        hints: ['y = total slices ÷ people', `${p.a} ÷ ${atX} = ${target}`]
      };
    }
  },
  {
    id: 'walk',
    family: 'linear',
    title: 'Walking to School',
    context: 'You walk at a steady pace. Every unit of time you cover about the same distance, so distance vs time is a straight line.',
    xLabel: 'Time (x)',
    yLabel: 'Distance in km (y)',
    xMin: 0, xMax: 10,
    form: 'y = mx + c',
    symbolGlossary: [
      { sym: 'x', mean: 'time walked' },
      { sym: 'y', mean: 'distance from home in km' },
      { sym: 'm', mean: 'walking speed (km per time unit)' },
      { sym: 'c', mean: 'starting position (0 = home)' }
    ],
    eval: (p, x) => p.m * x + p.c,
    motion: null,
    paramDefs: [
      { key: 'm', label: 'm — Speed (km per time unit)', min: 0.8, max: 1.5, step: 0.1 },
      { key: 'c', label: 'c — Start position', min: 0, max: 0, step: 0.1 }
    ],
    build(p) {
      const atX = 5;
      const target = roundNice(p.m * atX + p.c, 1);
      return {
        question: `You walk at ${p.m} km per time unit from home. How far have you gone after ${atX} time units? Set the speed and read distance at time = ${atX}.`,
        answer: { type: 'numeric', target, tol: 0.3, atX, prompt: `Distance after ${atX} time units (km)` },
        hints: ['distance = speed × time', `${p.m} × ${atX} = ${target}`]
      };
    }
  },
  {
    id: 'phone',
    family: 'quadratic',
    title: 'Dropped Phone',
    context: 'If a phone slips from your hand, it falls faster and faster. Height above the ground vs time follows a curved path.',
    xLabel: 'Time after drop (x)',
    yLabel: 'Height above ground (y)',
    xMin: 0, xMax: 6,
    form: 'y = a(x − h)² + k',
    symbolGlossary: [
      { sym: 'x', mean: 'time since the phone left your hand' },
      { sym: 'y', mean: 'height above the ground' },
      { sym: 'a', mean: 'how steeply it curves down (negative)' },
      { sym: 'h', mean: 'time shift (usually 0)' },
      { sym: 'k', mean: 'height when it left your hand' }
    ],
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    motion: 'ball',
    paramDefs: [
      { key: 'a', label: 'a — Fall curvature (negative)', min: -1.2, max: -0.5, step: 0.1 },
      { key: 'h', label: 'h — Time shift', min: 0, max: 0, step: 0.25 },
      { key: 'k', label: 'k — Start height', min: 15, max: 25, step: 1 }
    ],
    build(p) {
      const atX = 3;
      const target = roundNice(p.a * Math.pow(atX - p.h, 2) + p.k, 1);
      return {
        question: `The phone starts at height ${p.k} with curvature ${p.a}. About how high is it after ${atX} time units? Match the sliders and read height at time = ${atX}.`,
        answer: { type: 'numeric', target, tol: 1.2, atX, prompt: `Height at time ${atX}` },
        hints: [`At x = ${atX}, y ≈ ${target}`]
      };
    }
  }
];

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

/** Math gate: ideal params must hit target */
window.verifyScenarioMath = function (scenario) {
  if (!scenario.answer || scenario.answer.atX == null) return { ok: true };
  const y = scenario.eval(scenario.idealParams, scenario.answer.atX);
  if (!Number.isFinite(y)) return { ok: false, reason: 'non-finite at atX' };
  const tol = scenario.answer.tol ?? 1;
  if (Math.abs(y - scenario.answer.target) > tol) {
    return { ok: false, reason: `eval=${y} vs target=${scenario.answer.target}` };
  }
  return { ok: true };
};

window.pickScenario = function (familyFilter) {
  let pool = window.SCENARIO_TEMPLATES;
  if (familyFilter) pool = pool.filter(s => s.family === familyFilter);
  if (!pool.length) pool = window.SCENARIO_TEMPLATES;
  for (let tries = 0; tries < 12; tries++) {
    const t = pool[Math.floor(Math.random() * pool.length)];
    const s = window.instantiateScenario(t);
    const v = window.verifyScenarioMath(s);
    if (v.ok) return s;
  }
  return window.instantiateScenario(pool[0]);
};

window.rerollScenario = function (scenarioId) {
  const t = window.SCENARIO_TEMPLATES.find(s => s.id === scenarioId);
  if (!t) return window.pickScenario();
  for (let tries = 0; tries < 12; tries++) {
    const s = window.instantiateScenario(t);
    if (window.verifyScenarioMath(s).ok) return s;
  }
  return window.instantiateScenario(t);
};
