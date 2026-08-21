/**
 * Hyper-Scale Lab — Practical scenarios
 * Only the sensible function family is available per scenario.
 */
window.SCENARIOS = [
  {
    id: 'savings',
    family: 'exponential',
    title: 'Compound Interest',
    context: 'You deposit money in an account that grows by a fixed percentage each year. Growth multiplies the balance — it does not add the same dollar amount every year.',
    question: 'Using y = a · b^x (a = starting amount, b = growth factor per year), set a = 1000 and find a growth factor b so that the balance is about 2000 after 10 years. What balance does your model give at year 10?',
    xLabel: 'Years',
    yLabel: 'Balance ($)',
    xMin: 0, xMax: 10,
    params: [
      { key: 'a', label: 'Starting amount a ($)', min: 100, max: 5000, step: 100, default: 1000 },
      { key: 'b', label: 'Growth factor b (e.g. 1.07 = 7%)', min: 1.01, max: 1.25, step: 0.01, default: 1.05 }
    ],
    form: 'y = a · b^x',
    eval: (p, x) => p.a * Math.pow(p.b, x),
    answer: { type: 'numeric', target: 2000, tol: 150, atX: 10, prompt: 'Balance at year 10 ($)' },
    motion: null,
    hints: ['b > 1 means growth each year', 'Try b around 1.07 (about 7% per year)', 'Read the value at x = 10 on the graph']
  },
  {
    id: 'bacteria',
    family: 'exponential',
    title: 'Kitchen Bacteria',
    context: 'Bacteria roughly double every time unit under good conditions. After several doublings the colony is huge — linear growth would badly underestimate that.',
    question: 'Model y = a · 2^x (doubling each turn). With a = 1, what is the colony size at turn 8?',
    xLabel: 'Time units',
    yLabel: 'Colony size',
    xMin: 0, xMax: 10,
    params: [
      { key: 'a', label: 'Starting size a', min: 1, max: 10, step: 1, default: 1 },
      { key: 'b', label: 'Growth factor b (2 = double)', min: 1.5, max: 2.5, step: 0.1, default: 2 }
    ],
    form: 'y = a · b^x',
    eval: (p, x) => p.a * Math.pow(p.b, x),
    answer: { type: 'numeric', target: 256, tol: 20, atX: 8, prompt: 'Size at turn 8' },
    motion: 'colonies',
    hints: ['Doubling means b = 2', 'At x = 8, 1 · 2^8 = 256']
  },
  {
    id: 'hoop',
    family: 'quadratic',
    title: 'Basketball Shot',
    context: 'A basketball under gravity follows a parabolic path. Height vs horizontal position (or time) is quadratic.',
    question: 'Use y = a(x − h)² + k. Set a negative so the arc opens downward. Adjust so the peak is near x = 5 and height about 12. What height does your model give at x = 5?',
    xLabel: 'Horizontal position',
    yLabel: 'Height',
    xMin: 0, xMax: 10,
    params: [
      { key: 'a', label: 'Curvature a (negative = opens down)', min: -2, max: -0.1, step: 0.05, default: -0.5 },
      { key: 'h', label: 'Peak position h', min: 2, max: 8, step: 0.25, default: 5 },
      { key: 'k', label: 'Peak height k', min: 5, max: 20, step: 0.5, default: 12 }
    ],
    form: 'y = a(x − h)² + k',
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    answer: { type: 'numeric', target: 12, tol: 1.5, atX: 5, prompt: 'Height at x = 5' },
    motion: 'ball',
    hints: ['Peak is at x = h, height = k', 'a must be negative for a downward arc']
  },
  {
    id: 'taxi',
    family: 'linear',
    title: 'Taxi Fare',
    context: 'A taxi charges a fixed start fee plus a constant rate per kilometre. Total cost rises at a steady rate — a straight line.',
    question: 'Model y = mx + c with c = 3 (start fee) and m = 2 ($ per km). What is the fare for a 7 km trip?',
    xLabel: 'Distance (km)',
    yLabel: 'Fare ($)',
    xMin: 0, xMax: 10,
    params: [
      { key: 'm', label: 'Rate m ($ per km)', min: 0.5, max: 5, step: 0.1, default: 2 },
      { key: 'c', label: 'Start fee c ($)', min: 0, max: 10, step: 0.5, default: 3 }
    ],
    form: 'y = mx + c',
    eval: (p, x) => p.m * x + p.c,
    answer: { type: 'numeric', target: 17, tol: 1, atX: 7, prompt: 'Fare for 7 km ($)' },
    motion: null,
    hints: ['At x = 7: y = 2·7 + 3 = 17']
  },
  {
    id: 'richter',
    family: 'logarithmic',
    title: 'Earthquake Magnitude',
    context: 'On a Richter-style scale, each step up of 1 means far more energy. The scale is logarithmic: large energy changes become smaller steps on the scale.',
    question: 'Model y = a · log₂(x) for x ≥ 1. With a = 2, what is y when x = 8?',
    xLabel: 'Relative energy x',
    yLabel: 'Magnitude reading',
    xMin: 1, xMax: 16,
    params: [
      { key: 'a', label: 'Scale factor a', min: 0.5, max: 4, step: 0.1, default: 2 },
      { key: 'k', label: 'Offset k', min: -2, max: 2, step: 0.1, default: 0 }
    ],
    form: 'y = a · log₂(x) + k',
    eval: (p, x) => (x <= 0 ? NaN : p.a * Math.log2(x) + p.k),
    answer: { type: 'numeric', target: 6, tol: 0.4, atX: 8, prompt: 'Reading at x = 8' },
    motion: 'scale',
    hints: ['log₂(8) = 3, so 2·3 = 6']
  },
  {
    id: 'pizza',
    family: 'rational',
    title: 'Sharing a Pizza',
    context: 'One pizza shared equally: amount per person = total ÷ number of people. That is a 1/n (rational) relationship.',
    question: 'Model y = a / x with a = 8 (slices). How many slices per person when 4 people share?',
    xLabel: 'Number of people',
    yLabel: 'Slices each',
    xMin: 1, xMax: 10,
    params: [
      { key: 'a', label: 'Total slices a', min: 4, max: 16, step: 1, default: 8 },
      { key: 'h', label: 'Shift h (usually 0)', min: -1, max: 1, step: 0.5, default: 0 }
    ],
    form: 'y = a / (x − h)',
    eval: (p, x) => {
      const d = x - p.h;
      return Math.abs(d) < 1e-9 ? NaN : p.a / d;
    },
    answer: { type: 'numeric', target: 2, tol: 0.2, atX: 4, prompt: 'Slices each when 4 people' },
    motion: 'slices',
    hints: ['8 slices ÷ 4 people = 2 each']
  },
  {
    id: 'walk',
    family: 'linear',
    title: 'Walk to School',
    context: 'You walk at a nearly constant speed. Distance from home increases steadily with time — linear.',
    question: 'Model y = mx with m = 1.2 km per time unit. How far have you walked at t = 5?',
    xLabel: 'Time',
    yLabel: 'Distance (km)',
    xMin: 0, xMax: 10,
    params: [
      { key: 'm', label: 'Speed m (km per unit)', min: 0.5, max: 3, step: 0.1, default: 1.2 },
      { key: 'c', label: 'Start position c', min: 0, max: 2, step: 0.1, default: 0 }
    ],
    form: 'y = mx + c',
    eval: (p, x) => p.m * x + p.c,
    answer: { type: 'numeric', target: 6, tol: 0.4, atX: 5, prompt: 'Distance at t = 5 (km)' },
    motion: null,
    hints: ['1.2 × 5 = 6']
  },
  {
    id: 'phone',
    family: 'quadratic',
    title: 'Dropped Phone',
    context: 'In free fall, height vs time is roughly quadratic (accelerated motion), not a straight line.',
    question: 'Use y = a(x − h)² + k with a = −0.8, h = 0, k = 20 (drop from height 20). What is height at t = 3?',
    xLabel: 'Time',
    yLabel: 'Height',
    xMin: 0, xMax: 6,
    params: [
      { key: 'a', label: 'a (negative for falling)', min: -2, max: -0.2, step: 0.05, default: -0.8 },
      { key: 'h', label: 'h', min: 0, max: 2, step: 0.25, default: 0 },
      { key: 'k', label: 'Start height k', min: 10, max: 30, step: 1, default: 20 }
    ],
    form: 'y = a(x − h)² + k',
    eval: (p, x) => p.a * Math.pow(x - p.h, 2) + p.k,
    answer: { type: 'numeric', target: 12.8, tol: 1.5, atX: 3, prompt: 'Height at t = 3' },
    motion: 'ball',
    hints: ['y = −0.8·(3)² + 20 = −7.2 + 20 = 12.8']
  }
];

window.pickScenario = function (familyFilter) {
  let pool = window.SCENARIOS;
  if (familyFilter) pool = pool.filter(s => s.family === familyFilter);
  if (!pool.length) pool = window.SCENARIOS;
  return pool[Math.floor(Math.random() * pool.length)];
};
