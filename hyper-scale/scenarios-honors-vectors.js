/** Honors — Vectors (25) — stranger-test plain language */
(function () {
  const T = [];
  const L = 'honors', U = 'vectors';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  add({
    id: 'hv-mag-1', family: 'trig', title: 'How Far Did the Drone Fly?',
    context: 'A drone flies 3 km east and 4 km north. The straight-line distance back to the start is the length of the displacement vector ⟨3, 4⟩.',
    xLabel: 'East distance km (x)', yLabel: 'Straight-line distance km',
    xMin: 0, xMax: 6, form: 'y = √(x² + 16)',
    symbolGlossary: [
      { sym: 'x', mean: 'eastward distance (km)' },
      { sym: 'y', mean: 'straight-line distance when north is 4 km' }
    ],
    paramDefs: [{ key: 'a', label: 'north leg (fixed)', min: 4, max: 4, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 16),
    build() {
      return {
        question: 'If the drone went 3 km east and 4 km north, how many kilometers is the straight path home?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 3, prompt: 'Straight-line distance (km)' },
        hints: ['Think of a right triangle with legs 3 and 4', '√(9+16) = 5'],
        workedSolution: 'Displacement ⟨3, 4⟩ has length √(3²+4²) = √25 = 5 km. That is the same 3-4-5 triangle you may already know.'
      };
    }
  });

  add({
    id: 'hv-mag-2', family: 'trig', title: 'A Longer Flight',
    context: 'Another flight goes 6 km east and 8 km north — twice the previous legs. The straight-line distance should also double.',
    xLabel: 'East km (x)', yLabel: 'Straight-line km',
    xMin: 0, xMax: 10, form: 'y = √(x² + 64)',
    symbolGlossary: [
      { sym: 'x', mean: 'eastward km' },
      { sym: 'y', mean: 'distance home when north is 8 km' }
    ],
    paramDefs: [{ key: 'a', label: 'north', min: 8, max: 8, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 64),
    build() {
      return {
        question: 'How far is the straight path home after 6 km east and 8 km north?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 6, prompt: 'Distance (km)' },
        hints: ['√(36+64) = 10', 'Or notice it is double the 3-4-5 path'],
        workedSolution: '√(6²+8²) = √100 = 10 km. Scaling both components of ⟨3,4⟩ by 2 scales the length by 2.'
      };
    }
  });

  add({
    id: 'hv-mag-3', family: 'trig', title: 'Only Moving East',
    context: 'A robot drives only east — never north or south. Its path is the vector ⟨5, 0⟩ kilometers.',
    xLabel: 'East km (x)', yLabel: 'Path length km',
    xMin: 0, xMax: 8, form: 'y = |x|',
    symbolGlossary: [
      { sym: 'x', mean: 'eastward distance' },
      { sym: 'y', mean: 'total path length (same as |x| when there is no north component)' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.abs(x),
    build() {
      return {
        question: 'If the robot only goes 5 km east, how long is its path?',
        answer: { type: 'numeric', target: 5, tol: 0.15, atX: 5, prompt: 'Path length (km)' },
        hints: ['No north component means length equals the east distance'],
        workedSolution: '⟨5, 0⟩ has length √(25+0) = 5. When one component is zero, magnitude equals the absolute value of the other.'
      };
    }
  });

  add({
    id: 'hv-add-x', family: 'linear', title: 'Two Legs East',
    context: 'You walk 2 blocks east, then another 5 blocks east. Those are two horizontal moves that add.',
    xLabel: 'First leg east (blocks)', yLabel: 'Total east (blocks)',
    xMin: 0, xMax: 10, form: 'y = x + 5',
    symbolGlossary: [
      { sym: 'x', mean: 'blocks east on the first leg' },
      { sym: 'y', mean: 'total blocks east after adding a second leg of 5' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'second leg', min: 5, max: 5, step: 1 }],
    eval: (p, x) => x + 5,
    build() {
      return {
        question: 'After 2 blocks east and then 5 more blocks east, how many blocks east are you from the start?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 2, prompt: 'Total east (blocks)' },
        hints: ['Add the east parts: 2 + 5'],
        workedSolution: 'Vector components add separately. East parts: 2 + 5 = 7. That is the x-component of the total displacement.'
      };
    }
  });

  add({
    id: 'hv-add-y', family: 'linear', title: 'Two Legs North',
    context: 'You climb 3 floors, then 4 more floors. Vertical moves add the same way horizontal ones do.',
    xLabel: 'First climb (floors)', yLabel: 'Total climb (floors)',
    xMin: 0, xMax: 10, form: 'y = x + 4',
    symbolGlossary: [
      { sym: 'x', mean: 'floors on the first climb' },
      { sym: 'y', mean: 'total floors after adding 4 more' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'second climb', min: 4, max: 4, step: 1 }],
    eval: (p, x) => x + 4,
    build() {
      return {
        question: 'If you go up 3 floors and then 4 more, how many floors up are you in total?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 3, prompt: 'Total floors up' },
        hints: ['3 + 4 = 7'],
        workedSolution: 'Vertical components add: 3 + 4 = 7. Same rule as adding vector y-components.'
      };
    }
  });

  add({
    id: 'hv-scale', family: 'linear', title: 'Triple the Push',
    context: 'A force vector points 2 units right. You triple the force — every component is multiplied by 3.',
    xLabel: 'Original right-push', yLabel: 'Tripled right-push',
    xMin: 0, xMax: 5, form: 'y = 3x',
    symbolGlossary: [
      { sym: 'x', mean: 'original horizontal component' },
      { sym: 'y', mean: 'component after multiplying the whole vector by 3' }
    ],
    paramDefs: [{ key: 'm', label: 'scale factor', min: 3, max: 3, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 3 * x,
    build() {
      return {
        question: 'The original push is 2 units to the right. After tripling the force, how many units to the right is the new push?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 2, prompt: 'New right-push' },
        hints: ['Multiply the component by 3', '3 × 2 = 6'],
        workedSolution: 'Scaling a vector multiplies each component: 3⟨2, 1⟩ = ⟨6, 3⟩. The rightward part becomes 6.'
      };
    }
  });

  add({
    id: 'hv-scale-mag', family: 'linear', title: 'Doubling the Path Length',
    context: 'Your displacement has length 5 km. You repeat the same journey twice in a row (scale by 2). The total straight-line model length doubles.',
    xLabel: 'Original length (km)', yLabel: 'Scaled length (km)',
    xMin: 0, xMax: 8, form: 'y = 2x',
    symbolGlossary: [
      { sym: 'x', mean: 'original magnitude' },
      { sym: 'y', mean: 'magnitude after scale factor 2' }
    ],
    paramDefs: [{ key: 'm', label: 'scale', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'If one trip is 5 km long in a straight line, how long is the model after scaling that displacement by 2?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 5, prompt: 'New length (km)' },
        hints: ['Length scales by the absolute value of the factor', '2 × 5 = 10'],
        workedSolution: '|k v| = |k| · |v|. With k = 2 and |v| = 5, the new length is 10 km.'
      };
    }
  });

  add({
    id: 'hv-mag-4', family: 'trig', title: 'Northeast on a Grid',
    context: 'You walk 5 blocks east and 5 blocks north. The straight shortcut across the grid is longer than 5.',
    xLabel: 'Blocks east (= north)', yLabel: 'Shortcut length',
    xMin: 0, xMax: 8, form: 'y = x√2',
    symbolGlossary: [
      { sym: 'x', mean: 'blocks east (and the same number north)' },
      { sym: 'y', mean: 'straight-line distance' }
    ],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => x * Math.SQRT2,
    build() {
      return {
        question: 'About how long is the straight shortcut after 5 east and 5 north? (≈ 7.07)',
        answer: { type: 'numeric', target: 7.07, tol: 0.25, atX: 5, prompt: 'Shortcut length' },
        hints: ['√(25+25) = √50 ≈ 7.07'],
        workedSolution: '√(5²+5²) = √50 = 5√2 ≈ 7.07 blocks.'
      };
    }
  });

  add({
    id: 'hv-sub', family: 'linear', title: 'Undo Part of a Walk',
    context: 'You planned 7 steps east, but the last 2 were a mistake and you step back west by 2. Net east is 5.',
    xLabel: 'Planned east steps', yLabel: 'Net east after −2',
    xMin: 2, xMax: 12, form: 'y = x − 2',
    symbolGlossary: [
      { sym: 'x', mean: 'planned east component' },
      { sym: 'y', mean: 'net east after subtracting 2' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'backtrack', min: -2, max: -2, step: 1 }],
    eval: (p, x) => x - 2,
    build() {
      return {
        question: 'You meant to go 7 east, then take back 2. How many steps east are you net?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 7, prompt: 'Net east' },
        hints: ['7 − 2 = 5'],
        workedSolution: 'Subtracting vectors is component-wise: 7 − 2 = 5 for the east part.'
      };
    }
  });

  add({
    id: 'hv-unit-x', family: 'linear', title: 'Steps of Size One',
    context: 'The unit arrow “one step east” is ⟨1, 0⟩. Taking four of those steps places you 4 units east.',
    xLabel: 'Number of unit steps east', yLabel: 'Position east',
    xMin: 0, xMax: 5, form: 'y = x',
    symbolGlossary: [
      { sym: 'x', mean: 'how many unit steps' },
      { sym: 'y', mean: 'east position' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    build() {
      return {
        question: 'After 4 unit steps due east, how far east are you?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 4, prompt: 'East position' },
        hints: ['4 × 1 = 4'],
        workedSolution: '4⟨1, 0⟩ = ⟨4, 0⟩. You are 4 units east of the start.'
      };
    }
  });

  add({
    id: 'hv-mag-5', family: 'trig', title: 'Ladder Against a Wall',
    context: 'The base of a ladder is 5 m from the wall and the top reaches 12 m up. The ladder’s length is the magnitude of ⟨5, 12⟩.',
    xLabel: 'Base distance (m)', yLabel: 'Ladder length (m)',
    xMin: 0, xMax: 8, form: 'y = √(x² + 144)',
    symbolGlossary: [
      { sym: 'x', mean: 'distance from wall to base' },
      { sym: 'y', mean: 'ladder length when height is 12 m' }
    ],
    paramDefs: [{ key: 'a', label: 'height', min: 12, max: 12, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 144),
    build() {
      return {
        question: 'How long is the ladder if it is 5 m from the wall and reaches 12 m high?',
        answer: { type: 'numeric', target: 13, tol: 0.3, atX: 5, prompt: 'Ladder length (m)' },
        hints: ['√(25+144) = 13'],
        workedSolution: 'Length = √(5²+12²) = √169 = 13 m (the 5-12-13 triple).'
      };
    }
  });

  add({
    id: 'hv-dir-east', family: 'linear', title: 'No North at All',
    context: 'A ship sails only east. Its north–south component stays zero no matter how far it goes.',
    xLabel: 'East distance', yLabel: 'North component',
    xMin: 1, xMax: 10, form: 'y = 0',
    symbolGlossary: [
      { sym: 'x', mean: 'how far east' },
      { sym: 'y', mean: 'north component (always 0 for pure east)' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'For a course that is only east, what is the northward component of the displacement?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 5, prompt: 'North component' },
        hints: ['Pure east means no north or south change'],
        workedSolution: 'A pure-east displacement is ⟨a, 0⟩. The north component is 0.'
      };
    }
  });

  add({
    id: 'hv-result-mag', family: 'trig', title: 'East Then North',
    context: 'You walk 3 km east, then 4 km north. The two legs form a right angle. The shortcut home is one straight vector.',
    xLabel: 'East leg (km)', yLabel: 'Shortcut length (km)',
    xMin: 0, xMax: 6, form: 'y = √(x² + 16)',
    symbolGlossary: [
      { sym: 'x', mean: 'east leg' },
      { sym: 'y', mean: 'length of ⟨east, 4⟩' }
    ],
    paramDefs: [{ key: 'a', label: 'north leg', min: 4, max: 4, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 16),
    build() {
      return {
        question: 'After 3 km east and 4 km north, how long is the straight path back to the start?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 3, prompt: 'Shortcut (km)' },
        hints: ['Resultant is ⟨3, 4⟩', 'Length 5'],
        workedSolution: 'Sum of ⟨3,0⟩ and ⟨0,4⟩ is ⟨3,4⟩ with length 5 km.'
      };
    }
  });

  add({
    id: 'hv-neg', family: 'linear', title: 'Turn Around',
    context: 'You were heading with a component of 3 units east. Turning completely around flips the sign of that component.',
    xLabel: 'Original east component', yLabel: 'After reverse',
    xMin: -5, xMax: 5, form: 'y = −x',
    symbolGlossary: [
      { sym: 'x', mean: 'original component' },
      { sym: 'y', mean: 'component of the opposite vector' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: -1, max: -1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => -x,
    build() {
      return {
        question: 'If your east component was +3 and you reverse direction completely, what is the new east component?',
        answer: { type: 'numeric', target: -3, tol: 0.15, atX: 3, prompt: 'New east component' },
        hints: ['Opposite vector multiplies by −1'],
        workedSolution: '−⟨3, 2⟩ = ⟨−3, −2⟩. The east part becomes −3 (3 units west).'
      };
    }
  });

  add({
    id: 'hv-mag-6', family: 'trig', title: 'Scaled City Blocks',
    context: 'A map uses blocks of size ⟨9, 12⟩ — three times ⟨3, 4⟩. The diagonal across those blocks is 15.',
    xLabel: 'East blocks', yLabel: 'Diagonal length',
    xMin: 0, xMax: 12, form: 'y = √(x² + 144)',
    symbolGlossary: [
      { sym: 'x', mean: 'east measure' },
      { sym: 'y', mean: 'diagonal when north measure is 12' }
    ],
    paramDefs: [{ key: 'a', label: 'north', min: 12, max: 12, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 144),
    build() {
      return {
        question: 'What is the straight-line length for a ⟨9, 12⟩ block on this map?',
        answer: { type: 'numeric', target: 15, tol: 0.4, atX: 9, prompt: 'Diagonal length' },
        hints: ['√(81+144) = 15'],
        workedSolution: '√(9²+12²) = 15. Same as 3 × 5 from the 3-4-5 triangle.'
      };
    }
  });

  add({
    id: 'hv-comp-from-mag', family: 'linear', title: 'All Length in One Direction',
    context: 'A runway is perfectly east–west. A takeoff roll of 10 units of length is entirely in the east component.',
    xLabel: 'Run length', yLabel: 'East component',
    xMin: 0, xMax: 12, form: 'y = x',
    symbolGlossary: [
      { sym: 'x', mean: 'total length along the runway' },
      { sym: 'y', mean: 'east component (equal to length if pure east)' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    build() {
      return {
        question: 'A 10-unit roll that is only east: what is the east component of that displacement?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 10, prompt: 'East component' },
        hints: ['All of the length is east'],
        workedSolution: '⟨10, 0⟩ has east component 10 — the same as its magnitude.'
      };
    }
  });

  add({
    id: 'hv-zero', family: 'linear', title: 'Standing Still',
    context: 'If you do not move, your displacement is the zero vector ⟨0, 0⟩. There is no length and no direction.',
    xLabel: 'Any reference', yLabel: 'Displacement length',
    xMin: 0, xMax: 5, form: 'y = 0',
    symbolGlossary: [{ sym: 'y', mean: 'magnitude of the zero displacement' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'If you never leave the starting point, how long is your displacement vector?',
        answer: { type: 'numeric', target: 0, tol: 0.05, atX: 1, prompt: 'Displacement length' },
        hints: ['No movement → length 0'],
        workedSolution: '⟨0, 0⟩ has magnitude 0. It is the only vector without a direction.'
      };
    }
  });

  add({
    id: 'hv-dot-idea', family: 'linear', title: 'Right-Angle Paths',
    context: 'One path goes only east ⟨3, 0⟩; another only north ⟨0, 4⟩. Paths at right angles have dot product zero.',
    xLabel: 'Reference', yLabel: 'Dot product',
    xMin: 0, xMax: 5, form: 'y = 0',
    symbolGlossary: [{ sym: 'y', mean: '⟨3,0⟩·⟨0,4⟩' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'What is the dot product of a pure-east move ⟨3, 0⟩ and a pure-north move ⟨0, 4⟩?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 1, prompt: 'Dot product' },
        hints: ['3·0 + 0·4 = 0'],
        workedSolution: '3·0 + 0·4 = 0. Perpendicular vectors have dot product 0.'
      };
    }
  });

  add({
    id: 'hv-dot-2', family: 'linear', title: 'How Much Do Two Pushes Align?',
    context: 'The dot product mixes two vectors component-wise. For pushes ⟨2, 3⟩ and ⟨4, 1⟩ it is 2·4 + 3·1.',
    xLabel: 'Reference', yLabel: 'Dot product value',
    xMin: 0, xMax: 5, form: 'y = 11',
    symbolGlossary: [{ sym: 'y', mean: '⟨2,3⟩·⟨4,1⟩' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 11, max: 11, step: 1 }],
    eval: (p, x) => 11,
    build() {
      return {
        question: 'Compute 2×4 + 3×1 for the pair of pushes ⟨2, 3⟩ and ⟨4, 1⟩. What number do you get?',
        answer: { type: 'numeric', target: 11, tol: 0.3, atX: 2, prompt: 'Dot product' },
        hints: ['8 + 3 = 11'],
        workedSolution: 'Dot product = 2·4 + 3·1 = 8 + 3 = 11. Larger shared direction means a larger positive dot product.'
      };
    }
  });

  add({
    id: 'hv-mag-7', family: 'trig', title: 'TV Screen Diagonal',
    context: 'A screen is 8 units wide and 15 units tall. The diagonal is the magnitude of ⟨8, 15⟩.',
    xLabel: 'Width', yLabel: 'Diagonal',
    xMin: 0, xMax: 12, form: 'y = √(x² + 225)',
    symbolGlossary: [
      { sym: 'x', mean: 'width' },
      { sym: 'y', mean: 'diagonal when height is 15' }
    ],
    paramDefs: [{ key: 'a', label: 'height', min: 15, max: 15, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 225),
    build() {
      return {
        question: 'How long is the diagonal of an 8-by-15 screen?',
        answer: { type: 'numeric', target: 17, tol: 0.4, atX: 8, prompt: 'Diagonal length' },
        hints: ['√(64+225) = 17'],
        workedSolution: '√(8²+15²) = √289 = 17 (8-15-17 triple).'
      };
    }
  });

  add({
    id: 'hv-scale-2', family: 'linear', title: 'Half Speed',
    context: 'A velocity has an eastward part of 6. You throttle to half speed, so every component is cut in half — including the eastward part.',
    xLabel: 'Original east speed', yLabel: 'Half east speed',
    xMin: 0, xMax: 10, form: 'y = 0.5x',
    symbolGlossary: [
      { sym: 'x', mean: 'original eastward component of velocity' },
      { sym: 'y', mean: 'eastward component after scaling by 1/2' }
    ],
    paramDefs: [{ key: 'm', label: 'scale k', min: 0.5, max: 0.5, step: 0.1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0.5 * x,
    build() {
      return {
        question: 'Original eastward speed component is 6. After cutting the whole velocity in half, what is the new eastward component?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 6, prompt: 'New east component' },
        hints: ['Half of 6 is 3', '½⟨6, 4⟩ = ⟨3, 2⟩'],
        workedSolution: 'Scalar ½ multiplies each component: ½⟨6, 4⟩ = ⟨3, 2⟩. The eastward part becomes 3.'
      };
    }
  });

  add({
    id: 'hv-parallel', family: 'linear', title: 'Same Direction, Longer',
    context: 'Two moves point the same way along a road. The longer one is exactly twice the shorter ⟨2, 0⟩, so it is ⟨4, 0⟩.',
    xLabel: 'Shorter east component', yLabel: 'Longer east component',
    xMin: 0, xMax: 6, form: 'y = 2x',
    symbolGlossary: [
      { sym: 'x', mean: 'component of the shorter vector' },
      { sym: 'y', mean: 'matching component when scaled by 2' }
    ],
    paramDefs: [{ key: 'm', label: 'scale', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'A short move is 2 units east. A parallel move twice as long goes how far east?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 2, prompt: 'Longer east component' },
        hints: ['2 × 2 = 4'],
        workedSolution: '2⟨2, 0⟩ = ⟨4, 0⟩. Parallel vectors are scalar multiples of each other.'
      };
    }
  });

  add({
    id: 'hv-mag-8', family: 'trig', title: 'Treasure Map Distance',
    context: 'A map says the treasure is 7 paces east and 24 paces north of the oak tree. How far is the straight walk?',
    xLabel: 'East paces', yLabel: 'Straight paces',
    xMin: 0, xMax: 10, form: 'y = √(x² + 576)',
    symbolGlossary: [
      { sym: 'x', mean: 'east paces' },
      { sym: 'y', mean: 'straight-line paces when north is 24' }
    ],
    paramDefs: [{ key: 'a', label: 'north', min: 24, max: 24, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 576),
    build() {
      return {
        question: 'How many paces is the straight path for 7 east and 24 north?',
        answer: { type: 'numeric', target: 25, tol: 0.5, atX: 7, prompt: 'Straight-line paces' },
        hints: ['√(49+576) = 25'],
        workedSolution: '√(7²+24²) = √625 = 25 paces. Magnitude of the position vector is distance from the origin (the oak).'
      };
    }
  });

  add({
    id: 'hv-comp-sum', family: 'linear', title: 'Delivery Van East',
    context: 'A van drives 3 km east to a stop, then 5 km further east to a warehouse. Total east from the depot is the sum.',
    xLabel: 'First leg east (km)', yLabel: 'Total east (km)',
    xMin: 0, xMax: 10, form: 'y = x + 5',
    symbolGlossary: [
      { sym: 'x', mean: 'first east leg' },
      { sym: 'y', mean: 'total east after +5 km' }
    ],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'second leg', min: 5, max: 5, step: 1 }],
    eval: (p, x) => x + 5,
    build() {
      return {
        question: 'After 3 km east and then 5 km more east, how far east is the van from the depot?',
        answer: { type: 'numeric', target: 8, tol: 0.2, atX: 3, prompt: 'Total east (km)' },
        hints: ['3 + 5 = 8'],
        workedSolution: 'East components add: 3 + 5 = 8 km east of the depot.'
      };
    }
  });

  add({
    id: 'hv-mag-9', family: 'trig', title: 'Ramp Length',
    context: 'A ramp rises 5 m over a 12 m horizontal run. The sloping surface length is the magnitude of ⟨12, 5⟩.',
    xLabel: 'Horizontal run (m)', yLabel: 'Ramp length (m)',
    xMin: 0, xMax: 14, form: 'y = √(x² + 25)',
    symbolGlossary: [
      { sym: 'x', mean: 'horizontal run' },
      { sym: 'y', mean: 'slope length when rise is 5 m' }
    ],
    paramDefs: [{ key: 'a', label: 'rise', min: 5, max: 5, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 25),
    build() {
      return {
        question: 'How long is the sloping surface of a ramp with 12 m run and 5 m rise?',
        answer: { type: 'numeric', target: 13, tol: 0.3, atX: 12, prompt: 'Ramp length (m)' },
        hints: ['√(144+25) = 13'],
        workedSolution: '√(12²+5²) = √169 = 13 m.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
