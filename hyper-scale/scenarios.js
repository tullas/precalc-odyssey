/**
 * Hyper-Scale Lab scenarios — plain-language questions
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
    xLabel: 'Years',
    yLabel: 'Balance ($)',
    xMin: 0, xMax: 10,
    form: 'y = a · b^x',
    eval: (p, x) => p.a * Math.pow(p.b, x),
    motion: null,
    paramDefs: [
      { key: 'a', label: 'Starting amount ($)', min: 500, max: 2000, step: 100 },
      { key: 'b', label: 'Yearly growth factor (1.05 = 5%)', min: 1.04, max: 1.12, step: 0.01 }
    ],
    build(p) {
      const target = roundNice(p.a * Math.pow(p.b, 10), 0);
      const pct = roundNice((p.b - 1) * 100, 0);
      return {
        question: `You start with $${p.a}. After 10 years you want the balance to be about $${target}. Move the sliders until the curve reaches roughly that amount at year 10, then type the balance your model shows at year 10.`,
        answer: { type: 'numeric', target, tol: Math.max(50, target * 0.08), atX: 10, prompt: 'What balance do you get at year 10? ($)' },
        hints: [
          'A growth factor above 1 means the money increases each year',
          `Around ${pct}% per year means a growth factor near ${p.b}`,
          `Look at the graph where Years = 10`
        ]
      };
    }
  },
  {
    id: 'bacteria',
    family: 'exponential',
    title: 'Bacteria on a Dish',
    context: 'Bacteria on a forgotten plate keep multiplying. If the population multiplies by the same factor each time period, it grows slowly at first and then very quickly — that is exponential growth.',
    xLabel: 'Time periods',
    yLabel: 'Number of bacteria',
    xMin: 0, xMax: 10,
    form: 'y = a · b^x',
    eval: (p, x) => p.a * Math.pow(p.b, x),
    motion: 'colonies',
    paramDefs: [
      { key: 'a', label: 'Starting number', min: 1, max: 4, step: 1 },
      { key: 'b', label: 'Multiply by this each period', min: 1.8, max: 2.2, step: 0.1 }
    ],
    build(p) {
      const target = roundNice(p.a * Math.pow(p.b, 8), 0);
      return {
        question: `Start with ${p.a} bacterium (or small group) and multiply by about ${p.b} each period. After 8 periods, about how many bacteria are there? Adjust the sliders to match, then enter the value at time = 8.`,
        answer: { type: 'numeric', target, tol: Math.max(5, target * 0.1), atX: 8, prompt: 'How many bacteria at time 8?' },
        hints: [
          `If they roughly double each time, use a factor near 2`,
          `Read the graph at Time periods = 8`
        ]
      };
    }
  },
  {
    id: 'hoop',
    family: 'quadratic',
    title: 'Basketball Shot',
    context: 'When you throw a basketball, it rises and then falls in a smooth curve. That path is a parabola — a quadratic shape. The highest point is the peak of the shot.',
    xLabel: 'Distance along the court',
    yLabel: 'Height of the ball',
    xMin: 0, xMax: 10,
    form: 'y = a(x − h)² + k',
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    motion: 'ball',
    paramDefs: [
      { key: 'a', label: 'How curved (use a negative number)', min: -0.8, max: -0.3, step: 0.05 },
      { key: 'h', label: 'Where the peak is (horizontal)', min: 4, max: 6, step: 0.25 },
      { key: 'k', label: 'How high the peak is', min: 10, max: 16, step: 0.5 }
    ],
    build(p) {
      const atX = p.h;
      const target = roundNice(p.k, 1);
      return {
        question: `Make an arc that peaks near position ${atX} with height about ${target}. (Use a negative “curved” value so the ball goes up then down.) What height does your model show at the peak?`,
        answer: { type: 'numeric', target, tol: 1.5, atX, prompt: `Height at the peak (position ${atX})` },
        hints: [
          'The peak height is the value of k',
          'a must be negative or the curve opens upward',
          'Match the peak on the graph to the question'
        ]
      };
    }
  },
  {
    id: 'taxi',
    family: 'linear',
    title: 'Taxi Ride',
    context: 'A taxi charges a starting fee when you get in, then a fixed price for every kilometre. The total cost goes up by the same amount each kilometre — a straight line on a graph.',
    xLabel: 'Distance (km)',
    yLabel: 'Total fare ($)',
    xMin: 0, xMax: 10,
    form: 'y = mx + c',
    eval: (p, x) => p.m * x + p.c,
    motion: null,
    paramDefs: [
      { key: 'm', label: 'Price per kilometre ($)', min: 1.5, max: 3, step: 0.1 },
      { key: 'c', label: 'Starting fee ($)', min: 2, max: 5, step: 0.5 }
    ],
    build(p) {
      const atX = 7;
      const target = roundNice(p.m * atX + p.c, 1);
      return {
        question: `The meter starts at $${p.c} and adds $${p.m} for each kilometre. What is the total fare after a ${atX} km ride? Set the sliders to those numbers and read the graph at ${atX} km.`,
        answer: { type: 'numeric', target, tol: 0.6, atX, prompt: `Fare after ${atX} km ($)` },
        hints: [
          `Total = starting fee + (price per km × distance)`,
          `At ${atX} km: ${p.c} + ${p.m} × ${atX} = ${target}`
        ]
      };
    }
  },
  {
    id: 'richter',
    family: 'logarithmic',
    title: 'Earthquake Scale',
    context: 'Earthquake “magnitude” is not a simple linear scale. A jump of 1 on the scale means a much larger jump in energy. That kind of scale is logarithmic: big changes in energy look like smaller steps on the dial.',
    xLabel: 'Relative energy',
    yLabel: 'Magnitude reading',
    xMin: 1, xMax: 16,
    form: 'y = a · log₂(x) + k',
    eval: (p, x) => (x <= 0 ? NaN : p.a * Math.log2(x) + p.k),
    motion: 'scale',
    paramDefs: [
      { key: 'a', label: 'How stretched the scale is', min: 1.5, max: 3, step: 0.1 },
      { key: 'k', label: 'Offset on the scale', min: 0, max: 1, step: 0.1 }
    ],
    build(p) {
      const atX = 8;
      const target = roundNice(p.a * Math.log2(atX) + p.k, 1);
      return {
        question: `Using this log scale with stretch ${p.a} and offset ${p.k}, what magnitude reading do you get when relative energy is ${atX}? Set the sliders and read the value at energy = ${atX}.`,
        answer: { type: 'numeric', target, tol: 0.4, atX, prompt: `Magnitude when energy = ${atX}` },
        hints: [
          'log₂(8) = 3 (because 2³ = 8)',
          `Reading ≈ ${p.a} × 3 + ${p.k} ≈ ${target}`
        ]
      };
    }
  },
  {
    id: 'pizza',
    family: 'rational',
    title: 'Sharing a Pizza',
    context: 'You order one pizza and split it evenly among friends. The more people who join, the fewer slices each person gets. That “divide the same total among more people” idea is a simple rational relationship.',
    xLabel: 'Number of people',
    yLabel: 'Slices per person',
    xMin: 1, xMax: 10,
    form: 'y = a / x',
    eval: (p, x) => {
      const d = x - (p.h || 0);
      return Math.abs(d) < 1e-9 ? NaN : p.a / d;
    },
    motion: 'slices',
    paramDefs: [
      { key: 'a', label: 'Total slices in the pizza', min: 6, max: 12, step: 1 },
      { key: 'h', label: 'Shift (leave at 0)', min: 0, max: 0, step: 1 }
    ],
    build(p) {
      const atX = 4;
      const target = roundNice(p.a / atX, 2);
      return {
        question: `The pizza has ${p.a} slices. You share it equally with a group of ${atX} people (including you). How many slices does each person get? Set total slices to ${p.a} and read the graph at ${atX} people.`,
        answer: { type: 'numeric', target, tol: 0.25, atX, prompt: `Slices each person gets (${atX} people)` },
        hints: [
          'Each person gets total slices ÷ number of people',
          `${p.a} ÷ ${atX} = ${target}`
        ]
      };
    }
  },
  {
    id: 'walk',
    family: 'linear',
    title: 'Walking to School',
    context: 'You walk at a steady pace. Every unit of time you cover about the same distance, so distance vs time is a straight line.',
    xLabel: 'Time',
    yLabel: 'Distance walked (km)',
    xMin: 0, xMax: 10,
    form: 'y = mx + c',
    eval: (p, x) => p.m * x + p.c,
    motion: null,
    paramDefs: [
      { key: 'm', label: 'Walking speed (km per time unit)', min: 0.8, max: 1.5, step: 0.1 },
      { key: 'c', label: 'Starting position (usually 0)', min: 0, max: 0, step: 0.1 }
    ],
    build(p) {
      const atX = 5;
      const target = roundNice(p.m * atX + p.c, 1);
      return {
        question: `You walk at ${p.m} km per time unit, starting from home (0). How far have you gone after ${atX} time units? Set the speed slider and read the distance at time = ${atX}.`,
        answer: { type: 'numeric', target, tol: 0.3, atX, prompt: `Distance after ${atX} time units (km)` },
        hints: [
          'Distance = speed × time',
          `${p.m} × ${atX} = ${target}`
        ]
      };
    }
  },
  {
    id: 'phone',
    family: 'quadratic',
    title: 'Dropped Phone',
    context: 'If a phone slips from your hand, it falls faster and faster — not at constant speed. Height above the ground vs time follows a curved (quadratic) path.',
    xLabel: 'Time after drop',
    yLabel: 'Height above ground',
    xMin: 0, xMax: 6,
    form: 'y = a(x − h)² + k',
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    motion: 'ball',
    paramDefs: [
      { key: 'a', label: 'Fall curvature (negative)', min: -1.2, max: -0.5, step: 0.1 },
      { key: 'h', label: 'Time shift (usually 0)', min: 0, max: 0, step: 0.25 },
      { key: 'k', label: 'Height when it left your hand', min: 15, max: 25, step: 1 }
    ],
    build(p) {
      const atX = 3;
      const target = roundNice(p.a * Math.pow(atX - p.h, 2) + p.k, 1);
      return {
        question: `The phone starts at height ${p.k} and falls with curvature ${p.a}. About how high is it after ${atX} time units? Match the sliders and read the height at time = ${atX}.`,
        answer: { type: 'numeric', target, tol: 1.2, atX, prompt: `Height at time ${atX}` },
        hints: [
          'Height drops faster as time goes on',
          `At time ${atX}, height ≈ ${target}`
        ]
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

window.rerollScenario = function (scenarioId) {
  const t = window.SCENARIO_TEMPLATES.find(s => s.id === scenarioId);
  if (!t) return window.pickScenario();
  return window.instantiateScenario(t);
};
