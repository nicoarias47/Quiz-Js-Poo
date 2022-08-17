import { questions } from "./data/question.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/Ui.js";

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    console.log(quiz.score);
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
