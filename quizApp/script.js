const questions = [
  {
    question: "Which is the largest country of the world?",
    answers: [
      { text: "Russia", correct: true },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: false },
    ],
  },
  {
    question: "Which is the fastest animal in the world?",
    answers: [
      { text: "cow", correct: false },
      { text: "buffalo", correct: false },
      { text: "cheetah", correct: true },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Diamond", correct: true },
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Silver", correct: false },
    ],
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    answers: [
      { text: "Nitrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
    ],
  },
];

const questionCont = document.querySelector(".question-cont h3");
const answerCont = document.querySelector(".answer-cont");
const nextBtn = document.querySelector("#next-btn");
let questionIdx = -1;
let score = 0;
function startQuiz() {
  questionIdx += 1;
  if (questionIdx < questions.length) {
    getQuestion(questionIdx);
    nextBtn.style.display = "none"; // Hide next button until an answer is selected
  } else {
    /// Optionally handle the end of the quiz here
    questionCont.innerHTML = "Quiz Completed!";
    answerCont.innerHTML = `<h3>Score : ${score}/${questionIdx} </h3>`;
    nextBtn.style.display = "none";
  }
}

function getQuestion(questionIdx) {
  // Set the question text
  questionCont.innerHTML = questions[questionIdx].question;

  // Clear previous answer buttons
  answerCont.innerHTML = "";

  // Create buttons for each answer
  questions[questionIdx].answers.forEach((answer) => {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = answer.text;

    // Add event listener to handle answer selection
    btn.addEventListener("click", () => {
      // Disable all buttons once an answer is clicked
      const allButtons = document.querySelectorAll(".btn");
      allButtons.forEach((button) => {
        button.disabled = true;
      });

      // Check if the selected answer is correct
      if (answer.correct) {
        btn.classList.add("correct"); // Green background for correct answer
        score++;
      } else {
        btn.classList.add("incorrect"); // Red background for wrong answer

        // Highlight the correct answer in green
        const correctBtn = Array.from(allButtons).find(
          (button) =>
            questions[questionIdx].answers.find((ans) => ans.correct).text ===
            button.innerHTML
        );
        correctBtn.classList.add("correct");
      }

      nextBtn.style.display = "block"; // Show the next button after an answer is selected
    });

    // Append the button to the answer container
    answerCont.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  startQuiz();
});

// Start the quiz when the page loads or based on some event
startQuiz();
