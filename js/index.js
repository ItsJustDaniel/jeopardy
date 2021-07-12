// get elements
const questionBtn = document.querySelectorAll(".jeopardy__button");
const modal = document.getElementById("myModal");
const btn = document.getElementById("ansBtn");
const span = document.getElementsByClassName("close")[0];
const question__desc = document.getElementById("question__desc");

// scores
let userScore = 0;
let computer1Score = 0;
let computer2Score = 0;

questionBtn.forEach(
  (i) =>
    (i.onclick = (e) => {
      console.log(e.target.innerText);
      question__desc.innerHTML = `Topic 1 - ${e.target.innerText}`;
      modal.style.display = "block";
    })
);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
