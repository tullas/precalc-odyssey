# Hyper-Scale Lab — Quality Governance

Goal: you use the product; the system ships only work that passes mathematical, UX, and security checks.

## Roles (logical agents)

### 1. Scenario Author
- Writes context + question in plain language (no exam jargon).
- Defines family, params, units, eval function, target.
- Defines `symbolGlossary` for every letter in the formula.

### 2. Math Verifier (must pass)
- `eval(idealParams, atX)` equals `answer.target` within tolerance.
- Domain safe (no log of ≤0, no divide-by-zero on sample grid).
- Units on X/Y match the story.
- Every symbol in the formula is defined in plain language.

### 3. UX Reviewer
- Question states what to do with sliders and what number to enter.
- Graph axes labeled with story quantities + units.
- Solution hidden until correct or 3 fails; hints after 2 fails.
- No spoilers in failure feedback.

### 4. Consistency Guard
- Same scenario id can reroll numbers; story type stays coherent.
- Slider defaults = ideal params used for the official answer.

### 5. Security Agent (must pass before any deploy)

Owns all cybersecurity for this product (Pages frontend + Auth Worker + D1).
Nothing ships if a Security check fails.

#### 5.1 Authentication & session
- [ ] Passwords never stored or logged in plaintext (hash only on Worker).
- [ ] Min password length enforced server-side (not only in the browser).
- [ ] Auth token / session not placed in URL query strings.
- [ ] Logout clears `precalc_token` and `precalc_user` from localStorage.
- [ ] Protected routes (`/hyper-scale/`) redirect to login when token/user missing.
- [ ] Login page redirects to lab when session already present (no session confusion).
- [ ] Role field (`student` / `teacher` / `admin`) never trusted from client alone for privileged actions.

#### 5.2 API (Auth Worker)
- [ ] CORS: allow only known frontend origins (Pages URL), not `*` in production if credentials matter.
- [ ] All state-changing routes require POST (or equivalent); no sensitive GET side effects.
- [ ] Input validation: email format, password length, token format — reject junk early.
- [ ] Rate-limit or throttle register / login / forgot-password to reduce brute force.
- [ ] Error messages do not leak whether an email exists (where practical).
- [ ] Reset tokens: high entropy, short expiry, single-use, cleared after success.
- [ ] No secrets (API keys, DB credentials) in frontend JS or public repo.

#### 5.3 Data (D1)
- [ ] Queries use bound parameters only — never string-concatenated user input (SQL injection).
- [ ] Minimal columns returned to the client (no password_hash in login response).
- [ ] Backups / exports treated as sensitive (contain hashes and emails).

#### 5.4 Frontend (XSS / injection)
- [ ] User-controlled strings not injected as HTML without escaping.
- [ ] Scenario text is author-controlled (repo), not free-form from end users.
- [ ] No `eval()` on user-typed math expressions; only fixed scenario `eval` functions.
- [ ] Third-party scripts limited (e.g. Tailwind CDN); prefer pinned/known sources.

#### 5.5 Transport & hosting
- [ ] HTTPS only (Cloudflare Pages / Workers default).
- [ ] No mixed content (http assets on https pages).
- [ ] Workers/Pages env secrets stored in Cloudflare secrets — not committed.

#### 5.6 Privacy baseline
- [ ] Collect only email + role needed for the product.
- [ ] No phone numbers unless explicitly required later.
- [ ] Clear logout path; session is client-local until upgraded to httpOnly cookies if needed.

### Security release gate (summary)

```
[ ] No secrets in git
[ ] Password hashing on Worker only
[ ] Parameterized D1 queries
[ ] Auth required for lab routes
[ ] CORS restricted appropriately
[ ] No XSS via innerHTML of user input
[ ] Reset tokens expire and are single-use
[ ] Logout clears client session
```

## Full release gate (every scenario + every deploy)

```
[ ] Plain context & question
[ ] Symbol glossary complete
[ ] Axis titles = quantities + units
[ ] Math verify (idealParams → target)
[ ] Domain-safe samples
[ ] Attempts / hints / solution rules
[ ] Security checklist above
```

## Autonomous loop

1. Author adds/edits template or app code.
2. Math Verifier + UX Reviewer + Security Agent run (manual or scripted).
3. Any fail → do not ship.
4. Pass → deploy to Cloudflare.
5. Expand to higher math only after core families stay green under all agents.

## Higher mathematics (later)

Current lab is the **kernel**: scenario schema, graph, attempts, governance including Security.
New topics = new templates under the same multi-agent gate.

## Future security upgrades (backlog — Security Agent owns priority)

1. Move session from localStorage to httpOnly secure cookies if API supports it.
2. Stronger password hashing (e.g. Web Crypto PBKDF2 / server-side argon2 via Worker).
3. Explicit rate limiting on auth endpoints.
4. Content-Security-Policy headers on Pages.
5. Audit log for admin actions when teacher/admin features appear.
