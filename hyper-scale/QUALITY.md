# Hyper-Scale Mission Quality Checklist

Every new encounter MUST pass this checklist before being added.

## 1. Story ↔ Math Alignment
- [ ] The real-world situation genuinely requires the target function family

## 2. Intended Card Path (CRITICAL)
- [ ] Player can win using the recommended Parent + 1–2 Modifiers
- [ ] **Opening hand ALWAYS contains at least one card of the required parent family**
- [ ] Recommended cards are clearly marked (green glow)

## 3. Educational Failure Feedback
- [ ] If the player uses the wrong function family, the result screen explains the mismatch

## 4. Target Score Calibration
- [ ] Intended strategy reaches the target most of the time
- [ ] Clearly wrong strategies usually fail

## 5. Visual Reinforcement
- [ ] Visuals during Execute match the story when applicable

## 6. Single Learning Goal
- [ ] One primary concept per mission

---

## Enforcement in code

`CombatManager.start(target, requiredFamily)` guarantees that after the opening draw, the hand contains at least one parent card whose `parentType === requiredFamily`. If the random draw missed it, one is injected from the deck.
