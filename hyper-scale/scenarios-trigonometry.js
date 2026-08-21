/** Standard — Trigonometry (25) — plain language + worked solutions */
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

  add({
    id: 'tr-sin30', family: 'trig', title: 'Half the Height on the Circle',
    context: 'Picture a unit circle (radius 1). At 30° from the positive x-axis, the point is only halfway up to the top. That “up” distance is called sine.',
    xLabel: 'Angle in degrees (x)', yLabel: 'Height = sin(x°)',
    xMin: 0, xMax: 90, form: 'y = sin(x·π/180)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in degrees' },
      { sym: 'y', mean: 'vertical height on the unit circle (sine)' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'A ladder leans so it makes a 30° angle with the ground on a unit-scale drawing. How high is the top of the ladder on that scale? (That height is sin(30°).)',
        answer: { type: 'numeric', target: 0.5, tol: 0.05, atX: 30, prompt: 'Height (sin of 30°)' },
        hints: [
          'At 30°, sine is a standard value from special triangles',
          'In a 30-60-90 triangle, the side opposite 30° is half the hypotenuse',
          'On the unit circle the hypotenuse is 1, so sin(30°) = 1/2 = 0.5'
        ],
        workedSolution: 'On the unit circle the radius is 1. A 30° angle matches a 30-60-90 triangle: the side opposite 30° is half the hypotenuse. So sin(30°) = 1/2 = 0.5. On the graph, read y when x = 30.'
      };
    }
  });

  add({
    id: 'tr-cos60', family: 'trig', title: 'How Far Across at 60°',
    context: 'Cosine is the left-right (horizontal) position on the unit circle. At 60°, that horizontal distance is only half the radius.',
    xLabel: 'Angle in degrees (x)', yLabel: 'Horizontal = cos(x°)',
    xMin: 0, xMax: 90, form: 'y = cos(x·π/180)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in degrees' },
      { sym: 'y', mean: 'horizontal position on the unit circle (cosine)' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'On a unit circle, how far to the right of the center is the point at 60°? (That is cos(60°).)',
        answer: { type: 'numeric', target: 0.5, tol: 0.05, atX: 60, prompt: 'Horizontal distance (cos 60°)' },
        hints: [
          '60° pairs with 30° in a 30-60-90 triangle',
          'The side adjacent to 60° is half the hypotenuse',
          'cos(60°) = 1/2 = 0.5'
        ],
        workedSolution: 'At 60° on the unit circle, cosine is the adjacent side over hypotenuse. In a 30-60-90 triangle that adjacent side is half the hypotenuse. With radius 1, cos(60°) = 0.5. Read the graph at x = 60.'
      };
    }
  });

  add({
    id: 'tr-sin90', family: 'trig', title: 'Straight Up',
    context: 'When the angle is 90°, you are at the top of the unit circle. The height is as large as the radius can be.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 180, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'sine = height on unit circle' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'At the top of a unit circle (90° from the starting point), what is the height? That value is sin(90°).',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 90, prompt: 'Height at 90°' },
        hints: [
          'The highest point on the unit circle has coordinates (0, 1)',
          'Sine is the y-coordinate, so sin(90°) = 1'
        ],
        workedSolution: 'A full quarter turn is 90°. The point is at the top of the circle: (0, 1). Sine is the y-coordinate, so sin(90°) = 1. On the graph this is the peak near x = 90.'
      };
    }
  });

  add({
    id: 'tr-sin-pi2', family: 'trig', title: 'Same Angle, Radians',
    context: 'Radians measure the same turn as degrees, but use the arc length on a unit circle. π/2 radians is the same as 90° — still the top of the circle.',
    xLabel: 'Angle in radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x)',
    symbolGlossary: [
      { sym: 'x', mean: 'angle in radians (π/2 ≈ 1.57 is a right angle)' },
      { sym: 'y', mean: 'sine' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'Using radians, what is the sine at a right angle (π/2 ≈ 1.57 on the axis)? You should get the same height as at 90°.',
        answer: { type: 'numeric', target: 1, tol: 0.06, atX: PI / 2, prompt: 'sin(π/2)' },
        hints: [
          'π/2 radians = 90°',
          'At the top of the unit circle, sine is 1'
        ],
        workedSolution: 'π/2 radians is exactly 90°. The unit-circle point is still (0, 1). Therefore sin(π/2) = 1. On the graph, look near x = 1.57.'
      };
    }
  });

  add({
    id: 'tr-cos0', family: 'trig', title: 'Starting on the Positive Axis',
    context: 'At angle 0 you have not turned yet. You sit on the positive x-axis of the unit circle, one unit to the right of the center.',
    xLabel: 'Radians (x)', yLabel: 'cos(x)',
    xMin: 0, xMax: 6.3, form: 'y = cos(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'cosine = horizontal position' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'Before any turn (angle 0), how far to the right of center are you on the unit circle? That is cos(0).',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'cos(0)' },
        hints: [
          'Starting point on the unit circle is (1, 0)',
          'Cosine is the x-coordinate → cos(0) = 1'
        ],
        workedSolution: 'Angle 0 means the ray along the positive x-axis. The point is (1, 0). Cosine is the x-coordinate, so cos(0) = 1. The graph starts at height 1 when x = 0.'
      };
    }
  });

  add({
    id: 'tr-amp', family: 'trig', title: 'A Louder Wave',
    context: 'Multiplying sine by 3 stretches the wave up and down. Instead of swinging between −1 and 1, it swings between −3 and 3. That stretch factor is the amplitude.',
    xLabel: 'Radians (x)', yLabel: 'y = 3 sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = 3·sin(x)',
    symbolGlossary: [
      { sym: 'a', mean: 'amplitude — how tall the wave is' },
      { sym: 'x', mean: 'radians' }
    ],
    paramDefs: [{ key: 'a', label: 'a — amplitude', min: 3, max: 3, step: 0.5 }],
    eval: (p, x) => 3 * Math.sin(x),
    build() {
      return {
        question: 'A sound wave is modeled by y = 3 sin(x). What is the highest value the wave reaches? (Look near x = π/2 ≈ 1.57.)',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: PI / 2, prompt: 'Highest y' },
        hints: [
          'Ordinary sin(x) peaks at 1',
          'Multiplying by 3 makes the peak 3',
          '3 · sin(π/2) = 3 · 1 = 3'
        ],
        workedSolution: 'The amplitude is the coefficient in front of sine. Here it is 3, so the wave’s maximum is 3 and minimum is −3. At x = π/2, sin is 1, so y = 3·1 = 3.'
      };
    }
  });

  add({
    id: 'tr-period', family: 'trig', title: 'Back Where You Started',
    context: 'A sine wave repeats. After one full trip around the unit circle (2π radians), the height is the same as at the start.',
    xLabel: 'Radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 7, form: 'y = sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'After one full cycle (x = 2π ≈ 6.28), what height does sine show? It should match the height at the start.',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: 2 * PI, prompt: 'sin(2π)' },
        hints: [
          'One full turn around the circle brings you back to (1, 0)',
          'Height (sine) is 0 again',
          'sin(2π) = sin(0) = 0'
        ],
        workedSolution: 'The period of sin(x) is 2π. Completing 2π radians is one full revolution back to the positive x-axis. The y-coordinate is 0, so sin(2π) = 0. The graph returns to the axis at x ≈ 6.28.'
      };
    }
  });

  add({
    id: 'tr-phase', family: 'trig', title: 'A Wave That Starts Late',
    context: 'y = sin(x − π/2) is the usual sine wave slid to the right by π/2. When x is π/2, the expression inside sine is zero — as if sine were just starting.',
    xLabel: 'Radians (x)', yLabel: 'sin(x − π/2)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x − π/2)',
    symbolGlossary: [
      { sym: 'x', mean: 'radians' },
      { sym: 'h', mean: 'phase shift: the wave is delayed by π/2' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x - PI / 2),
    build() {
      return {
        question: 'At the moment x = π/2 (≈ 1.57), what value does this shifted wave give? Think of what sin(0) is.',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: PI / 2, prompt: 'y at x = π/2' },
        hints: [
          'Plug in: sin(π/2 − π/2) = sin(0)',
          'sin(0) = 0'
        ],
        workedSolution: 'Substitute x = π/2 into sin(x − π/2): sin(π/2 − π/2) = sin(0) = 0. Shifting right by π/2 means the wave is still at its “starting height” when x reaches π/2.'
      };
    }
  });

  add({
    id: 'tr-tan45', family: 'trig', title: 'Equal Rise and Run',
    context: 'Tangent compares rise to run: tan = sin/cos. At 45° the triangle is isosceles — rise equals run — so the ratio is 1.',
    xLabel: 'Degrees (x)', yLabel: 'tan(x°)',
    xMin: 0, xMax: 60, form: 'y = tan(x·π/180)',
    symbolGlossary: [
      { sym: 'x', mean: 'degrees' },
      { sym: 'y', mean: 'tangent = rise ÷ run' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.tan(x * PI / 180),
    build() {
      return {
        question: 'On a ramp at exactly 45°, vertical rise and horizontal run are equal. What is tan(45°)?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: 45, prompt: 'tan(45°)' },
        hints: [
          'At 45°, sin and cos are equal',
          'tan = sin/cos = 1'
        ],
        workedSolution: 'In a 45-45-90 triangle the legs are equal. On the unit circle, sin(45°) = cos(45°), so their ratio tan(45°) = 1. The graph crosses y = 1 at x = 45.'
      };
    }
  });

  add({
    id: 'tr-cos-pi', family: 'trig', title: 'Facing the Opposite Direction',
    context: 'Turning halfway around (π radians = 180°) puts you on the negative x-axis. Cosine, the horizontal coordinate, becomes −1.',
    xLabel: 'Radians (x)', yLabel: 'cos(x)',
    xMin: 0, xMax: 6.3, form: 'y = cos(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'After a half turn (π ≈ 3.14 radians), how far left or right of center are you on the unit circle?',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: PI, prompt: 'cos(π)' },
        hints: [
          'Half turn lands on (−1, 0)',
          'Cosine is the x-coordinate → −1'
        ],
        workedSolution: 'π radians = 180°. The point is (−1, 0). Cosine is the x-coordinate, so cos(π) = −1. On the graph the curve is at the bottom of its range near x = 3.14.'
      };
    }
  });

  add({
    id: 'tr-midline', family: 'trig', title: 'A Wave Riding Higher',
    context: 'Adding 2 to sine lifts the whole wave so it oscillates around y = 2 instead of y = 0. The highest point is then 3.',
    xLabel: 'Radians (x)', yLabel: 'y = 2 + sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = 2 + sin(x)',
    symbolGlossary: [
      { sym: 'k', mean: 'vertical shift — the midline of the wave' },
      { sym: 'x', mean: 'radians' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => 2 + Math.sin(x),
    build() {
      return {
        question: 'Water level is modeled by y = 2 + sin(x). What is the highest water level in this model?',
        answer: { type: 'numeric', target: 3, tol: 0.12, atX: PI / 2, prompt: 'Highest level' },
        hints: [
          'sin reaches at most 1',
          '2 + 1 = 3'
        ],
        workedSolution: 'sin(x) ranges from −1 to 1. Adding 2 shifts every value up by 2, so the range becomes 1 to 3. The maximum is 2 + 1 = 3, at x = π/2 where sine peaks.'
      };
    }
  });

  add({
    id: 'tr-sin0', family: 'trig', title: 'No Height Yet',
    context: 'At the start of the circle (angle 0), you are on the horizontal axis. There is no vertical rise yet.',
    xLabel: 'Radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'At the very beginning of the turn (angle 0), what is the vertical height on the unit circle?',
        answer: { type: 'numeric', target: 0, tol: 0.05, atX: 0, prompt: 'sin(0)' },
        hints: ['Point is (1, 0)', 'Sine is the y-coordinate → 0'],
        workedSolution: 'Angle 0 corresponds to the point (1, 0) on the unit circle. Sine is the y-coordinate, so sin(0) = 0. The graph starts on the horizontal axis.'
      };
    }
  });

  add({
    id: 'tr-180', family: 'trig', title: 'Halfway Around in Degrees',
    context: '180° is a straight line — a half turn. On the unit circle you end up on the left, with height back at zero.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 360, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'After turning 180° (a straight angle), what is the height on the unit circle?',
        answer: { type: 'numeric', target: 0, tol: 0.08, atX: 180, prompt: 'sin(180°)' },
        hints: ['180° lands on (−1, 0)', 'Height (sine) is 0'],
        workedSolution: 'A half turn reaches (−1, 0). The y-coordinate is 0, so sin(180°) = 0. On the graph the wave crosses the axis at x = 180.'
      };
    }
  });

  add({
    id: 'tr-cos90', family: 'trig', title: 'No Horizontal Offset at the Top',
    context: 'At 90° you are straight above the center. Your left-right position is zero — all of the radius is vertical.',
    xLabel: 'Degrees (x)', yLabel: 'cos(x°)',
    xMin: 0, xMax: 180, form: 'y = cos(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'Standing at the top of the unit circle (90°), how far left or right of the center are you?',
        answer: { type: 'numeric', target: 0, tol: 0.06, atX: 90, prompt: 'cos(90°)' },
        hints: ['Top point is (0, 1)', 'Cosine is the x-coordinate → 0'],
        workedSolution: 'At 90° the coordinates are (0, 1). Cosine is the x-coordinate, so cos(90°) = 0. The cosine graph crosses zero at x = 90.'
      };
    }
  });

  add({
    id: 'tr-freq', family: 'trig', title: 'A Wave That Cycles Faster',
    context: 'y = sin(2x) squeezes two full cycles into the space where sin(x) only does one. At x = π/4, the inside angle is already π/2 — a peak for sine.',
    xLabel: 'Radians (x)', yLabel: 'sin(2x)',
    xMin: 0, xMax: 3.2, form: 'y = sin(2x)',
    symbolGlossary: [
      { sym: 'x', mean: 'radians' },
      { sym: '2', mean: 'frequency factor — doubles how fast the wave oscillates' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(2 * x),
    build() {
      return {
        question: 'For the faster wave y = sin(2x), what is the value when x = π/4 (≈ 0.79)?',
        answer: { type: 'numeric', target: 1, tol: 0.08, atX: PI / 4, prompt: 'y at x = π/4' },
        hints: [
          'Compute the inside: 2 · (π/4) = π/2',
          'sin(π/2) = 1'
        ],
        workedSolution: 'Substitute: sin(2 · π/4) = sin(π/2) = 1. The factor 2 means the wave reaches its first peak twice as early as ordinary sine.'
      };
    }
  });

  add({
    id: 'tr-neg-sin', family: 'trig', title: 'Upside-Down Wave',
    context: 'A negative sign in front of sine flips the wave over the horizontal axis. Peaks become troughs.',
    xLabel: 'Radians (x)', yLabel: '−sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = −sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'flipped sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: -1, max: -1, step: 0.1 }],
    eval: (p, x) => -Math.sin(x),
    build() {
      return {
        question: 'For the flipped wave y = −sin(x), what value do you get at the usual peak location x = π/2?',
        answer: { type: 'numeric', target: -1, tol: 0.08, atX: PI / 2, prompt: 'y at π/2' },
        hints: ['sin(π/2) = 1', 'Negating gives −1'],
        workedSolution: 'Ordinary sine peaks at 1 when x = π/2. Multiplying by −1 reflects that value through the axis: y = −1. The graph is a mirror image of sine.'
      };
    }
  });

  add({
    id: 'tr-law-sines-idea', family: 'trig', title: 'Finding a Side with Sine',
    context: 'In any triangle the ratio (side)/(sine of opposite angle) stays the same. If that common ratio is 10 and the angle is 30°, you can find the side opposite 30°.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 90, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'angle in degrees' }, { sym: 'y', mean: 'sine of the angle' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'A triangle has a/sin(A) = 10 and angle A = 30°. What is the length of side a opposite that angle?',
        answer: { type: 'numeric', target: 5, tol: 0.3, atX: 30, prompt: 'Side a' },
        hints: [
          'First find sin(30°) = 0.5 from the graph or memory',
          'a = 10 · sin(30°) = 10 · 0.5 = 5'
        ],
        workedSolution: 'Law of Sines: a / sin(A) = 10. With A = 30°, sin(30°) = 1/2. Multiply: a = 10 · 0.5 = 5. The graph confirms sin(30°) ≈ 0.5.'
      };
    }
  });

  add({
    id: 'tr-area', family: 'trig', title: 'Area Using Two Sides and the Angle Between',
    context: 'You can find a triangle’s area without a height if you know two sides and the included angle: Area = (1/2)·a·b·sin(C).',
    xLabel: 'Angle C in degrees', yLabel: 'sin(C°)',
    xMin: 0, xMax: 180, form: 'y = sin(C·π/180)',
    symbolGlossary: [{ sym: 'C', mean: 'included angle between the two sides' }, { sym: 'y', mean: 'sine of C' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'Two sides are 6 and 4, and the angle between them is 90°. What is the area of the triangle?',
        answer: { type: 'numeric', target: 12, tol: 0.4, atX: 90, prompt: 'Area' },
        hints: [
          'sin(90°) = 1',
          'Area = (1/2)·6·4·1 = 12'
        ],
        workedSolution: 'Formula: Area = (1/2)·a·b·sin(C). Here a = 6, b = 4, C = 90°. sin(90°) = 1, so Area = (1/2)·24·1 = 12. A right angle makes this the same as (1/2)·base·height.'
      };
    }
  });

  add({
    id: 'tr-arcsin', family: 'trig', title: 'Recovering the Angle',
    context: 'Sometimes you know the sine (the height ratio) and need the angle. For acute angles, sin(θ) = 0.5 points to a familiar 30°.',
    xLabel: 'Degrees (x)', yLabel: 'sin(x°)',
    xMin: 0, xMax: 90, form: 'y = sin(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'degrees' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x * PI / 180),
    build() {
      return {
        question: 'A sensor reports sin(θ) = 0.5 and θ is between 0° and 90°. What is θ?',
        answer: { type: 'numeric', target: 30, tol: 1, atX: 30, prompt: 'Angle θ in degrees' },
        hints: [
          'Find where the sine graph has height 0.5',
          'That happens at 30° in the first quadrant'
        ],
        workedSolution: 'You need the inverse of sine for an acute angle. From special triangles (or the graph), sin(30°) = 0.5, so θ = 30°. This is the idea behind arcsin(0.5) = 30° when restricted to 0°–90°.'
      };
    }
  });

  add({
    id: 'tr-pythag', family: 'trig', title: 'A Circle Identity',
    context: 'Every point on the unit circle satisfies x² + y² = 1. In trig language that is cos²(θ) + sin²(θ) = 1 — always.',
    xLabel: 'Radians (x)', yLabel: 'sin²(x) + cos²(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin²(x) + cos²(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians' }, { sym: 'y', mean: 'should stay at 1 for every x' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x) * Math.sin(x) + Math.cos(x) * Math.cos(x),
    build() {
      return {
        question: 'Check the identity at the start: what is sin²(0) + cos²(0)?',
        answer: { type: 'numeric', target: 1, tol: 0.05, atX: 0, prompt: 'Value at x = 0' },
        hints: ['sin(0) = 0, cos(0) = 1', '0 + 1 = 1'],
        workedSolution: 'sin(0) = 0 and cos(0) = 1, so 0² + 1² = 1. The graph of sin² + cos² is a flat line at height 1 for every angle — that is the Pythagorean identity on the unit circle.'
      };
    }
  });

  add({
    id: 'tr-cos-pi3', family: 'trig', title: 'Sixty Degrees in Radians',
    context: 'π/3 radians is the same turn as 60°. Cosine there is still 1/2.',
    xLabel: 'Radians (x)', yLabel: 'cos(x)',
    xMin: 0, xMax: 3.2, form: 'y = cos(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians (π/3 ≈ 1.05)' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x),
    build() {
      return {
        question: 'What is the cosine of π/3 radians (about 1.05 on the axis)?',
        answer: { type: 'numeric', target: 0.5, tol: 0.06, atX: PI / 3, prompt: 'cos(π/3)' },
        hints: ['π/3 = 60°', 'cos(60°) = 1/2'],
        workedSolution: 'Convert: π/3 rad = 180°/3 = 60°. From the 30-60-90 triangle, cos(60°) = 1/2. So cos(π/3) = 0.5. Read near x = 1.05 on the graph.'
      };
    }
  });

  add({
    id: 'tr-law-cos', family: 'trig', title: 'The Famous 3-4-5 Triangle',
    context: 'A right triangle with legs 3 and 4 has hypotenuse 5. That follows from the Pythagorean theorem — the foundation behind many cosine formulas later.',
    xLabel: 'Degrees (x)', yLabel: 'cos(x°)',
    xMin: 0, xMax: 90, form: 'y = cos(x·π/180)',
    symbolGlossary: [{ sym: 'x', mean: 'acute angle (optional here)' }, { sym: 'y', mean: 'cosine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.cos(x * PI / 180),
    build() {
      return {
        question: 'A right triangle has legs of length 3 and 4. What is the length of the longest side (the hypotenuse)?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 0, prompt: 'Hypotenuse' },
        hints: ['Use a² + b² = c²', '9 + 16 = 25, so c = 5'],
        workedSolution: 'Pythagorean theorem: 3² + 4² = 9 + 16 = 25 = 5². The hypotenuse is 5. This 3-4-5 triangle is the simplest integer right triangle and links directly to cosine as adjacent/hypotenuse.'
      };
    }
  });

  add({
    id: 'tr-cos-amp', family: 'trig', title: 'A Stronger Cosine Swing',
    context: 'y = 4 cos(x) starts at 4 when x = 0 and swings between −4 and 4. The amplitude is 4.',
    xLabel: 'Radians (x)', yLabel: '4 cos(x)',
    xMin: 0, xMax: 6.3, form: 'y = 4·cos(x)',
    symbolGlossary: [{ sym: 'a', mean: 'amplitude 4' }, { sym: 'x', mean: 'radians' }],
    paramDefs: [{ key: 'a', label: 'a — amplitude', min: 4, max: 4, step: 0.5 }],
    eval: (p, x) => 4 * Math.cos(x),
    build() {
      return {
        question: 'At the start of the cycle (x = 0), what value does y = 4 cos(x) take?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 0, prompt: 'y at x = 0' },
        hints: ['cos(0) = 1', '4 · 1 = 4'],
        workedSolution: 'cos(0) = 1, so 4·cos(0) = 4. That is the maximum of this wave; amplitude 4 means the graph reaches ±4.'
      };
    }
  });

  add({
    id: 'tr-sin-3pi2', family: 'trig', title: 'Bottom of the Circle',
    context: 'At 3π/2 radians (270°) you are at the bottom of the unit circle. The height is −1 — as low as sine can go.',
    xLabel: 'Radians (x)', yLabel: 'sin(x)',
    xMin: 0, xMax: 6.3, form: 'y = sin(x)',
    symbolGlossary: [{ sym: 'x', mean: 'radians (3π/2 ≈ 4.71)' }, { sym: 'y', mean: 'sine' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 0.1 }],
    eval: (p, x) => Math.sin(x),
    build() {
      return {
        question: 'At three-quarters of a full turn (3π/2 ≈ 4.71), what height does the unit circle show?',
        answer: { type: 'numeric', target: -1, tol: 0.1, atX: 3 * PI / 2, prompt: 'sin(3π/2)' },
        hints: ['Bottom point is (0, −1)', 'Sine is the y-coordinate → −1'],
        workedSolution: '3π/2 is 270°. The unit-circle point is (0, −1). Sine is the y-coordinate, so sin(3π/2) = −1. On the graph this is the lowest trough near x = 4.71.'
      };
    }
  });

  add({
    id: 'tr-combined', family: 'trig', title: 'Tide Model: Stretch and Lift',
    context: 'A simple tide model is y = 2 sin(x) + 1: the wave has amplitude 2 and sits on a midline of 1. High tide is 3.',
    xLabel: 'Radians (x)', yLabel: '2 sin(x) + 1',
    xMin: 0, xMax: 6.3, form: 'y = 2·sin(x) + 1',
    symbolGlossary: [
      { sym: 'a', mean: 'amplitude 2' },
      { sym: 'k', mean: 'midline +1' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 2, max: 2, step: 0.5 }],
    eval: (p, x) => 2 * Math.sin(x) + 1,
    build() {
      return {
        question: 'In the model y = 2 sin(x) + 1, what is the highest tide level?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: PI / 2, prompt: 'Highest y' },
        hints: [
          'Largest sin is 1',
          '2·1 + 1 = 3'
        ],
        workedSolution: 'Maximum of sin(x) is 1, so maximum of 2 sin(x) + 1 is 2·1 + 1 = 3. That occurs at x = π/2. Amplitude 2 and midline 1 together set the high at 3 and the low at −1.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
