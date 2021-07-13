// get topic name
const topicName = document.querySelectorAll(".jeopardy__topic");

let topics = [];
let questionsList = [];
let questions = [];
let finalQuestion = "";

function changeTopicName() {
  for (let i = 0; i < topicName.length; i++) {
    topicName[i].innerHTML = topics[i];
  }
}

const findFinalQuestion = () => {
  highestValue = 0;
  for (let i = 0; i < questionsList.length; i++) {
    for (let e = 0; e < questionsList[i].length; e++) {
      if (
        !isNaN(questionsList[i][e].value) &&
        questionsList[i][e].value > highestValue
      ) {
        highestValue = questionsList[i][e].value;
        finalQuestion = questionsList[i][e];
      }
    }
  }
};

const getJeopardyApi = async () => {
  const getClues = await fetch("http://jeopardy--api.herokuapp.com/");
  const data = await getClues.json();
  questionsList = data;
  for (let i = 0; i < data.length; i++) {
    topics = topics.concat(data[i][0].category.title);

    let posQuestions = [];
    for (let e = 0; e < data[i].length; e++) {
      if (!isNaN(data[i][e].value)) {
        posQuestions.push(data[i][e]);
      }
    }
    posQuestions.sort((a, b) => (a.value - b.value ? 1 : -1));
    questions.push(posQuestions.slice(0, 5));
  }
  questions = data;
  changeTopicName();
  findFinalQuestion();

  return getClues;
};
getJeopardyApi();
