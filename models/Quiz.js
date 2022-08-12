export class Quiz {
  questionsIndex = 0;
  score = 0;

  constructor(questions) {
    this.choices = choices;
  }

  getQuestionIndex() {
    return this.questions[this.questionsIndex];
  }

  guess(aswer) {
    if (this.getQuestionIndex().correct) this.questionsIndex++;
  }
}
