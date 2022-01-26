var question = [
  { question: "1", model: "question 1" },
  { question: "2", model: "question 2" },
  { question: "3", model: "question 3" },
  { question: "4", model: "question 4" },
  { question: "5", model: "question 5" },
];

function clickStart() {
  var buttonEl = document.getElementById("start");
  buttonEl.remove();

  for (var i = 0; i < question.length; i++) {
    var question = document.getElementById("question");
    question.innerHTML = question[i].question;
  }
}
