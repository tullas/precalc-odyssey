/** Honors — Conic Sections (25 unique) */
(function () {
  const T = [];
  const L = 'honors', U = 'conics';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  // Parabolas
  add({
    id: 'hc-par-1', family: 'quadratic', title: 'Satellite Dish Cross-Section',
    context: 'A dish curve is modeled by y = x²/16 (opens up). The bottom is the vertex.',
    xLabel: 'x across dish', yLabel: 'y depth',
    xMin: -8, xMax: 8, form: 'y = x²/16',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal position' }, { sym: 'y', mean: 'height of curve' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1/16, max: 1/16, step: 0.01 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 1 }],
    eval: (p, x) => (x * x) / 16,
    build() {
      return {
        question: 'What is the height y at x = 4?',
        answer: { type: 'numeric', target: 1, tol: 0.1, atX: 4, prompt: 'y at x = 4' },
        hints: ['16/16 = 1'],
        workedSolution: 'y = 4²/16 = 16/16 = 1. On a parabola y = x²/(4p), here 4p = 16 so p = 4 (focus geometry later).'
      };
    }
  });

  add({
    id: 'hc-par-2', family: 'quadratic', title: 'Vertex of a Bridge Cable',
    context: 'A cable hangs as y = 0.05(x − 10)² + 2. The lowest point is the vertex.',
    xLabel: 'x along span', yLabel: 'height y',
    xMin: 0, xMax: 20, form: 'y = 0.05(x−10)² + 2',
    symbolGlossary: [{ sym: 'h', mean: 'x of vertex' }, { sym: 'k', mean: 'minimum height' }],
    paramDefs: [{ key: 'a', label: 'a', min: 0.05, max: 0.05, step: 0.01 }, { key: 'h', label: 'h', min: 10, max: 10, step: 1 }, { key: 'k', label: 'k', min: 2, max: 2, step: 0.5 }],
    eval: (p, x) => 0.05 * (x - 10) * (x - 10) + 2,
    build() {
      return {
        question: 'What is the lowest height of the cable?',
        answer: { type: 'numeric', target: 2, tol: 0.15, atX: 10, prompt: 'Minimum y' },
        hints: ['Vertex at x = 10, y = 2'],
        workedSolution: 'Vertex form y = a(x−h)² + k has minimum k when a > 0. Here k = 2 at x = 10.'
      };
    }
  });

  add({
    id: 'hc-par-3', family: 'quadratic', title: 'Fountain Arc',
    context: 'Water follows y = −0.1(x − 5)² + 4 for a while (upper arc).',
    xLabel: 'x', yLabel: 'height y',
    xMin: 0, xMax: 10, form: 'y = −0.1(x−5)² + 4',
    symbolGlossary: [{ sym: 'k', mean: 'peak height' }],
    paramDefs: [{ key: 'a', label: 'a', min: -0.1, max: -0.1, step: 0.05 }, { key: 'h', label: 'h', min: 5, max: 5, step: 0.5 }, { key: 'k', label: 'k', min: 4, max: 4, step: 0.5 }],
    eval: (p, x) => -0.1 * (x - 5) * (x - 5) + 4, motion: 'ball',
    build() {
      return {
        question: 'What is the peak height of the arc?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 5, prompt: 'Peak y' },
        hints: ['Maximum is k = 4'],
        workedSolution: 'Opens downward; vertex (5, 4) is the maximum height 4.'
      };
    }
  });

  // Circles (upper semicircle as function)
  add({
    id: 'hc-circ-1', family: 'trig', title: 'Top of a Circle',
    context: 'The upper half of x² + y² = 25 is y = √(25 − x²), a semicircle of radius 5.',
    xLabel: 'x', yLabel: 'y (upper half)',
    xMin: -5, xMax: 5, form: 'y = √(25 − x²)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'upper semicircle height' }],
    paramDefs: [{ key: 'a', label: 'r²', min: 25, max: 25, step: 1 }],
    eval: (p, x) => {
      const v = 25 - x * x;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'At x = 0, what is the top height of this circle of radius 5?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 0, prompt: 'y at x = 0' },
        hints: ['√25 = 5'],
        workedSolution: 'At x = 0, y = √25 = 5, the top of the circle centered at the origin with radius 5.'
      };
    }
  });

  add({
    id: 'hc-circ-2', family: 'trig', title: 'Circle Height Off-Center',
    context: 'Same circle x² + y² = 25. At x = 3, the upper height is √(25−9) = 4.',
    xLabel: 'x', yLabel: 'y upper',
    xMin: -5, xMax: 5, form: 'y = √(25 − x²)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'upper height' }],
    paramDefs: [{ key: 'a', label: 'r²', min: 25, max: 25, step: 1 }],
    eval: (p, x) => {
      const v = 25 - x * x;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'What is the upper y when x = 3?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 3, prompt: 'y at x = 3' },
        hints: ['25 − 9 = 16', '√16 = 4'],
        workedSolution: 'y = √(25 − 9) = √16 = 4. This is a Pythagorean triple 3-4-5 on the circle of radius 5.'
      };
    }
  });

  add({
    id: 'hc-circ-3', family: 'trig', title: 'Smaller Circle',
    context: 'Upper half of x² + y² = 16 (radius 4).',
    xLabel: 'x', yLabel: 'y',
    xMin: -4, xMax: 4, form: 'y = √(16 − x²)',
    symbolGlossary: [{ sym: 'r', mean: 'radius 4' }],
    paramDefs: [{ key: 'a', label: 'r²', min: 16, max: 16, step: 1 }],
    eval: (p, x) => {
      const v = 16 - x * x;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'Top of the circle at x = 0?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 0, prompt: 'y at x = 0' },
        hints: ['√16 = 4'],
        workedSolution: 'Radius is 4, so the highest point is (0, 4).'
      };
    }
  });

  // Ellipses (upper half)
  add({
    id: 'hc-ell-1', family: 'trig', title: 'Oval Track (Upper Half)',
    context: 'An ellipse x²/25 + y²/9 = 1 has upper half y = 3√(1 − x²/25).',
    xLabel: 'x', yLabel: 'y upper',
    xMin: -5, xMax: 5, form: 'y = 3√(1 − x²/25)',
    symbolGlossary: [{ sym: 'a', mean: 'horizontal semi-axis 5' }, { sym: 'b', mean: 'vertical semi-axis 3' }],
    paramDefs: [{ key: 'a', label: 'a', min: 5, max: 5, step: 1 }],
    eval: (p, x) => {
      const u = 1 - (x * x) / 25;
      return u >= 0 ? 3 * Math.sqrt(u) : NaN;
    },
    build() {
      return {
        question: 'At the top center (x = 0), how high is the ellipse?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 0, prompt: 'y at x = 0' },
        hints: ['Vertical semi-axis is 3'],
        workedSolution: 'When x = 0, y = ±b = ±3. Upper half gives y = 3.'
      };
    }
  });

  add({
    id: 'hc-ell-2', family: 'trig', title: 'Ellipse at an x-Slice',
    context: 'Same ellipse. At x = 0 the height is 3; at other x the height shrinks.',
    xLabel: 'x', yLabel: 'y upper',
    xMin: -5, xMax: 5, form: 'y = 3√(1 − x²/25)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'upper height' }],
    paramDefs: [{ key: 'a', label: 'a', min: 5, max: 5, step: 1 }],
    eval: (p, x) => {
      const u = 1 - (x * x) / 25;
      return u >= 0 ? 3 * Math.sqrt(u) : NaN;
    },
    build() {
      return {
        question: 'What is upper y when x = 5 (the right tip)?',
        answer: { type: 'numeric', target: 0, tol: 0.15, atX: 5, prompt: 'y at x = 5' },
        hints: ['At the end of the major axis, y = 0'],
        workedSolution: 'At x = ±a = ±5, the ellipse meets the x-axis, so y = 0.'
      };
    }
  });

  add({
    id: 'hc-ell-3', family: 'trig', title: 'Taller Ellipse',
    context: 'x²/9 + y²/16 = 1 is taller than it is wide. Upper half: y = 4√(1 − x²/9).',
    xLabel: 'x', yLabel: 'y',
    xMin: -3, xMax: 3, form: 'y = 4√(1 − x²/9)',
    symbolGlossary: [{ sym: 'b', mean: 'vertical semi-axis 4' }],
    paramDefs: [{ key: 'a', label: 'a', min: 3, max: 3, step: 1 }],
    eval: (p, x) => {
      const u = 1 - (x * x) / 9;
      return u >= 0 ? 4 * Math.sqrt(u) : NaN;
    },
    build() {
      return {
        question: 'Maximum height of this ellipse?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 0, prompt: 'Max y' },
        hints: ['b = 4'],
        workedSolution: 'Vertical semi-axis b = 4, so the top is at y = 4 when x = 0.'
      };
    }
  });

  // Hyperbola branch
  add({
    id: 'hc-hyp-1', family: 'rational', title: 'Hyperbola Branch',
    context: 'One standard form gives y = √(x² − 1) for |x| ≥ 1 (right/left opening ideas via this upper branch of x² − y² = 1).',
    xLabel: 'x', yLabel: 'y',
    xMin: 1, xMax: 5, form: 'y = √(x² − 1)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal (≥ 1 here)' }, { sym: 'y', mean: 'upper branch height' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => {
      const v = x * x - 1;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'At x = 1, what is y on this branch?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 1, prompt: 'y at x = 1' },
        hints: ['√(1−1) = 0'],
        workedSolution: 'The vertex of this right branch sits at (1, 0). √(1² − 1) = 0.'
      };
    }
  });

  add({
    id: 'hc-hyp-2', family: 'rational', title: 'Farther on the Hyperbola',
    context: 'Same branch y = √(x² − 1). As |x| grows, y grows.',
    xLabel: 'x', yLabel: 'y',
    xMin: 1, xMax: 5, form: 'y = √(x² − 1)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'height' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => {
      const v = x * x - 1;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'What is y when x = √2 ≈ 1.41?',
        answer: { type: 'numeric', target: 1, tol: 0.12, atX: Math.SQRT2, prompt: 'y at x = √2' },
        hints: ['√(2 − 1) = 1'],
        workedSolution: 'y = √(2 − 1) = 1. A convenient point on x² − y² = 1.'
      };
    }
  });

  add({
    id: 'hc-par-4', family: 'quadratic', title: 'Focus Idea via p',
    context: 'For y = x²/(4p) with p = 2, the equation is y = x²/8.',
    xLabel: 'x', yLabel: 'y',
    xMin: -6, xMax: 6, form: 'y = x²/8',
    symbolGlossary: [{ sym: 'p', mean: 'focal length parameter' }],
    paramDefs: [{ key: 'a', label: '1/(4p)', min: 0.125, max: 0.125, step: 0.01 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 1 }],
    eval: (p, x) => (x * x) / 8,
    build() {
      return {
        question: 'y when x = 4?',
        answer: { type: 'numeric', target: 2, tol: 0.15, atX: 4, prompt: 'y at x = 4' },
        hints: ['16/8 = 2'],
        workedSolution: 'y = 16/8 = 2. With 4p = 8, p = 2 (distance from vertex to focus in the standard form).'
      };
    }
  });

  add({
    id: 'hc-par-5', family: 'quadratic', title: 'Shifted Parabola',
    context: 'y = (x − 3)² + 1 is a standard parabola moved right 3 and up 1.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 8, form: 'y = (x−3)² + 1',
    symbolGlossary: [{ sym: 'h', mean: 'right shift' }, { sym: 'k', mean: 'up shift' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 3, max: 3, step: 0.5 }, { key: 'k', label: 'k', min: 1, max: 1, step: 0.5 }],
    eval: (p, x) => (x - 3) * (x - 3) + 1,
    build() {
      return {
        question: 'Coordinates of the vertex: what is the y-value?',
        answer: { type: 'numeric', target: 1, tol: 0.1, atX: 3, prompt: 'Vertex y' },
        hints: ['Vertex at (3, 1)'],
        workedSolution: 'Vertex form shows (h, k) = (3, 1). The y-coordinate of the vertex is 1.'
      };
    }
  });

  add({
    id: 'hc-circ-4', family: 'trig', title: 'Radius from Equation',
    context: 'x² + y² = 36 means radius 6. Upper half y = √(36 − x²).',
    xLabel: 'x', yLabel: 'y',
    xMin: -6, xMax: 6, form: 'y = √(36 − x²)',
    symbolGlossary: [{ sym: 'r', mean: 'radius 6' }],
    paramDefs: [{ key: 'a', label: 'r²', min: 36, max: 36, step: 1 }],
    eval: (p, x) => {
      const v = 36 - x * x;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'What is the radius of this circle?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 0, prompt: 'Radius (top height)' },
        hints: ['√36 = 6'],
        workedSolution: 'x² + y² = r² with r² = 36 ⇒ r = 6. The top point is (0, 6).'
      };
    }
  });

  add({
    id: 'hc-ell-4', family: 'trig', title: 'Wide Ellipse',
    context: 'x²/36 + y²/4 = 1 extends to x = ±6 and y = ±2.',
    xLabel: 'x', yLabel: 'y upper',
    xMin: -6, xMax: 6, form: 'y = 2√(1 − x²/36)',
    symbolGlossary: [{ sym: 'a', mean: '6 horizontal' }, { sym: 'b', mean: '2 vertical' }],
    paramDefs: [{ key: 'a', label: 'a', min: 6, max: 6, step: 1 }],
    eval: (p, x) => {
      const u = 1 - (x * x) / 36;
      return u >= 0 ? 2 * Math.sqrt(u) : NaN;
    },
    build() {
      return {
        question: 'Maximum height of the upper half?',
        answer: { type: 'numeric', target: 2, tol: 0.15, atX: 0, prompt: 'Max y' },
        hints: ['b = 2'],
        workedSolution: 'Semi-minor axis b = 2, so max upper height is 2.'
      };
    }
  });

  add({
    id: 'hc-par-6', family: 'quadratic', title: 'Sideways Idea via Function',
    context: 'We still graph y as a function of x: a steep parabola y = 2x².',
    xLabel: 'x', yLabel: 'y',
    xMin: -2, xMax: 2, form: 'y = 2x²',
    symbolGlossary: [{ sym: 'a', mean: 'steepness' }],
    paramDefs: [{ key: 'a', label: 'a', min: 2, max: 2, step: 0.1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x * x,
    build() {
      return {
        question: 'y at x = 1?',
        answer: { type: 'numeric', target: 2, tol: 0.1, atX: 1, prompt: 'y at x = 1' },
        hints: ['2·1 = 2'],
        workedSolution: 'y = 2(1)² = 2. Larger |a| makes a narrower/steeper parabola.'
      };
    }
  });

  add({
    id: 'hc-par-7', family: 'quadratic', title: 'Projectile Shape',
    context: 'y = −x² + 6x models a simple ground-to-ground arc (factor absorbed).',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 6, form: 'y = −x² + 6x',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'height' }],
    paramDefs: [{ key: 'a', label: 'a', min: -1, max: -1, step: 0.1 }, { key: 'h', label: 'h', min: 3, max: 3, step: 0.5 }, { key: 'k', label: 'k', min: 9, max: 9, step: 0.5 }],
    eval: (p, x) => -x * x + 6 * x, motion: 'ball',
    build() {
      return {
        question: 'Peak height? (at x = 3)',
        answer: { type: 'numeric', target: 9, tol: 0.3, atX: 3, prompt: 'Peak y' },
        hints: ['−9 + 18 = 9'],
        workedSolution: 'Vertex of y = −x² + 6x is at x = −b/(2a) = 6/2 = 3, y = 9.'
      };
    }
  });

  add({
    id: 'hc-circ-5', family: 'trig', title: 'Point on a Circle',
    context: 'On x² + y² = 100, if x = 6, upper y = 8 (6-8-10 triangle).',
    xLabel: 'x', yLabel: 'y',
    xMin: -10, xMax: 10, form: 'y = √(100 − x²)',
    symbolGlossary: [{ sym: 'r', mean: '10' }],
    paramDefs: [{ key: 'a', label: 'r²', min: 100, max: 100, step: 1 }],
    eval: (p, x) => {
      const v = 100 - x * x;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'Upper y when x = 6?',
        answer: { type: 'numeric', target: 8, tol: 0.25, atX: 6, prompt: 'y at x = 6' },
        hints: ['100 − 36 = 64', '√64 = 8'],
        workedSolution: 'y = √(100 − 36) = 8. Another Pythagorean triple on the circle of radius 10.'
      };
    }
  });

  add({
    id: 'hc-hyp-3', family: 'rational', title: 'Rectangular Hyperbola',
    context: 'y = 12/x is a rectangular hyperbola (asymptotes on the axes).',
    xLabel: 'x', yLabel: 'y',
    xMin: 1, xMax: 12, form: 'y = 12/x',
    symbolGlossary: [{ sym: 'x', mean: 'input ≠ 0' }, { sym: 'y', mean: '12/x' }],
    paramDefs: [{ key: 'a', label: 'a', min: 12, max: 12, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 12 / x,
    build() {
      return {
        question: 'y when x = 3?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 3, prompt: 'y at x = 3' },
        hints: ['12/3 = 4'],
        workedSolution: 'y = 12/3 = 4. Product x·y = 12 stays constant on this hyperbola.'
      };
    }
  });

  add({
    id: 'hc-par-8', family: 'quadratic', title: 'Vertex on Axis',
    context: 'y = x² − 4x + 7 completes to (x−2)² + 3.',
    xLabel: 'x', yLabel: 'y',
    xMin: 0, xMax: 6, form: 'y = x² − 4x + 7',
    symbolGlossary: [{ sym: 'h', mean: '2' }, { sym: 'k', mean: '3' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 2, max: 2, step: 0.5 }, { key: 'k', label: 'k', min: 3, max: 3, step: 0.5 }],
    eval: (p, x) => x * x - 4 * x + 7,
    build() {
      return {
        question: 'Minimum value of y?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 2, prompt: 'Min y' },
        hints: ['Vertex at x = 2, y = 3'],
        workedSolution: 'Complete the square: y = (x−2)² + 3. Minimum is 3.'
      };
    }
  });

  add({
    id: 'hc-ell-5', family: 'trig', title: 'Ellipse Endpoint',
    context: 'x²/16 + y²/9 = 1 ends at x = ±4 on the x-axis.',
    xLabel: 'x', yLabel: 'y upper',
    xMin: -4, xMax: 4, form: 'y = 3√(1 − x²/16)',
    symbolGlossary: [{ sym: 'a', mean: '4' }, { sym: 'b', mean: '3' }],
    paramDefs: [{ key: 'a', label: 'a', min: 4, max: 4, step: 1 }],
    eval: (p, x) => {
      const u = 1 - (x * x) / 16;
      return u >= 0 ? 3 * Math.sqrt(u) : NaN;
    },
    build() {
      return {
        question: 'y at the right tip x = 4?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 4, prompt: 'y at x = 4' },
        hints: ['Tips have y = 0'],
        workedSolution: 'Horizontal vertices are (±4, 0). Upper y is 0 at x = 4.'
      };
    }
  });

  add({
    id: 'hc-par-9', family: 'quadratic', title: 'Wide Dish',
    context: 'y = x²/36 is a wide upward parabola.',
    xLabel: 'x', yLabel: 'y',
    xMin: -12, xMax: 12, form: 'y = x²/36',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'height' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1/36, max: 1/36, step: 0.001 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }, { key: 'k', label: 'k', min: 0, max: 0, step: 1 }],
    eval: (p, x) => (x * x) / 36,
    build() {
      return {
        question: 'y at x = 6?',
        answer: { type: 'numeric', target: 1, tol: 0.1, atX: 6, prompt: 'y at x = 6' },
        hints: ['36/36 = 1'],
        workedSolution: 'y = 36/36 = 1.'
      };
    }
  });

  add({
    id: 'hc-circ-6', family: 'trig', title: 'Unit Circle Top',
    context: 'The unit circle x² + y² = 1 has upper half y = √(1 − x²).',
    xLabel: 'x', yLabel: 'y',
    xMin: -1, xMax: 1, form: 'y = √(1 − x²)',
    symbolGlossary: [{ sym: 'r', mean: '1' }],
    paramDefs: [{ key: 'a', label: 'r²', min: 1, max: 1, step: 1 }],
    eval: (p, x) => {
      const v = 1 - x * x;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'Height at x = 0 on the unit circle?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: 0, prompt: 'y at x = 0' },
        hints: ['√1 = 1'],
        workedSolution: 'Top of the unit circle is (0, 1).'
      };
    }
  });

  add({
    id: 'hc-hyp-4', family: 'rational', title: 'Inverse Variation Curve',
    context: 'y = 6/x is another rectangular hyperbola used in modeling inverse variation.',
    xLabel: 'x', yLabel: 'y',
    xMin: 1, xMax: 6, form: 'y = 6/x',
    symbolGlossary: [{ sym: 'x', mean: 'input' }, { sym: 'y', mean: '6/x' }],
    paramDefs: [{ key: 'a', label: 'a', min: 6, max: 6, step: 1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 6 / x,
    build() {
      return {
        question: 'y when x = 2?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 2, prompt: 'y at x = 2' },
        hints: ['6/2 = 3'],
        workedSolution: 'y = 6/2 = 3. Points on xy = 6.'
      };
    }
  });

  add({
    id: 'hc-par-10', family: 'quadratic', title: 'Downward Spotlight',
    context: 'y = −(x − 2)² + 5 opens down with vertex (2, 5).',
    xLabel: 'x', yLabel: 'y',
    xMin: -1, xMax: 5, form: 'y = −(x−2)² + 5',
    symbolGlossary: [{ sym: 'k', mean: 'maximum 5' }],
    paramDefs: [{ key: 'a', label: 'a', min: -1, max: -1, step: 0.1 }, { key: 'h', label: 'h', min: 2, max: 2, step: 0.5 }, { key: 'k', label: 'k', min: 5, max: 5, step: 0.5 }],
    eval: (p, x) => -(x - 2) * (x - 2) + 5,
    build() {
      return {
        question: 'Maximum y?',
        answer: { type: 'numeric', target: 5, tol: 0.15, atX: 2, prompt: 'Max y' },
        hints: ['Vertex y = 5'],
        workedSolution: 'Vertex (2, 5) is the highest point because a < 0.'
      };
    }
  });

  add({
    id: 'hc-ell-6', family: 'trig', title: 'Reading b from Graph',
    context: 'For x²/25 + y²/16 = 1, the top is at y = 4.',
    xLabel: 'x', yLabel: 'y',
    xMin: -5, xMax: 5, form: 'y = 4√(1 − x²/25)',
    symbolGlossary: [{ sym: 'b', mean: '4' }],
    paramDefs: [{ key: 'a', label: 'a', min: 5, max: 5, step: 1 }],
    eval: (p, x) => {
      const u = 1 - (x * x) / 25;
      return u >= 0 ? 4 * Math.sqrt(u) : NaN;
    },
    build() {
      return {
        question: 'Semi-axis length upward from center?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 0, prompt: 'b (max y)' },
        hints: ['b = 4 in the standard form'],
        workedSolution: 'Standard form x²/a² + y²/b² = 1 with b² = 16 ⇒ b = 4.'
      };
    }
  });

  add({
    id: 'hc-par-11', family: 'quadratic', title: 'Intercept of a Parabola',
    context: 'y = x² − 9 crosses the x-axis at ±3 and the y-axis at −9.',
    xLabel: 'x', yLabel: 'y',
    xMin: -4, xMax: 4, form: 'y = x² − 9',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'x² − 9' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }, { key: 'h', label: 'h', min: 0, max: 0, step: 1 }, { key: 'k', label: 'k', min: -9, max: -9, step: 1 }],
    eval: (p, x) => x * x - 9,
    build() {
      return {
        question: 'What is the y-intercept (x = 0)?',
        answer: { type: 'numeric', target: -9, tol: 0.2, atX: 0, prompt: 'y at x = 0' },
        hints: ['0 − 9 = −9'],
        workedSolution: 'Plug x = 0: y = −9. The parabola opens up from this intercept.'
      };
    }
  });

  add({
    id: 'hc-circ-7', family: 'trig', title: 'Half Chord Height',
    context: 'On x² + y² = 50, at x = 5, y = 5 on the upper half.',
    xLabel: 'x', yLabel: 'y',
    xMin: -7.1, xMax: 7.1, form: 'y = √(50 − x²)',
    symbolGlossary: [{ sym: 'r', mean: '√50' }],
    paramDefs: [{ key: 'a', label: 'r²', min: 50, max: 50, step: 1 }],
    eval: (p, x) => {
      const v = 50 - x * x;
      return v >= 0 ? Math.sqrt(v) : NaN;
    },
    build() {
      return {
        question: 'Upper y when x = 5?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 5, prompt: 'y at x = 5' },
        hints: ['50 − 25 = 25', '√25 = 5'],
        workedSolution: 'y = √(50 − 25) = 5. A 5-5-√50 isosceles right triangle radius.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
