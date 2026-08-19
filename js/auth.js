// ==============================
// Precalc Odyssey - Auth Client
// ==============================

const API_BASE = "https://precalc-odyssey-auth.t-ullas.workers.dev";

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
  if (!el) return;
  el.textContent = text;
  el.className = "message " + (isError ? "error" : "success");
}

async function apiCall(path, method = "GET", body = null, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  try {
    const res = await fetch(`${API_BASE}${path}`, options);
    const data = await res.json();
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: { error: "Network error. Please check your connection." } };
  }
}

// ---------- Login ----------
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  showMessage("loginMessage", "Logging in...", false);

  const { ok, data } = await apiCall("/login", "POST", { email, password });

  if (ok) {
    localStorage.setItem("precalc_token", data.token || data.user?.id || "logged-in");
    localStorage.setItem("precalc_user", JSON.stringify(data.user || { email, role: "student" }));
    showMessage("loginMessage", "Login successful! Redirecting...", false);
    setTimeout(() => {
      window.location.href = "/course.html";
    }, 800);
  } else {
    showMessage("loginMessage", data.error || "Login failed", true);
  }
});

// ---------- Register ----------
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (password !== confirm) {
    showMessage("regMessage", "Passwords do not match", true);
    return;
  }

  if (password.length < 8) {
    showMessage("regMessage", "Password must be at least 8 characters", true);
    return;
  }

  showMessage("regMessage", "Creating account...", false);

  const { ok, data } = await apiCall("/register", "POST", {
    email,
    password,
    role: "student"
  });

  if (ok) {
    showMessage("regMessage", "Account created successfully! You can now login.", false);
    setTimeout(() => {
      document.querySelector('[data-tab="login"]')?.click();
    }, 1500);
  } else {
    showMessage("regMessage", data.error || "Registration failed. Please try again.", true);
  }
});

// ---------- Forgot Password ----------
document.getElementById("getTokenBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("forgotEmail").value.trim();
  if (!email) {
    showMessage("forgotMessage", "Please enter your email", true);
    return;
  }

  showMessage("forgotMessage", "Generating token...", false);

  const { ok, data } = await apiCall("/forgot-password", "POST", { email });

  if (ok) {
    document.getElementById("resetSection").style.display = "block";
    showMessage("forgotMessage", 
      data.reset_token 
        ? `Token: ${data.reset_token} (valid 1 hour)` 
        : (data.message || "Token generated"), 
      false
    );
  } else {
    showMessage("forgotMessage", data.error || "Something went wrong", true);
  }
});

// ---------- Reset Password ----------
document.getElementById("resetBtn")?.addEventListener("click", async () => {
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
      document.querySelector('[data-tab="login"]')?.click();
    }, 1500);
  } else {
    showMessage("forgotMessage", data.error || "Reset failed", true);
  }
});
