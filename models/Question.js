export class Question {
  /**
   *
   * @param {string} text   texto de la pregunta
   * @param {string[]} choices  Opciones de la pregunta
   * @param {string} answer Respuesta de la pregunta
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice Algun text para adivinar
   * @returns {boolean} return true si choice es igual a answer
   */
  currentAnswer(choice) {
    return choice === this.answer;
  }
}
