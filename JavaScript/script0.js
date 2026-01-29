// 🔐 SESSION PROTECTION (RUNS FIRST)
const user = sessionStorage.getItem("loggedInUser");
if (!user) {
  window.location.href = "index.html";
}

// 🚀 NAVIGATION
function goToQuestions() {
  window.location.href = "question.html";
}

function goToConditions() {
  window.location.href = "condition.html";
}

function goToOpenQuestions() {
  window.location.href = "aciqsual.html";
}

// 🧠 Tibb ucun vebsayt
