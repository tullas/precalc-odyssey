# Hyper-Scale Lab — Curriculum Map

## Three levels

| Level | Audience | Scope |
|-------|----------|--------|
| **Standard** | Typical high-school precalculus | Functions → Poly/Rational → Exp/Log → Trig (this phase) |
| **Honors** | Deeper / faster | Standard + conics, sequences/series, vectors intro |
| **AP** | AP Precalculus–aligned | Standard rigor + polar, parametric, matrices (per AP units) |

We develop **Standard** first. Honors and AP reuse the same scenario engine and quality gates.

## Standard — four sections (25 scenarios each)

### Section 1 — Functions (spine)
1. Domain & range from graphs/equations  
2. Continuity vs breaks  
3. Increasing / decreasing / constant intervals  
4. Parent library (linear, quadratic, cubic, abs, sqrt, reciprocal)  
5. Vertical/horizontal shifts  
6. Stretches & compressions  
7. Reflections  
8. Combined transformations  
9. Function evaluation & tables  
10. Composition (f∘g)  
11. Inverse functions (concept + graphs)  
12. One-to-one & invertibility  
13. Piecewise definition & graph  
14. Piecewise continuity at joints  
15. Modeling: choose a parent for a story  
16–25. Mixed modeling and transformation applications  

### Section 2 — Polynomial & rational
Zeros, multiplicity, end behavior, factor/divide, asymptotes, inequalities, real-world poly/rational models (25).

### Section 3 — Exponential & logarithmic
Growth/decay, laws of exponents/logs, solving equations, base e / ln, applications (25).

### Section 4 — Trigonometry
Degrees/radians, unit circle, graphs (amp/period/phase), inverse trig, identities intro, solving equations, Law of Sines/Cosines (25).

## Scenario schema (required)

```
level: 'standard' | 'honors' | 'ap'
unit: 'functions' | 'poly-rational' | 'exp-log' | 'trigonometry' | ...
id: stable string
family: math family for engine
title, context, question (plain language)
symbolGlossary[]
xLabel, yLabel with units
params, eval, answer, hints
```

## Quality gates (unchanged)
Math Verifier · UX Reviewer · Consistency · Security — all must pass.
