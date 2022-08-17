// @ts-check

import { Question } from "./Question.js";

export class Quiz {
  score = 0;
  questionIndex = 0;

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }
  /**
   *
   * @returns {Question} Pregunta encontrada
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  /**
   *
   * @param {string} answer espera respuesta correcta
   */
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }
}
