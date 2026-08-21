/**
 * Standard Level — Section 1: Functions (25 scenarios)
 * Spine of precalculus: domain/range, parents, transforms, composition, inverses, piecewise, modeling
 */
(function () {
  function R(v, d) {
    const p = Math.pow(10, d != null ? d : (Math.abs(v) >= 100 ? 0 : Math.abs(v) >= 10 ? 1 : 2));
    return Math.round(v * p) / p;
  }
  function rand(min, max, step) {
    const n = Math.round((max - min) / step);
    return R(min + Math.floor(Math.random() * (n + 1)) * step, 4);
  }

  const F = [];

  // 1 — Domain from story (linear outdoor)
  F.push({
    id: 'fn-domain-walk',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'How Far Can You Walk?',
    context: 'A path is only 8 km long. Your distance from the start is y = x (time in hours at 1 km/h). You cannot walk past the end of the path.',
    xLabel: 'Time in hours (x)', yLabel: 'Distance in km (y)',
    xMin: 0, xMax: 10, form: 'y = x',
    symbolGlossary: [
      { sym: 'x', mean: 'hours walked' },
      { sym: 'y', mean: 'distance from start (km)' }
    ],
    paramDefs: [{ key: 'm', label: 'Speed (km/h)', min: 1, max: 1, step: 1 }, { key: 'c', label: 'Start', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    motion: null,
    build() {
      return {
        question: 'The path ends at 8 km. What is the largest useful x (hours) for this model before you run out of path? Enter that domain endpoint.',
        answer: { type: 'numeric', target: 8, tol: 0.3, atX: 8, prompt: 'Largest useful x (hours)' },
        hints: ['Distance equals time here (1 km/h)', 'When y = 8, x = 8']
      };
    }
  });

  // 2 — Range of a quadratic arc
  F.push({
    id: 'fn-range-ball',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Highest Point of a Throw',
    context: 'A ball follows y = −(x − 4)² + 9. Height cannot be negative once it hits the ground, but the formula’s peak is the maximum value in the range of interest.',
    xLabel: 'Horizontal position (x)', yLabel: 'Height (y)',
    xMin: 0, xMax: 8, form: 'y = −(x − 4)² + 9',
    symbolGlossary: [
      { sym: 'x', mean: 'horizontal position' },
      { sym: 'y', mean: 'height' },
      { sym: 'h', mean: 'x-location of the peak' },
      { sym: 'k', mean: 'maximum height' }
    ],
    paramDefs: [
      { key: 'a', label: 'a — curvature', min: -1, max: -1, step: 0.1 },
      { key: 'h', label: 'h — peak x', min: 4, max: 4, step: 0.25 },
      { key: 'k', label: 'k — peak height', min: 9, max: 9, step: 0.5 }
    ],
    eval: (p, x) => -(x - 4) * (x - 4) + 9,
    motion: 'ball',
    build() {
      return {
        question: 'What is the maximum height this model reaches (the top of the range for the flight while above ground near the peak)?',
        answer: { type: 'numeric', target: 9, tol: 0.4, atX: 4, prompt: 'Maximum height' },
        hints: ['Peak is at x = 4', 'Peak height is the constant 9']
      };
    }
  });

  // 3 — Increasing interval (linear)
  F.push({
    id: 'fn-increasing-savings',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Always Rising Pay',
    context: 'Your total pay is y = 15x where x is hours worked. More hours always means more pay — the function is increasing for x ≥ 0.',
    xLabel: 'Hours worked (x)', yLabel: 'Pay in $ (y)',
    xMin: 0, xMax: 10, form: 'y = 15x',
    symbolGlossary: [
      { sym: 'x', mean: 'hours worked' },
      { sym: 'y', mean: 'total pay ($)' },
      { sym: 'm', mean: 'hourly rate' }
    ],
    paramDefs: [
      { key: 'm', label: 'm — hourly rate ($)', min: 15, max: 15, step: 1 },
      { key: 'c', label: 'c — base', min: 0, max: 0, step: 1 }
    ],
    eval: (p, x) => 15 * x,
    motion: null,
    build() {
      return {
        question: 'If you work 6 hours, what is your pay? (This also checks you are reading an increasing linear model correctly.)',
        answer: { type: 'numeric', target: 90, tol: 1, atX: 6, prompt: 'Pay after 6 hours ($)' },
        hints: ['y = 15 × hours', '15 × 6 = 90']
      };
    }
  });

  // 4 — Parent: linear
  F.push({
    id: 'fn-parent-linear',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Parent: Straight Line',
    context: 'The simplest parent for steady change is y = x. Many real situations are vertical stretches or shifts of this line.',
    xLabel: 'Input x', yLabel: 'Output y',
    xMin: 0, xMax: 10, form: 'y = x',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'output (same as input for this parent)' }
    ],
    paramDefs: [
      { key: 'm', label: 'm — slope', min: 1, max: 1, step: 0.1 },
      { key: 'c', label: 'c — intercept', min: 0, max: 0, step: 0.1 }
    ],
    eval: (p, x) => x,
    motion: null,
    build() {
      return {
        question: 'For the parent y = x, what is y when x = 7?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 7, prompt: 'y at x = 7' },
        hints: ['On y = x, output equals input']
      };
    }
  });

  // 5 — Parent: quadratic
  F.push({
    id: 'fn-parent-quadratic',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Parent: Basic Parabola',
    context: 'The parent parabola is y = x². It opens upward with vertex at the origin. Transformations move and stretch this shape.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 5, form: 'y = x²',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'square of the input' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 1, max: 1, step: 0.1 },
      { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 },
      { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }
    ],
    eval: (p, x) => x * x,
    motion: null,
    build() {
      return {
        question: 'For y = x², what is y when x = 3?',
        answer: { type: 'numeric', target: 9, tol: 0.3, atX: 3, prompt: 'y at x = 3' },
        hints: ['3² = 9']
      };
    }
  });

  // 6 — Vertical shift
  F.push({
    id: 'fn-shift-up',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Shift the Parabola Up',
    context: 'Starting from y = x², adding a constant lifts the whole graph. y = x² + 5 is the parent shifted up 5 units.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 5, form: 'y = x² + k',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'output' },
      { sym: 'k', mean: 'vertical shift (up if positive)' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 1, max: 1, step: 0.1 },
      { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 },
      { key: 'k', label: 'k — shift up', min: 5, max: 5, step: 0.5 }
    ],
    eval: (p, x) => x * x + 5,
    motion: null,
    build() {
      return {
        question: 'For y = x² + 5, what is y at x = 2?',
        answer: { type: 'numeric', target: 9, tol: 0.3, atX: 2, prompt: 'y at x = 2' },
        hints: ['2² + 5 = 4 + 5 = 9']
      };
    }
  });

  // 7 — Horizontal shift
  F.push({
    id: 'fn-shift-right',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Shift the Parabola Right',
    context: 'y = (x − 3)² moves the parent y = x² three units to the right. The vertex moves from 0 to 3.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 8, form: 'y = (x − h)²',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'h', mean: 'horizontal shift (right if we use x − h)' },
      { sym: 'y', mean: 'output' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 1, max: 1, step: 0.1 },
      { key: 'h', label: 'h — shift right', min: 3, max: 3, step: 0.25 },
      { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }
    ],
    eval: (p, x) => (x - 3) * (x - 3),
    motion: null,
    build() {
      return {
        question: 'For y = (x − 3)², what is y at the vertex (x = 3)?',
        answer: { type: 'numeric', target: 0, tol: 0.2, atX: 3, prompt: 'y at x = 3' },
        hints: ['At the vertex, (3 − 3)² = 0']
      };
    }
  });

  // 8 — Vertical stretch
  F.push({
    id: 'fn-stretch',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Stretch the Parabola',
    context: 'Multiplying by a > 1 stretches y = x² upward, making it steeper. y = 2x² is twice as tall as the parent at each x.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 5, form: 'y = a · x²',
    symbolGlossary: [
      { sym: 'a', mean: 'vertical stretch factor' },
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'output' }
    ],
    paramDefs: [
      { key: 'a', label: 'a — stretch', min: 2, max: 2, step: 0.1 },
      { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 },
      { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }
    ],
    eval: (p, x) => 2 * x * x,
    motion: null,
    build() {
      return {
        question: 'For y = 2x², what is y when x = 3?',
        answer: { type: 'numeric', target: 18, tol: 0.5, atX: 3, prompt: 'y at x = 3' },
        hints: ['2 × 3² = 2 × 9 = 18']
      };
    }
  });

  // 9 — Reflection
  F.push({
    id: 'fn-reflect',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Flip the Parabola Down',
    context: 'A negative leading coefficient reflects the parent over the x-axis. y = −x² opens downward.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 4, form: 'y = −x²',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'negative square of x' }
    ],
    paramDefs: [
      { key: 'a', label: 'a — (negative)', min: -1, max: -1, step: 0.1 },
      { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 },
      { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }
    ],
    eval: (p, x) => -x * x,
    motion: null,
    build() {
      return {
        question: 'For y = −x², what is y when x = 2?',
        answer: { type: 'numeric', target: -4, tol: 0.3, atX: 2, prompt: 'y at x = 2' },
        hints: ['−(2)² = −4']
      };
    }
  });

  // 10 — Combined transformation
  F.push({
    id: 'fn-combined',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Shift and Stretch Together',
    context: 'Real graphs often combine moves: y = 2(x − 1)² + 3 stretches by 2, shifts right 1, and up 3.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 6, form: 'y = 2(x − 1)² + 3',
    symbolGlossary: [
      { sym: 'a', mean: 'stretch' },
      { sym: 'h', mean: 'right shift' },
      { sym: 'k', mean: 'up shift' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 2, max: 2, step: 0.1 },
      { key: 'h', label: 'h', min: 1, max: 1, step: 0.25 },
      { key: 'k', label: 'k', min: 3, max: 3, step: 0.5 }
    ],
    eval: (p, x) => 2 * (x - 1) * (x - 1) + 3,
    motion: null,
    build() {
      return {
        question: 'What is y at the vertex of y = 2(x − 1)² + 3?',
        answer: { type: 'numeric', target: 3, tol: 0.3, atX: 1, prompt: 'y at vertex' },
        hints: ['Vertex at x = 1', 'y = 3 there']
      };
    }
  });

  // 11 — Evaluate from graph reading
  F.push({
    id: 'fn-eval-taxi',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Read a Fare from the Model',
    context: 'Taxi fare y = 2.5x + 3 (x in km). Evaluating the function means finding y for a chosen x.',
    xLabel: 'Distance km (x)', yLabel: 'Fare $ (y)',
    xMin: 0, xMax: 10, form: 'y = 2.5x + 3',
    symbolGlossary: [
      { sym: 'm', mean: 'rate per km' },
      { sym: 'c', mean: 'flag drop' },
      { sym: 'x', mean: 'km' },
      { sym: 'y', mean: 'fare' }
    ],
    paramDefs: [
      { key: 'm', label: 'm', min: 2.5, max: 2.5, step: 0.1 },
      { key: 'c', label: 'c', min: 3, max: 3, step: 0.5 }
    ],
    eval: (p, x) => 2.5 * x + 3,
    motion: null,
    build() {
      return {
        question: 'What is the fare for an 4 km trip?',
        answer: { type: 'numeric', target: 13, tol: 0.4, atX: 4, prompt: 'Fare for 4 km ($)' },
        hints: ['2.5 × 4 + 3 = 10 + 3 = 13']
      };
    }
  });

  // 12 — Composition idea (linear then linear)
  F.push({
    id: 'fn-composition',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Two Steps: Discount then Tax',
    context: 'A $100 item gets a 10% discount (multiply by 0.9), then 8% tax on the discounted price (multiply by 1.08). The composition is y = 100 × 0.9 × 1.08 as a single final value — here we track one step on the graph as a linear model of “after discount” vs a parameter.',
    xLabel: 'Original price factor x', yLabel: 'After discount ($)',
    xMin: 0, xMax: 10, form: 'y = 90x / 10',
    symbolGlossary: [
      { sym: 'x', mean: 'scaled original (x=10 means $100)' },
      { sym: 'y', mean: 'price after 10% off' }
    ],
    paramDefs: [
      { key: 'm', label: 'm', min: 9, max: 9, step: 0.1 },
      { key: 'c', label: 'c', min: 0, max: 0, step: 0.1 }
    ],
    eval: (p, x) => 9 * x,
    motion: null,
    build() {
      return {
        question: 'If x = 10 represents a $100 item, what is the price after 10% off (y at x = 10)?',
        answer: { type: 'numeric', target: 90, tol: 1, atX: 10, prompt: 'Price after discount ($)' },
        hints: ['10% off $100 leaves $90']
      };
    }
  });

  // 13 — Inverse concept (linear)
  F.push({
    id: 'fn-inverse-celsius',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Undo a Conversion',
    context: 'A simple linear code is y = 2x + 1. The inverse undoes it: from y back to x. If the output is 9, what input produced it?',
    xLabel: 'Input x', yLabel: 'Output y = 2x + 1',
    xMin: 0, xMax: 10, form: 'y = 2x + 1',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'output' }
    ],
    paramDefs: [
      { key: 'm', label: 'm', min: 2, max: 2, step: 0.1 },
      { key: 'c', label: 'c', min: 1, max: 1, step: 0.1 }
    ],
    eval: (p, x) => 2 * x + 1,
    motion: null,
    build() {
      return {
        question: 'The output y is 9. What was x? (You are finding the inverse value.)',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 4, prompt: 'Input x that gives y = 9' },
        hints: ['Solve 2x + 1 = 9 → 2x = 8 → x = 4']
      };
    }
  });

  // 14 — One-to-one idea
  F.push({
    id: 'fn-onetoone',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'One Output, One Input',
    context: 'A strictly increasing line is one-to-one: each y comes from only one x. That is why linear functions with nonzero slope have inverses.',
    xLabel: 'x', yLabel: 'y = 3x',
    xMin: 0, xMax: 5, form: 'y = 3x',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'triple the input' }
    ],
    paramDefs: [
      { key: 'm', label: 'm', min: 3, max: 3, step: 0.1 },
      { key: 'c', label: 'c', min: 0, max: 0, step: 0.1 }
    ],
    eval: (p, x) => 3 * x,
    motion: null,
    build() {
      return {
        question: 'If y = 12, what is the only x that works for y = 3x?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 4, prompt: 'x when y = 12' },
        hints: ['12 ÷ 3 = 4']
      };
    }
  });

  // 15 — Piecewise idea via two regions (use linear on full domain for reading)
  F.push({
    id: 'fn-piecewise-parking',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Parking Fee (First Hours)',
    context: 'A garage charges $4 per hour for the first stretch of time. (A full piecewise fee might change later; here you model the first piece y = 4x.)',
    xLabel: 'Hours (x)', yLabel: 'Fee $ (y)',
    xMin: 0, xMax: 5, form: 'y = 4x',
    symbolGlossary: [
      { sym: 'x', mean: 'hours parked' },
      { sym: 'y', mean: 'fee for the first rate tier' }
    ],
    paramDefs: [
      { key: 'm', label: 'm — $/hour', min: 4, max: 4, step: 0.5 },
      { key: 'c', label: 'c', min: 0, max: 0, step: 0.5 }
    ],
    eval: (p, x) => 4 * x,
    motion: null,
    build() {
      return {
        question: 'Using the first-tier rate $4/hour, what is the fee for 3 hours?',
        answer: { type: 'numeric', target: 12, tol: 0.4, atX: 3, prompt: 'Fee for 3 hours ($)' },
        hints: ['4 × 3 = 12']
      };
    }
  });

  // 16 — Piecewise continuity check (match value)
  F.push({
    id: 'fn-piece-join',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Do the Pieces Meet?',
    context: 'One piece is y = 2x for x ≤ 3. At x = 3 the value is 6. A second piece starting there should pass through (3, 6) to be continuous.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 6, form: 'y = 2x',
    symbolGlossary: [
      { sym: 'x', mean: 'input' },
      { sym: 'y', mean: 'output of first piece' }
    ],
    paramDefs: [
      { key: 'm', label: 'm', min: 2, max: 2, step: 0.1 },
      { key: 'c', label: 'c', min: 0, max: 0, step: 0.1 }
    ],
    eval: (p, x) => 2 * x,
    motion: null,
    build() {
      return {
        question: 'What y-value must the next piece use at x = 3 so the graph does not jump?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 3, prompt: 'y at x = 3' },
        hints: ['2 × 3 = 6']
      };
    }
  });

  // 17 — Model choice: linear story
  F.push({
    id: 'fn-model-linear',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Choose Steady Change',
    context: 'A subscription adds a fixed amount every month. That is linear growth in total paid — not exponential.',
    xLabel: 'Months (x)', yLabel: 'Total paid $ (y)',
    xMin: 0, xMax: 12, form: 'y = 12x',
    symbolGlossary: [
      { sym: 'x', mean: 'months' },
      { sym: 'y', mean: 'total paid' },
      { sym: 'm', mean: 'monthly fee' }
    ],
    paramDefs: [
      { key: 'm', label: 'm — $/month', min: 12, max: 12, step: 1 },
      { key: 'c', label: 'c', min: 0, max: 0, step: 1 }
    ],
    eval: (p, x) => 12 * x,
    motion: null,
    build() {
      return {
        question: 'At $12 per month, what is total paid after 9 months?',
        answer: { type: 'numeric', target: 108, tol: 2, atX: 9, prompt: 'Total after 9 months ($)' },
        hints: ['12 × 9 = 108']
      };
    }
  });

  // 18 — Model: quadratic story
  F.push({
    id: 'fn-model-quad',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Choose a Curve for a Jump',
    context: 'A skateboarder’s jump height vs time is better as a downward parabola than a straight line.',
    xLabel: 'Time (x)', yLabel: 'Height (y)',
    xMin: 0, xMax: 4, form: 'y = −x² + 4x',
    symbolGlossary: [
      { sym: 'x', mean: 'time' },
      { sym: 'y', mean: 'height' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: -1, max: -1, step: 0.1 },
      { key: 'h', label: 'h', min: 2, max: 2, step: 0.25 },
      { key: 'k', label: 'k', min: 4, max: 4, step: 0.5 }
    ],
    eval: (p, x) => -x * x + 4 * x,
    motion: 'ball',
    build() {
      return {
        question: 'Using y = −x² + 4x, what height is at x = 2 (the peak)?',
        answer: { type: 'numeric', target: 4, tol: 0.3, atX: 2, prompt: 'Height at x = 2' },
        hints: ['−4 + 8 = 4']
      };
    }
  });

  // 19 — Model: exponential story
  F.push({
    id: 'fn-model-exp',
    level: 'standard', unit: 'functions', family: 'exponential',
    title: 'Choose Growth that Multiplies',
    context: 'A rumor spreads by roughly multiplying the number of people each day. That is exponential, not linear.',
    xLabel: 'Days (x)', yLabel: 'People who heard (y)',
    xMin: 0, xMax: 8, form: 'y = 3 · 2^x',
    symbolGlossary: [
      { sym: 'a', mean: 'starting number' },
      { sym: 'b', mean: 'daily growth factor' },
      { sym: 'x', mean: 'days' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 3, max: 3, step: 1 },
      { key: 'b', label: 'b', min: 2, max: 2, step: 0.1 }
    ],
    eval: (p, x) => 3 * Math.pow(2, x),
    motion: 'colonies',
    build() {
      return {
        question: 'Start with 3 people, double each day. How many after 4 days?',
        answer: { type: 'numeric', target: 48, tol: 2, atX: 4, prompt: 'People after 4 days' },
        hints: ['3 · 2⁴ = 3 · 16 = 48']
      };
    }
  });

  // 20 — Domain restriction rational
  F.push({
    id: 'fn-domain-rational',
    level: 'standard', unit: 'functions', family: 'rational',
    title: 'Where Is the Model Allowed?',
    context: 'Average cost y = 100/x (x = number of items) is not defined at x = 0. You cannot divide by zero.',
    xLabel: 'Items (x)', yLabel: 'Cost per item (y)',
    xMin: 1, xMax: 10, form: 'y = 100 / x',
    symbolGlossary: [
      { sym: 'x', mean: 'number of items (cannot be 0)' },
      { sym: 'y', mean: 'cost per item' },
      { sym: 'a', mean: 'total cost' }
    ],
    paramDefs: [
      { key: 'a', label: 'a — total $', min: 100, max: 100, step: 1 },
      { key: 'h', label: 'h', min: 0, max: 0, step: 1 }
    ],
    eval: (p, x) => 100 / x,
    motion: null,
    build() {
      return {
        question: 'What is cost per item when x = 5 items share $100 total?',
        answer: { type: 'numeric', target: 20, tol: 0.5, atX: 5, prompt: 'Cost per item at x = 5' },
        hints: ['100 ÷ 5 = 20']
      };
    }
  });

  // 21 — Decreasing function
  F.push({
    id: 'fn-decreasing',
    level: 'standard', unit: 'functions', family: 'rational',
    title: 'Less Each as More Share',
    context: 'As more people share a fixed prize, each share shrinks. y = 120/x is decreasing for x > 0.',
    xLabel: 'People (x)', yLabel: 'Share $ (y)',
    xMin: 1, xMax: 10, form: 'y = 120 / x',
    symbolGlossary: [
      { sym: 'x', mean: 'people' },
      { sym: 'y', mean: 'dollars each' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 120, max: 120, step: 1 },
      { key: 'h', label: 'h', min: 0, max: 0, step: 1 }
    ],
    eval: (p, x) => 120 / x,
    motion: 'slices',
    build() {
      return {
        question: 'With $120 shared equally, how much does each of 6 people get?',
        answer: { type: 'numeric', target: 20, tol: 0.5, atX: 6, prompt: 'Share for each of 6 people ($)' },
        hints: ['120 ÷ 6 = 20']
      };
    }
  });

  // 22 — Transformation identify shift
  F.push({
    id: 'fn-id-shift',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Name the Shift',
    context: 'Graph y = (x − 5)² + 2. Compared to y = x², the vertex moved to (5, 2).',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 10, form: 'y = (x − 5)² + 2',
    symbolGlossary: [
      { sym: 'h', mean: 'right shift' },
      { sym: 'k', mean: 'up shift' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 1, max: 1, step: 0.1 },
      { key: 'h', label: 'h', min: 5, max: 5, step: 0.25 },
      { key: 'k', label: 'k', min: 2, max: 2, step: 0.5 }
    ],
    eval: (p, x) => (x - 5) * (x - 5) + 2,
    motion: null,
    build() {
      return {
        question: 'What is the y-coordinate of the vertex?',
        answer: { type: 'numeric', target: 2, tol: 0.2, atX: 5, prompt: 'Vertex height y' },
        hints: ['Vertex at (5, 2)']
      };
    }
  });

  // 23 — Modeling temperature linear
  F.push({
    id: 'fn-model-temp',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Temperature Rising Steadily',
    context: 'From morning, temperature rises about 2° each hour from a start of 10°. y = 2x + 10.',
    xLabel: 'Hours after 6am (x)', yLabel: 'Temp °C (y)',
    xMin: 0, xMax: 10, form: 'y = 2x + 10',
    symbolGlossary: [
      { sym: 'm', mean: 'degrees per hour' },
      { sym: 'c', mean: 'starting temperature' }
    ],
    paramDefs: [
      { key: 'm', label: 'm', min: 2, max: 2, step: 0.1 },
      { key: 'c', label: 'c', min: 10, max: 10, step: 0.5 }
    ],
    eval: (p, x) => 2 * x + 10,
    motion: null,
    build() {
      return {
        question: 'What temperature is predicted after 5 hours?',
        answer: { type: 'numeric', target: 20, tol: 0.5, atX: 5, prompt: 'Temp after 5 hours (°C)' },
        hints: ['2×5 + 10 = 20']
      };
    }
  });

  // 24 — Abs-like via V shape using quadratic open up at vertex (approx story)
  F.push({
    id: 'fn-vertex-form',
    level: 'standard', unit: 'functions', family: 'quadratic',
    title: 'Vertex Form Reading',
    context: 'Vertex form y = a(x − h)² + k makes the peak or valley easy to read: (h, k).',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 10, form: 'y = (x − 6)² + 1',
    symbolGlossary: [
      { sym: 'h', mean: 'x of vertex' },
      { sym: 'k', mean: 'y of vertex' }
    ],
    paramDefs: [
      { key: 'a', label: 'a', min: 1, max: 1, step: 0.1 },
      { key: 'h', label: 'h', min: 6, max: 6, step: 0.25 },
      { key: 'k', label: 'k', min: 1, max: 1, step: 0.5 }
    ],
    eval: (p, x) => (x - 6) * (x - 6) + 1,
    motion: null,
    build() {
      return {
        question: 'For y = (x − 6)² + 1, what is y at x = 6?',
        answer: { type: 'numeric', target: 1, tol: 0.2, atX: 6, prompt: 'y at x = 6' },
        hints: ['Vertex y-value is k = 1']
      };
    }
  });

  // 25 — Mixed modeling summary
  F.push({
    id: 'fn-mixed-phone',
    level: 'standard', unit: 'functions', family: 'linear',
    title: 'Pick the Right Shape: Plan Cost',
    context: 'A phone plan charges $20 plus $0.10 per text. Total cost is linear in the number of texts.',
    xLabel: 'Texts (x)', yLabel: 'Bill $ (y)',
    xMin: 0, xMax: 100, form: 'y = 0.1x + 20',
    symbolGlossary: [
      { sym: 'm', mean: 'cost per text' },
      { sym: 'c', mean: 'monthly base fee' },
      { sym: 'x', mean: 'number of texts' }
    ],
    paramDefs: [
      { key: 'm', label: 'm', min: 0.1, max: 0.1, step: 0.05 },
      { key: 'c', label: 'c', min: 20, max: 20, step: 1 }
    ],
    eval: (p, x) => 0.1 * x + 20,
    motion: null,
    build() {
      return {
        question: 'What is the bill for 50 texts?',
        answer: { type: 'numeric', target: 25, tol: 0.5, atX: 50, prompt: 'Bill for 50 texts ($)' },
        hints: ['0.1×50 + 20 = 5 + 20 = 25']
      };
    }
  });

  // Wire into global templates with randomizable builds where fixed
  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  F.forEach(template => {
    const fixed = { ...template };
    // wrap build to match instantiate API
    const originalBuild = template.build;
    fixed.paramDefs = template.paramDefs;
    fixed.build = function (params) {
      // most Functions scenarios use fixed numbers for pedagogy clarity
      return originalBuild.call(this, params);
    };
    window.SCENARIO_TEMPLATES.push(fixed);
  });

  window.FUNCTIONS_UNIT_COUNT = F.length;
})();
