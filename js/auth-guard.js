// Auth Guard - Protect pages that require login
(function() {
  const token = localStorage.getItem("precalc_token");
  const user = localStorage.getItem("precalc_user");

  // If no token, redirect to login
  if (!token || !user) {
    if (!window.location.pathname.includes("login.html")) {
      window.location.href = "/login.html";
    }
  }
})();
