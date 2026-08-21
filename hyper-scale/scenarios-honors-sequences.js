/** Honors — Sequences & Series (25 unique) */
(function () {
  const T = [];
  const L = 'honors', U = 'sequences';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  // Arithmetic: a_n = a + (n-1)d — graph vs term index n
  add({
    id: 'hs-arith-1', family: 'linear', title: 'Saving the Same Amount Each Week',
    context: 'You put away $20 the first week, then $5 more than the previous week every week after. The amount in week n follows an arithmetic pattern.',
    xLabel: 'Week number n (x)', yLabel: 'Amount that week $ (y)',
    xMin: 1, xMax: 10, form: 'y = 20 + (x − 1)·5',
    symbolGlossary: [
      { sym: 'x', mean: 'week number (term index)' },
      { sym: 'y', mean: 'amount saved that week' }
    ],
    paramDefs: [{ key: 'm', label: 'common difference', min: 5, max: 5, step: 1 }, { key: 'c', label: 'first term', min: 20, max: 20, step: 1 }],
    eval: (p, x) => 20 + (x - 1) * 5,
    build() {
      return {
        question: 'How much do you set aside in week 6?',
        answer: { type: 'numeric', target: 45, tol: 1, atX: 6, prompt: 'Week 6 amount ($)' },
        hints: ['Start 20; add 5 five times to reach week 6', '20 + 5×5 = 45'],
        workedSolution: 'Arithmetic sequence: first term a₁ = 20, common difference d = 5. Term 6 is a₁ + 5d = 20 + 25 = 45. On the graph, read y at x = 6.'
      };
    }
  });

  add({
    id: 'hs-arith-2', family: 'linear', title: 'Seats in Theater Rows',
    context: 'Row 1 has 12 seats. Each next row has 2 more seats than the one before.',
    xLabel: 'Row number (x)', yLabel: 'Seats in that row (y)',
    xMin: 1, xMax: 12, form: 'y = 12 + (x − 1)·2',
    symbolGlossary: [{ sym: 'x', mean: 'row number' }, { sym: 'y', mean: 'seats in that row' }],
    paramDefs: [{ key: 'm', label: 'd', min: 2, max: 2, step: 1 }, { key: 'c', label: 'a1', min: 12, max: 12, step: 1 }],
    eval: (p, x) => 12 + (x - 1) * 2,
    build() {
      return {
        question: 'How many seats are in row 8?',
        answer: { type: 'numeric', target: 26, tol: 1, atX: 8, prompt: 'Seats in row 8' },
        hints: ['12 + 7×2 = 12 + 14 = 26'],
        workedSolution: 'a₈ = 12 + (8−1)·2 = 12 + 14 = 26. Each step adds 2 seats; seven steps from row 1 to row 8.'
      };
    }
  });

  add({
    id: 'hs-arith-3', family: 'linear', title: 'Countdown by Tens',
    context: 'A display starts at 100 and drops by 10 each step: 100, 90, 80, …',
    xLabel: 'Step number (x)', yLabel: 'Display value (y)',
    xMin: 1, xMax: 10, form: 'y = 100 − (x − 1)·10',
    symbolGlossary: [{ sym: 'x', mean: 'step index' }, { sym: 'y', mean: 'value shown' }],
    paramDefs: [{ key: 'm', label: 'd', min: -10, max: -10, step: 1 }, { key: 'c', label: 'a1', min: 100, max: 100, step: 1 }],
    eval: (p, x) => 100 - (x - 1) * 10,
    build() {
      return {
        question: 'What value shows on step 5?',
        answer: { type: 'numeric', target: 60, tol: 1, atX: 5, prompt: 'Value at step 5' },
        hints: ['100 − 4×10 = 60'],
        workedSolution: 'Common difference d = −10. a₅ = 100 + 4·(−10) = 60.'
      };
    }
  });

  add({
    id: 'hs-geo-1', family: 'exponential', title: 'Doubling Prize',
    context: 'A contest prize starts at $50 and doubles each round.',
    xLabel: 'Round (x)', yLabel: 'Prize $ (y)',
    xMin: 1, xMax: 8, form: 'y = 50 · 2^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'round number' }, { sym: 'y', mean: 'prize that round' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 50, max: 50, step: 1 }, { key: 'b', label: 'r', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => 50 * Math.pow(2, x - 1),
    build() {
      return {
        question: 'What is the prize in round 4?',
        answer: { type: 'numeric', target: 400, tol: 5, atX: 4, prompt: 'Prize round 4 ($)' },
        hints: ['50 · 2³ = 50 · 8 = 400'],
        workedSolution: 'Geometric: aₙ = 50 · 2^(n−1). For n = 4: 50 · 2³ = 400.'
      };
    }
  });

  add({
    id: 'hs-geo-2', family: 'exponential', title: 'Bacteria Each Hour',
    context: 'A culture starts with 3 cells and triples every hour.',
    xLabel: 'Hour (x)', yLabel: 'Cells (y)',
    xMin: 1, xMax: 6, form: 'y = 3 · 3^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'hour number' }, { sym: 'y', mean: 'cell count' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 3, max: 3, step: 1 }, { key: 'b', label: 'r', min: 3, max: 3, step: 0.1 }],
    eval: (p, x) => 3 * Math.pow(3, x - 1), motion: 'colonies',
    build() {
      return {
        question: 'How many cells after the start of hour 4? (term 4)',
        answer: { type: 'numeric', target: 81, tol: 2, atX: 4, prompt: 'Cells at hour 4' },
        hints: ['3 · 3³ = 3 · 27 = 81'],
        workedSolution: 'a₄ = 3 · 3^(3) = 81. Geometric with first term 3 and ratio 3.'
      };
    }
  });

  add({
    id: 'hs-geo-3', family: 'exponential', title: 'Halving Medicine',
    context: 'A dose starts at 80 mg and halves each half-life period.',
    xLabel: 'Period (x)', yLabel: 'Amount mg (y)',
    xMin: 1, xMax: 6, form: 'y = 80 · (0.5)^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'period number' }, { sym: 'y', mean: 'remaining mg' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 80, max: 80, step: 1 }, { key: 'b', label: 'r', min: 0.5, max: 0.5, step: 0.05 }],
    eval: (p, x) => 80 * Math.pow(0.5, x - 1),
    build() {
      return {
        question: 'How many mg remain at period 4?',
        answer: { type: 'numeric', target: 10, tol: 0.5, atX: 4, prompt: 'mg at period 4' },
        hints: ['80 · (1/2)³ = 80/8 = 10'],
        workedSolution: 'a₄ = 80 · (1/2)³ = 10. Three halvings from the first term.'
      };
    }
  });

  add({
    id: 'hs-arith-sum', family: 'linear', title: 'Total of First Weeks',
    context: 'You save $10, $12, $14, … each week (arithmetic). The graph shows the weekly amount; the question asks for a sum you can compute from the pattern.',
    xLabel: 'Week (x)', yLabel: 'That week $ (y)',
    xMin: 1, xMax: 8, form: 'y = 10 + (x − 1)·2',
    symbolGlossary: [{ sym: 'x', mean: 'week' }, { sym: 'y', mean: 'saved that week' }],
    paramDefs: [{ key: 'm', label: 'd', min: 2, max: 2, step: 1 }, { key: 'c', label: 'a1', min: 10, max: 10, step: 1 }],
    eval: (p, x) => 10 + (x - 1) * 2,
    build() {
      return {
        question: 'What is the total saved over the first 5 weeks? (Sum 10+12+14+16+18)',
        answer: { type: 'numeric', target: 70, tol: 2, atX: 5, prompt: '5-week total ($)' },
        hints: ['Average of first and last × number of terms', '(10+18)/2 × 5 = 70'],
        workedSolution: 'Arithmetic series S₅ = (n/2)(a₁ + a₅). a₅ = 10 + 8 = 18. S₅ = (5/2)(10+18) = 70.'
      };
    }
  });

  add({
    id: 'hs-geo-sum', family: 'exponential', title: 'Total of Doubling Gifts',
    context: 'Gifts: $1, $2, $4, $8, … (geometric). The graph is the gift each day.',
    xLabel: 'Day (x)', yLabel: 'Gift that day $ (y)',
    xMin: 1, xMax: 6, form: 'y = 2^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'day' }, { sym: 'y', mean: 'gift that day' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 1, max: 1, step: 1 }, { key: 'b', label: 'r', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => Math.pow(2, x - 1),
    build() {
      return {
        question: 'Total gifts over the first 4 days? (1+2+4+8)',
        answer: { type: 'numeric', target: 15, tol: 1, atX: 4, prompt: '4-day total ($)' },
        hints: ['Sₙ = a₁(rⁿ − 1)/(r − 1) for r ≠ 1', '1·(16−1)/(2−1) = 15'],
        workedSolution: 'Geometric sum S₄ = 1·(2⁴ − 1)/(2 − 1) = 15. Or add 1+2+4+8 = 15.'
      };
    }
  });

  // More arithmetic / geometric variations
  add({
    id: 'hs-arith-4', family: 'linear', title: 'Push-ups Plan',
    context: 'Day 1: 15 push-ups. Each day you add 3 more than the day before.',
    xLabel: 'Day (x)', yLabel: 'Push-ups (y)',
    xMin: 1, xMax: 12, form: 'y = 15 + (x − 1)·3',
    symbolGlossary: [{ sym: 'x', mean: 'day' }, { sym: 'y', mean: 'push-ups that day' }],
    paramDefs: [{ key: 'm', label: 'd', min: 3, max: 3, step: 1 }, { key: 'c', label: 'a1', min: 15, max: 15, step: 1 }],
    eval: (p, x) => 15 + (x - 1) * 3,
    build() {
      return {
        question: 'How many push-ups on day 7?',
        answer: { type: 'numeric', target: 33, tol: 1, atX: 7, prompt: 'Push-ups day 7' },
        hints: ['15 + 6×3 = 33'],
        workedSolution: 'a₇ = 15 + 6·3 = 33.'
      };
    }
  });

  add({
    id: 'hs-arith-5', family: 'linear', title: 'Parking Fee Steps',
    context: 'First hour $4; each extra hour adds $1.50 (modeled per hour index).',
    xLabel: 'Hour number (x)', yLabel: 'Fee that hour $ (y)',
    xMin: 1, xMax: 8, form: 'y = 4 + (x − 1)·1.5',
    symbolGlossary: [{ sym: 'x', mean: 'hour index' }, { sym: 'y', mean: 'charge for that hour slot' }],
    paramDefs: [{ key: 'm', label: 'd', min: 1.5, max: 1.5, step: 0.5 }, { key: 'c', label: 'a1', min: 4, max: 4, step: 0.5 }],
    eval: (p, x) => 4 + (x - 1) * 1.5,
    build() {
      return {
        question: 'What is the listed amount for hour 5?',
        answer: { type: 'numeric', target: 10, tol: 0.3, atX: 5, prompt: 'Hour 5 fee ($)' },
        hints: ['4 + 4×1.5 = 10'],
        workedSolution: 'a₅ = 4 + 4·1.5 = 10.'
      };
    }
  });

  add({
    id: 'hs-geo-4', family: 'exponential', title: 'Folded Paper Thickness',
    context: 'Each fold doubles thickness. Start at 0.1 mm.',
    xLabel: 'Folds (x)', yLabel: 'Thickness mm (y)',
    xMin: 1, xMax: 8, form: 'y = 0.1 · 2^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'number of folds' }, { sym: 'y', mean: 'thickness' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 0.1, max: 0.1, step: 0.05 }, { key: 'b', label: 'r', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => 0.1 * Math.pow(2, x - 1),
    build() {
      return {
        question: 'Thickness after 6 folds (term 6)?',
        answer: { type: 'numeric', target: 3.2, tol: 0.2, atX: 6, prompt: 'Thickness mm' },
        hints: ['0.1 · 2⁵ = 0.1 · 32 = 3.2'],
        workedSolution: 'a₆ = 0.1 · 2⁵ = 3.2 mm.'
      };
    }
  });

  add({
    id: 'hs-geo-5', family: 'exponential', title: 'Investment Snapshot',
    context: 'Balance multiplies by 1.1 each year starting at $1000 (discrete yearly terms).',
    xLabel: 'Year (x)', yLabel: 'Balance $ (y)',
    xMin: 1, xMax: 8, form: 'y = 1000 · 1.1^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'year index' }, { sym: 'y', mean: 'balance' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 1000, max: 1000, step: 50 }, { key: 'b', label: 'r', min: 1.1, max: 1.1, step: 0.01 }],
    eval: (p, x) => 1000 * Math.pow(1.1, x - 1),
    build() {
      return {
        question: 'Balance at year 3 (term 3)?',
        answer: { type: 'numeric', target: 1210, tol: 15, atX: 3, prompt: 'Balance year 3' },
        hints: ['1000 · 1.1² = 1210'],
        workedSolution: 'a₃ = 1000 · 1.1² = 1210.'
      };
    }
  });

  add({
    id: 'hs-arith-6', family: 'linear', title: 'Temperature Drop',
    context: 'Temperature starts at 20°C and falls 2° each hour.',
    xLabel: 'Hour (x)', yLabel: 'Temp °C (y)',
    xMin: 1, xMax: 10, form: 'y = 20 − (x − 1)·2',
    symbolGlossary: [{ sym: 'x', mean: 'hour' }, { sym: 'y', mean: 'temperature' }],
    paramDefs: [{ key: 'm', label: 'd', min: -2, max: -2, step: 1 }, { key: 'c', label: 'a1', min: 20, max: 20, step: 1 }],
    eval: (p, x) => 20 - (x - 1) * 2,
    build() {
      return {
        question: 'Temperature at hour 6?',
        answer: { type: 'numeric', target: 10, tol: 0.5, atX: 6, prompt: 'Temp hour 6' },
        hints: ['20 − 5×2 = 10'],
        workedSolution: 'a₆ = 20 − 5·2 = 10°C.'
      };
    }
  });

  add({
    id: 'hs-arith-7', family: 'linear', title: 'Page Goals',
    context: 'Read 8 pages day 1, then 4 more pages than the previous day each day.',
    xLabel: 'Day (x)', yLabel: 'Pages that day (y)',
    xMin: 1, xMax: 10, form: 'y = 8 + (x − 1)·4',
    symbolGlossary: [{ sym: 'x', mean: 'day' }, { sym: 'y', mean: 'pages' }],
    paramDefs: [{ key: 'm', label: 'd', min: 4, max: 4, step: 1 }, { key: 'c', label: 'a1', min: 8, max: 8, step: 1 }],
    eval: (p, x) => 8 + (x - 1) * 4,
    build() {
      return {
        question: 'Pages on day 5?',
        answer: { type: 'numeric', target: 24, tol: 1, atX: 5, prompt: 'Pages day 5' },
        hints: ['8 + 4×4 = 24'],
        workedSolution: 'a₅ = 8 + 4·4 = 24.'
      };
    }
  });

  add({
    id: 'hs-geo-6', family: 'exponential', title: 'Chain Letter Contacts',
    context: 'Each person contacts 2 new people. Start with 1 person in round 1.',
    xLabel: 'Round (x)', yLabel: 'New contacts (y)',
    xMin: 1, xMax: 7, form: 'y = 2^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'round' }, { sym: 'y', mean: 'people contacted that round' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 1, max: 1, step: 1 }, { key: 'b', label: 'r', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => Math.pow(2, x - 1),
    build() {
      return {
        question: 'New contacts in round 5?',
        answer: { type: 'numeric', target: 16, tol: 1, atX: 5, prompt: 'Contacts round 5' },
        hints: ['2⁴ = 16'],
        workedSolution: 'a₅ = 2⁴ = 16.'
      };
    }
  });

  add({
    id: 'hs-arith-8', family: 'linear', title: 'Common Difference Check',
    context: 'Sequence 7, 11, 15, 19, … increases by 4 each time.',
    xLabel: 'Term index (x)', yLabel: 'Term value (y)',
    xMin: 1, xMax: 10, form: 'y = 7 + (x − 1)·4',
    symbolGlossary: [{ sym: 'x', mean: 'term number' }, { sym: 'y', mean: 'term value' }],
    paramDefs: [{ key: 'm', label: 'd', min: 4, max: 4, step: 1 }, { key: 'c', label: 'a1', min: 7, max: 7, step: 1 }],
    eval: (p, x) => 7 + (x - 1) * 4,
    build() {
      return {
        question: 'What is the 9th term?',
        answer: { type: 'numeric', target: 39, tol: 1, atX: 9, prompt: '9th term' },
        hints: ['7 + 8×4 = 39'],
        workedSolution: 'a₉ = 7 + 8·4 = 39.'
      };
    }
  });

  add({
    id: 'hs-geo-7', family: 'exponential', title: 'Shrink by 20%',
    context: 'A balloon’s volume model starts at 100 and multiplies by 0.8 each step.',
    xLabel: 'Step (x)', yLabel: 'Size (y)',
    xMin: 1, xMax: 8, form: 'y = 100 · 0.8^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'step' }, { sym: 'y', mean: 'relative size' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 100, max: 100, step: 1 }, { key: 'b', label: 'r', min: 0.8, max: 0.8, step: 0.05 }],
    eval: (p, x) => 100 * Math.pow(0.8, x - 1),
    build() {
      return {
        question: 'Size at step 3?',
        answer: { type: 'numeric', target: 64, tol: 2, atX: 3, prompt: 'Size step 3' },
        hints: ['100 · 0.8² = 64'],
        workedSolution: 'a₃ = 100 · 0.8² = 64.'
      };
    }
  });

  add({
    id: 'hs-arith-sum2', family: 'linear', title: 'Sum of First 6 Odds',
    context: 'Odd numbers 1, 3, 5, 7, … form an arithmetic sequence.',
    xLabel: 'Index (x)', yLabel: 'Odd number (y)',
    xMin: 1, xMax: 10, form: 'y = 1 + (x − 1)·2',
    symbolGlossary: [{ sym: 'x', mean: 'position' }, { sym: 'y', mean: 'odd number' }],
    paramDefs: [{ key: 'm', label: 'd', min: 2, max: 2, step: 1 }, { key: 'c', label: 'a1', min: 1, max: 1, step: 1 }],
    eval: (p, x) => 1 + (x - 1) * 2,
    build() {
      return {
        question: 'Sum of the first 6 odd numbers?',
        answer: { type: 'numeric', target: 36, tol: 1, atX: 6, prompt: 'Sum of first 6' },
        hints: ['1+3+5+7+9+11 = 36', 'Or (6/2)(1+11) = 36'],
        workedSolution: 'a₆ = 11. S₆ = (6/2)(1+11) = 36. (Also equal to 6².)'
      };
    }
  });

  add({
    id: 'hs-geo-8', family: 'exponential', title: 'Powers of Three',
    context: 'Sequence 1, 3, 9, 27, …',
    xLabel: 'Index (x)', yLabel: 'Value (y)',
    xMin: 1, xMax: 6, form: 'y = 3^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'term index' }, { sym: 'y', mean: '3^(x−1)' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 1, max: 1, step: 1 }, { key: 'b', label: 'r', min: 3, max: 3, step: 0.1 }],
    eval: (p, x) => Math.pow(3, x - 1),
    build() {
      return {
        question: 'What is term 5?',
        answer: { type: 'numeric', target: 81, tol: 2, atX: 5, prompt: 'Term 5' },
        hints: ['3⁴ = 81'],
        workedSolution: 'a₅ = 3⁴ = 81.'
      };
    }
  });

  add({
    id: 'hs-arith-9', family: 'linear', title: 'Salary Steps',
    context: 'Starting salary term modeled as $40k, then +$2k each year in this simplified ladder.',
    xLabel: 'Year on ladder (x)', yLabel: 'Salary $k (y)',
    xMin: 1, xMax: 10, form: 'y = 40 + (x − 1)·2',
    symbolGlossary: [{ sym: 'x', mean: 'year index' }, { sym: 'y', mean: 'salary in thousands' }],
    paramDefs: [{ key: 'm', label: 'd', min: 2, max: 2, step: 1 }, { key: 'c', label: 'a1', min: 40, max: 40, step: 1 }],
    eval: (p, x) => 40 + (x - 1) * 2,
    build() {
      return {
        question: 'Salary figure in year 6 (thousands)?',
        answer: { type: 'numeric', target: 50, tol: 1, atX: 6, prompt: 'Value year 6' },
        hints: ['40 + 5×2 = 50'],
        workedSolution: 'a₆ = 40 + 5·2 = 50 (thousand dollars in the model).'
      };
    }
  });

  add({
    id: 'hs-geo-9', family: 'exponential', title: 'Viral Shares',
    context: 'A post starts with 5 shares and each wave multiplies shares by 4.',
    xLabel: 'Wave (x)', yLabel: 'Shares (y)',
    xMin: 1, xMax: 5, form: 'y = 5 · 4^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'wave' }, { sym: 'y', mean: 'shares' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 5, max: 5, step: 1 }, { key: 'b', label: 'r', min: 4, max: 4, step: 0.1 }],
    eval: (p, x) => 5 * Math.pow(4, x - 1),
    build() {
      return {
        question: 'Shares in wave 3?',
        answer: { type: 'numeric', target: 80, tol: 2, atX: 3, prompt: 'Shares wave 3' },
        hints: ['5 · 4² = 80'],
        workedSolution: 'a₃ = 5 · 16 = 80.'
      };
    }
  });

  add({
    id: 'hs-arith-10', family: 'linear', title: 'Find the 10th Term',
    context: 'Sequence 5, 9, 13, 17, …',
    xLabel: 'n (x)', yLabel: 'aₙ (y)',
    xMin: 1, xMax: 12, form: 'y = 5 + (x − 1)·4',
    symbolGlossary: [{ sym: 'x', mean: 'n' }, { sym: 'y', mean: 'term' }],
    paramDefs: [{ key: 'm', label: 'd', min: 4, max: 4, step: 1 }, { key: 'c', label: 'a1', min: 5, max: 5, step: 1 }],
    eval: (p, x) => 5 + (x - 1) * 4,
    build() {
      return {
        question: 'What is the 10th term?',
        answer: { type: 'numeric', target: 41, tol: 1, atX: 10, prompt: 'a₁₀' },
        hints: ['5 + 9×4 = 41'],
        workedSolution: 'a₁₀ = 5 + 9·4 = 41.'
      };
    }
  });

  add({
    id: 'hs-geo-10', family: 'exponential', title: 'First Term Times Ratio',
    context: 'Geometric sequence with a₁ = 6 and r = 2.',
    xLabel: 'n (x)', yLabel: 'aₙ (y)',
    xMin: 1, xMax: 6, form: 'y = 6 · 2^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'n' }, { sym: 'y', mean: 'term' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 6, max: 6, step: 1 }, { key: 'b', label: 'r', min: 2, max: 2, step: 0.1 }],
    eval: (p, x) => 6 * Math.pow(2, x - 1),
    build() {
      return {
        question: 'What is a₅?',
        answer: { type: 'numeric', target: 96, tol: 2, atX: 5, prompt: 'a₅' },
        hints: ['6 · 2⁴ = 96'],
        workedSolution: 'a₅ = 6 · 16 = 96.'
      };
    }
  });

  add({
    id: 'hs-arith-11', family: 'linear', title: 'Zero Crossing Sequence',
    context: 'Sequence 12, 9, 6, 3, … decreases by 3.',
    xLabel: 'n (x)', yLabel: 'aₙ (y)',
    xMin: 1, xMax: 8, form: 'y = 12 − (x − 1)·3',
    symbolGlossary: [{ sym: 'x', mean: 'n' }, { sym: 'y', mean: 'term' }],
    paramDefs: [{ key: 'm', label: 'd', min: -3, max: -3, step: 1 }, { key: 'c', label: 'a1', min: 12, max: 12, step: 1 }],
    eval: (p, x) => 12 - (x - 1) * 3,
    build() {
      return {
        question: 'Which term equals 0? Enter that term’s value (0) to confirm you found it at n = 5.',
        answer: { type: 'numeric', target: 0, tol: 0.2, atX: 5, prompt: 'a₅' },
        hints: ['12 − 4×3 = 0'],
        workedSolution: 'a₅ = 12 − 4·3 = 0. The sequence hits zero on the fifth term.'
      };
    }
  });

  add({
    id: 'hs-geo-sum3', family: 'exponential', title: 'Partial Sum of Halves',
    context: 'Terms 1, 1/2, 1/4, 1/8, … (shown scaled as powers of 1/2).',
    xLabel: 'n (x)', yLabel: '(1/2)^(x−1)',
    xMin: 1, xMax: 6, form: 'y = (0.5)^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'n' }, { sym: 'y', mean: 'term' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 1, max: 1, step: 1 }, { key: 'b', label: 'r', min: 0.5, max: 0.5, step: 0.05 }],
    eval: (p, x) => Math.pow(0.5, x - 1),
    build() {
      return {
        question: 'Sum of the first 3 terms: 1 + 1/2 + 1/4?',
        answer: { type: 'numeric', target: 1.75, tol: 0.08, atX: 3, prompt: 'S₃' },
        hints: ['1 + 0.5 + 0.25 = 1.75'],
        workedSolution: 'S₃ = 1·(1 − (1/2)³)/(1 − 1/2) = (1 − 1/8)/(1/2) = (7/8)·2 = 7/4 = 1.75.'
      };
    }
  });

  add({
    id: 'hs-arith-12', family: 'linear', title: 'Mean of Sequence Ends',
    context: 'For arithmetic sequences, the average of the first and last term times n gives the sum. Sequence: 4, 7, 10, …',
    xLabel: 'n (x)', yLabel: 'aₙ (y)',
    xMin: 1, xMax: 8, form: 'y = 4 + (x − 1)·3',
    symbolGlossary: [{ sym: 'x', mean: 'n' }, { sym: 'y', mean: 'term' }],
    paramDefs: [{ key: 'm', label: 'd', min: 3, max: 3, step: 1 }, { key: 'c', label: 'a1', min: 4, max: 4, step: 1 }],
    eval: (p, x) => 4 + (x - 1) * 3,
    build() {
      return {
        question: 'Sum of the first 4 terms?',
        answer: { type: 'numeric', target: 22, tol: 1, atX: 4, prompt: 'S₄' },
        hints: ['a₄ = 13; (4/2)(4+13) = 34? Wait: 4+7+10+13 = 34'],
        workedSolution: 'a₄ = 4 + 3·3 = 13. S₄ = (4/2)(4+13) = 2·17 = 34. (If your target was mis-set in an older draft, use 34.)'
      };
    }
  });

  // Fix hs-arith-12 target to 34
  T[T.length - 1].build = function () {
    return {
      question: 'Sum of the first 4 terms of 4, 7, 10, 13, …?',
      answer: { type: 'numeric', target: 34, tol: 1, atX: 4, prompt: 'S₄' },
      hints: ['4+7+10+13 = 34', '(4/2)(4+13) = 34'],
      workedSolution: 'a₄ = 13. S₄ = (4/2)(4+13) = 34.'
    };
  };

  add({
    id: 'hs-geo-11', family: 'exponential', title: 'Ratio Recognition',
    context: 'Sequence 2, 6, 18, 54, … multiplies by 3 each time.',
    xLabel: 'n (x)', yLabel: 'aₙ (y)',
    xMin: 1, xMax: 5, form: 'y = 2 · 3^(x−1)',
    symbolGlossary: [{ sym: 'x', mean: 'n' }, { sym: 'y', mean: 'term' }],
    paramDefs: [{ key: 'a', label: 'a1', min: 2, max: 2, step: 1 }, { key: 'b', label: 'r', min: 3, max: 3, step: 0.1 }],
    eval: (p, x) => 2 * Math.pow(3, x - 1),
    build() {
      return {
        question: 'What is the 4th term?',
        answer: { type: 'numeric', target: 54, tol: 1, atX: 4, prompt: 'a₄' },
        hints: ['2 · 3³ = 54'],
        workedSolution: 'a₄ = 2 · 27 = 54.'
      };
    }
  });

  add({
    id: 'hs-arith-13', family: 'linear', title: 'Middle Term',
    context: 'In an arithmetic sequence, terms sit evenly spaced. Sequence: 10, 20, 30, 40, …',
    xLabel: 'n (x)', yLabel: 'aₙ (y)',
    xMin: 1, xMax: 8, form: 'y = 10x',
    symbolGlossary: [{ sym: 'x', mean: 'n' }, { sym: 'y', mean: '10n' }],
    paramDefs: [{ key: 'm', label: 'd', min: 10, max: 10, step: 1 }, { key: 'c', label: 'scale', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 10 * x,
    build() {
      return {
        question: 'What is term number 7?',
        answer: { type: 'numeric', target: 70, tol: 1, atX: 7, prompt: 'a₇' },
        hints: ['10 × 7 = 70'],
        workedSolution: 'Here aₙ = 10n, so a₇ = 70.'
      };
    }
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
