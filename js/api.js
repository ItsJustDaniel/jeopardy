// get topic name
const topicName = document.querySelectorAll(".jeopardy__topic");

let topics = [];
let questionsList = [];
let questions = [];
let finalQuestion = "";

function changeTopicName() {
  console.log(topicName);
  for (let i = 0; i < topicName.length; i++) {
    topicName[i].innerHTML = topics[i];
  }
}

const getJeopardyApi = async () => {
  const getClues = await fetch("http://jeopardy--api.herokuapp.com/");
  const data = await getClues.json();

  for (let i = 0; i < data.length; i++) {
    topics = topics.concat(data[i][0].category.title);

    let posQuestions = [];
    for (let e = 0; e < data[i].length; e++) {
      if (!isNaN(data[i][e].value)) {
        posQuestions.push(data[i][e]);
      }
    }
    posQuestions.sort((a, b) => (a.value - b.value ? 1 : -1));
    console.log(posQuestions);
    questions.push(posQuestions.slice(0, 5));
    console.log(questions);
  }
  questions = data;
  changeTopicName();
  console.log(topics);
  console.log(questions);
  return getClues;
};
getJeopardyApi();

console.log(topics);
