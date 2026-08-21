/** Standard — Polynomial & Rational (25 unique scenarios) */
(function () {
  const T = [];
  const L = 'standard', U = 'poly-rational';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  // 1 zeros of quadratic
  add({
    id: 'pr-zeros-quad', family: 'quadratic', title: 'Where Does the Ball Hit the Ground?',
    context: 'Height y = −(x − 1)(x − 5) is zero when the ball is on the ground. The positive zeros are the launch and land positions.',
    xLabel: 'Position x', yLabel: 'Height y', xMin: 0, xMax: 6, form: 'y = −(x−1)(x−5)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal position' }, { sym: 'y', mean: 'height' }],
    paramDefs: [{ key: 'a', label: 'a', min: -1, max: -1, step: 0.1 }, { key: 'h', label: 'h', min: 3, max: 3, step: 0.25 }, { key: 'k', label: 'k', min: 4, max: 4, step: 0.5 }],
    eval: (p, x) => -(x - 1) * (x - 5),
    build() { return { question: 'One ground contact is at x = 1. What is the other x where height is 0?', answer: { type: 'numeric', target: 5, tol: 0.3, atX: 5, prompt: 'Other zero (x)' }, hints: ['Factors (x−1) and (x−5) give zeros 1 and 5'] }; }
  });

  // 2 vertex / max of poly
  add({
    id: 'pr-end-up', family: 'quadratic', title: 'Peak of a Profit Curve',
    context: 'A simple profit model y = −(x − 4)² + 10 opens downward. The maximum is at the vertex.',
    xLabel: 'Items x', yLabel: 'Profit y', xMin: 0, xMax: 8, form: 'y = −(x−4)² + 10',
    symbolGlossary: [{ sym: 'h', mean: 'x at maximum' }, { sym: 'k', mean: 'maximum profit' }],
    paramDefs: [{ key: 'a', label: 'a', min: -1, max: -1, step: 0.1 }, { key: 'h', label: 'h', min: 4, max: 4, step: 0.25 }, { key: 'k', label: 'k', min: 10, max: 10, step: 0.5 }],
    eval: (p, x) => -(x - 4) * (x - 4) + 10,
    build() { return { question: 'What is the maximum profit (y at the vertex)?', answer: { type: 'numeric', target: 10, tol: 0.4, atX: 4, prompt: 'Max profit' }, hints: ['Vertex height is 10'] }; }
  });

  // 3 end behavior idea — large x quadratic
  add({
    id: 'pr-end-behavior', family: 'quadratic', title: 'What Happens for Large x?',
    context: 'For y = x², as x gets large the outputs grow without bound (upward end behavior).',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 6, form: 'y = x²',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: 'x squared' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }],
    eval: (p, x) => x * x,
    build() { return { question: 'What is y when x = 5?', answer: { type: 'numeric', target: 25, tol: 1, atX: 5, prompt: 'y at x = 5' }, hints: ['5² = 25'] }; }
  });

  // 4 factor meaning
  add({
    id: 'pr-factor', family: 'quadratic', title: 'From Factors to a Point',
    context: 'If y = (x − 2)(x − 6), then y = 0 at x = 2 and x = 6. Between them the product is positive or negative depending on signs.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 8, form: 'y = (x−2)(x−6)',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: 'product of factors' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 4, max: 4, step: 0.25 }, { key: 'k', label: 'k', min: -4, max: -4, step: 0.5 }],
    eval: (p, x) => (x - 2) * (x - 6),
    build() { return { question: 'What is y at x = 4 (halfway between the zeros)?', answer: { type: 'numeric', target: -4, tol: 0.3, atX: 4, prompt: 'y at x = 4' }, hints: ['(4−2)(4−6) = 2×(−2) = −4'] }; }
  });

  // 5 rational asymptote vertical concept
  add({
    id: 'pr-asymp-v', family: 'rational', title: 'A Wall You Cannot Cross',
    context: 'y = 1/(x − 3) is undefined at x = 3. The graph shoots up or down near that vertical asymptote.',
    xLabel: 'x', yLabel: 'y', xMin: 4, xMax: 10, form: 'y = 1/(x−3)',
    symbolGlossary: [{ sym: 'x', mean: 'input (not 3)' }, { sym: 'y', mean: 'output' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 3, max: 3, step: 0.5 }],
    eval: (p, x) => 1 / (x - 3),
    build() { return { question: 'What is y when x = 5?', answer: { type: 'numeric', target: 0.5, tol: 0.1, atX: 5, prompt: 'y at x = 5' }, hints: ['1/(5−3) = 1/2'] }; }
  });

  // 6 rational horizontal behavior
  add({
    id: 'pr-asymp-h', family: 'rational', title: 'Settling Toward Zero',
    context: 'For y = 8/x, as x gets large, y gets close to 0 (horizontal asymptote y = 0).',
    xLabel: 'x', yLabel: 'y', xMin: 1, xMax: 10, form: 'y = 8/x',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: '8 divided by x' }],
    paramDefs: [{ key: 'a', label: 'a', min: 8, max: 8, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 8 / x,
    build() { return { question: 'What is y when x = 8?', answer: { type: 'numeric', target: 1, tol: 0.15, atX: 8, prompt: 'y at x = 8' }, hints: ['8/8 = 1'] }; }
  });

  // 7 pizza classic unique
  add({
    id: 'pr-pizza', family: 'rational', title: 'Sharing Pizza Slices',
    context: '12 slices shared equally: y = 12/x slices per person.',
    xLabel: 'People x', yLabel: 'Slices each y', xMin: 1, xMax: 10, form: 'y = 12/x',
    symbolGlossary: [{ sym: 'a', mean: 'total slices' }, { sym: 'x', mean: 'people' }],
    paramDefs: [{ key: 'a', label: 'a', min: 12, max: 12, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 12 / x, motion: 'slices',
    build() { return { question: 'How many slices each if 6 people share 12 slices?', answer: { type: 'numeric', target: 2, tol: 0.2, atX: 6, prompt: 'Slices each' }, hints: ['12÷6 = 2'] }; }
  });

  // 8 average cost
  add({
    id: 'pr-avg-cost', family: 'rational', title: 'Average Cost per Shirt',
    context: 'Printing costs $200 total for a batch. Average cost per shirt is 200/x.',
    xLabel: 'Shirts x', yLabel: 'Avg cost $ y', xMin: 1, xMax: 20, form: 'y = 200/x',
    symbolGlossary: [{ sym: 'x', mean: 'number of shirts' }, { sym: 'y', mean: 'cost per shirt' }],
    paramDefs: [{ key: 'a', label: 'a', min: 200, max: 200, step: 10 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 200 / x,
    build() { return { question: 'Average cost when 10 shirts are printed?', answer: { type: 'numeric', target: 20, tol: 1, atX: 10, prompt: 'Avg cost at 10 shirts' }, hints: ['200÷10 = 20'] }; }
  });

  // 9 poly evaluate
  add({
    id: 'pr-eval-cubic-like', family: 'quadratic', title: 'Evaluate a Quadratic',
    context: 'Area-related models are often quadratic. y = x² + 2x gives output for each width x.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 6, form: 'y = x² + 2x',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: 'x² + 2x' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: -1, max: -1, step: 0.25 }, { key: 'k', label: 'k', min: -1, max: -1, step: 0.5 }],
    eval: (p, x) => x * x + 2 * x,
    build() { return { question: 'What is y when x = 3?', answer: { type: 'numeric', target: 15, tol: 0.5, atX: 3, prompt: 'y at x = 3' }, hints: ['9 + 6 = 15'] }; }
  });

  // 10 inequality idea via graph value
  add({
    id: 'pr-above-zero', family: 'quadratic', title: 'When Is Height Positive?',
    context: 'y = −(x − 2)(x − 8) is positive between the zeros. At x = 5 you are between them.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 10, form: 'y = −(x−2)(x−8)',
    symbolGlossary: [{ sym: 'x', mean: 'position' }, { sym: 'y', mean: 'height-like value' }],
    paramDefs: [{ key: 'a', label: 'a', min: -1, max: -1, step: 0.1 }, { key: 'h', label: 'h', min: 5, max: 5, step: 0.25 }, { key: 'k', label: 'k', min: 9, max: 9, step: 0.5 }],
    eval: (p, x) => -(x - 2) * (x - 8),
    build() { return { question: 'What is y at x = 5?', answer: { type: 'numeric', target: 9, tol: 0.4, atX: 5, prompt: 'y at x = 5' }, hints: ['−(3)(−3) = 9'] }; }
  });

  // 11 rational speed
  add({
    id: 'pr-speed', family: 'rational', title: 'Time = Distance ÷ Speed',
    context: 'Time to travel 60 km at speed x is y = 60/x hours.',
    xLabel: 'Speed km/h x', yLabel: 'Time hours y', xMin: 20, xMax: 100, form: 'y = 60/x',
    symbolGlossary: [{ sym: 'x', mean: 'speed' }, { sym: 'y', mean: 'time' }],
    paramDefs: [{ key: 'a', label: 'a', min: 60, max: 60, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 60 / x,
    build() { return { question: 'How many hours at 30 km/h?', answer: { type: 'numeric', target: 2, tol: 0.15, atX: 30, prompt: 'Hours at 30 km/h' }, hints: ['60÷30 = 2'] }; }
  });

  // 12 multiplicity idea double root
  add({
    id: 'pr-double-root', family: 'quadratic', title: 'Touching the Axis Once',
    context: 'y = (x − 3)² touches the x-axis only at x = 3 (a repeated zero).',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 6, form: 'y = (x−3)²',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: 'squared distance from 3' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 3, max: 3, step: 0.25 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }],
    eval: (p, x) => (x - 3) * (x - 3),
    build() { return { question: 'What is y at the touch point x = 3?', answer: { type: 'numeric', target: 0, tol: 0.15, atX: 3, prompt: 'y at x = 3' }, hints: ['(3−3)² = 0'] }; }
  });

  // 13 poly shift
  add({
    id: 'pr-shift-poly', family: 'quadratic', title: 'Moved Parabola',
    context: 'y = (x − 2)² + 4 is the parent x² shifted right 2 and up 4.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 6, form: 'y = (x−2)² + 4',
    symbolGlossary: [{ sym: 'h', mean: 'right shift' }, { sym: 'k', mean: 'up shift' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 2, max: 2, step: 0.25 }, { key: 'k', label: 'k', min: 4, max: 4, step: 0.5 }],
    eval: (p, x) => (x - 2) * (x - 2) + 4,
    build() { return { question: 'Vertex y-value?', answer: { type: 'numeric', target: 4, tol: 0.2, atX: 2, prompt: 'y at vertex' }, hints: ['k = 4'] }; }
  });

  // 14 rational people
  add({
    id: 'pr-workers', family: 'rational', title: 'Work Rate Story',
    context: 'A job takes 24 worker-hours. Hours needed with x workers: y = 24/x.',
    xLabel: 'Workers x', yLabel: 'Hours y', xMin: 1, xMax: 12, form: 'y = 24/x',
    symbolGlossary: [{ sym: 'x', mean: 'workers' }, { sym: 'y', mean: 'hours to finish' }],
    paramDefs: [{ key: 'a', label: 'a', min: 24, max: 24, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 24 / x,
    build() { return { question: 'Hours with 8 workers?', answer: { type: 'numeric', target: 3, tol: 0.2, atX: 8, prompt: 'Hours' }, hints: ['24÷8 = 3'] }; }
  });

  // 15 leading coefficient stretch
  add({
    id: 'pr-stretch-poly', family: 'quadratic', title: 'Steeper Parabola',
    context: 'y = 3x² is steeper than y = x². Same shape, stronger stretch.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 4, form: 'y = 3x²',
    symbolGlossary: [{ sym: 'a', mean: 'stretch factor' }],
    paramDefs: [{ key: 'a', label: 'a', min: 3, max: 3, step: 0.1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }],
    eval: (p, x) => 3 * x * x,
    build() { return { question: 'y when x = 2?', answer: { type: 'numeric', target: 12, tol: 0.5, atX: 2, prompt: 'y at x = 2' }, hints: ['3×4 = 12'] }; }
  });

  // 16 rational density
  add({
    id: 'pr-density', family: 'rational', title: 'People per Room',
    context: '30 students placed into x rooms: about 30/x per room.',
    xLabel: 'Rooms x', yLabel: 'Students each y', xMin: 1, xMax: 10, form: 'y = 30/x',
    symbolGlossary: [{ sym: 'x', mean: 'rooms' }, { sym: 'y', mean: 'students per room' }],
    paramDefs: [{ key: 'a', label: 'a', min: 30, max: 30, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 30 / x,
    build() { return { question: 'Students per room if 5 rooms?', answer: { type: 'numeric', target: 6, tol: 0.3, atX: 5, prompt: 'Per room' }, hints: ['30÷5 = 6'] }; }
  });

  // 17 intercept
  add({
    id: 'pr-yint', family: 'quadratic', title: 'Y-Intercept of a Parabola',
    context: 'For y = x² − 4x + 3, when x = 0 the y-intercept is 3.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 5, form: 'y = x² − 4x + 3',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: 'output' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 2, max: 2, step: 0.25 }, { key: 'k', label: 'k', min: -1, max: -1, step: 0.5 }],
    eval: (p, x) => x * x - 4 * x + 3,
    build() { return { question: 'What is y at x = 0?', answer: { type: 'numeric', target: 3, tol: 0.2, atX: 0, prompt: 'y-intercept' }, hints: ['Plug x = 0 → 3'] }; }
  });

  // 18 rational fuel
  add({
    id: 'pr-fuel', family: 'rational', title: 'Fuel Efficiency Story',
    context: 'A tank of 40 liters lasts y = 40/x hours if you use x liters per hour.',
    xLabel: 'L per hour x', yLabel: 'Hours y', xMin: 2, xMax: 10, form: 'y = 40/x',
    symbolGlossary: [{ sym: 'x', mean: 'burn rate' }, { sym: 'y', mean: 'hours of fuel' }],
    paramDefs: [{ key: 'a', label: 'a', min: 40, max: 40, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 40 / x,
    build() { return { question: 'Hours if burn rate is 5 L/h?', answer: { type: 'numeric', target: 8, tol: 0.3, atX: 5, prompt: 'Hours' }, hints: ['40÷5 = 8'] }; }
  });

  // 19 quadratic zeros sum product style eval
  add({
    id: 'pr-mid', family: 'quadratic', title: 'Between the Roots',
    context: 'y = (x − 1)(x − 7) = x² − 8x + 7. Midway at x = 4.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 8, form: 'y = (x−1)(x−7)',
    symbolGlossary: [{ sym: 'x', mean: 'input' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 4, max: 4, step: 0.25 }, { key: 'k', label: 'k', min: -9, max: -9, step: 0.5 }],
    eval: (p, x) => (x - 1) * (x - 7),
    build() { return { question: 'y at x = 4?', answer: { type: 'numeric', target: -9, tol: 0.4, atX: 4, prompt: 'y at x = 4' }, hints: ['(3)(−3) = −9'] }; }
  });

  // 20 horizontal stretch-ish via wider parabola
  add({
    id: 'pr-wide', family: 'quadratic', title: 'Wider Parabola',
    context: 'y = 0.5x² is wider than y = x² (vertical compress).',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 6, form: 'y = 0.5x²',
    symbolGlossary: [{ sym: 'a', mean: '0.5 compresses vertically' }],
    paramDefs: [{ key: 'a', label: 'a', min: 0.5, max: 0.5, step: 0.1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 0.25 }, { key: 'k', label: 'k', min: 0, max: 0, step: 0.5 }],
    eval: (p, x) => 0.5 * x * x,
    build() { return { question: 'y at x = 4?', answer: { type: 'numeric', target: 8, tol: 0.4, atX: 4, prompt: 'y at x = 4' }, hints: ['0.5×16 = 8'] }; }
  });

  // 21 rational remaining
  add({
    id: 'pr-paint', family: 'rational', title: 'Paint Coverage',
    context: 'One can covers 36 m². Coverage per room if split over x rooms: 36/x.',
    xLabel: 'Rooms x', yLabel: 'm² each y', xMin: 1, xMax: 9, form: 'y = 36/x',
    symbolGlossary: [{ sym: 'x', mean: 'rooms' }, { sym: 'y', mean: 'm² per room' }],
    paramDefs: [{ key: 'a', label: 'a', min: 36, max: 36, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 36 / x,
    build() { return { question: 'm² each if 9 rooms?', answer: { type: 'numeric', target: 4, tol: 0.25, atX: 9, prompt: 'm² per room' }, hints: ['36÷9 = 4'] }; }
  });

  // 22 downward poly
  add({
    id: 'pr-down', family: 'quadratic', title: 'Upside-Down Profit',
    context: 'y = −2(x − 3)² + 8 has a maximum of 8 at x = 3.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 6, form: 'y = −2(x−3)² + 8',
    symbolGlossary: [{ sym: 'k', mean: 'maximum value' }],
    paramDefs: [{ key: 'a', label: 'a', min: -2, max: -2, step: 0.1 }, { key: 'h', label: 'h', min: 3, max: 3, step: 0.25 }, { key: 'k', label: 'k', min: 8, max: 8, step: 0.5 }],
    eval: (p, x) => -2 * (x - 3) * (x - 3) + 8,
    build() { return { question: 'Maximum y?', answer: { type: 'numeric', target: 8, tol: 0.3, atX: 3, prompt: 'Max y' }, hints: ['k = 8'] }; }
  });

  // 23 rational small x large y
  add({
    id: 'pr-steep-rational', family: 'rational', title: 'Very Large When x Is Small',
    context: 'y = 5/x becomes large when x is a small positive number.',
    xLabel: 'x', yLabel: 'y', xMin: 1, xMax: 10, form: 'y = 5/x',
    symbolGlossary: [{ sym: 'x', mean: 'input > 0' }, { sym: 'y', mean: '5/x' }],
    paramDefs: [{ key: 'a', label: 'a', min: 5, max: 5, step: 0.5 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 5 / x,
    build() { return { question: 'y when x = 1?', answer: { type: 'numeric', target: 5, tol: 0.2, atX: 1, prompt: 'y at x = 1' }, hints: ['5/1 = 5'] }; }
  });

  // 24 poly from graph reading
  add({
    id: 'pr-read', family: 'quadratic', title: 'Read the Model at a Point',
    context: 'y = x² − 6x + 10. Find the output at x = 2.',
    xLabel: 'x', yLabel: 'y', xMin: 0, xMax: 6, form: 'y = x² − 6x + 10',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: 'output' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 3, max: 3, step: 0.25 }, { key: 'k', label: 'k', min: 1, max: 1, step: 0.5 }],
    eval: (p, x) => x * x - 6 * x + 10,
    build() { return { question: 'y at x = 2?', answer: { type: 'numeric', target: 2, tol: 0.25, atX: 2, prompt: 'y at x = 2' }, hints: ['4 − 12 + 10 = 2'] }; }
  });

  // 25 mixed rational
  add({
    id: 'pr-bus', family: 'rational', title: 'Bus Fare Split',
    context: 'A $48 charter fee split among x riders is 48/x each.',
    xLabel: 'Riders x', yLabel: 'Cost each $ y', xMin: 1, xMax: 12, form: 'y = 48/x',
    symbolGlossary: [{ sym: 'x', mean: 'riders' }, { sym: 'y', mean: 'dollars each' }],
    paramDefs: [{ key: 'a', label: 'a', min: 48, max: 48, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 48 / x,
    build() { return { question: 'Cost each with 12 riders?', answer: { type: 'numeric', target: 4, tol: 0.25, atX: 12, prompt: 'Cost each ($)' }, hints: ['48÷12 = 4'] }; }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
