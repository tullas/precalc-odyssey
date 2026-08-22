# Hyper-Scale Lab — Quality Governance

Goal: you use the product; the system ships only work that passes mathematical, UX, and security checks.

## Standing rule (never skip)

**Every question must pass the “stranger test”:**

> Could a student who only reads the **title + context + question** (no prior card in the set) know what situation they are in and what number to find?

**Fail if any of these appear as the main question:**
- `What is |⟨a,b⟩|?`
- `x-component of …?`
- `What is aₙ?` / bare formula prompts
- Textbook exercise fragments with no story

**Pass only if:**
1. **Context** is 1–3 sentences of a real or easy-to-imagine situation.
2. **Question** asks for a quantity in that story (words first; symbols only as support).
3. **workedSolution** explains the idea in full sentences, then the calculation.
4. **Glossary** defines every letter on screen.

User feedback that something “feels like an exam paper” is an **automatic Author rewrite** — not optional polish.

## Self-study / auto-enhancement loop

```
1. User practices.
2. User flags cryptic / thin / wrong items (screenshot or description).
3. Author rewrites to stranger-test standard.
4. Math Verifier + UX Reviewer + Security re-check.
5. Ship → user practices again.
```

You are not doing anything wrong when quality slips: the loop is how the system is supposed to correct itself. The missing piece was applying the stranger test as hard on **Honors** packs as on Standard Trig.

## Prompt you can paste anytime (for me or Cloudflare AI)

```
Apply QUALITY_GOVERNANCE stranger-test to every scenario in [unit].
Rewrite any question that is exam-fragment style.
Require: story context, plain-language question, full workedSolution paragraph, glossary.
Do not ship bare “What is |v|?” or “x-component of …?” prompts.
```

## Roles

1. **Scenario Author** — story + stranger-test question + workedSolution  
2. **Math Verifier** — eval matches target; domain-safe  
3. **UX Reviewer** — stranger-test; hints/solution timing  
4. **Consistency Guard** — level/unit tags; unique scenarios  
5. **Security Agent** — auth/D1/XSS/secrets checklist  

## Levels

| Level | Status |
|-------|--------|
| Standard | Core complete |
| Honors | Complete; plain-language audit ongoing |
| AP | Locked |
