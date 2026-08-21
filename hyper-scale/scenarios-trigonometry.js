/** Standard — Trigonometry (25 unique scenarios) */
(function () {
  const T = [];
  const L = 'standard', U = 'trigonometry';
  const PI = Math.PI;

  function add(o) {
    o.level = L;
    o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  // 1 — Degrees to a known sine (30°)
  add({
    id: 'tr-sin30', family: 'trig', title: 'Sine of 30 Degrees',
    context: 'On the unit circle, sin(30°) = 1/2. Here the horizontal axis is degrees and y = sin(x·π/180).',
    xLabel: 'Angle in degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 90, form: 'y = sin(x·π/180)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in degrees' },
      { sym: 'y', mean: 'sine of that angle' }
    ],
    paramDefs: [{ key: 'a', label: 'a — amplitude', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'What is sin(30°)? Enter the exact decimal value.',
        answer: { type: 'numeric', target: 0.5, tol: 0.05, atX: 30, prompt: 'sin(30°)' },
        hints: ['sin(30°) = 1/2 = 0.5']
      };
    }
  });

  // 2 — Cosine 60°
  add({
    id: 'tr-cos60', family: 'trig', title: 'Cosine of 60 Degrees',
    context: 'cos(60°) = 1/2 on the unit circle. Graph uses degrees on the x-axis.',
    xLabel: 'Angle in degrees (x)', yLabel: 'cos(x°)',
    xMin: 0, xMax: 90, form: 'y = cos(x·π/180)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in degrees' },
      { sym: 'y', mean: 'cosine of that angle' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'What is cos(60°)?',
        answer: { type: 'numeric', target: 0.5, tol: 0.05, atX: 60, prompt: 'cos(60°)' },
        hints: ['cos(60°) = 1/2']
      };
    }
  });

  // 3 — Sine 90°
  add({
    id: 'tr-sin90', family: 'trig', title: 'Sine at 90 Degrees',
    context: 'At 90°, the unit-circle point is (0, 1), so sin(90°) = 1.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 180, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'What is sin(90°)?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 90, prompt: 'sin(90°)' },
        hints: ['Top of the unit circle: sine = 1']
      };
    }
  });

  // 4 — Radians: sin(π/2)
  add({
    id: 'tr-sin-pi2', family: 'trig', title: 'Sine in Radians',
    context: 'In radians, π/2 is a right angle. sin(π/2) = 1. Here x is already in radians.',
    xLabel: 'Angle in radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in radians' },
      { sym: 'y', mean: 'sine' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'What is sin(π/2)? (π/2 ≈ 1.57 on the axis)',
        answer: { type: 'numeric', target: 1, tol: 0.06, atX: PI / 2, prompt: 'sin(π/2)' },
        hints: ['π/2 radians = 90°, sin = 1']
      };
    }
  });

  // 5 — cos(0)
  add({
    id: 'tr-cos0', family: 'trig', title: 'Cosine at Zero',
    context: 'At angle 0, the unit-circle point is (1, 0), so cos(0) = 1.',
    xLabel: 'Radians (x)', yLabel: 'cos(x)',
    xMin: 0, xMax: 6.3, form: 'y = cos(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'What is cos(0)?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'cos(0)' },
        hints: ['cos(0) = 1']
      };
    }
  });

  // 6 — Amplitude
  add({
    id: 'tr-amp', family: 'trig', title: 'Amplitude of a Wave',
    context: 'y = 3 sin(x) has amplitude 3: it oscillates between −3 and 3 instead of −1 and 1.',
    xLabel: 'Radians (x)', yLabel: 'y = 3 sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = 3·sin(x)',
    symbolGlossary: [
      { sym: 'a', mean: 'amplitude (3)' },
      { sym: 'x', mean: 'radians' }
    ],
    paramDefs: [{ key: 'a', label: 'a — amplitude', min: 3, max: 3, step: 0.5 }],
    eval: (p, x) => 3 * Math.sin(x),
    build() {
      return {
        question: 'What is the maximum value of y = 3 sin(x)? (read near x = π/2 ≈ 1.57)',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: PI / 2, prompt: 'Maximum y' },
        hints: ['Amplitude 3 → max is 3']
      };
    }
  });

  // 7 — Period idea: sin completes at 2π
  add({
    id: 'tr-period', family: 'trig', title: 'One Full Period',
    context: 'y = sin(x) repeats every 2π radians. At x = 2π the value matches x = 0.',
    xLabel: 'Radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 7, form: 'y = sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'What is sin(2π)? (2π ≈ 6.28)',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: 2 * PI, prompt: 'sin(2π)' },
        hints: ['After one full turn, sine returns to 0']
      };
    }
  });

  // 8 — Phase shift: sin(x − π/2) at a point
  add({
    id: 'tr-phase', family: 'trig', title: 'Phase Shift',
    context: 'y = sin(x − π/2) is the sine wave shifted right by π/2. At x = π/2 the input to sine is 0.',
    xLabel: 'Radians (x)', yLabel: 'sin(x − π/2)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x − π/2)',
    symbolGlossary: [
      { sym: 'x', mean: 'radians' },
      { sym: 'h', mean: 'phase shift π/2 to the right' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x - PI / 2),
    build() {
      return {
        question: 'What is y at x = π/2 (≈ 1.57)?',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: PI / 2, prompt: 'y at x = π/2' },
        hints: ['sin(π/2 − π/2) = sin(0) = 0']
      };
    }
  });

  // 9 — tan at 45°
  add({
    id: 'tr-tan45', family: 'trig', title: 'Tangent of 45 Degrees',
    context: 'tan(θ) = sin(θ)/cos(θ). At 45°, sin and cos are equal, so tan(45°) = 1.',
    xLabel: 'Degrees (x)', yLabel: 'tan(x°)',
    xMin: 0, xMax: 60, form: 'y = tan(x·π/180)',
    symbolGlossary: [
      { sym: 'x', mean: 'degrees' },
      { sym: 'y', mean: 'tangent' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.tan(x * PI / 180),
    build() {
      return {
        question: 'What is tan(45°)?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: 45, prompt: 'tan(45°)' },
        hints: ['sin and cos are equal at 45°']
      };
    }
  });

  // 10 — cos(π)
  add({
    id: 'tr-cos-pi', family: 'trig', title: 'Cosine of π Radians',
    context: 'π radians is 180°. The unit-circle point is (−1, 0), so cos(π) = −1.',
    xLabel: 'Radians (x)', yLabel: 'cos(x)',
    xMin: 0, xMax: 6.3, form: 'y = cos(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'What is cos(π)? (π ≈ 3.14)',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: PI, prompt: 'cos(π)' },
        hints: ['Half turn: cosine = −1']
      };
    }
  });

  // 11 — Amplitude + vertical shift
  add({
    id: 'tr-midline', family: 'trig', title: 'Wave Above the Axis',
    context: 'y = 2 + sin(x) oscillates around the midline y = 2. The maximum is 3.',
    xLabel: 'Radians (x)', yLabel: 'y = 2 + sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = 2 + sin(x)',
    symbolGlossary: [
      { sym: 'k', mean: 'vertical shift (midline)' },
      { sym: 'x', mean: 'radians' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => 2 + Math.sin(x),
    build() {
      return {
        question: 'Maximum value of y = 2 + sin(x)? (near x = π/2)',
        answer: { type: 'numeric', target: 3, tol: 0.12, atX: PI / 2, prompt: 'Maximum y' },
        hints: ['2 + 1 = 3']
      };
    }
  });

  // 12 — sin(0)
  add({
    id: 'tr-sin0', family: 'trig', title: 'Sine at the Start',
    context: 'At angle 0, height on the unit circle is 0, so sin(0) = 0.',
    xLabel: 'Radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'What is sin(0)?',
        answer: { type: 'numeric', target: 0, tol: 0.05, atX: 0, prompt: 'sin(0)' },
        hints: ['sin(0) = 0']
      };
    }
  });

  // 13 — Degree/radian link: 180°
  add({
    id: 'tr-180', family: 'trig', title: 'Half Turn in Degrees',
    context: '180° is a straight angle. sin(180°) = 0.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 360, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'What is sin(180°)?',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: 180, prompt: 'sin(180°)' },
        hints: ['Half circle: sine returns to 0']
      };
    }
  });

  // 14 — cos(90°)
  add({
    id: 'tr-cos90', family: 'trig', title: 'Cosine at 90 Degrees',
    context: 'At 90°, the x-coordinate on the unit circle is 0, so cos(90°) = 0.',
    xLabel: 'Degrees (x)', yLabel: 'cos(x°)',
    xMin: 0, xMax: 180, form: 'y = cos(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'What is cos(90°)?',
        answer: { type: 'numeric', target: 0, tol: 0.06, atX: 90, prompt: 'cos(90°)' },
        hints: ['Unit circle top point has x = 0']
      };
    }
  });

  // 15 — Period with coefficient: sin(2x)
  add({
    id: 'tr-freq', family: 'trig', title: 'Faster Oscillation',
    context: 'y = sin(2x) completes two cycles in 0 to 2π. At x = π/4, the angle inside is π/2.',
    xLabel: 'Radians (x)', yLabel: 'sin(2x)',
    xMin: 0, xMax: 3.2, form: 'y = sin(2x)',
    symbolGlossary: [
      { sym: 'x', mean: 'radians' },
      { sym: 'b', mean: '2 compresses the period' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(2 * x),
    build() {
      return {
        question: 'What is sin(2x) at x = π/4 (≈ 0.785)?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 4, prompt: 'y at x = π/4' },
        hints: ['2·(π/4) = π/2, sin(π/2) = 1']
      };
    }
  });

  // 16 — Negative sine
  add({
    id: 'tr-neg-sin', family: 'trig', title: 'Reflected Sine Wave',
    context: 'y = −sin(x) flips the sine wave over the x-axis. At x = π/2, y = −1.',
    xLabel: 'Radians (x)', yLabel: '−sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = −sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'negative sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: -1, max: -1, step: 0.1 }],
    eval: (p, x) => -Math.sin(x),
    build() {
      return {
        question: 'What is y at x = π/2?',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: PI / 2, prompt: 'y at π/2' },
        hints: ['−sin(π/2) = −1']
      };
    }
  });

  // 17 — Law of Sines setup (side from ratio) — numeric via model
  add({
    id: 'tr-law-sines-idea', family: 'trig', title: 'Side from a Sine Ratio',
    context: 'In a triangle, a/sin(A) is constant. If a/sin(30°) = 10 and sin(30°) = 0.5, then a = 5. Here we read sin on the graph to support that ratio.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 90, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'angle in degrees' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'Using sin(30°) from the graph, if a / sin(30°) = 10, what is side a?',
        answer: { type: 'numeric', target: 5, tol: 0.3, atX: 30, prompt: 'Side length a' },
        hints: ['sin(30°) = 0.5, so a = 10 × 0.5 = 5']
      };
    }
  });

  // 18 — Area of triangle (1/2)ab sin(C)
  add({
    id: 'tr-area', family: 'trig', title: 'Triangle Area with Sine',
    context: 'Area = (1/2)·ab·sin(C). With a = 6, b = 4, C = 90°, sin(90°) = 1, so area = 12.',
    xLabel: 'Angle C in degrees', yLabel: 'sin(C°)',
    xMin: 0, xMax: 180, form: 'y = sin(C·π/180)',
    symbolGlossary: [{ sym: 'C', mean: 'included angle in degrees' }, { sym: 'y', mean: 'sine of C' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'Area = (1/2)·6·4·sin(90°). What is the area?',
        answer: { type: 'numeric', target: 12, tol: 0.4, atX: 90, prompt: 'Area' },
        hints: ['sin(90°) = 1 → (1/2)·24·1 = 12']
      };
    }
  });

  // 19 — Inverse idea: arcsin
  add({
    id: 'tr-arcsin', family: 'trig', title: 'Angle from a Sine Value',
    context: 'If sin(θ) = 0.5 and θ is between 0° and 90°, then θ = 30°. The graph of sine helps you see where height is 0.5.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 90, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'For acute angles, if sin(θ) = 0.5, what is θ in degrees?',
        answer: { type: 'numeric', target: 30, tol: 1, atX: 30, prompt: 'θ in degrees' },
        hints: ['sin(30°) = 0.5']
      };
    }
  });

  // 20 — Pythagorean identity check at a point
  add({
    id: 'tr-pythag', family: 'trig', title: 'sin² + cos² = 1',
    context: 'At every angle, sin²(θ) + cos²(θ) = 1. At 0 radians: 0 + 1 = 1.',
    xLabel: 'Radians (x)', yLabel: 'sin²(x) + cos²(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin²(x) + cos²(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'should stay near 1' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x) * Math.sin(x) + Math.cos(x) * Math.cos(x),
    build() {
      return {
        question: 'What is sin²(0) + cos²(0)?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'Value of identity at 0' },
        hints: ['0 + 1 = 1']
      };
    }
  });

  // 21 — cos(π/3) = 0.5
  add({
    id: 'tr-cos-pi3', family: 'trig', title: 'Cosine of π/3',
    context: 'π/3 radians = 60°. cos(π/3) = 1/2.',
    xLabel: 'Radians (x)', yLabel: 'cos(x)',
    xMin: 0, xMax: 3.2, form: 'y = cos(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'What is cos(π/3)? (π/3 ≈ 1.05)',
        answer: { type: 'numeric', target: 0.5, tol: 0.06, atX: PI / 3, prompt: 'cos(π/3)' },
        hints: ['π/3 = 60°, cos = 1/2']
      };
    }
  });

  // 22 — Law of Cosines idea: right triangle c²
  add({
    id: 'tr-law-cos', family: 'trig', title: 'Right Triangle Side',
    context: 'In a right triangle with legs 3 and 4, hypotenuse is 5. Cosine of the angle next to leg 4 (adjacent) over 5 is 4/5 = 0.8 — here we focus on the hypotenuse length.',
    xLabel: 'Degrees (x)', yLabel: 'cos(x°)',
    xMin: 0, xMax: 90, form: 'y = cos(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'acute angle' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'Legs 3 and 4; what is the hypotenuse? (3-4-5 triangle)',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 0, prompt: 'Hypotenuse' },
        hints: ['3² + 4² = 9 + 16 = 25 = 5²']
      };
    }
  });

  // 23 — Vertical stretch of cosine
  add({
    id: 'tr-cos-amp', family: 'trig', title: 'Taller Cosine Wave',
    context: 'y = 4 cos(x) has amplitude 4. At x = 0, y = 4.',
    xLabel: 'Radians (x)', yLabel: '4 cos(x)',
    xMin: 0, xMax: 6.3, form: 'y = 4·cos(x)',
    symbolGlossary: [{ sym: 'a', mean: 'amplitude 4' }, { sym: 'x', mean: 'radians' }],
    paramDefs: [{ key: 'a', label: 'a — amplitude', min: 4, max: 4, step: 0.5 }],
    eval: (p, x) => 4 * Math.cos(x),
    build() {
      return {
        question: 'What is y at x = 0?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 0, prompt: 'y at x = 0' },
        hints: ['4·cos(0) = 4·1 = 4']
      };
    }
  });

  // 24 — sin(270°) or 3π/2
  add({
    id: 'tr-sin-3pi2', family: 'trig', title: 'Sine at 3π/2',
    context: 'At 3π/2 radians (270°), the unit-circle point is (0, −1), so sin(3π/2) = −1.',
    xLabel: 'Radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'What is sin(3π/2)? (3π/2 ≈ 4.71)',
        answer: { type: 'numeric', target: -1, tol: 0.1, atX: 3 * PI / 2, prompt: 'sin(3π/2)' },
        hints: ['Bottom of the unit circle: sine = −1']
      };
    }
  });

  // 25 — Combined: amplitude and shift
  add({
    id: 'tr-combined', family: 'trig', title: 'Shifted and Stretched Sine',
    context: 'y = 2 sin(x) + 1 has amplitude 2 and midline 1. Maximum is 3 at x = π/2.',
    xLabel: 'Radians (x)', yLabel: '2 sin(x) + 1',
    xMin: 0, xMax: 6.3, form: 'y = 2·sin(x) + 1',
    symbolGlossary: [
      { sym: 'a', mean: 'amplitude 2' },
      { sym: 'k', mean: 'midline shift +1' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 2, max: 2, step: 0.5 }],
    eval: (p, x) => 2 * Math.sin(x) + 1,
    build() {
      return {
        question: 'Maximum value of y = 2 sin(x) + 1?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: PI / 2, prompt: 'Maximum y' },
        hints: ['2·1 + 1 = 3']
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
