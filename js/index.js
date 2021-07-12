// get elements
const questionBtn = document.querySelectorAll(".jeopardy__button");
const modal = document.getElementById("myModal");
const btn = document.getElementById("ansBtn");
const span = document.getElementsByClassName("close")[0];
const question__desc = document.getElementById("question__desc");
const modal__button__submit = document.getElementById("modal__button__submit");
const modal__button__pass = document.getElementById("modal__button__pass");
const input = document.getElementById("modal__input");

// scores
let userScore = document.getElementById("jeopardy__userScore");
let computer1Score = document.getElementById("jeopardy__compScore1");
let computer2Score = document.getElementById("jeopardy__compScore2");

//how many questions there are still active
let totalQuestions = 25;
let currentQuestion = "";

//when user clicks a question
questionBtn.forEach(
  (i) =>
    (i.onclick = (e) => {
      console.log(e.target.innerText);
      question__desc.innerHTML = `Topic 1 - ${e.target.innerText}`;
      modal.style.display = "block";
      currentQuestion = e;
    })
);

//when user passes the question
modal__button__pass.onclick = () => {
  modal.style.display = "none";
  currentQuestion = "";
  input.value = "";
};

//when user submits their answer
modal__button__submit.onclick = (e) => {
  console.log(currentQuestion);
  const num = parseInt(currentQuestion.target.innerText.replace(/[^0-9]/, ""));
  console.log(num);
  if (true) {
    userScore.innerHTML = parseInt(userScore.innerText) + num;
  } else if (true) {
    userScore.innerHTML = parseInt(userScore.innerText) - num;
  }
  currentQuestion.target.style.visibility = "hidden";
  currentQuestion = "";
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    currentQuestion = "";
  }
};
