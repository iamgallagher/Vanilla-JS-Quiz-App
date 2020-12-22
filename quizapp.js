const quizData = [
  {
    question: "What is the biggest animal in the world?",
    a: "Blue Whale",
    b: "Giant Squid",
    c: "Elephant",
    d: "Hippopotamus",
    correct: "a",
  },
  {
    question: "What is the capital of Iceland?",
    a: "Dublin",
    b: "Yorkshire",
    c: "Baltimore",
    d: "Reykjavik",
    correct: "d",
  },
  {
    question: "Which rappers real name is Dylan Kwabena Mills?",
    a: "Da Baby",
    b: "Lil Uzi",
    c: "Dizze Rascal",
    d: "Slim Thug",
    correct: "c",
  },
  {
    question: "What is the strongest muscle in the body?",
    a: "Masseter",
    b: "Glute",
    c: "Bicep",
    d: "Tricep",
    correct: "a",
  },
  {
    question: "What does He stand for in the periodic table?",
    a: "Henna",
    b: "Hexium",
    c: "Helium",
    d: "Hexidus",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
      
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
