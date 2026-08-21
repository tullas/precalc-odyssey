# Hyper-Scale Quality Agent

Automated + manual checklist. Fail any item → do not ship the scenario.

## A. Hand guarantee (code-enforced)
- [ ] `CombatManager.start(target, requiredFamily)` is always called with `scenario.family`
- [ ] `ensureParentInHand(family)` runs after the opening draw
- [ ] Opening hand always contains ≥1 parent with `parentType === scenario.family`
- [ ] That card is marked with green glow **and** a visible "USE THIS" badge in the UI

## B. Scenario text
- [ ] Brief states the real situation in plain language
- [ ] Brief names or clearly implies the function family
- [ ] Hints contrast correct vs wrong family at least once
- [ ] `recommend` names the exact parent card

## C. Visual relevance
- [ ] `scenario.visual` is set to a real type: colonies | dots | bars | ball | slices | cars | scale
- [ ] Execute animation is not only a generic particle on a line
- [ ] For log scenarios, use `scale` (Richter-style steps)

## D. Scoring
- [ ] Intended path (required parent + 1 stretch) can reach target
- [ ] Obviously wrong family usually fails

## E. UX
- [ ] Required card cannot be missed (badge + glow)
- [ ] Result feedback names used family vs required family

---

## Quick test for any scenario
1. Start scenario → required parent visible with USE THIS
2. Play only that parent + one stretch → can win
3. Play wrong parent → feedback explains mismatch
4. Run model → animation matches story
