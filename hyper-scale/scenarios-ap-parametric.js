/** AP — Parametric (25) stranger-test */
(function () {
  const T = [];
  const L = 'ap', U = 'parametric';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  add({
    id: 'ap-par-x', family: 'linear', title: 'Where Is the Robot at Time t?',
    context: 'A robot’s east position is x = 2t. Time t is the parameter — the clock that drives the motion.',
    xLabel: 'Time t', yLabel: 'East position x',
    xMin: 0, xMax: 10, form: 'y = 2t',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: 'y', mean: 'x-position on the plane' }],
    paramDefs: [{ key: 'm', label: 'speed', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'At t = 3, how far east is the robot?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 3, prompt: 'x(3)' },
        hints: ['x = 2 · 3 = 6'],
        workedSolution: 'Plug in: x(3) = 2 · 3 = 6. Parametric equations give coordinates as functions of t.'
      };
    }
  });

  add({
    id: 'ap-par-y', family: 'linear', title: 'North Position',
    context: 'The same robot has y = t + 1 for its north coordinate.',
    xLabel: 'Time t', yLabel: 'North y',
    xMin: 0, xMax: 10, form: 'y = t + 1',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: 'y', mean: 'north position' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 1, max: 1, step: 1 }],
    eval: (p, x) => x + 1,
    build() {
      return {
        question: 'At t = 4, what is the north coordinate?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 4, prompt: 'y(4)' },
        hints: ['4 + 1 = 5'],
        workedSolution: 'y(4) = 4 + 1 = 5.'
      };
    }
  });

  add({
    id: 'ap-par-start', family: 'linear', title: 'Starting Point',
    context: 'When t = 0, x = 3 + 2t starts at x = 3. The constant term is the initial position.',
    xLabel: 't', yLabel: 'x = 3 + 2t',
    xMin: 0, xMax: 8, form: 'y = 3 + 2t',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: '3', mean: 'starting east position' }],
    paramDefs: [{ key: 'm', label: 'm', min: 2, max: 2, step: 1 }, { key: 'c', label: 'start', min: 3, max: 3, step: 1 }],
    eval: (p, x) => 3 + 2 * x,
    build() {
      return {
        question: 'Where is x when the clock starts (t = 0)?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 0, prompt: 'x(0)' },
        hints: ['3 + 2·0 = 3'],
        workedSolution: 'x(0) = 3. That is the initial east position.'
      };
    }
  });

  add({
    id: 'ap-par-line', family: 'linear', title: 'Eliminating Time',
    context: 'If x = t and y = 2t, then y = 2x — the path is the line through the origin with slope 2.',
    xLabel: 'x (= t)', yLabel: 'y = 2x',
    xMin: 0, xMax: 6, form: 'y = 2x',
    symbolGlossary: [{ sym: 'x', mean: 'east = t' }, { sym: 'y', mean: 'north = 2t' }],
    paramDefs: [{ key: 'm', label: 'slope', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'When x = 3 on this path, what is y?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 3, prompt: 'y' },
        hints: ['y = 2x'],
        workedSolution: 'y = 2 · 3 = 6. Removing t shows the geometric path.'
      };
    }
  });

  add({
    id: 'ap-par-speed', family: 'linear', title: 'Faster East',
    context: 'x = 5t means five units east per unit time — a constant speed eastward.',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 6, form: 'y = 5t',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: '5', mean: 'east speed' }],
    paramDefs: [{ key: 'm', label: 'speed', min: 5, max: 5, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 5 * x,
    build() {
      return {
        question: 'How far east at t = 2?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 2, prompt: 'x(2)' },
        hints: ['5 · 2 = 10'],
        workedSolution: 'x(2) = 10.'
      };
    }
  });

  add({
    id: 'ap-par-ball', family: 'quadratic', title: 'Ball Height vs Time',
    context: 'A ball’s height is h = 20t − 5t² (toy units). Height depends on time, not on a single x alone.',
    xLabel: 'Time t', yLabel: 'Height',
    xMin: 0, xMax: 4, form: 'y = 20t − 5t²',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: 'y', mean: 'height' }],
    paramDefs: [{ key: 'a', label: 'a', min: -5, max: -5, step: 1 }, { key: 'b', label: 'b', min: 20, max: 20, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 20 * x - 5 * x * x,
    build() {
      return {
        question: 'What is the height at t = 2?',
        answer: { type: 'numeric', target: 20, tol: 0.5, atX: 2, prompt: 'h(2)' },
        hints: ['20·2 − 5·4 = 40 − 20 = 20'],
        workedSolution: 'h(2) = 40 − 20 = 20. Parametric (or time-based) height models motion even when the path is vertical in space.'
      };
    }
  });

  add({
    id: 'ap-par-peak', family: 'quadratic', title: 'Peak of the Toss',
    context: 'Same model h = 20t − 5t². The vertex of this parabola in t occurs at t = 2, where height is 20.',
    xLabel: 't', yLabel: 'h',
    xMin: 0, xMax: 4, form: 'y = 20t − 5t²',
    symbolGlossary: [{ sym: 't', mean: 'time' }],
    paramDefs: [{ key: 'a', label: 'a', min: -5, max: -5, step: 1 }, { key: 'b', label: 'b', min: 20, max: 20, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 20 * x - 5 * x * x,
    build() {
      return {
        question: 'Maximum height in this model (at t = 2)?',
        answer: { type: 'numeric', target: 20, tol: 0.5, atX: 2, prompt: 'Max height' },
        hints: ['Vertex at t = −b/(2a) = 20/10 = 2'],
        workedSolution: 'Vertex t = 20/(10) = 2; h(2) = 20. That is the peak of the toss.'
      };
    }
  });

  add({
    id: 'ap-par-land', family: 'quadratic', title: 'When Does It Land?',
    context: 'h = 20t − 5t² returns to height 0 when t = 0 or t = 4.',
    xLabel: 't', yLabel: 'h',
    xMin: 0, xMax: 4, form: 'y = 20t − 5t²',
    symbolGlossary: [{ sym: 't', mean: 'time' }],
    paramDefs: [{ key: 'a', label: 'a', min: -5, max: -5, step: 1 }, { key: 'b', label: 'b', min: 20, max: 20, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 20 * x - 5 * x * x,
    build() {
      return {
        question: 'At what positive time does the height return to 0?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 4, prompt: 't when h = 0' },
        hints: ['Factor: 5t(4 − t) = 0'],
        workedSolution: '5t(4 − t) = 0 ⇒ t = 0 or t = 4. It lands at t = 4.'
      };
    }
  });

  add({
    id: 'ap-par-circle-x', family: 'trig', title: 'Ferris Wheel x',
    context: 'A ferris-wheel seat: x = 4 cos t. At t = 0 the seat is at the rightmost point.',
    xLabel: 't', yLabel: 'x = 4 cos t',
    xMin: 0, xMax: 6.3, form: 'y = 4 cos t',
    symbolGlossary: [{ sym: 't', mean: 'time / angle parameter' }, { sym: 'y', mean: 'horizontal position' }],
    paramDefs: [{ key: 'a', label: 'R', min: 4, max: 4, step: 1 }],
    eval: (p, x) => 4 * Math.cos(x),
    build() {
      return {
        question: 'x-position at t = 0?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 0, prompt: 'x(0)' },
        hints: ['cos(0) = 1'],
        workedSolution: 'x(0) = 4 · 1 = 4.'
      };
    }
  });

  add({
    id: 'ap-par-circle-y', family: 'trig', title: 'Ferris Wheel y',
    context: 'y = 4 sin t for the same wheel. At t = π/2 the seat is at the top.',
    xLabel: 't', yLabel: 'y = 4 sin t',
    xMin: 0, xMax: 6.3, form: 'y = 4 sin t',
    symbolGlossary: [{ sym: 't', mean: 'parameter' }, { sym: 'y', mean: 'vertical position' }],
    paramDefs: [{ key: 'a', label: 'R', min: 4, max: 4, step: 1 }],
    eval: (p, x) => 4 * Math.sin(x),
    build() {
      return {
        question: 'y-position at t = π/2?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: Math.PI / 2, prompt: 'y' },
        hints: ['sin(π/2) = 1'],
        workedSolution: 'y = 4 · 1 = 4 (top of the circle).'
      };
    }
  });

  add({
    id: 'ap-par-mid', family: 'linear', title: 'Halfway in Time',
    context: 'x = 10t moves from 0 toward larger x. At t = 0.5 you are halfway to the t = 1 position.',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 1, form: 'y = 10t',
    symbolGlossary: [{ sym: 't', mean: 'time from 0 to 1' }],
    paramDefs: [{ key: 'm', label: 'm', min: 10, max: 10, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 10 * x,
    build() {
      return {
        question: 'x at t = 0.5?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 0.5, prompt: 'x' },
        hints: ['10 · 0.5 = 5'],
        workedSolution: 'x(0.5) = 5.'
      };
    }
  });

  add({
    id: 'ap-par-offset', family: 'linear', title: 'Path Parallel to an Axis',
    context: 'x = 5 (constant), y = t: the particle moves vertically on the line x = 5.',
    xLabel: 't', yLabel: 'x-coordinate',
    xMin: 0, xMax: 5, form: 'y = 5',
    symbolGlossary: [{ sym: 'y', mean: 'fixed x = 5' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'x', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5,
    build() {
      return {
        question: 'What is the east coordinate for every t on this path?',
        answer: { type: 'numeric', target: 5, tol: 0.15, atX: 2, prompt: 'x' },
        hints: ['x is constant 5'],
        workedSolution: 'x(t) = 5 for all t — a vertical line in the plane.'
      };
    }
  });

  add({
    id: 'ap-par-sum', family: 'linear', title: 'Two Motions East',
    context: 'First leg: x = t. Second contribution adds +4. Combined model x = t + 4.',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 8, form: 'y = t + 4',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: '4', mean: 'starting offset' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 4, max: 4, step: 1 }],
    eval: (p, x) => x + 4,
    build() {
      return {
        question: 'x at t = 3?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 3, prompt: 'x' },
        hints: ['3 + 4 = 7'],
        workedSolution: 'x(3) = 7.'
      };
    }
  });

  add({
    id: 'ap-par-neg', family: 'linear', title: 'Moving West',
    context: 'x = 10 − 2t decreases as time increases — motion toward smaller x (west if x is east).',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 5, form: 'y = 10 − 2t',
    symbolGlossary: [{ sym: 't', mean: 'time' }],
    paramDefs: [{ key: 'm', label: 'm', min: -2, max: -2, step: 1 }, { key: 'c', label: 'c', min: 10, max: 10, step: 1 }],
    eval: (p, x) => 10 - 2 * x,
    build() {
      return {
        question: 'x at t = 3?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 3, prompt: 'x' },
        hints: ['10 − 6 = 4'],
        workedSolution: 'x(3) = 10 − 6 = 4.'
      };
    }
  });

  add({
    id: 'ap-par-same', family: 'linear', title: 'Equal Coordinates',
    context: 'x = t, y = t means the path is the diagonal y = x.',
    xLabel: 'x', yLabel: 'y = x',
    xMin: 0, xMax: 6, form: 'y = x',
    symbolGlossary: [{ sym: 'x', mean: 'east = t' }, { sym: 'y', mean: 'north = t' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    build() {
      return {
        question: 'When x = 5 on this path, what is y?',
        answer: { type: 'numeric', target: 5, tol: 0.15, atX: 5, prompt: 'y' },
        hints: ['y = x'],
        workedSolution: 'y = 5. The particle always has equal coordinates.'
      };
    }
  });

  add({
    id: 'ap-par-t1', family: 'linear', title: 'One Second Later',
    context: 'x = 3t. After one second from t = 0, x has grown to 3.',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 5, form: 'y = 3t',
    symbolGlossary: [{ sym: 't', mean: 'seconds' }],
    paramDefs: [{ key: 'm', label: 'm', min: 3, max: 3, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 3 * x,
    build() {
      return {
        question: 'x at t = 1?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 1, prompt: 'x' },
        hints: ['3 · 1 = 3'],
        workedSolution: 'x(1) = 3.'
      };
    }
  });

  add({
    id: 'ap-par-quad-x', family: 'quadratic', title: 'Speeding Up East',
    context: 'x = t² means east position grows faster as time passes (not constant speed).',
    xLabel: 't', yLabel: 'x = t²',
    xMin: 0, xMax: 5, form: 'y = t²',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: 'y', mean: 'east position' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }, { key: 'b', label: 'b', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x * x,
    build() {
      return {
        question: 'x at t = 3?',
        answer: { type: 'numeric', target: 9, tol: 0.3, atX: 3, prompt: 'x' },
        hints: ['3² = 9'],
        workedSolution: 'x(3) = 9. Average speed from 0 to 3 is 3, but instantaneous speed is still increasing.'
      };
    }
  });

  add({
    id: 'ap-par-init-y', family: 'linear', title: 'Initial Height',
    context: 'y = 8 − t starts at height 8 when t = 0.',
    xLabel: 't', yLabel: 'y',
    xMin: 0, xMax: 8, form: 'y = 8 − t',
    symbolGlossary: [{ sym: 't', mean: 'time' }],
    paramDefs: [{ key: 'm', label: 'm', min: -1, max: -1, step: 1 }, { key: 'c', label: 'c', min: 8, max: 8, step: 1 }],
    eval: (p, x) => 8 - x,
    build() {
      return {
        question: 'Starting height (t = 0)?',
        answer: { type: 'numeric', target: 8, tol: 0.2, atX: 0, prompt: 'y(0)' },
        hints: ['8 − 0 = 8'],
        workedSolution: 'y(0) = 8.'
      };
    }
  });

  add({
    id: 'ap-par-meet', family: 'linear', title: 'When Coordinates Match',
    context: 'x = t, y = 6 − t. They are equal when t = 3 (both equal 3).',
    xLabel: 't', yLabel: 'x = t',
    xMin: 0, xMax: 6, form: 'y = t',
    symbolGlossary: [{ sym: 't', mean: 'time' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    build() {
      return {
        question: 'At the time when x = y = 3, what is t?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 3, prompt: 't' },
        hints: ['t = 6 − t ⇒ 2t = 6'],
        workedSolution: 'Set t = 6 − t ⇒ t = 3. Point (3, 3) on the path.'
      };
    }
  });

  add({
    id: 'ap-par-r', family: 'linear', title: 'Distance Along a Line',
    context: 'Along x = 3t, y = 4t the distance from the origin is 5t (scaled 3-4-5).',
    xLabel: 't', yLabel: 'distance 5t',
    xMin: 0, xMax: 4, form: 'y = 5t',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: 'y', mean: '√(x²+y²)' }],
    paramDefs: [{ key: 'm', label: 'm', min: 5, max: 5, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 5 * x,
    build() {
      return {
        question: 'Distance from origin at t = 2?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 2, prompt: 'Distance' },
        hints: ['5 · 2 = 10', 'Or √(6²+8²) = 10'],
        workedSolution: 'At t = 2: (6, 8); distance √(36+64) = 10 = 5t.'
      };
    }
  });

  add({
    id: 'ap-par-stop', family: 'linear', title: 'Stopped East',
    context: 'x = 7 (constant) means the particle is not moving east–west.',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 5, form: 'y = 7',
    symbolGlossary: [{ sym: 'y', mean: 'fixed x' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 7, max: 7, step: 1 }],
    eval: (p, x) => 7,
    build() {
      return {
        question: 'East position at any time for x = 7?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 2, prompt: 'x' },
        hints: ['Constant function'],
        workedSolution: 'x(t) = 7 for all t.'
      };
    }
  });

  add({
    id: 'ap-par-double', family: 'linear', title: 'Twice the Parameter',
    context: 'If x = 2t and you look at t = 4, x is 8 — double the “time label” in this scaling.',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 6, form: 'y = 2t',
    symbolGlossary: [{ sym: 't', mean: 'parameter' }],
    paramDefs: [{ key: 'm', label: 'm', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'x when t = 4?',
        answer: { type: 'numeric', target: 8, tol: 0.2, atX: 4, prompt: 'x' },
        hints: ['2 · 4 = 8'],
        workedSolution: 'x(4) = 8.'
      };
    }
  });

  add({
    id: 'ap-par-origin-t', family: 'linear', title: 'Through the Origin',
    context: 'x = 2t, y = 3t passes through the origin at t = 0.',
    xLabel: 't', yLabel: 'x',
    xMin: 0, xMax: 5, form: 'y = 2t',
    symbolGlossary: [{ sym: 't', mean: 'time' }],
    paramDefs: [{ key: 'm', label: 'm', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'x-coordinate at t = 0?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 0, prompt: 'x(0)' },
        hints: ['2 · 0 = 0'],
        workedSolution: 'At t = 0 both coordinates are 0 — the origin.'
      };
    }
  });

  add({
    id: 'ap-par-avg', family: 'linear', title: 'Average East Speed',
    context: 'From t = 0 to t = 4, x goes from 0 to 12 along x = 3t. Average speed east is 12/4 = 3.',
    xLabel: 't', yLabel: 'x = 3t',
    xMin: 0, xMax: 5, form: 'y = 3t',
    symbolGlossary: [{ sym: 't', mean: 'time' }],
    paramDefs: [{ key: 'm', label: 'm', min: 3, max: 3, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 3 * x,
    build() {
      return {
        question: 'Average east speed from t = 0 to t = 4?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 4, prompt: 'Δx/Δt' },
        hints: ['(12 − 0)/(4 − 0) = 3'],
        workedSolution: 'Δx/Δt = 12/4 = 3. For linear x = 3t the average rate equals the coefficient 3.'
      };
    }
  });

  add({
    id: 'ap-par-y0', family: 'linear', title: 'On the x-Axis',
    context: 'y = 0 (constant) with x = t means motion along the x-axis.',
    xLabel: 't', yLabel: 'y',
    xMin: 0, xMax: 5, form: 'y = 0',
    symbolGlossary: [{ sym: 'y', mean: 'north coordinate fixed at 0' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'North coordinate for this path?',
        answer: { type: 'numeric', target: 0, tol: 0.05, atX: 2, prompt: 'y' },
        hints: ['y is identically 0'],
        workedSolution: 'y(t) = 0 — the particle stays on the x-axis.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
