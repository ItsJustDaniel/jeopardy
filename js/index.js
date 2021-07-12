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
const answer = document.getElementById("modal__answer");
// scores
let userScore = document.getElementById("jeopardy__userScore");
let computer1Score = document.getElementById("jeopardy__compScore1");
let computer2Score = document.getElementById("jeopardy__compScore2");

console.log(questionBtn);

//active questions
let activeQuestions = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

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
let currentQuestionIndex = 0;

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
  (i, index) =>
    (i.onclick = (e) => {
      currentQuestion = e;
      currentQuestionIndex = index;
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
  currentQuestion.target.style.visibility = "hidden";
  currentQuestion = "";
  input.value = "";
  AI1();
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
    modal__answer.innerHTML = questions[questionIndex1][questionIndex2].answer;
  }
  console.log(currentQuestionIndex);
  activeQuestions.splice(activeQuestions.indexOf(currentQuestionIndex), 1);

  console.log(activeQuestions);
  console.log(questionBtn);
  setTimeout(() => {
    currentQuestion.target.style.visibility = "hidden";
    currentQuestion = "";
    input.value = "";
    modal.style.display = "none";
    modal__answer.innerHTML = "";
  }, 1500);
  setTimeout(() => {
    AI1();
  }, 2500);
};

//Ai's turn
const AI1 = () => {
  const randomQuestion = Math.floor(
    Math.random() * (activeQuestions.length + 1)
  );
  const isWon = Math.floor(Math.random() * 2);
  questionBtn[activeQuestions[randomQuestion]].style.visibility = "hidden";
  const num = parseInt(
    questionBtn[activeQuestions[randomQuestion]].innerHTML.replace(
      /[^0-9]/g,
      ""
    )
  );

  if (isWon === 1) {
    computer1Score.innerHTML = parseInt(computer1Score.innerText) + num;
  } else {
    computer1Score.innerHTML = parseInt(computer1Score.innerText) - num;
  }
  activeQuestions.splice(randomQuestion, 1);
  console.log(activeQuestions);
  console.log(questionBtn);

  setTimeout(() => {
    AI2();
  }, 1000);
};

const AI2 = () => {
  console.log(activeQuestions);
  const randomQuestion = Math.floor(
    Math.random() * (activeQuestions.length + 1)
  );
  const isWon = Math.floor(Math.random() * 2);
  questionBtn[activeQuestions[randomQuestion]].style.visibility = "hidden";
  const num = parseInt(
    questionBtn[activeQuestions[randomQuestion]].innerHTML
      .replace(/[^0-9]/g, "")
      .trim()
  );
  console.log(num);
  if (isWon === 1) {
    computer2Score.innerHTML = parseInt(computer2Score.innerText) + num;
  } else {
    computer2Score.innerHTML = parseInt(computer2Score.innerText) - num;
  }

  activeQuestions.splice(randomQuestion, 1);
  console.log(activeQuestions);
  console.log(questionBtn);
};
