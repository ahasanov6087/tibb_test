let order = [...questions.keys()].sort(() => Math.random() - 0.5);
let i = 0;
let state = [];
let t = 0;
let f = 0;

function load() {
  let q = questions[order[i]];
  
  // Update question text
  document.getElementById("q").innerText = q.question;
  
  // Update question counter
  document.getElementById("questionCounter").innerText = `Sual ${i + 1} / ${questions.length}`;
  
  // Clear answers
  let a = document.getElementById("a");
  a.innerHTML = "";
  
  // Create answer buttons
  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((o, idx) => {
    let b = document.createElement("button");
    b.className = "answer-btn";
    b.setAttribute("aria-label", `Cavab seçimi: ${o}`);
    
    // Create letter indicator
    let letterSpan = document.createElement("span");
    letterSpan.className = "answer-letter";
    letterSpan.innerText = letters[idx];
    b.appendChild(letterSpan);
    
    // Add answer text
    let textSpan = document.createElement("span");
    textSpan.innerText = o;
    b.appendChild(textSpan);
    
    // Handle answered state
    if (state[i] != null) {
      b.disabled = true;
      if (idx === q.correct) b.classList.add("correct");
      if (idx === state[i] && idx !== q.correct) b.classList.add("wrong");
    } else {
      b.onclick = () => answer(idx);
    }
    
    a.appendChild(b);
  });
  
  // Update navigation buttons
  document.getElementById("next").disabled = state[i] == null;
  updateProgress();
}

function answer(x) {
  let q = questions[order[i]];
  state[i] = x;
  
  // Update stats
  if (x === q.correct) {
    t++;
    document.getElementById("t").innerText = t;
  } else {
    f++;
    document.getElementById("f").innerText = f;
  }
  
  // Reload to show correct/wrong answers
  load();
}

function next() {
  if (i < questions.length - 1) {
    i++;
    load();
    // Scroll to top on mobile
    if (window.innerWidth < 900) {
      document.querySelector('.content').scrollTop = 0;
    }
  }
}

function prev() {
  if (i > 0) {
    i--;
    load();
    // Scroll to top on mobile
    if (window.innerWidth < 900) {
      document.querySelector('.content').scrollTop = 0;
    }
  }
}

function updateProgress() {
  let done = state.filter(v => v != null).length;
  let percent = Math.round(done / questions.length * 100);
  
  // Update progress bar
  document.getElementById("bar").style.width = percent + "%";
  
  // Update progress text
  document.getElementById("progressText").innerText =
    `İcra olunub: ${done} / ${questions.length} (${percent}%)`;
}

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
  // Left arrow for previous
  if (e.key === 'ArrowLeft' && i > 0) {
    prev();
  }
  
  // Right arrow for next (only if answered)
  if (e.key === 'ArrowRight' && state[i] != null && i < questions.length - 1) {
    next();
  }
  
  // Number keys 1-4 for answering
  if (e.key >= '1' && e.key <= '4' && state[i] == null) {
    const idx = parseInt(e.key) - 1;
    if (idx < questions[order[i]].options.length) {
      answer(idx);
    }
  }
  
  // A, B, C, D keys for answering
  if (e.key >= 'a' && e.key <= 'd' && state[i] == null) {
    const idx = e.key.charCodeAt(0) - 97; // 'a' -> 0, 'b' -> 1, etc.
    if (idx < questions[order[i]].options.length) {
      answer(idx);
    }
  }
});
function goHome() {
    window.location.href = "index.html";
}


// Initialize the app
load();