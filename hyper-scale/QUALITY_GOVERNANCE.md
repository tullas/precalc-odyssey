# Hyper-Scale Lab — Quality Governance

Goal: you use the product; the system ships only scenarios that pass mathematical and UX checks.

## Roles (logical agents)

### 1. Scenario Author
- Writes context + question in plain language (no exam jargon).
- Defines family, params, units, eval function, target.

### 2. Math Verifier (must pass)
- `eval(idealParams, atX)` equals `answer.target` within tolerance.
- Domain safe (no log of ≤0, no divide-by-zero on sample grid).
- Units on X/Y match the story.
- Every symbol in the formula is defined in plain language (a, b, x, …).

### 3. UX Reviewer
- Question states what to do with sliders and what number to enter.
- Graph axes labeled with story quantities, not only “x” / “y”.
- Solution hidden until correct or 3 fails; hints after 2 fails.
- No spoilers in failure feedback.

### 4. Consistency Guard
- Same scenario id can reroll numbers; story type stays coherent.
- Slider defaults = ideal params used for the official answer.

## Release gate (every scenario)

```
[ ] Plain context (everyday language)
[ ] Plain question (what to set, what to read)
[ ] Formula shown with glossary: each letter explained
[ ] Axis titles = real quantities + units
[ ] idealParams → target within tol (math check)
[ ] Grid samples all finite for x in [xMin,xMax] step 0.1
[ ] Hints do not appear before 2 fails
[ ] Solution marker only after success or 3 fails
```

## Autonomous loop (recommended)

1. Author adds/edits template in `scenarios.js`.
2. Run math self-check (see `lab.js` / future `qa-check.js`).
3. Fail → do not ship that template.
4. Pass → deploy.
5. Expand families only after core linear/quad/exp/log/rational are stable.

## Higher mathematics (later)

Treat current lab as the **kernel**: scenario schema, graph, attempts, governance.
New topics (trig, limits, series, …) = new templates under the same gate — not a new product.
