export class UI {
  constructor() {}

  /**
   *
   * @param {string} text pregunta a renderizar
   */
  showQuestion(text) {
    const questionTitle = document.querySelector("#question");
    questionTitle.textContent = text;
  }

  /**
   *
   * @param {string[]} choices las opciones de la pregunta
   */
  showChoices(choices, callback) {
    const choicesContainer = document.querySelector("#choices");
    choicesContainer.textContent = "";
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.textContent = choices[i];
      button.className = "btn";
      button.addEventListener("click", () => callback(choices[i]));
      choicesContainer.appendChild(button);
    }
  }
  /**
   * @param {number} score puntuacion total
   */
  showScores(score) {
    const scoreHtml = `
        <h1>Result</h1>
        <h2 class="score">Your Score: ${score}</h2>
    `;
    const element = document.querySelector("#quiz");
    element.innerHTML = scoreHtml;
  }


  /**
   * 
   * @param {number} currentIndex index del quiz
   * @param {number} total total de preguntas
   */
  showProgress(currentIndex, total) {
    const el = document.querySelector("#progress")
    el.innerHTML = `Question ${currentIndex} of ${total}`
  }
}
