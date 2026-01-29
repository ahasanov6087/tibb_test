/* condition.js */

/* DATA comes from SALAM.js */
const originalData = DATA;

let conditionIndex = 0;
let questionIndex = 0;

/* Randomize conditions only - keep questions in original order */
const data = originalData
  .map(condition => ({
    ...condition,
    questions: [...condition.questions]
  }))
  .sort(() => Math.random() - 0.5); // Shuffle conditions only

/* store answers - match the randomized structure */
let state = data.map(c => Array(c.questions.length).fill(null));

const conditionEl = document.getElementById("condition");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const counterEl = document.getElementById("counter");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* LOAD */
function load() {
  const condition = data[conditionIndex];
  const q = condition.questions[questionIndex];

  conditionEl.innerText = condition.condition;

  counterEl.innerText =
    `Məsələ ${conditionIndex + 1} / ${data.length} · ` +
    `Sual ${questionIndex + 1} / ${condition.questions.length}`;

  // Update question text if it exists
  if (questionEl) {
    questionEl.innerText = q.question || `Sual ${questionIndex + 1}`;
  }

  answersEl.innerHTML = "";

  nextBtn.disabled = state[conditionIndex][questionIndex] === null;
  prevBtn.disabled = conditionIndex === 0 && questionIndex === 0;

  const letters = ["A", "B", "C", "D", "E"];

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.innerText = letters[i];

    btn.appendChild(letter);
    btn.appendChild(document.createTextNode(opt));

    if (state[conditionIndex][questionIndex] !== null) {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add("correct");
      if (i === state[conditionIndex][questionIndex] && i !== q.correct) {
        btn.classList.add("wrong");
      }
    } else {
      btn.onclick = () => answer(i);
    }

    answersEl.appendChild(btn);
  });
}

/* ANSWER */
function answer(choice) {
  if (state[conditionIndex][questionIndex] !== null) return;
  state[conditionIndex][questionIndex] = choice;
  load();
}

/* NEXT */
nextBtn.onclick = () => {
  const condition = data[conditionIndex];

  if (questionIndex < condition.questions.length - 1) {
    questionIndex++;
  } else if (conditionIndex < data.length - 1) {
    conditionIndex++;
    questionIndex = 0;
  }

  load();
};

/* PREVIOUS */
prevBtn.onclick = () => {
  if (questionIndex > 0) {
    questionIndex--;
  } else if (conditionIndex > 0) {
    conditionIndex--;
    questionIndex = data[conditionIndex].questions.length - 1;
  }

  load();
};

/* Reset and re-randomize conditions */
function resetWithNewRandomization() {
  // Re-randomize conditions only
  const newData = originalData
    .map(condition => ({
      ...condition,
      questions: [...condition.questions]
    }))
    .sort(() => Math.random() - 0.5);
  
  // Update the data array
  data.length = 0;
  data.push(...newData);
  
  // Reset indices
  conditionIndex = 0;
  questionIndex = 0;
  
  // Reset answers state
  state = data.map(c => Array(c.questions.length).fill(null));
  
  // Reload
  load();
}
function goHome() {
    window.location.href = "index1.html";
}

/* INIT */
load();