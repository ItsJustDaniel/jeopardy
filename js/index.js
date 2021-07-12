// get elements
const topicName = document.querySelectorAll(".jeopardy__topic");
const questionBtn = document.querySelectorAll(".jeopardy__button");
const modal = document.getElementById("myModal");
const btn = document.getElementById("ansBtn");
const span = document.getElementsByClassName("close")[0];
const question__desc = document.getElementById("question__desc");
const modal__button__submit = document.getElementById("modal__button__submit");
const modal__button__pass = document.getElementById("modal__button__pass");
const input = document.getElementById("modal__input");
const questionShown = document.getElementById("modal__question");
// scores
let userScore = document.getElementById("jeopardy__userScore");
let computer1Score = document.getElementById("jeopardy__compScore1");
let computer2Score = document.getElementById("jeopardy__compScore2");

//how many questions there are still active
let totalQuestions = 25;
let currentQuestion = "";
let topics = [
  "prehistoric times",
  "acting families",
  "world city walk",
  "scuba dooby doo",
  "historic americans",
];
let questionIndex1 = "";
let questionIndex2 = "";

async function getApi() {
  // topics = topics.concat(await getCategories());
  // changeTopicName();
  console.log(questions);
}
getApi();

const findCategory = (e) => {
  let topic = e.dataset.topic;
  for (let i = 0; i < topics.length; i++) {
    if (i == topic - 1) {
      console.log(topics);
      return topics[i].title;
    }
  }
};

const changeTopicName = () => {
  for (let i = 0; i < topicName.length; i++) {
    console.log(topics);
    // topicName[i].innerHTML = await findCategory(topicName[i]);
    topicName[i].innerHTML = topics[i];
  }
};
changeTopicName();

//when user clicks a question
questionBtn.forEach(
  (i) =>
    (i.onclick = (e) => {
      currentQuestion = e;
      const num = parseInt(
        currentQuestion.target.innerText.replace(/[^0-9]/, "")
      );
      const category = findCategory(e.target);
      console.log(e.target.dataset.topic);
      console.log(
        questions[e.target.dataset.topic - 1][
          parseInt(currentQuestion.target.innerText[1]) - 1
        ]
      );

      questionShown.innerHTML =
        questions[e.target.dataset.topic - 1][
          parseInt(currentQuestion.target.innerText[1]) - 1
        ].question;
      questionIndex1 = e.target.dataset.topic - 1;
      questionIndex2 = parseInt(currentQuestion.target.innerText[1]) - 1;

      question__desc.innerHTML = `${category} - ${e.target.innerText}`;

      modal.style.display = "block";
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
  if (questions[questionIndex1][questionIndex2].answer == input.value) {
    userScore.innerHTML = parseInt(userScore.innerText) + num;
  } else {
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
