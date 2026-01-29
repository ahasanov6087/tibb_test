// 🔐 SESSION PROTECTION (RUNS FIRST)
const user = sessionStorage.getItem("loggedInUser");
if (!user) {
  window.location.href = "index.html";
}


