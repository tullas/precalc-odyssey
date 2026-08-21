/** Honors — Vectors intro (25 unique) */
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

  // Magnitude from components: |v| = sqrt(x^2+y^2) — graph y as height component vs x
  add({
    id: 'hv-mag-1', family: 'trig', title: 'How Long Is the Arrow?',
    context: 'A vector has components ⟨3, 4⟩. Its length (magnitude) is the straight-line distance from tip to tail — a 3-4-5 triangle.',
    xLabel: 'Horizontal component idea (x)', yLabel: 'Related length √(x²+16) with fixed 4',
    xMin: 0, xMax: 6, form: 'y = √(x² + 16)',
    symbolGlossary: [
      { sym: 'x', mean: 'one component (here horizontal)' },
      { sym: 'y', mean: 'magnitude when the other component is 4' }
    ],
    paramDefs: [{ key: 'a', label: 'fixed component', min: 4, max: 4, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 16),
    build() {
      return {
        question: 'For ⟨3, 4⟩, what is the magnitude?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 3, prompt: '|⟨3,4⟩|' },
        hints: ['√(9+16) = √25 = 5'],
        workedSolution: 'Magnitude |v| = √(3² + 4²) = √(9+16) = √25 = 5. On the graph, at x = 3 you read y = 5.'
      };
    }
  });

  add({
    id: 'hv-mag-2', family: 'trig', title: 'Unit-Style Length',
    context: 'Vector ⟨6, 8⟩ is a scaled 3-4-5. Magnitude should be 10.',
    xLabel: 'x-component', yLabel: '√(x²+64)',
    xMin: 0, xMax: 10, form: 'y = √(x² + 64)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal component' }, { sym: 'y', mean: 'magnitude if vertical is 8' }],
    paramDefs: [{ key: 'a', label: 'a', min: 8, max: 8, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 64),
    build() {
      return {
        question: 'Magnitude of ⟨6, 8⟩?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 6, prompt: '|⟨6,8⟩|' },
        hints: ['√(36+64) = √100 = 10'],
        workedSolution: '√(36+64) = 10. Same shape as ⟨3,4⟩ scaled by 2.'
      };
    }
  });

  add({
    id: 'hv-mag-3', family: 'trig', title: 'Horizontal-Only Vector',
    context: '⟨5, 0⟩ points only along the x-direction. Its length is just 5.',
    xLabel: 'x-component', yLabel: '√(x²+0)',
    xMin: 0, xMax: 8, form: 'y = |x|',
    symbolGlossary: [{ sym: 'x', mean: 'only nonzero component' }, { sym: 'y', mean: 'magnitude' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => Math.abs(x),
    build() {
      return {
        question: 'Magnitude of ⟨5, 0⟩?',
        answer: { type: 'numeric', target: 5, tol: 0.15, atX: 5, prompt: '|⟨5,0⟩|' },
        hints: ['√(25+0) = 5'],
        workedSolution: '√(5² + 0²) = 5. A vector along one axis has magnitude equal to the absolute value of that component.'
      };
    }
  });

  add({
    id: 'hv-add-x', family: 'linear', title: 'Adding Horizontal Parts',
    context: 'When you add vectors, components add separately. ⟨2, 0⟩ + ⟨5, 0⟩ has horizontal sum 7.',
    xLabel: 'First horizontal (x)', yLabel: 'x + 5',
    xMin: 0, xMax: 10, form: 'y = x + 5',
    symbolGlossary: [{ sym: 'x', mean: 'first vector’s x-component' }, { sym: 'y', mean: 'sum of x-components (second is 5)' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 5, max: 5, step: 1 }],
    eval: (p, x) => x + 5,
    build() {
      return {
        question: 'If the first x-component is 2 and the second is 5, what is the resultant x-component?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 2, prompt: 'Resultant x' },
        hints: ['2 + 5 = 7'],
        workedSolution: 'Vector addition: ⟨a, b⟩ + ⟨c, d⟩ = ⟨a+c, b+d⟩. Here x-parts: 2+5 = 7.'
      };
    }
  });

  add({
    id: 'hv-add-y', family: 'linear', title: 'Adding Vertical Parts',
    context: 'Same idea for vertical components: 3 + 4 = 7.',
    xLabel: 'First vertical (x)', yLabel: 'x + 4',
    xMin: 0, xMax: 10, form: 'y = x + 4',
    symbolGlossary: [{ sym: 'x', mean: 'first y-component' }, { sym: 'y', mean: 'sum of y-components' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 4, max: 4, step: 1 }],
    eval: (p, x) => x + 4,
    build() {
      return {
        question: 'y-components 3 and 4: what is the total y-component?',
        answer: { type: 'numeric', target: 7, tol: 0.2, atX: 3, prompt: 'Resultant y' },
        hints: ['3 + 4 = 7'],
        workedSolution: 'Vertical parts add: 3 + 4 = 7. Resultant would be ⟨…, 7⟩ for those parts.'
      };
    }
  });

  add({
    id: 'hv-scale', family: 'linear', title: 'Stretching a Vector',
    context: 'Scalar multiplication: 3⟨2, 0⟩ = ⟨6, 0⟩. Length also scales by |3|.',
    xLabel: 'Original x-component', yLabel: '3x',
    xMin: 0, xMax: 5, form: 'y = 3x',
    symbolGlossary: [{ sym: 'x', mean: 'original component' }, { sym: 'y', mean: 'scaled component' }],
    paramDefs: [{ key: 'm', label: 'scalar', min: 3, max: 3, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 3 * x,
    build() {
      return {
        question: 'What is the x-component of 3⟨2, 1⟩?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 2, prompt: 'Scaled x' },
        hints: ['3 × 2 = 6'],
        workedSolution: 'k⟨a, b⟩ = ⟨ka, kb⟩. So 3⟨2, 1⟩ = ⟨6, 3⟩. The x-part is 6.'
      };
    }
  });

  add({
    id: 'hv-scale-mag', family: 'linear', title: 'Length After Scaling',
    context: 'If |u| = 5 and you scale by 2, the new magnitude is 10.',
    xLabel: 'Original magnitude (x)', yLabel: '2x',
    xMin: 0, xMax: 8, form: 'y = 2x',
    symbolGlossary: [{ sym: 'x', mean: 'original |v|' }, { sym: 'y', mean: 'scaled magnitude' }],
    paramDefs: [{ key: 'm', label: 'k', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'Original magnitude 5, scalar 2: new magnitude?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 5, prompt: 'New |v|' },
        hints: ['|k| · |v| = 2 · 5 = 10'],
        workedSolution: '|k v| = |k| · |v|. Positive scalar 2 doubles length from 5 to 10.'
      };
    }
  });

  add({
    id: 'hv-mag-4', family: 'trig', title: 'Equal Components',
    context: '⟨5, 5⟩ has magnitude 5√2 ≈ 7.07.',
    xLabel: 'component a', yLabel: '√(a²+a²)=a√2',
    xMin: 0, xMax: 8, form: 'y = x√2',
    symbolGlossary: [{ sym: 'x', mean: 'each equal component' }, { sym: 'y', mean: 'magnitude' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }],
    eval: (p, x) => x * Math.SQRT2,
    build() {
      return {
        question: 'Approximate magnitude of ⟨5, 5⟩? (enter about 7.07)',
        answer: { type: 'numeric', target: 7.07, tol: 0.25, atX: 5, prompt: '|⟨5,5⟩|' },
        hints: ['√(25+25) = √50 = 5√2 ≈ 7.07'],
        workedSolution: '√(25+25) = √50 = 5√2 ≈ 7.07.'
      };
    }
  });

  add({
    id: 'hv-sub', family: 'linear', title: 'Subtracting Components',
    context: '⟨7, 0⟩ − ⟨2, 0⟩ = ⟨5, 0⟩. Subtraction is component-wise.',
    xLabel: 'First x', yLabel: 'x − 2',
    xMin: 2, xMax: 12, form: 'y = x − 2',
    symbolGlossary: [{ sym: 'x', mean: 'first x-component' }, { sym: 'y', mean: 'difference of x-parts' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: -2, max: -2, step: 1 }],
    eval: (p, x) => x - 2,
    build() {
      return {
        question: '7 − 2 for the x-parts: result?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 7, prompt: 'Resultant x' },
        hints: ['7 − 2 = 5'],
        workedSolution: '⟨7, …⟩ − ⟨2, …⟩ has x-component 5.'
      };
    }
  });

  add({
    id: 'hv-unit-x', family: 'linear', title: 'Unit Vector in x',
    context: 'The unit vector î is ⟨1, 0⟩ — length 1, pointing right.',
    xLabel: 'scale of î', yLabel: 'x-component',
    xMin: 0, xMax: 5, form: 'y = x',
    symbolGlossary: [{ sym: 'x', mean: 'how many unit steps right' }, { sym: 'y', mean: 'x-component of x·î' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    build() {
      return {
        question: 'x-component of 4⟨1, 0⟩?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 4, prompt: 'x-component' },
        hints: ['4 × 1 = 4'],
        workedSolution: '4 î = ⟨4, 0⟩. The horizontal component is 4.'
      };
    }
  });

  add({
    id: 'hv-mag-5', family: 'trig', title: '5-12-13 Vector',
    context: '⟨5, 12⟩ is a classic triple. Magnitude 13.',
    xLabel: 'x-component', yLabel: '√(x²+144)',
    xMin: 0, xMax: 8, form: 'y = √(x² + 144)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'magnitude if vertical is 12' }],
    paramDefs: [{ key: 'a', label: 'a', min: 12, max: 12, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 144),
    build() {
      return {
        question: 'Magnitude of ⟨5, 12⟩?',
        answer: { type: 'numeric', target: 13, tol: 0.3, atX: 5, prompt: '|⟨5,12⟩|' },
        hints: ['√(25+144) = √169 = 13'],
        workedSolution: '√(25+144) = 13.'
      };
    }
  });

  add({
    id: 'hv-dir-east', family: 'linear', title: 'Direction as Ratio',
    context: 'For a vector along the positive x-axis, the “rise over run” is 0 — pure horizontal.',
    xLabel: 'run (x)', yLabel: 'rise = 0',
    xMin: 1, xMax: 10, form: 'y = 0',
    symbolGlossary: [{ sym: 'x', mean: 'run' }, { sym: 'y', mean: 'rise (0 for horizontal)' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'Vertical component of a purely eastward vector of any length?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 5, prompt: 'y-component' },
        hints: ['No vertical part → 0'],
        workedSolution: 'A horizontal vector has the form ⟨a, 0⟩. The y-component is always 0.'
      };
    }
  });

  add({
    id: 'hv-result-mag', family: 'trig', title: 'Resultant Length',
    context: 'After adding ⟨3, 0⟩ + ⟨0, 4⟩ you get ⟨3, 4⟩ with magnitude 5.',
    xLabel: 'x of resultant', yLabel: '√(x²+16)',
    xMin: 0, xMax: 6, form: 'y = √(x² + 16)',
    symbolGlossary: [{ sym: 'x', mean: 'resultant x' }, { sym: 'y', mean: 'resultant magnitude' }],
    paramDefs: [{ key: 'a', label: 'a', min: 4, max: 4, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 16),
    build() {
      return {
        question: 'Magnitude of ⟨3, 4⟩ (sum of ⟨3,0⟩ and ⟨0,4⟩)?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 3, prompt: 'Resultant |v|' },
        hints: ['√(9+16) = 5'],
        workedSolution: 'Sum is ⟨3, 4⟩; |⟨3,4⟩| = 5. Perpendicular components form a right triangle.'
      };
    }
  });

  add({
    id: 'hv-neg', family: 'linear', title: 'Opposite Vector',
    context: '−⟨3, 0⟩ = ⟨−3, 0⟩. Opposite direction, same length.',
    xLabel: 'original x', yLabel: '−x',
    xMin: -5, xMax: 5, form: 'y = −x',
    symbolGlossary: [{ sym: 'x', mean: 'original component' }, { sym: 'y', mean: 'negated component' }],
    paramDefs: [{ key: 'm', label: 'm', min: -1, max: -1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => -x,
    build() {
      return {
        question: 'x-component of −⟨3, 2⟩?',
        answer: { type: 'numeric', target: -3, tol: 0.15, atX: 3, prompt: 'Negated x' },
        hints: ['−3'],
        workedSolution: '−⟨3, 2⟩ = ⟨−3, −2⟩. The x-component is −3.'
      };
    }
  });

  add({
    id: 'hv-mag-6', family: 'trig', title: 'Integer Magnitude',
    context: '⟨9, 12⟩ scales ⟨3, 4⟩ by 3 → magnitude 15.',
    xLabel: 'x', yLabel: '√(x²+144)',
    xMin: 0, xMax: 12, form: 'y = √(x² + 144)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'magnitude' }],
    paramDefs: [{ key: 'a', label: 'a', min: 12, max: 12, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 144),
    build() {
      return {
        question: '|⟨9, 12⟩|?',
        answer: { type: 'numeric', target: 15, tol: 0.4, atX: 9, prompt: 'Magnitude' },
        hints: ['√(81+144) = √225 = 15'],
        workedSolution: '√(81+144) = 15. Or 3×|⟨3,4⟩| = 15.'
      };
    }
  });

  add({
    id: 'hv-comp-from-mag', family: 'linear', title: 'Component Along an Axis',
    context: 'A vector of length 10 pointing purely right has x-component 10.',
    xLabel: 'magnitude (x)', yLabel: 'x-component if horizontal',
    xMin: 0, xMax: 12, form: 'y = x',
    symbolGlossary: [{ sym: 'x', mean: 'magnitude' }, { sym: 'y', mean: 'x-component when aligned with x-axis' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x,
    build() {
      return {
        question: 'Horizontal vector length 10: what is its x-component?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 10, prompt: 'x-component' },
        hints: ['All of the length is horizontal'],
        workedSolution: '⟨10, 0⟩ has x-component equal to the magnitude 10.'
      };
    }
  });

  add({
    id: 'hv-zero', family: 'linear', title: 'Zero Vector',
    context: 'The zero vector ⟨0, 0⟩ has magnitude 0 — no direction.',
    xLabel: 'dummy x', yLabel: 'magnitude 0',
    xMin: 0, xMax: 5, form: 'y = 0',
    symbolGlossary: [{ sym: 'y', mean: 'magnitude of zero vector' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'Magnitude of ⟨0, 0⟩?',
        answer: { type: 'numeric', target: 0, tol: 0.05, atX: 1, prompt: '|0|' },
        hints: ['√(0+0) = 0'],
        workedSolution: '√(0²+0²) = 0. The zero vector is the only vector with no direction.'
      };
    }
  });

  add({
    id: 'hv-dot-idea', family: 'linear', title: 'Perpendicular Hint',
    context: 'If two vectors are perpendicular, their dot product is 0. For ⟨3, 0⟩ and ⟨0, 4⟩: 3·0 + 0·4 = 0.',
    xLabel: 'x', yLabel: 'constant 0',
    xMin: 0, xMax: 5, form: 'y = 0',
    symbolGlossary: [{ sym: 'y', mean: 'dot product for this pair' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'Dot product ⟨3,0⟩·⟨0,4⟩?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 1, prompt: 'Dot product' },
        hints: ['3·0 + 0·4 = 0'],
        workedSolution: 'a·b = a₁b₁ + a₂b₂ = 0. Perpendicular vectors have dot product zero.'
      };
    }
  });

  add({
    id: 'hv-dot-2', family: 'linear', title: 'Dot Product Value',
    context: '⟨2, 3⟩ · ⟨4, 1⟩ = 2·4 + 3·1 = 11.',
    xLabel: 'first x-component', yLabel: '2·4 + 3·1 style fixed',
    xMin: 0, xMax: 5, form: 'y = 8 + 3 (constant 11)',
    symbolGlossary: [{ sym: 'y', mean: 'dot product result' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 11, max: 11, step: 1 }],
    eval: (p, x) => 11,
    build() {
      return {
        question: 'What is ⟨2, 3⟩ · ⟨4, 1⟩?',
        answer: { type: 'numeric', target: 11, tol: 0.3, atX: 2, prompt: 'Dot product' },
        hints: ['8 + 3 = 11'],
        workedSolution: '2×4 + 3×1 = 8 + 3 = 11.'
      };
    }
  });

  add({
    id: 'hv-mag-7', family: 'trig', title: 'Another Magnitude',
    context: '⟨8, 15⟩ has magnitude 17 (8-15-17 triple).',
    xLabel: 'x', yLabel: '√(x²+225)',
    xMin: 0, xMax: 12, form: 'y = √(x² + 225)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'magnitude' }],
    paramDefs: [{ key: 'a', label: 'a', min: 15, max: 15, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 225),
    build() {
      return {
        question: '|⟨8, 15⟩|?',
        answer: { type: 'numeric', target: 17, tol: 0.4, atX: 8, prompt: 'Magnitude' },
        hints: ['√(64+225) = √289 = 17'],
        workedSolution: '√(64+225) = 17.'
      };
    }
  });

  add({
    id: 'hv-scale-2', family: 'linear', title: 'Half Vector',
    context: '½⟨6, 0⟩ = ⟨3, 0⟩.',
    xLabel: 'original x', yLabel: '0.5x',
    xMin: 0, xMax: 10, form: 'y = 0.5x',
    symbolGlossary: [{ sym: 'x', mean: 'original' }, { sym: 'y', mean: 'half' }],
    paramDefs: [{ key: 'm', label: 'k', min: 0.5, max: 0.5, step: 0.1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0.5 * x,
    build() {
      return {
        question: 'x-component of ½⟨6, 4⟩?',
        answer: { type: 'numeric', target: 3, tol: 0.15, atX: 6, prompt: 'Half of 6' },
        hints: ['6/2 = 3'],
        workedSolution: '½⟨6, 4⟩ = ⟨3, 2⟩. x-component is 3.'
      };
    }
  });

  add({
    id: 'hv-parallel', family: 'linear', title: 'Parallel Means Scalar',
    context: '⟨4, 0⟩ is parallel to ⟨2, 0⟩ because one is 2 times the other.',
    xLabel: 'smaller x', yLabel: '2x',
    xMin: 0, xMax: 6, form: 'y = 2x',
    symbolGlossary: [{ sym: 'x', mean: 'component of shorter vector' }, { sym: 'y', mean: 'matching component of parallel longer vector' }],
    paramDefs: [{ key: 'm', label: 'k', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'If ⟨2, 0⟩ is scaled by 2, new x-component?',
        answer: { type: 'numeric', target: 4, tol: 0.15, atX: 2, prompt: 'Scaled x' },
        hints: ['2 × 2 = 4'],
        workedSolution: '2⟨2, 0⟩ = ⟨4, 0⟩. Parallel vectors are scalar multiples of each other.'
      };
    }
  });

  add({
    id: 'hv-mag-8', family: 'trig', title: 'Distance as Magnitude',
    context: 'Displacement from origin to (7, 24) is vector ⟨7, 24⟩ with length 25.',
    xLabel: 'x', yLabel: '√(x²+576)',
    xMin: 0, xMax: 10, form: 'y = √(x² + 576)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal displacement' }, { sym: 'y', mean: 'distance from origin' }],
    paramDefs: [{ key: 'a', label: 'a', min: 24, max: 24, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 576),
    build() {
      return {
        question: 'Distance from (0,0) to (7, 24)?',
        answer: { type: 'numeric', target: 25, tol: 0.5, atX: 7, prompt: 'Distance' },
        hints: ['√(49+576) = √625 = 25'],
        workedSolution: '√(49+576) = 25. Magnitude of the position vector is the distance from the origin.'
      };
    }
  });

  add({
    id: 'hv-comp-sum', family: 'linear', title: 'Total Displacement East',
    context: 'Walk 3 east, then 5 east: total east component 8.',
    xLabel: 'first east (x)', yLabel: 'x+5',
    xMin: 0, xMax: 10, form: 'y = x + 5',
    symbolGlossary: [{ sym: 'x', mean: 'first leg east' }, { sym: 'y', mean: 'total east' }],
    paramDefs: [{ key: 'm', label: 'm', min: 1, max: 1, step: 1 }, { key: 'c', label: 'c', min: 5, max: 5, step: 1 }],
    eval: (p, x) => x + 5,
    build() {
      return {
        question: 'Total eastward component after 3 then 5?',
        answer: { type: 'numeric', target: 8, tol: 0.2, atX: 3, prompt: 'Total east' },
        hints: ['3+5=8'],
        workedSolution: 'Components add: 3 + 5 = 8 east.'
      };
    }
  });

  add({
    id: 'hv-mag-9', family: 'trig', title: 'Nearly Flat Vector',
    context: '⟨12, 5⟩ has magnitude 13.',
    xLabel: 'x', yLabel: '√(x²+25)',
    xMin: 0, xMax: 14, form: 'y = √(x² + 25)',
    symbolGlossary: [{ sym: 'x', mean: 'horizontal' }, { sym: 'y', mean: 'magnitude' }],
    paramDefs: [{ key: 'a', label: 'a', min: 5, max: 5, step: 1 }],
    eval: (p, x) => Math.sqrt(x * x + 25),
    build() {
      return {
        question: '|⟨12, 5⟩|?',
        answer: { type: 'numeric', target: 13, tol: 0.3, atX: 12, prompt: 'Magnitude' },
        hints: ['√(144+25) = √169 = 13'],
        workedSolution: '√(144+25) = 13.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
