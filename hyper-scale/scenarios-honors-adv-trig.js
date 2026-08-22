/** Honors — Advanced Trig (25) — stranger-test plain language */
(function () {
  const T = [];
  const L = 'honors', U = 'adv-trig';
  const PI = Math.PI;

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  add({
    id: 'hat-pythag', family: 'trig', title: 'A Rule That Never Breaks',
    context: 'On a unit circle, left-right and up-down always satisfy “squares add to 1.” In trig language that is sin² + cos² = 1 for every angle.',
    xLabel: 'Angle (radians)', yLabel: 'sin² + cos²',
    xMin: 0, xMax: 6.3, form: 'y = sin²θ + cos²θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'angle in radians' },
      { sym: 'y', mean: 'sum of squares of sine and cosine (always 1)' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x) ** 2 + Math.cos(x) ** 2,
    build() {
      return {
        question: 'Pick any angle on the graph (for example near 1). What value does sin² + cos² always show?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 1, prompt: 'Value of the identity' },
        hints: ['The graph is a flat line', 'Unit circle: x² + y² = 1'],
        workedSolution: 'Every point on the unit circle has coordinates (cos θ, sin θ) with cos²θ + sin²θ = 1. The graph stays at height 1 for every angle.'
      };
    }
  });

  add({
    id: 'hat-double-sin', family: 'trig', title: 'Twice the Angle on a Spinner',
    context: 'A spinner’s height follows sine of twice the arm angle: y = sin(2θ). When the arm is at π/6 (30°), the double angle is π/3 (60°).',
    xLabel: 'Arm angle θ (radians)', yLabel: 'Height sin(2θ)',
    xMin: 0, xMax: 3.2, form: 'y = sin(2θ)',
    symbolGlossary: [
      { sym: 'θ', mean: 'arm angle in radians' },
      { sym: 'y', mean: 'sine of twice that angle' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(2 * x),
    build() {
      return {
        question: 'When the arm is at θ = π/6 (about 0.52), what height does the double-angle model show?',
        answer: { type: 'numeric', target: 0.866, tol: 0.06, atX: PI / 6, prompt: 'Height' },
        hints: ['2θ = π/3', 'sin(π/3) ≈ 0.866'],
        workedSolution: '2 · (π/6) = π/3. sin(π/3) = √3/2 ≈ 0.866. The double-angle formula sin(2θ) = 2 sinθ cosθ gives the same number.'
      };
    }
  });

  add({
    id: 'hat-double-cos', family: 'trig', title: 'Starting a Double-Speed Wave',
    context: 'A wave y = cos(2θ) starts when the angle is zero. At the start, cosine of zero is 1 — the wave is at its peak.',
    xLabel: 'θ (radians)', yLabel: 'cos(2θ)',
    xMin: 0, xMax: 3.2, form: 'y = cos(2θ)',
    symbolGlossary: [
      { sym: 'θ', mean: 'angle' },
      { sym: 'y', mean: 'cosine of twice the angle' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(2 * x),
    build() {
      return {
        question: 'At the very start (θ = 0), what value does this double-speed cosine wave take?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'Starting height' },
        hints: ['2·0 = 0', 'cos(0) = 1'],
        workedSolution: 'cos(2·0) = cos(0) = 1. You can also use cos²0 − sin²0 = 1 − 0 = 1.'
      };
    }
  });

  add({
    id: 'hat-solve-sin', family: 'trig', title: 'When Is the Height Half?',
    context: 'A gate opens so its height follows sine. You want the moment the height first reaches half of full scale (0.5) in the first quadrant.',
    xLabel: 'Angle (radians)', yLabel: 'Height (sin)',
    xMin: 0, xMax: 3.2, form: 'y = sin θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'opening angle in radians' },
      { sym: 'y', mean: 'relative height' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'At what angle (in radians, about 0.52) does the height first reach 0.5?',
        answer: { type: 'numeric', target: PI / 6, tol: 0.08, atX: PI / 6, prompt: 'Angle (radians)' },
        hints: ['sin(π/6) = 1/2', 'π/6 ≈ 0.52'],
        workedSolution: 'In the first quadrant, sin is one-to-one from 0 to 1. sin(π/6) = 1/2, so the angle is π/6 ≈ 0.52 radians.'
      };
    }
  });

  add({
    id: 'hat-solve-cos', family: 'trig', title: 'When Horizontal Position Hits Zero',
    context: 'On the unit circle, cosine is the left-right position. It first hits zero when you reach the top — a right angle.',
    xLabel: 'Angle (radians)', yLabel: 'Left-right (cos)',
    xMin: 0, xMax: 6.3, form: 'y = cos θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'radians' },
      { sym: 'y', mean: 'horizontal coordinate' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'What is the smallest positive angle where you are straight above the center (horizontal position 0)?',
        answer: { type: 'numeric', target: PI / 2, tol: 0.08, atX: PI / 2, prompt: 'Angle (radians)' },
        hints: ['Top of the circle is π/2 ≈ 1.57'],
        workedSolution: 'At π/2 the point is (0, 1). Cosine (the x-coordinate) is 0. That is the first positive root of cos θ = 0.'
      };
    }
  });

  add({
    id: 'hat-amp-period', family: 'trig', title: 'A Stronger Signal',
    context: 'An antenna signal is modeled by y = 5 cos(x). The 5 stretches the usual cosine so the loudest reading is five times a unit wave.',
    xLabel: 'Time-like x', yLabel: 'Signal 5 cos x',
    xMin: 0, xMax: 6.3, form: 'y = 5 cos x',
    symbolGlossary: [
      { sym: 'a', mean: 'amplitude 5 — peak strength' },
      { sym: 'x', mean: 'angle or time parameter' }
    ],
    paramDefs: [{ key: 'a', label: 'amplitude', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5 * Math.cos(x),
    build() {
      return {
        question: 'What is the strongest (highest) reading this signal model can show?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 0, prompt: 'Peak reading' },
        hints: ['Cosine peaks at 1', '5 × 1 = 5'],
        workedSolution: 'Cosine’s maximum is 1, so 5 cos x reaches at most 5 (at x = 0, ±2π, …).'
      };
    }
  });

  add({
    id: 'hat-phase-cos', family: 'trig', title: 'A Delayed Cosine',
    context: 'Sliding cosine to the right by π/2 makes y = cos(x − π/2). At x = π/2 the inside is zero, so the wave sits at its starting peak of 1.',
    xLabel: 'x (radians)', yLabel: 'cos(x − π/2)',
    xMin: 0, xMax: 6.3, form: 'y = cos(x − π/2)',
    symbolGlossary: [
      { sym: 'x', mean: 'radians' },
      { sym: 'h', mean: 'delay of π/2' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x - PI / 2),
    build() {
      return {
        question: 'When x reaches π/2 (about 1.57), what value does this delayed cosine show?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 2, prompt: 'Wave value' },
        hints: ['Inside angle is 0', 'cos(0) = 1'],
        workedSolution: 'cos(π/2 − π/2) = cos(0) = 1. The shift turns cosine into a sine-shaped wave that peaks at π/2.'
      };
    }
  });

  add({
    id: 'hat-tan-def', family: 'trig', title: 'A 45° Ramp',
    context: 'On a ramp at 45°, rise equals run, so the slope ratio (tangent) is 1. In radians that angle is π/4.',
    xLabel: 'Angle (radians)', yLabel: 'Slope tan θ',
    xMin: 0, xMax: 1.2, form: 'y = tan θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'ramp angle in radians' },
      { sym: 'y', mean: 'rise ÷ run' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.tan(x),
    build() {
      return {
        question: 'At a 45° ramp (π/4 radians), what is the slope rise÷run?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 4, prompt: 'Slope ratio' },
        hints: ['Rise equals run at 45°'],
        workedSolution: 'sin and cos are equal at π/4, so tan(π/4) = 1. Rise and run match.'
      };
    }
  });

  add({
    id: 'hat-cofunction', family: 'trig', title: 'Complementary Angles',
    context: 'A right triangle’s acute angles add to 90° (π/2). The sine of one equals the cosine of the other: sin(π/2 − θ) = cos θ.',
    xLabel: 'θ (radians)', yLabel: 'sin(π/2 − θ)',
    xMin: 0, xMax: 1.6, form: 'y = sin(π/2 − θ)',
    symbolGlossary: [
      { sym: 'θ', mean: 'one acute angle' },
      { sym: 'y', mean: 'equals cos θ' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(PI / 2 - x),
    build() {
      return {
        question: 'When θ = 0, what does sin(π/2 − θ) equal? (It should match cos of 0.)',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'Value' },
        hints: ['sin(π/2) = 1'],
        workedSolution: 'sin(π/2 − 0) = sin(π/2) = 1, which equals cos(0). That is the cofunction idea.'
      };
    }
  });

  add({
    id: 'hat-period-half', family: 'trig', title: 'A Wave That Finishes Early',
    context: 'y = sin(2x) completes a full cycle by x = π, half the usual 2π period. At that moment the height is back to 0.',
    xLabel: 'x (radians)', yLabel: 'sin(2x)',
    xMin: 0, xMax: 3.5, form: 'y = sin(2x)',
    symbolGlossary: [
      { sym: '2', mean: 'frequency factor; period = π' },
      { sym: 'x', mean: 'radians' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(2 * x),
    build() {
      return {
        question: 'At the end of one fast cycle (x = π), what height does the wave show?',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: PI, prompt: 'Height at x = π' },
        hints: ['sin(2π) = 0'],
        workedSolution: 'sin(2·π) = sin(2π) = 0. One period of sin(2x) ends at x = π.'
      };
    }
  });

  add({
    id: 'hat-even-cos', family: 'trig', title: 'Mirror Angles for Cosine',
    context: 'Cosine does not care about the sign of the angle: left or right the same amount gives the same horizontal position. At 60° (π/3) that position is 1/2.',
    xLabel: 'Angle (radians)', yLabel: 'cos',
    xMin: 0, xMax: 3.2, form: 'y = cos θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'radians' },
      { sym: 'y', mean: 'horizontal position on the unit circle' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'At 60° (π/3 radians ≈ 1.05), how far to the right of center is the unit-circle point?',
        answer: { type: 'numeric', target: 0.5, tol: 0.06, atX: PI / 3, prompt: 'Horizontal position' },
        hints: ['cos(60°) = 1/2'],
        workedSolution: 'cos(π/3) = 1/2. Because cosine is even, cos(−π/3) is the same.'
      };
    }
  });

  add({
    id: 'hat-odd-sin', family: 'trig', title: 'Top of the Climb',
    context: 'Sine measures height on the unit circle. At a right angle (π/2) you are at the top.',
    xLabel: 'Angle (radians)', yLabel: 'Height (sin)',
    xMin: 0, xMax: 3.2, form: 'y = sin θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'radians' },
      { sym: 'y', mean: 'height on the unit circle' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'At a right angle (π/2 ≈ 1.57), what height does the unit circle show?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: PI / 2, prompt: 'Height' },
        hints: ['Top point is (0, 1)'],
        workedSolution: 'sin(π/2) = 1. (Sine is odd, so sin(−π/2) = −1 at the bottom.)'
      };
    }
  });

  add({
    id: 'hat-law-sines', family: 'trig', title: 'Surveying a Side',
    context: 'Surveyors use a fixed ratio: side ÷ sine of opposite angle = 20 for this triangle. Angle A is 30°.',
    xLabel: 'Angle A (degrees)', yLabel: 'sin A',
    xMin: 0, xMax: 90, form: 'y = sin(A°)',
    symbolGlossary: [
      { sym: 'A', mean: 'angle in degrees' },
      { sym: 'y', mean: 'sine of A' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'If side ÷ sin(angle) = 20 and the angle is 30°, how long is the side opposite that angle?',
        answer: { type: 'numeric', target: 10, tol: 0.4, atX: 30, prompt: 'Side length' },
        hints: ['sin(30°) = 0.5', 'side = 20 × 0.5 = 10'],
        workedSolution: 'Law of Sines: a = 20 · sin(30°) = 20 · 0.5 = 10.'
      };
    }
  });

  add({
    id: 'hat-law-cos', family: 'trig', title: 'Right Triangle Ladder',
    context: 'A ladder’s base is 5 m from a wall and the top is 12 m up. The ladder length is the hypotenuse of a right triangle.',
    xLabel: 'Reference', yLabel: 'Ladder length',
    xMin: 0, xMax: 5, form: 'y = 13',
    symbolGlossary: [{ sym: 'c', mean: 'hypotenuse = ladder length' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => 13,
    build() {
      return {
        question: 'How long is the ladder for a 5 m base and 12 m height?',
        answer: { type: 'numeric', target: 13, tol: 0.3, atX: 1, prompt: 'Ladder length (m)' },
        hints: ['√(25+144) = 13'],
        workedSolution: 'c = √(5²+12²) = 13 m. When the angle is 90°, the law of cosines becomes the Pythagorean theorem.'
      };
    }
  });

  add({
    id: 'hat-area', family: 'trig', title: 'Plot of Land',
    context: 'A triangular lot has two sides 7 m and 8 m with a right angle between them. Area = ½ · side · side · sin(included angle).',
    xLabel: 'Included angle (°)', yLabel: 'sin of angle',
    xMin: 0, xMax: 180, form: 'y = sin(x°)',
    symbolGlossary: [
      { sym: 'C', mean: 'angle between the two known sides' },
      { sym: 'y', mean: 'sine of C' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'What is the area of the lot with sides 7 and 8 and a 90° angle between them?',
        answer: { type: 'numeric', target: 28, tol: 0.5, atX: 90, prompt: 'Area (m²)' },
        hints: ['sin(90°) = 1', '½·7·8·1 = 28'],
        workedSolution: 'Area = ½·7·8·sin(90°) = 28·1 = 28 m².'
      };
    }
  });

  add({
    id: 'hat-inverse', family: 'trig', title: 'Reading an Angle from a Sensor',
    context: 'A sensor reports that cosine of the tilt is 0.5. For a small upward tilt (acute angle), that means 60°, or π/3 radians.',
    xLabel: 'Tilt (radians)', yLabel: 'cos(tilt)',
    xMin: 0, xMax: 1.6, form: 'y = cos θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'tilt in radians' },
      { sym: 'y', mean: 'cosine of tilt' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'If cos(tilt) = 0.5 and the tilt is acute, what is the tilt in radians (about 1.05)?',
        answer: { type: 'numeric', target: PI / 3, tol: 0.08, atX: PI / 3, prompt: 'Tilt (radians)' },
        hints: ['π/3 ≈ 1.05', 'Same as 60°'],
        workedSolution: 'arccos(0.5) = π/3 for the principal acute angle. That is 60°.'
      };
    }
  });

  add({
    id: 'hat-recip-sec', family: 'trig', title: 'Reciprocal of Cosine',
    context: 'Secant is 1 over cosine. At the start of the circle (angle 0), cosine is 1, so secant is also 1.',
    xLabel: 'Angle (radians)', yLabel: 'sec = 1/cos',
    xMin: 0, xMax: 1.2, form: 'y = sec θ',
    symbolGlossary: [
      { sym: 'θ', mean: 'radians' },
      { sym: 'y', mean: 'secant = 1/cosine' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => 1 / Math.cos(x),
    build() {
      return {
        question: 'At angle 0, what is 1 divided by cosine?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'Secant at 0' },
        hints: ['cos(0) = 1', '1/1 = 1'],
        workedSolution: 'sec(0) = 1/cos(0) = 1/1 = 1.'
      };
    }
  });

  add({
    id: 'hat-midline', family: 'trig', title: 'Temperature Oscillation',
    context: 'Daily temperature is modeled as 3 + 2 sin(x): it swings 2 degrees around a midline of 3. The hottest reading is 5.',
    xLabel: 'Time-like x', yLabel: 'Temperature model',
    xMin: 0, xMax: 6.3, form: 'y = 3 + 2 sin x',
    symbolGlossary: [
      { sym: 'k', mean: 'midline 3' },
      { sym: 'a', mean: 'amplitude 2' }
    ],
    paramDefs: [{ key: 'a', label: 'amplitude', min: 2, max: 2, step: 1 }],
    eval: (p, x) => 3 + 2 * Math.sin(x),
    build() {
      return {
        question: 'What is the highest temperature in this model?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: PI / 2, prompt: 'Highest reading' },
        hints: ['When sin = 1: 3 + 2 = 5'],
        workedSolution: 'Maximum of sin is 1, so maximum of 3 + 2 sin is 5. Midline 3 with amplitude 2.'
      };
    }
  });

  add({
    id: 'hat-sin-2pi', family: 'trig', title: 'One Full Spin',
    context: 'After one complete turn around the unit circle (2π radians), you are back at the start with height 0.',
    xLabel: 'Angle (radians)', yLabel: 'Height (sin)',
    xMin: 0, xMax: 7, form: 'y = sin x',
    symbolGlossary: [
      { sym: 'x', mean: 'radians' },
      { sym: 'y', mean: 'height on the unit circle' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'After one full spin (2π ≈ 6.28), what height do you read?',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: 2 * PI, prompt: 'Height' },
        hints: ['Back at the positive x-axis'],
        workedSolution: 'A full turn returns to (1, 0). Height (sine) is 0 again.'
      };
    }
  });

  add({
    id: 'hat-cos-pi', family: 'trig', title: 'Facing Backward',
    context: 'A half turn (π radians) points you the opposite way on the unit circle. Your left-right coordinate is −1.',
    xLabel: 'Angle (radians)', yLabel: 'Left-right (cos)',
    xMin: 0, xMax: 6.3, form: 'y = cos x',
    symbolGlossary: [
      { sym: 'x', mean: 'radians' },
      { sym: 'y', mean: 'horizontal coordinate' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'After a half turn (π ≈ 3.14), how far left or right of center are you?',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: PI, prompt: 'Horizontal position' },
        hints: ['Point is (−1, 0)'],
        workedSolution: 'At π the point is (−1, 0). Cosine is the x-coordinate: −1.'
      };
    }
  });

  add({
    id: 'hat-freq-3', family: 'trig', title: 'Triple-Speed Oscillator',
    context: 'A vibration y = sin(3x) runs three times as fast as ordinary sine. When x = π/6, the inside angle is already a right angle.',
    xLabel: 'x (radians)', yLabel: 'sin(3x)',
    xMin: 0, xMax: 2.2, form: 'y = sin(3x)',
    symbolGlossary: [
      { sym: '3', mean: 'frequency — three cycles in the usual period' },
      { sym: 'x', mean: 'radians' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(3 * x),
    build() {
      return {
        question: 'At x = π/6 (about 0.52), what value does the triple-speed wave reach?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 6, prompt: 'Wave value' },
        hints: ['3 · π/6 = π/2', 'sin(π/2) = 1'],
        workedSolution: '3 · (π/6) = π/2. sin(π/2) = 1 — the first peak of the fast wave.'
      };
    }
  });

  add({
    id: 'hat-ref-angle', family: 'trig', title: 'Same Height, Different Side',
    context: 'At 150° you are in the second quadrant. The reference angle is 30°, and sine is still positive — same height as at 30°.',
    xLabel: 'Degrees', yLabel: 'Height (sin)',
    xMin: 0, xMax: 180, form: 'y = sin(x°)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in degrees' },
      { sym: 'y', mean: 'sine = height' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'What height does the unit circle show at 150°?',
        answer: { type: 'numeric', target: 0.5, tol: 0.06, atX: 150, prompt: 'Height' },
        hints: ['Reference angle 30°', 'Sine positive in quadrant II'],
        workedSolution: '150° = 180° − 30°. Sine is positive in QII, so the height is sin(30°) = 0.5.'
      };
    }
  });

  add({
    id: 'hat-range-sin', family: 'trig', title: 'How High Can Sine Go?',
    context: 'Sine is the height on a circle of radius 1. It can never exceed the radius.',
    xLabel: 'Angle (radians)', yLabel: 'Height (sin)',
    xMin: 0, xMax: 6.3, form: 'y = sin x',
    symbolGlossary: [
      { sym: 'y', mean: 'height on the unit circle' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'What is the largest height sine can ever show on the unit circle?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: PI / 2, prompt: 'Maximum height' },
        hints: ['Top of the circle'],
        workedSolution: 'Range of sine is [−1, 1]. The maximum is 1 at the top of the unit circle.'
      };
    }
  });

  add({
    id: 'hat-compose', family: 'trig', title: 'Tide with a Flip',
    context: 'A tide model y = −2 sin(x) + 1 flips the sine wave and lifts it. The highest water is 3 when sine is at its lowest (−1).',
    xLabel: 'Time-like x', yLabel: 'Tide level',
    xMin: 0, xMax: 6.3, form: 'y = −2 sin x + 1',
    symbolGlossary: [
      { sym: 'a', mean: '−2 flips and stretches' },
      { sym: 'k', mean: 'midline 1' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: -2, max: -2, step: 1 }],
    eval: (p, x) => -2 * Math.sin(x) + 1,
    build() {
      return {
        question: 'What is the highest tide level in this flipped model?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 3 * PI / 2, prompt: 'Highest level' },
        hints: ['When sin = −1: −2(−1) + 1 = 3'],
        workedSolution: 'sin’s minimum is −1, so −2(−1) + 1 = 3. That is the maximum of this model (near x = 3π/2).'
      };
    }
  });

  add({
    id: 'hat-deg-rad', family: 'trig', title: 'Half Turn in Degrees',
    context: 'A straight angle is 180°. On the unit circle that is the same half turn as π radians — you face the opposite direction.',
    xLabel: 'Degrees', yLabel: 'Left-right (cos)',
    xMin: 0, xMax: 360, form: 'y = cos(x°)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in degrees' },
      { sym: 'y', mean: 'horizontal coordinate' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'After turning 180°, how far left or right of center are you on the unit circle?',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: 180, prompt: 'Horizontal position' },
        hints: ['Same as cos(π)'],
        workedSolution: '180° = π radians. The point is (−1, 0), so cosine is −1.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
