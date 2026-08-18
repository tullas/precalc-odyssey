# Precalc Odyssey – Authentication System (Cloudflare D1 + Workers)

Complete email-based login + RBAC system.

## Features
- Register with Email + Password
- Login
- Forgot / Reset Password (token based)
- Roles: `student`, `teacher`, `admin`
- JWT-style token (7-day expiry)

---

## 1. Create D1 Database

In Cloudflare Dashboard → **Workers & Pages** → **D1**:

1. Create database → name it `precalc-odyssey-db`
2. Copy the **Database ID**
3. Open the database → **Console** and run:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student', 'teacher', 'admin')),
  reset_token TEXT,
  reset_token_expires INTEGER,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);
```

---

## 2. Deploy the Worker

1. Install Wrangler (if not already):
```bash
npm install -g wrangler
```

2. Login:
```bash
wrangler login
```

3. Go to the `worker` folder and edit `wrangler.toml`:
   - Replace `YOUR_D1_DATABASE_ID_HERE` with your real Database ID

4. Deploy:
```bash
cd worker
wrangler deploy
```

5. Copy the Worker URL (example: `https://precalc-odyssey-auth.xxxxx.workers.dev`)

---

## 3. Frontend

1. Open `frontend/js/auth.js`
2. Replace this line with your real Worker URL:
```js
const API_BASE = "https://precalc-odyssey-auth.YOUR_SUBDOMAIN.workers.dev";
```

3. Deploy the `frontend` folder to **Cloudflare Pages** (or keep using GitHub Pages and just point the API to the Worker).

---

## 4. Testing Flow

1. Go to `/login.html`
2. Register a new account (role will be `student`)
3. Login
4. Test Forgot Password → you will see the 6-digit token (for testing)
5. Use the token to reset password

---

## Making a Teacher or Admin

After creating a user, go to D1 console and run:

```sql
UPDATE users SET role = 'teacher' WHERE email = 'teacher@example.com';
-- or
UPDATE users SET role = 'admin' WHERE email = 'admin@example.com';
```

---

## Security Notes

- Passwords are hashed with SHA-256 + salt (good enough for demo/prototype)
- For production, consider upgrading to bcrypt or Argon2 via a library
- The reset token is currently returned in the response for easy testing — **remove that in production**
- Add rate limiting later if needed

---

You now have a clean, working RBAC authentication system for Precalc Odyssey.
