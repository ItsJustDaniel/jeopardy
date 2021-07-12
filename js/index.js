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
const modal__answer = document.getElementById("modal__answer");
const modal__double = document.getElementById("Modal__double");
const bet__double = document.getElementById("modal__button__submit__double");
const modal__input__double = document.getElementById("modal__input__double");
const modal__note__double = document.getElementById("modal__note__double");
const bet__pass = document.getElementById("modal__button__pass__double");
const modal__title__double = document.getElementById("modal__title__double");
const ending__screen = document.getElementById("ending__screen");
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

console.log(questions);

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

//checks if question is a double or not or if its final jeopardy
let isDouble = false;
let isFinal = false;

// picks a random question to be a daily double
const RandomDaily = Math.floor(Math.random() * 26);
questionBtn[RandomDaily].dataset.daily = true;

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
console.log(RandomDaily);

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

      const category = topics[e.target.dataset.topic - 1];
      questionShown.innerHTML =
        questions[e.target.dataset.topic - 1][
          parseInt(currentQuestion.target.innerText[1]) - 1
        ].question;
      questionIndex1 = e.target.dataset.topic - 1;
      questionIndex2 = parseInt(currentQuestion.target.innerText[1]) - 1;
      question__desc.innerHTML = `${category} - ${e.target.innerText}`;

      modal.style.display = "block";
      console.log(e.target.dataset.daily);
      if (e.target.dataset.daily) {
        console.log("daily is true");
        modal__double.style.display = "block";
        modal.style.display = "none";
        return;
      }
    })
);

//when user passes the question
modal__button__pass.onclick = () => {
  if (isFinal) {
    setTimeout(() => {
      input.value = "";
      modal.style.display = "none";
      modal__answer.innerHTML = "";
      if (userScore > computer1Score && userScore > computer2Score) {
        ending__screen.innerHTML = "You Won! Congratulations";
      } else if (userScore < computer1Score || userScore < computer2Score) {
        ending__screen.innerHTML = "You Lost! Try Again Next time!";
      }
    }, 1000);
    return;
  }
  modal.style.display = "none";
  currentQuestion.target.style.visibility = "hidden";
  currentQuestion = "";
  input.value = "";
  setTimeout(() => {
    AI1();
  }, 500);
};

if (true && false) {
  console.log("s");
}

//when user submits their answer
modal__button__submit.onclick = (e) => {
  let num;
  if (isFinal) {
    if (isDouble) {
      if (isNaN(parseInt(modal__input__double.value))) {
        num = 0;
        console.log(num);
      } else {
        num = parseInt(modal__input__double.value);
      }
      console.log(num);
      modal__input__double.value = "";
      isDouble = false;
    }
    console.log(parseInt(userScore.innerText));
    console.log(num);
    console.log(parseInt(userScore.innerText) + num);

    if (finalQuestion.answer === input.value) {
      userScore.innerHTML = parseInt(userScore.innerText) + num;
      modal__answer.innerHTML = `Correct! - the answer was ${finalQuestion.answer}`;
    } else {
      userScore.innerHTML = parseInt(userScore.innerText) - num;
      modal__answer.innerHTML = `Wrong! - the answer was "${finalQuestion.answer}"`;
    }
    setTimeout(() => {
      input.value = "";
      modal.style.display = "none";
      modal__answer.innerHTML = "";
      if (
        userScore.innerHTML > computer1Score &&
        userScore.innerHTML > computer2Score
      ) {
        ending__screen.innerHTML = "You Won! Congratulations";
      } else if (
        userScore.innerHTML < computer1Score ||
        userScore.innerHTML < computer2Score
      ) {
        ending__screen.innerHTML = "You Lost! Try Again Next time!";
      }
      ending__screen.style.visibility = "visible";
    }, 1000);
    return;
  }

  console.log(isFinal);
  num = parseInt(currentQuestion.target.innerText.replace(/[^0-9]/, ""));
  console.log(num);
  if (isDouble) {
    num = parseInt(modal__input__double.value);
    console.log(num);
    modal__input__double.value = "";
    isDouble = false;
  }

  if (questions[questionIndex1][questionIndex2].answer == input.value) {
    userScore.innerHTML = parseInt(userScore.innerText) + num;
    modal__answer.innerHTML = `Correct! - the answer was ${questions[questionIndex1][questionIndex2].answer}`;
  } else {
    userScore.innerHTML = parseInt(userScore.innerText) - num;
    modal__answer.innerHTML = `Wrong! - the answer was "${questions[questionIndex1][questionIndex2].answer}"`;
  }
  console.log(currentQuestionIndex);
  activeQuestions.splice(activeQuestions.indexOf(currentQuestionIndex), 1);

  console.log(activeQuestions);
  console.log(questionBtn);

  console.log(activeQuestions.length);
  //final jeopardy
  if (activeQuestions.length === 0) {
    isDouble = true;
    isFinal = true;

    modal__title__double.innerHTML = "Final Jeopardy!";

    setTimeout(() => {
      modal__double.style.display = "block";
      modal.style.display = "none";
      finalJeopardy();
    }, 1000);
  }

  setTimeout(() => {
    currentQuestion.target.style.visibility = "hidden";
    currentQuestion = "";
    input.value = "";
    modal.style.display = "none";
    modal__answer.innerHTML = "";
  }, 1500);
  setTimeout(() => {
    AI1();
  }, 2000);
};

bet__double.onclick = () => {
  console.log(parseInt(modal__input__double.value));
  if (
    parseInt(modal__input__double.value) > parseInt(userScore.innerText) ||
    isNaN(parseInt(modal__input__double.value))
  ) {
    modal__note__double.innerHTML =
      "the money your betting cannot be bigger than your current score!";
    return;
  }
  if (!Math.sign(parseInt(modal__input__double))) {
    modal__note__double.innerHTML = "you cant bet if you have negatives!";
  }
  modal__double.style.display = "none";
  modal.style.display = "block";
  isDouble = true;
};

bet__pass.onclick = () => {
  modal__double.style.display = "none";
  modal.style.display = "block";
};

//Ai's turn
const AI1 = () => {
  const randomQuestion = Math.floor(Math.random() * activeQuestions.length);
  const isWon = Math.floor(Math.random() * 2);
  console.log(questionBtn[activeQuestions[randomQuestion]]);
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

  if (activeQuestions.length === 0) {
    isDouble = true;
    isFinal = true;

    modal__title__double = "Final Jeopardy!";

    setTimeout(() => {
      modal__double.style.display = "block";
      modal.style.display = "none";
      finalJeopardy();
    }, 1000);
  }

  setTimeout(() => {
    AI2();
  }, 1000);
};

const AI2 = () => {
  console.log(activeQuestions);
  const randomQuestion = Math.floor(Math.random() * activeQuestions.length);
  const isWon = Math.floor(Math.random() * 2);
  console.log(questionBtn[activeQuestions[randomQuestion]]);
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

  if (activeQuestions.length === 0) {
    isDouble = true;
    isFinal = true;

    modal__title__double = "Final Jeopardy!";

    setTimeout(() => {
      modal__double.style.display = "block";
      modal.style.display = "none";
      finalJeopardy();
    }, 1000);
  }
};

const finalJeopardy = () => {
  modal__double.style.display = "block";
  modal.style.display = "none";
  questionShown.innerHTML = finalQuestion.question;
};
