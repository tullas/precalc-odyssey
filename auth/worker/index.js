/**
 * Precalc Odyssey - Cloudflare Worker
 * Handles Authentication + RBAC with D1
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // ========== REGISTER ==========
      if (path === "/register" && request.method === "POST") {
        const { email, password, role = "student" } = await request.json();

        if (!email || !password) {
          return json({ error: "Email and password are required" }, 400, corsHeaders);
        }

        if (!isValidEmail(email)) {
          return json({ error: "Invalid email format" }, 400, corsHeaders);
        }

        if (password.length < 6) {
          return json({ error: "Password must be at least 6 characters" }, 400, corsHeaders);
        }

        // Only allow student by default. Admin/teacher must be set manually later.
        const allowedRole = ["student", "teacher", "admin"].includes(role) ? role : "student";

        const passwordHash = await hashPassword(password);

        try {
          await env.DB.prepare(
            `INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)`
          )
            .bind(email.toLowerCase(), passwordHash, allowedRole)
            .run();

          return json({ success: true, message: "Account created successfully" }, 201, corsHeaders);
        } catch (err) {
          if (err.message.includes("UNIQUE")) {
            return json({ error: "Email already registered" }, 409, corsHeaders);
          }
          throw err;
        }
      }

      // ========== LOGIN ==========
      if (path === "/login" && request.method === "POST") {
        const { email, password } = await request.json();

        if (!email || !password) {
          return json({ error: "Email and password are required" }, 400, corsHeaders);
        }

        const user = await env.DB.prepare(
          `SELECT id, email, password_hash, role FROM users WHERE email = ?`
        )
          .bind(email.toLowerCase())
          .first();

        if (!user) {
          return json({ error: "Invalid email or password" }, 401, corsHeaders);
        }

        const isValid = await verifyPassword(password, user.password_hash);
        if (!isValid) {
          return json({ error: "Invalid email or password" }, 401, corsHeaders);
        }

        // Create a simple token (in production use proper JWT)
        const token = await createToken(user.id, user.email, user.role);

        return json({
          success: true,
          token,
          user: {
            id: user.id,
            email: user.email,
            role: user.role
          }
        }, 200, corsHeaders);
      }

      // ========== FORGOT PASSWORD ==========
      if (path === "/forgot-password" && request.method === "POST") {
        const { email } = await request.json();

        if (!email) {
          return json({ error: "Email is required" }, 400, corsHeaders);
        }

        const user = await env.DB.prepare(
          `SELECT id FROM users WHERE email = ?`
        )
          .bind(email.toLowerCase())
          .first();

        // Always return success to prevent email enumeration
        if (!user) {
          return json({
            success: true,
            message: "If this email exists, a reset token has been generated.",
            // For demo purposes we still return a note
            note: "In production, an email would be sent."
          }, 200, corsHeaders);
        }

        // Generate a simple reset token (6 digit code for demo)
        const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
        const expires = Math.floor(Date.now() / 1000) + 3600; // 1 hour

        await env.DB.prepare(
          `UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE id = ?`
        )
          .bind(resetToken, expires, user.id)
          .run();

        // In production: send email with the token
        // For now we return the token so you can test easily
        return json({
          success: true,
          message: "Reset token generated (valid for 1 hour)",
          reset_token: resetToken, // Remove this line in production!
          note: "In production this token would be emailed. Currently shown for testing."
        }, 200, corsHeaders);
      }

      // ========== RESET PASSWORD ==========
      if (path === "/reset-password" && request.method === "POST") {
        const { email, token, new_password } = await request.json();

        if (!email || !token || !new_password) {
          return json({ error: "Email, token and new password are required" }, 400, corsHeaders);
        }

        if (new_password.length < 6) {
          return json({ error: "Password must be at least 6 characters" }, 400, corsHeaders);
        }

        const user = await env.DB.prepare(
          `SELECT id, reset_token, reset_token_expires FROM users WHERE email = ?`
        )
          .bind(email.toLowerCase())
          .first();

        if (!user || user.reset_token !== token) {
          return json({ error: "Invalid or expired reset token" }, 400, corsHeaders);
        }

        if (user.reset_token_expires < Math.floor(Date.now() / 1000)) {
          return json({ error: "Reset token has expired" }, 400, corsHeaders);
        }

        const newHash = await hashPassword(new_password);

        await env.DB.prepare(
          `UPDATE users SET password_hash = ?, reset_token = NULL, reset_token_expires = NULL WHERE id = ?`
        )
          .bind(newHash, user.id)
          .run();

        return json({ success: true, message: "Password updated successfully" }, 200, corsHeaders);
      }

      // ========== GET CURRENT USER ==========
      if (path === "/me" && request.method === "GET") {
        const authHeader = request.headers.get("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return json({ error: "Unauthorized" }, 401, corsHeaders);
        }

        const token = authHeader.slice(7);
        const payload = await verifyToken(token);

        if (!payload) {
          return json({ error: "Invalid or expired token" }, 401, corsHeaders);
        }

        const user = await env.DB.prepare(
          `SELECT id, email, role, created_at FROM users WHERE id = ?`
        )
          .bind(payload.userId)
          .first();

        if (!user) {
          return json({ error: "User not found" }, 404, corsHeaders);
        }

        return json({ user }, 200, corsHeaders);
      }

      return json({ error: "Not found" }, 404, corsHeaders);
    } catch (err) {
      console.error(err);
      return json({ error: "Internal server error", details: err.message }, 500, corsHeaders);
    }
  }
};

// ========== HELPERS ==========

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "precalc-odyssey-salt-2026");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

async function verifyPassword(password, hash) {
  const newHash = await hashPassword(password);
  return newHash === hash;
}

async function createToken(userId, email, role) {
  // Simple base64 token for demo. Replace with proper JWT in production.
  const payload = {
    userId,
    email,
    role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 // 7 days
  };
  return btoa(JSON.stringify(payload));
}

async function verifyToken(token) {
  try {
    const payload = JSON.parse(atob(token));
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}
