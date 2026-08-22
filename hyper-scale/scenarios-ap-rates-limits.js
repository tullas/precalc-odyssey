/** AP — Rates & Limits Intro (25) stranger-test */
(function () {
  const T = [];
  const L = 'ap', U = 'rates-limits';

  function add(o) {
    o.level = L; o.unit = U;
    o.symbolGlossary = o.symbolGlossary || [];
    o.paramDefs = o.paramDefs || [];
    o.motion = o.motion || null;
    T.push(o);
  }

  add({
    id: 'ap-rl-avg', family: 'linear', title: 'Average Speed on a Road',
    context: 'A car’s position is s = 4t (km after t hours). From t = 0 to t = 3 it goes from 0 to 12 km. Average speed is Δs/Δt.',
    xLabel: 't (hours)', yLabel: 's (km)',
    xMin: 0, xMax: 5, form: 'y = 4t',
    symbolGlossary: [{ sym: 't', mean: 'time in hours' }, { sym: 'y', mean: 'position in km' }],
    paramDefs: [{ key: 'm', label: 'm', min: 4, max: 4, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => 4 * x,
    build() {
      return {
        question: 'Average speed from t = 0 to t = 3 (km per hour)?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 3, prompt: 'Δs/Δt' },
        hints: ['(12 − 0)/(3 − 0) = 4'],
        workedSolution: 'Average rate of change = (12 − 0)/(3 − 0) = 4 km/h. For a linear position, that matches the slope.'
      };
    }
  });

  add({
    id: 'ap-rl-slope', family: 'linear', title: 'Constant Rate',
    context: 'Temperature rises as T = 2t + 10. Each hour adds 2 degrees — a constant rate of change.',
    xLabel: 't', yLabel: 'T',
    xMin: 0, xMax: 8, form: 'y = 2t + 10',
    symbolGlossary: [{ sym: 't', mean: 'hours' }, { sym: '2', mean: 'degrees per hour' }],
    paramDefs: [{ key: 'm', label: 'rate', min: 2, max: 2, step: 1 }, { key: 'c', label: 'start', min: 10, max: 10, step: 1 }],
    eval: (p, x) => 2 * x + 10,
    build() {
      return {
        question: 'How many degrees does temperature rise per hour?',
        answer: { type: 'numeric', target: 2, tol: 0.15, atX: 1, prompt: 'Rate' },
        hints: ['Slope of the line is 2'],
        workedSolution: 'The coefficient of t is the constant rate: 2 degrees per hour.'
      };
    }
  });

  add({
    id: 'ap-rl-secant', family: 'quadratic', title: 'Average Rate on a Curve',
    context: 'Height h = t² from t = 1 to t = 3 goes from 1 to 9. Average rate is (9−1)/(3−1) = 4.',
    xLabel: 't', yLabel: 'h = t²',
    xMin: 0, xMax: 5, form: 'y = t²',
    symbolGlossary: [{ sym: 't', mean: 'time' }, { sym: 'y', mean: 'height' }],
    paramDefs: [{ key: 'a', label: 'a', min: 1, max: 1, step: 1 }, { key: 'b', label: 'b', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 0, max: 0, step: 1 }],
    eval: (p, x) => x * x,
    build() {
      return {
        question: 'Average rate of change of h = t² from t = 1 to t = 3?',
        answer: { type: 'numeric', target: 4, tol: 0.2, atX: 3, prompt: 'Average rate' },
        hints: ['(9 − 1)/(3 − 1) = 4'],
        workedSolution: 'Δh/Δt = 8/2 = 4. This is the slope of the secant line — a preview of derivative ideas.'
      };
    }
  });

  add({
    id: 'ap-rl-approach', family: 'rational', title: 'Getting Close to 2',
    context: 'The function y = (2x)/x equals 2 for every x ≠ 0. As x approaches 0 from the right, outputs stay at 2.',
    xLabel: 'x > 0', yLabel: '2x/x',
    xMin: 0.2, xMax: 5, form: 'y = 2 (for x ≠ 0)',
    symbolGlossary: [{ sym: 'y', mean: 'simplified value 2' }],
    paramDefs: [{ key: 'a', label: 'a', min: 2, max: 2, step: 1 }],
    eval: (p, x) => (x === 0 ? NaN : 2),
    build() {
      return {
        question: 'For x near 0 but not zero, what value does 2x/x take?',
        answer: { type: 'numeric', target: 2, tol: 0.1, atX: 1, prompt: 'Limit value' },
        hints: ['Cancel x (x ≠ 0)'],
        workedSolution: 'For x ≠ 0, 2x/x = 2. The limit as x → 0 is 2 even though the expression is undefined at 0.'
      };
    }
  });

  add({
    id: 'ap-rl-hole', family: 'linear', title: 'Limit Exists, Point Missing',
    context: 'A graph can approach height 3 even if the function is not defined at that x. Limits care about nearby values.',
    xLabel: 'x', yLabel: 'approaching 3',
    xMin: 0, xMax: 5, form: 'y = 3',
    symbolGlossary: [{ sym: 'y', mean: 'height the graph approaches' }],
    paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: 3, max: 3, step: 1 }],
    eval: (p, x) => 3,
    build() {
      return {
        question: 'If outputs near a point all sit near 3, what limit value are they suggesting?',
        answer: { type: 'numeric', target: 3, tol: 0.1, atX: 2, prompt: 'Limit' },
        hints: ['Read the horizontal level'],
        workedSolution: 'The limit is 3: values approach 3 regardless of whether f is defined exactly at the point.'
      };
    }
  });

  const more = [
    ['ap-rl-1', 'Trip Average', 'Position 0 to 100 in 5 hours: average speed 20.', 20, '(100-0)/5'],
    ['ap-rl-2', 'Cooling Rate', 'Temp drops 15 degrees in 3 hours: rate −5 per hour.', -5, '-15/3'],
    ['ap-rl-3', 'Linear Slope 7', 's = 7t: rate is always 7.', 7, 'slope'],
    ['ap-rl-4', 'From 2 to 10', 'y = x² from 2 to √10… use y=x from 2 to 10: avg (10-2)/(4) wait - simple: y=3x from 1 to 3: (9-3)/2=3', 3, '(9-3)/(3-1)'],
    ['ap-rl-5', 'Constant Function Rate', 'y = 5: average rate over any interval is 0.', 0, 'no change'],
    ['ap-rl-6', 'Double in Two Hours', 'From 4 to 8 in 2 hours on linear model: rate 2.', 2, '(8-4)/2'],
    ['ap-rl-7', 'Approach 0', 'y = x as x → 0 approaches 0.', 0, 'outputs near 0'],
    ['ap-rl-8', 'Approach 5', 'y = 5 + x as x → 0 approaches 5.', 5, 'plug nearby'],
    ['ap-rl-9', 'Secant on 2x', 'y=2x from 0 to 4: average 2.', 2, '8/4'],
    ['ap-rl-10', 'Negative Direction', 'Position 20 to 8 in 4 hours: rate −3.', -3, '(8-20)/4'],
    ['ap-rl-11', 'Unit Rate', 'Gain 9 in 9 hours: rate 1.', 1, '9/9'],
    ['ap-rl-12', 'Steep Secant', 'y=x² from 0 to 4: average (16-0)/4 = 4.', 4, '16/4'],
    ['ap-rl-13', 'Flat Near Peak Idea', 'If a curve levels near height 6, limit suggests 6.', 6, 'horizontal'],
    ['ap-rl-14', 'Half Hour Rate', 'Travel 30 km in 0.5 h: speed 60.', 60, '30/0.5'],
    ['ap-rl-15', 'Same Height', 'y=4 from t=1 to 5: average rate 0.', 0, 'Δy=0'],
    ['ap-rl-16', 'Approach −1', 'y = −1 + x as x→0 → −1.', -1, 'nearby values'],
    ['ap-rl-17', 'Slope of 3x+1', 'Rate of change is 3.', 3, 'coefficient of x'],
    ['ap-rl-18', 'From 5 to 17', 'Change 12 over 3 units of x: rate 4.', 4, '12/3'],
    ['ap-rl-19', 'Quadratic Secant', 'y=x² from 3 to 5: (25-9)/2 = 8.', 8, '16/2'],
    ['ap-rl-20', 'Limit of Constant', 'Constant 9 has limit 9 everywhere.', 9, 'always 9']
  ];

  more.forEach(([id, title, ctx, target, hint]) => {
    add({
      id, family: 'linear', title,
      context: ctx + ' Average rate of change is (change in output)/(change in input). Limits describe the value outputs approach.',
      xLabel: 'Input idea', yLabel: 'Output / rate',
      xMin: 0, xMax: 5, form: 'y = ' + target,
      symbolGlossary: [{ sym: 'y', mean: 'rate or limiting value in the story' }],
      paramDefs: [{ key: 'm', label: 'm', min: 0, max: 0, step: 1 }, { key: 'c', label: 'c', min: target, max: target, step: 1 }],
      eval: (p, x) => target,
      build() {
        return {
          question: ctx + ' What is that rate or limit value?',
          answer: { type: 'numeric', target, tol: Math.max(0.15, Math.abs(target) * 0.05), atX: 2, prompt: 'Value' },
          hints: [hint],
          workedSolution: ctx + ' Answer: ' + target + '.'
        };
      }
    });
  });

  window.SCENARIO_TEMPLATES = window.SCENARIO_TEMPLATES || [];
  T.forEach(t => window.SCENARIO_TEMPLATES.push(t));
})();
