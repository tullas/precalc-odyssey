# Hyper-Scale Lab — Quality Governance

Goal: you use the product; the system ships only work that passes mathematical, UX, and security checks.

## Roles (logical agents)

### 1. Scenario Author
- Plain-language context + question (no exam jargon).
- Family, params, units, eval, target, symbolGlossary.
- **workedSolution** paragraph for the post-answer modal.

### 2. Math Verifier (must pass)
- `eval(idealParams, atX)` matches target within tolerance.
- Domain-safe samples.
- Units and glossary complete.

### 3. UX Reviewer
- Question states what to do; story matches graph axes.
- Hints after 2 fails; solution after correct or 3 fails.
- Worked solution explains *why*, not only the number.

### 4. Consistency Guard
- Unit counts and level tags correct.
- Rerolls stay coherent for randomized templates.

### 5. Security Agent
- Auth, D1 parameterization, no secrets in frontend, CORS, XSS hygiene (see prior checklist).

## Self-study / auto-enhancement loop

User feedback is treated as **mandatory product requirements**, not optional polish.

```
1. User practices a section (self-study).
2. User reports friction (cryptic question, thin solution, wrong graph, etc.).
3. Author revises templates + workedSolution.
4. Math Verifier + UX Reviewer + Security re-check.
5. Ship → user practices again.
```

Standing rules already applied from your feedback:
- Plain language over exam style
- Glossary for every symbol
- Solution hidden until earned
- Hints only after 2nd fail
- Worked solution in modal (especially Trig)
- Unique scenarios per unit (not only parameter rerolls)
- Security agent on deploys

When expanding (Honors, AP), the same loop applies before a unit is marked complete.

## Levels

| Level | Status |
|-------|--------|
| Standard | Core complete (4 × 25) |
| Honors | In progress |
| AP | Locked |

## Honors unit map

1. Sequences & Series
2. Conic Sections
3. Vectors (intro)
4. Advanced Trig (identities & equations)

Each targets 25 unique scenarios under the same gates.
