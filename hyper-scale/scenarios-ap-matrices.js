/** AP — Matrices (25) stranger-test */
(function () {
  const T = [];
  const L = 'ap', U = 'matrices';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  add({
    id: 'ap-mat-entry', family: 'linear', title: 'Reading One Entry',
    context: 'A 2×2 matrix stores four numbers in rows and columns. The entry in row 1, column 2 of [[3, 5], [7, 9]] is 5.',
    xLabel: 'Reference', yLabel: 'Entry value',
    xMin: 0, xMax: 5, form: 'y = 5',
    symbolGlossary: [{ sym: 'y', mean: 'a₁₂ entry' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5,
    build() {
      return {
        question: 'In matrix [[3, 5], [7, 9]], what number sits in row 1, column 2?',
        answer: { type: 'numeric', target: 5, tol: 0.1, atX: 1, prompt: 'Entry' },
        hints: ['First row is 3, 5'],
        workedSolution: 'Row 1 is [3, 5]. Column 2 of that row is 5.'
      };
    }
  });

  add({
    id: 'ap-mat-a21', family: 'linear', title: 'Lower-Left Entry',
    context: 'In [[2, 4], [6, 8]], the lower-left entry (row 2, column 1) is 6.',
    xLabel: 'Reference', yLabel: 'Value',
    xMin: 0, xMax: 5, form: 'y = 6',
    symbolGlossary: [{ sym: 'y', mean: 'a₂₁' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 6, max: 6, step: 1 }],
    eval: (p, x) => 6,
    build() {
      return {
        question: 'What is the entry in row 2, column 1 of [[2, 4], [6, 8]]?',
        answer: { type: 'numeric', target: 6, tol: 0.1, atX: 1, prompt: 'Entry' },
        hints: ['Second row starts with 6'],
        workedSolution: 'a₂₁ = 6.'
      };
    }
  });

  add({
    id: 'ap-mat-det', family: 'linear', title: 'Determinant as Area Factor',
    context: 'For [[a, b], [c, d]] the determinant is ad − bc. For [[3, 0], [0, 4]] that is 12 — related to area scaling.',
    xLabel: 'Reference', yLabel: 'det',
    xMin: 0, xMax: 5, form: 'y = 12',
    symbolGlossary: [{ sym: 'y', mean: 'ad − bc' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 12, max: 12, step: 1 }],
    eval: (p, x) => 12,
    build() {
      return {
        question: 'Compute 3·4 − 0·0 for [[3, 0], [0, 4]].',
        answer: { type: 'numeric', target: 12, tol: 0.3, atX: 1, prompt: 'Determinant' },
        hints: ['ad − bc = 12 − 0'],
        workedSolution: 'det = 3·4 − 0·0 = 12. A diagonal matrix’s determinant is the product of the diagonal entries.'
      };
    }
  });

  add({
    id: 'ap-mat-det2', family: 'linear', title: 'Determinant With Off-Diagonals',
    context: '[[2, 3], [1, 4]] has det = 2·4 − 3·1 = 5.',
    xLabel: 'Reference', yLabel: 'det',
    xMin: 0, xMax: 5, form: 'y = 5',
    symbolGlossary: [{ sym: 'y', mean: 'ad − bc' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5,
    build() {
      return {
        question: 'What is 2·4 − 3·1?',
        answer: { type: 'numeric', target: 5, tol: 0.2, atX: 1, prompt: 'det' },
        hints: ['8 − 3 = 5'],
        workedSolution: 'det = 8 − 3 = 5.'
      };
    }
  });

  add({
    id: 'ap-mat-zero-det', family: 'linear', title: 'Singular Matrix',
    context: '[[2, 4], [1, 2]] has proportional rows. det = 2·2 − 4·1 = 0 — the matrix is singular.',
    xLabel: 'Reference', yLabel: 'det',
    xMin: 0, xMax: 5, form: 'y = 0',
    symbolGlossary: [{ sym: 'y', mean: 'determinant 0' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 0,
    build() {
      return {
        question: 'Value of 2·2 − 4·1?',
        answer: { type: 'numeric', target: 0, tol: 0.1, atX: 1, prompt: 'det' },
        hints: ['4 − 4 = 0'],
        workedSolution: 'det = 0. The rows are multiples; the matrix does not invert.'
      };
    }
  });

  add({
    id: 'ap-mat-id', family: 'linear', title: 'Identity Diagonal',
    context: 'The 2×2 identity [[1, 0], [0, 1]] has 1s on the diagonal. det = 1.',
    xLabel: 'Reference', yLabel: 'det',
    xMin: 0, xMax: 5, form: 'y = 1',
    symbolGlossary: [{ sym: 'y', mean: 'det(I) = 1' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 1, max: 1, step: 1 }],
    eval: (p, x) => 1,
    build() {
      return {
        question: 'Determinant of the 2×2 identity matrix?',
        answer: { type: 'numeric', target: 1, tol: 0.1, atX: 1, prompt: 'det' },
        hints: ['1·1 − 0·0 = 1'],
        workedSolution: 'det(I) = 1. Multiplying by I leaves vectors unchanged.'
      };
    }
  });

  add({
    id: 'ap-mat-scale', family: 'linear', title: 'Scale a Vector',
    context: 'Matrix [[2, 0], [0, 2]] scales every vector by 2. The image of ⟨3, 0⟩ has first component 6.',
    xLabel: 'Original x-component', yLabel: '2x',
    xMin: 0, xMax: 6, form: 'y = 2x',
    symbolGlossary: [{ sym: 'x', mean: 'input component' }, { sym: 'y', mean: 'scaled component' }],
    paramDefs: [{ key: 'm', label: 'k', min: 2, max: 2, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 2 * x,
    build() {
      return {
        question: 'After scaling ⟨3, 0⟩ by 2, what is the first component?',
        answer: { type: 'numeric', target: 6, tol: 0.2, atX: 3, prompt: 'New x' },
        hints: ['2 · 3 = 6'],
        workedSolution: '[[2,0],[0,2]]⟨3,0⟩ = ⟨6,0⟩.'
      };
    }
  });

  add({
    id: 'ap-mat-trace', family: 'linear', title: 'Sum of Diagonal',
    context: 'The trace of [[5, 1], [2, 7]] is 5 + 7 = 12 (sum of diagonal entries).',
    xLabel: 'Reference', yLabel: 'trace',
    xMin: 0, xMax: 5, form: 'y = 12',
    symbolGlossary: [{ sym: 'y', mean: 'a₁₁ + a₂₂' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 12, max: 12, step: 1 }],
    eval: (p, x) => 12,
    build() {
      return {
        question: 'What is 5 + 7 for the diagonal of [[5, 1], [2, 7]]?',
        answer: { type: 'numeric', target: 12, tol: 0.3, atX: 1, prompt: 'Trace' },
        hints: ['Add diagonal entries'],
        workedSolution: 'Trace = 5 + 7 = 12.'
      };
    }
  });

  // More compact remaining items
  const extras = [
    ['ap-mat-a11', 'Top-Left Entry', '[[9, 2], [3, 4]] top-left is 9.', 9, 'Row 1 col 1'],
    ['ap-mat-a22', 'Bottom-Right Entry', '[[1, 2], [3, 8]] bottom-right is 8.', 8, 'Row 2 col 2'],
    ['ap-mat-det3', 'Det 1·4 − 0·0', '[[1, 0], [0, 4]] det = 4.', 4, '1·4 − 0'],
    ['ap-mat-det4', 'Det 5·2 − 1·3', '[[5, 1], [3, 2]] det = 7.', 7, '10 − 3'],
    ['ap-mat-neg', 'Negative Det', '[[0, 1], [1, 0]] det = −1.', -1, '0 − 1'],
    ['ap-mat-row1sum', 'Sum First Row', '[[2, 5], [0, 0]] first row sums to 7.', 7, '2+5'],
    ['ap-mat-col1sum', 'Sum First Column', '[[3, 0], [4, 0]] first column sums to 7.', 7, '3+4'],
    ['ap-mat-scale3', 'Triple Scale', 'Scale 4 by 3 → 12.', 12, '3·4'],
    ['ap-mat-zero', 'Zero Matrix Entry', '[[0, 0], [0, 0]] any entry is 0.', 0, 'All zeros'],
    ['ap-mat-det5', 'Det 6·1 − 2·2', '[[6, 2], [2, 1]] det = 2.', 2, '6−4'],
    ['ap-mat-2x', 'Double Diagonal Product', '[[2, 0], [0, 5]] det = 10.', 10, '2·5'],
    ['ap-mat-a12', 'Top-Right', '[[0, 11], [0, 0]] top-right is 11.', 11, 'Row1 col2'],
    ['ap-mat-det6', 'Det 3·3 − 1·1', '[[3, 1], [1, 3]] det = 8.', 8, '9−1'],
    ['ap-mat-half', 'Half Scale', 'Half of 10 is 5.', 5, '0.5·10'],
    ['ap-mat-det7', 'Det 4·5 − 2·3', '[[4, 2], [3, 5]] det = 14.', 14, '20−6'],
    ['ap-mat-id2', 'Identity a11', 'Identity top-left is 1.', 1, 'I has 1s on diagonal'],
    ['ap-mat-det8', 'Det 7·2 − 0·1', '[[7, 0], [1, 2]] det = 14.', 14, '14−0']
  ];

  extras.forEach(([id, title, ctx, target, hint]) => {
    add({
      id, family: 'linear', title,
      context: ctx + ' Matrices organize numbers; determinants and entries show up in area and linear systems.',
      xLabel: 'Reference', yLabel: 'Value',
      xMin: 0, xMax: 5, form: 'y = ' + target,
      symbolGlossary: [{ sym: 'y', mean: 'the requested matrix number' }],
      paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: target, max: target, step: 1 }],
      eval: (p, x) => target,
      build() {
        return {
          question: ctx.replace(/\.$/, '') + ' What is that number?',
          answer: { type: 'numeric', target, tol: Math.max(0.15, Math.abs(target) * 0.05), atX: 1, prompt: 'Value' },
          hints: [hint],
          workedSolution: ctx + ' The answer is ' + target + '.'
        };
      }
    });
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
