# Accessibility notes — interactive guides

## Goals
Interactive diagrams should teach the same idea through:
- **Sight** (SVG + color with redundant labels)
- **Keyboard** (sliders and buttons fully operable)
- **Screen readers** (names, values, live updates)
- **Motion sensitivity** (`prefers-reduced-motion`)

## Required pattern for each explorer
1. **Visible controls** — never rely on drag-only; always provide a labeled `<input type="range">` or buttons.
2. **Labels** — every range has an associated `<label>` or `aria-label`.
3. **Text equivalent** — readout of numeric values (cos, sin, slope, etc.) next to the graphic.
4. **Live region** — optional `aria-live="polite"` summary when values change (throttled).
5. **SVG** — `role="img"` + `aria-label` describing the diagram purpose; decorative pulse rings `aria-hidden="true"`.
6. **Keyboard** — Tab to controls; arrow keys on native range inputs; preset buttons activatable with Enter/Space.
7. **Focus** — visible `:focus-visible` ring (see `interactive.css`).
8. **Color** — do not encode meaning by color alone (use position, dash style, and text).
9. **Motion** — pulse animations off under `prefers-reduced-motion`.
10. **Touch** — controls at least ~40px tall where practical.

## Flagship reference
`guides/trigonometry-basics.html` — unit circle + wave with keyboard-first controls and live status.

## Manual test checklist
- [ ] Tab only: can change every parameter without a mouse
- [ ] Screen reader announces control name and value
- [ ] Zoom 200%: layout still usable
- [ ] OS “reduce motion” on: no pulsing rings
- [ ] Contrast: text/readouts readable on dark background

## Not yet automated
Full axe CI and automated SR testing are future work. Prefer progressive enhancement: if JS fails, static guide text still teaches the concept.
