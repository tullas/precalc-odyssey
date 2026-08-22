/** AP — Polar Coordinates (25) stranger-test */
(function () {
  const T = [];
  const L = 'ap', U = 'polar';
  const PI = Math.PI;

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  // Distance from origin is r (when r ≥ 0)
  add({
    id: 'ap-pol-r', family: 'linear', title: 'How Far From the Origin?',
    context: 'In polar coordinates a point is written (r, θ). The number r is the straight-line distance from the origin when r is positive.',
    xLabel: 'Angle idea (x)', yLabel: 'Distance r = 5',
    xMin: 0, xMax: 6, form: 'y = 5 (constant r)',
    symbolGlossary: [{ sym: 'r', mean: 'distance from the origin' }, { sym: 'θ', mean: 'direction angle' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'r', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5,
    build() {
      return {
        question: 'A buoy sits at polar point (5, π/3). How many units is it from the origin?',
        answer: { type: 'numeric', target: 5, tol: 0.15, atX: 1, prompt: 'Distance from origin' },
        hints: ['Positive r is the distance from the origin'],
        workedSolution: 'For (r, θ) with r ≥ 0, the distance from the origin is r. Here r = 5, so the buoy is 5 units away regardless of the angle π/3.'
      };
    }
  });

  add({
    id: 'ap-pol-x', family: 'trig', title: 'East–West From Polar',
    context: 'To get the usual x-coordinate from polar form, use x = r cos θ. A point with r = 4 at θ = 0 lies on the positive x-axis.',
    xLabel: 'θ (radians)', yLabel: 'x = 4 cos θ',
    xMin: 0, xMax: 6.3, form: 'y = 4 cos θ',
    symbolGlossary: [{ sym: 'r', mean: '4 (fixed radius)' }, { sym: 'θ', mean: 'angle from positive x-axis' }, { sym: 'y', mean: 'Cartesian x-coordinate' }],
    paramDefs: [{ key: 'a', label: 'r', min: 4, max: 4, step: 1 }],
    eval: (p, x) => 4 * Math.cos(x),
    build() {
      return {
        question: 'For r = 4 and θ = 0, what is the Cartesian x-coordinate?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 0, prompt: 'x = r cos θ' },
        hints: ['cos(0) = 1', '4 · 1 = 4'],
        workedSolution: 'x = r cos θ = 4 · cos(0) = 4 · 1 = 4. The point is (4, 0) in Cartesian coordinates.'
      };
    }
  });

  add({
    id: 'ap-pol-y', family: 'trig', title: 'North–South From Polar',
    context: 'The Cartesian y-coordinate is y = r sin θ. At θ = π/2 with r = 3 you are straight “north” of the origin.',
    xLabel: 'θ (radians)', yLabel: 'y = 3 sin θ',
    xMin: 0, xMax: 6.3, form: 'y = 3 sin θ',
    symbolGlossary: [{ sym: 'r', mean: '3' }, { sym: 'θ', mean: 'angle' }, { sym: 'y', mean: 'Cartesian y' }],
    paramDefs: [{ key: 'a', label: 'r', min: 3, max: 3, step: 1 }],
    eval: (p, x) => 3 * Math.sin(x),
    build() {
      return {
        question: 'For r = 3 and θ = π/2, what is the Cartesian y-coordinate?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: PI / 2, prompt: 'y = r sin θ' },
        hints: ['sin(π/2) = 1', '3 · 1 = 3'],
        workedSolution: 'y = 3 · sin(π/2) = 3 · 1 = 3. The point is (0, 3) in Cartesian form.'
      };
    }
  });

  add({
    id: 'ap-pol-half', family: 'trig', title: '45° on a Circle of Radius 2',
    context: 'A robot is 2 units from the origin at 45° (π/4 radians). Its eastward coordinate is 2 cos(π/4).',
    xLabel: 'θ', yLabel: '2 cos θ',
    xMin: 0, xMax: 1.6, form: 'y = 2 cos θ',
    symbolGlossary: [{ sym: 'r', mean: '2' }, { sym: 'θ', mean: 'π/4' }],
    paramDefs: [{ key: 'a', label: 'r', min: 2, max: 2, step: 1 }],
    eval: (p, x) => 2 * Math.cos(x),
    build() {
      return {
        question: 'About how far east is the robot? (2 cos(π/4) ≈ 1.41)',
        answer: { type: 'numeric', target: 1.414, tol: 0.1, atX: PI / 4, prompt: 'East coordinate' },
        hints: ['cos(π/4) = √2/2 ≈ 0.707', '2 × 0.707 ≈ 1.41'],
        workedSolution: 'x = 2 · (√2/2) = √2 ≈ 1.41. Same for y because sin(π/4) = cos(π/4).'
      };
    }
  });

  add({
    id: 'ap-pol-r2', family: 'linear', title: 'Radar Blip Distance',
    context: 'Radar reports a contact at (r, θ) = (12, 2). Only r matters for “how far away.”',
    xLabel: 'Reference', yLabel: 'Distance',
    xMin: 0, xMax: 5, form: 'y = 12',
    symbolGlossary: [{ sym: 'r', mean: '12 units' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'r', min: 12, max: 12, step: 1 }],
    eval: (p, x) => 12,
    build() {
      return {
        question: 'How far is the contact from the radar at the origin?',
        answer: { type: 'numeric', target: 12, tol: 0.3, atX: 1, prompt: 'Distance' },
        hints: ['Read r from (12, 2)'],
        workedSolution: 'Distance from the origin is the polar radius r = 12.'
      };
    }
  });

  add({
    id: 'ap-pol-neg-x', family: 'trig', title: 'Facing Left on the Circle',
    context: 'At θ = π with r = 5, cos π = −1, so the Cartesian x is negative: you are left of the origin.',
    xLabel: 'θ', yLabel: '5 cos θ',
    xMin: 0, xMax: 6.3, form: 'y = 5 cos θ',
    symbolGlossary: [{ sym: 'r', mean: '5' }, { sym: 'θ', mean: 'π is a half turn' }],
    paramDefs: [{ key: 'a', label: 'r', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5 * Math.cos(x),
    build() {
      return {
        question: 'What is the Cartesian x for r = 5, θ = π?',
        answer: { type: 'numeric', target: -5, tol: 0.2, atX: PI, prompt: 'x-coordinate' },
        hints: ['cos(π) = −1'],
        workedSolution: 'x = 5 · (−1) = −5. The point is (−5, 0).'
      };
    }
  });

  add({
    id: 'ap-pol-from-cart', family: 'trig', title: 'Distance From Cartesian',
    context: 'A point is at Cartesian (3, 4). Its polar r is the same as the vector magnitude √(3²+4²).',
    xLabel: 'x-component', yLabel: '√(x²+16)',
    xMin: 0, xMax: 6, form: 'y = √(x² + 16)',
    symbolGlossary: [{ sym: 'x', mean: 'Cartesian x' }, { sym: 'y', mean: 'polar r when Cartesian y = 4' }],
    paramDefs: [{ key: 'a', label: 'a', min: 4, max: 4, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 16),
    build() {
      return {
        question: 'What polar r matches Cartesian (3, 4)?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 3, prompt: 'r' },
        hints: ['√(9+16) = 5'],
        workedSolution: 'r = √(x²+y²) = √(9+16) = 5. Polar form could be (5, arctan(4/3)).'
      };
    }
  });

  add({
    id: 'ap-pol-circle', family: 'linear', title: 'Circle of Fixed Radius',
    context: 'The polar equation r = 6 describes every point six units from the origin — a circle.',
    xLabel: 'θ idea', yLabel: 'r = 6',
    xMin: 0, xMax: 6, form: 'y = 6',
    symbolGlossary: [{ sym: 'r', mean: 'constant 6' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'r', min: 6, max: 6, step: 1 }],
    eval: (p, x) => 6,
    build() {
      return {
        question: 'On the curve r = 6, how far is every point from the origin?',
        answer: { type: 'numeric', target: 6, tol: 0.15, atX: 2, prompt: 'Distance' },
        hints: ['r is constant'],
        workedSolution: 'r = 6 means distance 6 for every angle — a circle of radius 6 centered at the origin.'
      };
    }
  });

  add({
    id: 'ap-pol-y0', family: 'trig', title: 'On the x-Axis',
    context: 'When θ = 0, sin θ = 0, so the Cartesian y-coordinate is 0: the point sits on the x-axis.',
    xLabel: 'θ', yLabel: '4 sin θ',
    xMin: 0, xMax: 6.3, form: 'y = 4 sin θ',
    symbolGlossary: [{ sym: 'r', mean: '4' }],
    paramDefs: [{ key: 'a', label: 'r', min: 4, max: 4, step: 1 }],
    eval: (p, x) => 4 * Math.sin(x),
    build() {
      return {
        question: 'For r = 4 and θ = 0, what is Cartesian y?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 0, prompt: 'y' },
        hints: ['sin(0) = 0'],
        workedSolution: 'y = 4 · sin(0) = 0. The point is on the positive x-axis.'
      };
    }
  });

  add({
    id: 'ap-pol-scale', family: 'linear', title: 'Double the Radius',
    context: 'If every polar radius is doubled, distances from the origin double. A point that was 3 units out moves to 6.',
    xLabel: 'Original r', yLabel: '2r',
    xMin: 0, xMax: 8, form: 'y = 2x',
    symbolGlossary: [{ sym: 'x', mean: 'original r' }, { sym: 'y', mean: 'scaled r' }],
    paramDefs: [{ key: 'm', label: 'scale', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'Original r = 3. After doubling all radii, what is the new r?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 3, prompt: 'New r' },
        hints: ['2 × 3 = 6'],
        workedSolution: 'Scaling polar r by 2 sends 3 → 6. Angles stay the same; only distance changes.'
      };
    }
  });

  add({
    id: 'ap-pol-30', family: 'trig', title: '30° East Component',
    context: 'A kite string is 10 units long at 30° above the horizontal. Horizontal distance is 10 cos(30°).',
    xLabel: 'θ degrees', yLabel: '10 cos(θ°)',
    xMin: 0, xMax: 90, form: 'y = 10 cos(θ°)',
    symbolGlossary: [{ sym: 'r', mean: 'string length 10' }, { sym: 'θ', mean: 'degrees from horizontal' }],
    paramDefs: [{ key: 'a', label: 'r', min: 10, max: 10, step: 1 }],
    eval: (p, x) => 10 * Math.cos(x * PI / 180),
    build() {
      return {
        question: 'About how far horizontally is the kite from you? (10 cos 30° ≈ 8.66)',
        answer: { type: 'numeric', target: 8.66, tol: 0.25, atX: 30, prompt: 'Horizontal distance' },
        hints: ['cos 30° = √3/2 ≈ 0.866'],
        workedSolution: 'x = 10 · (√3/2) ≈ 8.66. Same conversion formula as polar → Cartesian.'
      };
    }
  });

  add({
    id: 'ap-pol-60y', family: 'trig', title: '60° Height',
    context: 'Same 10-unit string at 60°. Height is 10 sin(60°).',
    xLabel: 'θ degrees', yLabel: '10 sin(θ°)',
    xMin: 0, xMax: 90, form: 'y = 10 sin(θ°)',
    symbolGlossary: [{ sym: 'r', mean: '10' }, { sym: 'θ', mean: 'degrees' }],
    paramDefs: [{ key: 'a', label: 'r', min: 10, max: 10, step: 1 }],
    eval: (p, x) => 10 * Math.sin(x * PI / 180),
    build() {
      return {
        question: 'About how high is the kite at 60°? (≈ 8.66)',
        answer: { type: 'numeric', target: 8.66, tol: 0.25, atX: 60, prompt: 'Height' },
        hints: ['sin 60° = √3/2 ≈ 0.866'],
        workedSolution: 'y = 10 · sin(60°) ≈ 8.66.'
      };
    }
  });

  add({
    id: 'ap-pol-origin', family: 'linear', title: 'Sitting on the Origin',
    context: 'The polar point (0, θ) is the origin for any angle. Distance is zero.',
    xLabel: 'θ', yLabel: 'r = 0',
    xMin: 0, xMax: 5, form: 'y = 0',
    symbolGlossary: [{ sym: 'r', mean: '0' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'How far from the origin is the polar point (0, π/4)?',
        answer: { type: 'numeric', target: 0, tol: 0.05, atX: 1, prompt: 'Distance' },
        hints: ['r = 0'],
        workedSolution: 'r = 0 means the origin. Angle does not matter.'
      };
    }
  });

  add({
    id: 'ap-pol-3-4', family: 'trig', title: 'From (3,4) Back to r',
    context: 'Cartesian (3, 4) again: polar radius is 5, the classic 3-4-5 distance.',
    xLabel: 'x', yLabel: 'r',
    xMin: 0, xMax: 6, form: 'y = √(x²+16)',
    symbolGlossary: [{ sym: 'x', mean: 'Cartesian x' }, { sym: 'y', mean: 'r' }],
    paramDefs: [{ key: 'a', label: 'a', min: 4, max: 4, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 16),
    build() {
      return {
        question: 'r for the point with Cartesian coordinates (3, 4)?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 3, prompt: 'r' },
        hints: ['√(9+16) = 5'],
        workedSolution: 'r = √(9+16) = 5.'
      };
    }
  });

  add({
    id: 'ap-pol-cos0', family: 'trig', title: 'Full Radius to the Right',
    context: 'When θ = 0, cos θ = 1, so x = r. All of the radius points along the positive x-axis.',
    xLabel: 'r', yLabel: 'x = r',
    xMin: 0, xMax: 8, form: 'y = x',
    symbolGlossary: [{ sym: 'x', mean: 'r when θ = 0' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    build() {
      return {
        question: 'If r = 7 and θ = 0, what is Cartesian x?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 7, prompt: 'x' },
        hints: ['x = r cos 0 = r'],
        workedSolution: 'x = 7 · 1 = 7.'
      };
    }
  });

  add({
    id: 'ap-pol-bottom', family: 'trig', title: 'Straight Down',
    context: 'At θ = 3π/2, sin θ = −1. With r = 2 the Cartesian y is −2.',
    xLabel: 'θ', yLabel: '2 sin θ',
    xMin: 0, xMax: 6.3, form: 'y = 2 sin θ',
    symbolGlossary: [{ sym: 'r', mean: '2' }, { sym: 'θ', mean: '3π/2' }],
    paramDefs: [{ key: 'a', label: 'r', min: 2, max: 2, step: 1 }],
    eval: (p, x) => 2 * Math.sin(x),
    build() {
      return {
        question: 'Cartesian y when r = 2 and θ = 3π/2?',
        answer: { type: 'numeric', target: -2, tol: 0.15, atX: 3 * PI / 2, prompt: 'y' },
        hints: ['sin(3π/2) = −1'],
        workedSolution: 'y = 2 · (−1) = −2. The point is (0, −2).'
      };
    }
  });

  add({
    id: 'ap-pol-r8', family: 'linear', title: 'Outer Ring',
    context: 'A circular track has polar equation r = 8. Runners stay 8 units from the center.',
    xLabel: 'θ', yLabel: 'r',
    xMin: 0, xMax: 5, form: 'y = 8',
    symbolGlossary: [{ sym: 'r', mean: '8' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'r', min: 8, max: 8, step: 1 }],
    eval: (p, x) => 8,
    build() {
      return {
        question: 'How far from the center is every point on r = 8?',
        answer: { type: 'numeric', target: 8, tol: 0.2, atX: 1, prompt: 'Distance' },
        hints: ['Constant r'],
        workedSolution: 'r = 8 means distance 8 everywhere on that circle.'
      };
    }
  });

  add({
    id: 'ap-pol-half-r', family: 'linear', title: 'Halfway In',
    context: 'A point at r = 10 moves halfway toward the origin. New r is 5.',
    xLabel: 'Original r', yLabel: '0.5 r',
    xMin: 0, xMax: 12, form: 'y = 0.5x',
    symbolGlossary: [{ sym: 'x', mean: 'old r' }, { sym: 'y', mean: 'new r' }],
    paramDefs: [{ key: 'm', label: 'k', min: 0.5, max: 0.5, step: 0.1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0.5 * x,
    build() {
      return {
        question: 'Original r = 10; after halving distance to origin, what is new r?',
        answer: { type: 'numeric', target: 5, tol: 0.15, atX: 10, prompt: 'New r' },
        hints: ['Half of 10 is 5'],
        workedSolution: 'New r = 0.5 · 10 = 5. Direction θ can stay the same.'
      };
    }
  });

  add({
    id: 'ap-pol-5-12', family: 'trig', title: '5-12-13 From Axes',
    context: 'Cartesian (5, 12) has polar radius 13.',
    xLabel: 'x', yLabel: '√(x²+144)',
    xMin: 0, xMax: 8, form: 'y = √(x²+144)',
    symbolGlossary: [{ sym: 'x', mean: 'Cartesian x' }, { sym: 'y', mean: 'r' }],
    paramDefs: [{ key: 'a', label: 'a', min: 12, max: 12, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 144),
    build() {
      return {
        question: 'Polar r for Cartesian (5, 12)?',
        answer: { type: 'numeric', target: 13, tol: 0.3, atX: 5, prompt: 'r' },
        hints: ['√(25+144) = 13'],
        workedSolution: 'r = √(25+144) = 13.'
      };
    }
  });

  add({
    id: 'ap-pol-cos60', family: 'trig', title: '60° With r = 2',
    context: 'x = 2 cos(60°). Cosine of 60° is 1/2, so x = 1.',
    xLabel: 'θ degrees', yLabel: '2 cos(θ°)',
    xMin: 0, xMax: 90, form: 'y = 2 cos(θ°)',
    symbolGlossary: [{ sym: 'r', mean: '2' }],
    paramDefs: [{ key: 'a', label: 'r', min: 2, max: 2, step: 1 }],
    eval: (p, x) => 2 * Math.cos(x * PI / 180),
    build() {
      return {
        question: 'Cartesian x for r = 2, θ = 60°?',
        answer: { type: 'numeric', target: 1, tol: 0.1, atX: 60, prompt: 'x' },
        hints: ['cos 60° = 0.5'],
        workedSolution: 'x = 2 · 0.5 = 1.'
      };
    }
  });

  add({
    id: 'ap-pol-sin30', family: 'trig', title: '30° Height With r = 2',
    context: 'y = 2 sin(30°) = 2 · 0.5 = 1.',
    xLabel: 'θ degrees', yLabel: '2 sin(θ°)',
    xMin: 0, xMax: 90, form: 'y = 2 sin(θ°)',
    symbolGlossary: [{ sym: 'r', mean: '2' }],
    paramDefs: [{ key: 'a', label: 'r', min: 2, max: 2, step: 1 }],
    eval: (p, x) => 2 * Math.sin(x * PI / 180),
    build() {
      return {
        question: 'Cartesian y for r = 2, θ = 30°?',
        answer: { type: 'numeric', target: 1, tol: 0.1, atX: 30, prompt: 'y' },
        hints: ['sin 30° = 0.5'],
        workedSolution: 'y = 2 · 0.5 = 1.'
      };
    }
  });

  add({
    id: 'ap-pol-quad2', family: 'trig', title: 'Second Quadrant x',
    context: 'At θ = 2π/3 with r = 2, cos is negative (−1/2), so x = −1.',
    xLabel: 'θ', yLabel: '2 cos θ',
    xMin: 0, xMax: 3.5, form: 'y = 2 cos θ',
    symbolGlossary: [{ sym: 'r', mean: '2' }, { sym: 'θ', mean: '2π/3' }],
    paramDefs: [{ key: 'a', label: 'r', min: 2, max: 2, step: 1 }],
    eval: (p, x) => 2 * Math.cos(x),
    build() {
      return {
        question: 'Cartesian x for r = 2, θ = 2π/3?',
        answer: { type: 'numeric', target: -1, tol: 0.12, atX: 2 * PI / 3, prompt: 'x' },
        hints: ['cos(2π/3) = −1/2'],
        workedSolution: 'x = 2 · (−1/2) = −1. The point is in quadrant II.'
      };
    }
  });

  add({
    id: 'ap-pol-same-r', family: 'linear', title: 'Same Ring, Different Angle',
    context: 'Points (4, 0) and (4, π/2) share the same r = 4 — same distance, different direction.',
    xLabel: 'Reference', yLabel: 'r',
    xMin: 0, xMax: 5, form: 'y = 4',
    symbolGlossary: [{ sym: 'r', mean: '4 for both points' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'r', min: 4, max: 4, step: 1 }],
    eval: (p, x) => 4,
    build() {
      return {
        question: 'What common distance from the origin do (4, 0) and (4, π/2) share?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 1, prompt: 'r' },
        hints: ['Both have r = 4'],
        workedSolution: 'Both list r = 4, so both lie on the circle of radius 4.'
      };
    }
  });

  add({
    id: 'ap-pol-9-12', family: 'trig', title: 'Scaled 3-4-5',
    context: 'Cartesian (9, 12) is three times (3, 4), so r = 15.',
    xLabel: 'x', yLabel: '√(x²+144)',
    xMin: 0, xMax: 12, form: 'y = √(x²+144)',
    symbolGlossary: [{ sym: 'x', mean: 'Cartesian x' }, { sym: 'y', mean: 'r' }],
    paramDefs: [{ key: 'a', label: 'a', min: 12, max: 12, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 144),
    build() {
      return {
        question: 'Polar r for Cartesian (9, 12)?',
        answer: { type: 'numeric', target: 15, tol: 0.4, atX: 9, prompt: 'r' },
        hints: ['√(81+144) = 15'],
        workedSolution: 'r = √(81+144) = 15 (or 3 × 5).'
      };
    }
  });

  add({
    id: 'ap-pol-vert', family: 'trig', title: 'Only Vertical',
    context: 'At θ = π/2, cos θ = 0, so Cartesian x is 0 no matter how large r is — pure vertical placement.',
    xLabel: 'r', yLabel: 'x = 0',
    xMin: 0, xMax: 8, form: 'y = 0',
    symbolGlossary: [{ sym: 'y', mean: 'Cartesian x at θ = π/2' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'Cartesian x when θ = π/2 (any r)?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 5, prompt: 'x' },
        hints: ['cos(π/2) = 0'],
        workedSolution: 'x = r cos(π/2) = r · 0 = 0. The point lies on the y-axis.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
