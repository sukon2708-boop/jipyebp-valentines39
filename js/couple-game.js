const questions = [
  {
    q: "แกขอเราเป็นแฟนที่ไหน?",
    c: ["หัวหิน", "พัทยา", "อ่างแก้ว"],
    correct: 2
  },
  {
    q: "ใครเอาแต่ใจมากกว่ากัน?",
    c: ["Nemo", "Bank", "Both of us"],
    correct: 0
  },
  {
    q: "ใครใส่ใจอีกคนมากกว่า?",
    c: ["Nemo", "Bank", "Both of us"],
    correct: 2
  },
  {
    q: "ใครบอกคิดถึงอีกคนตลอด?",
    c: ["Nemo", "Bank"],
    correct: 1
  },
  {
    q: "ใครรักมากกว่า?",
    c: ["Nemo", "Bank"],
    correct: 1
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
