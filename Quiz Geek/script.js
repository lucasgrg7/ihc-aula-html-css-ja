const questions = [
  {
    question: "Qual é o nome completo do protagonista?",
    answers: [
      "Naruto Uchiha",
      "Naruto Uzumaki",
      "Naruto Hyuga",
      "Naruto Senju"
    ],
    correct: 1
  },
  {
    question: "Qual é o nome da raposa de nove caudas selada no Naruto?",
    answers: [
      "Shukaku",
      "Kurama",
      "Matatabi",
      "Gyuki"
    ],
    correct: 1
  },
  {
    question: "Quem é o rival principal do Naruto?",
    answers: [
      "Kakashi",
      "Sasuke",
      "Itachi",
      "Gaara"
    ],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;

  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  document.getElementById("feedback").textContent = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;

    btn.onclick = () => {
      if (!answered) {
        checkAnswer(index);
        answered = true;
      }
    };

    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    feedback.textContent = "✅ Acertou!";
    score++;
  } else {
    feedback.textContent = "❌ Errou!";
  }
}

function nextQuestion() {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("finalScore").textContent =
    "Você acertou " + score + " de " + questions.length + " perguntas!";
}

loadQuestion();