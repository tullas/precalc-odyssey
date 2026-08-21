/** Honors — Advanced Trig (25 unique) */
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
    id: 'hat-pythag', family: 'trig', title: 'Identity Always Holds',
    context: 'sin²θ + cos²θ = 1 for every angle. Checking at θ = π/6: (1/2)² + (√3/2)² = 1.',
    xLabel: 'θ radians', yLabel: 'sin²θ + cos²θ',
    xMin: 0, xMax: 6.3, form: 'y = sin²θ + cos²θ',
    symbolGlossary: [{ sym: 'θ', mean: 'angle in radians' }, { sym: 'y', mean: 'always 1' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x) ** 2 + Math.cos(x) ** 2,
    build() {
      return {
        question: 'Value of sin²θ + cos²θ at any θ (e.g. θ = 1)?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 1, prompt: 'Identity value' },
        hints: ['The graph is a flat line at 1'],
        workedSolution: 'This is the Pythagorean identity from the unit circle: x² + y² = 1 becomes cos² + sin² = 1.'
      };
    }
  });

  add({
    id: 'hat-double-sin', family: 'trig', title: 'Double-Angle for Sine',
    context: 'sin(2θ) = 2 sinθ cosθ. At θ = π/6, sin(π/3) = √3/2 ≈ 0.866.',
    xLabel: 'θ', yLabel: 'sin(2θ)',
    xMin: 0, xMax: 3.2, form: 'y = sin(2θ)',
    symbolGlossary: [{ sym: 'θ', mean: 'angle' }, { sym: 'y', mean: 'sine of double angle' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(2 * x),
    build() {
      return {
        question: 'sin(2θ) when θ = π/6 (≈ 0.52)?',
        answer: { type: 'numeric', target: 0.866, tol: 0.06, atX: PI / 6, prompt: 'sin(π/3)' },
        hints: ['2θ = π/3', 'sin(π/3) = √3/2 ≈ 0.866'],
        workedSolution: 'θ = π/6 ⇒ 2θ = π/3. sin(π/3) = √3/2 ≈ 0.866. Same as 2·sin(π/6)·cos(π/6) = 2·(1/2)·(√3/2).'
      };
    }
  });

  add({
    id: 'hat-double-cos', family: 'trig', title: 'Double-Angle for Cosine',
    context: 'cos(2θ) can be cos²θ − sin²θ. At θ = 0, cos(0) = 1.',
    xLabel: 'θ', yLabel: 'cos(2θ)',
    xMin: 0, xMax: 3.2, form: 'y = cos(2θ)',
    symbolGlossary: [{ sym: 'θ', mean: 'angle' }, { sym: 'y', mean: 'cosine of double angle' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(2 * x),
    build() {
      return {
        question: 'cos(2θ) at θ = 0?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'cos(0)' },
        hints: ['2·0 = 0', 'cos(0) = 1'],
        workedSolution: 'cos(0) = 1. Using cos²0 − sin²0 = 1 − 0 = 1 as well.'
      };
    }
  });

  add({
    id: 'hat-solve-sin', family: 'trig', title: 'Where Sine Hits 0.5',
    context: 'Solving sin θ = 1/2 in [0, π]. One solution is π/6.',
    xLabel: 'θ radians', yLabel: 'sin θ',
    xMin: 0, xMax: 3.2, form: 'y = sin θ',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'One solution of sin θ = 0.5 in the first quadrant (enter θ in radians, ≈ 0.52)?',
        answer: { type: 'numeric', target: PI / 6, tol: 0.08, atX: PI / 6, prompt: 'θ ≈' },
        hints: ['sin(π/6) = 1/2', 'π/6 ≈ 0.524'],
        workedSolution: 'In [0, π/2], sin is one-to-one from 0 to 1. sin(π/6) = 1/2, so θ = π/6 ≈ 0.52.'
      };
    }
  });

  add({
    id: 'hat-solve-cos', family: 'trig', title: 'Where Cosine Hits 0',
    context: 'cos θ = 0 at π/2 in the first cycle.',
    xLabel: 'θ', yLabel: 'cos θ',
    xMin: 0, xMax: 6.3, form: 'y = cos θ',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'Smallest positive θ where cos θ = 0?',
        answer: { type: 'numeric', target: PI / 2, tol: 0.08, atX: PI / 2, prompt: 'θ' },
        hints: ['π/2 ≈ 1.57'],
        workedSolution: 'cos(π/2) = 0. That is the first positive root.'
      };
    }
  });

  add({
    id: 'hat-amp-period', family: 'trig', title: 'Read Amplitude and Peak',
    context: 'y = 5 cos(x) has amplitude 5. Peak value is 5.',
    xLabel: 'x', yLabel: '5 cos x',
    xMin: 0, xMax: 6.3, form: 'y = 5 cos x',
    symbolGlossary: [{ sym: 'a', mean: 'amplitude 5' }],
    paramDefs: [{ key: 'a', label: 'a', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5 * Math.cos(x),
    build() {
      return {
        question: 'Maximum of y = 5 cos x?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 0, prompt: 'Max y' },
        hints: ['Amplitude 5; cos peaks at 1'],
        workedSolution: 'Max of cos is 1, so max of 5 cos is 5 at x = 0, ±2π, …'
      };
    }
  });

  add({
    id: 'hat-phase-cos', family: 'trig', title: 'Cosine Shifted',
    context: 'y = cos(x − π/2) equals sin x. At x = π/2, y = cos(0) = 1.',
    xLabel: 'x', yLabel: 'cos(x − π/2)',
    xMin: 0, xMax: 6.3, form: 'y = cos(x − π/2)',
    symbolGlossary: [{ sym: 'h', mean: 'phase shift π/2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x - PI / 2),
    build() {
      return {
        question: 'y at x = π/2?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 2, prompt: 'y' },
        hints: ['cos(0) = 1'],
        workedSolution: 'cos(π/2 − π/2) = cos(0) = 1. This shift turns cosine into a sine-shaped wave.'
      };
    }
  });

  add({
    id: 'hat-tan-def', family: 'trig', title: 'Tangent as Slope',
    context: 'tan θ = sin θ / cos θ. At π/4, tan = 1.',
    xLabel: 'θ', yLabel: 'tan θ',
    xMin: 0, xMax: 1.2, form: 'y = tan θ',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }, { sym: 'y', mean: 'tangent' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.tan(x),
    build() {
      return {
        question: 'tan(π/4)?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 4, prompt: 'tan(π/4)' },
        hints: ['sin and cos equal at π/4'],
        workedSolution: 'sin(π/4) = cos(π/4), so tan(π/4) = 1.'
      };
    }
  });

  add({
    id: 'hat-cofunction', family: 'trig', title: 'Cofunction Idea',
    context: 'sin(π/2 − θ) = cos θ. At θ = 0, sin(π/2) = 1 = cos(0).',
    xLabel: 'θ', yLabel: 'sin(π/2 − θ)',
    xMin: 0, xMax: 1.6, form: 'y = sin(π/2 − θ)',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }, { sym: 'y', mean: 'equals cos θ' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(PI / 2 - x),
    build() {
      return {
        question: 'sin(π/2 − θ) at θ = 0?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'Value' },
        hints: ['sin(π/2) = 1'],
        workedSolution: 'sin(π/2 − 0) = sin(π/2) = 1, which equals cos(0).'
      };
    }
  });

  add({
    id: 'hat-period-half', family: 'trig', title: 'Period of sin(2x)',
    context: 'y = sin(2x) has period π (not 2π). At x = π, sin(2π) = 0 like at x = 0.',
    xLabel: 'x', yLabel: 'sin(2x)',
    xMin: 0, xMax: 3.5, form: 'y = sin(2x)',
    symbolGlossary: [{ sym: '2', mean: 'frequency; period = 2π/2 = π' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(2 * x),
    build() {
      return {
        question: 'sin(2x) at x = π?',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: PI, prompt: 'y at x = π' },
        hints: ['sin(2π) = 0'],
        workedSolution: 'sin(2π) = 0. One full cycle of sin(2x) finishes at x = π.'
      };
    }
  });

  add({
    id: 'hat-even-cos', family: 'trig', title: 'Cosine Is Even',
    context: 'cos(−θ) = cos θ. The graph is symmetric about the y-axis.',
    xLabel: 'θ', yLabel: 'cos θ',
    xMin: 0, xMax: 3.2, form: 'y = cos θ',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'cos(π/3)? (same as cos(−π/3))',
        answer: { type: 'numeric', target: 0.5, tol: 0.06, atX: PI / 3, prompt: 'cos(π/3)' },
        hints: ['π/3 = 60°, cos = 1/2'],
        workedSolution: 'cos(π/3) = 1/2. Evenness means cos(−π/3) matches.'
      };
    }
  });

  add({
    id: 'hat-odd-sin', family: 'trig', title: 'Sine Is Odd',
    context: 'sin(−θ) = −sin θ. At θ = π/2, sin = 1 so sin(−π/2) = −1.',
    xLabel: 'θ', yLabel: 'sin θ',
    xMin: 0, xMax: 3.2, form: 'y = sin θ',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'sin(π/2)?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: PI / 2, prompt: 'sin(π/2)' },
        hints: ['Top of unit circle'],
        workedSolution: 'sin(π/2) = 1. Oddness: sin(−π/2) = −1.'
      };
    }
  });

  add({
    id: 'hat-law-sines', family: 'trig', title: 'Law of Sines Application',
    context: 'a/sin A = 20. If A = 30°, a = 20·sin(30°) = 10.',
    xLabel: 'A degrees', yLabel: 'sin A°',
    xMin: 0, xMax: 90, form: 'y = sin(A·π/180)',
    symbolGlossary: [{ sym: 'A', mean: 'angle degrees' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'If a/sin A = 20 and A = 30°, what is side a?',
        answer: { type: 'numeric', target: 10, tol: 0.4, atX: 30, prompt: 'Side a' },
        hints: ['sin 30° = 0.5', 'a = 20×0.5 = 10'],
        workedSolution: 'a = 20 · sin(30°) = 20 · 0.5 = 10.'
      };
    }
  });

  add({
    id: 'hat-law-cos', family: 'trig', title: 'Law of Cosines Idea',
    context: 'For a right triangle, c² = a² + b². With a = 5, b = 12, c = 13.',
    xLabel: 'placeholder x', yLabel: 'constant',
    xMin: 0, xMax: 5, form: 'y = 13',
    symbolGlossary: [{ sym: 'c', mean: 'hypotenuse' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => 13,
    build() {
      return {
        question: 'Hypotenuse when legs are 5 and 12?',
        answer: { type: 'numeric', target: 13, tol: 0.3, atX: 1, prompt: 'c' },
        hints: ['√(25+144) = 13'],
        workedSolution: 'c = √(25+144) = 13. Law of Cosines reduces to Pythagoras when the angle is 90°.'
      };
    }
  });

  add({
    id: 'hat-area', family: 'trig', title: 'Area with Sine',
    context: 'Area = ½·7·8·sin(90°) = 28 when the included angle is right.',
    xLabel: 'angle °', yLabel: 'sin',
    xMin: 0, xMax: 180, form: 'y = sin(x°)',
    symbolGlossary: [{ sym: 'C', mean: 'included angle' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'Area with sides 7 and 8 and included angle 90°?',
        answer: { type: 'numeric', target: 28, tol: 0.5, atX: 90, prompt: 'Area' },
        hints: ['½·56·1 = 28'],
        workedSolution: '½·7·8·sin(90°) = 28·1 = 28.'
      };
    }
  });

  add({
    id: 'hat-inverse', family: 'trig', title: 'Angle from Cosine',
    context: 'If cos θ = 0.5 and θ is acute, θ = 60° = π/3 radians ≈ 1.05.',
    xLabel: 'θ radians', yLabel: 'cos θ',
    xMin: 0, xMax: 1.6, form: 'y = cos θ',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'Acute θ with cos θ = 0.5 (in radians ≈ 1.05)?',
        answer: { type: 'numeric', target: PI / 3, tol: 0.08, atX: PI / 3, prompt: 'θ' },
        hints: ['π/3 ≈ 1.047'],
        workedSolution: 'arccos(0.5) = π/3 for the principal acute value.'
      };
    }
  });

  add({
    id: 'hat-recip-sec', family: 'trig', title: 'Secant at Zero',
    context: 'sec θ = 1/cos θ. At θ = 0, sec = 1.',
    xLabel: 'θ', yLabel: '1/cos θ',
    xMin: 0, xMax: 1.2, form: 'y = sec θ',
    symbolGlossary: [{ sym: 'θ', mean: 'radians' }, { sym: 'y', mean: 'secant' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => 1 / Math.cos(x),
    build() {
      return {
        question: 'sec(0)?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'sec(0)' },
        hints: ['1/cos(0) = 1/1 = 1'],
        workedSolution: 'sec(0) = 1/cos(0) = 1.'
      };
    }
  });

  add({
    id: 'hat-midline', family: 'trig', title: 'Sinusoid Midline',
    context: 'y = 3 + 2 sin x oscillates about 3. Maximum is 5.',
    xLabel: 'x', yLabel: '3 + 2 sin x',
    xMin: 0, xMax: 6.3, form: 'y = 3 + 2 sin x',
    symbolGlossary: [{ sym: 'k', mean: 'midline 3' }, { sym: 'a', mean: 'amplitude 2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 2, max: 2, step: 1 }],
    eval: (p, x) => 3 + 2 * Math.sin(x),
    build() {
      return {
        question: 'Maximum of 3 + 2 sin x?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: PI / 2, prompt: 'Max' },
        hints: ['3 + 2·1 = 5'],
        workedSolution: 'Max when sin = 1: 3 + 2 = 5. Midline 3, amplitude 2.'
      };
    }
  });

  add({
    id: 'hat-sin-2pi', family: 'trig', title: 'Full Period Endpoint',
    context: 'sin(2π) = 0, completing one standard period.',
    xLabel: 'x', yLabel: 'sin x',
    xMin: 0, xMax: 7, form: 'y = sin x',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'sin(2π)?',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: 2 * PI, prompt: 'sin(2π)' },
        hints: ['Back to start of the circle'],
        workedSolution: 'After one full turn, height is 0 again: sin(2π) = 0.'
      };
    }
  });

  add({
    id: 'hat-cos-pi', family: 'trig', title: 'Cosine at Half Turn',
    context: 'cos π = −1.',
    xLabel: 'x', yLabel: 'cos x',
    xMin: 0, xMax: 6.3, form: 'y = cos x',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'cos(π)?',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: PI, prompt: 'cos(π)' },
        hints: ['Half turn to (−1, 0)'],
        workedSolution: 'π radians → point (−1, 0); cosine is −1.'
      };
    }
  });

  add({
    id: 'hat-freq-3', family: 'trig', title: 'Triple Frequency',
    context: 'sin(3x) at x = π/6 gives sin(π/2) = 1.',
    xLabel: 'x', yLabel: 'sin(3x)',
    xMin: 0, xMax: 2.2, form: 'y = sin(3x)',
    symbolGlossary: [{ sym: '3', mean: 'frequency factor' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(3 * x),
    build() {
      return {
        question: 'sin(3x) at x = π/6?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 6, prompt: 'y' },
        hints: ['3·π/6 = π/2', 'sin(π/2) = 1'],
        workedSolution: '3·(π/6) = π/2; sin(π/2) = 1.'
      };
    }
  });

  add({
    id: 'hat-ref-angle', family: 'trig', title: 'Reference Angle Value',
    context: 'sin(150°) = sin(30°) = 0.5 because 150° is in quadrant II with reference 30°.',
    xLabel: 'degrees', yLabel: 'sin',
    xMin: 0, xMax: 180, form: 'y = sin(x°)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'sin(150°)?',
        answer: { type: 'numeric', target: 0.5, tol: 0.06, atX: 150, prompt: 'sin(150°)' },
        hints: ['Reference angle 30°', 'Sine positive in QII'],
        workedSolution: '150° = 180° − 30°. sin is positive in QII, so sin(150°) = sin(30°) = 0.5.'
      };
    }
  });

  add({
    id: 'hat-range-sin', family: 'trig', title: 'Range of Sine',
    context: 'Sine only outputs values between −1 and 1. Its maximum is 1.',
    xLabel: 'x', yLabel: 'sin x',
    xMin: 0, xMax: 6.3, form: 'y = sin x',
    symbolGlossary: [{ sym: 'y', mean: 'sine output' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'Largest value sin x can take?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: PI / 2, prompt: 'Max of sine' },
        hints: ['Peak of the unit circle'],
        workedSolution: 'Range of sine is [−1, 1]. Maximum is 1 at π/2 + 2πk.'
      };
    }
  });

  add({
    id: 'hat-compose', family: 'trig', title: 'Amplitude and Shift Together',
    context: 'y = −2 sin x + 1 has max 3 and min −1.',
    xLabel: 'x', yLabel: '−2 sin x + 1',
    xMin: 0, xMax: 6.3, form: 'y = −2 sin x + 1',
    symbolGlossary: [{ sym: 'a', mean: '−2 flips and stretches' }, { sym: 'k', mean: 'midline 1' }],
    paramDefs: [{ key: 'a', label: 'a', min: -2, max: -2, step: 1 }],
    eval: (p, x) => -2 * Math.sin(x) + 1,
    build() {
      return {
        question: 'Maximum of −2 sin x + 1?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 3 * PI / 2, prompt: 'Max y' },
        hints: ['When sin = −1, −2(−1)+1 = 3'],
        workedSolution: 'sin min is −1 → −2(−1)+1 = 3. Max occurs at x = 3π/2 in [0, 2π].'
      };
    }
  });

  add({
    id: 'hat-deg-rad', family: 'trig', title: 'Convert 180°',
    context: '180° = π radians. cos(180°) = cos(π) = −1.',
    xLabel: 'degrees', yLabel: 'cos',
    xMin: 0, xMax: 360, form: 'y = cos(x°)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'cos(180°)?',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: 180, prompt: 'cos(180°)' },
        hints: ['Same as cos(π)'],
        workedSolution: '180° = π rad. cos = −1 at the left of the unit circle.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
