// ==============================
// Precalc Odyssey - Auth Client
// ==============================

// IMPORTANT: Replace this with your deployed Worker URL
const API_BASE = "https://precalc-odyssey-auth.t-ullas.workers.dev/";

// ---------- Tab Switching ----------
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));

    tab.classList.add("active");
    const formId = tab.dataset.tab + "Form";
    document.getElementById(formId).classList.add("active");
  });
});

// ---------- Helpers ----------
function showMessage(elementId, text, isError = false) {
  const el = document.getElementById(elementId);
  el.textContent = text;
  el.className = "message " + (isError ? "error" : "success");
}

async function apiCall(path, method = "GET", body = null, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE}${path}`, options);
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

// ---------- Login ----------
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const { ok, data } = await apiCall("/login", "POST", { email, password });

  if (ok) {
    localStorage.setItem("precalc_token", data.token);
    localStorage.setItem("precalc_user", JSON.stringify(data.user));
    showMessage("loginMessage", "Login successful! Redirecting...", false);
    setTimeout(() => {
      window.location.href = "/index.html";   // or your main course page
    }, 1000);
  } else {
    showMessage("loginMessage", data.error || "Login failed", true);
  }
});

// ---------- Register ----------
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (password !== confirm) {
    showMessage("regMessage", "Passwords do not match", true);
    return;
  }

  const { ok, data } = await apiCall("/register", "POST", {
    email,
    password,
    role: "student"   // default role
  });

  if (ok) {
    showMessage("regMessage", "Account created! You can now login.", false);
    // Switch to login tab
    document.querySelector('[data-tab="login"]').click();
  } else {
    showMessage("regMessage", data.error || "Registration failed", true);
  }
});

// ---------- Forgot Password - Get Token ----------
document.getElementById("getTokenBtn").addEventListener("click", async () => {
  const email = document.getElementById("forgotEmail").value.trim();
  if (!email) {
    showMessage("forgotMessage", "Please enter your email", true);
    return;
  }

  const { ok, data } = await apiCall("/forgot-password", "POST", { email });

  if (ok) {
    document.getElementById("resetSection").style.display = "block";
    // For testing we show the token. Remove in production.
    showMessage("forgotMessage", 
      data.reset_token 
        ? `Token generated: ${data.reset_token} (valid 1 hour)` 
        : data.message, 
      false
    );
  } else {
    showMessage("forgotMessage", data.error || "Something went wrong", true);
  }
});

// ---------- Reset Password ----------
document.getElementById("resetBtn").addEventListener("click", async () => {
  const email = document.getElementById("forgotEmail").value.trim();
  const token = document.getElementById("resetToken").value.trim();
  const newPassword = document.getElementById("newPassword").value;

  if (!token || !newPassword) {
    showMessage("forgotMessage", "Token and new password are required", true);
    return;
  }

  const { ok, data } = await apiCall("/reset-password", "POST", {
    email,
    token,
    new_password: newPassword
  });

  if (ok) {
    showMessage("forgotMessage", "Password updated! You can now login.", false);
    setTimeout(() => {
      document.querySelector('[data-tab="login"]').click();
    }, 1500);
  } else {
    showMessage("forgotMessage", data.error || "Reset failed", true);
  }
});
